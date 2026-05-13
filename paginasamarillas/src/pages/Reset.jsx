import { useState } from "react";
import api from "../api/api";
import "../styles/General.css";

export default function ResetPassword() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.resetPassword(token, password);
    setMensaje(res.message);
  };

  return (
    <div className="general">
     
      <h1 className="titulo">Nueva contraseña</h1>
      
      <div className="formulario_olvido">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="password"
            placeholder="Introduce tu nueva contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-password"
          />
          <button type="submit">Cambiar</button>
        </form>

      </div>
  
      {mensaje && <p className="message-response">{mensaje}</p>}
    </div>
  );
}
