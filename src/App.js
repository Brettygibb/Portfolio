import React from "react";
import "./App.css";
import About from "./About.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Home from "./Home.js";
import Nav from "./Nav.js";
import Projects from "./Projects.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brett Gibbons Portfolio</h1>
        <p>Welcome to my portfolio! Check out my projects below.</p>

        {/* Add more components or sections here */}
        <Nav />
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
