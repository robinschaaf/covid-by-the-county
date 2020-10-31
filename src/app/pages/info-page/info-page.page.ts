import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { IntroService } from '../../services/intro-service';

@Component({
    templateUrl: 'info-page.page.html',
    styleUrls: ['info-page.page.scss'],
})
export class InfoPage {

    data = {};

    constructor(
        private modalController: ModalController,
        public navCtrl: NavController,
        private service: IntroService) {
    }

}