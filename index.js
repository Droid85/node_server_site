const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'public')));

app.get('/public', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.get('/public/assets/about', (req, res) => {
    res.sendFile(`${__dirname}/public/assets/about/about.html`)
})

app.get('/public/assets/averages/', (req, res) => {
    res.sendFile(`${__dirname}/public/assets/averages/averages.html`)
})

app.listen(PORT, () => {
    console.log('Server started...')
})
