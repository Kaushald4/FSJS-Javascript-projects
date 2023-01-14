const binaryInputEl = document.querySelector("#binary");
const submitBtnEl = document.querySelector(".btn");
const resultEl = document.querySelector(".result");

const convertBinaryToDecimal = (binaryNumber) => {
    let result = 0;
    let pow = 0;

    while (binaryNumber !== 0) {
        if (binaryNumber % 10 >= 2) {
            alert("Not a valid binary number");
            return 0;
        }
        result += 2 ** pow * (binaryNumber % 10);
        binaryNumber = Math.floor(binaryNumber / 10);
        pow++;
    }
    return result;
};

submitBtnEl.setAttribute("type", "button");
submitBtnEl.addEventListener("click", (e) => {
    if (binaryInputEl.value.length > 0) {
        let decimalNumber = convertBinaryToDecimal(Number(binaryInputEl.value));
        resultEl.textContent = `Decimal Number : ${decimalNumber}`;
        binaryInputEl.value = "";
    }
});
