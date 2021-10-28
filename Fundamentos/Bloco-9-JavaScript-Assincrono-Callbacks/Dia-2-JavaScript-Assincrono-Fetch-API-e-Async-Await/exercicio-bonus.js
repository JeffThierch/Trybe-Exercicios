const API_URL = `https://api.coincap.io/v2/assets`
const API_CURRENCY_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json` 

const fetchApi = () => {
  return fetch(API_URL)
  .then(response => response.json())
  .then(({data}) => data)
  .catch(error => console.log(error))
};

const fetchCurrenciesApi = () => {
  return fetch(API_CURRENCY_URL)
  .then(response => response.json())
  .then(data => data.usd)
  .catch(error => error.toString);
}

fetchCurrenciesApi()


const appendCoins = async () => {
  const coins = await fetchApi();
  const usdPrices = await fetchCurrenciesApi()
  const coinsList = document.getElementById('cryptos')
  coins.filter((_, index) => index <= 9)
  .forEach(({name, symbol, priceUsd}) => {
    const coinLi = document.createElement('li')
    coinLi.innerHTML = `${name} (${symbol}): ${Number(priceUsd * usdPrices.brl).toFixed(2)}`
    coinsList.appendChild(coinLi)
  })
}


window.onload = appendCoins()