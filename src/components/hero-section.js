import { LitElement, html, css } from "lit-element";

import Picture from "../images/picture2.png";

import "./typewriter-text-effect";

import theme from "../styles/theme";

const adjectives = [
  "Reliable",
  "Trustworthy",
  "Productive",
  "Focused",
  "Hard working",
  "Self-managed",
];

export default class HeroSection extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        section {
          height: 500px;

          background-color: var(--auxiliary-color-1);
          color: var(--primary-color-text);

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          padding: 0 var(--smaller-block-spacing);

          text-align: center;
        }

        img {
          width: 200px;
          height: 200px;
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
          <h2>
            <typewriter-text-effect .textList="${adjectives}"></typewriter-text-effect> web developer
          </h2>
        </section>
    `;
  }
}

window.customElements.define("hero-section", HeroSection);
