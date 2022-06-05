const { Router } = require('express')
const router = Router()

const {getClientes,getClienteByRif,createCliente, updateCliente,deleteCliente} = require('../controllers/ControllerClientes')


router.get('/', getClientes)
router.get('/:rif', getClienteByRif)
router.post('/', createCliente)
router.put('/:rif', updateCliente)
router.delete('/:rif', deleteCliente)

module.exports = router
