import { Button, Popover } from "antd";
import React, { useState } from "react";
import { BsBookmarkPlus, BsBookmarkPlusFill } from "react-icons/bs";
import { FcBookmark } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useWatchlists from "../../hooks/useWatchlists";
import {
  addMovieToWatchlist,
  removeMovieFromWatchlist,
} from "../../store/slices/watchlistSlice";

const SaveTo = (props) => {
  const { movie } = props;
  const dispatch = useDispatch();

  // get all watchlists of current logged in user
  const watchlists = useWatchlists();
  // find if current movie is in any of the list of watchlists
  const isMovieInWatchlist = watchlists.some((list) =>
    list.movies.some((m) => m.imdbID === movie.imdbID)
  );

  // get the slug i.e, watchlistId from the URL
  const { slug } = useParams();
  // state to control the visibility of the popover
  const [open, setOpen] = useState(false);

  // function to hide the popover
  const hide = () => setOpen(false);

  // function to handle the visibility of the popover
  const handleOpenChange = (newOpen) => setOpen(newOpen);

  const addMovieToWatchlistHandler = (watchlistId) => {
    // add the movie to the watchlist
    dispatch(
      addMovieToWatchlist({
        movie,
        watchlistId,
      })
    );
    // hide the popover after adding the movie to watchlist
    hide();
  };

  const removeMovieFromWatchlistHandler = () => {
    // remove the movie from the watchlist
    dispatch(
      removeMovieFromWatchlist({
        movieId: movie.imdbID,
        watchlistId: slug,
      })
    );
  };

  return (
    <div
      className="absolute top-1 left-1 cursor-pointer bg-white p-0.5 py-2 shadow-lg rounded-sm"
      onClick={(e) => e.stopPropagation()}>
      {/* stop the event from bubbling up to the parent */}
      {slug ? (
        <BsBookmarkPlusFill onClick={removeMovieFromWatchlistHandler} />
      ) : (
        <Popover
          content={
            <div className="flex flex-col gap-2">
              {watchlists.map((watchlist) => (
                <Button
                  icon={<FcBookmark />}
                  key={watchlist.id}
                  onClick={() => addMovieToWatchlistHandler(watchlist.id)}>
                  {watchlist.title}
                </Button>
              ))}
              {watchlists.length === 0 && (
                <div>
                  <p>No watchlists found.</p>
                  <p>
                    Click{" "}
                    <Button icon={<FcBookmark />} disabled>
                      + Add watchlist
                    </Button>{" "}
                    from sidebar to add your first watchlist
                  </p>
                </div>
              )}
              <Button type="primary" onClick={hide}>
                Close
              </Button>
            </div>
          }
          title="Save to a watchlist"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}>
          {isMovieInWatchlist ? <BsBookmarkPlusFill /> : <BsBookmarkPlus />}
        </Popover>
      )}
    </div>
  );
};

export default SaveTo;
