import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Music from "./pages/Music";
import FourOhFour from "./pages/FourOhFour"

// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/music" component={Music} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={FourOhFour} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
