import React, { useState } from "react";
import { Input, Space } from "antd";
import MoviesList from "../movies/MoviesList";
import { getMovies } from "../../services/getMovies";
import { BookOutlined, CheckOutlined } from "@ant-design/icons";
const { Search } = Input;

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const onSearch = async (value) => {
    setLoading(true);
    const response = await getMovies(value);
    setMovies(response);
    setLoading(false);
  };

  return (
    <div>
      <div className="border rounded-md flex flex-col">
        <p>Welcome to Watchlists</p>
        <p>
          Browse movies, add them to watchlists and share them with friends,
          Just click the <BookOutlined /> to add a movie, the poster to see
          more, or <CheckOutlined /> to mark the movie as watched
        </p>
      </div>
      <Search
        placeholder="Search any movie"
        allowClear
        enterButton="Search"
        size="large"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSearch={onSearch}
        disabled={loading}
      />
      <MoviesList movies={movies ?? []} isSearch loading={loading} />
    </div>
  );
};

export default MovieSearch;
