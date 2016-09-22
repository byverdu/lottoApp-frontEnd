import { autoinject, bindable, customElement } from 'aurelia-framework';

@autoinject
@customElement('last-result-card')
@bindable('mostRepeated')
export class LastResultCard {
  public toggleLastResult: boolean = true;
  public showHideString: string = 'Hide';

  public isToggledLastResult(toggleLastResult) {
    console.log(toggleLastResult,'toggleLastResult')
    this.toggleLastResult = toggleLastResult ? true : false;
    this.showHideString = this.toggleLastResult ? 'Hide' : 'Show';
  }
}
