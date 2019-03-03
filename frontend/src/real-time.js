import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class RealTime extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <h2>Hello [[prop1]]</h2>
      <div class="container">
      <h1 class="text-center">A tu alcanze</h1>
      <div class="row">
        <div class="col-sm">
        <img src="./images/undraw_map_1r69.svg" alt="Smiley face" height="500" width="500">
        </div>
        <div class="col-sm">
        <br>
        <p>Es una plataforma que te permite tener varios servicios por un cobro mensual fijo.</p>
        </div>
      </div>
    </div>

    <button on-click="getAPI">Kick Me</button>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'odio polymer'
      }
    };
  }
  connectedCallback(){
    super.connectedCallback();
    setInterval(() => {
      this.getAPI();
    }, 2000);
  }
  getAPI() {
    var xhttp = new XMLHttpRequest();
    var _this = this;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
            var response = xhttp.responseText;
            console.log(JSON.parse(response));
            var json = (JSON.parse(response));
            var gender = json.results[0].location.street;
            console.log(gender);
            _this.prop1 = (gender);
        }
    };
    xhttp.open("GET", "https://api.randomuser.me/", true);
    xhttp.send();
  }

  postAPI() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("POST", "Your Rest URL Here", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("Your JSON Data Here");
  }

}

window.customElements.define('real-time', RealTime);
