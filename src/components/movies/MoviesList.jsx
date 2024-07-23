import React from "react";
import Movie from "./Movie";
import { LoaderIcon } from "react-hot-toast";
import { Empty, Skeleton } from "antd";

const MoviesList = (props) => {
  const { movies, isSearch, loading } = props;

  if (loading) return <Skeleton active />;

  if (isSearch && movies.length === 0)
    return <Empty description="No movies found for this search" />;

  if (!isSearch && movies.length === 0)
    return <Empty description="No movies in this watchlist. Search and Add" />;

  return (
    <div className="flex flex-wrap gap-4 h-[70vh] pb-14 overflow-scroll">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
