import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {

  return (
    <aside className="sidebar">
      <div className="sidebar-user">
        <h3>Usuario</h3>
        <p>Bienvenido</p>
      </div>

      <div className="sidebar-foto">
        <p>Foto</p>

      </div>
    
    
      <nav className="sidebar-menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
          <li><Link to="/configuracion">Configuración</Link></li>
          <li style={{marginTop: '180px'}}><Link to="/">Cerrar sesión</Link></li>
    
        </ul>
      </nav>
    </aside>
  );
}