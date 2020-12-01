const Card = ({ title, image }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>
        <img width="100%" src={image} alt={title} />
      </div>
    </div>
  );
};

export default Card;
