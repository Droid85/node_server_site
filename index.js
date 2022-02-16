const { application } = require('express');
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/assets/about/', (req, res) => {
    res.sendFile(`${__dirname}/assets/about/about.html`)
})

app.listen(PORT, () => {
    console.log('Server started...')
})
