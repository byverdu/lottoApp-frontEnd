import { Router, RouterConfiguration } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';

@autoinject
export default class LottoApp {
  public router: Router;
  configureRouter( config: RouterConfiguration, router: Router ) {
    config.map([
      {
        route: '',
        title: 'xoxo',
        moduleId: './home/home',
        nav: true
      }
      // ,
      // {
      //   route: 'lotto/:lottoID',
      //   title: 'Lotto',
      //   name: 'lotto/:lottoID',
      //   moduleId: './lotto/lotto'
      // }
    ]);
    this.router = router;
  }
}
