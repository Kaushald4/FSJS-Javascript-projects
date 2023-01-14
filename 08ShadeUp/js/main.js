function randompickerbtn() {
    const resultEl = document.getElementById("randomValuePara");
    const bgEl = document.getElementById("randomPicker");

    const str = "123456789abcdef";
    let color = [];
    for (let i = 0; i < 6; i++) {
        const ch = str[Math.floor(Math.random() * str.length)];
        color.push(ch);
    }
    resultEl.textContent = `#${color.join("")}`;
    bgEl.style.backgroundColor = `#${color.join("")}`;
}

function hexFindbtn() {
    const inputEl = document.getElementById("hexInput").value;
    const resultEl = document.getElementById("color-box");

    resultEl.style.backgroundColor = `${inputEl}`;
    resultEl.textContent = `${inputEl}`;
}

function RGBFindbtn() {
    const RInputEl = document.getElementById("RInput").value;
    const GInputEl = document.getElementById("GInput").value;
    const BInputEl = document.getElementById("BInput").value;
    const resultBtn = document.getElementById("rgb-color-box");

    resultBtn.style.backgroundColor = `rgb(${RInputEl}, ${GInputEl}, ${BInputEl})`;
    resultBtn.textContent = `rgb(${RInputEl}, ${GInputEl}, ${BInputEl})`;
}

function RangeSelector() {
    const RCInput = document.getElementById("RrInput");
    const GCInput = document.getElementById("GrInput");
    const BCInput = document.getElementById("BrInput");
    const resultEl = document.getElementById("range-color-box");

    RCInput.addEventListener("input", (e) => {
        resultEl.style.backgroundColor = `rgb(${e.target.value}, ${GCInput.value}, ${BCInput.value})`;
        resultEl.textContent = `rgb(${e.target.value}, ${GCInput.value}, ${BCInput.value})`;
    });
    GCInput.addEventListener("input", (e) => {
        resultEl.style.backgroundColor = `rgb(${RCInput.value}, ${e.target.value}, ${BCInput.value})`;
        resultEl.textContent = `rgb(${RCInput.value}, ${e.target.value}, ${BCInput.value})`;
    });
    BCInput.addEventListener("input", (e) => {
        resultEl.style.backgroundColor = `rgb(${RCInput.value}, ${GCInput.value}, ${e.target.value})`;
        resultEl.textContent = `rgb(${RCInput.value}, ${GCInput.value}, ${e.target.value})`;
    });
}

// hex to rgb converter

String.prototype.convertToRGB = function () {};

function hexConvbtn() {
    const inputEl = document.querySelector("#hexCInp").value;
    const resultEl = document.querySelector("#hexCOut");
    const hexVal = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
    };

    const base = 16;

    const hexR = inputEl.substring(0, 2);
    const hexG = inputEl.substring(2, 4);
    const hexB = inputEl.substring(4, 6);

    const firstHexRVal = hexVal[hexR[0].toLowerCase()];
    const secondHexRVal = hexVal[hexR[1].toLowerCase()];
    const R = firstHexRVal * base ** 1 + secondHexRVal * base ** 0;

    const firstHexGVal = hexVal[hexG[0].toLowerCase()];
    const secondHeGVal = hexVal[hexG[1].toLowerCase()];
    const G = firstHexGVal * base ** 1 + secondHeGVal * base ** 0;

    const firstHexBVal = hexVal[hexB[0].toLowerCase()];
    const secondHeBRVal = hexVal[hexB[1].toLowerCase()];
    const B = firstHexBVal * base ** 1 + secondHeBRVal * base ** 0;

    resultEl.textContent = `rgb(${R}, ${G}, ${B})`;
}

function rgbConvbtn() {
    const RCInput = document.getElementById("RCInput").value;
    const GCInput = document.getElementById("GCInput").value;
    const BCInput = document.getElementById("BCInput").value;
    const resultEl = document.getElementById("rgbCOut");

    const base = 16;
    const hexVal = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: "a",
        11: "b",
        12: "c",
        13: "d",
        14: "e",
        15: "f",
    };

    const hOne = hexVal[Math.floor(RCInput / base)];
    const hTwo = hexVal[Math.floor(RCInput % base)];

    const hThree = hexVal[Math.floor(GCInput / base)];
    const hFour = hexVal[Math.floor(GCInput % base)];

    const hFive = hexVal[Math.floor(BCInput / base)];
    const hSix = hexVal[Math.floor(BCInput % base)];
    resultEl.textContent = `#${hOne}${hTwo}${hThree}${hFour}${hFive}${hSix}`;
}
