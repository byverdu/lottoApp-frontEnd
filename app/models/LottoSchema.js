// Example model
'use strict';

let mongoose = require('mongoose'),
  LottoSchema = mongoose.Schema({

  lottoID: String,
  date: String,
  lastResult: String,
  extras: String,
  mostRepeated: String,
  statistics: Array,
  allResults: Array,
  stars: {
    lastResult: String,
    mostRepeated: String,
    allResults: Array,
    statistics: Array
  }
});

LottoSchema.methods.getLottoID = function() {
  return this.lottoID;
};

LottoSchema.methods.getLastDate = function() {
  return this.date;
};

module.exports = mongoose.model('Lotto', LottoSchema);
