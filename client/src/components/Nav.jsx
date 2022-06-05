import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <aside className='sidebar col-3'>
      <h2>Administración</h2>

      <nav className='navegacion'>
        <Link to='/' className='clientes'>Clientes</Link>
        <Link to='/productos' className='productos'>Productos</Link>
        <Link to='/pedidos' className='pedidos'>Pedidos</Link>
      </nav>
    </aside>
  )
}

export default Nav
