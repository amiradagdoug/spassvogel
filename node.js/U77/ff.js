const express = require('express');
const app = express();

const port = 3000;
const hostname = 'localhost';
app.use(express.json());
let restaurants = [{ name: "jjjj", adresse: "jjjj", kategorie: "kkk" }];

app.get('/restaurants', (_, res) => {
    res.send(restaurants);
});
app.post('/restaurant', (req, res) => {
    let r = req.body;

    if (!r.name) {
        res.send("name nicht vollstandig");
    }
    else {
        //res.send("name richitg"); 
        // restaurants.
    }


});

app.listen(port, hostname, () => {
    console.log('Server gestartet ${hostname}:${port}.');

});