import './EditMesaPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Editar Mesa';

class EditMesaPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
            <ion-content class="ion-padding">
                <form id="form-mesa">
                <h2 style="display: flex; align-items: center; gap: 8px;">
                        <ion-icon
                            name="restaurant-outline"
                            style="font-size: 24px;"
                        ></ion-icon>
                        <span>Mesa 1</span>
                </h2>
                <ion-list>
                    <ion-item>
                    <ion-input type="number" name="qtd_cadeiras" label="Quantidade de Cadeiras" label-placement="floating" value="4" required></ion-input>
                    </ion-item>
                </ion-list>
                <div class="ion-padding">
                    <ion-button expand="block" type="submit" class="ion-margin-top">
                    <ion-icon name="checkmark-circle" slot="start" style="margin-right: 8px;"></ion-icon>
                    Salvar Alterações
                    </ion-button>
                    <ion-button expand="block" color="danger" id="btn-cancelar">
                    <ion-icon name="close-circle" slot="start" style="margin-right: 8px;"></ion-icon>
                    Cancelar
                    </ion-button>
                </div>
                </form>
            </ion-content>
        `;
        this.querySelector('#logout-btn')
        .addEventListener('click', logout);
        this.querySelector('#btn-cancelar').addEventListener('click', () =>  windows.history.back());
    }
}

customElements.define('edit-mesa-page', EditMesaPage);