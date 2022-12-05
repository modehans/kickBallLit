import { LitElement, html, css } from 'lit';

export class MdhBall extends LitElement {
  constructor() {
    super();
    this._value = 1;
    this.top = this.randomNum(20, 80);
    this.left = this.randomNum(10, 90);
    this.colorBall = `rgb( 
      ${this.randomNum(0, 255)}, 
      ${this.randomNum(0, 255)}, 
      ${this.randomNum(0, 255)}
    )`;
    this.lifeTime = 2000;
    this.deathBall = this.deathBall.bind(this);
  }

  static properties = {
    top: { type: Number },
    left: { type: Number },
    colorBall: { type: String },
    prueba: { type: String, reflect: true },
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
        background-color: plum;
        cursor: pointer;
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
    `,
  ];

  randomNum(min, max) {
    return parseInt(Math.random() * (max + 1 - min)) + min;
  }

  firstUpdated() {
    this.styles = this.shadowRoot.querySelector('.ball').style;
    this.styles.top = `${this.top}%`;
    this.styles.left = `${this.left}%`;
    this.styles.background = `${this.colorBall}`;
    this.styles.animationDuration = `${this.lifeTime}ms`;
    setTimeout(this.deathBall, this.lifeTime);
  }

  render() {
    return html` <div class="ball" @click=${this.handleClickBall}></div> `;
  }

  deathBall() {
    this.remove();
  }

  handleClickBall() {
    const detail = {
      value: this._value,
    };
    const options = {
      detail,
      bubbles: true,
      composed: true,
    };

    this.dispatchEvent(new CustomEvent('clickedBall', options));
    this.deathBall();
  }
}

customElements.define('mdh-ball', MdhBall);
