const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pedidoSchema = new Schema({
    cliente: {
        type: Schema.ObjectId,
        ref: 'Cliente'
    },
    productos: [{
        producto: {
            type: Schema.ObjectId,
            ref: 'Producto'
        },
        cantidad: {
            type: Number,
            default: 1
        },
    }],
    total: {
            type: Number,
    },
    estado: {
        type: Boolean,
        default: true,
    }
})

module.exports = mongoose.model('Pedido', pedidoSchema)
