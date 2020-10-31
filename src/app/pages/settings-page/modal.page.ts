import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast-service';

import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-county-modal',
  templateUrl: 'modal.page.html',
  styleUrls: ['settings-page.page.scss'],
})
export class ModalPage implements OnInit{
  @Input() county;
  @Input() userId;
  @Input() allowedDays = [];


  constructor(public modalController: ModalController, private restangular: Restangular, private toastCtrl: ToastService) {
  }

  ngOnInit(){
  }

  onChangedPushEnabled(event) {
    this.county.enabled = this.county.enabled === 1 ? 0 : 1;
  }

  onChangeCountyDefaultDays(e) {
    this.county.default_days = e.detail.value;
  }

  async saveAndCloseModal() {
    this.county.put({
      user_id: this.userId,
      county_fips: this.county.county_fips,
      enabled: this.county.enabled,
      default_days: this.county.default_days})
        .subscribe((r) =>{
          this.closeModal();
          this.toastCtrl.presentToast('Settings have been updated', 2000);
        })
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}