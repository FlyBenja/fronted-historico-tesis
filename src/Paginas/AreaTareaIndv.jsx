import React from 'react';
import { useLocation } from 'react-router-dom';
import BannerRichard from '../Componentes/BannerRichard';
import BannerAlumnos from '../Componentes/BannerAlumnos';
import '../Estilos/AreaTareaIndv.css';

const AreaTareaIndv = () => {
  const location = useLocation();
  const { RoleAlumPG, role, alumno, year: receivedYear, tarea } = location.state || {};
  console.log(RoleAlumPG)
  const fechaActual = receivedYear || new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="area-tarea-indv-container">
      {role === 1 ? <BannerRichard role={role} /> : <BannerAlumnos />}
      <div className="area-tarea-indv-content">
        <h2>Detalle de {tarea} de {alumno}</h2>
        <p>{fechaActual}</p>
      </div>
    </div>
  );
};

export default AreaTareaIndv;
