import { autoinject, bindable, customElement } from 'aurelia-framework';

@autoinject
@customElement('card-toggle')
@bindable('cardBalls')
@bindable('title')
export class CardToggle {
  public toggleCard: boolean = true;
  public showHideString: string = 'Hide';

  public isToggleCard(toggleCard) {
    console.log(toggleCard,'toggleCard')
    this.toggleCard = toggleCard ? true : false;
    this.showHideString = this.toggleCard ? 'Hide' : 'Show';
  }
  public addStringZero(ball) {
    return ball <= 9 ? `0${ball}` : ball;
  }
}
