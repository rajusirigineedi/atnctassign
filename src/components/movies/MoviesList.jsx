import React from "react";
import Movie from "./Movie";
import { LoaderIcon } from "react-hot-toast";
import { Skeleton } from "antd";

const MoviesList = (props) => {
  const { movies, isSearch, loading } = props;

  if (loading) return <Skeleton active />;

  if (isSearch && movies.length === 0)
    return <div>No movies found for this search</div>;

  if (!isSearch && movies.length === 0)
    return <div>No movies added yet in the watchlist.</div>;

  return (
    <div className="flex flex-wrap gap-4">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
