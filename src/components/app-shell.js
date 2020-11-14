import { LitElement, html, css } from "lit-element";
import theme from "../styles/theme";

import "./app-bar";
import "./app-footer";

export default class AppShell extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        * {
          background-color: var(--secondary-color);
          color: var(--secondary-color-text);
        }
      `,
    ];
  }

  render() {
    return html`
        <section>
            <app-bar></app-bar>
            <slot></slot>
            <app-footer></app-footer>
        </section>
    `;
  }
}

window.customElements.define("app-shell", AppShell);
