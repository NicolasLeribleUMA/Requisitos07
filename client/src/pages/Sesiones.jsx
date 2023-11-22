import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import '../css/Sesiones.css'

const listaDeEjercicios = [
  { nombre: 'Ejercicio 1', repeticiones: '2 rep.', series: '5 series' },
  { nombre: 'Ejercicio 2', repeticiones: '3 rep.', series: '4 series' },
  { nombre: 'Ejercicio 3', repeticiones: '4 rep.', series: '7 series' },
  // ... otros ejercicios
];

export function Sesiones() {
  const [mostrarVentana, setMostrarVentana] = useState(false);
  const [mostrarVentanaConfirmacion, setMostrarVentanaConfirmacion] = useState(false);
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [modificarInfo, setModificarInfo] = useState(false);
  const [mostrarVentanaConfirmacionModif, setMostrarVentanaConfirmacionModif] = useState(false);
  const [preguntaBorrado, setPreguntaBorrado] = useState(false);
  const [mostrarVentanaConfirmacionBorrado, setMostrarVentanaConfirmacionBorrado] = useState(false);

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

{/* WIP: VENTANA DE CONFIRMACION DE AÑADIR EJERCICIO (Ejercicio añadido)*/}
{/* VENTANA DE VER EJERCICIO */}
{/* MODIFICAR DE VER EJERCICIO */}
{/* WIP: VENTANA DE CONFIRMACION DE MODIFICAR EJERCICIO (Ejercicio modificado)*/}
{/* VENTANA / pop-up PARA PREGUNTAR SI ESTAS SEGURO DE ELIMINAR EJERCICIO */}
{/* WIP: VENTANA DE CONFIRMACION DE ELIMINAR EJERCICIO (Ejercicio eliminado)*/}

  return (
    <div class="sesiones-container">
  <div class="sesiones-header">
    <h2>SESIONES</h2>
    <Link to="/home" class="sesiones-link-button">
      Atrás
    </Link>
    <button class="sesiones-button" onClick={abrirVentana}>Añadir sesión</button>
  </div>
  <div class="sesiones-info-header">
    <strong>Ejercicios</strong> | <strong>Repeticiones</strong> | <strong>Series</strong>
  </div>
  <ul class="sesiones-lista">
    {listaDeEjercicios.map((ejercicio, index) => (
      <li key={index} class="sesiones-item">
        <div class="sesiones-info">
          <div>
            {ejercicio.nombre} | {ejercicio.repeticiones} | {ejercicio.series}
          </div>
          <div class="sesiones-botones">
            <button onClick={abrirInfo}>Ver</button>
            <button onClick={modifAbrirInfo}>Modificar</button>
            <button onClick={abrePreguntaBorrado}>Borrar</button>
          </div>
        </div>
        <hr class="sesiones-linea" />
      </li>
        ))}
      </ul>

      {/* Ventana/Modal */}
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
  

  {mostrarInfo && (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <h4>Info sesión</h4>
      <button onClick={cerrarInfo}>Volver</button>
      {/* Cierra la ventana y te da mensaje positivo pero no añade nada aún!!!! */}
      </div>
      </div>
     </div> 
 )}

{modificarInfo && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <h3>Modificar Sesión</h3>
            <button onClick={modifCerrarInfo}>Cancelar</button>
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
           
          
            <button onClick={abrirVentanaConfirmacionModif}>Confirmar</button>
            {/* Este debería mostrar una ventana de ejercicio añadido y mostrarlo */}
            </div>
          </div>
        </div>
      )}

        {mostrarVentanaConfirmacionModif && (
         <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
           
           <div style={{ display: 'flex', justifyContent: 'space-between'}}>
           <h4>La sesión ha sido modificada</h4>
           <button onClick={cerrarVentanaConfirmacionModif}>Ok</button>
           {/* Cierra la ventana y te da mensaje positivo pero no añade nada aún!!!! */}
           </div>
           </div>
          </div> 
      )}

          {preguntaBorrado && (
              <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <h4>¿Está seguro de borrar esta sesión?</h4>
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
                  <h4>La sesión ha sido eliminada correctamente</h4>
                  <button onClick={cerrarVentanaConfirmacionBorrado}>Ok</button>
                  </div>
                  </div>
                  </div> 
              )}

</div>
);
}
