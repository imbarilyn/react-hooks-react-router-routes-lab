import React from "react";
import { movies } from "../data";



function Movies() {
  const movieItem = movies.map((movie) =>{
    return (
      <div key = {movie.time}>
        <h2>{movie.title}</h2>
        <p>{movie.time}</p>
        <ul>
          {movie.genres.map((genre) => <li key = {genre}>{genre}</li>)}
        </ul>

      </div>

    )

  })

  return (


  <div>
    <h1>Movies Page</h1>
    {movieItem}    
  </div>
  );
}

export default Movies;
