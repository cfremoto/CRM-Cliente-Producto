
const FormularioBuscarClientes = ({ buscar, setBuscar, actualizarFiltrado, setClientesFiltrados }) => {
  const actualizarState = e => {
    setBuscar(e.target.value)
  }
  const reset = (e) => {
    setClientesFiltrados('')
    setBuscar('')
  }
  return (
    <>
      <form onSubmit={(e) => actualizarFiltrado(e)}>
        <legend>Buscar Clientes</legend>
        <div className='campo'>
          <label>Cliente:</label>
          <input
            type='text'
            placeholder='Nombre Cliente'
            name='clientebuscado'
            onChange={actualizarState}
            value={buscar}
          />
        </div>
        <div className='cajon'>
          <input
            type='submit'
            className='btn btn-azul btn-eliminar'
            value='Buscar Cliente'
          />
          <input
            type='button'
            className='btn btn-azul btn-eliminar'
            value='Todos Los Clientes'
            onClick={reset}
          />
        </div>
      </form>
    </>
  )
}

export default FormularioBuscarClientes
