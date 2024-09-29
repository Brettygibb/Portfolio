import React from "react";
import "./App.css";
import About from "./About.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brett Gibbons Portfolio</h1>
        <p>Welcome to my portfolio! Check out my projects below.</p>

        {/* Add more components or sections here */}
        <Header />
        <About />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
