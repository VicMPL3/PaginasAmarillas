import "./Nosotros.css";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/Instagram.png";
import whatsapp from "../assets/Whatsap.png";
import youtube from "../assets/Youtube.png";

/*Se importan los elementos basicos para la visualizacion de la pagina y los enlaces, esta seccion es de las mas sencillas ya que,
actualmente se requiere de muchos apartados independientes para poder darle respuesta a todas las solicitudes pero estos todavia
se encuentran en desarollo entonces solo se linkeo lo que se pudo */

export default function Nosotros() {
  return (
    <div className="fondo-nosotros">
      <h1 className="titulo">Sobre nosotros</h1>

      <section className="quienes-somos">
        <h2>¿Quienes somos?</h2>
        <div>
          Somos una plataforma web interactiva diseñada para facilitar y sumar
          funcionalidades a la hora de conseguir un gran impacto por medio de
          herramientas tecnologicas que abren paso a nuevas formas de ver y
          ofrecer productos en internet.
        </div>
      </section>
      {/*Se deja preparado los enlaces para cuando esten las paginas ir depurando una por una */}
      <section className="preguntas">
        <h2>Preguntas frecuentes</h2>
        <div>
          <ul className="lista">
            <li>
              <Link to="/nosotros">Año de fundacion</Link>
            </li>
            <li>
              <Link to="/nosotros">Mision</Link>
            </li>
            <li>
              <Link to="/nosotros">Vision</Link>
            </li>
            <li>
              <Link to="/nosotros">Principal objetivo</Link>
            </li>
            <li>
              <Link to="/nosotros">Promesa de valor</Link>
            </li>
            <li>
              <Link to="/nosotros">Pagos</Link>
            </li>
            <li>
              <Link to="/nosotros">Socios</Link>
            </li>
          </ul>
        </div>
      </section>
      
      {/*En esta seccion se encuentran los logos linkeados a las redes sociales, en este momento son genericos pero pronto va a estar
      desarrollado el tema de las redes propias del proyecto */}
      <section className="redes">
        <h2>Redes sociales</h2>
        <div className="caja-redes">
          <a
            href="https://www.facebook.com/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://web.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="whatsapp" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
        </div>
      </section>
    </div>
  );
}
