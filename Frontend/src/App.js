import React, { Component } from 'react';

import './App.css';
import Home from './Home/Home';
import Nav from './Nav/Nav'

import { connect } from 'react-redux';
import * as actionCreators from '../src/actions/index';


class App extends Component {
  
  async componentDidMount(){
   

       await this.props.loadStockTable(this.props.portifolioDefaultStocks);

  }


  render() {
     


    return (
      <div className="App">
      <Nav/>
     
         <Home />
      </div>
    );
  }
}


const mapStateToProps = (state) => {

  return (
      {
        portifolioDefaultStocks: state.StocksR.portifolioStocks
      }
  )

}

const mapDispathToProps = (dispatch) => {
  return ({
    //  byNow: (pId) => { dispatch(actionCreators.buyNow(pId)) },
    loadStockTable: (defaultStocks) => { dispatch(actionCreators.loadStockTable(defaultStocks)) }

  });
}


export default connect(mapStateToProps, mapDispathToProps)(App);
