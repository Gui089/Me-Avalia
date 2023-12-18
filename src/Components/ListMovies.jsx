import { useState, useEffect } from "react";

const ListMovies = () => {
  const [movie, setMovie] = useState([]);
  const [movieWatch, setMovieWatch] = useState(null);

  const handleClickMovie = (movie) => setMovieWatch(movie);

  useEffect(() => {
    const getMovies = async () => {
      const request = await fetch(
        "https://raw.githubusercontent.com/Gui089/Fake-api-Movies/main/movies.json",
      );
      const response = await request.json();
      setMovie(response);
    };
    getMovies();
  }, [movie.Title]);

  console.log(movie);

  return (
    <>
      <div className="box">
        <ul className="list ">
          {movie?.map((movies) => (
            <li key={movies.Title}>
              <img
                onClick={() => handleClickMovie(movies)}
                src={movies.Poster}
                alt={movies.Plot}
              />
              <h3>{movies.Title}</h3>
              <p>{movies.Year}</p>
            </li>
          ))}
        </ul>
      </div>
      {movieWatch && (
        <div className="box">
          <ul className="list-watched">
            <li>
              <h3>{movieWatch.Title}</h3>
              <img src={movieWatch.Poster} alt={movieWatch.Plot} />
              <p className="summary">{movieWatch.Plot}</p>
              <p className="summary">Elenco: {movieWatch.Actors}</p>
              <p className="summary">Direção: {movieWatch.Director}</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export { ListMovies };
