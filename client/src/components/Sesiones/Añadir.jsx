import React from "react";

const Añadir = ({
  mostrarVentana,
  cerrarVentana,
  abrirVentanaConfirmacion,
  mostrarVentanaConfirmacion,
  cerrarVentanaConfirmacion,
}) => {
  return (
    <>
      {mostrarVentana && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <h3>Nueva Sesión</h3>
            <button onClick={cerrarVentana}>Cancelar</button>
            </div>
            <p style={{marginRight:'100px'}}>Ejercicios:  
            
            <select id="Ejercicios" name="Ejercicios">
            <option value="Ejercicio1">Ejercicio1</option>
            <option value="Ejercicio2">Ejercicio2</option>
            <option value="Ejercicio3">Ejercicio3</option>
            </select>
          </p>
          <button>Añadir ejercicio</button>
           

            <p>Repeticiones: <input type="number" min='1' placeholder='1' style = {{marginLeft:'10px'}}/></p>
            <p>Series: <input type="number" min='1' placeholder='1' style = {{marginLeft:'10px'}}/></p>
          

           
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      
            <button onClick={abrirVentanaConfirmacion}>Confirmar</button>
            {/* Este debería mostrar una ventana de ejercicio añadido y mostrarlo */}
            </div>
          </div>
        </div>
      )}

{mostrarVentanaConfirmacion && (
         <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
           
           <div style={{ display: 'flex', justifyContent: 'space-between'}}>
           <h4>La sesión ha sido añadida</h4>
           <button onClick={cerrarVentanaConfirmacion}>Ok</button>
           {/* Cierra la ventana y te da mensaje positivo pero no añade nada aún!!!! */}
           </div>
           </div>
          </div> 
      )}
    </>
  );
};

export default Añadir;
