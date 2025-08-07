import { Link } from "react-router-dom"

const Navbar = () => {
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
export default Navbar