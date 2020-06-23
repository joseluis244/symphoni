import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <h1>nombre usuario</h1>
        <div className="ListaAcciones">
          <button className="Btn">crear usuario</button>
          <button className="Btn">eliminar usuario</button>
          <button className="Btn">modificar usuario</button>
          <button className="Btn">crear cliente</button>
          <button className="Btn">eliminar cliente</button>
          <button className="Btn">modificar clientes</button>
        </div>
      </div>
    </div>
  );
}

export default App;
