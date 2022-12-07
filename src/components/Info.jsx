import React from 'react'
import AppContext from '../context';

const Info = ({ image, title, description }) => {
    const { setCartOpened } = React.useContext(AppContext)

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              src= {image}   
              className="mb-20"
              width="120px"
              alt="emptyTrashcan"
            />
            <h2>{title}</h2>
            <p className="opacity-6">
              {description}
            </p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
              Вернуться назад
              <img src="https://raw.githubusercontent.com/Torin72/STORE/8b4a81f0c42eccb11212737af00b96e5bfc0d878/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
  )
}

export default Info;