import React from "react";
import { Link } from "react-scroll";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Rupesh kumar singh",
    text: " Full Stack Developer Web Developer",
  });
  return (
    <header className="header home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <a
                    href="https://www.linkedin.com/in/singhrupesh01071999/"
                    target="_blank"
                  >
                    <li>
                      <FaLinkedin className="contactIcon" />
                    </li>
                  </a>
                  <a
                    href="https://github.com/rupesh-kumar-singh"
                    target="_blank"
                  >
                    <li>
                      <FaGithub className="contactIcon" />
                    </li>
                  </a>
                  <a
                    href="https://www.facebook.com/rupeshkumar.singh.52459615"
                    target="_blank"
                  >
                    <li>
                      <FaFacebook className="contactIcon" />
                    </li>
                  </a>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a
                    // href="https://drive.google.comput resume here"
                    target="_blank"
                    className="btn btn-outline"
                  >
                    Get Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <Link spy={true} smooth={true} duration={500} to={"about"}>
                    <a href="" className="btn btn-smart">
                      About Me
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              {/* <img src={state.image} alt="man" /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
