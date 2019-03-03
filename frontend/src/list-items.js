import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-item.js';
import './shared-styles.js';

class ListItems extends PolymerElement {
    static get template() {
        return html `
        <style include="shared-styles">
          :host {
            display: block;

            padding: 10px;
          }
        </style>

        <div class="card">
            <paper-item>Item</paper-item>
        </div>
      `;
    }
}

window.customElements.define('list-items', ListItems);
