const express = require('express');
const path = require('path');

const {data} = require('./data')

const app = express()

// setup static and middleware
app.use(express.static('./front-app'))

app.get('/data', (req, res) => {
    const newData = data.map((item) => {
        const {id, desc, img} = item;
        return {id, desc, img}
    });
    res.json(newData)
})

app.get('/data/:dataID', (req, res) => {
    const {dataID} = req.params;
    const singleData = data.find((item) => item.id === Number(dataID))

    if (!singleData) {
      return res.status(404).send('<h1>404 NOT FOUND</h1>')
    }
    return res.json(singleData)
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>404 NOT FOUND</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
});