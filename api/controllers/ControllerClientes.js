const Clientes = require('../models/ModelClientes.js')


const getClientes = async (req, res) => {
    try {
        const clientes = await Clientes.find({ estado: true })
        res.send({info: 'Solicitud procesada exitosamente', clientes})
    } catch (err) {
        res.status(400).send({ info: 'Error en el servicio', err})
    }
}

const getClienteByRif = async (req, res) => {
    try {
        const cliente = await Clientes.findOne({ rif: req.params.rif })
        if (!cliente) return res.status(400).send({ info: 'No existe el cliente' })
        res.send({info: 'Solicitud procesada exitosamente', cliente})
    } catch (err) {
        res.status(400).send({ info: 'Error en el servicio', err})
    }
}

const createCliente = async (req, res) => {
    try {
        const clienteExistente = await Clientes.findOne({ rif: req.body.rif })
        if (clienteExistente) return res.status(400).send({ info: 'El cliente ya existe' })
        const cliente = new Clientes(req.body)
        await cliente.save()
        res.send({ info: 'Solicitud procesada exitosamente', cliente })

    } catch (err) {
        res.status(400).send({ info: 'Error en el servicio, no se pudo crear el Cliente', err})
    }
}

const updateCliente = async (req, res) => {
    try {
        const cliente = await Clientes.findOneAndUpdate(
            { rif: req.params.rif },
            { $set: { nombre: req.body.nombre, email: req.body.email } },
            { new: true }
        )
        if (!cliente) return res.status(400).send({ info: 'No existe el cliente' })
        res.send({info: 'Solicitud procesada exitosamente', cliente})

    } catch (err) {
        res.status(400).send({ info: 'Error en el servicio, no se pudo actualizar el Cliente', err})
    }
}

const deleteCliente = async(req, res) => {
    try {
        const cliente = await Clientes.findOneAndUpdate(
            { rif: req.params.rif },
            { $set: { estado: false } },
            {new: true}
        )
        res.send({info: 'Cliente eliminado exitosamente', cliente})
    } catch (erro) {
        res.status(400).send({ info: 'Error en el servicio, no se pudo eliminar el Cliente', err})
    }
}

module.exports = {
    getClientes,
    getClienteByRif,
    createCliente,
    updateCliente,
    deleteCliente,
}
