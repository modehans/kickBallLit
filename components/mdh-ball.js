import { LitElement, html, css } from 'lit';

export class MdhKickball extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
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

  render() {
    let ball = html`<div><slot></slot></div>`;
    return ball;
  }
}
customElements.define('mdh-ball', MdhKickball);
