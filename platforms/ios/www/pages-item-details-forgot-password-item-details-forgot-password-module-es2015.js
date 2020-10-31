(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-forgot-password-item-details-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n\r\n  <!-- Header -->\r\n  <ion-header>\r\n    <ion-toolbar class=\"transparent\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-capitalize\">{{data.toolbarTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n    <!-- PAGE 1 -->\r\n    <cs-forgot-password-layout-1\r\n      *ngIf=\"isType(0)\"\r\n      [data]=\"data\"\r\n      (onSend)=\"onSend($event)\">\r\n    </cs-forgot-password-layout-1>\r\n\r\n    <!-- PAGE 2 -->\r\n    <cs-forgot-password-layout-2\r\n        *ngIf=\"isType(1)\"\r\n        [data]=\"data\"\r\n        (onSend)=\"onSend($event)\">\r\n    </cs-forgot-password-layout-2>\r\n\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/pages/item-details-forgot-password/item-details-forgot-password.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/item-details-forgot-password/item-details-forgot-password.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ItemDetailsForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsForgotPasswordPageModule", function() { return ItemDetailsForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-details-forgot-password.page */ "./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.ts");








let ItemDetailsForgotPasswordPageModule = class ItemDetailsForgotPasswordPageModule {
};
ItemDetailsForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _item_details_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsForgotPasswordPage"]
                }
            ])
        ],
        declarations: [_item_details_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsForgotPasswordPage"]],
        exports: [_item_details_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsForgotPasswordPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ItemDetailsForgotPasswordPageModule);



/***/ }),

/***/ "./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1mb3Jnb3QtcGFzc3dvcmQvaXRlbS1kZXRhaWxzLWZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: ItemDetailsForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsForgotPasswordPage", function() { return ItemDetailsForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_forget_password_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/forget-password-services */ "./src/app/services/forget-password-services.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast-service */ "./src/app/services/toast-service.ts");






let ItemDetailsForgotPasswordPage = class ItemDetailsForgotPasswordPage {
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
    onSend(params) {
        this.toastCtrl.presentToast('onSend:' + JSON.stringify(params));
    }
};
ItemDetailsForgotPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_forget_password_services__WEBPACK_IMPORTED_MODULE_4__["ForgetPasswordService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ItemDetailsForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-details-forgot-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.html")).default,
        providers: [_services_forget_password_services__WEBPACK_IMPORTED_MODULE_4__["ForgetPasswordService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-details-forgot-password.page.scss */ "./src/app/pages/item-details-forgot-password/item-details-forgot-password.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_forget_password_services__WEBPACK_IMPORTED_MODULE_4__["ForgetPasswordService"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ItemDetailsForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-item-details-forgot-password-item-details-forgot-password-module-es2015.js.map