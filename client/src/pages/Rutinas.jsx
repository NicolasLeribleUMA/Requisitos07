import React, { useState } from 'react';

const listaDeEjercicios = [
  { nombre: 'Rutina 1', cliente: 'Pepito'},
  { nombre: 'Rutina 2', cliente: 'Maria'},
  { nombre: 'Rutina 3', cliente: 'Estefania' },
  // ... otros ejercicios
];

export function Rutinas() {
  const [mostrarVentana, setMostrarVentana] = useState(false);
  const [mostrarVentanaConfirmacion, setMostrarVentanaConfirmacion] = useState(false);
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [modificarInfo, setModificarInfo] = useState(false);
  const [mostrarVentanaConfirmacionModif, setMostrarVentanaConfirmacionModif] = useState(false);
  const [preguntaBorrado, setPreguntaBorrado] = useState(false);
  const [mostrarVentanaConfirmacionBorrado, setMostrarVentanaConfirmacionBorrado] = useState(false);
  const [asignarClientes, setAsignarClientes] = useState(false);
  const [mostrarVentanaConfirmacionClientes, setMostrarVentanaConfirmacionClientes] = useState(false);


  const abrirVentana = () => {
    setMostrarVentana(true);
  };

  const cerrarVentana = () => {
    setMostrarVentana(false);
  };
  const abrirVentanaConfirmacion = () => {
    setMostrarVentanaConfirmacion(true);
  };

  const cerrarVentanaConfirmacion = () => {
    setMostrarVentanaConfirmacion(false);
    setMostrarVentana(false);
  };

  const abrirInfo = () => {
    setMostrarInfo(true);
  };
  const cerrarInfo = () => {
    setMostrarInfo(false);
  };

  const modifAbrirInfo = () => {
    setModificarInfo(true);
  };
  const modifCerrarInfo = () => {
    setModificarInfo(false);
  };

  const abrirVentanaConfirmacionModif = () => {
    setMostrarVentanaConfirmacionModif(true);
  };

  const cerrarVentanaConfirmacionModif = () => {
    setMostrarVentanaConfirmacionModif(false);
    setModificarInfo(false);
  };

  const abrePreguntaBorrado = () => {
    setPreguntaBorrado(true);
  };
  const cierraPreguntaBorrado = () => {
    setPreguntaBorrado(false);
  };

  const abrirVentanaConfirmacionBorrado = () => {
    setMostrarVentanaConfirmacionBorrado(true);
  };

  const cerrarVentanaConfirmacionBorrado = () => {
    setMostrarVentanaConfirmacionBorrado(false);
    setPreguntaBorrado(false);
  };

  const abrirVentanaClientes = () => {
    setAsignarClientes(true);
  };

  const cerrarVentanaClientes = () => {
    setAsignarClientes(false);
  };

  const abrirVentanaConfirmacionClientes = () => {
    setMostrarVentanaConfirmacionClientes(true);
  };

  const cerrarVentanaConfirmacionClientes = () => {
    setMostrarVentanaConfirmacionClientes(false);
    setAsignarClientes(false);
  };

{/* WIP: VENTANA DE CONFIRMACION DE AÑADIR EJERCICIO (Ejercicio añadido)*/}
{/* VENTANA DE VER EJERCICIO */}
{/* MODIFICAR DE VER EJERCICIO */}
{/* WIP: VENTANA DE CONFIRMACION DE MODIFICAR EJERCICIO (Ejercicio modificado)*/}
{/* VENTANA / pop-up PARA PREGUNTAR SI ESTAS SEGURO DE ELIMINAR EJERCICIO */}
{/* WIP: VENTANA DE CONFIRMACION DE ELIMINAR EJERCICIO (Ejercicio eliminado)*/}

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
        <h2>RUTINAS</h2>
        <button onClick={abrirVentana}>Atrás</button>
        <button onClick={abrirVentana}>Añadir rutina</button>
        {/*HAY QUE HACER QUE VUELVA A HOME*/}
      </div>

   
    {/* Aqui TENEMOS QUE HACER UN GRID PARA PODER AÑADIR LOS EJERCICIOS POR SEPARADO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', margin: '20px'}}>
        {/* Creación de la grid con ejercicios */}
        {listaDeEjercicios.map((ejercicio, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
            <div>
              <strong>{ejercicio.nombre}</strong>
            </div>
            <div>{ejercicio.cliente}</div>
            <div style={{ marginTop: '10px' }}>
            <button onClick={abrirInfo}>Ver</button>
                <button onClick={modifAbrirInfo}>Modificar</button>
                <button onClick={abrePreguntaBorrado}>Borrar</button>
              <button onClick={abrirVentanaClientes}>Asignar cliente</button>
            </div>
          </div>
        ))}
      </div>
    


      {/* Ventana/Modal */}
      {mostrarVentana && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <h3>Nueva Rutina</h3>
            <button onClick={cerrarVentana}>Cancelar</button>
            </div>
            {/* <p>Sesiones: <input type="text" style = {{marginLeft:'10px'}}/></p> */}
            <p style={{marginRight:'100px'}}>Sesiones:  
            
              <select id="Sesiones" name="Sesiones">
              <option value="Sesion1">Sesion1</option>
              <option value="Sesion2">Sesion2</option>
              <option value="Sesion3">Sesion3</option>
              </select>
            </p>
            {/* Aqui deberiamos poner que pudiese elegir de las sesiones que ya tiene hechas (al añadir) */}
            {/**Boton de añadir sesion que haga que salga un nuevo select para elegir otra, onCLick debe crear un nuevo select */}
            <button>Añadir sesión</button>
            <p>Objetivo: <input type="text" style = {{marginLeft:'10px'}}/></p>
    

            
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
           
            
            <button onClick={abrirVentanaConfirmacion}>Confirmar</button>
            {/* Este debería mostrar una ventana la rutina ha sido añadida y mostrarlo */}
            </div>
          </div>
        </div>
      )}

      {mostrarVentanaConfirmacion && (
         <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
           
           <div style={{ display: 'flex', justifyContent: 'space-between'}}>
           <h4>La rutina ha sido añadida</h4>
           <button onClick={cerrarVentanaConfirmacion}>Ok</button>
           {/* Cierra la ventana y te da mensaje positivo pero no añade nada aún!!!! */}
           </div>
           </div>
          </div> 
      )}
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

        {modificarInfo && (
                <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <h3>Modificar Rutina</h3>
                    <button onClick={cerrarVentana}>Cancelar</button>
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

          {preguntaBorrado && (
              <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <h4>¿Está seguro de borrar este ejercicio?</h4>
                <button onClick={abrirVentanaConfirmacionBorrado}>Si</button>
                <button onClick={cierraPreguntaBorrado}>No</button>
                {/* Cierra la ventana y te da mensaje positivo pero no borra nada aún!!!! */}
                </div>
                </div>
              </div> 
          )}

        {mostrarVentanaConfirmacionBorrado && (
                <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                  <h4>El ejercicio ha sido eliminado correctamente</h4>
                  <button onClick={cerrarVentanaConfirmacionBorrado}>Ok</button>
                  </div>
                  </div>
                  </div> 
              )}

{asignarClientes && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <h3>Tus clientes</h3>
            <button onClick={cerrarVentanaClientes}>Cancelar</button>
            </div>
            {/* <p>Sesiones: <input type="text" style = {{marginLeft:'10px'}}/></p> */}
        
            <ul>
        <li><input type="checkbox" id="checkbox1" name="checkbox1" /><label htmlFor="checkbox1">Checkbox 1</label></li>
        <li><input type="checkbox" id="checkbox2" name="checkbox2" /><label htmlFor="checkbox2">Checkbox 2</label></li>
        <li> <input type="checkbox" id="checkbox3" name="checkbox3" /><label htmlFor="checkbox3">Checkbox 3</label></li>
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

</div>

    
  );
}
