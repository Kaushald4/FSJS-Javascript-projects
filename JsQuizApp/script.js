const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

let quiz;
let answerEls;
let questionEl;
let a_text;
let b_text;
let c_text;
let d_text;
let submitBtn;
let radioFlag = true;
let prevRadio;

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    currentQuiz = currentQuiz % quizData.length;
    questionEl = document.getElementById("question");
    questionEl.textContent = quizData[currentQuiz].question;
    answerEls = questionEl.nextElementSibling.children;

    //setting the options
    const mapToLetter = {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
    };
    Array.from(answerEls).forEach((el, i) => {
        el.children[1].textContent = quizData[currentQuiz][mapToLetter[i]];
        el.children[0].addEventListener("click", deselectAnswers);
    });
    a_text = quizData[currentQuiz].a;
    b_text = quizData[currentQuiz].b;
    c_text = quizData[currentQuiz].c;
    d_text = quizData[currentQuiz].d;

    //setting allelement
    submitBtn = document.querySelector("#submit");
}

function deselectAnswers() {
    if (prevRadio) {
        if (this.getAttribute("id") !== prevRadio.getAttribute("id")) {
            this.checked = true;
            prevRadio = null;
            radioFlag = true;
        } else {
            this.checked = false;
            prevRadio = null;
            radioFlag = true;
        }
    } else {
        if (radioFlag) {
            prevRadio = this;
            this.checked = true;
            radioFlag = false;
        } else {
            this.checked = false;
            radioFlag = true;
            prevRadio = this;
        }
    }
}

function getSelected() {
    let selectedOption;

    [...answerEls].forEach((el) => {
        if (el.children[0].checked) {
            selectedOption = el.children[0].getAttribute("id");
        }
    });
    return selectedOption;
}

submitBtn.addEventListener("click", () => {
    if (!getSelected()) {
        return alert("Select any one of the options");
    }
    if (getSelected() === quizData[currentQuiz].correct) {
        score++;
    }

    if (currentQuiz === quizData.length - 1) {
        alert(`Your Score ${score} play again`);
    }

    //incrementing the quiz count to load next data;
    currentQuiz++;
    loadQuiz();
    Array.from(answerEls).forEach((li) => (li.children[0].checked = false));
});
