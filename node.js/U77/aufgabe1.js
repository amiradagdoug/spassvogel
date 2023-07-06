const fs = require('fs');

try {
    const data = fs.readFileSync('./node-file-system.pdf', 'utf8');
    console.log(data);
} catch (error) {
    console.error('Fehler beim Lesen der Datei:', error);
}
