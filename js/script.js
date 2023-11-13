// 


console.log('ciaooo')

let buttonElement = document.querySelector ('button');



buttonElement.addEventListener('click', function() {
    console.log('inizio per il calcolo prezzo');
    let kmDaPercorrere = parseFloat(document.getElementById('km-percorrere').value);
    let etaPasseggero = parseInt(document.getElementById('eta-passeggero').value);
    
    let prezzoViaggio = kmDaPercorrere * 0.1976;

    console.log(kmDaPercorrere, etaPasseggero, prezzoViaggio);

    if (etaPasseggero < 18) {
        const sconto = prezzoViaggio * 17.65 / 100;
        // prezzoViaggio = prezzoViaggio - sconto;
        prezzoViaggio -= sconto;
        console.log(sconto,prezzoViaggio);
    } else if (etaPasseggero >= 65) {
        const sconto = prezzoViaggio * 53.27 / 100;
        prezzoViaggio -= sconto;
        console.log(sconto,prezzoViaggio)
    } else {
        console.log(prezzoViaggio)
    }
    
    console.log('fine calcolo viaggio');
    prezzoViaggio = prezzoViaggio.toFixed(2);
    console.log(prezzoViaggio);

})
