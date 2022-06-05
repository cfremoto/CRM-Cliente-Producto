
import './modal.css'

const Modal = ({ titulo, children }) => {
  return (
    <div className='contenedor__over'>
      <div className='contenedor__modal'>
        <p className='close__modal'>X</p>
        <h2 className='titulo__modal'>{titulo}</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal
