import { LitElement, html, css } from "lit-element";
import theme from "../styles/theme";

import "./owner-signature";

export default class AppFooter extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        footer {
            position: relative;
            min-height: 100px;
            background-color: var(--elevated-surface-color);
            border-top: 1px black;
        }
      `,
    ];
  }

  render() {
    return html`
        <footer>
            <owner-signature></owner-signature>
        </footer>
    `;
  }
}

window.customElements.define("app-footer", AppFooter);
