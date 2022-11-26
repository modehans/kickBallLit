import { LitElement, html, css, unsafeCSS } from 'lit';

export class MdhKickball extends LitElement {
  constructor() {
    super();
    this.top = this.randomNum(20, 80);
    this.left = this.randomNum(10, 90);
  }

  static properties = {
    top: { type: Number },
    left: { type: Number },
  };
  static styles = [
    css`
      :host {
        display: block;
        position: absolute;
        top: ${unsafeCSS(this.top)}%;
        left: ${unsafeCSS(this.left)}%;
      }
      .ball {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        background-color: plum;
      }
    `,
  ];

  randomNum(min, max) {
    return ~~(Math.random() * (max + 1 - min)) + min;
  }

  render() {
    console.log('Top property', this.top); ///Cambia pero no lo está cogiendo
    console.log('Left property', this.left);
    let ball = html`<div class="ball"><slot></slot></div>`;
    return ball;
  }
}
customElements.define('mdh-ball', MdhKickball);
