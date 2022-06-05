const mongoose = require('mongoose')
const Schema = mongoose.Schema


const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    rif: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    estado: {
        type: Boolean,
        default: true,
    }
})

module.exports = mongoose.model('Cliente', clienteSchema)
