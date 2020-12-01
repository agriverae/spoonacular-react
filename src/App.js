import { useEffect, useState } from "react";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Recetas from "./components/Recetas";

function App() {
  const [recetas, setRecetas] = useState({
    isLoading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    if (recetas.isLoading) {
      const buscarRecetas = fetch(
        "https://api.spoonacular.com/recipes/random?number=20&apiKey=57d002347b7c4eedbbef44a86f81b009"
      );

      buscarRecetas
        .then((res) => res.json())
        .then((resultados) => {
          setRecetas({
            isLoading: false,
            error: null,
            data: resultados.recipes,
          });
        })
        .catch((error) => {
          setRecetas({
            isLoading: false,
            error,
            data: null,
          });
        });
    }
  }, [recetas.isLoading]);

  if (recetas.isLoading) {
    return <Loader type="Hearts" color="#ff0000" height={80} width={80} />;
  }

  if (recetas.error) {
    return <div>{"Hubo un error =("}</div>;
  }

  return (
    <div className="App">
      <Recetas recetas={recetas.data} />
    </div>
  );
}

export default App;
