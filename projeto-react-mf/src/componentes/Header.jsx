import { Link } from "react-router-dom";

//ASSETS
import "./Header.css";
import Logo from "../assets/logoDnc.svg";

function Header() {
  return (
    <header className="container">
      <div className="al-center d-flex jc-space-between">
        <Link to="/">
          <img src={Logo} alt="ERROR" />
        </Link>
      </div>
      <nav>
        <ul className="d-flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
