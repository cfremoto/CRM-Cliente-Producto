const { Router } = require('express')
const router = Router()

const { getProductos,getProductoById,createProducto, updateProducto, deleteProducto,getProductsByQuery } = require('../controllers/ControllerProductos.js')

router.get('/', getProductos)
router.get('/:id', getProductoById)
router.post('/', createProducto)
router.post('/:query', getProductsByQuery)
router.put('/:id', updateProducto)
router.delete('/:id', deleteProducto)


module.exports = router
