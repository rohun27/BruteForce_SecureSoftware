const credentials = {
  username: 'admin',
  password: 'Giraffe#123Password'
};

let loginAttempts = 0;
let isAccountLocked = false;
let lockoutTimeout = null;


function lockAccount() {
  isAccountLocked = true;
  alert('Account locked due to excessive login attempts. Please try again later.');
  lockoutTimeout = setTimeout(() => {
    isAccountLocked = false;
    loginAttempts = 0;
  }, 300000); 
}


function generateCaptcha() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captchaCode = '';
  for (let i = 0; i < 6; i++) {
    captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captchaCode;
}


function validateCaptcha(userInput, captchaCode) {
  return userInput.toUpperCase() === captchaCode.toUpperCase();
}


document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const captchaInput = document.getElementById('captcha-input').value;
  const captchaCode = document.getElementById('captcha-code').textContent;

  
  if (isAccountLocked) {
    alert('Account is locked. Please try again later.');
    return;
  }

  
  if (!validateCaptcha(captchaInput, captchaCode)) {
    alert('Invalid CAPTCHA code. Please try again.');
    return;
  }

  
  if (username === credentials.username && password === credentials.password) {
    
    alert('Login successful! Welcome to QuickCarSpecs!');
    
    window.location.href ='file:///C:/Users/rohun/login/website/web.html';
    loginAttempts = 0; 
  } else {
    
    loginAttempts++;
    alert('Invalid username or password. Please try again.');

   
    if (loginAttempts >= 3) {
      lockAccount();
    }
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const captchaCode = generateCaptcha();
  document.getElementById('captcha-code').textContent = captchaCode;
});