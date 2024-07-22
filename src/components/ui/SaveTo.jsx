import React, { useState } from "react";
import { BookOutlined, CheckOutlined, BookFilled } from "@ant-design/icons";
import { Button, Popover } from "antd";
import useWatchlists from "../../hooks/useWatchlists";
import { useDispatch } from "react-redux";
import {
  addMovieToWatchlist,
  removeMovieFromWatchlist,
} from "../../store/slices/watchlistSlice";
import { useParams } from "react-router-dom";

const SaveTo = (props) => {
  const { movie } = props;
  const dispatch = useDispatch();
  const watchlists = useWatchlists();
  const { slug } = useParams();
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const addMovieToWatchlistHandler = (watchlistId) => {
    dispatch(
      addMovieToWatchlist({
        movie,
        watchlistId,
      })
    );
    hide();
  };

  const removeMovieFromWatchlistHandler = () => {
    dispatch(
      removeMovieFromWatchlist({
        movieId: movie.imdbID,
        watchlistId: slug,
      })
    );
  };

  return (
    <div
      className="absolute top-0 left-0 cursor-pointer bg-white p-0.5 shadow-lg rounded-sm border-2"
      onClick={(e) => e.stopPropagation()}>
      {slug ? (
        <BookFilled onClick={removeMovieFromWatchlistHandler} />
      ) : (
        <Popover
          content={
            <div className="flex flex-col gap-2">
              {watchlists.map((watchlist) => (
                <Button
                  key={watchlist.id}
                  onClick={() => addMovieToWatchlistHandler(watchlist.id)}>
                  {watchlist.title}
                </Button>
              ))}
              {watchlists.length === 0 && (
                <div>
                  <p>No watchlists found.</p>
                  <p>
                    Click <Button disabled>+ Add watchlist</Button> from sidebar
                    to add your first watchlist
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
          <BookOutlined />
        </Popover>
      )}
    </div>
  );
};

export default SaveTo;
