import { Link } from 'react-router-dom'
import ClienteAxios from '../Utils/ClienteAxios'

const Cliente = ({ cliente, clientes }) => {
  const { nombre, email, rif } = cliente
  const eliminarCliente = async (rif) => {
    await ClienteAxios.delete(`/clientes/${rif}`)
    clientes()
  }

  return (
    <li className='cliente'>
      <div className='info-cliente'>
        <p className='nombre'>{nombre}</p>
        <p className='empresa'>Mi_Compañia</p>
        <p> {email}</p>
        <p> {rif}</p>
      </div>
      <div className='acciones'>
        <Link
          to={`/clientes/editar/${rif}`}
          className='btn btn-azul'
        >
          <i className='fas fa-pen-alt' />
          Editar Cliente
        </Link>
        <Link
          to={`/pedidos/nuevo/${rif}`}
          className='btn btn-amarillo'
        >
          <i className='fas fa-plus' />
          Nuevo Pedido
        </Link>
        <button
          type='button'
          className='btn btn-rojo btn-eliminar'
          onClick={() => eliminarCliente(rif)}
        >
          <i className='fas fa-times' />
          Eliminar Cliente
        </button>
      </div>
    </li>
  )
}

export default Cliente
