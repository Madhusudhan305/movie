import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Booknow from "./Booknow";
import Sam from "./Sam";
export default function Movie(props) {
  return (
    <div className="container">
      {props.mdata.map((e, index) => {
        // const style = {
        //   background: `url('/images/${e.Image}.jpg')`
        // };
        return (
          <div className="card">
            <Router>
              <div>
                <ul>
                  <li>
                    {" "}
                    <img src={`/images/${e.Image}.jpg`} key={index} alt="" />
                  </li>

                  <li>
                    <span>Name:</span> {e.title}
                  </li>
                  <br></br>
                  <li>
                    <span>Likes:</span> {e.likes}
                  </li>
                  <br></br>
                  <li>
                    <span>Dis Likes:</span> {e.dislikes}
                  </li>
                  <li>
                    <span>Details:</span> {e.details}
                  </li>
                  <li>
                    <Link to={`/movies/${e.title}`}>
                      {" "}
                      <button>Book My Show</button>
                    </Link>
                  </li>
                </ul>
              </div>
              <Route
                path="/movies/:movietitle"
                exact
                strict
                render={props => <Sam {...props} booknow={props.mdata} />}
              />
            </Router>
          </div>
        );
      })}
    </div>
  );
}
