import React from "react";

const Asignar = ({
    abrirVentanaClientes,
    cerrarVentanaClientes,
    abrirVentanaConfirmacionClientes,
  cerrarVentanaConfirmacionClientes,
  asignarClientes,
  mostrarVentanaConfirmacionClientes,
}) => {
  return (
    <>
      {asignarClientes && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <h3>Tus clientes</h3>
            <button onClick={cerrarVentanaClientes}>Cancelar</button>
            </div>
            {/* <p>Sesiones: <input type="text" style = {{marginLeft:'10px'}}/></p> */}
        
            <ul>
        <li><input type="checkbox" id="checkbox1" name="checkbox1" /><label htmlFor="checkbox1">Pepito</label></li>
        <li><input type="checkbox" id="checkbox2" name="checkbox2" /><label htmlFor="checkbox2">Maria</label></li>
        <li> <input type="checkbox" id="checkbox3" name="checkbox3" /><label htmlFor="checkbox3">Estefania</label></li>
        <li> <input type="checkbox" id="checkbox4" name="checkbox4" /><label htmlFor="checkbox4">Roberto</label></li>
            </ul>
        {   /* AQUI DEBERIA YA ESTAR MARCADAS LAS CHECKBOX DE LOS CLIENTES QUE YA PERTENEZCAN A ESA RUTINA */}

            
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <button onClick={abrirVentanaConfirmacionClientes}>Confirmar</button>
            {/* Este debería mostrar una ventana los clientes han sido modificados y mostrarlo */}
            </div>
            
          </div>
        </div>
      )}

{mostrarVentanaConfirmacionClientes && (
                <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                  <h4>Tus clientes han sido editados correctamente</h4>
                  <button onClick={cerrarVentanaConfirmacionClientes}>Ok</button>
                  </div>
                  </div>
                  </div> 
              )}
    </>
  );
};

export default Asignar;
