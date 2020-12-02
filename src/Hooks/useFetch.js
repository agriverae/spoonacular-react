import { useState, useEffect } from "react";

const initValue = {
  isLoading: true,
  error: null,
  data: null,
};

const useFetch = (url) => {
  const [respuesta, setRespuesta] = useState(initValue);

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

  const recargarRespuesta = () => {
    setRespuesta(initValue);
  };

  return [respuesta, recargarRespuesta];
};

export default useFetch;
