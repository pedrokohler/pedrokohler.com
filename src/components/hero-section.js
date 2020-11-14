import { LitElement, html, css } from "lit-element";

import Picture from "../images/picture.jpg";

import theme from "../styles/theme";

export default class HeroSection extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        section {
          height: 400px;

          background-color: var(--primary-color);
          color: var(--primary-color-text);

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        img {
          border-radius: 50%;
          margin-bottom: var(--regular-block-spacing);
        }
      `,
    ];
  }

  render() {
    return html`
        <section>
          <img src="${Picture}" alt=""/>
          <h2>A reliable, trustworthy web developer</h2>
        </section>
    `;
  }
}

window.customElements.define("hero-section", HeroSection);
