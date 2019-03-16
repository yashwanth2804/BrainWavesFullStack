import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";

// import SiderComp from '../SiderComponent/SiderComp'
// import Stocks from '../Stocks/Stocks';
// import Company from '../Company/Company'
import * as actionCreators from "../../actions/index";
import Cards from "../Cards/Cards";

class Home extends Component {
  // state ={
  //     isSearched:false,
  //     isDetailedView:false,
  //     ShowCompanySymbol:""

  // }

  // componentDidMount() {
  //   this.props.onLoad();
  // }
  render() {
    // const isSearch = (c) => {

    //     this.setState({isSearched:true})
    // }
    // const clearSearch = () => {
    //     this.setState({isSearched:false});
    //     /// call api to get selected portifolio
    //     this.props.clearStock(this.props.portifolioDefaultStocks);
    // }

    // const ShowCompany = (a) =>{
    //     this.setState({isDetailedView:true,ShowCompanySymbol:a});

    // }
    // const showDefault =() =>{
    //     this.setState({isDetailedView:false})
    // }

    // const {  SearchorselstockFun } = this.props;

    return <Cards />;
  }
}

const mapStateToProps = state => {
  return {
    //  data: state.StocksR.data
  };
};

const mapDispathToProps = dispatch => {
  return {
    //  byNow: (pId) => { dispatch(actionCreators.buyNow(pId)) },
    // onLoad: () => {
    //   dispatch(actionCreators.loadData());
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
