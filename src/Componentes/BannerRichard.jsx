import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Estilos/BannerRichard.css';
import notiImage from '../Imagenes/noti-image.png';

const BannerRichard = ({ role }) => {
  const [showNotiModal, setShowNotiModal] = useState(false);
  const navigate = useNavigate();

  const handleNotiClose = () => setShowNotiModal(false);
  const handleNotiShow = () => setShowNotiModal(!showNotiModal);

  const fechaActual = new Date();
  const year = fechaActual.getFullYear();

  const handleNavigatePG1 = () => {
    console.log("Navigating to PG1 with role:", role, "and year:", year);
    navigate('/AreaAlumnos', { state: { RoleAlumPG: 1, role } });
  };

  const handleNavigatePG2 = () => {
    console.log("Navigating to PG2 with role:", role, "and year:", year);
    navigate('/AreaAlumnos', { state: { RoleAlumPG: 2, role } });
  };

  const handleNavigateHistorial = (year) => {
    console.log("Navigating to Historial with year:", year, "and role:", role);
    navigate('/Historial', { state: { year, role } });
  };

  const years = [2025, 2024, 2023];

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
                    {years.map(year => (
                      <NavDropdown.Item key={year} onClick={() => handleNavigateHistorial(year)}>
                        {year}
                      </NavDropdown.Item>
                    ))}
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
