let userScore = 0;
let compScore = 0;

let userChoice;
let compChoice;

const choices = document.querySelectorAll(".choice");
const userScoreEl = document.getElementById("userScoreVal");
const compScoreEl = document.getElementById("compScoreVal");
const userScoreStat = document.getElementById("result-user-stat");
const compScoreStat = document.getElementById("result-comp-stat");
const winnerEl = document.getElementById("result-final-stat");

choices.forEach((d) => {
    d.addEventListener("click", handleClick);
});

function handleClick(e) {
    userChoice = this.getAttribute("id");
    makeCompChoice();
}

function getRandomNumber() {
    return Math.floor(Math.random() * 2);
}

function styleBgAndCheckWinner() {
    setTimeout(() => {
        choices[1].style.backgroundColor = "transparent";
        choices[0].style.backgroundColor = "transparent";
        choices[2].style.backgroundColor = "transparent";
        checkWinner();
    }, 1000);
}

function makeCompChoice() {
    if (userChoice === "s") {
        let ch = getRandomNumber();
        compChoice = ["p", "r"][ch];
        if (compChoice === "p") {
            choices[1].style.backgroundColor = "#f75555";
        } else {
            choices[0].style.backgroundColor = "#f75555";
        }
        styleBgAndCheckWinner();
    } else if (userChoice === "r") {
        compChoice = ["p", "s"][getRandomNumber()];
        if (compChoice === "p") {
            choices[1].style.backgroundColor = "#f75555";
        } else {
            choices[2].style.backgroundColor = "#f75555";
        }

        styleBgAndCheckWinner();
    } else if (userChoice === "p") {
        compChoice = ["r", "s"][getRandomNumber()];
        if (compChoice === "r") {
            choices[0].style.backgroundColor = "#f75555";
        } else {
            choices[2].style.backgroundColor = "#f75555";
        }
        styleBgAndCheckWinner();
    }
}

function checkWinner() {
    if (userChoice === "r" && compChoice === "s") {
        userScore++;
        userScoreEl.textContent = userScore;
        userScoreStat.textContent = `User: ${userScore}`;
    }
    if (userChoice === "r" && compChoice === "p") {
        compScore++;
        compScoreEl.textContent = compScore;
        compScoreStat.textContent = `Computer: ${compScore}`;
    }
    if (userChoice === "p" && compChoice === "s") {
        compScore++;
        compScoreEl.textContent = compScore;
        compScoreStat.textContent = `Computer: ${compScore}`;
    }
    if (userChoice === "p" && compChoice === "r") {
        userScore++;
        userScoreEl.textContent = userScore;
        userScoreStat.textContent = `User: ${userScore}`;
    }
    if (userChoice === "s" && compChoice === "r") {
        compScore++;
        compScoreEl.textContent = compScore;
        compScoreStat.textContent = `Computer: ${compScore}`;
    }
    if (userChoice === "s" && compChoice === "p") {
        userScore++;
        userScoreEl.textContent = userScore;
        userScoreStat.textContent = `User: ${userScore}`;
    }

    if (userScore > compScore) {
        winnerEl.textContent = `Winner: User`;
    } else if (userScore < compScore) {
        winnerEl.textContent = `Winner: Comp`;
    } else {
        winnerEl.textContent = `Winner: No winner`;
    }
}
