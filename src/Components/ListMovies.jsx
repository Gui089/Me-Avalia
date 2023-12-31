import { useState } from "react";

const getTotalMinutes = (moviesAva) =>
  moviesAva?.reduce(
    (acc, item) =>
      acc + (item.Runtime === "N/A" ? 0 : +item.Runtime.split(" ")[0]),
    0,
  );

const useWatchtedMovies = () => {
  const [moviesAva, setMoviesAva] = useState([]);
  const [visibleList, setVisibleList] = useState(false);
  const [ratingMovie, setRatingMovie] = useState([]);

  const handleClickDelete = (id) => {
    setMoviesAva((prev) => prev.filter((p) => p.Title !== id));
    setRatingMovie((prev) => {
      const newRatingMovie = prev.filter((p) => p.Title !== id);
      console.log("New Rating Movie:", newRatingMovie);
      return newRatingMovie;
    });
  };

  return {
    moviesAva,
    setMoviesAva,
    visibleList,
    setVisibleList,
    ratingMovie,
    setRatingMovie,
    handleClickDelete,
  };
};

const ListMovies = ({
  movie,
  movieWatch,
  handleClickBack,
  handleClickMovie,
}) => {
  const {
    moviesAva,
    setMoviesAva,
    visibleList,
    setVisibleList,
    ratingMovie,
    setRatingMovie,
    handleClickDelete,
  } = useWatchtedMovies();

  const handleVisibleLIst = (clickedMovie) =>
    setVisibleList((prev) =>
      prev?.id === clickedMovie.id ? false : clickedMovie,
    );

  const handleAddMovie = (e) => {
    e.preventDefault();
    const { rating } = e.target.elements;
    const newRating = rating.value;

    console.log("Adding new rating: " + newRating);

    setRatingMovie((prev) => [
      ...prev,
      { Title: movieWatch.Title, userRating: newRating },
    ]);
    setVisibleList(false);

    if (!moviesAva.find((movieAva) => movieAva.Title === movieWatch.Title)) {
      setMoviesAva((prevMoviesAva) => [...prevMoviesAva, movieWatch]);
    }
    handleClickBack();
  };

  console.log("Filmes na lista de Ava:" + moviesAva);

  const getMoviePoster = (src) => (src === "N/A" ? "./img/404-img.jpg" : src);

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
                  <img src={getMoviePoster(movies.Poster)} alt={movies.Plot} />
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
                <img
                  src={getMoviePoster(movieWatch.Poster)}
                  alt={movieWatch.Plot}
                />
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
                <span> {getTotalMinutes(moviesAva)} min</span>
              </p>
            </div>
          </div>

          <ul className="list">
            {moviesAva.map((movieAva) => (
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
                  Sua nota :{" "}
                  {
                    ratingMovie.find(
                      (rating) => rating.Title === movieAva.Title,
                    )?.userRating
                  }
                </p>
                <button
                  onClick={() => handleClickDelete(movieAva.Title)}
                  className="btn-delete"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export { ListMovies };
