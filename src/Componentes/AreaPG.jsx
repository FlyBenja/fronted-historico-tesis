import React, { useEffect, useState } from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Estilos/AreaPG.css';

import image1 from '../Imagenes/login-image.png';
import image2 from '../Imagenes/noti-image.png';

const AreaPG = ({ role, year, nombre }) => {
  const navigate = useNavigate();
  console.log(nombre);

  // Define los porcentajes de las barras de progreso
  const percentagePG1 = 100;
  const percentagePG2 = 0;

  // Estado para controlar si la card 2 está activa
  const [estadoPG2, setEstadoPG2] = useState(false);

  // Actualizar estadoPG2 basado en el porcentaje de PG1
  useEffect(() => {
    if (percentagePG1 === 100) {
      setEstadoPG2(true);
    }
  }, [percentagePG1]);

  const handleNavigatePG1 = () => {
    navigate('/AreaAlumnos', { state: { RoleAlumPG: 1, role, year, nombre} });
  };

  const handleNavigatePG2 = () => {
    navigate('/AreaAlumnos', { state: { RoleAlumPG: 2, role, year, nombre} });
  };

  const handleTareasPG1 = (alumno) => {
    navigate('/Tareas', { state: { RoleAlumPG: 1, role, alumno, year, percentage: percentagePG1 } });
  };

  const handleTareasPG2 = (alumno) => {
    navigate('/Tareas', { state: { RoleAlumPG: 2, role, alumno, year, percentage: percentagePG2 } });
  };

  const estadoPG1 = true; // Estado de ejemplo para PG1

  return (
    <div className="card-container">
      <Card className="area-pg-card">
        <Card.Img variant="top" src={image1} className="card-img-top" />
        <Card.Body>
          <Card.Title>PG1</Card.Title>
          {role !== 1 && (
            <>
              <ProgressBar now={percentagePG1} />
              <p className="percentage">{`${percentagePG1}%`}</p>
              <p className="estado">{estadoPG1 ? 'Activo' : 'Inactivo'}</p>
            </>
          )}
          <Button
            variant="primary"
            className="mt-2"
            onClick={role === 1 ? handleNavigatePG1 : () => handleTareasPG1(nombre)}
            disabled={!estadoPG1}
          >
            Ingresar
          </Button>
        </Card.Body>
      </Card>
      <Card className="area-pg-card">
        <Card.Img variant="top" src={image2} className="card-img-top" />
        <Card.Body>
          <Card.Title>PG2</Card.Title>
          {role !== 1 && (
            <>
              <ProgressBar now={percentagePG2} />
              <p className="percentage">{`${percentagePG2}%`}</p>
              <p className="estado">{estadoPG2 ? 'Activo' : 'Inactivo'}</p>
            </>
          )}
          <Button
            variant="primary"
            className="mt-2"
            onClick={role === 1 ? handleNavigatePG2 : () => handleTareasPG2(nombre)}
            disabled={!estadoPG2}
          >
            Ingresar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AreaPG;
