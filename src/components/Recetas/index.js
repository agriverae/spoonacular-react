import Card from "../Card";

const Recetas = ({ recetas }) => {
  return (
    <div className="recetas">
      {recetas.map((receta) => {
        return (
          <Card key={receta.id} title={receta.title} image={receta.image} />
        );
      })}
    </div>
  );
};

export default Recetas;
