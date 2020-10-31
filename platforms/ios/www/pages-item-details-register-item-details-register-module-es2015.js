(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-register-item-details-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-register/item-details-register.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-register/item-details-register.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <!-- Header -->\r\n  <ion-header>\r\n    <ion-toolbar class=\"transparent\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-capitalize\">{{data.toolbarTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <!-- PAGE 1 -->\r\n  <cs-register-layout-1 *ngIf=\"isType(0)\" [data]=\"data\" (onRegister)=\"onRegister($event)\" (onSkip)=\"onSkip($event)\">\r\n  </cs-register-layout-1>\r\n\r\n  <!-- PAGE 2 -->\r\n  <cs-register-layout-2 *ngIf=\"isType(1)\" [data]=\"data\" (onRegister)=\"onRegister($event)\" (onSkip)=\"onSkip($event)\">\r\n  </cs-register-layout-2>\r\n\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/pages/item-details-register/item-details-register.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/item-details-register/item-details-register.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ItemDetailsRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsRegisterPageModule", function() { return ItemDetailsRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-details-register.page */ "./src/app/pages/item-details-register/item-details-register.page.ts");








let ItemDetailsRegisterPageModule = class ItemDetailsRegisterPageModule {
};
ItemDetailsRegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _item_details_register_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsRegisterPage"]
                }
            ])
        ],
        declarations: [_item_details_register_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsRegisterPage"]],
        exports: [_item_details_register_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsRegisterPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ItemDetailsRegisterPageModule);



/***/ }),

/***/ "./src/app/pages/item-details-register/item-details-register.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/item-details-register/item-details-register.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1yZWdpc3Rlci9pdGVtLWRldGFpbHMtcmVnaXN0ZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/item-details-register/item-details-register.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/item-details-register/item-details-register.page.ts ***!
  \***************************************************************************/
/*! exports provided: ItemDetailsRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsRegisterPage", function() { return ItemDetailsRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/register-service */ "./src/app/services/register-service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast-service */ "./src/app/services/toast-service.ts");






let ItemDetailsRegisterPage = class ItemDetailsRegisterPage {
    constructor(navCtrl, service, toastCtrl, route) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.data = {};
        this.type = this.route.snapshot.paramMap.get('type');
        this.service.load(service.getAllThemes()[this.type]).subscribe(d => {
            this.data = d;
        });
    }
    isType(item) {
        return item === parseInt(this.type, 10);
    }
    // events
    onRegister(params) {
        this.toastCtrl.presentToast('onRegister:' + JSON.stringify(params));
    }
    onSkip() {
        this.toastCtrl.presentToast('onSkip');
    }
};
ItemDetailsRegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ItemDetailsRegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-details-register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-register/item-details-register.page.html")).default,
        providers: [_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-details-register.page.scss */ "./src/app/pages/item-details-register/item-details-register.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ItemDetailsRegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-item-details-register-item-details-register-module-es2015.js.map