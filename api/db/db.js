const mongoose = require('mongoose')
require('colors')

const db = mongoose.connect('mongodb://localhost:27017/db_pedidos', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a Mongodb'.bgYellow.white.bold))
    .catch(err => console.log(err))

module.exports = db
