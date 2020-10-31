(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-page-settings-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/modal.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/modal.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-app>\n  <ion-content class=\"transparent\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h4 style=\"margin-top: 3px;\">Settings for {{county.county_name}}, {{county.state}}</h4>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"9\" class=\"ion-align-self-center ion-padding-start\">\n          <ion-label class=\"\">\n            <div class=\"text-color-primary ion-text-wrap\">\n              <span class=\"font-light\">Number of Days to Display</span>\n            </div>\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"3\" class=\"ion-align-self-center\">\n          <ion-select interface=\"popover\" [ngModel]=\"county.default_days\" multiple=\"false\" (ionChange)=\"onChangeCountyDefaultDays($event)\">\n            <ion-select-option value=\"\">Use default</ion-select-option>\n            <ion-select-option *ngFor=\"let i of allowedDays\" [value]=\"i\">{{i}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"10\" class=\"ion-align-self-center ion-padding-start\">\n          <ion-label class=\"\">\n            <div class=\"text-color-primary ion-text-wrap\">\n              <span class=\"font-light\">Send Push Notications</span>\n            </div>\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-align-self-center\">\n          <ion-label class=\"\">\n            <ion-toggle\n              slot=\"end\"\n              (ionChange)=\"onChangedPushEnabled($event)\"\n              [checked]=\"county.enabled === 1\"\n              style=\"right: 10px;\">\n            </ion-toggle>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n  <ion-footer class=\"ion-no-border ion-padding\">\n    <ion-toolbar>\n      <ion-button class=\"default-button box-shadow\" (click)=\"saveAndCloseModal()\" >Save</ion-button>\n      <ion-button class=\"default-button box-shadow\" (click)=\"closeModal()\" color=\"light\">Cancel</ion-button>\n      \n    </ion-toolbar>\n  </ion-footer>\n</ion-app>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/settings-page.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/settings-page.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Intro Page -->\r\n<ion-app>\r\n  <ion-header class=\"box-shadow\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-capitalize\">Settings</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content class=\"background-size\" style=\"background-image: url('39.jpg')\">\r\n    <ion-grid>\r\n      <ion-row *ngIf=\"counties.length === 0\">\r\n        <ion-col size=\"12\" class=\"ion-align-self-center ion-padding-start\">\r\n          <ion-label class=\"ion-padding\">\r\n            <h2 class=\"text-size-md text-color-primary ion-text-wrap\">\r\n              <span class=\"font-bold\">No settings are available - please add some counties first!</span>\r\n            </h2>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngIf=\"counties.length > 0\" style=\"padding-top: 24px; padding-bottom: 6px\">\r\n        <ion-col size=\"12\" class=\"ion-align-self-center ion-padding-start\">\r\n          <ion-label class=\"\">\r\n            <h2 class=\"text-size-md text-color-primary ion-text-wrap\">\r\n              <span class=\"font-bold\">County Display and Notifications:</span>\r\n            </h2>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngFor=\"let county of counties\">\r\n        <ion-col size=\"8\" class=\"ion-align-self-center ion-padding-start\">\r\n          <ion-label class=\"\">\r\n            <h2 class=\"text-size-md text-color-primary ion-text-wrap\">\r\n              <span class=\"font-light\">{{county.county_name}}, {{county.state}}</span>\r\n            </h2>\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-align-self-center\">\r\n          <ion-label class=\"ion-float-right\" style=\"margin-right: 4px;\">\r\n            <ion-button fill=\"outline\" class=\"\" size=\"small\" (click)=\"openModal(county)\">\r\n              <!-- <ion-icon size=\"small\" name=\"pencil\" style=\"margin-right: 4px\"></ion-icon> -->\r\n              Update\r\n            </ion-button>\r\n            <!-- <ion-checkbox slot=\"end\" (ngModelChange)=\"updateUserCounty(county)\" [ngModel]=\"county.checkEnabled\"></ion-checkbox> -->\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"counties.length > 0\" style=\"padding-top: 24px; padding-bottom: 6px\">\r\n        <ion-col size=\"12\" class=\"ion-align-self-center ion-padding-start\">\r\n          <ion-label class=\"\">\r\n            <h2 class=\"text-size-md text-color-primary ion-text-wrap\">\r\n              <span class=\"font-bold\">General Display Settings:</span>\r\n            </h2>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"10\" class=\"ion-align-self-center ion-padding-start\">\r\n          <ion-label class=\"\">\r\n            <h2 class=\"text-size-md text-color-primary ion-text-wrap\">\r\n              <span class=\"font-light\">Show Cases per 100k</span>\r\n            </h2>\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n          <ion-label class=\"\">\r\n            \r\n            <ion-toggle\r\n              slot=\"end\"\r\n              (ionChange)=\"ionChangePerChecked($event)\"\r\n              [checked]=\"perChecked\"\r\n              style=\"right: 10px;\">\r\n            </ion-toggle>\r\n\r\n            <!-- <ion-checkbox slot=\"end\" (ionChange)=\"ionChangePerChecked($event)\" [(ngModel)]=\"perChecked\"></ion-checkbox> -->\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"10\" class=\"ion-align-self-center ion-padding-start\">\r\n          <ion-label class=\"\">\r\n            <h2 class=\"text-size-md text-color-primary ion-text-wrap\">\r\n              <span class=\"font-light\">Show Death Counts</span>\r\n            </h2>\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n          <ion-label class=\"\">\r\n            \r\n            <ion-toggle\r\n              slot=\"end\"\r\n              (ionChange)=\"ionChangeDeathsChecked($event)\"\r\n              [checked]=\"deathsChecked\"\r\n              style=\"right: 10px;\">\r\n            </ion-toggle>\r\n\r\n            <!-- <ion-checkbox slot=\"end\" (ionChange)=\"ionChangeDeathsChecked($event)\" [(ngModel)]=\"deathsChecked\"></ion-checkbox> -->\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"9\" class=\"ion-align-self-center ion-padding-start\">\r\n          <ion-label class=\"\">\r\n            <h2 class=\"text-size-md text-color-primary ion-text-wrap\">\r\n              <span class=\"font-light\">Number of Days to Display</span>\r\n            </h2>\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"ion-align-self-center\">\r\n          <ion-select interface=\"popover\" [(ngModel)]=\"defaultDays\" multiple=\"false\" (ionChange)=\"onChangeDefaultDays($event)\">\r\n            <ion-select-option *ngFor=\"let i of allowedDays\" [value]=\"i\">{{i}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/pages/settings-page/modal.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings-page/modal.page.ts ***!
  \***************************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");




let ModalPage = class ModalPage {
    constructor(modalController, restangular) {
        this.modalController = modalController;
        this.restangular = restangular;
        this.allowedDays = [];
    }
    ngOnInit() {
    }
    onChangedPushEnabled(event) {
        this.county.enabled = this.county.enabled === 1 ? 0 : 1;
    }
    onChangeCountyDefaultDays(e) {
        this.county.default_days = e.detail.value;
    }
    saveAndCloseModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.county.put({
                user_id: this.userId,
                county_fips: this.county.county_fips,
                enabled: this.county.enabled,
                default_days: this.county.default_days
            })
                .subscribe((r) => {
                this.closeModal();
            });
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"] }
];
ModalPage.propDecorators = {
    county: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    userId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    allowedDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-county-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/modal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings-page.page.scss */ "./src/app/pages/settings-page/settings-page.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"]])
], ModalPage);



