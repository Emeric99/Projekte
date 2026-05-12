// ================================================================
// script.js – Warenkorb-Logik mit localStorage-Bestellspeicherung
// ================================================================

let openShopping  = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list          = document.querySelector('.list');
let listCard      = document.querySelector('.listCard');
let body          = document.querySelector('body');
let total         = document.querySelector('.total');
let quantity      = document.querySelector('.quantity');

openShopping.addEventListener('click', function () {
    body.classList.add('active');
});
closeShopping.addEventListener('click', function () {
    body.classList.remove('active');
});

// --- Produktdaten ---
let products = [
    { id: 1, name: 'DAX pomade super light',    image: 'DAX pomade super light.png',    price: 19.99 },
    { id: 2, name: 'Dimes sour apple',           image: 'dimes sour apple.png',          price: 24.99 },
    { id: 3, name: 'Dimes mango',                image: 'dimes mango.png',               price: 14.99 },
    { id: 4, name: 'Fitne herbal tee',           image: 'Fitne herbal tee.png',          price: 14.99 },
    { id: 5, name: 'Capri-Sun',                  image: 'Capri-sun.png',                 price: 14.99 },
    { id: 6, name: 'Chio tortillas hot chili',   image: 'chio tortillas hot chili.png',  price: 14.99 },
    { id: 7, name: 'Foco coconut juice',         image: 'foco coconut juice.png',        price: 14.99 },
    { id: 8, name: 'Comb thru extra strength',   image: 'comb thru extra streng.png',    price: 14.99 },
    { id: 9, name: 'Chupa chups fraise',         image: 'chupa chups fraise.png',        price: 14.99 }
];

let listCards = [];

// --- Produkte anzeigen ---
function initApp() {
    products.forEach(function (value, i) {
        var newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}" alt="${value.name}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toFixed(2)} €</div>
            <button onclick="addToCard(${i})">In den Warenkorb</button>`;
        list.appendChild(newDiv);
    });
}
initApp();

// --- Artikel zum Warenkorb hinzufügen ---
function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = {
            id:       products[key].id,
            name:     products[key].name,
            image:    products[key].image,
            price:    products[key].price,
            quantity: 1
        };
    } else {
        listCards[key].quantity += 1;
    }
    reloadCard();
}

// --- Warenkorb neu rendern ---
function reloadCard() {
    listCard.innerHTML = '';
    var count      = 0;
    var totalPrice = 0;

    listCards.forEach(function (value, i) {
        if (value == null) return;
        totalPrice += value.price * value.quantity;
        count      += value.quantity;

        var newDiv = document.createElement('li');
        newDiv.innerHTML = `
            <div><img src="img/${value.image}" alt="${value.name}"/></div>
            <div>${value.name}</div>
            <div>${(value.price * value.quantity).toFixed(2)} €</div>
            <div>
                <button onclick="changeQuantity(${i}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${i}, ${value.quantity + 1})">+</button>
            </div>`;
        listCard.appendChild(newDiv);
    });

    total.innerText    = totalPrice.toFixed(2) + ' €';
    quantity.innerText = count;
}

// --- Menge ändern ---
function changeQuantity(key, newQuantity) {
    if (newQuantity === 0) {
        listCards[key] = null;
    } else {
        listCards[key].quantity = newQuantity;
    }
    reloadCard();
}

// --- Bestellung aufgeben & in localStorage speichern ---
function zuBestellungen() {
    // Nur nicht-leere Artikel sammeln
    var artikel = listCards.filter(function (item) { return item != null; });

    if (artikel.length === 0) {
        alert('Der Warenkorb ist leer!');
        return;
    }

    // Bestellnummer generieren (zufällig 5-stellig)
    var bestellnummer = 'B' + Math.floor(10000 + Math.random() * 90000);

    // Gesamtpreis berechnen
    var gesamtpreis = artikel.reduce(function (sum, item) {
        return sum + item.price * item.quantity;
    }, 0);

    // Neue Bestellung erstellen
    var neueBestellung = {
        id:           bestellnummer,
        datum:        new Date().toLocaleDateString('de-DE'),
        uhrzeit:      new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
        artikel:      artikel,
        gesamtpreis:  gesamtpreis.toFixed(2)
    };

    // Bestehende Bestellungen aus localStorage laden
    var bestellungen = JSON.parse(localStorage.getItem('afroshop_bestellungen') || '[]');
    bestellungen.push(neueBestellung);
    localStorage.setItem('afroshop_bestellungen', JSON.stringify(bestellungen));

    // Warenkorb leeren
    listCards = [];
    reloadCard();
    body.classList.remove('active');

    // Zur Bestellseite weiterleiten
    window.location.href = 'bestellungen.html';
}

document.getElementById('orderButton').addEventListener('click', zuBestellungen);
