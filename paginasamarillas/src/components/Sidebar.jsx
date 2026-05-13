import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");

    if (storedUser) {
      try {
        const userObj = JSON.parse(storedUser);
        // Forzamos la prioridad: 1. nombres, 2. email, 3. Usuario
        const nombreFinal = userObj.nombres || "Usuario";
        setUserName(nombreFinal);
      } catch (error) {
        console.error("Error al parsear el usuario:", error);
      }
    }
  }, []);
  
  return (
    <aside className="sidebar">
      <div className="user-info">
        {userName && (
          <span>
            Bienvenido, <strong>{userName}</strong>
          </span>
        )}
      </div>

      <div className="sidebar-foto">
        <p>Foto</p>
      </div>

      <nav className="sidebar-menu">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
          <li>
            <Link to="/configuracion">Configuración</Link>
          </li>
          <li style={{ marginTop: "180px" }}>
            <Link to="/" onClick={() => localStorage.removeItem("usuario")}>
              Cerrar sesión
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
