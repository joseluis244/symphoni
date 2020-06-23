import React, { useState } from 'react';
import './App.scss';

import CrearCliente from "./componentes/CrearCliente"
import EliminarCliente from "./componentes/EliminarCliente"
import ModificarCliente from "./componentes/ModificarCliente"
import CrearUsuario from "./componentes/CrearUsuario"
import EliminarUsuario from "./componentes/EliminarUsuario"
import ModificarUsuario from "./componentes/ModificarUsuario"

function App() {
  const [Componente, setComponete] = useState()
  const [Permisos, setpermisos] = useState({
    CrearUsuario:false,
    EliminarUsuario: true,
    ModificarUsuario:true,
    CrearCliente:true,
    EliminarCliente:true,
    ModificarCliente:true
  })
  let Manejo1 = ()=>{
    setComponete(<CrearCliente/>)
  }
  let Manejo2 = ()=>{
    setComponete(<EliminarCliente/>)
  }
  let Manejo3 = ()=>{
    setComponete(<ModificarCliente/>)
  }
  let Manejo4 = ()=>{
    setComponete(<CrearUsuario/>)
  }
  let Manejo5 = ()=>{
    setComponete(<EliminarUsuario/>)
  }
  let Manejo6 = ()=>{
    setComponete(<ModificarUsuario/>)
  }
  return (
    <div className="App">
      <div>
        <h1>nombre usuario</h1>
        <div className="ListaAcciones">
          {Permisos.CrearUsuario && <button onClick={Manejo1} className="Btn">crear usuario</button>}
          <button onClick={Manejo2} className="Btn">eliminar usuario</button>
          <button onClick={Manejo3} className="Btn">modificar usuario</button>
          <button onClick={Manejo4} className="Btn">crear cliente</button>
          <button onClick={Manejo5} className="Btn">eliminar cliente</button>
          <button onClick={Manejo6} className="Btn">modificar clientes</button>
        </div>
        <div>
          {Componente}          
        </div>        
      </div>
    </div>
  );
}

export default App;
