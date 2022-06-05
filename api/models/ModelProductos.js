const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productoSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    estado: {
        type: Boolean,
        default: true,
    }
})

module.exports = mongoose.model('Producto', productoSchema)
