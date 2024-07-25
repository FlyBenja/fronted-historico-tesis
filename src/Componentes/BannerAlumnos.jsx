import React, { useState } from 'react';
import { Navbar, Container, Nav, Modal } from 'react-bootstrap';
import '../Estilos/BannerAlumnos.css';
import notiImage from '../Imagenes/noti-image.png'; // Asegúrate de que la ruta de la imagen sea correcta

const BannerAlumnos = () => {
  const [showNotiModal, setShowNotiModal] = useState(false);

  const handleNotiClose = () => setShowNotiModal(false);
  const handleNotiShow = () => setShowNotiModal(!showNotiModal);

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">TesiManager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">
                <img src={notiImage} alt="Notificaciones" className="noti-image" onClick={handleNotiShow} />
              </Nav.Link>
              <Nav.Link href="#" className="navbar-link">Foto User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showNotiModal} onHide={handleNotiClose} centered>
        <Modal.Header>
          <Modal.Title>Notificaciones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Aquí van las notificaciones.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BannerAlumnos;
