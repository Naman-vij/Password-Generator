console.log("hello");
const passwordbox = document.getElementById('password');
const length = 14;

const upperCase = "ASDFCVBGHNJMKUY";
const lowerCase = "asdfghjklqwertyuio";
const numbers = "1234567890";
const specialcase = "!@#%^&*";

const allchars = upperCase + lowerCase + numbers + specialcase;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += numbers[Math.floor(Math.random()* numbers.length)];
    password += specialcase[Math.floor(Math.random()* specialcase.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random()* allchars.length)];
    }

    passwordbox.value = password;

} 

function copypassword() {
    passwordbox.select();
    document.execCommand('copy');
}