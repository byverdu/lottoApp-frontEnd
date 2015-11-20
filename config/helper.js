'use strict';
export class Helper{

  extractLottoID(lottosDB) {
    let lottoIDContainer = [];

    lottosDB.forEach((el) => {
      lottoIDContainer.push(el.lottoID);
    });

    return lottoIDContainer;
  }
}
