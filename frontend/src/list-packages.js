import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class ListPackages extends PolymerElement {
    static get template() {
        return html `
        <style include="shared-styles">
          :host {
            display: block;

            padding: 10px;
          }
        </style>

        <div class="card">
          <div class="circle">4</div>
          <h1>Paquete 1</h1>
          <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>

        </div>

        <div class="card">
          <div class="circle">4</div>
          <h1>Paquete 2</h1>
          <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>

        </div>

        <div class="card">
          <div class="circle">4</div>
          <h1>Paquete 3</h1>
          <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>

        </div>

        <div class="card">
          <div class="circle">4</div>
          <h1>Paquete 4</h1>
          <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
        </div>
      `;
    }
}

window.customElements.define('list-packages', ListPackages);
