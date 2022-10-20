const age = prompt("Inserire età passeggero");
const km = prompt("Inserire numero di chilometri da percorrere")

const price = km * 0.21

console.log(price)

if (age < 18) {
    console.log("È previsto lo sconto per i passeggeri minorenni del 20% sul prezzo finale del biglietto. Buon viaggio!")
}
else if (age >= 65) {
    console.log("È previsto lo sconto per i passeggeri over 65 del 40% sul prezzo finale del biglietto. Buon viaggio!")
}
else {
    console.log("Buon viaggio!")
}