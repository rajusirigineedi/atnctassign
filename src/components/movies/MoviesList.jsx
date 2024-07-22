import React from "react";

const MoviesList = (props) => {
  const { movies } = props;
  return (
    <div className="flex flex-wrap gap-4">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="w-36 h-56 object-cover">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="object-cover w-36 h-52"
          />
          <p>{movie.Title}</p>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
