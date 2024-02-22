import React, { useState } from "react";
import { useMovieContext } from "../MovieContext";

const MovieForm = () => {
  const { setMovies } = useMovieContext();
  const [movieTitle, setMovieTitle] = useState("");

  const handleInputChange = (e) => {
    setMovieTitle(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    // Fetch movie data from OMDB API
    const response = await fetch(
      `http://www.omdbapi.com/?t=${movieTitle}&apikey=85241efa`
    );
    const data = await response.json();

    // Update setMovies with the fetched movie data
    setMovies((prevMovies) => [...prevMovies, data]);

    // Clear the form
    setMovieTitle("");
  };

  return (
    <form onSubmit={handleSearch}>
      <label>
        Movie Title:
        <input type="text" value={movieTitle} onChange={handleInputChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieForm;
