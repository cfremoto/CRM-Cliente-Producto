import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ClienteAxios from '../Utils/ClienteAxios'

const EditarCliente = (props) => {
  const { rif } = useParams()
  const navigate = useNavigate()

  const [cliente, setCliente] = useState({
    nombre: '',
    rif: '',
    email: ''
  })

  const consultaApi = async () => {
    const { data } = await ClienteAxios.get(`/clientes/${rif}`)
    setCliente(data.cliente)
  }

  useEffect(() => {
    consultaApi()
  }, [])

  const actualizarState = e => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value
    })
  }

  const activarBoton = () => {
    const { nombre, rif, email } = cliente
    const activoDesactivo = !nombre.length || !rif.length || !email.length
    return activoDesactivo
  }

  const updateClient = async e => {
    e.preventDefault()
    await ClienteAxios.put(`/clientes/${rif}`, cliente)
    navigate('/')
  }

  return (
    <>

      <h2>Editar Cliente</h2>

      <form onSubmit={updateClient}>
        <legend>Llena todos los campos</legend>

        <div className='campo'>
          <label>Nombre:</label>
          <input
            type='text'
            placeholder='Nombre Cliente'
            name='nombre'
            onChange={actualizarState}
            value={cliente.nombre}
          />
        </div>

        <div className='campo'>
          <label>Rif:</label>
          <input
            type='text'
            placeholder='Ejem. 1700000'
            name='rif'
            onChange={actualizarState}
            value={cliente.rif}
          />
        </div>

        <div className='campo'>
          <label>Email:</label>
          <input
            type='email'
            placeholder='Email Cliente'
            name='email'
            onChange={actualizarState}
            value={cliente.email}
          />
        </div>

        <div className='enviar'>
          <input
            type='submit'
            className='btn btn-azul'
            value='Guardar Cambios'
            disabled={activarBoton()}
          />
        </div>

      </form>
    </>
  )
}

export default EditarCliente
