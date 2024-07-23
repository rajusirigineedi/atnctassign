import React from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { markMovieAsWatchedOrUnwatched } from "../../store/slices/watchlistSlice";

const WatchButton = (props) => {
  const { movie } = props;
  const dispatch = useDispatch();
  // get the current user from the store
  const user = useSelector((state) => state.auth.currentUser);

  // function to toggle the movie as watched or unwatched
  const toggleMovieWatch = () => {
    // dispatch the action to mark the movie as watched or unwatched
    dispatch(
      markMovieAsWatchedOrUnwatched({
        userId: user.id,
        movieId: movie.imdbID,
        watched: !movie.watched, // toggle the watched status
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
