import { Link } from "react-router-dom"
import useCarritoStore from "../../Stores/carritoStore"

const Navbar = () => {

  const totalItems = useCarritoStore((state) => state.getTotalItems());
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
                  <Link className={`nav-link nav-a active ${totalItems > 0 ? 'blue-link' : ''}`} to="/Carrito">Carrito</Link>
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
