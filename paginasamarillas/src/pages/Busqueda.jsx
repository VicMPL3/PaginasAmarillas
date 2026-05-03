import "./Busqueda.css";

/*en esta seccion se guardaran los elementos que seran constantes para su visita y no cambiaran 
aunque el usuario realice alguna accion sobre ellos, actualmente estos links no dirigen hacia
ningun lado ya que toca hacer una pagina que traiga todo el contenido de la seccion buscada
(No poseeo el conocimiento avanzado para la realizacion de dicha pagina, pero esta en proceso)*/
const categorias = [
  "Accesorios",
  "Autopartes",
  "Bolsos",
  "Calzado",
  "Deportivo",
  "Electrodomésticos",
  "Ferretería",
  "Hogar",
  "Iluminación",
  "Juguetería",
  "Muebles",
  "Tecnología",
  "Variedades",
];
/* Mismo caso que el anterior solo que en esta seccion se guarda en un array los elementos 
que son constantes como los departamentos y las cuidades en las cuales el usuario puede realizar
algun tipo de busqueda y serviran como etiquetas para el momento de generar los anuncios */
const departamentos = [
  {
    nombre: "Amazonas",
    ciudades: ["Leticia", "Puerto Nariño", "Tarapaca"],
  },
  {
    nombre: "Antioquia",
    ciudades: ["Medellín", "Itagüí", "Bello"],
  },
  {
    nombre: "Arauca",
    ciudades: ["Arauca", "Puerto Rondón", "Saravena"],
  },
  {
    nombre: "Atlántico",
    ciudades: ["Barranquilla", "Puerto Colombia", "Soledad"],
  },
  {
    nombre: "Bolívar",
    ciudades: ["Cartagena", "Córdoba", "Montecristo"],
  },
  {
    nombre: "Boyacá",
    ciudades: ["Tunja", "Duitama", "Sogamoso"],
  },
  {
    nombre: "Caldas",
    ciudades: ["Manizales", "Chinchina", "Villamaría"],
  },
  {
    nombre: "Cundinamarca",
    ciudades: ["Bogotá"],
  },
  {
    nombre: "Huila",
    ciudades: ["Neiva"],
  },
  {
    nombre: "Magdalena",
    ciudades: ["Santa Marta"],
  },
  {
    nombre: "Meta",
    ciudades: ["Villavicencio"],
  },
  {
    nombre: "Nariño",
    ciudades: ["Pasto"],
  },
  {
    nombre: "Norte de Santander",
    ciudades: ["Cúcuta"],
  },
  {
    nombre: "Quindio",
    ciudades: ["Armenia"],
  },
  {
    nombre: "Risaralda",
    ciudades: ["Pereira","Dosquebradas","Santa Rosa"],
  },
  {
    nombre: "Santander",
    ciudades: ["Bucaramanga"],
  },
  {
    nombre: "Tolima",
    ciudades: ["Ibagué"],
  },
  {
    nombre: "Valle del Cauca",
    ciudades: ["Cali"],
  }
  
];

//Funcion principal en la cual se realiza el mapeo de toda la pagina empezando por el fondo
export default function Buscar() {
  return (
    //Fondo: da un cuadro donde entraran todos los demas archivos y sea mas facil de mantener ordenado
    <div className="fondo">
      {/* Esto es un elemento recurrente en todas las paginas principales de la pagina, se encuentra en esta posicion ya que el header no
      me permite realizar la actualizacion del titulo cuando se accede a la pagina y sea responsivo, se trato de instruir en un elemento
      LAYOUT pero no pude obtener los resultados esperados*/}

      <h1 className="titulo">Busqueda</h1>

      {/*Se crea una seccion que abarca el subtitulo y el cuadro de busqueda que sera enlazado de igual manera a unos tags
      que peritan la filtracion de elementos con etiquetas previamente realizadas */}

      <section className="busqueda">
        {/*Subtitulo */}
        <p className="subtitulo-busqueda">
          Ingrese su búsqueda o filtre por su categoría o departamento deseada
        </p>

        {/*Cuadro de busqueda con un imput actualmente no linkea a ningun lado */}
        <div className="cuadro-busqueda">
          <input
            className="ingreso"
            type="text"
            placeholder="Ingresa palabra clave"
          />
        </div>
      </section>

      {/*Seccion principal de la pagina en donde se dividen en dos listas en dos diferentes contenedores */}
      <main className="centro">
        {/*Categorias, en esta seccion todos los enlaces son fijos y no tienen mas animacion que el mouse over  */}
        <div className="categorias">
          <h2>Categorías</h2>
          <div className="contenedor-cat">
            {/*Con .map es la funcion que trae todos y cada uno de los elementos creados dentro del array constante de arriba*/}
            {categorias.map((cat) => (
              /*Se le da un estilo inline para que se separen los elementos de la lista que estan siendo generados */
              <div key={cat} style={{ marginBottom: "8px" }}>
                <a
                  /*Enlace no disponible todavia pero se prentende generar una pagina responsive que se genere por el elemento seleccionado */
                  href={`/buscar/categoria/${cat.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {cat}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/*Departamentos muy similar a la anterior, este es un array doble que contiene el elemento principal que es el departamento
          y se expande para mostrar las ciudades disponibles (para busqueda o envio o lo que se necesite) */}
        <div className="departamentos">
          <h2>Departamentos</h2>

          <div className="contenedor-dep">
            {/*Array padre que contiene el mapero de todos los elementos ubicados en departamentos y trae solo el nombre del dep */}
            {departamentos.map((dept) => (
              <div key={dept.nombre} style={{ marginBottom: "10px" }}>
                <details>
                  <summary>
                    <a
                      /*Enlaces que seran linkados a la misma pagina responsiva que sera una filtracion ya que estas dos secciones hacen
                      exactamente lo mismo y solo varia el TAG que se busca */

                      href={`/buscar/departamento/${dept.nombre.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {dept.nombre}
                    </a>
                  </summary>
                  {/*Esta es la lista que se expande tiene estilos inline para lograr la separacion de los elementos que 
                  contiene el array hijo que es el que da las cuidades y se expande hasta el maximo de elementos que tenga */}
                  <ul style={{ marginTop: "5px", marginLeft: "15px" }}>
                    {dept.ciudades.length > 0 ? (
                      dept.ciudades.map((city) => (
                        <li key={city}>
                          <a
                            /*Enlaces que seran linkados a la misma pagina responsiva que sera una filtracion ya que estas dos secciones hacen
                      exactamente lo mismo y solo varia el TAG que se busca */
                            href={`/buscar/departamento/${dept.nombre.toLowerCase()}/${city.toLowerCase()}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {city}
                          </a>
                        </li>
                      ))
                    ) : (
                      /*Esta parte de la lista se genera si de pronto hay algun departamento que no tenga cuidades registradas
                      para realizar la operacion de busqueda o envio  */
                      <li style={{ color: "gray" }}>Sin ciudades</li>
                    )}
                  </ul>
                </details>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
