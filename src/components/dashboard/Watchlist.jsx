import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MoviesList from "../movies/MoviesList";
import useWatchlists from "../../hooks/useWatchlists";
import { EditOutlined } from "@ant-design/icons";

import { Button, Input } from "antd";
import { editWatchlistTitleAndDescription } from "../../store/slices/watchlistSlice";

const Watchlist = () => {
  const { slug } = useParams();
  const watchlists = useWatchlists();
  const activeWatchlist = watchlists.find((wl) => wl.id === slug);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(activeWatchlist.title);
  const [description, setDescription] = useState(activeWatchlist.description);

  const updateWatchlistMeta = () => {
    dispatch(
      editWatchlistTitleAndDescription({
        watchlistId: slug,
        title,
        description,
      })
    );
    setEdit(false);
  };
  return (
    <div>
      {edit ? (
        <div>
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
          <div className="flex gap-2">
            <h1>{activeWatchlist.title}</h1>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => setEdit(true)}></Button>
          </div>
          <p>About the watchlist</p>
          <h2>
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
