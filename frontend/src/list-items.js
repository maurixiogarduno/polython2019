import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-item.js';
import './shared-styles.js';
import './styles/list-items-styles.js'

class ListItems extends PolymerElement {
    static get properties() { 
        return { 
            listItems: {
                type: Array,
                value: []
            },
            itemsSelected: {
                type: Array,
                value: []
            } 
        }
    }
    static get template() {
        return html `
        <style include="shared-styles"></style>
        <style include="styles/list-items-styles"></style>

        <div class="card">
            <template id="listRepeat" is="dom-repeat" items="[[listItems]]">
                <paper-item
                    class$="{{item.status}} container" 
                    on-tap="itemSelected">
                    <div>{{item.name}}</div>
                    <div><img src$="images/{{item.status}}.svg" alt="Check"></div>
                </paper-item>
            </template>
        </div>
      `;
    }

    itemSelected(payload) {
        const labelSelected = payload.model.item.name;
        const indexSelected = payload.model.index;
        for (let item of this.listItems) {
            if (labelSelected === item.name) {
                if (item.status === 'disable') {
                    item.status = 'enable';
                } else {
                    item.status = 'disable';
                }
                this.notifyPath('listItems.'+indexSelected+'.status');
            }
        }
    }
}

window.customElements.define('list-items', ListItems);
