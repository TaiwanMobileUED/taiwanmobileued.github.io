// import { LitElement, html, css } from "lit";
import { LitElement, html, css } from "https://jspm.dev/lit@2.0.0-rc.2";

export class TwmDropdownCard extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 32px;
      padding: 16px;
      background: gray;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.06);
      border-radius: 8px;
      font-style: normal;
      overflow: hidden;
      height: auto;
    }
    .card-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }

    .close {
      transition: max-height 0.2s ease-in-out;
      max-height: 0;
    }
    .box {
      overflow: hidden;
    }
  `;

  static get properties() {
    return {
      active: { type: Boolean },
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.active = false;
    this.title = "Title";
  }

  firstUpdated() {
    let boxHeight = this.renderRoot.querySelector(".box").clientHeight;
    let style = document.createElement("style");
    style.innerHTML = `.open {transition: max-height 0.2s ease-in-out;height: auto;max-height: ${boxHeight}px;}`;
    this.shadowRoot.appendChild(style);
  }

  render() {
    return html`
      <div class="card-title" @click=${() => this.changeStyle()}>
        <span>${this.title}</span>
      </div>
      <div class="box ${this.active ? "open" : "close"}">
        <slot name="content"></slot>
      </div>
    `;
  }

  changeStyle() {
    this.active = !this.active;
  }
}

customElements.define("twm-dropdown-card", TwmDropdownCard);
