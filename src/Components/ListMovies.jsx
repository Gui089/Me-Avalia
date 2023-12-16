import { useState, useEffect } from "react";

const ListMovies = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const request = await fetch(
        "https://raw.githubusercontent.com/Gui089/Fake-api-Movies/main/movies.json",
      );
      const response = await request.json();
      setMovie(response);
      console.log(movie);
    };
    getMovies();
  }, []);

  return (
    <div className="box">
      <ul className="list ">
        {movie?.map((movies) => (
          <li key={movies.Title}>
            <img src={movies.Poster} alt={movies.Plot} />
            <h3>{movies.Title}</h3>
            <p>{movies.Year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ListMovies };
