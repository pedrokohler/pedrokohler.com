import { LitElement, html } from "lit-element";

import "@appnest/web-router";

import "./mobile-navigation-menu";
import "./desktop-navigation-menu";

export default class NavigationMenu extends LitElement {
  static get properties() {
    return {
      windowWidth: {
        type: Number,
      },
    };
  }

  render() {
    return this.windowWidth < 720
      ? html`<mobile-navigation-menu></mobile-navigation-menu>`
      : html`<desktop-navigation-menu></desktop-navigation-menu>`;
  }

  firstUpdated() {
    this.getWindowWidth();
    this.ownerDocument.defaultView.addEventListener("resize", this.getWindowWidth.bind(this));
  }

  disconnectedCallback() {
    this.ownerDocument.defaultView.removeEventListener("resize", this.getWindowWidth.bind(this));
  }

  getWindowWidth() {
    this.windowWidth = this.ownerDocument.defaultView.innerWidth;
  }
}

window.customElements.define("navigation-menu", NavigationMenu);
