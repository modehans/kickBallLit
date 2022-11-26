import { LitElement, html, css } from 'lit';

export class MdhKickball extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        position: absolute;
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

  render() {
    let ball = html`<div class="ball"><slot></slot></div>`;
    return ball;
  }
}
customElements.define('mdh-ball', MdhKickball);
