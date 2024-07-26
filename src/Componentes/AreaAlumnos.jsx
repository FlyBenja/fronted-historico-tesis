import React from 'react';
import { useLocation } from 'react-router-dom'; // Importa el hook useLocation
import BannerRichard from '../Componentes/BannerRichard';
import { Card } from 'react-bootstrap';
import '../Estilos/AreaAlumnos.css';

import loginImage from '../Imagenes/login-image.png'; // Importar imagen de login
import notiImage from '../Imagenes/noti-image.png'; // Importar imagen de notificación

const AreaAlumnos = () => {
  const location = useLocation(); // Inicializa el hook useLocation
  const { RoleAlumPG } = location.state || {}; // Obtén el valor de RoleAlumPG del estado

  const alumnos = Array(25).fill('Axel Herrera'); // Lista de alumnos para mostrar

  return (
    <div className="area-alumnos-container">
      <BannerRichard />
      <div className="area-alumnos-content">
        <h2>{RoleAlumPG === 1 ? 'Listado De Alumnos PG1' : 'Listado De Alumnos PG2'}</h2>
        <p>August 21, 2023</p>
        <div className="card-container-alumnos">
          {alumnos.map((alumno, index) => (
            <Card key={index} className="alumno-card">
              <Card.Img variant="top" src={index % 2 === 0 ? loginImage : notiImage} /> {/* Alternar entre las imágenes */}
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
