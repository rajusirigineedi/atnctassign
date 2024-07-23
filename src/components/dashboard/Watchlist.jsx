import { EditOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useWatchlists from "../../hooks/useWatchlists";
import MoviesList from "../movies/MoviesList";

import { Button, Input } from "antd";
import toast from "react-hot-toast";
import { editWatchlistTitleAndDescription } from "../../store/slices/watchlistSlice";

const Watchlist = () => {
  const { slug } = useParams();
  // get all watchlists of current logged in user
  const watchlists = useWatchlists();
  // find the watchlist with the slug from the URL
  const activeWatchlist = watchlists.find((wl) => wl.id === slug);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(activeWatchlist.title);
  const [description, setDescription] = useState(activeWatchlist.description);

  // update the title and description when the activeWatchlist changes
  useEffect(() => {
    if (!activeWatchlist) return;
    setTitle(activeWatchlist.title);
    setDescription(activeWatchlist.description);
  }, [activeWatchlist]);

  // function to update the watchlist title and description
  const updateWatchlistMeta = () => {
    // if the title is empty, show an error toast
    if (title.length === 0) return toast.error("Title cannot be empty");
    // dispatch the action to update the watchlist title and description
    dispatch(
      editWatchlistTitleAndDescription({
        watchlistId: slug,
        title,
        description,
      })
    );
    // set the edit mode to false
    setEdit(false);
  };

  return (
    <div>
      {edit ? (
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-2xl mb-2 text-red-400">
            Edit Watchlist name & description
          </h1>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex gap-2">
            <Button type="primary" onClick={updateWatchlistMeta}>
              Save
            </Button>
            <Button onClick={() => setEdit(false)}>Cancel</Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex gap-10 mb-4">
            <h1 className="text-3xl font-medium">{activeWatchlist.title}</h1>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => setEdit(true)}></Button>
          </div>
          <p className="text-gray-400">About the watchlist</p>
          <h2 className="mb-8 text-lg">
            {activeWatchlist.description ??
              "Grab a cup of coffee and enjoy the movies"}
          </h2>
        </div>
      )}

      <MoviesList movies={activeWatchlist?.movies ?? []} />
    </div>
  );
};

export default Watchlist;
