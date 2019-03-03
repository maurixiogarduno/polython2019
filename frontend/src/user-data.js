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
import '@polymer/iron-form/iron-form.js';
import '@polymer/iron-input/iron-input.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/paper-button/paper-button.js';

class UserData extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .button-acept {
          background-color: #1e87f0;
          color: white;
        }
        .line {
          display: flex;
          justify-content: space-around;
          padding-rigth: 1rem;
        }
      </style>

      <div class="card">
        <iron-form>
        <form id="form" method="get" action="/form/handler">
          <h2>Mis datos</h2>
          <paper-input always-float-label label="Edad" type="number"></paper-input>
          <paper-radio-group selected="man">
            Sexo:
            <paper-radio-button name="man">Masculino</paper-radio-button>
            <paper-radio-button name="woman">Femienino</paper-radio-button>
          </paper-radio-group>
          <paper-input always-float-label label="Ocupación" type="text"></paper-input>
          <paper-radio-group selected="yesPet">
            Tiene mascotas:
            <paper-radio-button name="yesPet">si</paper-radio-button>
            <paper-radio-button name="notPet">no</paper-radio-button>
          </paper-radio-group><br>
          <paper-radio-group selected="single">
            Estado civil:
            <paper-radio-button name="single">Soltero</paper-radio-button>
            <paper-radio-button name="married">Casado</paper-radio-button>
            <paper-radio-button name="free">Cónyuge</paper-radio-button>
          </paper-radio-group><br>
          <paper-radio-group selected="single">
            Cuenta con hijos:
            <paper-radio-button name="yesChildren">si</paper-radio-button>
            <paper-radio-button name="noChildren">no</paper-radio-button>
          </paper-radio-group><br>
          <paper-button class="reset" raised on-click="resetForm">Resetear</paper-button>
          <paper-button class="button-acept" raised>Aceptar</paper-button>
        </form>
      </iron-form>
      </div>
    `;
  }

  /**
   * Reset all values in the forms
   */
  resetForm() {
    this.shadowRoot.getElementById('form').reset();
  }
}

window.customElements.define('user-data', UserData);
