import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./movieslist.css";

const MoviesList = ({ movies, filterText, filterRate }) => {
  return (
    <div className="movieslist">
      {movies
        .filter(
          (el) =>
            el.title.toLowerCase().includes(filterText.toLowerCase()) &&
            el.rate >= filterRate
        )
        .map((movie, i) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MoviesList;
