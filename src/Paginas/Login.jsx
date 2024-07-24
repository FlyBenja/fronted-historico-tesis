import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Estilos/Login.css';
import loginImage from '../Imagenes/login-image.png';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica de autenticación antes de redirigir
    navigate('/Bienvenida');
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="login-form">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Usuario" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Contraseña" />
          </div>
          <button type="submit" className="login-button">Ingresar</button>
        </form>
        <div className="login-links">
          <span>No tienes cuenta? <a href="/register">Regístrate</a></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
