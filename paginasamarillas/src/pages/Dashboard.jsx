import DashboardLayout from "../components/DashboardLayout";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1>PANEL PRINCIPAL</h1>
      <p>Bienvenido al panel principal, desde aqui podras realizar todo lo que necesites</p>

      <div className="cards">
        <div className="card">Tus Anuncios</div>
        <div className="card">Reportes</div>
        <div className="card">Estadísticas</div>
      </div>
    </DashboardLayout>
  );
}