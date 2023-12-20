import { NavBar } from "./Components/NavBar";
import { ListMovies } from "./Components/ListMovies";
import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState(null);
  const [movieWatch, setMovieWatch] = useState(null);

  const handleClickMovie = (movie) => {
    const getMovie = async () => {
      const request = await fetch(
        `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=3a8989a7`,
      );
      const response = await request.json();
      setMovieWatch(response);
    };
    getMovie();
    console.log(movieWatch);
  };

  const handleClickBack = () => setMovieWatch(null);

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
