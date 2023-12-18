import "../css/Navigation.css";

const Navbar = () => {

    return (
      <header className="header">
        <a href = "/entrenador/home" className="logo">Fitness Well-Being</a>

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
  