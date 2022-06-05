import { Route, Routes } from 'react-router-dom'
import Clientes from '../clientes/Clientes'
import EditarCliente from '../clientes/EditarCliente'
import NuevoCliente from '../clientes/NuevoCliente'
import EditarPedido from '../pedidos/EditarPedido'
import NuevoPedido from '../pedidos/NuevoPedido'
import Pedidos from '../pedidos/Pedidos'
import EditarProducto from '../productos/EditarProducto'
import NuevoProducto from '../productos/NuevoProducto'
import Productos from '../productos/Productos'

const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Clientes />} />
      <Route path='/clientes/nuevo' element={<NuevoCliente />} />
      <Route path='/clientes/editar/:rif' element={<EditarCliente />} />
      <Route path='/productos' element={<Productos />} />
      <Route path='/productos/nuevo' element={<NuevoProducto />} />
      <Route path='/productos/editar/:id' element={<EditarProducto />} />
      <Route path='/pedidos' element={<Pedidos />} />
      <Route path='/pedidos/nuevo/:rif' element={<NuevoPedido />} />
      <Route path='/pedidos/editar/:id' element={<EditarPedido />} />

    </Routes>
  )
}

export default Rutas
