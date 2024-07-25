import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import '../Estilos/Bienvenida.css';
import BannerRichard from '../Componentes/BannerRichard'; // Importa el componente BannerRichard
import BannerAlumnos from '../Componentes/BannerAlumnos'; // Importa el componente BannerAlumnos

const Bienvenida = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const nombre = "Benjamin";
  const role = 1; // Cambia este valor según sea necesario
  const fecha = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleAddClose = () => setShowAddModal(false);
  const handleAddShow = () => setShowAddModal(true);

  return (
    <div className="bienvenida-container">
      {role === 1 ? <BannerRichard /> : <BannerAlumnos />} {/* Condicional para renderizar BannerRichard o BannerAlumnos */}
      <div className="bienvenida-content">
        <h2>Bienvenido, {nombre}</h2>
        <p>{fecha}</p>
        {role === 1 && (
          <div className="recordatorios-container">
            <h3>Recordatorios</h3>
            <button className="btn-agregar" onClick={handleAddShow}>Agregar</button>
          </div>
        )}
      </div>

      <Modal show={showAddModal} onHide={handleAddClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Recordatorio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFechaRecordatorio">
              <Form.Label>Fecha Recordatorio</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="formDescripcionRecordatorio">
              <Form.Label>Descripción Recordatorio</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Ingrese la descripción del recordatorio" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>Cerrar</Button>
          <Button variant="success">Guardar cambios</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Bienvenida;
