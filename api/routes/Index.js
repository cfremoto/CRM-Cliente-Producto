const { Router } = require('express')
const router = Router()

const Clientes = require('./Clientes.js')
const Productos = require('./Productos.js')
const Pedidos = require('./Pedidos.js')


router.use('/api/clientes', Clientes)

router.use('/api/pedidos', Pedidos)

router.use('/api/productos', Productos)

module.exports = router
