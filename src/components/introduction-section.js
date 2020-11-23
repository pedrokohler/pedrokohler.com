import { LitElement, html, css } from "lit-element";

import theme from "../styles/theme";

export default class IntroductionSection extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        section {
          padding: var(--larger-block-spacing);

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;

          text-align: left;
        }

        h1 {
          margin: var(--larger-block-spacing) 0;
        }
      `,
    ];
  }

  render() {
    return html`
        <section>
          <slot name="introduction-content">
            <header>
              <h1>
                Nice to meet you!
              </h1>
            </header>
            <p>I'm a web developer that loves new challenges and I'm glad you're interested in my work.</p>
            <p>You can get to know me a little better by browsing around a bit.</p>
            <p>Also, feel free to <strong>send me a message</strong> in the chat box below!</p>
          </slot>
        </section>
    `;
  }
}

window.customElements.define("introduction-section", IntroductionSection);
