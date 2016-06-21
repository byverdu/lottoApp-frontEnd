module.exports = {
  extractLottoID( lottosDB ) {
    const lottoIDContainer = [];

    lottosDB.forEach(( el ) => {
      lottoIDContainer.push( el.lottoID );
    });
    return lottoIDContainer;
  }
};
