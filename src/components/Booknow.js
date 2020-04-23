import React, { Component } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
export class Booknow extends Component {
  render(props) {
    return (
      <div>
        <Router>
          <Link to="/home">Home</Link>
          <Route exact strict path="/home" component={Home} />
          this is a<h1>book my show</h1>
        </Router>
      </div>
    );
  }
}

export default Booknow;
