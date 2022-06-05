import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ClienteAxios from '../Utils/ClienteAxios'
import Cliente from './Cliente'
import FormularionBuscarClientes from './FormularioBuscarClientes'

const Clinetes = () => {
  const clientes = async () => {
    const { data } = await ClienteAxios.get('/clientes')
    setClientesState(data.clientes)
  }

  const [clientesState, setClientesState] = useState([])
  const [clientesFiltrados, setClientesFiltrados] = useState([])
  const [buscar, setBuscar] = useState('')

  const actualizarFiltrado = e => {
    e.preventDefault()
    let filtrados = clientesState.filter(el => el.nombre.includes(buscar))
    if (!filtrados.length) {
      filtrados = clientesState.filter(el => el.rif === buscar)
    }
    setClientesFiltrados(filtrados)

    setBuscar('')
  }

  useEffect(() => {
    clientes()
  }, [])
  console.log(buscar)
  return (
    <>
      <h2>Clientes</h2>

      <Link to='/clientes/nuevo' className='btn btn-verde nvo-cliente'>
        <i className='fas fa-plus-circle' />
        Nuevo Cliente
      </Link>

      <FormularionBuscarClientes
        buscar={buscar}
        setBuscar={setBuscar}
        actualizarFiltrado={actualizarFiltrado}
        setClientesFiltrados={setClientesFiltrados}
      />

      <ul className='listado-clientes'>
        {
          clientesFiltrados.length
            ? clientesFiltrados.map(cliente => (
              <Cliente
                key={cliente._id}
                cliente={cliente}
                clientes={clientes}
              />
            ))
            : clientesState.map(cliente => (
              <Cliente
                key={cliente._id}
                cliente={cliente}
                clientes={clientes}
              />
            ))
      }
      </ul>
    </>
  )
}

export default Clinetes
