import { LitElement, html, css } from "lit-element";

import "@appnest/web-router";

import theme, { routerLinkStyle } from "../styles/theme";
import BurgerMenu from "../images/burger-menu.svg";

const navigationItems = [
  { label: "Portfolio", path: "portfolio" },
  { label: "Resumè", path: "resume" },
  { label: "Blog", path: "blog" },
  { label: "About Me", path: "about-me" },
];

export default class NavigationMenu extends LitElement {
  static get styles() {
    return [
      theme,
      routerLinkStyle,
      css`
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

        img {
          display: none;
        }

        @media (max-width: 720px) {
          nav {
            display: none;
          }

          img {
            display: block;
            cursor: pointer;
            width: 30px;
            height: 30px;
          }

          .open {
            top: 0;
            left: 0;
            position: fixed;
            display: block;

            width: 250px;
            height: 100%;

            background-color: var(--primary-color);
            border-right: 1px solid black;
          }

          ul {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-end;
            list-style-type: none;
            margin-left: 0;
            padding-right: var(--smaller-block-spacing);
          }

          li {
            margin-left: 0;
            margin-bottom: var(--regular-block-spacing);
            font-size: 1.2em;
            font-weight: 500;
          }
        }
    `,
    ];
  }

  static get properties() {
    return {
      open: {
        type: Boolean,
      },
    };
  }

  render() {
    return html`
      <section>
        <nav class="${this.open ? "open" : ""}">
          <ul>
            ${navigationItems.map(this.navigationItemTemplate)}
          </ul>
        </nav>
        <img src="${BurgerMenu}" alt="menu" @click="${() => { this.open = !this.open; }}"/>
      </section>
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

window.customElements.define("navigation-menu", NavigationMenu);
