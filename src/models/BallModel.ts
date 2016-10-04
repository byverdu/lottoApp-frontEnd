import { BallInterface } from '../interfaces/BallInterface';

export class BallModel implements BallInterface {
  public isChecked = false;
  constructor(public value) {
  }
}
