// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.

// variabili
var prezzo = 0.21; //prezzo al km
var percSconto;
var sconto;
var prezzoFinale;

// chiedo all'utente di inserire chilometri ed età e li salvo in delle variabili
var km = parseInt(prompt("inserisci i chilometri da percorrere"));
var eta = parseInt(prompt("inserisci la tua età"));

console.log("km = " + km);
console.log("età = " + eta);

// calcolo il prezzo del biglietto e lo memorizzo in una variabile
var biglietto = km * prezzo;

console.log("il biglietto costa " + biglietto + "€");

// controllo se l'eta è minore di 18 o maggiore di 65 e salvo questa informazione
if (eta < 18) {
  percSconto = 20;
} else if (eta > 65) {
  percSconto = 40;
} else {
  percSconto = 0;
}

console.log("sconto = " + percSconto);

// applico lo sconto (se è il caso) e visualizzo il prezzo del biglietto
if (percSconto != 0) {
  sconto = (biglietto / 100) * percSconto;
  biglietto = biglietto - sconto;
}

console.log("valore sconto = " + sconto + "€");

var msg = "Il prezzo del tuo biglietto è: " + biglietto;

document.getElementById('txt').innerHTML = msg;