const firstInput = document.querySelector("#first__input");
const secondInput = document.querySelector("#second__input");
let firstSelect = document.querySelector("#first__select");
let secondSelect = document.querySelector("#second__select");

let rates = {};

async function getExchangeRate() {
  let response = await fetch(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  );
  let data = await response.json();
  let result = await data;
  result.forEach((item) => {
    rates[item.cc] = item.rate;
  });
}
getExchangeRate();

firstInput.addEventListener("input", () => {
  secondInput.value = (+firstInput.value / +rates[secondSelect.value]).toFixed(
    2
  );
});
secondSelect.addEventListener("input", () => {
  secondInput.value = (+firstInput.value / +rates[secondSelect.value]).toFixed(
    2
  );
});
