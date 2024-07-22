import axios from "axios";
import toast from "react-hot-toast";

const API_KEY = "4a3b711b";

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
