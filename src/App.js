import React from "react";
import "./App.css";
import About from "./About.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Home from "./Home.js";
import Nav from "./Nav.js";
import Projects from "./Projects.js";
import Skills from "./Skills.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
