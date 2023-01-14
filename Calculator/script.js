let resultEl = document.querySelector(".textview");

let stack = [];
let operator = [];

let curNum = "";

let compute = [];

const isOperator = (num) => {
    if (num === "+" || num === "-" || num === "*" || num === "/" || num === "%") {
        return true;
    } else {
        return false;
    }
};

function insert(num) {
    if (!isNaN(num) || num === ".") {
        curNum += num;
        compute.push(num);
        resultEl.value = compute.join("");
    } else if (isOperator(num)) {
        stack.push(Number(curNum));
        curNum = "";
        operator.push(num);
        compute.push(num);
        resultEl.value = compute.join("");
    }
}

function equals() {
    // add second number
    stack.push(Number(curNum));
    curNum = "";

    let firstDig = stack[0];
    let secondDig = stack[1];
    console.log(firstDig, secondDig);
    let res = 0;

    switch (operator[0]) {
        case "+": {
            res = firstDig + secondDig;
            break;
        }
        case "-": {
            res = firstDig - secondDig;
            break;
        }
        case "*": {
            res = firstDig * secondDig;
            break;
        }
        case "/": {
            res = firstDig / secondDig;
            break;
        }
        case "%": {
            res = firstDig % secondDig;
            break;
        }
        default:
            res = 0;
    }

    compute.push(`=${res}`);
    resultEl.value = compute.join("");
    stack = [];
    operator = [];
    compute = [];
}

function clean() {
    stack = [];
    operator = [];
    compute = [];
    resultEl.value = 0;
}

function back() {
    if (stack.length === 0) {
        resultEl.value = 0;
        return;
    }
    let popped = compute.pop();
    if (isNaN(popped)) {
        operator.pop();
    }
    curNum = "";
    resultEl.value = compute.join("");
}
