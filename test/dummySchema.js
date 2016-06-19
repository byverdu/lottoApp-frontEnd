module.exports = (fakeSchema, sampleData) => {
  const innerSchema = fakeSchema;
  innerSchema.lottoID = sampleData.lottoID;
  innerSchema.date = sampleData.date;
  innerSchema.lastResult = sampleData.lastResult;
  innerSchema.extras = sampleData.extras;
  innerSchema.mostRepeated = sampleData.mostRepeated;
  innerSchema.statistics = sampleData.statistics;
  innerSchema.allResults = sampleData.allResults;
  innerSchema.stars.lastResult = sampleData.stars.lastResult;
  innerSchema.stars.mostRepeated = sampleData.stars.mostRepeated;
  innerSchema.stars.allResults = sampleData.stars.allResults;
  innerSchema.stars.statistics = sampleData.stars.statistics;
};
