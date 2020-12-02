import Ingredients from "../Ingredients";
import Instructions from "../Instructions";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const PaginaReceta = () => {
  const { id } = useParams();

  const getReceta = useFetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=57d002347b7c4eedbbef44a86f81b009`
  );

  if (getReceta.isLoading) {
    return <Loader type="Hearts" color="#ff0000" height={80} width={80} />;
  }

  if (getReceta.error) {
    return <div>{"Hubo un error =("}</div>;
  }

  const recipe = getReceta.data;

  return (
    <div className="paginaReceta">
      <h1>Recipe: {recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
      <Ingredients ingredients={recipe.extendedIngredients} />
      <Instructions instructions={recipe.analyzedInstructions[0].steps} />
    </div>
  );
};

export default PaginaReceta;
