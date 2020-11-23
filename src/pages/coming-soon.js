import { LitElement, html, css } from "lit-element";

import "../components/app-shell";
import theme from "../styles/theme";

export default class ComingSoonPage extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        section {
          height: 100vh;
          padding: var(--regular-block-spacing);

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          box-sizing: border-box;
        }

        div {
          padding: var(--regular-block-spacing);

          margin-bottom: var(--larger-block-spacing);

          border-width: 1px black;
          border-radius: 5px;
          box-shadow: 3px 3px 3px 3px var(--shadow-color);
          background-color: var(--elevated-surface-color);
        }

        p {
          text-align: left;
        }

        h1 {
          text-align: center;
          margin-bottom: var(--larger-block-spacing);
        }
      `,
    ];
  }

  render() {
    return html`
      <app-shell>
        <section>
          <div>
            <h1>We're working on it...</h1>
            <p>Soon this section will be available! <br> In the meantime, keep browsing around.</p>
          </div>
        </section>
      </app-shell>
    `;
  }
}

window.customElements.define("coming-soon-page", ComingSoonPage);
