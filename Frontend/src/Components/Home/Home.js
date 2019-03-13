import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";

// import SiderComp from '../SiderComponent/SiderComp'
// import Stocks from '../Stocks/Stocks';
// import Company from '../Company/Company'
// import * as actionCreators from '../actions/index';

class Home extends Component {
  // state ={
  //     isSearched:false,
  //     isDetailedView:false,
  //     ShowCompanySymbol:""

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

    return <div>d</div>;
  }
}

const mapStateToProps = state => {
  return {
    portifolioDefaultStocks: state.StocksR.portifolioStocks
  };
};

const mapDispathToProps = dispatch => {
  return {
    //  byNow: (pId) => { dispatch(actionCreators.buyNow(pId)) },
    // clearStock: (e) => { dispatch(actionCreators.clearSearchStock(e)) }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
