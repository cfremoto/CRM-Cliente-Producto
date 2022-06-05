import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ClienteAxios from '../Utils/ClienteAxios'
import Pedido from './Pedido'

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([])
  const consultaApi = async () => {
    const { data } = await ClienteAxios.get('/pedidos')
    setPedidos(data.pedidos)
  }

  useEffect(() => {
    consultaApi()
  }, [])

  return (
    <>
      <h2>Pedidos</h2>

      <Link to='/' className='btn btn-verde nvo-cliente'>
        <i className='fas fa-plus-circle' />
        Nuevo Pedido
      </Link>

      <ul className='listado-pedidos'>
        {
          pedidos.map(pedido => (
            <Pedido key={pedido._id} pedido={pedido} consultaApi={consultaApi} />
          ))
        }
      </ul>
    </>
  )
}
export default Pedidos
