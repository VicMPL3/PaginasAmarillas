import Sidebar from "./Sidebar";
import "../styles/Layout.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-content">
        {children}
      </main>
    </div>
  );
}