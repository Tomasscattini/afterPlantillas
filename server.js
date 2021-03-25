const express = require('express');
const Productos = require('./api/productos');
const hbs = require('express-handlebars');

const productos = [
    {
        title: 'Titulo 1',
        price: 'Precio 1',
        thumbnail: 'Foto'
    },{
        title: 'Titulo 2',
        price: 'Precio 2',
        thumbnail: 'Foto'
    },{
        title: 'Titulo 3',
        price: 'Precio 3',
        thumbnail: 'Foto'
    },{
        title: 'Titulo 4',
        price: 'Precio 4',
        thumbnail: 'Foto'
    }
]

const app = express();

app.engine('hbs', hbs({
    extname: '.hbs',
    partialsDir:` ${__dirname}/views/partials`
}));

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));

app.set('views', './views');

app.post('/api/productos/guardar', (req, res) => {
    const { title, price, thumbnail } = req.body;
    const producto = { title, price, thumbnail };
    productos.push(producto);
    res.render('tablaProductos', {productos});
})

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(8080, ()=> {
    console.log('listening on port 8080');
});