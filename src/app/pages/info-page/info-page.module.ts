import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { InfoPage } from './info-page.page';
import { SharedModule } from './../../components/shared.module';

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
        component: InfoPage
      }
    ])
  ],
  declarations: [InfoPage],
  //entryComponents: [HomePage],
  exports: [InfoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InfoPageModule { }
