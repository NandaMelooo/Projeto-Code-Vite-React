import { Link } from "react-router-dom";

//ASSETS
import "./Footer.css";
import Logo from "../assets/logoDnc.svg";
import BrazilLogo from "../assets/brazilFlag.svg";
import EuaLogo from "../assets/euaFlag.svg";
import FacebookLogo from "../assets/logoFacebook.svg";
import InstaLogo from "../assets/logoInsta.svg";
import LinkedinLogo from "../assets/logoLinkedin.svg";
import TwitterLogo from "../assets/logoTwitter.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="d-flex jc-space-between">
          <div className="footer-logo-col">
            <img src={Logo} className="footer-logo" />
            <p className="grey-1-color">
              A escola que prepara você para as profissões em alta no mercado de
              trabalho.
            </p>
            <div className="d-flex social-links jc-space-between grey-1-color">
              <a href="https://google.com" target="_blank">
                <img src={FacebookLogo} alt="Error" />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={InstaLogo} alt="Error" />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={LinkedinLogo} alt="Error" />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={TwitterLogo} alt="Error" />
              </a>
            </div>
          </div>
          <div className="d-flex">
            <div className="footer-col ">
              <h3>Pages</h3>
              <ul className="grey-1-color">
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
            </div>
            <div className="footer-col">
              <h3 className="grey-1-color">Contact</h3>
              <p className="grey-1-color">
                R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP
                12243-030
              </p>
              <p className="grey-1-color">suporte@escoladnc.com.br</p>
              <p className="grey-1-color">(19) 99187-4342</p>
            </div>
          </div>
        </div>
        <div className="d-flex jc-space-between footer-copy">
          <p className="grey-1-color">Copyright © DNC - 2024</p>
          <div className="langs-area d-flex">
            <img src={BrazilLogo} height="29px" />
            <img src={EuaLogo} height="29px" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
