// libs
import React, { useState } from 'react';

// componentes
import Modal from './components/Modal';
//estilizações
import './App.css';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  async function api(url) {
    const response = await fetch('http://api.deezer.com/search/artist?q=beyonce')
    console.log(response.data)
    return response.data;

  }

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
