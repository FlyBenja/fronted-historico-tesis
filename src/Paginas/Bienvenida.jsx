import React, { useState } from 'react';
import { Form, Modal, Button, Card } from 'react-bootstrap';
import '../Estilos/Bienvenida.css';
import BannerRichard from '../Componentes/BannerRichard';
import BannerAlumnos from '../Componentes/BannerAlumnos';

import image1 from '../Imagenes/login-image.png';
import image2 from '../Imagenes/noti-image.png';

const Bienvenida = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [recordatorios, setRecordatorios] = useState([]);
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState('');

  const nombre = "Benjamin";
  const role = 2;
  const fechaActual = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleAddClose = () => {
    setShowAddModal(false);
    setError('');
    setEditIndex(null);
    setFecha('');
    setDescripcion('');
  };

  const handleAddShow = () => setShowAddModal(true);

  const handleSaveRecordatorio = () => {
    if (!fecha || !descripcion) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    if (editIndex !== null) {
      const nuevosRecordatorios = [...recordatorios];
      nuevosRecordatorios[editIndex] = { fecha, descripcion };
      setRecordatorios(nuevosRecordatorios);
    } else {
      setRecordatorios([...recordatorios, { fecha, descripcion }]);
    }

    handleAddClose();
  };

  const handleDeleteRecordatorio = (index) => {
    const nuevosRecordatorios = recordatorios.filter((_, i) => i !== index);
    setRecordatorios(nuevosRecordatorios);
  };

  const handleEditRecordatorio = (index) => {
    const recordatorio = recordatorios[index];
    setFecha(recordatorio.fecha);
    setDescripcion(recordatorio.descripcion);
    setEditIndex(index);
    setShowAddModal(true);
  };

  return (
    <div className="bienvenida-container">
      {role === 1 ? <BannerRichard /> : <BannerAlumnos />}
      <div className="bienvenida-content">
        <h2>Bienvenid@, {nombre}</h2>
        <p>{fechaActual}</p>
        {role === 1 && (
          <div className="recordatorios-container">
            <div className="recordatorios-header">
              <h3>Recordatorios</h3>
              <button className="btn-agregar" onClick={handleAddShow}>Agregar</button>
            </div>
            <ul className="recordatorios-list">
              {recordatorios.map((recordatorio, index) => (
                <li key={index} className="recordatorios-item">
                  <div className="recordatorio-info">
                    <p><strong>Fecha:</strong> {recordatorio.fecha}</p>
                    <p><strong>Descripción:</strong> {recordatorio.descripcion}</p>
                    <Button variant="warning" onClick={() => handleEditRecordatorio(index)}>Editar</Button>
                    <Button variant="danger" onClick={() => handleDeleteRecordatorio(index)}>Eliminar</Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {role !== 1 && (
          <div className="card-container">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image1} className="card-img-top" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image2} className="card-img-top" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>

      <Modal show={showAddModal} onHide={handleAddClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? 'Editar Recordatorio' : 'Agregar Recordatorio'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Form>
            <Form.Group controlId="formFechaRecordatorio">
              <Form.Label>Fecha Recordatorio</Form.Label>
              <Form.Control
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDescripcionRecordatorio">
              <Form.Label>Descripción Recordatorio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la descripción del recordatorio"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>Cerrar</Button>
          <Button variant="success" onClick={handleSaveRecordatorio}>Guardar cambios</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Bienvenida;
