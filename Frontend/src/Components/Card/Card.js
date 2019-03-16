import React, { Component } from "react";
import { connect } from "react-redux";
import "./Card.css";
import * as actionCreators from "../../actions/index";

class Card extends Component {
  render() {
    const schemasC = this.props.datanew;

    const SG_sch = this.props.SG_sch_;
    console.log(schemasC);
    console.log(SG_sch);

    const g = Object.keys(schemasC).map(f => {
      return (
        <tr className="write" style={{ backgroundColor: "red" }}>
          <td>{f}</td>
          <td> {SG_sch[f]} </td>
          <td> {schemasC[f]} </td>
        </tr>
      );
    });
    console.log(g);

    return <div>{g}</div>;
  }
}

export default connect(
  null,
  null
)(Card);
