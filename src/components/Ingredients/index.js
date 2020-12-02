const Ingredients = ({ ingredients }) => {
  return (
    <>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient) => {
          return <li key={ingredient.id}>{ingredient.original}</li>;
        })}
      </ul>
    </>
  );
};

export default Ingredients;
