import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import '../Estilos/Bienvenida.css';
import notiImage from '../Imagenes/noti-image.png'; // Asegúrate de que la ruta de la imagen sea correcta

const Bienvenida = () => {
  const [showNotiModal, setShowNotiModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const nombre = "Benjamin";
  const role = 1; // Cambia este valor según sea necesario
  const fecha = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleNotiClose = () => setShowNotiModal(false);
  const handleNotiShow = () => setShowNotiModal(!showNotiModal);
  const handleAddClose = () => setShowAddModal(false);
  const handleAddShow = () => setShowAddModal(true);

  return (
    <div className="bienvenida-container">
      <div className="navbar">
        <div className="navbar-left">
          <h1>TesiManager</h1>
        </div>
        {role === 1 && (
          <div className="navbar-right">
            <div className="navbar-item">
              <Form.Select aria-label="Área Alumnos" className="form-select">
                <option>Área Alumnos</option>
                <option value="1">PG1</option>
                <option value="2">PG2</option>
              </Form.Select>
            </div>
            <div className="navbar-item">
              <Form.Select aria-label="Historial" className="form-select">
                <option>Historial</option>
                <option value="1">2025</option>
              </Form.Select>
            </div>
          </div>
        )}
        <div className="navbar-item">
          <img src={notiImage} alt="Notificaciones" className="noti-image" onClick={handleNotiShow} />
        </div>
        <div className="navbar-item">
          <span>Foto User</span>
        </div>
      </div>
      <div className="bienvenida-content" onClick={handleNotiClose}>
        <h2>Bienvenido, {nombre}</h2>
        <p>Fresh — {fecha}</p>
        {role === 1 && (
          <div className="recordatorios-container">
            <h3>Recordatorios</h3>
            <button className="btn-success" onClick={handleAddShow}>Agregar</button>
          </div>
        )}
      </div>
      <Modal show={showNotiModal} onHide={handleNotiClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Notificaciones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Aquí van las notificaciones.</p>
        </Modal.Body>
      </Modal>

      <Modal show={showAddModal} onHide={handleAddClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Agregar Recordatorio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Contenido para agregar un nuevo recordatorio.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>Cerrar</Button>
          <Button variant="primary">Guardar cambios</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Bienvenida;
