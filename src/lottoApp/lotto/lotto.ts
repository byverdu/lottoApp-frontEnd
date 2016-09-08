import { Router, RouterConfiguration } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';

@autoinject
export default class LottoRouter {
  public router: Router;
  configureRouter( config: RouterConfiguration, router: Router ) {
    config.map([
      {
        route: '',
        title: 'xoxo',
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
}
