import { MdhBall } from './mdh-ball';

export class MdhExtraBall extends MdhBall {
  constructor() {
    super();
    this._value = 3;
    this.colorBall = 'no-repeat center url("../images/favicon.ico")';
  }
}
customElements.define('mdh-extraball', MdhExtraBall);
