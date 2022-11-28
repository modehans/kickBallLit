import { LitElement, html, css } from 'lit';

export class MdhKickball extends LitElement {
  constructor() {
    super();
    this.value = 1;
    this.top = this.randomNum(20, 80);
    this.left = this.randomNum(10, 90);
  }

  static properties = {
    value: { type: Number },
    top: { type: Number },
    left: { type: Number },
    styles: {},
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
    `,
  ];

  randomNum(min, max) {
    return ~~(Math.random() * (max + 1 - min)) + min;
  }

  firstUpdated() {
    this.styles = this.shadowRoot.querySelector('.ball').style;
    this.styles.top = `${this.top}%`;
    this.styles.left = `${this.left}%`;
  }

  render() {
    return html`
      <div class="ball"></div>
    `;
  }
}

customElements.define('mdh-ball', MdhKickball);
