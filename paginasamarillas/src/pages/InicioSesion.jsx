import React, { useState } from "react";
import api from "../api/api";
import "./InicioSesion.css";
import { useNavigate, Link } from "react-router-dom";

/*Funcion ingreso busca generar el codigo necesario para enlazar la base de datos de la pagina con el usuario y el front end */

export default function Ingreso() {
  /*Constantes generadas para la API que linkea la base de datos */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  /*Agarra los elementos ingresados en el formulario y verifica que existan datos que enviar */

  const handleLogin = async (e) => {
    e.preventDefault(); 
    {/*En este apartado del try se esta generando un intento de acceder los datos en la base de datos, por tanto
      se genera un if para leer la respuesta del servidor ya que es un GET y si los datos son encontrado en la base de datos se usa el
      navigate para enlazar a la nueva pestaña en la cual se esta estudiando el encapsulamiento para documentos que necesitan loggeo
      */}
    try {
      const res = await api.login(email, password);

      localStorage.setItem("usuario", JSON.stringify(res.user || res.usuario));

      if (res.success == 1 || res.success === true) {
        alert(res.message);
        navigate("/dashboard");

        {/*De fallar la auth, el sistema arroja un error que nos dice cual es el problema y se cierra */}
      } else {
        alert(res.message);
      }
    } catch (e) {
      console.error("ERROR FETCH:", e);
    }
  };

  /*Aqui se genera el return de la funcion en donde se tiene la estructura basica de html y css para darle una jerarquia a los elementos
   */
  return (
    <div className="fondo-sesion">
      <h1 className="titulo">Inicio de sesión</h1>
      <p className="subtitulo-sesion">
        Para acceder, ingrese sus datos registrados
      </p>
      <main className="centro-sesion">
        <div className="foto-sesion"></div>
        <div className="cuadro-formulario">
          {/*Aqui se piden los imputs necesarios para acceder a la base de datos, el parametro required hace que los campos vacios no dejen
          realizar la peticion al sv  */}
          <form className="sesion-form">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/*Esta pequeña seccion redirigira a una pestaña que permita actualizar la contraseña si por casualidad se olvido, pero todavia
            se encuentra en proceso ya que requiere un metodo de auntenticacion real y que permita generacion de codigos o OTPS validos  */}
            <p className="olvido">
              <Link to="/Olvido">¿Olvido su contraseña?</Link>
            </p>
              {/*El boton realiza la accion de mandar los datos a la constante handle y esta a su vez a la api y la api a la base */}
            <button type="button" onClick={handleLogin}>
              Aceptar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
