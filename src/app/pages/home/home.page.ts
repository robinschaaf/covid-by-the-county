import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { HomeService } from './../../services/home-service';
import { ModalController, Platform } from '@ionic/angular';
import {ItemReorderEventDetail} from '@ionic/core';
import { ModalPage } from './modal.page';
import * as moment from 'moment-timezone';

import {groupBy, merge, uniq, sortWith, ascend, descend, prop} from 'ramda';

import { AnimationService } from './../../services/animation-service';
import { ToastService } from 'src/app/services/toast-service';
import { SettingsService } from '../settings-page/settings.service';

import {PluralPipe} from './pluralize.pipe'
import { Restangular } from 'ngx-restangular';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
  StatusBarStyle,
} from '@capacitor/core';

const { PushNotifications, StatusBar } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [HomeService, PluralPipe],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('1s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ]
})
export class HomePage implements OnInit {
  search;
  filteredCounties = [];
  displayRefresh = false;
  loadingCounties = true;
  lastUpdate = '';
  countyData = [];
  newCounty = '';
  deviceId = '';
  userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : '';
  defaultSettings = {deathsChecked: true, perChecked: true, defaultDays: 10}; //TODO: if this is updated also update server!
  settings = localStorage.getItem('_appSettings')
    ? merge(this.defaultSettings, JSON.parse(localStorage.getItem('_appSettings')))
    : this.defaultSettings;
  counties = localStorage.getItem('_counties')
    ? JSON.parse(localStorage.getItem('_counties'))
    : [];

  constructor(
    private restangular: Restangular,
    private homeService: HomeService,
    private settingsService: SettingsService,
    private toastCtrl: ToastService,
    public modalController: ModalController,
    public platform: Platform) {
  }

