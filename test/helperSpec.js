/* globals describe, it, before */

import chai from 'chai';
import { Helper } from '../config/helper';

const expect = chai.expect;
let helper;

before(() => {
  helper = new Helper();
});

describe( 'Helper class', () => {
  it( 'Is defined', () => {
    expect( helper ).not.to.eq( undefined );
  });

  describe( 'Helper.extractLottoID', () => {
    it( 'Is defined', () => {
      expect( helper.extractLottoID ).not.to.eq( undefined );
    });
    it( 'Returns an Array', () => {
      const sample = ['bonoloto', 'primitiva', 'euromillions'];
      expect( helper.extractLottoID( sample ))
        .to.be.an( 'Array' )
        .with.length( 3 );
    });
  });
});
