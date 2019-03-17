import React, { Component } from "react";
import { connect } from "react-redux";
import "./Card.css";
import { Modal, Button } from "antd";

import * as actionCreators from "../../actions/index";

class Card extends Component {
  state = { visible: false };
  showModal = () => {
    console.log("shoing model");
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    const showModal = () => {};

    const schemasC = this.props.datanew;

    const SG_sch = this.props.SG_sch_;
    // console.log(schemasC);
    //console.log(SG_sch);
    const ar = ["_30V", "_36", "_32B", "_33B"];

    const g = Object.keys(schemasC).map(f => {
      return (
        <tr
          className="write"
          style={{ backgroundColor: ar.includes(f) ? "yellow" : "yellowgreen" }}
        >
          <td>{f}</td>
          <td> {SG_sch[f]} </td>
          <td> {schemasC[f]} </td>
        </tr>
      );
    });

    return (
      <div>
        <tr className="write" onClick={this.showModal}>
          <td> {SG_sch["_20"]} </td>
          <td> {schemasC["_20"]} </td>
        </tr>
        <Modal
          title="Full Details"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {g}
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Card);
