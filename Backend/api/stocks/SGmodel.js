const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define Schema
//var BookSchema = mongoose.Schema({}, { strict: false });

// compile schema to model
//var Book = mongoose.model("Book", BookSchema, collection_);

// "20" : "KTPP27662797",
// "36" : "1.1305",
// "22A" : "NEWT",
// "22C" : "NEWGL1113SOGEPP",
// "30T" : "14/03/2019",
// "52A" : "NEWGGB2L",
// "82A" : "NEWGGB2L",
// "87A" : "SOGEFRPPHCM",
// "77H" : "ISDA 01/06/2001",
// "30V" : "18/03/2019",
// "32B" : "EUR 1000000",
// "57A" : "SOGEFRPPHCM",
// "33B" : "USD 1130500",
// "53A" : "SOGEUS33XXX",
// "57D" : "SOGEUS33XXX",
// "58A" : "SOGEFRPPHCM",
// "24D" : "BROK",

const SGSchema = new Schema({
  _20: String,
  _36: Number,
  _22A: String,
  _22C: String,
  _30T: Date,
  _52A: String,
  _82A: String,
  _87A: String,
  _77H: String,
  _30V: Date,
  _32B: String,
  _57A: String,
  _33B: String,
  _53A: String,
  _57D: String,
  _58A: String,
  _24D: String
});

// /*
//  "date" : "2016-01-05 00:00:00",
//     "symbol" : "WLTW",
//     "open" : 123.43,
//     "close" : 125.839996,
//     "low" : 122.309998,
//     "high" : 126.25,
//     "volume" : 2163600.0
// */
// //let Post = null

// const StocksSchema = new Schema({}, { strict: false });

// //samplestocks
// //stocks
// //StocksSchema.index({'date':1})
SG = mongoose.model("sg", SGSchema, "sg");
module.exports = SG;
