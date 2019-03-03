import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './selection-items.js';

class ListPackages extends PolymerElement {
    static get properties() { 
      return { 
        detailEnabled: {
            type: Boolean,
            value: false
        },
        arrayPackages: {
          type: Array,
          value: []
        },
        listItems: {
          type: Array,
          value: []
        }
      }
    }
    static get template() {
        return html `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style>
          :host {
            padding: 1.5rem;
          }

          .contenedor{
            margin-top: 3%;
          }
          .cartas{
            margin: 0%;
            margin-top: 2%;
          }

          

        </style>
        <template is="dom-if" if="[[detailEnabled]]">
          <div class="buttonM">
            <button type="button" class="btn btn-light" on-click="showDetails">Regresar</button>
          </div>
          <selection-items list-items='[[listItems]]'
          ></selection-items>
        </template>
        <template is="dom-if" if="[[!detailEnabled]]">
          <div class="cartas">
            <div class="row">
              <template id="listRepeat" is="dom-repeat" items="[[arrayPackages]]">
                <div class="col-sm-6">
                  <div class="contenedor uk-animation-toggle">
                    <div class="uk-card uk-card-default uk-card-body">
                      <h3 class="uk-card-title">[[item.title]]</h3>
                      <p>[[item.description]]</p>
                      <button class="uk-button uk-button-text" on-click="showDetails">Contratar</button>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      `;
    }

    connectedCallback() {
      super.connectedCallback();
      this.arrayPackages = [
        {title:'Paquete 1',description: 'Paquete deportivo'}, 
        {title:'Paquete2',description: 'Paquete ama de casa'}, 
        {title:'Paquete3',description: 'Paquete estudiante'}, 
        {title:'Paquete4',description: 'Paquete oficina'}];
      this.listItems = [
        {name:"Plomeria",status:"disable", value: 20},
        {name:"Ambulancia", status:"disable", value: 20},
        {name:"Enfermería", status:"disable", value: 12},
        {name:"Técnico reparaciones electricas", status:"disable", value: 19},
        {name:"Técnico de luz", status:"disable", value: 8},
        {name:"Gas a domicilio", status:"disable", value: 56}
      ];
      }
    
    /**
     * Active details about package selected
     */
    showDetails(payload) {
        this.set('detailEnabled', !this.detailEnabled);
    }
}

window.customElements.define('list-packages', ListPackages);