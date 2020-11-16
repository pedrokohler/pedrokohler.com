import { LitElement, html, css } from "lit-element";

import "@appnest/web-router";

import "./navigation-menu";

import theme, { routerLinkStyle } from "../styles/theme";

const AppBarHeight = 70;

export default class AppBar extends LitElement {
  static get styles() {
    return [
      theme,
      routerLinkStyle,
      css`
        section {
          background-color: var(--primary-color);
          color: var(--primary-color-text);

          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0 var(--regular-block-spacing);

          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100vw;
          height: ${AppBarHeight}px;
          box-sizing: border-box;
        }

        .spacer {
          height: ${AppBarHeight}px;
        }
    `,
    ];
  }

  render() {
    return html`
      <section>
        <header>
          <h1>
            <router-link path="">
              Pedro Köhler
            </router-link>
          </h1>
        </header>
        <navigation-menu></navigation-menu>
      </section>
      <div class="spacer"></div>
    `;
  }
}

window.customElements.define("app-bar", AppBar);
