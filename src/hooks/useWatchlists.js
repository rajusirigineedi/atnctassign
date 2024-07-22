import React from "react";
import { useSelector } from "react-redux";

const useWatchlists = () => {
  const watchlists = useSelector((state) => state.watchlist.watchlists);
  const currentUser = useSelector((state) => state.auth.currentUser);
  return watchlists?.filter((wl) => wl.userId === currentUser.id) ?? [];
};

export default useWatchlists;
