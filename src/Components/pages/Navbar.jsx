import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img className="ms-auto d-block" src='https://yavicrlti1ts8lkf.public.blob.vercel-storage.com/Logo_Blanco_color.svg' height="24" alt="airvex logotipo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <Link className="nav-link nav-a active" to="/">Home</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link nav-a active">Registrarse</Link>
                </li>
                <li className="nav-item ms-2">
                  <Link className="nav-link nav-a active" >Carrito</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

/*const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to="/">
      <h3 className="navbar-brand">HOME</h3>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <h3 className="nav-link" >Features</h3>
        </li>
        <Link to="/carrito">
          <li className="nav-item active">
            <h3 className="nav-link" >CARRITO</h3>
          </li>
        </Link>
        <li className="nav-item dropdown">
          <h3 className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown link
          </h3>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <h3 className="dropdown-item" >Action</h3>
            <h3 className="dropdown-item" >Another action</h3>
            <h3 className="dropdown-item" >Something else here</h3>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  )
}
export default Navbar*/