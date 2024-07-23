import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";

// Initial state of the watchlist slice.
const initialState = {
  watchlists: [],
};

// ----------- Format of watchlist object: -----------
// const tempWatchlist = [
//   {
//     id: watchlistId,
//     userId: userId,
//     title: "Tom cruise movies watchlist",
//     description: "A list of all the movies of Tom Cruise",
//     movies: [
//       {
//         id: imdbID,
//         title: "Mission Impossible",
//         rating: 7.5,
//         watched: false,
//       },
//       {
//         id: imdbID,
//         title: "Top Gun",
//         rating: 8.0,
//         watched: true,
//       },
//     ],
//   },
// ];
// ----------------------------------------------------------

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    // adds a new watchlist for the user.
    addWatchlist: (state, action) => {
      // action.payload has the title of the watchlist, id of the user
      const newWatchlist = { id: uuid(), ...action.payload, movies: [] };
      state.watchlists.push(newWatchlist);
      toast.success("Watchlist added successfully!");
    },

    // removes an existing watchlist for the user.
    removeWatchlist: (state, action) => {
      // action.payload has the id of the watchlist
      state.watchlists = state.watchlists.filter(
        (watchlist) => watchlist.id !== action.payload
      );
      toast.success("Watchlist removed successfully!");
    },

    editWatchlistTitleAndDescription: (state, action) => {
      // action.payload has the id of the watchlist and the new title and description
      const { watchlistId, title, description } = action.payload;
      const watchlist = state.watchlists.find(
        (watchlist) => watchlist.id === watchlistId
      );
      watchlist.title = title;
      watchlist.description = description;
      toast.success("Watchlist updated successfully!");
    },

    // adds a movie to a watchlist for the user.
    addMovieToWatchlist: (state, action) => {
      // action.payload has the id of the watchlist and the movie object
      const { watchlistId, movie } = action.payload;
      const watchlist = state.watchlists.find(
        (watchlist) => watchlist.id === watchlistId
      );
      // if the movie already exists in the watchlist, show a warning message.
      if (watchlist.movies.find((m) => m.imdbID === movie.imdbID)) {
        toast.error("Movie already exists in the watchlist!");
        return;
      }
      watchlist.movies.push(movie);
      toast.success("Movie added to watchlist successfully!");
    },

    // removes a movie from the watchlist.
    removeMovieFromWatchlist: (state, action) => {
      // action.payload has the id of the watchlist and the movie id
      const { watchlistId, movieId } = action.payload;
      const watchlist = state.watchlists.find(
        (watchlist) => watchlist.id === watchlistId
      );
      // filter out the movie from the watchlist.
      watchlist.movies = watchlist.movies.filter(
        (movie) => movie.imdbID !== movieId
      );
      toast.success("Movie removed from watchlist successfully");
    },

    // marks a movie as watched/ unwatched in all watchlists of current user.
    markMovieAsWatchedOrUnwatched: (state, action) => {
      const { userId, movieId, watched } = action.payload;
      // filter all the watchlists of the current user and mark the movie as watched/unwatched.
      state.watchlists
        .filter((w) => w.userId === userId)
        .forEach((watchlist) => {
          watchlist.movies.forEach((movie) => {
            if (movie.imdbID === movieId) {
              movie.watched = watched;
            }
          });
        });
      toast.success(`Movie marked as ${watched ? "watched" : "unwatched"}`);
    },
  },
});

export const {
  addWatchlist,
  removeWatchlist,
  addMovieToWatchlist,
  removeMovieFromWatchlist,
  markMovieAsWatchedOrUnwatched,
  editWatchlistTitleAndDescription,
} = watchlistSlice.actions;
export default watchlistSlice.reducer;
