import { Link } from "react-router-dom";
import { BsCameraVideoFill } from "react-icons/bs";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BsCameraVideoFill /> Filmes Brasil
        </Link>
      </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Filmes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
