import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const ListGroup = () => {
  const watchlists = useSelector((state) => state.watchlist.watchlists);
  return (
    <div className="flex flex-col gap-2">
      {watchlists?.map((wl) => (
        <ListItem key={wl.id} title={wl.title} id={wl.id} />
      ))}
    </div>
  );
};

export default ListGroup;
