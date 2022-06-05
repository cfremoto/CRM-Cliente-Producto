
const FormularioBuscarProductos = ({ buscarProductos, leerDatosBusqueda }) => {
  return (
    <>
      <form
        onSubmit={buscarProductos}
      >
        <legend>Buscar un Producto y agregar la cantidad</legend>
        <div className='campo'>
          <label>Productos:</label>
          <input
            type='text'
            placeholder='Nombre Producto'
            name='productos'
            onChange={leerDatosBusqueda}
          />
        </div>
        <input
          type='submit'
          className='btn btn-azul btn-block'
          value='Buscar Producto'
        />
      </form>
    </>
  )
}

export default FormularioBuscarProductos
