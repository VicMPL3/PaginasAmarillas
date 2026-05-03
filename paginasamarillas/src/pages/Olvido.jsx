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
      <div className="formulario_olvido">
        <h2>Recuperar contraseña</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Ingrese su correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className="mensaje">
        <p>{mensaje}</p>
        {link && (
          <div className="link-box">
            <p></p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Abrir enlace
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
