import React from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Services from "./components/Services";
function App() {
  return (
    <div className="App">
      <Banner />
      <Nav />
      <About />
      <Services />

      <Project />

      <Contact />
    </div>
  );
}

export default App;
