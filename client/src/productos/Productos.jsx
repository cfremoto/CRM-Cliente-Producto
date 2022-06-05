import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ClienteAxios from '../Utils/ClienteAxios'
import Producto from './Producto'

const Productos = () => {
  const [productos, setProductos] = useState([])
  const consultaApi = async () => {
    const { data } = await ClienteAxios.get('/productos')
    setProductos(data.productos)
  }
  useEffect(() => {
    consultaApi()
  }, [])
  return (
    <>
      <h2>Productos</h2>

      <Link
        to='/productos/nuevo'
        className='btn btn-verde nvo-cliente'
      > <i className='fas fa-plus-circle' />
        Nuevo Producto
      </Link>

      <ul className='listado-productos'>
        {
          productos.map(producto => (
            <Producto
              key={producto._id}
              producto={producto}
              consultaApi={consultaApi}
            />
          ))
        }
      </ul>
    </>
  )
}

export default Productos
