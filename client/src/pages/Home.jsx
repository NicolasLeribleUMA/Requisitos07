export function Home() {
  return (
    <div>
      <h2>FITNESS WELL-BEING</h2>
      <nav style={{ textAlign: 'center', marginTop: '20px', backgroundColor: "#bec8d1"}}>
        <div style={{paddingBottom:'20px'}}>
       <button> <a href="/ejercicios">Ejercicios</a></button>
       {/* RUTA A EJERCICIO ^ */}
       </div>
       <div style={{paddingBottom:'20px'}}>
       <button> <a href="/rutinas">Rutinas</a> </button>
       {/* RUTA A RUTINAS ^ */}
       </div>
       <div>
       <button> <a href="/sesiones">Sesiones</a> </button>
       {/* RUTA A SESIONES ^ */}
       </div>
      </nav>
    </div>
  )
}
