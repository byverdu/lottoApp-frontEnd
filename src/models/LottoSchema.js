// Example model

import mongoose from 'mongoose';

const LottoSchema = mongoose.Schema({

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

LottoSchema.methods.getLastResult = function() {
  return this.lastResult;
};

LottoSchema.methods.getMostRepeated = function() {
  return this.mostRepeated;
};

LottoSchema.methods.getExtras = function() {
  return this.extras;
};

LottoSchema.methods.getAllResults = function() {
  return this.allResults;
};

LottoSchema.methods.getStatistics = function() {
  return this.statistics;
};

LottoSchema.methods.getLastResultStars = function() {
  return this.stars.lastResult;
};

LottoSchema.methods.getMostRepeatedStars = function() {
  return this.stars.mostRepeated;
};

LottoSchema.methods.getAllResultsStars = function() {
  return this.stars.allResults;
};

LottoSchema.methods.getStatisticsStars = function() {
  return this.stars.statistics;
};

module.exports = mongoose.model( 'Lotto', LottoSchema );
