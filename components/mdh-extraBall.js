import { BasicBall } from 'basic-ball/src/BasicBall';

export class MdhExtraBall extends BasicBall {
  constructor() {
    super();
    this._value = 3;
    this.colorBall = 'no-repeat center url("../images/favicon.ico")';
  }
}
customElements.define('mdh-extraball', MdhExtraBall);
