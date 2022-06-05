import Header from './components/Header'
import Nav from './components/Nav'
import Rutas from './routes/Rutas'

function App () {
  return (
    <div className='App'>
      <Header />
      <div className='grid contenedor contenido-principal'>
        <Nav />
        <main className='caja-contenido col-9'>
          <Rutas />
        </main>
      </div>
    </div>
  )
}

export default App
