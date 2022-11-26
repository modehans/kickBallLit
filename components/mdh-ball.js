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
      }
      .ball {
        position: absolute;
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
    return html` <style>
        .ball {
          top: ${this.top}%;
          left: ${this.left}%;
        }
      </style>
      <div class="ball">
        <slot></slot>
      </div>`;
  }
}
customElements.define('mdh-ball', MdhKickball);
