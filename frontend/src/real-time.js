import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/iron-jsonp-library/iron-jsonp-library.js';
import './maps-directions';

class RealTime extends PolymerElement {
  static get properties() { 
    return { 
        map: {
            type: Object
        },
        startAddress: {
          type: Object
        },
        endAddress: {
            type: Object
        },
        rendererOptions: {
          type: Object,
          value: {
            strokeColor: '#237ABA',
            strokeOpacity: 0.9,
            strokeWeight: 3.5,
            fillColor: '#237ABA',
            fillOpacity: 0.35
          }
        },
        pinB: {
          type: Object
        },
        pinA: {
          type: Object
        }
    }
}
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
      <maps-directions
          renderer-options = "[[rendererOptions]]"
          map="{{map}}"
          origin="[[startAddress]]"
          destination="[[endAddress]]"
        ></maps-directions>
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
    this.map = new google.maps.Map(this.shadowRoot.getElementById('map'), {
      center: {lat: 19.428647, lng: -99.206628},
      zoom: 8,
      disableDefaultUI: true
    });
    this.initMakers();
  }

  initMakers() {
    let _latlat = { lat: 19.427574, lng: -99.204418 };
    this.startAddress = new google.maps.LatLng(_latlat);
    let _latlng = { lat: 19.428647, lng: -99.206628 };
    this.endAddress = new google.maps.LatLng(_latlng);
    this.pinA = new google.maps.Marker({
      position: this.endAddress,
      map: this.map
    });
    this.pinB = new google.maps.Marker({
      position: this.startAddress,
      map: this.map
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
