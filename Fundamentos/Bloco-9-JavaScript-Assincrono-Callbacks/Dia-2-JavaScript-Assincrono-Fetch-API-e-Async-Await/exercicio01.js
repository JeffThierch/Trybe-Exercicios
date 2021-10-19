// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) => joke)
    .catch(error => console.log(error));
};

const appendJoke = async (callback) => {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerHTML = await callback()
}

window.onload = () => {
  fetchJoke()
  appendJoke(fetchJoke)
}