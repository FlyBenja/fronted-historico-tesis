import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Paginas/Login';
import Register from './Paginas/Register';
import Bienvenida from './Paginas/Bienvenida';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Bienvenida" element={<Bienvenida />} />
      </Routes>
    </Router>
  );
}

export default App;