  ngOnInit() {
    this.getLastUpdate();
    this.getUserCounties();

    StatusBar.setStyle({
      style: StatusBarStyle.Light
    })

    PushNotifications.requestPermission().then((result) => {
      if(result.granted) {
        PushNotifications.register();
      } else {
        this.addUser('');
      }
    })

    PushNotifications.addListener('registration', (token: PushNotificationToken) => {
      console.log('PN registration success:', token)
      this.deviceId = token.value;
      this.addUser(token.value);
    })

    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotification) => {
      this.openModal(notification.body)
    })

    PushNotifications.addListener('pushNotificationActionPerformed', (notification: PushNotificationActionPerformed) => {
      console.log('push notification action performed success!', notification)
    })

    this.settingsService.settings$
      .subscribe((s) => {
        this.settings= s;
        setTimeout(() => {
          this.getUserCounties();
        }, 300)
      })
  }

  onTextChangeFunc() {
    if (this.search.length > 1) {
      this.displayRefresh = true;
      this.restangular.all('/lookups').getList({searchTerm: this.search})
        .subscribe((response) => {
          this.displayRefresh = false;
          const filtered = response
            .map((r) => {
              const isCountyMatch = r.county_name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0;
              const alreadyAdded = !!this.counties.find((uc) => uc.county_fips === r.county_fips)
              return {
                county_fips: r.county_fips,
                county_name: r.county_name,
                city: isCountyMatch ? '' : r.city,
                state: r.state,
                isCountyMatch,
                alreadyAdded
              }
            })
          const anyCounties = !!filtered.find((c) => c.isCountyMatch)
          const countyNameSort = sortWith([
            descend(prop('isCountyMatch')),
            ascend(prop('county_name')),
            ascend(prop('state')),
            ascend(prop('city')),
          ])
          const citySort = sortWith([
            ascend(prop('city')),
            ascend(prop('state')),
          ])
          const sortToUse = anyCounties ? countyNameSort : citySort;
          this.filteredCounties = sortToUse(uniq(filtered))
        }, () => {
          this.displayError()
        })
    } else {
      this.displayRefresh = false;
    }
  }

  onCountyClickFunc(county) {
    this.search = '';
    this.filteredCounties = [];
    this.addUserCounty(county)
  }

  onRemoveCountyClickFunc(county) {
    this.removeUserCounty(county)
  }

  addUser(deviceId) {
    const userPlatform = this.platform.is('ios') ? 'ios' : 'android';
    if(!!this.userId) {
      this.updateUser();
      return;
    }
    this.restangular.all('/subscribeDevice').post({deviceId, platform: userPlatform})
      .subscribe((r) =>{
        localStorage.setItem('userId', r.userId)
        this.userId = r.userId;
        console.log('>>got userid', this.userId)
        if(this.deviceId !== deviceId) {
          this.restangular.all('/updateUserDevice').post({userId: this.userId, deviceId: this.deviceId})
            .subscribe((r) =>{
              //console.log('update successful')
            })

        }
      }, () => {
        this.displayError()
      })
  }

  updateUser() {
    //update with most recent token in case it was updated
    this.restangular.all('/updateUserDevice').post({userId: this.userId, deviceId: this.deviceId})
        .subscribe((r) =>{
          //console.log('update successful')
        })
  }

  addUserCounty(county) {
    if(!this.userId) { this.addUser(''); }
    this.newCounty = county;
    this.restangular.all('/subscribe').post({userId: this.userId, countyId: county})
      .subscribe((r) =>{
        this.getUserCounties();
      }, () => {
        this.displayError()
      })
  }

  removeUserCounty(county) {
    county.show = false;
    setTimeout(() => {
      this.counties = this.counties.filter((c) => c.county_fips !== county)
      this.restangular.all('/subscribe').remove({userId: this.userId, countyId: county.county_fips})
        .subscribe((r) =>{
          this.getUserCounties();
          this.toastCtrl.presentToast('County has been removed', 2000);
        }, () => {
          this.displayError()
        })
    }, 300)
  }

  getUserCounties(event?) {
    if(!this.userId) {
      this.loadingCounties = false;
      return
    }
    this.loadingCounties = true;
    this.restangular.all('/countyData').getList({userId: this.userId, ts: moment().toISOString()}).subscribe((cd) => {
      const byCounty = groupBy((r) => r.county_fips);
      this.countyData = byCounty(cd.plain());
      const newCounties = uniq(cd.map((d) => {
        return {
          county_fips: d.county_fips,
          county_name: d.county_name,
          default_days: d.default_days,
          population: d.population_count.toLocaleString(),
          state: d.state,
          icon: 'icon-chevron-right',
          show: false,
          className: !this.counties.find((cc) => cc.county_fips === d.county_fips) ? 'new' : '',
        }
      }))
      const mergedCounties = newCounties.map((c) => {
        const currentCounty = this.counties.find((co) => co.county_fips === c.county_fips)
        return c//merge(c, currentCounty ? currentCounty : {})
      })
      this.counties = mergedCounties.map((mc) => {
        const allData = this.countyData[mc.county_fips].map((cdd) => {
          const countPer100k = Math.round((cdd.cases_count * 100000) / cdd.population_count)
          return merge(cdd, {
            displayDate: moment(cdd.datestamp).add(1, 'days').format('MM/DD'),
            countPer100k
          })
        })
        const daysToDisplay = mc.default_days ? mc.default_days : this.settings.defaultDays;
        return merge(mc, {data: uniq(allData).slice(0, daysToDisplay || 10)})
      });
      this.loadingCounties = false;
      setTimeout(() => {
        this.counties = this.counties.map((c) => {
          return merge(c, {className: 'show'})
        })
      }, 100)
      
      localStorage.setItem('_counties', JSON.stringify(this.counties));
      
      this.getLastUpdate()

      if(event) {
        event.target.complete();
      }
    }, () => {
      this.displayError()
    })
  }

  getLastUpdate() {
    this.restangular.all('/lastUpdate').getList({}).subscribe((lu) => {
      const lastUpdateDate = lu && lu.length > 0 ? lu[0].max : '';
      if(lastUpdateDate) { this.lastUpdate = moment(lastUpdateDate).add(1, 'days').format('MM/DD z'); }
    })
  }

  toggleGroup(county: any) {
    county.show = !county.show;
    county.icon = county.show ? 'icon-chevron-down' : 'icon-chevron-right';
  }

  clearSearch() {
    this.filteredCounties = [];
    this.search = '';
    this.displayRefresh = false;
  }

  displayError() {
    this.displayRefresh = false;
    this.loadingCounties = false;
    this.toastCtrl.presentDismissableToast('Sorry, but we are currently experiencing technical issues.  Please try again later.');
  }

  doRefresh(event) {
    this.getUserCounties(event);
  }

  async openModal(message) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        message
      },
      backdropDismiss: true
    });
     return await modal.present();
  }

  closeModal() {
   this.modalController.dismiss();
  }
}
