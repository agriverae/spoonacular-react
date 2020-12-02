import Card from "../Card";
import { Link } from "react-router-dom";

const Recetas = ({ recetas }) => {
  return (
    <div className="recetas">
      {recetas.map((receta) => {
        return (
          <Link to={`/receta/${receta.id}`}>
            <Card key={receta.id} title={receta.title} image={receta.image} />
          </Link>
        );
      })}
    </div>
  );
};

export default Recetas;
