// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt("Inserisci una parola");

let parolaInversa = invertiParola(parola);

if (parola == parolaInversa) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}

function invertiParola(str) {
    let stringaInversa = str.split('').reverse().join('');
    return stringaInversa;
}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let sceltaUtente = prompt("pari o dispari?");
let sceltaNumero = parseInt(prompt("Scegli un numero da 1 a 5"))

function numeroRandomComputer(min, max) {
    let numeroRandom = Math.floor(Math.random() * (max - min + min)) + min;
    return numeroRandom;
}

let numRand = numeroRandomComputer(1, 5);
console.log(numRand);

function somma(x, y) {
    let somma = x + y;
    return somma;
}
let valoreSommaFunzione = somma(sceltaNumero, numRand);
console.log(valoreSommaFunzione);

function controlloPariDispari() {
    let controllo = "";
    if (valoreSommaFunzione % 2 == 0) {
        controllo = "pari";
        return controllo;
    } else {
        controllo = "dispari";
        return controllo
    }
}

if (sceltaUtente = controlloPariDispari()) {
    console.log("Win")
} else {
    console.log("Lose")
}