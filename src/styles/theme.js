import { css } from "lit-element";

export default css`
  :host {
    --primary-color: #F4AE00;
    --primary-color-text: black;

    --secondary-color: #2D2A32;
    --secondary-color-text: #DDDDDD;

    --auxiliary-color-1: #EAE151;
    --auxiliary-color-2: #EEEFA8;
    --auxiliary-color-3: #FAFDF6;

    --light-grey: #DDDDDD;
    --regular-grey: #CCCCCC;
    --dark-grey: #999999;

    --shadow-color: #222222;
    --elevated-surface-color: #3A3A3A;

    --smaller-block-spacing: 1em;
    --regular-block-spacing: 2em;
    --larger-block-spacing: 3em;
  }
`;

export const routerLinkStyle = css`
  router-link {
    cursor: pointer;
  }

  router-link:focus {
    outline: none;
  }
`;
