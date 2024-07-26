import React from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import '../Estilos/AreaPG.css';

import image1 from '../Imagenes/login-image.png';
import image2 from '../Imagenes/noti-image.png';

const AreaPG = ({ role }) => {
  const estadoPG1 = true; // Estado de ejemplo para PG1
  const estadoPG2 = false; // Estado de ejemplo para PG2

  return (
    <div className="card-container">
      <Card className="area-pg-card">
        <Card.Img variant="top" src={image1} className="card-img-top" />
        <Card.Body>
          <Card.Title>PG1</Card.Title>
          {role !== 1 && (
            <>
              <ProgressBar now={60} />
              <p className="estado">{estadoPG1 ? 'Activo' : 'Inactivo'}</p>
            </>
          )}
          <Button variant="primary" className="mt-2">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="area-pg-card">
        <Card.Img variant="top" src={image2} className="card-img-top" />
        <Card.Body>
          <Card.Title>PG2</Card.Title>
          {role !== 1 && (
            <>
              <ProgressBar now={30} />
              <p className="estado">{estadoPG2 ? 'Activo' : 'Inactivo'}</p>
            </>
          )}
          <Button variant="primary" className="mt-2">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AreaPG;
