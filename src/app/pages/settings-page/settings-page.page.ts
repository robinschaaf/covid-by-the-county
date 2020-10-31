import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Restangular } from 'ngx-restangular';

import { ToastService } from 'src/app/services/toast-service';
import { SettingsService } from './settings.service';

import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal.page';

import {groupBy, merge, equals} from 'ramda';

@Component({
    templateUrl: 'settings-page.page.html',
    styleUrls: ['settings-page.page.scss'],
    providers: [],
})
export class SettingsPage implements OnInit {
    defaultSettings = {deathsChecked: true, perChecked: true, defaultDays: 10}; //TODO: if this is updated also update server!
    settings = localStorage.getItem('_appSettings')
      ? merge(this.defaultSettings, JSON.parse(localStorage.getItem('_appSettings')))
      : this.defaultSettings;

    deathsChecked = true;
    perChecked = true;
    defaultDays = this.settings.defaultDays;
    allowedDays = [];
    counties = localStorage.getItem('counties')
      ? JSON.parse(localStorage.getItem('counties'))
      : []
    userId = localStorage.getItem('userId') || '';

    constructor(
        private settingsService: SettingsService,
        private restangular: Restangular,
        private toastCtrl: ToastService,
        public navCtrl: NavController,
        private modalController: ModalController) {
          for(let i = 1; i < 90; i++) {
            this.allowedDays.push(i);
          }
    }

    ngOnInit() {
      this.deathsChecked = this.settings.deathsChecked;
      this.perChecked = this.settings.perChecked;
      this.getUserCounties();
    }

    ionChangeDeathsChecked(event){
      this.deathsChecked = !this.deathsChecked;
      this.settings.deathsChecked = this.deathsChecked;
      this.saveSettings();
    }

    ionChangePerChecked(event){
      this.perChecked = !this.perChecked;
      this.settings.perChecked = this.perChecked;
      this.saveSettings();
    }

    onChangeDefaultDays(event) {
      this.settings.defaultDays = this.defaultDays;
      this.saveSettings();
    }

    getUserCounties() {
      if(!this.userId) {
        return
      }
      this.restangular.all('/userCounties').getList({userId: this.userId}).subscribe((co) => {
        this.counties = co.map((c) => {
          return merge(c, {checkEnabled: c.enabled === 1})
        });
      })
    }

    saveSettings() {
      const hasChanges = JSON.stringify(this.settings) !== localStorage.getItem('_appSettings');
      console.log('do we have changes to present?', hasChanges, JSON.stringify(this.settings), localStorage.getItem('_appSettings'))
      localStorage.setItem('_appSettings', JSON.stringify(this.settings))
      this.settingsService.publishSettings(this.settings);

      this.restangular.all('/updateUserSettings').post({user_id: this.userId, settings: JSON.stringify(this.settings)})
        .subscribe((r) =>{
          if(hasChanges) {
            this.toastCtrl.presentToast('Settings have been updated', 2000);
          }
        })
    }

    async openModal(county) {
      const modal = await this.modalController.create({
          component: ModalPage,
          componentProps: {
            county,
            userId: this.userId,
            allowedDays: this.allowedDays
          },
          cssClass: 'larger-modal',
          backdropDismiss: true
        });
      
       modal.onDidDismiss().then(() => {
        this.closeModal();
       })
       return await modal.present();
    }
  
    closeModal() {
      this.modalController.dismiss();
      this.settingsService.publishSettings(this.settings);
    }
}