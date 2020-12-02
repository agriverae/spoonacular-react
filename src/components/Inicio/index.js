import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Recetas from "../Recetas";
import useFetch from "../../Hooks/useFetch";

const Inicio = () => {
  const traerRecetas = useFetch(
    "https://api.spoonacular.com/recipes/random?number=20&apiKey=57d002347b7c4eedbbef44a86f81b009"
  );

  if (traerRecetas.isLoading) {
    return <Loader type="Hearts" color="#ff0000" height={80} width={80} />;
  }

  if (traerRecetas.error) {
    return <div>{"Hubo un error =("}</div>;
  }

  return (
    <div className="inicio">
      <Recetas recetas={traerRecetas.data.recipes} />
    </div>
  );
};

export default Inicio;
