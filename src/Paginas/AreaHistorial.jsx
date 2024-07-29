import React from 'react';
import { useLocation } from 'react-router-dom';
import BannerRichard from '../Componentes/BannerRichard';
import AreaPG from '../Componentes/AreaPG';
import '../Estilos/AreaHistorial.css';

const AreaHistorial = () => {
  const location = useLocation();
  const { year, role } = location.state;

  const nombre = "Historial";

  return (
    <div className="area-pg-container">
      <BannerRichard role={role} />
      <div className="area-pg-content">
        <h2>{nombre}</h2>
        <p>{year}</p>
        <AreaPG role={role} year={year} />
      </div>
    </div>
  );
};

export default AreaHistorial;
