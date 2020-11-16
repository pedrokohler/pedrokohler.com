import { LitElement, html, css } from "lit-element";

import "./blinking-text-cursor";

import theme from "../styles/theme";

export default class TypewriterTextEffect extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        span {
          margin: 0;
          padding: 0;
        }
      `,
    ];
  }

  static get properties() {
    return {
      textList: {
        type: Array,
      },
      innerText: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.innerText = "";
    this.textIndex = 0;
  }

  async firstUpdated() {
    this.performTypewriteLoopIteration();
  }

  render() {
    return html`<span>${this.innerText}</span><blinking-text-cursor></blinking-text-cursor>`;
  }

  async performTypewriteLoopIteration() {
    await this.writeAndEraseNextSentence();
    this.updateTextIndex();
    this.performTypewriteLoopIteration();
  }

  async writeAndEraseNextSentence() {
    const delay = 1000;
    const delayUncertainty = 200;

    await this.writeSentence(this.textList[this.textIndex]);
    await this.wait(this.generateRandomInterval(delay, delayUncertainty));
    await this.eraseSentence();
    await this.wait(this.generateRandomInterval(delay, delayUncertainty));
  }

  writeSentence(sentence) {
    const delay = 50;
    const delayUncertainty = 20;

    return sentence.split("").reduce(async (acc, char) => {
      await acc;
      this.innerText += char;
      return this.wait(this.generateRandomInterval(delay, delayUncertainty));
    }, Promise.resolve());
  }

  eraseSentence() {
    const delay = 40;
    const delayUncertainty = 0;

    return this.innerText.split("").reduceRight(async (acc) => {
      await acc;
      this.innerText = this.innerText.slice(0, -1);
      return this.wait(this.generateRandomInterval(delay, delayUncertainty));
    }, Promise.resolve());
  }

  async wait(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), milliseconds);
    });
  }

  generateRandomInterval(baseTime, range) {
    return baseTime + (Math.random() * range - range / 2);
  }

  updateTextIndex() {
    this.textIndex = this.textIndex + 1 < this.textList.length
      ? this.textIndex + 1
      : 0;
  }
}

window.customElements.define("typewriter-text-effect", TypewriterTextEffect);
