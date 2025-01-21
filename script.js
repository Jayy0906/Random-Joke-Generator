// Fetch a random joke from an API
async function getJoke() {
    const jokeText = document.getElementById("joke-text");
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const joke = await response.json();
      jokeText.innerText = `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
      jokeText.innerText = "Oops! Couldn't fetch a joke. Please try again.";
    }
  }
  
  // Add event listener to the button
  document.getElementById("joke-btn").addEventListener("click", getJoke);
  