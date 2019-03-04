import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * `p3-component`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class RegistroForm extends PolymerElement {
    static get template() {
        return html `
      <style>
        :host {
          display: block;
        }

          header, .content {
		    padding: 40px;
	    }

	    input[type=text], select {
          width: 100%;
          padding: 5px 5px;
          margin: 3px 0;
          display: inline-block;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }

        input[type=password], select {
          width: 100%;
          padding: 5px 5px;
          margin: 3px 0;
          display: inline-block;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }

        input[type=email], select {
          width: 100%;
          padding: 5px 5px;
          margin: 3px 0;
          display: inline-block;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }

        input[type=submit], button {
          width: 100%;
          background-color: #4B8DC3;
          color: black;
          padding: 5px 5px;
          margin: 3px 0;
          border: none;
          cursor: pointer;
        }

        input[type=submit]:hover, button:hover {
          background-color: #4B8DC3;
        }

      </style>

        <article>

            <form on-submit="_handleRegister">
                <div class="content">

                  <input id="field_name" type="text" placeholder="Enter Name" name="name" value="[[name]]" required>


                  <input id="field_username" type="email" placeholder="Enter a valid email" name="uname" value="[[username]]" required>


                  <input id="field_password" type="password" placeholder="Enter Password" name="psw" value="[[password]]" required>

                  <button type="submit" >Registrar</button>
                </div>
            </form>

		</article>

    `;
    }
    static get properties() {
        return {
            name: {
                type: String
            },
            username: {
                type: String
            },
            password: {
                type: String
            }
        };
    }

    _handleRegister(event) {
        event.preventDefault();
        const name = this.shadowRoot.querySelector('#field_name').value;
        const email = this.shadowRoot.querySelector('#field_username').value;
        const password = this.shadowRoot.querySelector('#field_password').value;
        this.shadowRoot.querySelector('#field_name').value = '';
        this.shadowRoot.querySelector('#field_username').value = '';
        this.shadowRoot.querySelector('#field_password').value = '';

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log('success');
                console.log(result);
                firebase.database().ref('users/' + result.user.uid).set({
                    username: name,
                    email: email,
                    rol: 'student'
                });
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            })
    }
}

window.customElements.define('registro-form', RegistroForm);
