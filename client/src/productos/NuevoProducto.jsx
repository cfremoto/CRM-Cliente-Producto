import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClienteAxios from '../Utils/ClienteAxios'

const NuevoProducto = () => {
  const navigate = useNavigate()

  const [producto, setProducto] = useState({
    descripcion: '',
    modelo: '',
    precio: ''
  })

  const sendApi = async (e) => {
    e.preventDefault()
    await ClienteAxios.post('/productos', producto)
    navigate('/productos')
  }

  const actualizarState = e => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  const activarBoton = () => {
    const { descripcion, modelo, precio } = producto
    const activoDesactivo = !descripcion.length || !modelo.length || !precio.length
    return activoDesactivo
  }

  return (
    <>
      <h2>Nuevo Producto</h2>

      <form onSubmit={sendApi}>
        <legend>Llena todos los campos</legend>

        <div className='campo'>
          <label>Descripcion:</label>
          <input
            type='text'
            placeholder='Nombre Producto'
            name='descripcion'
            onChange={actualizarState}
          />
        </div>

        <div className='campo'>
          <label>Modelo:</label>
          <input
            type='text'
            placeholder='Modelo del Producto'
            name='modelo'
            onChange={actualizarState}
          />
        </div>

        <div className='campo'>
          <label>Precio:</label>
          <input
            type='number'
            name='precio'
            min='0.00'
            step='0.01'
            placeholder='Precio'
            onChange={actualizarState}
          />
        </div>

        <div className='enviar'>
          <input
            type='submit'
            class='btn btn-azul'
            value='Agregar Producto'
            disabled={activarBoton()}
          />
        </div>
      </form>
    </>
  )
}

export default NuevoProducto
