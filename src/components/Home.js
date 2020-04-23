import React, { Component } from "react";
import Movie from "./Movie";
export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jsondata: []
    };
  }
  async componentDidMount() {
    const url = "http://localhost:3004/data";
    const resp = await fetch(url);
    const data = await resp.json();
    this.setState({
      jsondata: data
    });
  }
  render() {
    return (
      <div>
        <Movie mdata={this.state.jsondata} />
      </div>
    );
  }
}

export default Home;
