import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Music from "./components/pages/Music";

// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/music" component={Music} />
        <Route path="/contact" component={Contact} />

      </div>
    </Router>
  );
}

export default App;
