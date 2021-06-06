import './App.css';
import React, { Fragment } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

console.log(window.location.pathname)
function App() {
  return (
    <Router>
      {(window.location.pathname != "/") ? <Navbar /> : ''}
      <Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Fragment>
    </Router >
  );
}

export default App;
