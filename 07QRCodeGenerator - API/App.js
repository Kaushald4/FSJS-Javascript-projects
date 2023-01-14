const inputEl = document.getElementById("input");
const submitBtnEl = document.getElementById("submit");
const imgEl = document.getElementById("img");

submitBtnEl.addEventListener("click", () => {
    if (!inputEl.value) {
        return alert("Enter text to generate QRCODE");
    }
    const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputEl.value}`;
    imgEl.src = URL;
    imgEl.style.display = "block";
});
