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

          .flex-container {
            margin: 10px;
            padding-top: 1rem;
          }

          .image-style {
            padding-top: 3.5rem;
          }
          peper-card{
            width: 100%;
          }

          
        }
      </style>
          <div class="flex-container image-style">
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
                 Somos una plataforma que ofrece servicios al alcance de todos.
                 Llevamos hasta tu hogar cualquier necesidad que se te pueda presentar en el día
                 a día.
                 No tendrás que pagar una enorme cantidad por cada incidente o requerimiento de
                 servicios, con nosotros, puedes ahorrar y prevenir.
                 Deja que los expertos se pongan a tu servicio, sólo compra una de nuestros 
                 flexibles paquetes que tenmos para ti.
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