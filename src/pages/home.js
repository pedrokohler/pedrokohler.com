import { LitElement, html, css } from "lit-element";

import "../components/technologies-section";
import "../components/hero-section";
import "../components/app-shell";
import theme from "../styles/theme";

export default class HomePage extends LitElement {
  static get styles() {
    return [
      theme,
      css`
      `,
    ];
  }

  render() {
    return html`
      <app-shell>
        <hero-section></hero-section>
        <technologies-section></technologies-section>
      </app-shell>
    `;
  }
}

window.customElements.define("home-page", HomePage);
