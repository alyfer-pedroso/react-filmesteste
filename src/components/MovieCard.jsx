import "./MovieCard.css";

const MovieCard = ({ link, title }) => {
  return (
    <div className="card">
      <iframe
        src={link}
        frameborder="0"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
      <h3>{title}</h3>
    </div>
  );
};

export default MovieCard;
