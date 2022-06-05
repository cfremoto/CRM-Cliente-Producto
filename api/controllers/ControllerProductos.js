const Productos = require('../models/ModelProductos.js')

const getProductos = async (req, res) => {
    try {
        const productos = await Productos.find({ estado: true })
        res.send({ info: 'Solicitud procesada exitosamente', productos })
    } catch (err) {
        res.status(400).send({info: 'Error al obtener los productos'})
    }
}

const getProductoById = async (req, res) => {
    try {
        const producto = await Productos.findById(req.params.id)
        if (!producto) return res.status(400).send({ info: 'No existe el producto' })
        res.send({ info: 'Solicitud procesada exitosamente', producto })
    } catch (err) {
        res.status(400).send({ info: 'Error en el servicio', err })
    }
}

const getProductsByQuery = async (req, res) => {
    const { query } = req.params
    try {
        const productos = await Productos.find({ estado: true, descripcion: { $regex: query, $options: 'i' } })
        res.send({ info: 'Solicitud procesada exitosamente', productos })
    } catch (err) {
        res.status(400).send({ info: 'Error al obtener los productos' })
    }
}

const createProducto = async (req, res) => {
    try {
        const productoExistente = await Productos.findOne({ modelo: req.body.modelo })
        if (productoExistente) return res.status(400).send({ info: 'el producto ya existe' })
        const producto = new Productos(req.body)
        await producto.save()
        res.send({ info: 'Solicitud procesada exitosamente', producto })
    } catch (err) {
        res.status(400).send({ info: 'Error al crear el producto' })
    }
}

const updateProducto = async (req, res) => {
    try {
        const producto = await Productos.findByIdAndUpdate({ _id: req.params.id },
            { $set: { descripcion: req.body.descripcion, modelo: req.body.modelo, precio: req.body.precio } },
            { new: true })
            res.send({ info: 'Producto actualizado exitosamente', producto })
    } catch (err) {
        res.status(400).send({ info: 'Error al actualizar el producto' })
    }
}

const deleteProducto = async (req, res) => {
    try {
        const producto = await Productos.findByIdAndUpdate({ _id: req.params.id },
            { $set: { estado: false } },
            { new: true })
            res.send({ info: 'Producto eliminado exitosamente', producto })
    } catch (err) {
        res.status(400).send({ info: 'Error al eliminar el producto' })
    }
}

module.exports = {
    getProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto,
    getProductsByQuery,
}
