import {Router, RouterConfiguration} from 'aurelia-router';

export class AppRouter {
  router: Router;
  public title: string = 'lottoApp';;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        route: '',
        redirect: 'lottoApp'
      },
      {
        route: 'lottoApp',
        title: 'lottoApp',
        moduleId: './lottoApp/lottoApp'
      }
    ]);

    this.router = router;
  }
}
