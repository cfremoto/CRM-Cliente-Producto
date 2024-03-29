
const FormularioCantidadProductos = ({ producto, i, modificarCantidadProductos }) => {
  const { descripcion, modelo, precio } = producto[0]
  return (
    <>
      <li>
        <div className='texto-producto'>
          <p className='nombre'>{descripcion}</p>
          <p className='nombre'>{modelo}</p>
          <p className='precio'>{`$ ${precio}`}</p>
        </div>
        <div className='acciones'>
          <div className='contenedor-cantidad'>
            <i
              className='fas fa-minus'
              onClick={() => modificarCantidadProductos(i, 'i')}
            />
            <p>{producto.cantidad}</p>
            <i
              className='fas fa-plus'
              onClick={() => modificarCantidadProductos(i, 'd')}
            />
          </div>
          <button type='button' className='btn btn-rojo'>
            <i
              className='fas fa-minus-circle'
            />
            Eliminar Producto
          </button>
        </div>
      </li>
    </>
  )
}

export default FormularioCantidadProductos
