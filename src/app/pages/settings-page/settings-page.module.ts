import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ModalPage } from './modal.page';
import { SettingsPage } from './settings-page.page';
import { SharedModule } from '../../components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // IntroPageModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingsPage
      }
    ])
  ],
  declarations: [SettingsPage, ModalPage],
  //entryComponents: [HomePage],
  exports: [SettingsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SettingsPageModule { }
