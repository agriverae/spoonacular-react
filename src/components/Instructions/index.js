const Instructions = ({ instructions }) => {
  return (
    <>
      <h3>Instructions</h3>
      <ol>
        {instructions.map((step) => {
          return <li key={step.number}>{step.step}</li>;
        })}
      </ol>
    </>
  );
};

export default Instructions;
