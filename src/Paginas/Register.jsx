import React from 'react';
import '../Estilos/Register.css';
import registerImage from '../Imagenes/login-image.png'; // Ajusta la ruta si tienes una imagen diferente para registro

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-image">
        <img src={registerImage} alt="Register" />
      </div>
      <div className="register-form">
        <h1>Registrarse</h1>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Nombre completo" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Correo" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Contraseña" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Repetir contraseña" />
          </div>
          <div className="form-group">
            <select>
              <option value="">Sede</option>
              <option value="sede1">Sede 1</option>
              <option value="sede2">Sede 2</option>
            </select>
          </div>
          <button type="submit" className="register-button">Crear cuenta</button>
        </form>
        <div className="register-links">
          <span>¿Ya tienes cuenta? <a href="/">Iniciar sesión</a></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
