
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  template: `
    <ion-app>
      <ion-content class="transparent">
        <ion-grid>
          <ion-row>
            <ion-col>
              <h2 style="margin-top: 3px;">New Alert</h2>
              <h5>{{message}}</h5>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-button class="default-button box-shadow" (click)="closeModal()" style="position: absolute; left: 10px; bottom: 10px">Close</ion-button>
      </ion-content>
    </ion-app>`,
  styleUrls: ['home.page.scss'],
})
export class ModalPage {
  @Input() message: string;

  constructor(public modalController: ModalController) {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}