/***/ }),

/***/ "./src/app/pages/settings-page/settings-page.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.module.ts ***!
  \*************************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.page */ "./src/app/pages/settings-page/modal.page.ts");
/* harmony import */ var _settings_page_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings-page.page */ "./src/app/pages/settings-page/settings-page.page.ts");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/shared.module */ "./src/app/components/shared.module.ts");









let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            // IntroPageModule,
            _components_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _settings_page_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"]
                }
            ])
        ],
        declarations: [_settings_page_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"], _modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]],
        //entryComponents: [HomePage],
        exports: [_settings_page_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/pages/settings-page/settings-page.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-row {\n  border-bottom: solid .55px #C7C7CC;\n}\n\n.updateButton {\n  --border-radius: 6px;\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  height: 2.1em;\n  font-size: 13px;\n}\n\n.updateButton [slot=start] {\n  -webkit-margin-end: 4px !important;\n          margin-inline-end: 4px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MtcGFnZS9zZXR0aW5ncy1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG9CQUFnQjtFQUNoQixnQkFBYztFQUNkLHNCQUFnQjtFQUNoQixvQkFBYztFQUNkLG1CQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFSQTtFQVVJLGtDQUFpQztVQUFqQyxpQ0FBaUM7QUFFckMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy1wYWdlL3NldHRpbmdzLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIC41NXB4ICNDN0M3Q0M7XG59XG5cbi51cGRhdGVCdXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjllbTtcbiAgLS1wYWRkaW5nLWVuZDogMC45ZW07XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIGhlaWdodDogMi4xZW07XG4gIGZvbnQtc2l6ZTogMTNweDtcblxuICBbc2xvdD1zdGFydF0ge1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA0cHggIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/settings-page/settings-page.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.page.ts ***!
  \***********************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast-service */ "./src/app/services/toast-service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.service */ "./src/app/pages/settings-page/settings.service.ts");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.page */ "./src/app/pages/settings-page/modal.page.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");









let SettingsPage = class SettingsPage {
    constructor(settingsService, restangular, toastCtrl, navCtrl, modalController) {
        this.settingsService = settingsService;
        this.restangular = restangular;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.defaultSettings = { deathsChecked: true, perChecked: true, defaultDays: 10 }; //TODO: if this is updated also update server!
        this.settings = localStorage.getItem('_appSettings')
            ? Object(ramda__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.defaultSettings, JSON.parse(localStorage.getItem('_appSettings')))
            : this.defaultSettings;
        this.deathsChecked = true;
        this.perChecked = true;
        this.defaultDays = this.settings.defaultDays;
        this.allowedDays = [];
        this.counties = localStorage.getItem('counties')
            ? JSON.parse(localStorage.getItem('counties'))
            : [];
        this.userId = localStorage.getItem('userId') || '';
        for (let i = 1; i < 90; i++) {
            this.allowedDays.push(i);
        }
    }
    ngOnInit() {
        this.deathsChecked = this.settings.deathsChecked;
        this.perChecked = this.settings.perChecked;
        this.getUserCounties();
    }
    ionChangeDeathsChecked(event) {
        this.deathsChecked = !this.deathsChecked;
        this.settings.deathsChecked = this.deathsChecked;
        this.saveSettings();
    }
    ionChangePerChecked(event) {
        this.perChecked = !this.perChecked;
        this.settings.perChecked = this.perChecked;
        this.saveSettings();
    }
    onChangeDefaultDays(event) {
        this.settings.defaultDays = this.defaultDays;
        this.saveSettings();
    }
    getUserCounties() {
        if (!this.userId) {
            return;
        }
        this.restangular.all('/userCounties').getList({ userId: this.userId }).subscribe((co) => {
            this.counties = co.map((c) => {
                return Object(ramda__WEBPACK_IMPORTED_MODULE_7__["merge"])(c, { checkEnabled: c.enabled === 1 });
            });
        });
    }
    saveSettings() {
        localStorage.setItem('_appSettings', JSON.stringify(this.settings));
        this.settingsService.publishSettings(this.settings);
        this.restangular.all('/updateUserSettings').post({ user_id: this.userId, settings: JSON.stringify(this.settings) })
            .subscribe((r) => {
            this.toastCtrl.presentToast('Settings have been updated', 2000);
        });
    }
    openModal(county) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"],
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
            });
            return yield modal.present();
        });
    }
    closeModal() {
        this.modalController.dismiss();
        this.settingsService.publishSettings(this.settings);
        this.toastCtrl.presentToast('Settings have been updated', 5000);
    }
};
SettingsPage.ctorParameters = () => [
    { type: _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/settings-page.page.html")).default,
        providers: [],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings-page.page.scss */ "./src/app/pages/settings-page/settings-page.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
        ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-settings-page-settings-page-module-es2015.js.map