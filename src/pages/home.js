import { LitElement, html, css } from "lit-element";

import "../components/introduction-section";
import "../components/testimonials-section";
import "../components/technologies-section";
import "../components/hero-section";
import "../components/app-shell";
import theme from "../styles/theme";

export default class HomePage extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        hr {
          width: 60%;
          opacity: 0.5;
          border-top: 1px solid var(--auxiliary-color-1);
        }

        div {
          margin: var(--larger-block-spacing) 0;
        }
      `,
    ];
  }

  render() {
    return html`
      <app-shell>
        <hero-section></hero-section>
        <introduction-section></introduction-section>
        <div><hr/></div>
        <testimonials-section></testimonials-section>
        <div><hr/></div>
        <technologies-section></technologies-section>
      </app-shell>
    `;
  }
}

window.customElements.define("home-page", HomePage);
