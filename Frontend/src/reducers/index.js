import {combineReducers} from 'redux';
import Stocks from './Stocks';
 

const rootReducer = combineReducers({
    StocksR:Stocks,
     
});

export default rootReducer;

