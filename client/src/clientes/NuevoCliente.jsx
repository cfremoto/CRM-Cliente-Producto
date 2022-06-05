import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClienteAxios from '../Utils/ClienteAxios'

const NuevoCliente = () => {
  const [cliente, setCliente] = useState({
    nombre: '',
    rif: '',
    email: ''
  })

  const actualizarState = e => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value
    })
  }

  const navigate = useNavigate()

  const activarBoton = () => {
    const { nombre, rif, email } = cliente
    const activoDesactivo = !nombre.length || !rif.length || !email.length
    return activoDesactivo
  }

  const createCliente = async (e) => {
    e.preventDefault()
    await ClienteAxios.post('/clientes', cliente)
    navigate('/')
  }

  return (
    <>

      <h2>Nuevo Cliente</h2>

      <form onSubmit={(e) => createCliente(e)}>
        <legend>Llena todos los campos</legend>

        <div className='campo'>
          <label>Nombre:</label>
          <input
            type='text'
            placeholder='Nombre Cliente'
            name='nombre'
            onChange={actualizarState}
          />
        </div>

        <div className='campo'>
          <label>Rif:</label>
          <input
            type='text'
            placeholder='Ejem. 1700000'
            name='rif'
            onChange={actualizarState}
          />
        </div>

        <div className='campo'>
          <label>Email:</label>
          <input
            type='email'
            placeholder='Email Cliente'
            name='email'
            onChange={actualizarState}
          />
        </div>

        <div className='enviar'>
          <input
            type='submit'
            className='btn btn-azul'
            value='Agregar Cliente'
            disabled={activarBoton()}
          />
        </div>

      </form>
    </>
  )
}

export default NuevoCliente
