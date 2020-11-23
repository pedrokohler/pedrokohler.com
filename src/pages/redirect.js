import { LitElement, html, css } from "lit-element";
import { pathWithoutBasePath } from "@appnest/web-router";

import "../components/app-shell";
import theme from "../styles/theme";
import { linkStyles } from "../styles/styles";

const redirectMap = new Map([
  ["blog", "https://medium.com/@pedrokohlerbh"],
  ["portfolio", "https://github.com/pedrokohler"],
  ["resume", "https://www.linkedin.com/in/pedrokohler"],
]);

export default class RedirectPage extends LitElement {
  static get styles() {
    return [
      theme,
      linkStyles,
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

  static get properties() {
    return {
      timeBeforeRedirect: {
        type: Number,
      },
      redirectUrl: {
        type: String,
      },
    };
  }

  render() {
    return html`
      <app-shell>
        <section>
          <a href="${this.redirectUrl}" target="_blank">
            <div>
              <h1>We'll redirect you in ${this.timeBeforeRedirect}...</h1>
              <p>This page is not yet available in our site.</p>
              <p>In the meantime, we'll redirect you to a third party site
                <br/> with the info you're looking for.
              </p>
              <p>If the page doesn't open automatically,
                <br/> click this card to open it, or enable pop-ups
                <br/> and refresh the page.
              </p>
            </div>
          </a>
        </section>
      </app-shell>
    `;
  }

  constructor() {
    super();
    this.timeBeforeRedirect = 3;
  }

  firstUpdated() {
    this.defineRedirectUrl();
    this.countdown = setInterval(this.onBeforeRedirect.bind(this), 1000);
  }

  disconnectedCallback() {
    clearInterval(this.countdown);
  }

  defineRedirectUrl() {
    const path = pathWithoutBasePath().replace(/\//g, "");
    this.redirectUrl = redirectMap.get(path);
  }

  onBeforeRedirect() {
    if (this.timeBeforeRedirect - 1 === 0) {
      clearInterval(this.countdown);
      this.ownerDocument.defaultView.open(this.redirectUrl, "_blank");
    }
    this.timeBeforeRedirect -= 1;
  }
}

window.customElements.define("redirect-page", RedirectPage);
