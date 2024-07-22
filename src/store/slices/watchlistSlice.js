import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
const initialState = {
  watchlists: [],
  currentWatchlist: null,
};

const tempWatchlist = [
  {
    id: uuid(),
    userId: "1",
    title: "Tom cruise movies watchlist",
    movies: [
      {
        id: uuid(),
        title: "Mission Impossible",
        rating: 7.5,
        watched: false,
      },
      {
        id: uuid(),
        title: "Top Gun",
        rating: 8.0,
        watched: true,
      },
    ],
  },
];

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    // set the watchlist as active for the user.
    setActiveWatchlist: (state, action) => {
      // action.payload has the id of the watchlist
      state.currentWatchlist = state.watchlists.find(
        (watchlist) => watchlist.id === action.payload
      );
      console.log("stat ", state.currentWatchlist);
      if (!state.currentWatchlist) toast.error("Invalid watchlist!");
    },
    // adds a new watchlist for the user.
    addWatchlist: (state, action) => {
      // action.payload has the title of the watchlist, id of the user
      const newWatchlist = { id: uuid(), ...action.payload, movies: [] };
      state.watchlists.push(newWatchlist);
      state.currentWatchlist = newWatchlist;
      toast.success("Watchlist added successfully!");
    },
    // removes an existing watchlist for the user.
    removeWatchlist: (state, action) => {
      // action.payload has the id of the watchlist
      state.watchlists = state.watchlists.filter(
        (watchlist) => watchlist.id !== action.payload
      );
      state.currentWatchlist = null;
      toast.success("Watchlist removed successfully!");
    },
    // adds a movie to a watchlist for the user.
    addMovieToWatchlist: (state, action) => {
      // action.payload has the id of the watchlist and the movie object
      const { watchlistId, movie } = action.payload;
      const watchlist = state.watchlists.find(
        (watchlist) => watchlist.id === watchlistId
      );
      // if the movie already exists in the watchlist, show a warning message.
      if (watchlist.movies.find((m) => m.id === movie.id)) {
        toast.error("Movie already exists in the watchlist!");
        return;
      }
      watchlist.movies.push(movie);
      state.currentWatchlist = watchlist;
      toast.success("Movie added to watchlist successfully!");
    },
    // removes a movie from the watchlist.
    removeMovieFromWatchlist: (state, action) => {
      // action.payload has the id of the watchlist and the movie id
      const { watchlistId, movieId } = action.payload;
      const watchlist = state.watchlists.find(
        (watchlist) => watchlist.id === watchlistId
      );
      watchlist.movies = watchlist.movies.filter(
        (movie) => movie.id !== movieId
      );
      state.currentWatchlist = watchlist;
      toast.success("Movie removed from watchlist successfully");
    },
    // marks a movie as watched in all watchlists of current user.
    markMovieAsWatched: (state, action) => {
      const { userId, movieId } = action.payload;
      state.watchlists
        .filter((w) => w.userId === userId)
        .forEach((watchlist) => {
          watchlist.movies.forEach((movie) => {
            if (movie.id === movieId) {
              movie.watched = true;
            }
          });
        });
    },
    // marks a movie as unwatched in all watchlists of current user.
    markMovieAsUnwatched: (state, action) => {
      const { userId, movieId } = action.payload;
      state.watchlists
        .filter((w) => w.userId === userId)
        .forEach((watchlist) => {
          watchlist.movies.forEach((movie) => {
            if (movie.id === movieId) {
              movie.watched = false;
            }
          });
        });
    },
  },
});

export const {
  setActiveWatchlist,
  addWatchlist,
  removeWatchlist,
  addMovieToWatchlist,
  removeMovieFromWatchlist,
} = watchlistSlice.actions;
export default watchlistSlice.reducer;
