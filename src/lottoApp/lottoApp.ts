import { Router, RouterConfiguration } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';

@autoinject
export default class LottoApp {
  public router: Router;
  configureRouter( config: RouterConfiguration, router: Router ) {
    config.map([
      {
        route: '',
        title: 'Home',
        moduleId: './home/home'
      },
      {
        route: 'lotto/:id',
        title: 'Lotto',
        name: 'lotto/:id',
        moduleId: './lotto/lotto'
      }
    ]);
    this.router = router;
  }
}
