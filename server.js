const db = require('./db/index.js');
const express = require('express');
const Product = db.models.Product
const bodyParser = require('body-parser')
const path = require('path')
var faker = require('faker');

//SERVER
const app = express()
app.use(bodyParser.json())

const port = 3000 || process.env.PORT;

app.listen(port, () => {
    console.log(`I am listening to ${port}`)
})

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.use('/dist', express.static(path.join(__dirname, 'dist')))


//ROUTES
app.get('/api/products', (req, res, next) => {
    Product.findAll()
    .then(products => res.send(products))
})

app.post('/api/products', (req, res, next) => {
    const product = faker.commerce.product()
    const adjective = faker.commerce.productAdjective()
    const rating = faker.random.number({min:0, max:20})
    const productAdjective = product + " " + adjective
    Product.create({name: productAdjective, rating: rating })
    .then( product => res.send(product))
    .catch(next);
})

app.delete('/api/products/:id', (req, res, next) => {
    Product.findById(req.params.id)
    .then(product => product.destroy())
    .then(() => res.sendStatus(204))
    .catch(next)
})


db.syncAndSeed()