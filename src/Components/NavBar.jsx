import { useState, useEffect, useRef } from "react";

const NavBar = ({ setMovie, movie }) => {
  const [searchMovie, setSearchMovie] = useState("");
  const [listMovie, setListMovie] = useState("");
  const formRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setListMovie(searchMovie);
  };

  useEffect(() => {
      formRef.current.reset();
      console.log('Executou o useRef')
  }, [movie]);

  useEffect(() => {
    const getMovies = async () => {
      const request = await fetch(
        `https://omdbapi.com/?s=${searchMovie}&apikey=e2e7397f&`,
      );
      const response = await request.json();
      setMovie(response.Search);
    };
    getMovies();
  }, [listMovie]);

  return (
    <nav className="nav-bar">
      <img
        className="logo"
        src="https://github.com/Gui089/Me-Avalia/blob/main/img/logo-me-avalia.png?raw=true"
        alt=""
      />
      <form ref={formRef} onSubmit={handleFormSubmit} className="form-search" action="">
        <input
          name="searchMovie"
          onChange={(e) => setSearchMovie(e.target.value)}
          className="search"
          placeholder='Buscar Filmes'
        />
        <button className="btn-search">Buscar</button>
      </form>
      {listMovie && (
        <h2 className="num-results"> {movie?.length} Resultados</h2>
      )}
    </nav>
  );
};

export { NavBar };
