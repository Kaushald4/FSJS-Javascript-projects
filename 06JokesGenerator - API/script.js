const fetchNewJoke = async () => {
    const URL = "https://official-joke-api.appspot.com/random_joke";
    try {
        const res = await fetch(URL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Something went wrong check your internet connection!");
    }
};

const jokeEl = document.getElementById("joke");
const jokeBtnEl = document.getElementById("jokeBtn");

jokeBtnEl.addEventListener("click", async () => {
    jokeBtnEl.textContent = "Fetching...";
    const joke = await fetchNewJoke();
    if (joke) {
        jokeEl.innerHTML = `<span> ${joke.setup} <br> ${joke.punchline} </span>`;
        jokeBtnEl.textContent = "Get Another Joke.";
    }
    jokeBtnEl.textContent = "Get Another Joke.";
});
