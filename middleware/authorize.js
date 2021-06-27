const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'dima') {
        req.user = {name: 'dima', id: 777}
        next()
    }
    else  {
        res.status(401).send('Unauthorized')
    }
    console.log('authorize')

}
module.exports = authorize