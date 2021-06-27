const express = require('express');
const app = express()
const logger = require('./middleware/logger')

// req => middleware => res

app.use('/api',logger)

app.get('/', (req, res) => {
    res.send('Home')
});

app.get('/about',  (req, res) => {
    res.send('About')
});

app.get('/products',  (req, res) => {
    res.send('Products')
});

app.get('/items',  (req, res) => {
    res.send('Items')
});

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
});