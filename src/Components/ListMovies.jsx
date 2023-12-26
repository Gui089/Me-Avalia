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

  const handleVisibleLIst = (clickedMovie) =>
    setVisibleList((prev) =>
      prev?.id === clickedMovie.id ? false : clickedMovie,
    );

  const handleAddMovie = (e) => {
    e.preventDefault();
    const { rating } = e.target.elements;
    setRatingMovie((prev) => [
      ...prev,
      { ...ratingMovie, userRating: rating.value },
    ]);
    setVisibleList(false);

    if (!moviesAva.find((movieAva) => movieAva.Title === movieWatch.Title)) {
      setMoviesAva((prevMoviesAva) => [...prevMoviesAva, movieWatch]);
    }
    handleClickBack();
  };

  console.log("Filmes na lista de Ava:" + moviesAva);

  return (
    <>
      {movie && (
        <main className="main">
          <div className="box">
            <ul className="list list-movies">
              {movie.map((movies) => (
                <li
                  onClick={() => {
                    handleClickMovie(movies);
                  }}
                  key={movies.Title}
                >
                  <img src={movies.Poster} alt={movies.Plot} />
                  <h3>{movies.Title}</h3>
                  <p>
                    <img id="star-img" src="./img/schedule.png" alt="" />
                    {movies.Year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </main>
      )}
      {movieWatch && (
        <div className="box">
          <ul className="details">
            <li>
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
                    className="select-nota"
                    name="rating"
                    defaultValue={1}
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <button onClick={handleVisibleLIst} className="btn-add">
                    {" "}
                    + Adicionar a lista
                  </button>
                </form>
              </div>

              <section className="">
                <p>{movieWatch.Plot}</p>
                <p>Elenco: {movieWatch.Actors}</p>
                <p>Direção: {movieWatch.Director}</p>
              </section>
            </li>
          </ul>
        </div>
      )}
      {moviesAva.length !== 0 && (
        <div className="box">
          <div className="summary">
            <button onClick={handleVisibleLIst} className="btn-toggle">
              -
            </button>
            <h2>FILMES ASSISTIDOS</h2>
            <div>
              <p>
                <img
                  id="star-img"
                  src="./img/film-slate.png"
                  alt="logo de filme"
                />
                <span>{moviesAva.length} Filmes</span>
              </p>
              <p>
                <img id="star-img" src="./img/deadline.png" alt="" />
                <span> 0 min</span>
              </p>
            </div>
          </div>

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
                  Sua nota : {ratingMovie[index].userRating}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export { ListMovies };
