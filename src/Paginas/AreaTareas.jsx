import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, ProgressBar } from 'react-bootstrap';
import BannerRichard from '../Componentes/BannerRichard';
import BannerAlumnos from '../Componentes/BannerAlumnos';
import '../Estilos/AreaTareas.css';

import loginImage from '../Imagenes/login-image.png';
import notiImage from '../Imagenes/noti-image.png';

const AreaTareas = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { RoleAlumPG, role, alumno, year: receivedYear, percentage } = location.state || {};

  const fechaActual = receivedYear || new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  console.log("RoleAlumPG:", RoleAlumPG);
  console.log("Percentage:", percentage); // Asegúrate de que se recibe el porcentaje correctamente

  const tareas = ['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4', 'Tarea 5'];

  const handleCardClick = (tarea) => {
    navigate('/Tarea-Individual', { state: { RoleAlumPG, role, alumno, year: receivedYear, percentage, tarea } });
  };

  return (
    <div className="area-tareas-container">
      {role === 1 ? <BannerRichard role={role} /> : <BannerAlumnos />}
      <div className="area-tareas-content">
        {role !== 1 && (
          <div className="progress-bar-container">
            <ProgressBar now={percentage} label={`${percentage}%`} className="progress-bar-custom" />
          </div>
        )}
        <h2>Listado de Tareas de {alumno}</h2>
        <p>{fechaActual}</p>
        <div className="card-container-tareas">
          {tareas.map((tarea, index) => (
            <Card key={index} className="tarea-card" onClick={() => handleCardClick(tarea)}>
              <Card.Img variant="top" src={index % 2 === 0 ? loginImage : notiImage} />
              <Card.Body>
                <Card.Title>{tarea}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaTareas;
