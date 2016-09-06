export default class App {
  configureRouter( config, router ) {
    this.router = router;
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
  }
}
