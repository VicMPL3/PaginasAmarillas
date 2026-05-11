import DashboardLayout from "../components/DashboardLayout";
import "./Dashboard.css";
import { useState } from "react";
import api from "../api/api";

export default function Dashboard() {
  const [adData, setAdData] = useState({ titulo: "", descripcion: "", tipo: "" });
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datosSesion = JSON.parse(localStorage.getItem("usuario"));
  
  if (!datosSesion || !datosSesion.id) {
    alert("No se encontró sesión activa");
    return;
  }

    const formData = new FormData();
    formData.append("titulo", adData.titulo);
    formData.append("descripcion", adData.descripcion);
    formData.append("tipo", adData.tipo);
    formData.append("imagen", file);
    formData.append('usuario_id', datosSesion.id);

    const response = await api.uploadAd(formData);
    if(response.status === "success") alert("¡Publicado con éxito!");
  };

  return (
    <DashboardLayout>
      <h1>PANEL PRINCIPAL</h1>
      <p>Bienvenido al panel principal, desde aqui podras realizar todo lo que necesites</p>

      <div className="cards">
        <div className="card">Tus Anuncios</div>
        <div className="card">Reportes</div>
        <div className="card">Estadísticas</div>
      </div>

      <div className="dashboard-container">
      <h2>Publicar Nuevo Anuncio</h2>
      <form onSubmit={handleSubmit} className="ad-form">
        <input type="text" placeholder="Título" onChange={(e) => setAdData({...adData, titulo: e.target.value})} required />
        <textarea placeholder="Descripción" onChange={(e) => setAdData({...adData, descripcion: e.target.value})} required />
        <select onChange={(e) => setAdData({...adData, tipo: e.target.value})}>
          <option value="No Aplica">N/A</option>
          <option value="Panaderia">Panaderia</option>
          <option value="Restaurante">Restaurante</option>
          <option value="Supermercado">Supermercado</option>
        </select>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit">Publicar Anuncio</button>
      </form>
    </div>
    </DashboardLayout>
  );
}