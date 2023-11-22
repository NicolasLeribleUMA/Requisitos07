import React from 'react';

export function Confirmacion({ mostrar, cerrarVentana, abrirVentanaConfirmacion }) {
    return (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <h4>El ejercicio ha sido añadido</h4>
          <button onClick={cerrarVentanaConfirmacion}>Ok</button>
          {/* Cierra la ventana y te da mensaje positivo pero no añade nada aún!!!! */}
          </div>
          </div>
         </div>
      )
}