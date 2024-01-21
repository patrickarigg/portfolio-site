import { AiOutlineProject } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar(params) {
  return (
    <nav>
      <div className="nav-buttons">
        <a href="/" className="nav-button">
          <span id="logo">PR</span>
        </a>
        <a href="#about" className="nav-button">
          <MdOutlinePersonOutline className="nav-icon" />
          <span>About</span>
        </a>
        <a href="#projects" className="nav-button">
          <AiOutlineProject className="nav-icon" />
          <span>Projects</span>
        </a>
      </div>
      <div className="socials">
        <a href="https://github.com/patrickarigg/" target="_blank">
          <FaGithub className="socials-icon" />
        </a>
        <a href="https://www.linkedin.com/in/patrick-rigg/" target="_blank">
          <FaLinkedin className="socials-icon" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
