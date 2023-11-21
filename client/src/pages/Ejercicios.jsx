import React, { useState } from 'react';

const listaDeEjercicios = [
  { nombre: 'Ejercicio 1', tipo: 'Cardio', privado: false },
  { nombre: 'Ejercicio 2', tipo: 'Fuerza', privado: true },
  { nombre: 'Ejercicio 3', tipo: 'Flexibilidad', privado: false },
  // ... otros ejercicios
];

export function Ejercicios() {
  const [mostrarVentana, setMostrarVentana] = useState(false);

  const abrirVentana = () => {
    setMostrarVentana(true);
  };

  const cerrarVentana = () => {
    setMostrarVentana(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <h2>Lista de Ejercicios</h2>
        <button onClick={abrirVentana}>Abrir Ventana</button>
      </div>
      <div>
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
                <button>Botón 1</button>
                <button>Botón 2</button>
                <button>Botón 3</button>
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
            <h3>Nuevo Ejercicio</h3>
            <label>Nombre:</label>
            <input type="text" />
            <label>Tipo:</label>
            <input type="text" />
            <label>Link:</label>
            <input type="text" />
            <label>Descripcion:</label>
            <input type="text" />
            <button onClick={cerrarVentana}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}
