const NavBar = () => {
  return (
    <div className="nav-bar">
      <img className="logo" src="./img/logo-me-avalia.png" alt="" />
      <form className="form-search" action="">
        <input className="search" placeholder="Buscar filmes" />
        <button className="btn-search">Buscar</button>
      </form>
      <h2 className="num-results">5 Resultados</h2>
    </div>
  );
};

export { NavBar };
