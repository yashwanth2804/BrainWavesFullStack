const Stocks = require("./stocksmodel");
const _ = require("lodash");

const axios = require("axios");

/**
 * Get list of all posts confirmed by the blockchain
 * @returns {Tweet[]}
 */

const getStockHistory = async (req, res) => {
  //console.log(req)
  console.log("get stocks" + req.params.symbol);

  try {
    const Restrants = await Stocks.find({ symbol: req.params.symbol })
      .sort({ date: -1 })
      .exec();

    res.send(Restrants);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getStocks, getStock, getStockHistory, getAllSymbols, getj };
