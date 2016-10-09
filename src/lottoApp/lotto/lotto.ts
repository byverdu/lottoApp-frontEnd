import { Router, RouterConfiguration, activationStrategy } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import FetchApi from '../../services/fetchApi';
import LottoUtils from '../../services/lottoUtils';
import WindowStorage from '../../services/windowStorage';
import { LottoModel } from '../../models/LottoModel';
import { AppRouter } from '../../app';

@autoinject
export default class LottoRouter {
  public router: Router;
  public raffleType: LottoModel;
  constructor(
    private fetchApi: FetchApi,
    private windowStorage: WindowStorage,
    private lottoUtils: LottoUtils,
    private appRouter: AppRouter
  ) {
  }
  configureRouter( config: RouterConfiguration, router: Router ) {
    config.map([
      {
        route: '',
        title: 'Home',
        moduleId: './home/home',
        settings: {
          icon: 'ion-ios-home'
        },
        nav: true
      },
      {
        route: 'results/',
        title: 'Results',
        moduleId: './results/results',
        settings: {
          icon: 'ion-ios-heart'
        },
        nav: true
      },
      {
        route: 'statistics/',
        title: 'Stats',
        moduleId: './statistics/statistics',
        settings: {
          icon: 'ion-ios-pie'
        },
        nav: true
      },
      {
        route: 'winners/',
        title: 'Winners',
        moduleId: './winners/winners',
        settings: {
          icon: 'ion-ios-world'
        },
        nav: true
      }
    ]);
    this.router = router;
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

  public activate(params) {
    console.log(params, this.appRouter, 'activate lotto')
    const lottoID: string = params.lottoID;
    const lottoAppName: string = this.appRouter.title.concat(` - ${lottoID}`);
    this.appRouter.title = lottoAppName;
    this.fetchApi.chooseFetchMethod( lottoID )
      .then( response => {
        const data = response[ lottoID ]
        this.raffleType = data;
        const totalBalls = this.lottoUtils.getTotalBalls( data.lottoID );
        const countBalls = this.lottoUtils.getCountBalls( data.lottoID );
        const combinations = this.windowStorage.getWindowStorage( data.lottoID );
        const lastResultNumbers = this.lottoUtils.stringsToNumbers(data.lastResult);

        this.setLottoProps(
          this.raffleType,
          totalBalls,
          countBalls,
          combinations,
          lastResultNumbers
        );
      });
    }

    public deactivate() {
      this.appRouter.title = 'lottoApp';
    }

    public determineActivationStrategy() {
        return activationStrategy.invokeLifecycle;
    }
}
