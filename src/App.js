// libs
import React, { useState } from 'react';

// componentes
import Modal from './components/Modal';
//estilizações
import './App.css';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setIsModalVisible(true)} >Abrir Modal</button>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <h2>Modal do App</h2>
          <p>Este é Um exemplo de <strong>modal</strong>, existem melhorias a serem feitas porém já é uma grande vitória</p>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
