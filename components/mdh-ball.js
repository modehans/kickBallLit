import { LitElement, html, css } from 'lit';

export class MdhBall extends LitElement {
  constructor() {
    super();
    this.value = 1;
    this.top = this.randomNum(20, 80);
    this.left = this.randomNum(10, 90);
    this.colorBall = `rgb( 
      ${this.randomNum(0, 255)}, 
      ${this.randomNum(0, 255)}, 
      ${this.randomNum(0, 255)}
    )`;
    this.lifeTime = 5;
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
    return ~~(Math.random() * (max + 1 - min)) + min;
  }

  firstUpdated() {
    this.styles = this.shadowRoot.querySelector('.ball').style;
    this.styles.top = `${this.top}%`;
    this.styles.left = `${this.left}%`;
    this.styles.background = `${this.colorBall}`;
    this.styles.animationDuration = `${this.lifeTime}s`;
  }

  render() {
    return html` <div class="ball" @click=${this.handleClickBall}></div> `;
  }

  handleClickBall() {
    const options = {
      bubbles: true,
      composed: true,
    };

    this.dispatchEvent(new CustomEvent('clickedBall', options));

    this.remove();
  }
}

customElements.define('mdh-ball', MdhBall);
