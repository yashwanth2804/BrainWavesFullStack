import axios from "axios";
import querystring from "querystring";

////SearchF
export const SearchF = srch => {
  return async dispatch => {
    axios
      .post("http://localhost:4000/stocks/getSearch", { search: srch })

      .then(res => dispatch({ type: "SEARCH_", payload: res.data }))
      .catch(error => console.log("errrrr"));
  };
};

//loadStockTable

export const loadData = () => {
  return async dispatch => {
    console.log("looading data");
    axios
      .get("http://localhost:4000/stocks/getAll")

      .then(res => dispatch({ type: "LOAD_DATA", payload: res.data }))
      .catch(error => console.log("errrrr"));
  };
};

//closeFit
export const closeFit = () => {
  return async dispatch => {
    console.log("close fit");

    dispatch({ type: "CLOSE_FIT" });
  };
};
