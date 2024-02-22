// src/App.jsx
import React from "react";
import MovieForm from "./components/MovieForm";
import MovieCard from "./components/MovieCard";
import { useMovieContext, MovieProvider } from "./MovieContext";

const App = () => {
  const { movies } = useMovieContext();

  return (
    <div>
      <MovieForm />
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

const AppWithProvider = () => {
  return (
    <MovieProvider>
      <App />
    </MovieProvider>
  );
};

export default AppWithProvider;
