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
var percSconto = 0;
var sconto = 0;
var msgSconto = "";

// chiedo all'utente di inserire chilometri ed età e li salvo in delle variabili
var km = parseInt(prompt("inserisci i chilometri da percorrere"));
var eta = parseInt(prompt("inserisci la tua età"));

console.log("km = " + km);
console.log("età = " + eta);

// calcolo il prezzo del biglietto e lo memorizzo in una variabile
var biglietto = km * prezzo;

console.log("il biglietto costa " + biglietto + " €");

// controllo se l'eta è minore di 18 o maggiore di 65 e aggiorno la variabile percSconto di conseguenza
if (eta < 18) {
  percSconto = 20;
} else if (eta > 65) {
  percSconto = 40;
}

console.log("sconto = " + percSconto + " %");

// calcolo il valore dello sconto e lo applico (se è il caso)
if (percSconto != 0) {
  sconto = (biglietto / 100) * percSconto;
  biglietto = biglietto - sconto;
  msgSconto = "<br>E' stato applicato uno sconto del " + percSconto + "%, pari a " + sconto.toFixed(2) + " €, al prezzo iniziale di " + (biglietto + sconto).toFixed(2) + " €.";
}

console.log("valore sconto = " + sconto + " €");

// visualizzo in pagina il prezzo finale del biglietto
var msg = "Il prezzo del tuo biglietto è: " + biglietto.toFixed(2) + " €.";

document.getElementById('txt').innerHTML = msg + msgSconto;

// visualizzo un messagio nel caso sia stato applicato uno sconto
// if (percSconto != 0) {
//   var msgSconto = "E' stato applicato uno sconto del " + percSconto + "%, pari a " + sconto.toFixed(2) + " €, al prezzo iniziale di " + (biglietto + sconto).toFixed(2) + " €.";
//
//   document.getElementById('txt-sconto').innerHTML = msgSconto;
// }