import React, { Component } from "react";

import "./App.css";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";

import { connect } from "react-redux";
import * as actionCreators from "../src/actions/index";

class App extends Component {
  async componentDidMount() {
    await this.props.loadData();
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    );
  }
}
const mapDispathToProps = dispatch => {
  return {
    loadData: () => {
      dispatch(actionCreators.loadData());
    }
  };
};

export default connect(
  null,
  mapDispathToProps
)(App);
