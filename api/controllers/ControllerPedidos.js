const Pedidos = require('../models/ModelPedidos.js')


const getPedidos = async (req, res) => {
    try {
        const pedidos = await Pedidos.find({ estado: true }).populate('cliente').populate({
            path: 'productos.producto',
            model: 'Producto'
        })
        res.send({ info: 'Solicitud procesada exitosamente', pedidos })
    } catch (err) {
        res.status(400).send({ info: 'Error al obtener los pedidos', err})
    }
}

const getPedidoById = async (req, res) => {
    try {
        const pedido = await Pedidos.findById(req.params.id).populate('cliente').populate({
            path: 'productos.producto',
            model: 'Producto'
        })
        if (!pedido) return res.status(400).send({ info: 'No existe el pedido' })
        res.send({ info: 'Solicitud procesada exitosamente', pedido })
    } catch (err) {
        res.send({info: 'Error al obtener el pedido', err})
    }
}

const createPedidos = async (req, res) => {
    try {
        const pedido = new Pedidos(req.body)
        await pedido.save()
        res.send({ info: 'Solicitud procesada exitosamente', pedido })
    } catch (err) {
        res.status(400).send({ info: 'Error al crear el pedido' })
    }
}

const updatePedidos = async (req, res) => {
    try {
        const pedido = await Pedidos.findByIdAndUpdate({_id: req.params.id}, { $set: req.body }, { new: true })
        if (!pedido) return res.status(400).send({ info: 'No existe el Pedido' })
        res.send({ info: 'Solicitud procesada exitosamente', pedido })
    } catch (err) {
        res.status(400).send({ info: 'Error al actualizar el pedido' })
    }
}

const deletePedidos = async (req, res) => {
    try {
        const pedido = await Pedidos.findByIdAndUpdate(req.params.id, { $set: { estado: false } }, { new: true })
        if (!pedido) return res.status(400).send({ info: 'No existe el Pedido' })
        res.send({ info: 'Solicitud procesada exitosamente', pedido })
    } catch (err) {
        res.status(400).send({ info: 'Error al eliminar el pedido' })
    }
}




module.exports = {
    getPedidos,
    getPedidoById,
    createPedidos,
    updatePedidos,
    deletePedidos,
}
