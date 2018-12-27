const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.render('index', {page: "home"})
})

app.get('/about', (req, res) => {
    res.render('index', {page: "about", title : "About"})
})

app.get('/developers', (req, res) => {
    res.render('index', {page: "developers", title : "Developers"})
})

app.get('*', (req, res) => {
    res.render('index', {page: 'error', title : 'Error'})
})

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})