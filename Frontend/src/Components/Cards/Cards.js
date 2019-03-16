import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import * as actionCreators from "../../actions/index";

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

    return <div>{y}</div>;
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
