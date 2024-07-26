import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import '../Estilos/BannerRichard.css';
import notiImage from '../Imagenes/noti-image.png'; // Asegúrate de que la ruta de la imagen sea correcta

const BannerRichard = () => {
  const [showNotiModal, setShowNotiModal] = useState(false);
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleNotiClose = () => setShowNotiModal(false);
  const handleNotiShow = () => setShowNotiModal(!showNotiModal);

  // Funciones para manejar la navegación
  const handleNavigatePG1 = () => {
    navigate('/AreaAlumnos', { state: { RoleAlumPG: 1 } });
  };

  const handleNavigatePG2 = () => {
    navigate('/AreaAlumnos', { state: { RoleAlumPG: 2 } });
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">TesiManager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <>
                  <NavDropdown title="Área Alumnos" id="basic-nav-dropdown" className="custom-nav-dropdown">
                    <NavDropdown.Item onClick={handleNavigatePG1}>PG1</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleNavigatePG2}>PG2</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Historial" id="basic-nav-dropdown" className="custom-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">2025</NavDropdown.Item>
                  </NavDropdown>
                </>
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

export default BannerRichard;
