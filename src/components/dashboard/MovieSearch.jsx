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
    <div className="flex flex-col gap-7 h-full overflow-y-scroll">
      <div className="border border-primary p-5 rounded-md flex flex-col gap-5">
        <p className="text-3xl font-medium">Welcome to <span className="text-primary">Watchlists</span></p>
        <p>
          Browse movies, add them to watchlists and share them with friends.<br/>
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
