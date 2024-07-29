import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Paginas/Login';
import Register from './Paginas/Register';
import Bienvenida from './Paginas/Bienvenida';
import AreaAlumnos from './Paginas/AreaAlumnos';
import AreaHistorial from './Paginas/AreaHistorial'; 
import AreaTareas from './Paginas/AreaTareas'; 
import AreaTareaIndv from './Paginas/AreaTareaIndv'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Bienvenida" element={<Bienvenida />} />
        <Route path="/AreaAlumnos" element={<AreaAlumnos />} />
        <Route path="/Historial" element={<AreaHistorial />} />
        <Route path="/Tareas" element={<AreaTareas />} />  
        <Route path="/Tarea-Individual" element={<AreaTareaIndv />} />  
      </Routes>
    </Router>
  );
}

export default App;
