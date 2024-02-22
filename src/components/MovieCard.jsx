// MovieCard.jsx
import React, { useState } from "react";
import { useMovieContext } from "../MovieContext";

const MovieCard = ({ movie }) => {
  const { addReview, reviews } = useMovieContext();
  const [newReview, setNewReview] = useState("");

  const handleAddReview = () => {
    addReview(movie.imdbID, newReview);
    setNewReview(""); // Clear the input after adding the review
  };

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>Release Year: {movie.Year}</p>
      <p>{movie.Plot}</p>
      <p>Ratings: {movie.imdbRating}</p>
      <p>Review: {reviews[movie.imdbID]}</p>
      <input
        type="text"
        placeholder="Your review goes here"
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
      />
      <button onClick={handleAddReview}>Add Review</button>
    </div>
  );
};

export default MovieCard;
