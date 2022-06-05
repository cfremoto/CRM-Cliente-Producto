const { Router } = require('express')
const router = Router()

const { getPedidos, getPedidoById,createPedidos,updatePedidos,deletePedidos,} = require('../controllers/ControllerPedidos.js')

router.get('/', getPedidos)
router.get('/:id', getPedidoById)
router.post('/', createPedidos)
router.put('/:id', updatePedidos)
router.delete('/:id', deletePedidos)




module.exports = router
