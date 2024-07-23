import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/getMovies";
import { Skeleton } from "antd";
import SaveTo from "../ui/SaveTo";
import WatchButton from "../ui/WatchButton";

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const _details = await getMovieDetails(movieId);
      setDetails(_details);
      setLoading(false);
    })();
  }, [movieId]);

  if (!details && !loading) return <div>Movie not found</div>;
  if (loading) return <Skeleton active />;

  return (
    <div className="relative">
      MovieDetails
      {details && <SaveTo movie={details} />}
      <div>
        <img src={details.Poster} alt={details.Title} />
        <h1>{details.Title}</h1>
        <h1>{details.Year}</h1>
        <p>{details.Plot}</p>
        <p>Rating: {details.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
