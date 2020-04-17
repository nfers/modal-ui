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
        <Modal>
          <h2>Modal do App</h2>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
