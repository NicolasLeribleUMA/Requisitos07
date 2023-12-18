import "../css/Navigation.css";

const Navbar = () => {

    return (
      <header className="header">
        <a href = "/entrenador/home" className="logo">Fitness Well-Being</a>

        <nav className="navbar-notif">
          <a href="/entrenador/citas"><img src="assests/notification-bell.png" class="img-fluid"></img></a>
          <a>Notificaciones</a>
        </nav>
              
        
        <nav className="navbar">
        <a href="/perfil"><b>usuario</b></a>
        </nav>
      </header>
    );
  };
  
  export default Navbar;
  