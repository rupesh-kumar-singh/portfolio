import React from "react";
import { Link } from "react-scroll";

import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <h2 style={{ color: "red" }}>Rupesh</h2>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <Link spy={true} smooth={true} duration={500} to={"home"}>
                <li>
                  <a href="">Home</a>
                </li>
              </Link>

              <Link spy={true} smooth={true} duration={500} to={"about"}>
                <li>
                  <a href="">About</a>
                </li>
              </Link>
              <Link spy={true} smooth={true} duration={500} to={"skills"}>
                <li>
                  <a href="">Skills</a>
                </li>
              </Link>
              <Link spy={true} smooth={true} duration={500} to={"project"}>
                <li>
                  <a href="">Project</a>
                </li>
              </Link>
              <Link spy={true} smooth={true} duration={500} to={"contact"}>
                <li>
                  <a href="">Contact</a>
                </li>
              </Link>
              <li>
                <a
                  href="https://drive.google.com/file/d/1h1Mw2hNvil-XSqUshxdyHel-W01PTYDF/view"
                  target="_blank"
                  className="btn btn-outline"
                >
                  Resume
                </a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
