import { LitElement, html, css } from 'lit';
import { MdhBall } from './mdh-ball';

export class MdhBlackBall extends MdhBall {
  constructor() {
    super();
    this._value = -2;
    this.colorBall = 'black';
  }
}
customElements.define('mdh-blackball', MdhBlackBall);
