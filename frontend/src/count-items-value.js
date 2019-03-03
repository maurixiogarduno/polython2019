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
import '@polymer/paper-item/paper-item.js';

class CountItemsValue extends PolymerElement {
    static get properties() { 
        return { 
            listItems: {
                type: Array,
                value: [],
                observer: '_getTotalValue'
            },
            totalValue: {
                type: Number,
                value: 0,
                notify: true
            }
        }
    }

    static get template() {
        return html`
        <style include="shared-styles">
            :host {
                display: block;
            }
            .container {
                display: flex:
                justify-content: space-between;
            }
        </style>
            <paper-item class="container">
            <div>Total:</div>
            <div>[[totalValue]]</div>
            </paper-item>
        `;
    }

    /**
     * Get object's array and plus when status is active 
     */
    _getTotalValue() {
        this.totalValue = 0;
        for (let item of this.listItems) {
            if (item.status === "enable"){
                this.set('totalValue', this.totalValue + item.value);
            }
        }
    }
}

window.customElements.define('count-items-value', CountItemsValue);
