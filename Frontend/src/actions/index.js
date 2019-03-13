import axios from 'axios';
  
//loadStockTable

export const loadStockTable = (defaultStocks) => {

  //https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=price,company,chart&range=1m
  return async(dispatch) => {
    
    console.log("looading stock table");
    console.log(defaultStocks)

    const Stock_detail_table_ = await newFunction(defaultStocks.join(','));
    console.log(Stock_detail_table_)


    dispatch({ type: "LOADSTOCK_TABLE", payload: Stock_detail_table_ });

  }

}


export const clearSearchStock = (defaultStocks) => {

  return async(dispatch) => {
    console.log("looading stock table");
    console.log(defaultStocks)

    const Stock_detail_table_ = await newFunction(defaultStocks.join(','));
    console.log(Stock_detail_table_)

    dispatch({ type: "LOADSTOCK_TABLE", payload: Stock_detail_table_ });

  }

}

//initialSetGraph


export const initialSetGraph = (g_data) => {

  return async(dispatch) => {
    
    dispatch({ type: "INITIAL_GRAPH", payload: g_data });

  }

}

//clearChart

export const clearChart = () => {

  return async(dispatch) => {
    
     
    dispatch({ type: "CLEAR_GRAPH" });

  }

}



/// updateGraph

export const updateGraph = (g_data) => {

  return async(dispatch) => {
     
     
    dispatch({ type: "UPDATE_GRAPH", payload: g_data });

  }

}

export const removeStock = (symbol) => {

  return (dispatch) => {
 
    dispatch({ type: "REMOVE_STOCKS", payload: symbol });

  }

}

export const addStock =   (symbol) => {
  //https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=price,company,chart&range=1m
  return async (dispatch) => {

   
    const Stock_detail_table_ = await newFunction(symbol);
   

    if(Stock_detail_table_[0] === undefined){
      
      dispatch({ type: "ERROR", payload: "No Stock Found !" });
    }else{
    const Stock_detail_table = Stock_detail_table_[0];
 
    dispatch({ type: "ADD_STOCKS", payload: { symbol, Stock_detail_table } });
    }
    
  }

}


export const searchStock = (symbol) => {

  return async(dispatch) => {

    
    const Stock_detail_table_ = await newFunction(symbol);
    

    if(Stock_detail_table_[0] === undefined){
      
      dispatch({ type: "ERROR", payload: "No Stock Found !" });
    }else{
      const Stock_detail_table = Stock_detail_table_[0];

     dispatch({ type: "SEARCH_STOCKS", payload: {symbol,Stock_detail_table} });
  
    }
    
  }

}













export const postComment = (id, comment) => {

  return (dispatch) => {

    console.log(comment);
    console.log(process.env.REACT_APP_EOSIO_ACCOUNT)
    console.log("%%%%%%%%%%%%")
    const obj = {
      timestamp: Math.floor(Date.now() / 1000),
      author: process.env.REACT_APP_EOSIO_ACCOUNT,
      comment: comment,
      postid: id

    }

    this.eosio.transaction(
      process.env.REACT_APP_EOSIO_ACCOUNT,
      'commentpost', {

        ...obj
      }
    ).then(function (value) {
      console.log(value);

      return value;
    }).catch(function (e) {
      console.log(e);
    })

    dispatch({ type: "COMMENT", payload: obj });

  }

}


export const tweetsFetchAPI = (url) => {
  console.log(url);
  return (dispatch) => {

    axios
      .get(
        url
      )

      .then(res => dispatch(

        { type: 'LOAD_TWEETS', newTweets: res }
      ))
      .catch(error => console.log("errrrr"));;


  }
};

////hit likes 
export const hitlike = (id, author, timestamp) => {

  //redux thunk
  return (dispatch) => {

    console.log(process.env.REACT_APP_EOSIO_ACCOUNT)
    console.log("%%%%%%%%%%%%" + id)
    const obj = {
      timestamp: timestamp,
      author: author,
      postid: id

    }

    this.eosio.transaction(
      process.env.REACT_APP_EOSIO_ACCOUNT,
      'likepost', {

        ...obj
      }
    ).then(function (value) {
      console.log("Sucessfil like ")
      console.log(value);
      return value;
    }).catch(function (e) {
      console.log(e);
    });


    dispatch({ type: "LIKE", id: id, author: author, timestamp: timestamp });
  }

};


async function newFunction(symbol) {
  const stockFromApi = await axios.get("https://api.iextrading.com/1.0/stock/market/batch?symbols=" + symbol + "&types=price,company,chart&range=1m");

  console.log(stockFromApi)
  if( Object.keys(stockFromApi).length === 0 ){
    return "no data";
  }
    

  const Stock_detail_table_ = [];
  Object.values(stockFromApi.data).map((f) => {
    console.log(f);
    const Stock_detail_table = {};
    Stock_detail_table.key = Math.random();
    Stock_detail_table.price = f.price;
    Stock_detail_table.symbol = f.company.symbol;
    Stock_detail_table.companyName = f.company.companyName;
     
    const ch = f.chart;
    const latest = ch[Object.values(ch).length - 1];
    Stock_detail_table.open = latest.open;
    Stock_detail_table.high = latest.high;
    Stock_detail_table.low = latest.low;
    Stock_detail_table.close = latest.close;
    Stock_detail_table.volume = latest.volume;
    Stock_detail_table.changePercent = latest.changePercent;
    Stock_detail_table_.push(Stock_detail_table);
  });
  return Stock_detail_table_;
}

 