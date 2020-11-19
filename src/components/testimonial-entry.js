import { LitElement, html, css } from "lit-element";

import "@appnest/web-router";

import { linkStyles } from "../styles/styles";
import theme from "../styles/theme";

export default class TestimonialEntry extends LitElement {
  static get styles() {
    return [
      theme,
      linkStyles,
      css`
        img {
          display: block;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin: auto var(--regular-block-spacing);
        }

        div {
          padding: var(--smaller-block-spacing);

          display: flex;
          flex-direction: row;
          align-items: space-around;
          justify-content: center;
          text-align: left;

          margin-bottom: var(--larger-block-spacing);

          border-width: 1px black;
          border-radius: 5px;
          box-shadow: 3px 3px 3px 3px var(--shadow-color);
          background-color: var(--more-elevated-surface-color);
        }

        h3 {
          margin-bottom: 0;
          color: var(--primary-color);
        }

        h6 {
          margin-top: 0;
        }

        blockquote {
          position: relative;
        }

        blockquote::before {
          content: "“";
          font-size: 6em;
          position: absolute;
          left: -50px;
          top: -20px;
        }

        @media (max-width: 720px) {
          div {
            display: flex;
            flex-direction: column;
            align-items: space-around;
            justify-content: center;

            margin-bottom: var(--larger-block-spacing);
            text-align: center;
          }

          img {
            margin: var(--regular-block-spacing) auto;
          }

          blockquote::before {
            left: -30px;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      picture: {
        type: String,
      },
      name: {
        type: String,
      },
      link: {
        type: String,
      },
      description: {
        type: String,
      },
    };
  }

  render() {
    return html`
      <a href="${this.link}" target="_blank">
        <div>
          <img src="${this.picture}" alt="${this.name}"/>
          <blockquote>
            <slot></slot>
            <h3>
                ${this.name}
            </h3>
            <h6>${this.description}</h6>
          </blockquote>
        </div>
      </a>
    `;
  }
}

window.customElements.define("testimonial-entry", TestimonialEntry);
