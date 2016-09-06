export default class LottoApp {
  configureRouter( config, router ) {
    this.router = router;
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
  }
}
