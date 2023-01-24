import React from "react";

import { FaGithub } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";

const Project = () => {
  const [header] = React.useState({
    mainHeader: "Project",
    subHeading: "MERN Stack Project",
    text: "These all the projects are developed using MERN Stack..",
  });
  const [state] = React.useState([
    {
      id: 1,
      poster: "/images/img.png",
      heading: "Food website",
      desc: "This project is  about type of food available in the market and i am serving this to my customer. ",
      tech: "HTML,CSS,FLEXBOX ",
      deploy: "https://vocal-empanada-10642e.netlify.app/",
      github: "https://github.com/rupesh-kumar-singh/food-website",
    },
    {
      id: 2,
      poster: "images/img2.png",
      heading: "Mern-project",
      desc: "This project is complete mern stack food deleveries app any customer can order to my website. ",
      tech: "REACT,NODE,EXPRESS,MONGODB,MONGOOSE",
      deploy: "https://loquacious-raindrop-88c0ce.netlify.app/",
      github: "https://github.com/rupesh-kumar-singh/foodapp-frontend",
    },
    {
      id: 3,
      poster: "images/img3.png",
      heading: "React-project",
      desc: "This project is on react user can see trailer and also add movie in this project. ",
      tech: "REACT,MOCK_API,FORMIK",
      deploy: "https://whimsical-churros-fa3437.netlify.app/",
      github: "https://github.com/rupesh-kumar-singh/guvi",
    },

    {
      id: 4,
      poster: "images/img4.png",
      heading: "Simple calculator",
      desc: "This is simple calculator for calculating the mul, div,sub ,add and modules. ",
      tech: "HTML,CSS,JAVASCRIPT",
      deploy: "https://joyful-empanada-cf8ae4.netlify.app/",
      github: "https://github.com/rupesh-kumar-singh/task-8-part-2",
    },
    {
      id: 5,
      poster: "images/img5.png",
      heading: "Bootstrap project",
      desc: "This project is completely madeup of bootstrap. ",
      tech: "BOOTSTRAP",
      deploy: "https://legendary-croissant-438850.netlify.app/",
      github: "https://github.com/rupesh-kumar-singh/bootstrap-project-2",
    },
    {
      id: 6,
      poster: "images/img6.png",
      heading: "Travel-project",
      desc: "This project is madeup of float method. ",
      tech: "HTML,CSS",
      deploy: "https://incandescent-nougat-38ed4a.netlify.app/",
      github: "https://github.com/rupesh-kumar-singh/travel-website",
    },
    {
      id: 7,
      poster: "images/img7.png",
      heading: "Temperature converter",
      desc: "This is temperature converter celcius to farenhite. ",
      tech: "HTML,CSS,JAVASCRIPT",
      deploy: "https://merry-gecko-3067ae.netlify.app/",
      github:
        "https://github.com/rupesh-kumar-singh/converter/blob/main/index.html",
    },
    {
      id: 8,
      poster: "images/img8.png",
      heading: "All country covid data",
      desc: "This project use api for datafetching and show the covid data cases. ",
      tech: "HTML,CSS,JAVASCRIPT",
      deploy: "https://elegant-kheer-7bdfee.netlify.app/",
      github: "https://github.com/rupesh-kumar-singh/task-10-1",
    },
    {
      id: 9,
      poster: "images/img9.png",
      heading: "Word-counter",
      desc: "This project count the word and charector. ",
      tech: "HTML,CSS,JAVASCRIPT",
      deploy: "https://preeminent-kitsune-278a8c.netlify.app/",
      github:
        "https://github.com/rupesh-kumar-singh/word-counter/blob/main/index.html",
    },
  ]);
  return (
    <div className="prices project">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>

        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="price__rs">
                  <img
                    src={prices.poster}
                    alt="poster"
                    heigh="50px"
                    width="100%"
                    border="10px solid white"
                  />
                </div>
                <div className="priceHeading projectName">{prices.heading}</div>

                <ul>
                  <li className="priceHeading">{prices.desc}</li>

                  <li>{`Tech Stack: ${prices.tech}`}</li>
                </ul>
                <div className="price__btn">
                  <a
                    href={prices.deploy}
                    target="_blank"
                    className="link1 btn btn-outline1"
                  >
                    <ImNewTab fontSize="15px" /> Deploy Link
                  </a>
                  <a
                    href={prices.github}
                    target="_blank"
                    className="btn btn-outline1"
                  >
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
