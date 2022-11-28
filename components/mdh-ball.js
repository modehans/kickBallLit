import { LitElement, html, css } from 'lit';

export class MdhKickball extends LitElement {
  constructor() {
    super();
    this.value = 1;
    this.positionTop = this.randomNum(20, 80);
    this.positionLeft = this.randomNum(10, 90);
    this.colorBall = `rgb( 
      ${this.randomNum(0, 255)}, 
      ${this.randomNum(0, 255)}, 
      ${this.randomNum(0, 255)}
    )`;
  }

  static properties = {
    value: { type: Number },
    top: { type: Number },
    left: { type: Number },
    colorBall: { type: String },
  };

  static styles = [
    css`
      :host {
        display: block;
        animation-duration: 2s;
        animation-name: blink;
        opacity: 0;
      }

      @keyframes blink {
        from {
          opacity: 0;
        }

        50% {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }
      .ball {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
      }
    `,
  ];

  randomNum(min, max) {
    return ~~(Math.random() * (max + 1 - min)) + min;
  }

  render() {
    return html` <div
      class="ball"
      style="top: ${this.positionTop}%;
          left: ${this.positionLeft}%; background:${this.colorBall}"
    ></div>`;
  }
}
customElements.define('mdh-ball', MdhKickball);
