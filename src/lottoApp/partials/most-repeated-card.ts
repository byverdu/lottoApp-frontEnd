import { autoinject, bindable, customElement } from 'aurelia-framework';

@autoinject
@customElement('most-repeated-card')
@bindable('mostRepeated')
export class LastResultCard {
  public toggleMostRepeated: boolean = true;
  public showHideString: string = 'Hide';

  public isToggleMostRepeated(toggleMostRepeated) {
    console.log(toggleMostRepeated,'toggleMostRepeated')
    this.toggleMostRepeated = toggleMostRepeated ? true : false;
    this.showHideString = this.toggleMostRepeated ? 'Hide' : 'Show';
  }
  public addStringZero(ball) {
    return ball <= 9 ? `0${ball}` : ball;
  }
}
