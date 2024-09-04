import { Link } from "react-router-dom";
import { useState } from "react";

//ASSETS
import "./Header.css";
import Logo from "../assets/logoDnc.svg";

//COMPONENTS
import Button from "./Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="container">
      <div className="al-center d-flex jc-space-between">
        <Link to="/">
          <img src={Logo} />
        </Link>
        <div className="mobile-menu">
          <Button buttonStyle="secundary" onClick={toggleMenu}>
            Menu
          </Button>
        </div>
      </div>
      <nav className={`${isOpen ? "open" : ""}`}>
        <Button
          buttonStyle="unstyled"
          className="mobile-menu close-btn"
          onClick={toggleMenu}
        >
          X
        </Button>
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
