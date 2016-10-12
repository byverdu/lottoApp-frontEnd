import {autoinject} from 'aurelia-framework'
import FetchApi from '../../../services/fetchApi';

@autoinject
export default class Winners {
  public winnersData: any;
  public tableData: Array<string>;
  constructor(
    private fetchApi: FetchApi
  ){
  }

  activate(params) {
    this.fetchApi.getLottoDocById(`${params.lottoID}Winner`)
      .then(
        response => {
          this.winnersData = response[`${params.lottoID}Winner`];
          this.tableData = Object.keys(this.winnersData.allWinners[0]);
        }
      );
  }
}
