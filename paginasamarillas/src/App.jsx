import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";  
import Buscar from "./pages/Busqueda";
import Ingreso from "./pages/InicioSesion";
import Registro from "./pages/Registro";
import Nosotros from "./pages/Nosotros";
import Inicio from "./pages/Inicio";
import Dashboard from "./pages/Dashboard";
import OlvidoContrasena from "./pages/Olvido";
import ResetPassword from "./pages/Reset";

/*SE GENERA LA VISTA DE LA APP QUE SERA RENDERIZADA EN EL INDEX, EN ESTE APARTADO SE HACEN LOS IMPORTS DE TODAS Y 
CADA UNA DE LAS PAGINAS QUE TIENE EL PROYECTO PARA PODER REALIZAR LOS LINKS DESDE EL ROUTER */

/*Se expora la funcion por medio del routes que esta a su vez esta envuelta en el header y footer que son permantentes y
despues de esto ya desglosa en los elemntos que componen el header y permiten la navegacion */
export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/ingreso" element={<Ingreso />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/olvido" element={<OlvidoContrasena />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>

      <Footer />
    </>
  );
}