// 


console.log('ciaooo')

let buttonElement = document.querySelector ('button');

let prezzoViaggio = kmDaPercorrere * 0.1976;

buttonElement.addEventListener('click', function() {
    console.log('inizio per il calcolo prezzo');
    const kmDaPercorrere = document.getElementById('km-percorrere');
    let kmDaPercorrere = parseFloat(kmDaPercorrere.innerHTML)

    const etaPasseggero = document.getElementById('eta-passeggero');
    let etaPasseggero = parseInt(etaPasseggero.innerHTML)

    let prezzoViaggio = kmDaPercorrere * 0.1976;





})
