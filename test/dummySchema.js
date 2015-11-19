'use strict';
module.exports = (fakeSchema, sampleData) => {
  fakeSchema.lottoID = sampleData.lottoID;
  fakeSchema.date = sampleData.date;
  fakeSchema.lastResult = sampleData.lastResult;
  fakeSchema.extras = sampleData.extras;
  fakeSchema.mostRepeated = sampleData.mostRepeated;
  fakeSchema.statistics = sampleData.statistics;
  fakeSchema.allResults = sampleData.allResults;
  fakeSchema.stars.lastResult = sampleData.stars.lastResult;
  fakeSchema.stars.mostRepeated = sampleData.stars.mostRepeated;
  fakeSchema.stars.allResults = sampleData.stars.allResults;
  fakeSchema.stars.statistics = sampleData.stars.statistics;
};
