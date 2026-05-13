import React, { useEffect, useState } from "react";
import api, { SITE_URL } from "../api/api";
import "./Inicio.css";

const Inicio = () => {
  const [anuncios, setAnuncios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarAnuncios = async () => {
      try {
        const data = await api.getAds(); // Llama a tu método getAds
        setAnuncios(data);
      } catch (error) {
        console.error("Error al obtener anuncios:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarAnuncios();
  }, []);

  if (cargando) return <p>Cargando anuncios...</p>;

  return (
    <div className="contenedor_anuncios">
      <h1 className="titulo_home">Anuncios Recientes</h1>
      {anuncios.length === 0 ? (
        <p>No hay anuncios disponibles por ahora.</p>
      ) : (
        <div className="grid-anuncios">
          {anuncios.slice(0, 7).map(
            (
              anuncio, // .slice limita a los primeros 6 elementos
            ) => (
              <div key={anuncio.id} className="tarjeta-anuncio">
                <div className="contenedor-imagen">
                  {anuncio.imagen_url ? (
                    <img
                      src={`${SITE_URL}/uploads/${anuncio.imagen_url}`}
                      alt={anuncio.titulo}
                    />
                  ) : (
                    <div className="sin-foto">Sin imagen</div>
                  )}
                </div>
                <div className="info-anuncio">
                  <h3>{anuncio.titulo}</h3>
                  <span className="etiqueta-tipo">{anuncio.tipo}</span>
                  <p>{anuncio.descripcion}</p>
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default Inicio;
