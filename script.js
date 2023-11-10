const bitcoin = document.getElementById("bit_coin"),
  ethereum = document.getElementById("ethereum"),
  doge_coin = document.getElementById("doge_coin");
let ids = "bitcoin,ethereum,dogecoin&vs_currencies=usd";

let settings = {
  async: true,
  crossDomain: true,
  url: `https://api.coingecko.com/api/v3/simple/price?ids=${ids}`,
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  bitcoin.textContent = `$` + response.bitcoin.usd;
  ethereum.textContent = `$` + response.ethereum.usd;
  let dog = response.dogecoin.usd.toString().substr(0, 6);
  doge_coin.textContent = `$` + dog;
});
// Another Method

// const url = "https://api.coingecko.com/api/v3/simple/price?ids=";
// let ids = "bitcoin,ethereum,dogecoin&vs_currencies=usd";
// async function update_currency() {
//   let response = await fetch(url + ids);
//   let data = await response.json();
//   bitcoin.textContent = `$` + data.bitcoin.usd;
//   ethereum.textContent = `$` + data.ethereum.usd;
//   let dog = data.dogecoin.usd.toString().substr(0, 6);
//   doge_coin.textContent = `$` + dog;
//   console.log("updating complete")
// }

// update_currency();
// let timer = setInterval(() => {
//   update_currency();
// }, 5000);

// Another Method

// const bitcoin = document.getElementById("bit_coin"),
//   ethereum = document.getElementById("ethereum"),
//   doge_coin = document.getElementById("doge_coin");

// const url = "https://api.coingecko.com/api/v3/simple/price?ids=";
// let ids = "bitcoin,ethereum,dogecoin&vs_currencies=usd";

// fetch(url + ids)
//   .then((response) => response.json())
//   .then((data) => {
//     bitcoin.textContent = `$` + data.bitcoin.usd;
//     ethereum.textContent = `$` + data.ethereum.usd;
//     let dog = data.dogecoin.usd.toString().substr(0, 6);
//     doge_coin.textContent = `$` + dog;
//   })
//   .catch((error) => console.error("Error:", error));
