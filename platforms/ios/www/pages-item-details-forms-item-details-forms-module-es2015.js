(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-forms-item-details-forms-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-forms/item-details-forms.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-forms/item-details-forms.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <!-- Header -->\r\n  <ion-header>\r\n    <ion-toolbar class=\"box-shadow\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-capitalize\">{{data.toolbarTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content>\r\n\r\n    <!-- PAGE 1 -->\r\n    <cs-forms-layout-1\r\n    *ngIf=\"isType(0)\"\r\n    [data]=\"data\"\r\n    (onSubmit)=\"onSubmit($event)\">\r\n    </cs-forms-layout-1>\r\n\r\n    <!-- PAGE 2 -->\r\n    <cs-forms-layout-2\r\n    *ngIf=\"isType(1)\"\r\n    [data]=\"data\"\r\n    (onRates)=\"onRates($event)\"\r\n    (onSubmit)=\"onSubmit($event)\">\r\n    </cs-forms-layout-2>\r\n\r\n    <!-- PAGE 3 -->\r\n    <cs-forms-layout-3\r\n    *ngIf=\"isType(2)\"\r\n    [data]=\"data\"\r\n    (onSubmit)=\"onSubmit($event)\">\r\n    </cs-forms-layout-3>\r\n\r\n    <!-- PAGE 4 -->\r\n    <cs-forms-layout-4\r\n    *ngIf=\"isType(3)\"\r\n    [data]=\"data\"\r\n    (onRates)=\"onRates($event)\"\r\n    (onAddImage)=\"onAddImage($event)\"\r\n    (onSubmit)=\"onSubmit($event)\">\r\n    </cs-forms-layout-4>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/pages/item-details-forms/item-details-forms.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/item-details-forms/item-details-forms.module.ts ***!
  \***********************************************************************/
/*! exports provided: ItemDetailsFormsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsFormsPageModule", function() { return ItemDetailsFormsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_forms_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-details-forms.page */ "./src/app/pages/item-details-forms/item-details-forms.page.ts");








let ItemDetailsFormsPageModule = class ItemDetailsFormsPageModule {
};
ItemDetailsFormsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _item_details_forms_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsFormsPage"]
                }
            ])
        ],
        declarations: [_item_details_forms_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsFormsPage"]],
        exports: [_item_details_forms_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsFormsPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ItemDetailsFormsPageModule);



/***/ }),

/***/ "./src/app/pages/item-details-forms/item-details-forms.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/item-details-forms/item-details-forms.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1mb3Jtcy9pdGVtLWRldGFpbHMtZm9ybXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/item-details-forms/item-details-forms.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/item-details-forms/item-details-forms.page.ts ***!
  \*********************************************************************/
/*! exports provided: ItemDetailsFormsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsFormsPage", function() { return ItemDetailsFormsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/form-service */ "./src/app/services/form-service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast-service */ "./src/app/services/toast-service.ts");






let ItemDetailsFormsPage = class ItemDetailsFormsPage {
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
    onSubmit(params) {
        this.toastCtrl.presentToast('onSubmit:' + JSON.stringify(params));
    }
    onRates(params) {
        this.toastCtrl.presentToast('onRates:' + JSON.stringify(params));
    }
    onAddImage(params) {
        this.toastCtrl.presentToast('onRates:' + JSON.stringify(params));
    }
};
ItemDetailsFormsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ItemDetailsFormsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-details-forms.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-forms/item-details-forms.page.html")).default,
        providers: [_services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-details-forms.page.scss */ "./src/app/pages/item-details-forms/item-details-forms.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ItemDetailsFormsPage);



/***/ })

}]);
//# sourceMappingURL=pages-item-details-forms-item-details-forms-module-es2015.js.map