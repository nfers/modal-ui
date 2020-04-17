import React from 'react';

const Modal = ({ children }) => {

  return (
    <div className="modal">
      <div className="container">
        
        <div className="content">
          <h1>{children}</h1>
        </div>
        <button className="close">Sair</button>
      </div>
    </div>


  )

}

export default Modal;