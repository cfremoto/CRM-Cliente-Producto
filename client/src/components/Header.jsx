
const Header = () => {
  return (
    <>
      <header className='barra'>
        <div className='contenedor'>
          <h1>Operaciones Diarias WiFIXit</h1>
          <h2> {new Date().toDateString()} </h2>
        </div>
      </header>
    </>
  )
}

export default Header
