import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/iron-jsonp-library/iron-jsonp-library.js'

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
        .map {
          display: contents;
          width: 50%;
          height: 50%;
        }
      </style>
      <div id="map" class="map"></div>
      <iron-jsonp-library
            library-url="https://maps.googleapis.com/maps/api/js?callback=%%callback%%&key=AIzaSyDxKWbjzJg5tzXE2vyDAg_XEcUeXUfF6sQ"
            notify-event="api-load"
            library-loaded="{{loaded}}">
        </iron-jsonp-library>
      <span>Library Loaded: [[loaded]]</span>
      `;
      
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: ''
      }
    };
  }
  connectedCallback(){
    super.connectedCallback();
    setTimeout(()=>{ this.initMap();}, 1000);
    
  }

  initMap() {
    console.log(this.shadowRoot.getElementById('map'));
    let map = new google.maps.Map(this.shadowRoot.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
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
