import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/paper-card/paper-card.js';

///CODIGO DE IMPORTACION DEL COMPONENTE CARD

class CardView extends PolymerElement {
    static get template() {
        return html `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <style include="shared-styles">
        .flex-container {
            display: flex;
          }

          .flex-container > div {
            margin: 10px;
            padding: 20px;
          }

          peper-card{
            width: 100%;
          }

          
        }
      </style>


       
          <div class="flex-container">
            <div>
              <paper-card class="imagen" heading="" image="./images/img1.svg" alt="Emmental">
              </paper-card>
            </div>
          </div>
        </div>
        <div>

        
          <div class="flex-container">
            <div>
              <paper-card heading="Servicio" alt="Emmental">
                <div class="card-content">
                  Emmentaler  Emmental  a yellow, medium-hard cheese that originated  the area around Emmental, Switzerland. It  of the cheeses of Switzerland,   sometimes known  Swiss cheese.
                </div>
                <div class="card-actions">
                </div>
              </paper-card>
              </div>
            </div>
          </div>
        

    `;
    }
}
customElements.define('card-view', CardView);