import { LitElement, html, css } from "lit-element";

import theme from "../styles/theme";

export default class BlinkingTextCursor extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        span {
          margin: 0;
          padding: 0;
          -webkit-animation: fadeinout 0.7s infinite forwards;
          animation: fadeinout 0.7s infinite forwards;
          opacity: 0;
        }

        @-webkit-keyframes fadeinout {
          50% { opacity: 1; }
        }

        @keyframes fadeinout {
          50% { opacity: 1; }
        }
      `,
    ];
  }

  render() {
    return html`<span>|</span>`;
  }
}

window.customElements.define("blinking-text-cursor", BlinkingTextCursor);
