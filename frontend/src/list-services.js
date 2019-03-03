/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './loginForm.js';
import './registroForm.js'

class ListServices extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <login-form></login-form>
    <!-- <registro-form></registro-form> -->
    `;
  }

  static get properties() {
            return {
                prop1: {
                    type: String,
                    value: 'login page',
                },
            };
        }

    //     static get properties() {
    //     return {
    //         prop1: {
    //             type: String,
    //             value: 'registro page',
    //         },
    //     };
    // }
}

window.customElements.define('list-services', ListServices);
