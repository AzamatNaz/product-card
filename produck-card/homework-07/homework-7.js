
function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showTemperature("Москве", 18);

const speedOfLight = 299792458; // скорость света в м/с (гуглим)

function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}


checkSpeed(300000000);   // будет "Сверхсветовая скорость"
checkSpeed(150000000);   // будет "Субсветовая скорость"
checkSpeed(speedOfLight); // будет "Скорость света"

let product = "Ноутбук"; // переменная №1 — продукт
let price = 55000;       // переменная №2 — его цена

function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}

buyProduct(40000); // не хватит денег
buyProduct(60000); // хватит

function greetUser() {
  console.log("Привет! Это моя собственная функция для задания 7.");
}
greetUser();

let userName = "Азамат";
let userAge = 20;
let userCity = "Алматы";
