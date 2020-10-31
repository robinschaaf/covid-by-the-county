import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toast;

  constructor(public toastController: ToastController) {}

  async presentToast(message: string, duration = 5000) {
    const toast = await this
            .toastController
            .create({'position': 'bottom', 'duration': duration, 'message': message, 'color': 'info'});
    toast.present();
  }
  async presentDismissableToast(message: string) {
    this.toast = await this.toastController
            .create({
              position: 'bottom',
              message,
              duration: 50000,
              color: 'danger',
              buttons: [
                {
                  text: 'Done',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                    this.toast.dismiss();
                  }
                }
              ]
          });
    this.toast.present();
  }

  async dismissToast() {
    this.toast.dismiss();
  }

}
