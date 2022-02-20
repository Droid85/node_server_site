const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3002

app.set('vews', './views');
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('index', {title: 'Send message'})
})

app.get('/public/assets/about/', (req, res) => {
    res.sendFile(`${__dirname}/public/assets/about/about.html`)
})

app.get('/public/assets/averages/', (req, res) => {
    res.sendFile(`${__dirname}/public/assets/averages/averages.html`)
})

app.use(function(req, res, next) {
    res.status(404).sendFile(`${__dirname}/public/assets/errors/not_found.html`);
});

app.listen(PORT, () => {
    console.log('Server started...')
})
