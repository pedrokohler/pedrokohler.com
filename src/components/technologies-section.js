import { LitElement, html, css } from "lit-element";

import "./technology-entry";

// import NodejsLogo from "../images/nodejs-logo.svg";
// import MongodbLogo from "../images/mongodb-logo.svg";
// import JavascriptLogo from "../images/javascript-logo.svg";
// import HtmlLogo from "../images/html-logo.svg";
// import CssLogo from "../images/css-logo.svg";

import WebComponentsLogo from "../images/web-components-logo.svg";
import ReactJsLogo from "../images/react-logo.svg";
import MysqlLogo from "../images/mysql-logo.svg";
import NodejsLogoDarkMode from "../images/nodejs-logo-dark-mode.svg";
import MongodbLogoDarkMode from "../images/mongodb-logo-dark-mode.svg";
import JavascriptLogoDarkMode from "../images/javascript-logo-dark-mode.svg";
import HtmlLogoDarkMode from "../images/html-logo-dark-mode.svg";
import CssLogoDarkMode from "../images/css-logo-dark-mode.svg";

import theme from "../styles/theme";

const technologies = [
  {
    image: JavascriptLogoDarkMode,
    label: "Vanilla JavaScript",
    altText: "JavaScript Logo",
  },
  {
    image: HtmlLogoDarkMode,
    label: "HTML",
    altText: "HTML Logo",
  },
  {
    image: CssLogoDarkMode,
    label: "CSS",
    altText: "CSS Logo",
  },
  {
    image: WebComponentsLogo,
    label: "Web Components",
    altText: "Web Components Logo",
  },
  {
    image: ReactJsLogo,
    label: "ReactJS",
    altText: "ReactJS Logo",
  },
  {
    image: NodejsLogoDarkMode,
    label: "NodeJS",
    altText: "NodeJS Logo",
  },
  {
    image: MongodbLogoDarkMode,
    label: "MongoDB",
    altText: "MongoDB Logo",
  },
  {
    image: MysqlLogo,
    label: "MySQL",
    altText: "MySQL Logo",
  },
];

export default class TechnologiesSection extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        .main {
          padding: var(--smaller-block-spacing) 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .technologies {
          width: 100%;

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-evenly;
          flex-wrap: wrap;
          box-sizing: border-box;

          padding: var(--regular-block-spacing);
        }

        h1 {
          margin: var(--larger-block-spacing) 0;
        }
      `,
    ];
  }

  render() {
    return html`
        <section class="main">
            <header>
              <h1>Some Technologies I Know</h1>
            </header>
            <section class="technologies">
              ${technologies.map(this.technologyTemplate)}
            </section>
        </section>
    `;
  }

  technologyTemplate({ ...technology }) {
    const { image, label, altText } = technology;
    return html`
      <technology-entry
        image="${image}"
        label="${label}"
        altText="${altText}"
      >
      </technology-entry>
    `;
  }
}

window.customElements.define("technologies-section", TechnologiesSection);
