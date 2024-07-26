import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Paginas/Login';
import Register from './Paginas/Register';
import Bienvenida from './Paginas/Bienvenida';
import AreaAlumnos from './Paginas/AreaAlumnos';
import AreaPGRic from './Paginas/AreaPGRic'; // Importar el nuevo componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Bienvenida" element={<Bienvenida />} />
        <Route path="/AreaAlumnos" element={<AreaAlumnos />} />
        <Route path="/AreaPGRic" element={<AreaPGRic />} /> {/* Nueva ruta añadida */}
      </Routes>
    </Router>
  );
}

export default App;
