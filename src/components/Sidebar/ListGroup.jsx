import React from "react";
import useWatchlists from "../../hooks/useWatchlists";
import ListItem from "./ListItem";

const ListGroup = () => {
  // get all watchlists of the current user
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
