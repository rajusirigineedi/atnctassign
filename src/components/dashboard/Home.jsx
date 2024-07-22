import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import MovieSearch from "./MovieSearch";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/signin");
  };

  return (
    <div>
      <MovieSearch />
      Home<Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Home;
