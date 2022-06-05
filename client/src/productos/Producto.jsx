import { Link } from 'react-router-dom'
import ClienteAxios from '../Utils/ClienteAxios'

const Producto = ({ producto, consultaApi }) => {
  const { _id, descripcion, modelo, precio } = producto
  const eliminarProducto = async (id) => {
    await ClienteAxios.delete(`/productos/${id}`)
    consultaApi()
  }

  return (
    <>
      <li className='producto'>
        <div className='info-producto'>
          <p className='nombre'> {`${descripcion}  modelo: ${modelo}`} </p>
          <p className='precio'> {`$ ${precio}`} </p>
        </div>
        <div className='acciones'>
          <Link
            to={`/productos/editar/${_id}`}
            className='btn btn-azul'
          >
            <i className='fas fa-pen-alt' />
            Editar Producto
          </Link>

          <button
            type='button'
            className='btn btn-rojo btn-eliminar'
            onClick={() => eliminarProducto(_id)}
          >
            <i className='fas fa-times' />
            Eliminar Producto
          </button>
        </div>
      </li>
    </>
  )
}
export default Producto
