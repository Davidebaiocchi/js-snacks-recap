//  Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter

// creazione dei due array:
let name = ['giulia', 'davide', 'lucia', 'marco', 'andrea'];
console.log(name);
let theName = [];

// inserire numeri
let a = parseInt(prompt('Inserire numero'));
let b = parseInt(prompt('Inserire numero'));


theName = selezione(name, a, b);

function selezione(array, min, max) {
    let arrayFiltrato = [];

    name.forEach(element => {
        if(element >= a & element >= b ){
            arrayFiltrato.push(name[i]);
        }
    })
};
console.log(arrayFiltrato);