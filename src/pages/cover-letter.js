import { LitElement, html, css } from "lit-element";

import "../components/introduction-section";
import "../components/testimonials-section";
import "../components/technologies-section";
import "../components/hero-section";
import "../components/app-shell";

import { linkStyles } from "../styles/styles";
import theme from "../styles/theme";

export default class CoverLetterPage extends LitElement {
  static get styles() {
    return [
      theme,
      linkStyles,
      css`
        article {
          min-height: 100vh;

          max-width: 720px;

          display: flex;
          flex-direction: column;
          align-items: left;
          justify-content: center;

          text-align: left;

          box-sizing: border-box;

          margin-bottom: var(--larger-block-spacing);
        }

        h1 {
          margin: var(--larger-block-spacing) 0;
          text-align: center;
        }

        img {
          width: 200px;
          height: 60px;
          vertical-align: -14px;
        }
      `,
    ];
  }

  render() {
    return html`
      <app-shell>
        <hero-section></hero-section>
        <introduction-section>
          <article slot="introduction-content">
            <header>
              <h1>
                Hello, Dan
                and <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpZA7QOK.png" alt=""/> crew! :)
              </h1>
            </header>
            <p>
              I'm a chess enthusiast. I've known the game since a little kid, but I just recently started playing
              it more consistently.
            </p>
            <p>
              Also, I've been following lots of chess youtubers lately, like Eric Rosen, GothamChess, Hikaru and so on.
            </p>
            <p>
              As a matter of fact, I'm a
              <a class="styled" href="https://www.chess.com/member/kohler1000" target="_blank">chess.com diamond member</a>
              since May 2020 and I've been playing it daily since then. One could even say it has become one of my most recent passions.
            </p>
            <p>
              It turns out that I'm also a web developer and it would be awesome if I could be part of your team.
              because in this way I'd be able to unite two of my passions and make a living out of it.
            </p>
            <p>
              It would also enable me to help fix some bugs I've found in the website so it's a better platform for everyone!
              Like the bug in 'puzzle battle' that sometimes stops you from moving your pieces.
            </p>
            <p>
              Please feel free to browse this website I'm building so that people can get to know me and my work better.
              It's still a work in progress so some links will send you to third party websites.
            </p>
            <p>
              Don't forget to message me in the chat box below or directly to my e-mail
              <a class="styled" href="mailto:pedrokohlerbh@gmail.com" target="_blank">pedrokohlerbh@gmail.com</a>
            </p>
            <p>Cheers!</p>
          </article>
        </introduction-section>
        <testimonials-section></testimonials-section>
        <technologies-section></technologies-section>
      </app-shell>
    `;
  }
}

window.customElements.define("cover-letter-page", CoverLetterPage);
