import { useState } from "react";
import api from "../api/api";
import "../styles/General.css";

export default function OlvidoContrasena() {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.forgotPassword(correo);

    setMensaje(res.message);

    if (res.reset_link) {
      setLink(res.reset_link);
    }
  };

  return (
    <div className="general">
      <h1 className="titulo">Recuperar contraseña</h1>

      <div className="formulario_olvido">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            placeholder="Ingrese su correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>

      {mensaje && (
        <div className="message-response">
          <p>{mensaje}</p>

          {link && (
            <div className="link-box">
              <a href={link} target="_blank" rel="noopener noreferrer">
                Ver enlace generado
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
