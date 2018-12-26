const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.render('index', {page: "home"})
})

app.get('/about', (req, res) => {
    res.render('index', {page: "about"})
})

app.get('/developpers', (req, res) => {
    res.render('index', {page: "developpers"})
})

app.get('*', (req, res) => {
    res.render('index', {page: "home"})
})

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})