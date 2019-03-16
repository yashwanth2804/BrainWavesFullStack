import { DefaultStocks } from "../mock";

const initalState = {
  data: []
};

const Stocks = (state = initalState, action) => {
  const newState = { ...state };

  //LOADSTOCK_TABLE
  if (action.type === "LOAD_DATA") {
    console.log(action.payload);
    return { ...state, data: action.payload };
  }

  //ERROR
  if (action.type === "ERROR") {
    console.log(action.payload);
    return {
      ...state,
      isError: true,
      ErrMsg: action.payload,
      Stock_Table_Data: []
    };
  }

  if (action.type === "ADD_STOCKS") {
    const { symbol, Stock_detail_table } = action.payload;
    console.log(action.payload);
    console.log(symbol + " " + Stock_detail_table);

    const y = [...newState.portifolioStocks, symbol];
    var uniqueItems = [...new Set(y)];

    console.log(Stock_detail_table);
    const z = [...newState.Stock_Table_Data, Stock_detail_table];
    console.log(z);
    return { ...state, portifolioStocks: uniqueItems, Stock_Table_Data: z };
  }
  //REMOVE_STOCKS

  if (action.type === "REMOVE_STOCKS") {
    console.log(action.payload);

    const updatedPortifolio = newState.portifolioStocks.filter(
      f => f !== action.payload
    );
    const updatedStock_Table_Data = newState.Stock_Table_Data.filter(
      f => f.symbol !== action.payload
    );
    return {
      ...state,
      portifolioStocks: updatedPortifolio,
      Stock_Table_Data: updatedStock_Table_Data
    };
  }

  if (action.type === "SEARCH_STOCKS") {
    const { Stock_detail_table } = action.payload;
    console.log(Stock_detail_table);
    return { ...state, Stock_Table_Data: [Stock_detail_table] };
  }

  //INITIAL_GRAPH

  if (action.type === "INITIAL_GRAPH") {
    console.log("INITIAL_GRAPH");
    return { ...state, g_Data: action.payload };
  }

  ///CLEAR_GRAPH
  if (action.type === "CLEAR_GRAPH") {
    console.log("CLEAR_GRAPH");

    return { ...state, isError: false, ErrMsg: "", g_Data: [] };
  }

  //UPDATE_GRAPH
  if (action.type === "UPDATE_GRAPH") {
    console.log("UPDATE_GRAPH");
    console.log(action.payload);
    // const mock =[1548412260000, 0.201];
    // console.log([...state.g_Data])
    // const addnewElem = [mock,...state.g_Data]
    // return newState;

    const addnewElem = [...action.payload, ...state.g_Data];
    console.log(addnewElem);

    return { ...state, g_Data: addnewElem };
  }

  return newState;
};

export default Stocks;
