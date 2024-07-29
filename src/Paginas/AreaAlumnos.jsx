import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BannerRichard from '../Componentes/BannerRichard';
import { Card } from 'react-bootstrap';
import '../Estilos/AreaAlumnos.css';

import loginImage from '../Imagenes/login-image.png';
import notiImage from '../Imagenes/noti-image.png';

const AreaAlumnos = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { RoleAlumPG, role, year: receivedYear } = location.state || {};

  // Determina la fecha a mostrar: año recibido o año actual
  const fechaActual = receivedYear || new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  console.log("Received year:", receivedYear, "role:", role, "RoleAlumPG:", RoleAlumPG);

  const alumnos = [
    'Axel Herrera', 'Maria Garcia', 'Juan Lopez', 'Ana Martinez', 'Pedro Gonzalez',
    'Luis Fernandez', 'Laura Sanchez', 'Carlos Ramirez', 'Sofia Diaz', 'Miguel Torres'
  ];

  const handleCardClick = (alumno) => {
    navigate('/Tareas', { state: { role, RoleAlumPG, alumno, year: fechaActual } });
  };

  return (
    <div className="area-alumnos-container">
      <BannerRichard role={role} />
      <div className="area-alumnos-content">
        <h2>{RoleAlumPG === 1 ? 'Listado De Alumnos PG1' : 'Listado De Alumnos PG2'}</h2>
        <p>{fechaActual}</p>
        <div className="card-container-alumnos">
          {alumnos.map((alumno, index) => (
            <Card key={index} className="alumno-card" onClick={() => handleCardClick(alumno)}>
              <Card.Img variant="top" src={index % 2 === 0 ? loginImage : notiImage} />
              <Card.Body>
                <Card.Title>{alumno}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaAlumnos;
