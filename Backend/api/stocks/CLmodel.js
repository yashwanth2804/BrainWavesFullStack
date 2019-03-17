const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CLSchema = new Schema({
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
CL = mongoose.model("cl", CLSchema, "cl");
module.exports = CL;
