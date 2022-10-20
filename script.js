const age = prompt("Inserire età passeggero");
const km = prompt("Inserire numero di chilometri da percorrere")


const price = km * 0.21

if (age < 18) {
    const discount = (price * 20) / 100;
    const newPrice = price - discount;
    console.log(`Costo del biglietto in base ai chilometri da percorrere: ${price}`);
    console.log(`È previsto lo sconto per i passeggeri minorenni del 20% sul costo del biglietto. Il prezzo finale del biglietto è ${newPrice.toFixed(2)}`);
    console.log("Buon viaggio!")
}
else if (age >= 65) {
    const discount = (price * 40) / 100;
    const newPrice = price - discount;
    console.log(`Costo del biglietto in base ai chilometri da percorrere: ${price}`);
    console.log(`È previsto lo sconto per i passeggeri over 65 del 40% sul costo del biglietto. Il prezzo finale del biglietto è ${newPrice.toFixed(2)}`);
    console.log("Buon viaggio!")
}
else {
    console.log(`Costo del biglietto in base ai chilometri da percorrere: ${price}`);
    console.log("Buon viaggio!");
}