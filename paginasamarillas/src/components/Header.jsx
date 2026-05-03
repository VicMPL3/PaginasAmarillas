import "../styles/Header.css";
import { Link } from "react-router-dom";

/*Se importan los elementos basicos para el correcto funcionamiento y visualizacion y se retorna la funcion Header que sera la misma
para todas las paginas, hasta la fecha */
export default function Header() {
  return (
    <header className="header">
      {/*Se crea una pequeña lista con los elementos necesarios para el funcionamiento del menu superior
      estos con css se le da apariencia de boton y redirigen a los apartados correspondientes generales. */}
      <nav className="caja-menu">
        <ul>
          <li>
            <Link to="/">Inicio</Link>  
          </li>
          <li>
            <Link to="/buscar">Buscar</Link>
          </li>
          <li>
            <Link to="/registro">Registrarse</Link>
          </li>
          <li>
            <Link to="/ingreso">Ingresar</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}
