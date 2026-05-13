import { useState } from "react";
import api from "../api/api";
import "../styles/General.css";
import { useNavigate, Link } from "react-router-dom";

export default function ResetPassword() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.resetPassword(token, password);
      setMensaje(res.message);

      if (res.success === 1 || res.success === true) {
        
        setTimeout(() => {
          navigate("/ingreso"); 
        }, 2000);
      }
    } catch (error) {
      setMensaje("Error al conectar con el servidor");
    }
  };

  /*const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.resetPassword(token, password);
    setMensaje(res.message);
  }*/;

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
