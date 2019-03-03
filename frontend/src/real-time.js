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
        },
        zoom: {
          type: Number,
          value: 16
        },
        simulatorCoor: {
          type: Array,
          value: [
            { lat: 19.427787, lng: -99.203484 },
            { lat: 19.427625, lng: -99.203935 },
            { lat: 19.427514, lng: -99.204675 },
            { lat: 19.427716, lng: -99.205308 },
            { lat: 19.428202, lng: -99.205866 }
          ]
        },
        simulatorCoorCont: {
          type: Number,
          value: 0
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

  connectedCallback(){
    super.connectedCallback();
    setTimeout(()=>{ 
      this.initMap();
    }, 1000);
    setInterval(()=>{
      let currentLocation = this.providerLocation();
      this.startAddress = new google.maps.LatLng(currentLocation);
      this.pinB.setPosition(this.startAddress);
    }, 3000);
  }

  initMap() {
    this.map = new google.maps.Map(this.shadowRoot.getElementById('map'), {
      center: {lat: 19.428647, lng: -99.206628},
      zoom: this.zoom,
      disableDefaultUI: true
    });
    this.initMakers();
  }

  initMakers() {
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

  providerLocation() {
    if (this.simulatorCoorCont < this.simulatorCoor.length) {
      let location =  this.simulatorCoor[this.simulatorCoorCont];
      this.simulatorCoorCont++;
      return location;
    } else {
      this.simulatorCoorCont = 0;
      let location =  this.simulatorCoor[this.simulatorCoorCont];
      return location;
    }
  }
}

window.customElements.define('real-time', RealTime);
