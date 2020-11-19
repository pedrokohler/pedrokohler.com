import { LitElement, html, css } from "lit-element";

import "@appnest/web-router";

import { linkStyles } from "../../styles/styles";
import theme from "../../styles/theme";

import { navigationItems } from "./navigation-items";

export default class DesktopNavidationMenu extends LitElement {
  static get styles() {
    return [
      theme,
      linkStyles,
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
    `,
    ];
  }

  render() {
    return html`
      <nav>
        <ul>
          ${navigationItems.map(this.navigationItemTemplate)}
        </ul>
      </nav>
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

window.customElements.define("desktop-navigation-menu", DesktopNavidationMenu);
