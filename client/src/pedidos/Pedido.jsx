
const Pedido = ({ pedido, consultaApi }) => {
  const obj = {
    _id: pedido._id,
    cliente: pedido.cliente.nombre,
    productos: [{
      descripcion: '',
      modelo: '',
      precio: ''
    }]
  }
  return (
    <>
      <li class='pedido'>
        <div class='info-pedido'>
          <p class='id'>ID: {obj._id}</p>
          <p class='nombre'>Cliente: {obj.cliente}</p>

          <div class='articulos-pedido'>
            <p class='productos'>Artículos Pedido: </p>
            <ul>
              {
                obj.productos.map(producto => (
                  <li key={obj._id}>
                    <p>Descripcion: </p>
                    <p>Modelo: </p>
                    <p>Precio: </p>
                  </li>
                ))
              }
            </ul>
          </div>
          <p class='total'>Total: $3,500 </p>
        </div>
        <div class='acciones'>
          <a href='#' class='btn btn-azul'>
            <i class='fas fa-pen-alt' />
            Editar Pedido
          </a>

          <button type='button' class='btn btn-rojo btn-eliminar'>
            <i class='fas fa-times' />
            Eliminar Pedido
          </button>
        </div>
      </li>
    </>
  )
}
export default Pedido
