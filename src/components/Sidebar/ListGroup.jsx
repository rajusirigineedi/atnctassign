import React from "react";
import ListItem from "./ListItem";
import useWatchlists from "../../hooks/useWatchlists";

const ListGroup = () => {
  const watchlists = useWatchlists();
  return (
    <div className="flex flex-col gap-2">
      {watchlists.map((wl) => (
        <ListItem key={wl.id} title={wl.title} id={wl.id} />
      ))}
    </div>
  );
};

export default ListGroup;
