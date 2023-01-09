import { BasicBall } from 'basic-ball/src/BasicBall';

export class MdhBlackBall extends BasicBall {
  constructor() {
    super();
    this._value = -2;
    this.colorBall = 'black';
  }
}
customElements.define('mdh-blackball', MdhBlackBall);
