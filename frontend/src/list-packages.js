import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './list-items';
import './shared-styles.js';

class ListPackages extends PolymerElement {
    static get template() {
        return html `


        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css" />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


        <style include="shared-styles">
          :host {
            display: block;

            padding: 10px;
          }
          .contenedor{
          margin-top: 3%;
        }

        </style>

        <div class="container">
        <div class="row">
          <div class="col-sm-6">

          <div class="contenedor uk-animation-toggle">
              <div class="uk-card uk-card-default uk-card-body uk-animation-shake">
                  <h3 class="uk-card-title">Paquete 1</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <button class="uk-button uk-button-text">Contratar</button>
              </div>
          </div>


          </div>
          <div class="col-sm-6">

          <div class="contenedor uk-animation-toggle">
              <div class="uk-card uk-card-default uk-card-body uk-animation-shake">
                  <h3 class="uk-card-title">Paquete 2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <button class="uk-button uk-button-text">Contratar</button>
              </div>
          </div>

          </div>
        </div>
      </div>



      <div class="container">
      <div class="row">
        <div class="col-sm-6">



        <div class="contenedor uk-animation-toggle">
            <div class="uk-card uk-card-default uk-card-body uk-animation-shake">
                <h3 class="uk-card-title">Paquete 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button class="uk-button uk-button-text">Contratar</button>
            </div>
        </div>



        </div>
        <div class="col-sm-6">


        <div class="contenedor uk-animation-toggle">
            <div class="uk-card uk-card-default uk-card-body uk-animation-shake">
                <h3 class="uk-card-title">Paquete 4</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button class="uk-button uk-button-text">Contratar</button>
            </div>
        </div>


        </div>
      </div>
    </div>





        <list-items list-items='[{"name":"Plomeria","status":"disable"}, {"name":"Ambulancia", "status":"disable"}]'></list-items>
      `;
    }
}

window.customElements.define('list-packages', ListPackages);
