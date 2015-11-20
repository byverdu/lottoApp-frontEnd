/*globals describe, it, before*/
'use strict';

import chai from 'chai';
import {Helper} from '../config/helper';

let expect = chai.expect,
  helper;

before(()=>{
  helper = new Helper();
});

describe('Helper class', () => {
  it('Is defined', () => {
    expect(helper).not.to.eq(undefined);
  });

  describe('Helper.extractLottoID', () => {
    it('Is defined', () => {
      expect(helper.extractLottoID).not.to.eq(undefined);
    });
    it('Returns an Array', () => {
      let sample = ['bonoloto', 'primitiva', 'euromillions'];
      expect(helper.extractLottoID(sample)).to.be.an('Array').with.length(3);
    });
  });
});
