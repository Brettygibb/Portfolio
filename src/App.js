import React from "react";
import "./App.css";
import About from "./About.js";
import Contact from "./Contact.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brett Gibbons Portfolio</h1>
        <p>Welcome to my portfolio! Check out my projects below.</p>

        {/* Add more components or sections here */}
        <About />
        <Contact />
      </header>
    </div>
  );
}

export default App;
