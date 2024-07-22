import { CheckOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markMovieAsWatchedOrUnwatched } from "../../store/slices/watchlistSlice";

const WatchButton = (props) => {
  const { movie } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  const toggleMovieWatch = () => {
    dispatch(
      markMovieAsWatchedOrUnwatched({
        userId: user.id,
        movieId: movie.imdbID,
        watched: !movie.watched,
      })
    );
  };
  return (
    <div
      className={`absolute top-0 right-0 cursor-pointer bg-white p-0.5 shadow-lg rounded-sm border-2 ${
        movie.watched ? "bg-green-500" : ""
      }`}
      onClick={(e) => e.stopPropagation()}>
      <CheckOutlined onClick={toggleMovieWatch} />
    </div>
  );
};

export default WatchButton;
