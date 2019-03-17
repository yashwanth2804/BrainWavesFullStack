import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import { Row, Col, Button } from "antd";
// import SiderComp from '../SiderComponent/SiderComp'
// import Stocks from '../Stocks/Stocks';
// import Company from '../Company/Company'
import * as actionCreators from "../../actions/index";
import Cards from "../Cards/Cards";
import "./Home.css";
class Home extends Component {
  state = {
    sField: ""
  };

  render() {
    const handleRest = e => {
      this.setState({ sField: e.target.value });
    };

    const closeFit = () => {
      this.props.closeFitFun();
    };

    const Search_ = s => {
      console.log("saerch fun" + s);
      this.props.SearchFun(s);
    };

    return (
      <div>
        <Row>
          <Col style={{ marginTop: "5%" }} span={8}>
            <Row>
              <input
                className={"g inp"}
                value={this.state.sField}
                onChange={e => handleRest(e)}
                placeholder={
                  "Search by Our Ref, PartyA, PartB , ISDA (DD/MM/YYYY)    "
                }
              />{" "}
              <Button
                type="primary"
                block
                onClick={() => Search_(this.state.sField)}
              >
                Search
              </Button>
            </Row>
            <br />
            <Row>
              <Button type="dashed" onClick={closeFit}>
                Close Fit
              </Button>
            </Row>
            <br />
            <Row>
              {" "}
              <Button type="dashed">Unmatched</Button>{" "}
            </Row>
          </Col>
          <Col span={16} style={{ marginTop: "3%" }}>
            <Cards />
          </Col>
        </Row>
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
    closeFitFun: () => {
      dispatch(actionCreators.closeFit());
    },
    SearchFun: g => {
      dispatch(actionCreators.SearchF(g));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
