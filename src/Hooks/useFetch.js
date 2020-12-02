import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [respuesta, setRespuesta] = useState({
    isLoading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    if (respuesta.isLoading) {
      const buscarData = fetch(url);

      buscarData
        .then((res) => res.json())
        .then((resultados) => {
          setRespuesta({
            isLoading: false,
            error: null,
            data: resultados,
          });
        })
        .catch((error) => {
          setRespuesta({
            isLoading: false,
            error,
            data: null,
          });
        });
    }
  }, [respuesta.isLoading, url]);

  return respuesta;
};

export default useFetch;
