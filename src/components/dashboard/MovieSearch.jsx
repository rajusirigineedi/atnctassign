import { Input } from "antd";
import React, { useState } from "react";
import { BsBookmarkPlus } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { getMovies } from "../../services/getMovies";
import MoviesList from "../movies/MoviesList";

const { Search } = Input;

const MovieSearch = () => {
  // State to store movies
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // State to store search query
  const [search, setSearch] = useState("");

  // Function to search movies
  const onSearch = async (value) => {
    setLoading(true);
    // Call the getMovies function from services/getMovies.js
    const response = await getMovies(value);
    setMovies(response);
    // Set loading to false
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-7 h-full">
      <div className="border border-primary p-5 rounded-md flex flex-col gap-5">
        <p className="text-3xl font-medium">
          Welcome to <span className="text-primary">Watchlists</span>
        </p>
        <p>
          Browse movies, add them to watchlists and share them with friends.
          <br />
          Just click the <BsBookmarkPlus className="inline" /> to add a movie,
          the poster to see more, or <FaCheck className="inline" /> to mark the
          movie as watched
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
