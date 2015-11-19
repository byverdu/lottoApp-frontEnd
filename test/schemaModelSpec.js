/*global before, after, describe, it*/
'use strict';

import chai from 'chai';
import mongoose from 'mongoose';
import LottoSchema from '../app/models/LottoSchema';
let sampleData = require('./sampleData')();
let dummySchema;

var expect = chai.expect,
  connection,
  Lotto,
  lotto;

before(done => {
  connection = mongoose.createConnection('mongodb://127.0.0.1/lottoApp');
  Lotto = connection.model('Lotto', LottoSchema);
  lotto = new Lotto();
  connection.once('open', () => done());

  dummySchema = require('./dummySchema')(lotto, sampleData);
});

after(done => {
  connection.close(() => done());
});

describe('Model Schema', () => {

  describe('DB connection', () => {
    it('The connection or db name is lottoApp', () => {
      expect(connection.name).eq('lottoApp');
    });
    it('The model name is Lotto', () => {
      expect(connection.models.Lotto.modelName).eq('Lotto');
    });
    it('The collection name is lottos', () => {
      expect(connection.collections.lottos.collectionName).eq('lottos');
    });
  });

  describe('Schema methods', () => {
    describe('Lotto.getLastDate', () => {
      it('is defined an is a function', () => {
        expect(lotto.getLastDate).to.be.a('Function');
      });
      it('Returns a formatted date as a String', () => {
        expect(lotto.getLastDate()).to.be.an('String').and.not.contain('GMT');
      });
    });

    describe('Lotto.getLottoID', () => {
      it('is defined an is a function', () => {
        expect(lotto.getLottoID).to.be.a('Function');
      });
      it('Returns a formatted date as a String', () => {
        expect(lotto.getLottoID()).to.be.an('String').and.eq('euromillions');
      });
    });
  });
});
