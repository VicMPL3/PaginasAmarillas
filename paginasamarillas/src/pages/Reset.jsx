import { useState } from "react";
import api from "../api/api";

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
      <div className="formulario_olvido">
        <h2>Nueva contraseña</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Nueva contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Cambiar</button>
        </form>
      </div>

      <p>{mensaje}</p>
    </div>
  );
}
