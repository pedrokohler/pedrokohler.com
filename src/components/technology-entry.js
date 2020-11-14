import { LitElement, html, css } from "lit-element";

import theme from "../styles/theme";

export default class TechnologyEntry extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        section {
            width: 200px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            padding: var(--regular-block-spacing);
            margin-bottom: var(--regular-block-spacing);

            border-width: 1px black;
            border-radius: 5px;
            box-shadow: 3px 3px 3px 3px var(--shadow-color);
            background-color: var(--elevated-surface-color);
        }

        img {
            width: 150px;
            height: 150px;
        }

        p {
            margin-top: var(--regular-block-spacing);
            font-weight: 600;
        }
      `,
    ];
  }

  static get properties() {
    return {
      label: {
        type: String,
      },
      image: {
        type: String,
      },
      altText: {
        type: String,
      },
    };
  }

  render() {
    return html`
      <section>
        <img src="${this.image}" alt="${this.altText}"/>
        <p>${this.label}</p>
      </section>
    `;
  }
}

window.customElements.define("technology-entry", TechnologyEntry);
