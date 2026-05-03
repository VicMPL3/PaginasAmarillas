import React, { useState } from "react";
import api from "../api/api";
import "./Registro.css";


/*Se importan las librerias necesarias para el funcionamiento y vista de la pagina y la api que en este caso enlaza con el Register.php
Se exporta la funcion registro que recibe los parametros de un formulario con varios elementos a diligencias */
export default function Registro() {
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    cedula: "",
    fecha_nacimiento: "",
    telefono: "",
    correo: "",
    password: "",
  });

  const handler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  /*Se hace validacion de base de datos antes de enviar los datos JSON, con el try se hace el POST y se espera una respuesta, que brinda al
momento de generar el SQL del lado de la base de datos */
  const submit = async (e) => {
    e.preventDefault();

    console.log("FORM DATA:", form);

    try {
      const res = await api.register(form); //Accede a la api por el lado del registro para enviar los datos
      alert(res.message);
    } catch (error) {
      console.error("Error registro:", error);
      alert("Error al registrar usuario");
    }
  };

  /*Retorna la visual necesaria para la vista de la lista de ingreso de datos para enviar a la base de datos */
  return (
    <div className="fondo-registro">
      <h1 className="titulo">Registro Usuario</h1>
      <p className="subtitulo-registro">
        Para acceder, ingrese sus datos registrados
      </p>

      <main className="centro-registro">
        <form className="formulario-registro" onSubmit={submit}>
          {/*Se generan los imputs que seran almacenados en el handler hasta llegar al boton que le realiza el submit a los datos */}
          <input
            name="nombres"
            type="text"
            value={form.nombres}
            placeholder="Nombres"
            onChange={handler}
            required
          />

          <input
            name="apellidos"
            type="text"
            value={form.apellidos}
            placeholder="Apellidos"
            onChange={handler}
            required
          />

          <input
            name="cedula"
            type="text"
            value={form.cedula}
            placeholder="Documento"
            onChange={handler}
            required
          />

          <input
            name="fecha_nacimiento"
            type="date"
            value={form.fecha_nacimiento}
            onChange={handler}
            required
          />

          <input
            name="telefono"
            type="tel"
            value={form.telefono}
            placeholder="Teléfono"
            onChange={handler}
          />

          <input
            name="password"
            type="password"
            value={form.password}
            placeholder="Contraseña"
            onChange={handler}
            required
          />

          <input
            className="cuadro-correo"
            name="correo"
            type="email"
            value={form.correo}
            placeholder="Correo electrónico"
            onChange={handler}
            required
          />

          <button type="submit">Aceptar</button>
        </form>
      </main>
    </div>
  );
}
