import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import ClienteAxios from '../Utils/ClienteAxios'
import FormularioBuscarProductos from './FormularioBuscarProducto'
import FormularioCantidadProductos from './FormularioCantidadProductos'

const NuevoPedido = () => {
  const { rif } = useParams()

  const [cliente, setCliente] = useState({})
  const [buscar, setBuscar] = useState('')
  const [productos, setProductos] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [total, setTotal] = useState(0)

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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }

    setBuscar('')
  }

  const leerDatosBusqueda = (e) => {
    setBuscar(e.target.value)
  }

  const modificarCantidadProductos = (i, value) => {
    const allProducts = [...productos]
    if (value === 'i') {
      if (allProducts[i].cantidad === 0) return
      allProducts[i].cantidad -= 1
    } else {
      allProducts[i].cantidad += 1
    }

    setProductos(allProducts)
  }

  const actualizarTotal = () => {
    if (productos.length === 0) {
      setTotal(0)
      return
    }

    let newTotal = 0
    productos.map(item => (newTotal += (item.cantidad * item.precio)))

    setTotal(newTotal)
  }

  const createPedido = () => {

  }

  useEffect(() => {
    consulApiCliente()
    actualizarTotal()
  }, [productos])

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
        onClick={(e) => setIsOpen(!isOpen)}
      >
        <i className='fas fa-plus-circle' />
        Agregar Productos
      </button>

      {
        isOpen &&
          <FormularioBuscarProductos
            buscarProductos={buscarProductos}
            leerDatosBusqueda={leerDatosBusqueda}
            setIsOpen={setIsOpen}
          />
      }

      <ul className='resumen'>
        {
          productos.map((producto, i) => (
            <FormularioCantidadProductos
              key={producto._id}
              producto={producto}
              i={i}
              modificarCantidadProductos={modificarCantidadProductos}
            />
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

            <p className='total'>Total a pagar: $ {total}</p>

            {total > 0
              ? <div className='enviar'>
                <input
                  type='submit'
                  className='btn btn-azul'
                  value='Agregar Pedido'
                  onClick={createPedido}
                />
              </div>
              : null}
          </>
      }

    </>
  )
}
export default NuevoPedido
