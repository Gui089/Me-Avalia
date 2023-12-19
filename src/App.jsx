import { NavBar } from "./Components/NavBar";
import { ListMovies } from "./Components/ListMovies";
import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState(null);
  const [movieWatch, setMovieWatch] = useState(null);

  const handleClickMovie = (movie) => setMovieWatch(movie);

  const handleClickBack = () => setMovieWatch(null);

  console.log(movie);

  return (
    <>
      <NavBar setMovie={setMovie} movie={movie} />
      <ListMovies
        movie={movie}
        movieWatch={movieWatch}
        handleClickBack={handleClickBack}
        handleClickMovie={handleClickMovie}
      />
    </>
  );
};

export { App };
