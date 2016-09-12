import { Router, RouterConfiguration } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import FetchApi from '../../services/fetchApi';
import LottoUtils from '../../services/lottoUtils';
import WindowStorage from '../../services/windowStorage';
import { LottoModel } from '../../models/LottoModel';

@autoinject
export default class LottoRouter {
  public router: Router;
  public raffleType: LottoModel;
  constructor(
    private fetchApi: FetchApi,
    private windowStorage: WindowStorage,
    private lottoUtils: LottoUtils
  ) {
  }
  configureRouter( config: RouterConfiguration, router: Router ) {
    config.map([
      {
        route: '',
        title: 'home',
        moduleId: './home/home',
        nav: true
      },
      {
        route: 'results/',
        title: 'Results',
        moduleId: './results/results',
        nav: true
      },
      {
        route: 'statistics/',
        title: 'Stats',
        moduleId: './statistics/statistics',
        nav: true
      },
      {
        route: 'winners/',
        title: 'Winners',
        moduleId: './winners/winners',
        nav: true
      }
    ]);
    this.router = router;
  }

  public attached() {
    const lottoID = this.router.parent.currentInstruction.params.lottoID;
    this.fetchApi.chooseFetchMethod( lottoID )
      .then( response => {
        const data = response[ lottoID ]
        this.raffleType = data;
        const totalBalls = this.lottoUtils.getTotalBalls( data.lottoID );
        const countBalls = this.lottoUtils.getCountBalls( data.lottoID );
        const combinations = this.windowStorage.getWindowStorage( data.lottoID );
        const lastResultNumbers = this.lottoUtils.stringsToNumbers(data.lastResult)

        this.setLottoProps(
          this.raffleType,
          totalBalls,
          countBalls,
          combinations,
          lastResultNumbers
        );
      });
  }

  private setLottoProps(lotto: LottoModel, ...args): LottoModel {
    console.log(args, 'args setLottoProps')
    return Object.assign( lotto, {
      totalBalls: args[0],
      countBalls: args[1],
      combinations: args[2],
      lastResultNumbers: args[3]
    })
  }
}
