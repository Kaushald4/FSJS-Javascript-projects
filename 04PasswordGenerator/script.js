const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
    if (resultEl.textContent) {
        navigator.clipboard.writeText(resultEl.textContent);
    }
});

generateEl.addEventListener("click", () => {
    generatePassword(
        lowercaseEl.checked,
        uppercaseEl.checked,
        numbersEl.checked,
        symbolsEl.checked,
        lengthEl.value
    );
});

function generatePassword(lower, upper, number, symbol, length) {
    let pass = [];

    for (let i = 0; i < length; i++) {
        if (lower) {
            pass.push(randomFunc.lower());
        }
        if (upper) {
            pass.push(randomFunc.upper());
        }
        if (number) {
            pass.push(randomFunc.number());
        }
        if (symbol) {
            pass.push(randomFunc.symbol());
        }
    }
    resultEl.textContent = pass.join("").substring(0, length);
}

function getRandomLower() {
    let words = "abcdefghijklmnopqrstuvwxyz";
    return words[Math.floor(Math.random() * 26)];
}

function getRandomUpper() {
    let words = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    return words[Math.floor(Math.random() * 26)];
}

function getRandomNumber() {
    let numbers = "123456789";
    return numbers[Math.floor(Math.random() * 8)];
}

function getRandomSymbol() {
    let symbols = "!@#$%^&*()_+}{?/>.<,\\'";
    return symbols[Math.floor(Math.random() * 21)];
}
