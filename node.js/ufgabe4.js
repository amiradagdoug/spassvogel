function waitForFive() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 5000);
    });
}

waitForFive().then((result) => {
    console.log(result);
});

async function asyncCaller() {
    const ergebnis = await waitForFive();
    console.log(ergebnis);
}

asyncCaller();

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

(async function () {
    await sleep(500);

})();
function waitForFive(callback) {
    setTimeout(() => {
        callback(5);
    }, 5000);
}

waitForFive((result) => {
    console.log(result);
});