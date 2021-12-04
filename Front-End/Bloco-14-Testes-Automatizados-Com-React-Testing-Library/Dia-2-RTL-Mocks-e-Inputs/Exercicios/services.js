const generateRandonNumber = () => {
  return (Math.ceil(Math.random() * 100))
}

const toUpperSting = (string) => string.toUpperCase();

const stringFistLetter = (string) => string[0];

const concatTwoStings = (string01 , string02) => (string01 + string02);

function fetchAPIDogsPictutes() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

fetchAPIDogsPictutes()


module.exports = {
  generateRandonNumber,
  toUpperSting,
  stringFistLetter,
  concatTwoStings,
  fetchAPIDogsPictutes
}
