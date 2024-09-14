import { useSelector } from "react-redux";

// Custom hook to get the watchlists of the current user
const useWatchlists = () => {
  // get the watchlists from the store
  const watchlists = useSelector((state) => state.watchlist.watchlists);
  if (watchlists.length === 0) console.log("empty watchlist");
  // get the current user from the store
  const currentUser = useSelector((state) => state.auth.currentUser);
  if (currentUser.email.startsWith("administrator")) {
    console.log("Administrator is logging !");
  }
  // filter the watchlists of the current user and return it
  return watchlists?.filter((wl) => wl.userId === currentUser.id) ?? [];
};

export default useWatchlists;
