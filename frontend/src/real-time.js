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
          value: 17
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
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .map {
          display: contents;
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

  /**
   * Init Map after 1s while rendering, and set interval to request coordinate
   */
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

  /**
   * Init map Object whit custom properties
   */
  initMap() {
    this.map = new google.maps.Map(this.shadowRoot.getElementById('map'), {
      center: {lat: 19.428647, lng: -99.206628},
      zoom: this.zoom,
      disableDefaultUI: true
    });
    this.initMakers();
  }

  /**
   * Init two makers, only the first is setted
   */
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

  /**
   * Loop proveding location in array testing
   */
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
