import axios from "axios";
import toast from "react-hot-toast";

// Embedding the key here for simplicity. In a real-world application, we should use environment variables.
const API_KEY = "4a3b711b"; // THIS SHOULD BE IN THE ENV. BUT FOR THE SAKE OF ASSESSMENT, I'M LEAVING IT HERE.
// usually accessed from process.env.REACT_APP_OMDB_API_KEY.

/**
 * Asynchronous function to fetch movies from the OMDB API.
 *
 * @param {string} search - The search term to use when querying the API.
 *
 * @returns {Promise<Array>} - A promise that resolves to an array of movies that match the search term.
 * If the request fails, it logs the error, displays an error message to the user, and returns an empty array.
 */
export async function getMovies(search) {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
    );
    return response.data.Search;
  } catch (error) {
    console.error(`Error fetching movies: ${error}`);
    toast.error("Error fetching movies. Please try again later.");
    return [];
  }
}

/**
 * This is an asynchronous function named getMovieDetails.
 * It fetches detailed information about a specific movie from the OMDB API.
 *
 * @param {string} id - The ID of the movie to fetch details for.
 *
 * @returns {Object} - If the request is successful, it returns the movie details as an object.
 * If there's an error in the request, it logs the error message to the console,
 * displays an error message to the user using a toast notification, and returns an empty array.
 */
export async function getMovieDetails(id) {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie details: ${error}`);
    toast.error("Error fetching movie details. Please try again later.");
    return [];
  }
}
