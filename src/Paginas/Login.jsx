import React from 'react';
import '../Estilos/Login.css';
import loginImage from '../Imagenes/login-image.png';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="login-form">
        <h1>Iniciar Sesión</h1>
        <form>
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
