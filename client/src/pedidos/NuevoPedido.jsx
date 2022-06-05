import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Modal from '../components/Modal'
import ClienteAxios from '../Utils/ClienteAxios'
import FormularioBuscarProductos from './FormularioBuscarProducto'
import FormularioCantidadProductos from './FormularioCantidadProductos'

const NuevoPedido = () => {
  const navigate = useNavigate()
  const { rif } = useParams()

  const [cliente, setCliente] = useState({})
  const [buscar, setBuscar] = useState('')
  const [productos, setProductos] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const consulApiCliente = async () => {
    const { data } = await ClienteAxios.get(`/clientes/${rif}`)
    setCliente(data.cliente)
  }

  const buscarProductos = async (e) => {
    e.preventDefault()
    const { data } = await ClienteAxios.post(`/productos/${buscar}`)
    if (data.productos.length) {
      const productosResultado = data.productos
      productosResultado.producto = productosResultado[0]._id
      productosResultado.cantidad = 0
      setProductos([...productos, productosResultado])
    } else {
      alert('No se encontraron productos')
    }

    setBuscar('')
  }

  const leerDatosBusqueda = (e) => {
    setBuscar(e.target.value)
  }

  const createPedido = () => {

  }

  useEffect(() => {
    consulApiCliente()
  }, [])
  console.log(productos)
  return (
    <>
      <h2>Nuevo Pedido</h2>

      <div className='ficha-cliente'>
        <h3>Datos de Cliente:</h3>
        <p>{`Nombre: ${cliente.nombre}`}</p>
        <p>{`Rif: ${cliente.rif}`}</p>
      </div>
      <button
        className='btn btn-verde nvo-cliente'
        onClick={(e) => setIsOpen(true)}
      >
        <i className='fas fa-plus-circle' />
        Agregar Productos
      </button>

      {
        isOpen &&
          <Modal>
            <FormularioBuscarProductos
              buscarProductos={buscarProductos}
              leerDatosBusqueda={leerDatosBusqueda}
              setIsOpen={setIsOpen}
            />
          </Modal>
      }

      <ul className='resumen'>
        {
          productos.map(producto => (
            <FormularioCantidadProductos key={producto._id} producto={producto} />
          ))
        }
      </ul>

      {
        productos.length &&
          <>
            <div className='campo'>
              <label>Total:</label>
              <input type='number' name='precio' placeholder='Precio' readonly='readonly' />
            </div>

            <div className='enviar'>
              <input
                type='submit'
                class='btn btn-azul'
                value='Agregar Pedido'
                onClick={createPedido}
              />
            </div>
          </>
      }

    </>
  )
}
export default NuevoPedido
