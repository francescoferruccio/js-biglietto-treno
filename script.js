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

// chiedo all'utente di inserire chilometri ed età e li salvo in delle variabili
var km = prompt("inserisci i chilometri da percorrere");
var eta = prompt("inserisci la tua età");

console.log("km = " + km);
console.log("età = " + eta);

// calcolo il prezzo del biglietto e lo memorizzo in una variabile
var biglietto = km * prezzo;

console.log("il biglietto costa " + biglietto + "€");

// controllo se l'eta è minore di 18 o maggiore di 65 e salvo questa informazione

// applico lo sconto (se è il caso) e visualizzo il prezzo del biglietto