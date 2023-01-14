//
String.prototype.toCamelCase = function () {
    let camelCase = [];

    // used to keep track for white sapces & convert the next letter to upperCase
    let isWhiteSpace = false;

    // removing extra white space from string ending & middle of the string if present & converting them to lowercase
    // "  i WRITE     code    " becomes "i write code"
    let word = this.replaceAll(/\s+/gi, " ").trim().toLowerCase();

    for (let letter of word) {
        // if white space is present then just setting the isWhiteSpace flag to true
        if (letter === " ") {
            isWhiteSpace = true;
        }

        // if isWhiteSpace flag is true and current letter is not whitesapce then
        //convert this letter to uppercase and push this letter to camelcase array
        if (isWhiteSpace && letter !== " ") {
            camelCase.push(letter.toUpperCase());
            isWhiteSpace = false;
        } else if (letter !== " ") {
            // regular case when letter is not whitesapce
            camelCase.push(letter);
        }
    }

    return camelCase.join("");
};

String.prototype.toPascleCase = function () {
    let pascleCase = [];

    // used to keep track for white sapces & convert the next letter to upperCase
    let isWhiteSpace = false;

    // removing extra white space from string ending & middle of the string if present & converting them to lowercase
    // "  i WRITE     code    " becomes "i write code"
    let word = this.replaceAll(/\s+/gi, " ").trim().toLowerCase();

    for (let letter of word) {
        // if white space is present then just setting the isWhiteSpace flag to true
        if (letter === " ") {
            isWhiteSpace = true;
        }

        // if isWhiteSpace flag is true and current letter is not whitesapce then
        //convert this letter to uppercase and push this letter to camelcase array
        if (isWhiteSpace && letter !== " ") {
            pascleCase.push(letter.toUpperCase());
            isWhiteSpace = false;
        } else if (letter !== " ") {
            // regular case when letter is not whitesapce
            pascleCase.push(letter);
        }
    }
    pascleCase[0] = pascleCase[0].toUpperCase();
    return pascleCase.join("");
};

String.prototype.toSnakeCase = function () {
    let snakeCase = [];

    // used to keep track for white sapces & convert the next letter to upperCase
    let isWhiteSpace = false;

    // removing extra white space from string ending & middle of the string if present & converting them to lowercase
    // "  i WRITE     code    " becomes "i write code"
    let word = this.replaceAll(/\s+/gi, " ").trim().toLowerCase();

    for (let letter of word) {
        // if white space is present then just setting the isWhiteSpace flag to true
        if (letter === " ") {
            isWhiteSpace = true;
        }

        // if isWhiteSpace flag is true and current letter is not whitesapce then
        //convert this letter to uppercase and push this letter to camelcase array
        if (isWhiteSpace) {
            snakeCase.push("_");
            isWhiteSpace = false;
        } else if (letter !== " ") {
            // regular case when letter is not whitesapce
            snakeCase.push(letter);
        }
    }

    return snakeCase.join("");

    //one liner solution
    return this.trim().replaceAll(/\s+/gi, " ").toLowerCase().replaceAll(" ", "_");
};

String.prototype.toScreamingSnakeCase = function () {
    let snakeCase = [];

    // used to keep track for white sapces & convert the next letter to upperCase
    let isWhiteSpace = false;

    // removing extra white space from string ending & middle of the string if present & converting them to lowercase
    // "  i WRITE     code    " becomes "i write code"
    let word = this.replaceAll(/\s+/gi, " ").trim().toUpperCase();

    for (let letter of word) {
        // if white space is present then just setting the isWhiteSpace flag to true
        if (letter === " ") {
            isWhiteSpace = true;
        }

        // if isWhiteSpace flag is true and current letter is not whitesapce then
        //convert this letter to uppercase and push this letter to camelcase array
        if (isWhiteSpace) {
            snakeCase.push("_");
            isWhiteSpace = false;
        } else if (letter !== " ") {
            // regular case when letter is not whitesapce
            snakeCase.push(letter);
        }
    }

    return snakeCase.join("");

    //one liner solution
    return this.trim().replaceAll(/\s+/gi, " ").toUpperCase().replaceAll(" ", "_");
};

String.prototype.toKebabCase = function () {
    let kebabCase = [];

    // used to keep track for white sapces & convert the next letter to upperCase
    let isWhiteSpace = false;

    // removing extra white space from string ending & middle of the string if present & converting them to lowercase
    // "  i WRITE     code    " becomes "i write code"
    let word = this.replaceAll(/\s+/gi, " ").trim().toLowerCase();

    for (let letter of word) {
        // if white space is present then just setting the isWhiteSpace flag to true
        if (letter === " ") {
            isWhiteSpace = true;
        }

        // if isWhiteSpace flag is true and current letter is not whitesapce then
        //convert this letter to uppercase and push this letter to camelcase array
        if (isWhiteSpace) {
            kebabCase.push("-");
            isWhiteSpace = false;
        } else if (letter !== " ") {
            // regular case when letter is not whitesapce
            kebabCase.push(letter);
        }
    }

    return kebabCase.join("");

    //one liner solution
    return this.trim().replaceAll(/\s+/gi, " ").toLowerCase().replaceAll(" ", "-");
};

String.prototype.toScreamingKebabCase = function () {
    let kebabCase = [];

    // used to keep track for white sapces & convert the next letter to upperCase
    let isWhiteSpace = false;

    // removing extra white space from string ending & middle of the string if present & converting them to lowercase
    // "  i WRITE     code    " becomes "i write code"
    let word = this.replaceAll(/\s+/gi, " ").trim().toUpperCase();

    for (let letter of word) {
        // if white space is present then just setting the isWhiteSpace flag to true
        if (letter === " ") {
            isWhiteSpace = true;
        }

        // if isWhiteSpace flag is true and current letter is not whitesapce then
        //convert this letter to uppercase and push this letter to camelcase array
        if (isWhiteSpace) {
            kebabCase.push("-");
            isWhiteSpace = false;
        } else if (letter !== " ") {
            // regular case when letter is not whitesapce
            kebabCase.push(letter);
        }
    }

    return kebabCase.join("");

    //one liner solution
    return this.trim().replaceAll(/\s+/gi, " ").toUpperCase().replaceAll(" ", "-");
};

const input = document.getElementById("text");
const camelCase = document.getElementById("camel-case");
const pascleCase = document.getElementById("pascal-case");
const snakeCase = document.getElementById("snake-case");
const screamingSnakeCase = document.getElementById("screaming-snake-case");
const kebabCase = document.getElementById("kebab-case");
const screamingkebabCase = document.getElementById("screaming-kebab-case");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", () => {
    camelCase.textContent = input.value.toCamelCase();
    pascleCase.textContent = input.value.toPascleCase();
    snakeCase.textContent = input.value.toSnakeCase();
    screamingSnakeCase.textContent = input.value.toScreamingSnakeCase();
    kebabCase.textContent = input.value.toKebabCase();
    screamingkebabCase.textContent = input.value.toScreamingKebabCase();
});
