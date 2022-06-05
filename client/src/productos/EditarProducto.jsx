import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ClienteAxios from '../Utils/ClienteAxios'

const EditarProducto = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const consultaApi = async () => {
    const { data } = await ClienteAxios.get(`/productos/${id}`)
    setProducto(data.producto)
  }

  const [producto, setProducto] = useState({
    descripcion: '',
    modelo: '',
    precio: ''
  })

  const actualizarState = e => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  const sendApi = async (e) => {
    e.preventDefault()
    await ClienteAxios.put(`/productos/${id}`, producto)
    navigate('/productos')
  }

  useEffect(() => {
    consultaApi()
  }, [])

  // const activarBoton = () => {
  //   const activoDesactivo = !producto.descripcion.length || !producto.modelo.length || !producto.precio.length
  //   return activoDesactivo
  // }

  return (
    <>
      <h2>Editar Producto</h2>

      <form onSubmit={sendApi}>
        <legend>Llena todos los campos</legend>

        <div className='campo'>
          <label>Descripcion:</label>
          <input
            type='text'
            placeholder='Nombre Producto'
            name='descripcion'
            onChange={actualizarState}
            value={producto.descripcion}
          />
        </div>

        <div className='campo'>
          <label>Modelo:</label>
          <input
            type='text'
            placeholder='Modelo del Producto'
            name='modelo'
            onChange={actualizarState}
            value={producto.modelo}
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
            value={producto.precio}
          />
        </div>

        <div className='enviar'>
          <input
            type='submit'
            class='btn btn-azul'
            value='Actualizar Producto'
            // disabled={activarBoton()}
          />
        </div>
      </form>
    </>
  )
}

export default EditarProducto
