const ListMovies = ({
  movie,
  movieWatch,
  handleClickBack,
  handleClickMovie,
}) => {
  return (
    <>
      {movie && (
        <div className="box">
          <ul className="list ">
            {movie.map((movies) => (
              <li key={movies.Title}>
                <img
                  onClick={() => handleClickMovie(movies)}
                  src={movies.Poster}
                  alt={movies.Plot}
                />
                <h3>{movies.Title}</h3>
                <p>
                  <img id="star-img" src="./img/schedule.png" alt="" />
                  {movies.Year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {movieWatch && (
        <div className="box movies-watched">
          <ul>
            <li className="details">
              <button onClick={handleClickBack} className="btn-back">
                <img src="./img/left.png" alt="" />
              </button>
              <header className="details-overview ">
                <img src={movieWatch.Poster} alt={movieWatch.Plot} />
                <h2>{movieWatch.Title}</h2>
                <p>{movieWatch.Runtime}</p>
                <p>{movieWatch.Genre}</p>
                {/*  <p>
                  <img id="star-img" src="./img/star.png" alt="" />
                  {movieWatch.imdbID} IMDb rating
                </p> */}
              </header>

              <section className="summary">
                <p>{movieWatch.Plot}</p>
                <p>Elenco: {movieWatch.Actors}</p>
                <p>Direção: {movieWatch.Director}</p>
              </section>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export { ListMovies };
