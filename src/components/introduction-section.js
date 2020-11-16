import { LitElement, html, css } from "lit-element";

import theme from "../styles/theme";

export default class IntroductionSection extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        section {
          padding: var(--regular-block-spacing);

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;

          text-align: center;
        }
      `,
    ];
  }

  render() {
    return html`
        <section>
          <header>
            <h1>
              Nice to meet you!
            </h1>
          </header>
          <article>
            <p>I'm a web developer that loves new challenges and I'm glad you're interested in my work.</p>
            <p>You can get to know me a little better by browsing around a bit.</p>
          </article>
        </section>
    `;
  }
}

window.customElements.define("introduction-section", IntroductionSection);
