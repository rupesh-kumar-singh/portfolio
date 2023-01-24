import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <h1 style={{ color: "red" }}>Rupesh kumar singh</h1>
              </div>
              <p>
                I am interested in working with any company that thinks my skill
                will be helpful for them. If you are looking for someone like
                me, please let me know.
              </p>
              <ul className="contactCircles">
                <a
                  href="https://www.linkedin.com/in/singhrupesh01071999/"
                  target="_blank"
                >
                  <li>
                    <FaLinkedin className="contactIcon" />
                  </li>
                </a>
                <a href="https://github.com/rupesh-kumar-singh" target="_blank">
                  <li>
                    <FaGithub className="contactIcon" />
                  </li>
                </a>

                <a
                  href="https://www.facebook.com/rupeshkumar.singh.52459615"
                  target="_blank"
                >
                  <li>
                    <FaFacebook className="contaction" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
