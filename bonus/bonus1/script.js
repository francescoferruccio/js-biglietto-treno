// Quanti minuti mancano alla fine dell’ora?

// creiamo una variabile che contenga la data
var data = new Date();

console.log(data);

// estraiamo i minuti dalla data
var minuti = data.getMinutes();

console.log(minuti);
// sottraiamo i minuti a 60 per sapere i minuti mancanti alla fine dell'ora
var manca = 60 - minuti;

// visualizziamo l'informazione a schermo
document.getElementById('msg').innerHTML = "Mancano " + manca + " minuti alla fine dell'ora."