function sumNeu(a, b, callback) {
    const summe = a + b;
    callback(summe);
}

function sumCallbackFunction(ergebnis) {
    console.log("Das Ergebnis ist:", ergebnis);
}

sumNeu(1, 2, sumCallbackFunction);
function waitForFive(callback) {
    setTimeout(() => {
        callback(5);
    }, 5000);
}

waitForFive((result) => {
    console.log(result);
});