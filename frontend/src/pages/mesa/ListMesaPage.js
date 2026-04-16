import './ListMesaPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Mesa';

class ListMesaPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
            <ion-content>
                <div class="list-mesa"></div>
            </ion-content>
        `;
        this.querySelector('#logout-btn')
        .addEventListener('click', logout);

        // buscando as mesas
        const mesas = this.fetchMesas() || [];
        
        // renderizando as mesas no HTML
        this.renderMesas(mesas);
    }

    fetchMesas() {
        return [
            {
                "id": 1,
                "qtd_cadeiras": 4,
            },
            {
                "id": 2,
                "qtd_cadeiras": 2,
            },
            {
                "id": 3,
                "qtd_cadeiras": 6,
            }
        ]
    }

    renderMesas(mesas) {
        const container = this.querySelector(".list-mesa");

        // SE MESA VAZIA, MOSTRAR MENSAGEM AO USUÁRIO
        if (mesas.length === 0) {
            container.innerHTML = '<p> Nenhuma mesa encontrada </p>'
            return;
        }      
        
        const mesaItems = mesas.map(mesa => `
            <ion-item>
                <ion-label>
                    <h2 style="display: flex; align-items: center; gap: 8px;">
                        <ion-icon
                            name="restaurant-outline"
                            style="font-size: 24px;"
                        ></ion-icon>
                        <span>Mesa ${mesa.id}</span>
                    </h2>
                </ion-label>
                        </ion-icon>
                        <span>${mesa.qtd_cadeiras} cadeiras</span>
                    </h2>
                </ion-label>

                <ion-buttons slot="end">
                    <ion-button fill="clear" class="btn-edit" data-id="${mesa.id}">
                        <ion-icon slot="icon-only" name="create-outline"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" color="danger" class="btn-delete" data-id="${mesa.id}">
                        <ion-icon slot="icon-only" name="trash-outline"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-item>`).join('');
    
        container.innerHTML = `<ion-list>${mesaItems}</ion-list>`;
    }

}

customElements.define('list-mesa-page', ListMesaPage);