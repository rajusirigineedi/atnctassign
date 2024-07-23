import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/getMovies";
import SaveTo from "../ui/SaveTo";

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  // Fetch movie details on component mount
  useEffect(() => {
    (async () => {
      setLoading(true);
      // Call the getMovieDetails function from services/getMovies.js
      const _details = await getMovieDetails(movieId);
      setDetails(_details);
      setLoading(false);
    })();
  }, [movieId]);

  // If movie details are not found
  if (!details && !loading) return <div>Movie not found</div>;
  // If movie details are loading
  if (loading) return <Skeleton active />;

  return (
    <div className="relative h-screen">
      <div className="relative h-full w-full">
        <img
          className="h-full w-full object-cover blur-md"
          src={details.Poster}
        />
        <div className="bg-[#25252599] absolute top-0 left-0 h-full w-full backdrop-blur-md flex items-center justify-center px-[5%] max-md:flex-col overflow-y-auto">
          <img
            src={details.Poster}
            alt={details.Title}
            className="rounded-xl"
          />
          {details && <SaveTo movie={details} />}
          <div className="pl-3 text-white flex flex-col gap-y-3">
            <h1 className=" text-3xl font-medium ">{details.Title}</h1>
            <h1>{details.Year}</h1>
            <div>
              <p>Overview:</p>
              <p className="pr-[10%]">{details.Plot}</p>
            </div>
            <p>
              Rating:{" "}
              <span className="text-yellow-500">{details.imdbRating}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
