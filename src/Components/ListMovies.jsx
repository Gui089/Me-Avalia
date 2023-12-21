import { useState } from "react";

const ListMovies = ({
  movie,
  movieWatch,
  handleClickBack,
  handleClickMovie,
}) => {
  const [moviesAva, setMoviesAva] = useState([]);
  const [visibleList, setVisibleList] = useState(false);
  const [ratingMovie, setRatingMovie] = useState([]);

  const handleVisibleLIst = () => setVisibleList((v) => !v);

  const handleAddMovie = (e) => {
    e.preventDefault();

    if (!moviesAva.find((movieAva) => movieAva.Title === movieWatch.Title)) {
      setMoviesAva((prevMoviesAva) => [...prevMoviesAva, movieWatch]);
    }
    handleClickBack();
  };

  const handleChangeRating = (e) => {
    setRatingMovie((prevRating) => [...prevRating, e.target.value]);
    console.log("Sua nota no filme: " + ratingMovie);
  };

  console.log("Filmes na lista de Ava:" + moviesAva);

  return (
    <>
      {movie && (
        <div className="box">
          <ul className="list ">
            {movie.map((movies) => (
              <li key={movies.Title}>
                <img
                  onClick={() => {
                    handleClickMovie(movies);
                  }}
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
                <p>
                  <img id="star-img" src="./img/star.png" alt="" />
                  {movieWatch.Ratings[0].Value} IMDb rating
                </p>
              </header>

              <div className="avable-movie">
                <form onSubmit={handleAddMovie}>
                  <h3 className="tittle-nota">Sua nota:</h3>
                  <select
                    value={ratingMovie}
                    onChange={handleChangeRating}
                    className="select-nota"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <button onClick={handleVisibleLIst} className="btn-add">
                    {" "}
                    + Adicionar a lista
                  </button>
                </form>
              </div>

              <section className="summary">
                <p>{movieWatch.Plot}</p>
                <p>Elenco: {movieWatch.Actors}</p>
                <p>Direção: {movieWatch.Director}</p>
              </section>
            </li>
          </ul>
        </div>
      )}
      {moviesAva.length !== 0 && visibleList && (
        <div className="movies-list">
          <button onClick={handleVisibleLIst} className="btn-toggle">
            -
          </button>
          <h2>FILMES ASSISTIDOS</h2>
          <div className="header-info">
            <img id="star-img" src="./img/film-slate.png" alt="logo de filme" />
            <h3>{moviesAva.length} Filmes</h3>
            <img id="star-img" src="./img/deadline.png" alt="" />
            <h3> 0 min</h3>
          </div>
          <div className="movie-watch">
            <ul className="list">
              {moviesAva.map((movieAva, index) => (
                <li key={movieAva.Title}>
                  <img
                    style={{ width: 50 }}
                    src={movieAva.Poster}
                    alt={movieAva.Plot}
                  />
                  <h3>{movieAva.Title}</h3>
                  <p>
                    {" "}
                    <img id="star-img" src="./img/star-rating.png" alt="" />
                    Sua nota : {ratingMovie[index]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export { ListMovies };
