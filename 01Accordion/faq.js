const faqData = [
    {
        id: 1,
        question: "Who are we?",
        answer: "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
    },
    {
        id: 2,
        question: "What do we do?",
        answer: "Building learning communities with Our Affordable & Competent Courses",
    },
    {
        id: 3,
        question: "Are the community classes boring?",
        answer: "No, not at all!!!",
    },
];

let accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq() {
    btnStatusUpdate();
    let pEl = this.parentElement.nextElementSibling;
    pEl.classList.toggle("hidden");
}

function createFaq() {
    faqData.forEach((item, index) => {
        const faqEl = document.createElement("div");
        const faqHeaderEl = document.createElement("div");
        const h3El = document.createElement("h3");
        const button = document.createElement("button");
        const pEl = document.createElement("p");

        faqEl.classList.add("faq");
        faqHeaderEl.classList.add("faq_header");
        button.classList.add("show_btn");
        pEl.classList.add("hidden");

        h3El.textContent = item.question;
        button.textContent = "+";
        pEl.textContent = item.answer;

        faqEl.appendChild(faqHeaderEl);
        faqHeaderEl.appendChild(h3El);
        faqHeaderEl.appendChild(button);
        faqEl.appendChild(pEl);

        accordianBody.appendChild(faqEl);
    });
}

function btnStatusUpdate() {
    allFaq.forEach((el) => {
        el.parentElement.nextElementSibling.classList.add("hidden");
    });
}

createFaq();

let allFaq = document.querySelectorAll(".show_btn");

allFaq.forEach((el) => {
    el.parentElement.nextElementSibling.classList.add("hidden");
    el.addEventListener("click", showFaq);
});
