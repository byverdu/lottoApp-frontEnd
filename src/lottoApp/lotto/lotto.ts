import { Router, RouterConfiguration } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import FetchApi from '../../services/fetchApi';
import { LottoModel } from '../../models/LottoModel';

@autoinject
export default class LottoRouter {
  public router: Router;
  public raffleType: LottoModel;
  constructor(private fetchApi: FetchApi) {
    this.fetchApi = fetchApi;
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

  attached() {
    const lottoID = this.router.parent.currentInstruction.params.lottoID;
    this.fetchApi.chooseFetchMethod( lottoID )
      .then( response => {
        this.raffleType = response[ lottoID ];
      });
  }
}
