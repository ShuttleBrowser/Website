const express = require('express')
const minifyHTML = require('express-minify-html');

const app = express()

app.use(minifyHTML({
  override:  true,
  exception_url: false,
  htmlMinifier: {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    minifyJS: true
  }
}));

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

app.get('/terms', (req, res) => {
    res.render('index', {page: "terms", title : "Terms of Service"})
})

app.get('/addons', (req, res) => {
    res.render('index', {page: "building", title : "Addons page"})
})

app.get('/legalandprivacy', (req, res) => {
    res.render('index', {page: "building", title : "Legal and Privacy"})
})

app.get('*', (req, res) => {
    res.render('index', {page: 'error', title : 'Error'})
})

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})