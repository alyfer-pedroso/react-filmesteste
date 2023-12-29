import React from "react";

const MovieCard = ({ link }) => {
  return (
    <iframe
      src={link}
      frameborder="0"
      allowfullscreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
    ></iframe>
  );
};

export default MovieCard;
