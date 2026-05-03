import "../styles/Footer.css";
import { Link } from "react-router-dom";

/*Se importan los elementos necesarios para hacer los enlaces y los estilos, se retorna la funcion footer que sera la misma para todas las pages */
export default function Footer() {
  return (
    /*Se genera una pequeña lista con los 3 elementos que actualmente componen el footer de modo que se puedan agregar a futuro,
    si es necesario mas elementos y enlazarlos directamente, por el momento los links redirigen nuevamente al apartado de nosotros
    hasta que se realice la paginacion pertinente para atender los requerimientos  */
    <footer className="footer">
     <nav>
        <ul>
          <li>
             <Link to="./nosotros">PQRS</Link>
          </li>
          <li>
            <Link to="./nosotros">Términos y condiciones</Link>
          </li>
          <li>
            <Link to="./nosotros">Política de tratamiento de Datos Personales</Link>
          </li>
        </ul>

     </nav>
    </footer>
  );
}
