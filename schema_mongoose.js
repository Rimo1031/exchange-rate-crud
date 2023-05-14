const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExchangeInfo = new Schema({
  source: String,
  tgt: String,
  rate: Number,
  date: String,
});

const Model = mongoose.model("excinfo", ExchangeInfo);

module.exports = Model;
