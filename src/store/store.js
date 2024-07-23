/**
 * Redux store configuration
 */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import watchlistReducer from "./slices/watchlistSlice";

// initial loaded state from localStorage
const preloadedState = loadState();

// Redux store holding the states, Auth and Watchlist.
const store = configureStore({
  reducer: {
    auth: authReducer,
    watchlist: watchlistReducer,
  },
  preloadedState,
});

// Utitlity functions to load state from localStorage
function loadState() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    // Parsing the state to JSON
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

// Utitlity functions to save state to localStorage
function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    // Serializing the state
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage");
  }
}

// Subscribe to store changes and save the state to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
