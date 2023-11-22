import React, { useState } from 'react';

const listaDeEjercicios = [
  { nombre: 'Ejercicio 1\nEjercicio 2', cliente: 'Pepito'},
  { nombre: 'Ejercicio 2', cliente: 'Maria'},
  { nombre: 'Ejercicio 3', cliente: 'Estefania' },
  // ... otros ejercicios
];

export function Rutinas() {
  const [mostrarVentana, setMostrarVentana] = useState(false);
  const [mostrarVentanaConfirmacion, setMostrarVentanaConfirmacion] = useState(false);

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
              <button>Ver</button>
              <button>Modificar</button>
              <button>Borrar</button>
              <button>Asignar cliente</button>
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
            {/* Aqui deberiamos poner que pudiese elegir de las sesiones que ya tiene hechas */}
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
    </div>
  );
}
