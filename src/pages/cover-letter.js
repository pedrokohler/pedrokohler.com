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

  firstUpdated() {
    const el = this.shadowRoot.getElementById("introduction");
    setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 1500);
  }

  render() {
    return html`
      <app-shell>
        <hero-section></hero-section>
        <introduction-section>
          <article slot="introduction-content" >
            <header id="introduction">
              <h1>
                Hello, Dan
                and <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpZA7QOK.png" alt=""/> crew! :)
              </h1>
            </header>
            <p>
              I'm a chess enthusiast. I've known the game since a little kid, but I just recently started playing it more consistently. Also, I've been following lots of chess youtubers lately, like Eric Rosen, GothamChess, Hikaru and so on.
            </p>
            <p>
              As a matter of fact, I'm a <a class="styled" href="https://www.chess.com/member/kohler1000" target="_blank">chess.com diamond member</a> since May 2020 and I've been playing it daily since then. One could even say it has become one of my most recent passions.
            </p>
            <p>
              It turns out that I'm also a web developer specializing in JavaScript and it would be awesome if I could be part of your team. Because in this way I'd be able to unite two of my passions and make a living out of it.
            </p>
            <p>
              I was very interested in the position of Chess Explanation Developer. I always analyze my games after playing them, and sometimes it's really a mystery why the computer evaluates a position the way it does.
            </p>
            <p>
              I firmly believe I'm able to fill this position. My last full-time job was in the largest solar systems company in Brazil. There, I was the main person responsible for a very complex engineering algorithm. Unfortunately I can't show you the code because of non-disclosure agreements, but it took me almost a whole year to finish the algorithm that is now in production at <a class="styled" href="https://app.sicessolar.com">Sices Solar</a> and it's used by thousands of customers daily.
            </p>
            <p>
              I coded the whole thing with Node.js and Typescript. My ex-manager in this company, Cristiane Lunardi, left me a recommendation in <a class="styled" href="https://www.linkedin.com/in/pedrokohler/">LinkedIn</a>, sadly it is in portuguese, but I reckon google translator can help you figure out what it means, I also took the liberty of translating it and putting it down below, just in case.
            </p>
            <p>
              You can also check my github profile where I have some recreational projects that can show you a little bit about my skills. I'll cite just a few and explain them briefly, more info about them can be found in their respective repository.
              <ul>
                <li><a class="styled" href="https://github.com/pedrokohler/song-ballot">Song Ballot</a>: App for a fun game that I play with friends. It's still a work in progress with some messy code that I didn't have time to finish refactoring yet.</li>
                <li><a class="styled" href="https://github.com/pedrokohler/product-scraping-api">Prouct Scraping API</a>: This is a test I made to get into a brazilian company. It's an API that scrapes some websites gets product data and stores it into a DB for a given period of time.</li>
                <li><a class="styled" href="https://github.com/pedrokohler/dti-pokemon">Pokémon Battle Solver</a>: This is a test I made to get into another brazilian company. It's a simple app that solves a pokémon battle according to the calculation instructions the company sent me.</li>
                <li><a class="styled" href="https://github.com/pedrokohler/pedrokohler.com">This website</a>: The code base for this website. Notice it's still incomplete!</li>
              </ul>
            </p>
            <p>I hope we guys like it!</p>
            <p>Also notice that I'm also interested in other development jobs you guys think I could fit into, since I'd love to work for your company.</p>
            <p>
              Don't forget to message me in the chat box below or directly to my e-mail <a class="styled" href="mailto:pedrokohlerbh@gmail.com" target="_blank">pedrokohlerbh@gmail.com</a>
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
