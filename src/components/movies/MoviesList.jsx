import { Empty, Skeleton } from "antd";
import React from "react";
import Movie from "./Movie";

const MoviesList = (props) => {
  // isSearch is a boolean that determines if the movies are search results or watchlist movies.
  const { movies, isSearch, loading } = props;

  // If the movies are loading, show a loader
  if (loading) return <Skeleton active />;

  // If no movies are found, show an empty state
  if (isSearch && movies.length === 0)
    return <Empty description="No movies found for this search" />;

  // If no movies are found in the watchlist, show an empty state
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
