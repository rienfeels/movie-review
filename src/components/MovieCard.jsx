import React from "react";
import { useMovieContext } from "../MovieContext";

const MovieCard = ({ movie }) => {
  const { addReview, reviews } = useMovieContext();

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>Release Year: {movie.Year}</p>
      <p>{movie.Plot}</p>
      <p>Ratings: {movie.imdbRating}</p>
      <p>Review: {reviews[movie.imbdID]}</p>
      <button onClick={() => addReview(movie.imdbID, "Your review goes here")}>
        Add Review
      </button>
    </div>
  );
};

export default MovieCard;
