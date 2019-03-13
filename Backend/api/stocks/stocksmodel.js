const mongoose = require('mongoose')
const Schema = mongoose.Schema;


/*
 "date" : "2016-01-05 00:00:00",
    "symbol" : "WLTW",
    "open" : 123.43,
    "close" : 125.839996,
    "low" : 122.309998,
    "high" : 126.25,
    "volume" : 2163600.0
*/
//let Post = null



const StocksSchema = new Schema({
  "date": Date,
  "symbol" : String,
  "open" : Number,
  "close" : Number,
  "low" : Number,
  "high" : Number,
  "volume" : Number
});

//samplestocks
//stocks
//StocksSchema.index({'date':1})
Stocks = mongoose.model('stocks', StocksSchema)
module.exports = Stocks



