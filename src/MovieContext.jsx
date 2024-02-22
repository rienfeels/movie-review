import React, { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);

  const addReview = (imdbID, review) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [imdbID]: review,
    }));
  };

  return (
    <MovieContext.Provider value={{ movies, setMovies, reviews, addReview }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
