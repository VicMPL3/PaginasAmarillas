const IS_PROD = process.env.NODE_ENV === 'production';

const API_URL = IS_PROD
  ? "https://paginasamarillas.gt.tc/api/" // Producción
  : "http://localhost/paginasamarillas/api/"; // Desarrollo local

export const SITE_URL = API_URL.replace('/api/', '');

/*En esta api se estan realizando dos operaciones necesarias para el correcto funcionamiento de la pagina las cuales 
son el login y registro de usuario, estos funcionan de la siguiente manera */

export default {
  /*Login solicita los parametros email y password para realizar el envio de los datos al login.php con el metodo POST de SQL y envia un JSON
  con los datos obtenidos en el login que esta enlazado con la page Ingreso */
  login: async (correo, password) => {
    const res = await fetch(API_URL + "login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, password }),
    });
    return await res.json();
  },

  /*Registro solocita varios parametros y realiza la misma operacion de POST a base de datos enlazada con REGISTER.php y genera el JSON que
  sera enviado */
  register: async (form) => {
    const payload = {
      nombres: form.nombres,
      apellidos: form.apellidos,
      cedula: form.cedula,
      fecha_nacimiento: form.fecha_nacimiento,
      telefono: form.telefono,
      correo: form.correo || form.email,
      password: form.password,
    };

    console.log("JSON ENVIADO:", payload);
    const res = await fetch(API_URL + "register.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return await res.json();
  },

  forgotPassword: async (correo) => {
    const res = await fetch(API_URL + "forgot_password.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo }),
    });
    return await res.json();
  },

  resetPassword: async (token, password) => {
    const res = await fetch(API_URL + "reset_password.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });
    return await res.json();
  },

  uploadAd: async (formData) => {
    const res = await fetch(API_URL + "upload_ad.php", {
      method: "POST",
      body: formData,
    });
    return await res.json();
  },

  getAds: async () => {
    const res = await fetch(API_URL + "get_ads.php");
    return await res.json();
  },
};
