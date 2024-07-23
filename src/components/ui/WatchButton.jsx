import { CheckOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markMovieAsWatchedOrUnwatched } from "../../store/slices/watchlistSlice";
import { FaCheck } from "react-icons/fa";

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
      className={`absolute top-1 right-1 cursor-pointer bg-white p-0.5 py-2 px-1.5 shadow-lg rounded-sm`}
      onClick={(e) => e.stopPropagation()}>
      <FaCheck
        className={`${movie.watched ? "text-green-500" : "text-gray-400"}`}
        onClick={toggleMovieWatch}
      />
    </div>
  );
};

export default WatchButton;
