const express = require("express");
const restaurantscontroller = require("./stockscontroller");
const mongoose = require("mongoose");

var mongoDB = "mongodb://127.0.0.1/onetoone_db_1";
//mongodb://<dbuser>:<dbpassword>@ds161894.mlab.com:61894/restaurants_db
//var mongoDB = 'mongodb://hackerEarth:'+process.env.dbpwd+'@ds161894.mlab.com:61894/restaurants_db';
mongoose.set("useCreateIndex", true);
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const Stockrouter = express.Router();

var bodyParser = require("body-parser");
Stockrouter.use(bodyParser.json()); // to support JSON-encoded bodies
Stockrouter.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
// Stockrouter.route('/getStocks/:skip').get(restaurantscontroller.getStocks);
// Stockrouter.route('/getStock/:symbol').get(restaurantscontroller.getStock);

Stockrouter.route("/getAll").get(restaurantscontroller.getAll);
// Stockrouter.route('/getAllSymbol').get(restaurantscontroller.getAllSymbols);

module.exports = Stockrouter;
