import { css } from "lit-element";

export const linkStyles = css`
  router-link {
    cursor: pointer;
  }

  router-link:focus {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  a.styled {
    color: var(--primary-color);
    text-decoration: underline;
  }
`;
