const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=|}{[]?><~";

function generatePassword() {
    let length = parseInt(lengthInput.value);
    let availableChars = "";
    let password = "";

    if (uppercaseCheckbox.checked) {
        availableChars += uppercase;
    }
    if (lowercaseCheckbox.checked) {
        availableChars += lowercase;
    }
    if (numbersCheckbox.checked) {
        availableChars += numbers;
    }
    if (symbolsCheckbox.checked) {
        availableChars += symbols;
    }

    if (availableChars === "") {
        alert("Please select at least one character type");
        return;
    }

    for (let i = 0; i < length; i++) {
        password += availableChars[Math.floor(Math.random() * availableChars.length)];
    }

    passwordBox.value = password;
}

function copytext() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
    passwordBox.blur();
}

button.addEventListener("click", generatePassword);
