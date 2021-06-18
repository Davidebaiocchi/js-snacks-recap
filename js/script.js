//  Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter

// creazione dei due array:
var arrayIniziale = ['giulia', 'davide', 'lucia', 'marco', 'andrea'];
console.log(arrayIniziale);
var arrayFinale = [];

// inserire numeri
var a = parseInt(prompt('Inserire numero'));
var b = parseInt(prompt('Inserire numero'));

arrayFinale = selezione(arrayIniziale, a, b);

function selezione(array, min, max) {
    var arrayFiltrato = [];

    for(i= 0; i < arrayIniziale.length; i++) {
        if(i >= a && i <= b) {
            arrayFiltrato.push(arrayIniziale[i]);
        }
    }   
    return arrayFiltrato;
} 
console.log(arrayFinale);