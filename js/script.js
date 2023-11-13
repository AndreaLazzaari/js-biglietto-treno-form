// 


console.log('ciaooo')

let kmDaPercorrere = parseFloat(document.getElementById ('km-percorrere'));
let etaPasseggero = parseInt(document.getElementById ('eta-passeggero'));
let buttonElement = document.querySelector ('button');

console.log(kmDaPercorrere);

let prezzoViaggio = kmDaPercorrere * 0.1976;

console.log(prezzoViaggio);

buttonElement.addEventListener('click', function() {
    console.log('invio per il calcolo prezzo');
})
