const API_URL = `https://api.coincap.io/v2/assets`

const fetchApi = () => {
  return fetch(API_URL)
  .then(response => response.json())
  .then(({data}) => data)
  .catch(error => console.log(error))
};

const appendCoins = async (callback) => {
  const coins = await callback();
  const coinsList = document.getElementById('cryptos')
  coins.filter((_, index) => index <= 9)
  .forEach(({name, symbol, priceUsd}) => {
    const coinLi = document.createElement('li')
    coinLi.innerHTML = `${name} (${symbol}): ${Number(priceUsd).toFixed(2)}`
    coinsList.appendChild(coinLi)
  })
}


window.onload = appendCoins(fetchApi)