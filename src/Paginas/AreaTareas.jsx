import React from 'react';
import { useLocation } from 'react-router-dom';
import BannerRichard from '../Componentes/BannerRichard';
import BannerAlumnos from '../Componentes/BannerAlumnos';
import { Card } from 'react-bootstrap';
import '../Estilos/AreaTareas.css';

import loginImage from '../Imagenes/login-image.png'; // Importar imagen de login
import notiImage from '../Imagenes/noti-image.png'; // Importar imagen de notificación

const AreaTareas = () => {
  const location = useLocation();
  const { RoleAlumPG, role, alumno, year } = location.state || {};
  console.log(RoleAlumPG);

  const tareas = ['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4', 'Tarea 5']; // Lista de tareas para mostrar

  //const fechaActual = new Date().toLocaleDateString('es-ES', {
    //year: 'numeric',
   // month: 'long',
   // day: 'numeric'
 // });

  return (
    <div className="area-tareas-container">
      {role === 1 ? <BannerRichard role={role} /> : <BannerAlumnos />}
      <div className="area-tareas-content">
        <h2>Listado de Tareas de {alumno}</h2>
        <p>{year}</p>
        <div className="card-container-tareas">
          {tareas.map((tarea, index) => (
            <Card key={index} className="tarea-card">
              <Card.Img variant="top" src={index % 2 === 0 ? loginImage : notiImage} /> {/* Alternar entre las imágenes */}
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
