export function Home() {
  return (
    <div>
      <nav style={{ textAlign: 'center', marginTop: '20px', backgroundColor: "#bec8d1"}}>
        <div style={{paddingBottom:'20px'}}>
       <button> <a href="/ejercicios">Ejercicios</a></button>
       </div>
       <div style={{paddingBottom:'20px'}}>
       <button> <a href="/rutinas">Rutinas</a> </button>
       </div>
       <div>
       <button> <a href="/sesiones">Sesiones</a> </button>
       </div>
      </nav>
    </div>
  )
}
