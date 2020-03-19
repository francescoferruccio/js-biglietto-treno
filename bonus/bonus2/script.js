// Inserisci con due prompt l’età di due persone (persona1, persona2)
// e stampa a schermo il numero più grande.

// variabili
var maggiore, msg, eta1, eta2;

// chiediamo all'utente di inserire le età e le memorizziamo
eta1 = parseInt(prompt("Inserisci l'età della prima persona"));
eta2 = parseInt(prompt("Inserisci l'età della seconda persona"));

console.log("eta1 = " + eta1);
console.log("eta2 = " + eta2);

// confrontiamo i due numeri e memorizziamo quale è più grande
if (eta1 > eta2) {
  maggiore = eta1;
} else if (eta1 < eta2) {
  maggiore = eta2;
} else {
  maggiore = 0;
}

// controlliamo che i valori non siano uguali e scriviamo un messaggio di conseguenza
if (maggiore != 0) {
  msg = "L'età maggiore è " + maggiore + " anni";
} else {
  msg = "Le età sono uguali."
}

// visualizziamo a schermo il messaggio
document.getElementById('msg').innerHTML = msg;