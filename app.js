//creando un servidor con express js
require('dotenv').config()
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT

//Utilizando handlebar
app.set('view engine', 'hbs');

hbs.registerPartials( __dirname + '/views/partials',  (err) => console.log(err) );

//Servir contenido estático Utilizando midlewares
app.use( express.static('public') )


//app.get('/', async (req, res) => {
//    await res.render('home', {
//        nombre: 'Jefferson   Murillo',
//        titulo: 'Curso de Node'
//    })
//})

//app.get('/generic', async (req, res) => {
//    await res.render('generic', {
//        nombre: 'Jefferson   Murillo',
//        titulo: 'Curso de Node'
//    })
//})

//app.get('/elements', async (req, res) => {
//    await res.render('elements', {
//        nombre: 'Jefferson   Murillo',
//        titulo: 'Curso de Node'
//    })
//})

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/index.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
