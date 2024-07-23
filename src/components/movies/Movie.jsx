import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import SaveTo from "../ui/SaveTo";
import WatchButton from "../ui/WatchButton";

const Movie = (props) => {
  const { movie } = props;
  const navigate = useNavigate();
  const { slug } = useParams();

  const onPosterClick = () => navigate(`/movie/${movie.imdbID}`);

  return (
    <div className="w-36 h-56 object-cover relative rounded-md" onClick={onPosterClick}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="object-cover w-36 h-52"
      />
      <p>{movie.Title}</p>
      <p>({movie.Year})</p>
      <SaveTo movie={movie} />
      {slug && <WatchButton movie={movie} />}
    </div>
  );
};

export default Movie;
