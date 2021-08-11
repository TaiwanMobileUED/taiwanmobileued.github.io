// import { LitElement, html, css } from "lit";
import { LitElement, html, css } from "https://jspm.dev/lit@2.0.0-rc.2";

export class TwmButton extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 24px;
      background: #ffffff;
      border: 2px solid gray;
      box-sizing: border-box;
      border-radius: 36px;
    }
  `;
  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("twm-button", TwmButton);
