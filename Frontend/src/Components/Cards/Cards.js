import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import * as actionCreators from "../../actions/index";
import "../Card/Card.css";
import { Divider } from "antd";
class Cards extends Component {
  render() {
    const data__ = this.props.data;

    let y = data__.map((d, i) => {
      const { schemasC, ...SG_sch } = d;

      return (
        <div key={i}>
          <Card datanew={schemasC} SG_sch_={SG_sch} /> <br />{" "}
        </div>
      );
    });

    return (
      <div>
        <span style={{ marginRight: "70%" }}>
          {" There are in total "}
          {Object.keys(this.props.data).length} {" records"}
        </span>
        <Divider />
        <tr>
          <td className="f"> Our reference </td>

          <td className="f"> Client reference </td>
        </tr>
        {y}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.StocksR.data
  };
};

const mapDispathToProps = dispatch => {
  return {
    //  byNow: (pId) => { dispatch(actionCreators.buyNow(pId)) },
    loadData: () => {
      dispatch(actionCreators.loadData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Cards);
