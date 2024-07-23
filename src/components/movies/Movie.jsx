import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import SaveTo from "../ui/SaveTo";
import WatchButton from "../ui/WatchButton";

const Movie = (props) => {
  const { movie } = props;
  const navigate = useNavigate();
  // get the slug i.e, watchlistId from the URL
  const { slug } = useParams();
  // navigate to movie details page when poster is clicked
  const onPosterClick = () => navigate(`/movie/${movie.imdbID}`);
  // truncate title if it's too long
  const titleWithEllipsis =
    movie.Title.length > 24 ? `${movie.Title.slice(0, 20)}...` : movie.Title;

  return (
    <div
      className="w-40 h-72 object-cover relative rounded-md bg-white p-2 border cursor-pointer hover:shadow-md"
      onClick={onPosterClick}>
      <img
        className="rounded-md object-cover w-36 h-52"
        src={movie.Poster}
        alt={movie.Title}
      />
      <p className="font-semibold">{titleWithEllipsis}</p>
      <p className="text-xs text-gray-600">({movie.Year})</p>
      <SaveTo movie={movie} />
      {slug && <WatchButton movie={movie} />}
    </div>
  );
};

export default Movie;
