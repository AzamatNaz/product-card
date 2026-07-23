// Кнопка 1
const firstCardButton = document.querySelector("#change-color-first-card");

firstCardButton.addEventListener("click", function () {
    const firstCard = document.querySelector(".product-card");
    firstCard.style.backgroundColor = "lightgreen";
});

// Кнопка 2
const allCardsButton = document.querySelector("#change-color-all-cards");

allCardsButton.addEventListener("click", function () {
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(function (card) {
        card.style.backgroundColor = "lightgreen";
    });
});

// Кнопка 3
const googleButton = document.querySelector("#open-google-button");

googleButton.addEventListener("click", function () {
    window.open("https://google.com");
});
