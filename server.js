const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales', function (err) {});
app.set('view engine', 'hbs');



app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'Sebastián Simunovic',
        
    });
});

app.get('/about', function (req, res) {

    res.render('about', {
        nombre: 'Sebastián Simunovic',
    });
});





app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});