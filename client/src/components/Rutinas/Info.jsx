import React from "react";

const Info = ({ mostrarInfo, cerrarInfo }) => {
  return (
    <>
       {mostrarInfo && (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <h4>Info rutina</h4>
      {/* AQUI DEBERIA MOSTRAR LA INFO DE LA RUTINA (SESIONES, OBJETIVO, CLIENTE ASIGNADO) */}
      <button onClick={cerrarInfo}>Volver</button>
      </div>
      </div>
     </div> 
 )}
    </>
  );
};

export default Info;
