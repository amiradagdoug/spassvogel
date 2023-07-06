const fs = require('fs');

function concatenateFiles(files) {
    for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        console.log(content);
        console.log(); // Leerzeile zwischen den Dateien
    }
}

if (process.argv.length > 2) {
    const files = process.argv.slice(2);
    concatenateFiles(files);
}