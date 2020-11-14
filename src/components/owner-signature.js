import { LitElement, html, css } from "lit-element";
import theme from "../styles/theme";

export default class OwnerSignature extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        :host {
          position: absolute;
          left: var(--smaller-block-spacing);
          bottom: 0;
          opacity: 0.3;
        }
      `,
    ];
  }

  render() {
    return html`
      <section>
        <p>
          Pedro Köhler &copy; ${new Date().getFullYear()}
        </p>
      </section>
    `;
  }
}

window.customElements.define("owner-signature", OwnerSignature);
