import { LitElement, html, css } from "lit-element";

import "@appnest/web-router";

import theme from "../styles/theme";

const AppBarHeight = 70;

const navigationItems = [
  { label: "Contact Me", path: "contact-me" },
  { label: "Portfolio", path: "portfolio" },
  { label: "Resumè", path: "resume" },
  { label: "Blog", path: "blog" },
  { label: "About Me", path: "about-me" },
];

// @todo make it responsive
export default class AppBar extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        nav {
            background-color: var(--primary-color);
            color: var(--primary-color-text);


            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 var(--regular-block-spacing);

            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            height: ${AppBarHeight}px;
            box-sizing: border-box;
        }

        ul {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            list-style-type: none;
        }

        li {
            margin-left: var(--larger-block-spacing);
        }

        .spacer {
            height: ${AppBarHeight}px;
        }

        router-link {
          cursor: pointer;
        }

        router-link:focus {
          outline: none;
        }
    `,
    ];
  }

  render() {
    return html`
        <nav>
            <h1>Pedro Köhler</h1>
            <ul>
              ${navigationItems.map(this.navigationItemTemplate)}
            </ul>
        </nav>
        <div class="spacer"></div>
    `;
  }

  navigationItemTemplate(item) {
    const { path, label } = item;
    return html`
        <li>
          <router-link path="${path}">
            ${label}
          </router-link>
        </li>
    `;
  }
}

window.customElements.define("app-bar", AppBar);
