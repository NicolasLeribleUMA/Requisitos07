import "../css/Navigation.css";

const Navbar = () => {

    const homeURL = localStorage.getItem("isTrainer") === "true" ?
        "/entrenador/home" : "/cliente/home"

    return (
      <header className="header">
        <a href = {homeURL} className="logo">Fitness Well-Being</a> :

        <nav className="navbar-notif">
          <a href="/entrenador/citas">🔔</a>
        </nav>
              
        
        <nav className="navbar">
        <a href="#"><b>usuario</b></a>
        </nav>
      </header>
    );
  };
  
  export default Navbar;
  