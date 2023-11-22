import React, { useState } from 'react';
import {Link} from 'react-router-dom'
// import '../css/ventanaAdd.css'

const listaDeEjercicios = [
  { nombre: 'Ejercicio 1', tipo: 'Cardio', privado: false },
  { nombre: 'Ejercicio 2', tipo: 'Fuerza', privado: true },
  { nombre: 'Ejercicio 3', tipo: 'Flexibilidad', privado: false },
  // ... otros ejercicios
];

export function Ejercicios() {
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
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
        <h2>EJERCICIOS</h2>
        <Link to="/home">
            <button>Atrás</button>
        </Link>
        <button onClick={abrirVentana}>Añadir ejercicio</button>
        {/*HAY QUE HACER QUE VUELVA A HOME*/}
      </div>
      <div style ={{textAlign: 'left', marginLeft: '40px'}}>
        <strong>Nombre</strong> | <strong>Tipo</strong> | <strong>Visibilidad</strong>
      </div>
      <ul>
        {listaDeEjercicios.map((ejercicio, index) => (
          <li key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                {ejercicio.nombre} | {ejercicio.tipo} | {ejercicio.privado ? 'Privado' : 'Público'}
              </div>
              <div style={{ display: 'inline-block' }}>
                <button onClick={abrirInfo}>Ver</button>
                <button onClick={modifAbrirInfo}>Modificar</button>
                <button onClick={abrePreguntaBorrado}>Borrar</button>
              </div>
            </div>
            <hr /> {/* Línea para separar visualmente los ejercicios */}
          </li>
        ))}
      </ul>

      {/* Ventana/Modal */}
      {mostrarVentana && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: '1' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <h3>Nuevo Ejercicio</h3>
            <button onClick={cerrarVentana}>Cancelar</button>
            </div>
            <p>Nombre: <input type="text" style = {{marginLeft:'10px'}}/></p>
            
            <p>Tipo: <input type="text" style = {{marginLeft:'10px'}}/></p>
           {/**  Esto es para ponerlo en modo seleccion, pero son valores fijados
            <p style={{marginRight:'100px'}}>Link:  
            
              <select id="Link" name="Link">
              <option value="Cardio">Cardio</option>
              <option value="Fuerza">Fuerza</option>
              <option value="Flexibilidad">Flexibilidad</option>
              </select>
            </p>
            **/}

            <p>Link: <input type="text" style = {{marginLeft:'10px'}}/></p>
            <p>Descripcion: <input type="text" id="descripcion" style = {{marginLeft:'10px'}}/></p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
           
            <label><input type= "checkbox" value = "Privado" /> Privado </label>
            
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
           <h4>El ejercicio ha sido añadido</h4>
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
      <h4>Info ejercicio</h4>
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
            <h3>Modificar Ejercicio</h3>
            <button onClick={modifCerrarInfo}>Cancelar</button>
            </div>
            <p>Nombre: <input type="text" style = {{marginLeft:'10px'}}/></p>
            
            <p>Tipo: <input type="text" style = {{marginLeft:'10px'}}/></p>
           {/**  Esto es para ponerlo en modo seleccion, pero son valores fijados
            <p style={{marginRight:'100px'}}>Link:  
            
              <select id="Link" name="Link">
              <option value="Cardio">Cardio</option>
              <option value="Fuerza">Fuerza</option>
              <option value="Flexibilidad">Flexibilidad</option>
              </select>
            </p>
            **/}

            <p>Link: <input type="text" style = {{marginLeft:'10px'}}/></p>
            <p>Descripcion: <input type="text" id="descripcion" style = {{marginLeft:'10px'}}/></p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
           
            <label><input type= "checkbox" value = "Privado" /> Privado </label>
            
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
           <h4>El ejercicio ha sido modificado</h4>
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

</div>
);
}
