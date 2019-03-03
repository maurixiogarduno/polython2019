/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
    :host {
        display: block;
      }

      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      
      img {
        display: block;
        height: 1rem;
        width: 1rem;
      }

      .container {
        display: flex;
        justify-content: space-between;
      }

      .enable {
        --paper-item: {
            background-color: #6fdc6f;
        }
      }
      .disable {
        --paper-item: {
            background-color: ##e0e0e0;
        }
      }

      .head {
        --paper-item: {
          background-color: #72d1a357;
          color: black;
      }
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
