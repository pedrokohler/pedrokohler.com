import { LitElement, html, css } from "lit-element";

import "@appnest/web-router";

import Testimonial1 from "../images/testimonial-1.jpg";
import "./testimonial-entry";

import { linkStyles } from "../styles/styles";
import theme from "../styles/theme";

export default class TestimonialsSection extends LitElement {
  static get styles() {
    return [
      theme,
      linkStyles,
      css`
        section {
          padding: var(--smaller-block-spacing);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        h1 {
          margin: var(--larger-block-spacing) 0;
        }

        testimonial-entry {
          max-width: 720px;
        }

        @media (max-width: 720px) {
          section {
            text-align: center;
          }
        }
      `,
    ];
  }

  render() {
    return html`
        <section>
            <header>
              <h1>What people are saying about me</h1>
            </header>
            <testimonial-entry
             name="Cristiane Lunardi"
             link="https://www.linkedin.com/in/cristiane-lunardi-2245369/"
             picture="${Testimonial1}"
             description="was Pedro's manager for almost 2 years"
            >
              <p>Pedro is a focused professional, with large attention for detail.</p>
              <p>He has a very sharp logical thinking, which leads to quick and effecient results.</p>
              <p>With great self-management skills,
              he doesn't need direct supervision in his tasks when presented with clear objectives,
              deadlines and goals.</p>
              <p>Studious, he always presents innovative solutions.</p>
            </testimonial-entry>
        </section>
    `;
  }
}

window.customElements.define("testimonials-section", TestimonialsSection);
