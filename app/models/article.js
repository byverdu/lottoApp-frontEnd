// Example model
'use strict';

let mongoose = require('mongoose'),
  LottoSchema = mongoose.Schema({

  lottoID: String,
  date: String,
  extras: String,
  lastResult: String,
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
//
// LottoSchema.virtual('date')
//   .get(function(){
//     return this._id.getTimestamp();
//   });

mongoose.model('Lotto', LottoSchema);
