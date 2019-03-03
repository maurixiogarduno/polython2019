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
import './list-items.js';
import './count-items-value.js';

class SelectionItems extends PolymerElement {
    static get properties() { 
        return { 
            listItems: {
                type: Array,
                value: [{name:"Plomeria",status:"disable", value: 20},
                {name:"Ambulancia", status:"disable", value: 20}]
            },
            modalStatus: {
                type: Boolean,
                value: true
            }
        }
    }
    static get template() {
    return html`
        <style include="shared-styles">
        </style>
        <div>
        <div id="modal" class="card">
            <list-items list-items='[[listItems]]'
                on-list-items-changed="listItemsChanged"
                ></list-items>
                <count-items-value list-items='[[listItems]]'
                ></count-items-value>
        </div>
    `;
    }

    listItemsChanged(payload) {
        let auxArray = [];
        auxArray = this.listItems;
        this.listItems = [];
        this.listItems = auxArray;
    }

    changeStatusModal() {
        if (this.modalStatus) {
            this.set('modalStatus',!this.modalStatus);
            this.shadowRoot.getElementById('modal').open();
        } else {
            this.set('modalStatus',!this.modalStatus);
            this.shadowRoot.getElementById('modal').open();
        }
    }
}

window.customElements.define('selection-items', SelectionItems);
