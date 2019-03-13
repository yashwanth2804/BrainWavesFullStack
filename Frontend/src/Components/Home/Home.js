import React, { Component } from 'react'
import { Layout} from 'antd';

import SiderComp from '../SiderComponent/SiderComp'
import Stocks from '../Stocks/Stocks';
import Company from '../Company/Company'
import * as actionCreators from '../actions/index';
import { connect } from 'react-redux';

class Home extends Component {

    state ={
        isSearched:false,
        isDetailedView:false,
        ShowCompanySymbol:""
         
        
    }
    
    render() {
        
        const isSearch = (c) => {
            
            this.setState({isSearched:true})
        }
        const clearSearch = () => {
            this.setState({isSearched:false});
            /// call api to get selected portifolio
            this.props.clearStock(this.props.portifolioDefaultStocks);
        }

        const ShowCompany = (a) =>{
            this.setState({isDetailedView:true,ShowCompanySymbol:a});

        }
        const showDefault =() =>{
            this.setState({isDetailedView:false})
        }

        const {  SearchorselstockFun } = this.props;

      
        return (
            <div>
          
                <Layout>

                    <SiderComp Searchorselstockfun={SearchorselstockFun} isSearchFun={isSearch} />
                    
                   
                { (!this.state.isDetailedView) ? 
                (<Stocks isDetailViewFun={ShowCompany}  isSearchedprop={this.state.isSearched} clearSearchFun={clearSearch} />) 
                  :   <Company showDefaultFun={showDefault} symbol={this.state.ShowCompanySymbol} />
            }

                </Layout>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return (
        {
          portifolioDefaultStocks: state.StocksR.portifolioStocks,
         
        }
    )
  
  }

const mapDispathToProps = (dispatch) => {
    return ({
      //  byNow: (pId) => { dispatch(actionCreators.buyNow(pId)) },
      clearStock: (e) => { dispatch(actionCreators.clearSearchStock(e)) }
  
    });
  }
  
  
  export default connect(mapStateToProps, mapDispathToProps)(Home);
