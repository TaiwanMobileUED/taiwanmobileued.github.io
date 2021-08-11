// import { LitElement, html, css } from "lit";
import { LitElement, html, css } from "https://jspm.dev/lit@2.0.0-rc.2";

export class TwmCard extends LitElement {
  static styles = css`
    :host {
      background: #ffffff;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.04);
      border-radius: 24px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 40px;
    }
  `;
  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("twm-card", TwmCard);
