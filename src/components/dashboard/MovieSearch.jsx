import React, { useState } from "react";
import { Input, Space } from "antd";
import MoviesList from "../movies/MoviesList";
import { getMovies } from "../../services/getMovies";
const { Search } = Input;

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = async (value) => {
    setLoading(false);
    const response = await getMovies(value);
    setMovies(response);
    setLoading(true);
  };

  return (
    <div>
      MovieSearch
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <MoviesList movies={movies} />
    </div>
  );
};

export default MovieSearch;
