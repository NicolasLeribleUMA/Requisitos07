import React from "react";

const Modificar = ({
  modificarInfo,
  modifCerrarInfo,
  abrirVentanaConfirmacionModif,
  mostrarVentanaConfirmacionModif,
  cerrarVentanaConfirmacionModif,
}) => {
  return (
    <>
       {modificarInfo && (
                <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <h3>Modificar Rutina</h3>
                    <button onClick={modifCerrarInfo}>Cancelar</button>
                    </div>
                    {/* <p>Sesiones: <input type="text" style = {{marginLeft:'10px'}}/></p> */}
                    <p style={{marginRight:'100px'}}>Sesiones:  
                    
                    <select id="Sesiones" name="Sesiones">
                    <option value="Sesion1">Sesion1</option>
                    <option value="Sesion2">Sesion2</option>
                    <option value="Sesion3">Sesion3</option>
                    </select>
                    </p>
                    {/* Aqui deberiamos poner que pudiese elegir de las sesiones que ya tiene hechas Y DEBERIAN SALIR LAS SESIONES QUE YA ESTAN EN LA RUTINA (para poder editar)?? */}
                    {/* 2 casos : solo puede añadir cosas nuevas  || puede añadir y eliminar las sesiones */}
                    {/**Boton de añadir sesion que haga que salga un nuevo select para elegir otra, onCLick debe crear un nuevo select */}
                    <button>Añadir sesión</button>
                    <p>Objetivo: <input type="text" style = {{marginLeft:'10px'}}/></p>
            

                    
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                
                    
                    <button onClick={abrirVentanaConfirmacionModif}>Confirmar</button>
                    {/* Este debería mostrar una ventana la rutina ha sido modificada y mostrarlo */}
                    
                    </div>
                </div>
                </div>
            )}
      {mostrarVentanaConfirmacionModif && (
         <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
           
           <div style={{ display: 'flex', justifyContent: 'space-between'}}>
           <h4>La rutina ha sido modificada</h4>
           <button onClick={cerrarVentanaConfirmacionModif}>Ok</button>
           {/* Cierra la ventana y te da mensaje positivo pero no modifica nada aún!!!! */}
           </div>
           </div>
          </div> 
      )}
    </>
  );
};

export default Modificar;
