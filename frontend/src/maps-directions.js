import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class MapsDirections extends PolymerElement  {
    static get properties() {
      return {
        directionsService: {
          type: Object
        },
        map: {
          type: Object,
          observer: '_mapChanged'
        },
        apiKey: {
          type: String
        },
        origin: {
          type: Object,
          observer: '_route'
        },
        destination: {
          type: Object,
          observer: '_route'
        },
        travelMode: {
          type: String,
          value: 'DRIVING'
        },
        waypoints: {
          type: Array,
          value: []
        },
        response: {
          type: Object,
          notify: true
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
        polyline: {
          type: Object
        }
      };
    }
    _inipMap() {
      this.directionsService = new google.maps.DirectionsService;
    }
  
    _mapChanged() {
      if (typeof this.directionsService === 'undefined') {
        this._inipMap();
      }
  
      //If there is no more map, remove the directionsRenderer from the map and delete it.
      if (this.map && this.map instanceof google.maps.Map) {
        if (this.polyline) {
          this.polyline.setMap(this.map);
        }
      } else {
        if (this.polyline) {
          this.polyline.setMap(null);
        }
      }
    }
  
    _route() {
      // Abort attempts to _route if the API is not available yet or the
      // required attributes are blank.
      if (typeof google === 'undefined' || typeof google.maps === 'undefined' ||
          !this.origin || !this.destination || !this.map || !(this.map instanceof google.maps.Map)) {
        return;
      }
  
      if (typeof this.directionsService === 'undefined') {
        this._inipMap();
      }
  
      const request = {
        origin: this.origin,
        destination: this.destination,
        travelMode: this.travelMode,
        waypoints: this.waypoints
      };
      this.directionsService.route(request, (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.set('response', response);
          let path = response.routes[0].overview_path;
          let bounds = new google.maps.LatLngBounds();
          for (let i = 0; i < path.length; i++) {
            bounds.extend(path[i]);
          }
          if (this.polyline) {
            this.polyline.setMap(null);
          }
          this.polyline = new google.maps.Polyline({
            path: path,
            strokeColor: this.rendererOptions.strokeColor,
            strokeOpacity: this.rendererOptions.strokeOpacity,
            strokeWeight: this.rendererOptions.strokeWeight,
            fillColor: this.rendererOptions.fillColor,
            fillOpacity: this.rendererOptions.fillOpacity,
            map: this.map
          });
          this.map.fitBounds(bounds);
        }
      });
    }
  }
  window.customElements.define('maps-directions', MapsDirections);