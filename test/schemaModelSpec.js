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
      it('is defined an is a Function', () => {
        expect(lotto.getLottoID).to.be.a('Function');
      });
      it('Returns lottoID', () => {
        expect(lotto.getLottoID()).to.be.an('String').and.eq('euromillions');
      });
    });

    describe('Lotto.getLastResult', () => {
      it('is defined an is a Function', () => {
        expect(lotto.getLastResult).to.be.a('Function');
      });
      it('Returns lastResult', () => {
        expect(lotto.getLastResult()).to.be.an('String').and.have.length.above(8).and.eq('12,15,29,29,47');
      });
    });

    describe('Lotto.getMostRepeated', () => {
      it('is defined an is a Function', () => {
        expect(lotto.getMostRepeated).to.be.a('Function');
      });
      it('Returns lastResult for stars', () => {
        expect(lotto.getMostRepeated()).to.be.an('String').and.have.length.above(4).and.eq('12,15,26,29,47');
      });
    });

    describe('Lotto.getExtras', () => {
      it('is defined an is a Function', () => {
        expect(lotto.getExtras).to.be.a('Function');
      });
      it('Returns extras', () => {
        expect(lotto.getExtras()).to.be.an('String').and.have.length.above(4).and.eq('08,10');
      });
    });

    describe('Lotto.getAllResults', () => {
      it('is defined an is a Function', () => {
        expect(lotto.getAllResults).to.be.a('Function');
      });
      it('Returns extras', () => {
        expect(lotto.getAllResults()).to.be.an('Array').and.have.length.above(4);
      });
    });

    describe('Lotto.getStatistics', () => {
      it('is defined an is an Object', () => {
        expect(lotto.getStatistics).to.be.a('Function');
      });
      it('Returns statistics', () => {
        expect(lotto.getStatistics()).to.be.an('Array');
      });
      it('Each statistic is an object with 3 properties', () => {
        let firstStatistic = lotto.getStatistics()[0];
        expect(firstStatistic).to.be.an('Object');
        expect(firstStatistic).to.have.property('count');
        expect(firstStatistic).to.have.property('index');
        expect(firstStatistic).to.have.property('color');
      });
    });

    describe('Lotto getters for stars', () => {
      describe('Lotto.getLastResultStars', () => {
        it('is defined an is a Function', () => {
          expect(lotto.getLastResultStars).to.be.a('Function');
        });
        it('Returns lastResult for stars', () => {
          expect(lotto.getLastResultStars()).to.be.an('String').and.have.length.above(4).and.eq('08,10');
        });
      });

      describe('Lotto.getMostRepeatedStars', () => {
        it('is defined an is a Function', () => {
          expect(lotto.getMostRepeatedStars).to.be.a('Function');
        });
        it('Returns lastResult for stars', () => {
          expect(lotto.getMostRepeatedStars()).to.be.an('String').and.have.length.above(4).and.eq('03,11');
        });
      });

      describe('Lotto.getAllResultsStars', () => {
        it('is defined an is a Function', () => {
          expect(lotto.getAllResultsStars).to.be.a('Function');
        });
        it('Returns lastResult for stars', () => {
          expect(lotto.getAllResultsStars()).to.be.an('Array').and.have.length.above(4);
        });
      });

      describe('Lotto.getStatisticsStars', () => {
        it('is defined an is an Object', () => {
          expect(lotto.getStatisticsStars).to.be.a('Function');
        });
        it('Returns statistics', () => {
          expect(lotto.getStatisticsStars()).to.be.an('Array');
        });
        it('Each statistic is an object with 3 properties', () => {
          let firstStatistic = lotto.getStatisticsStars()[0];
          expect(firstStatistic).to.be.an('Object');
          expect(firstStatistic).to.have.property('count');
          expect(firstStatistic).to.have.property('index');
          expect(firstStatistic).to.have.property('color');
        });
      });
    });
  });
});
