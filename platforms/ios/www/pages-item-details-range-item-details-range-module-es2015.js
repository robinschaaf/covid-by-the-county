(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-range-item-details-range-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-range/item-details-range.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-range/item-details-range.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <!-- Header -->\r\n  <ion-header>\r\n    <ion-toolbar class=\"box-shadow\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>{{headerTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!--- Content -->\r\n  <ion-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n\r\n          <!-- RANGE 1 -->\r\n          <cs-range-layout-1\r\n            [data]=\"dataLayout1\"\r\n            (onChange)=\"onChange($event)\">\r\n          </cs-range-layout-1>\r\n\r\n          <!-- RANGE 2 -->\r\n          <cs-range-layout-2\r\n            [data]=\"dataLayout2\"\r\n            (onChange)=\"onChange($event)\">\r\n          </cs-range-layout-2>\r\n\r\n          <!-- RANGE 3 -->\r\n          <cs-range-layout-3\r\n            [data]=\"dataLayout3\"\r\n            (onChange)=\"onChange($event)\">\r\n          </cs-range-layout-3>\r\n\r\n          <!-- RANGE 4 -->\r\n          <cs-range-layout-4\r\n            [data]=\"dataLayout4\"\r\n            (onChange)=\"onChange($event)\">\r\n          </cs-range-layout-4>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/pages/item-details-range/item-details-range.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/item-details-range/item-details-range.module.ts ***!
  \***********************************************************************/
/*! exports provided: ItemDetailsRangePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsRangePageModule", function() { return ItemDetailsRangePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_range_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-details-range.page */ "./src/app/pages/item-details-range/item-details-range.page.ts");








let ItemDetailsRangePageModule = class ItemDetailsRangePageModule {
};
ItemDetailsRangePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _item_details_range_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsRangePage"]
                }
            ])
        ],
        declarations: [_item_details_range_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsRangePage"]],
        exports: [_item_details_range_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsRangePage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ItemDetailsRangePageModule);



/***/ }),

/***/ "./src/app/pages/item-details-range/item-details-range.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/item-details-range/item-details-range.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1yYW5nZS9pdGVtLWRldGFpbHMtcmFuZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/item-details-range/item-details-range.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/item-details-range/item-details-range.page.ts ***!
  \*********************************************************************/
/*! exports provided: ItemDetailsRangePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsRangePage", function() { return ItemDetailsRangePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_range_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/range-service */ "./src/app/services/range-service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast-service */ "./src/app/services/toast-service.ts");






let ItemDetailsRangePage = class ItemDetailsRangePage {
    constructor(navCtrl, service, toastCtrl, route) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.dataLayout1 = {};
        this.dataLayout2 = {};
        this.dataLayout3 = {};
        this.dataLayout4 = {};
        this.type = this.route.snapshot.paramMap.get('type');
        this.service.load(service.getAllThemes()[this.type]).subscribe(d => {
            this.dataLayout1 = d.layout1;
            this.dataLayout2 = d.layout2;
            this.dataLayout3 = d.layout3;
            this.dataLayout4 = d.layout4;
            this.headerTitle = d.toolbarTitle;
        });
    }
    isType(item) {
        return item === parseInt(this.type, 10);
    }
    // events
    onChange(params) {
    }
};
ItemDetailsRangePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_range_service__WEBPACK_IMPORTED_MODULE_4__["RangeService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ItemDetailsRangePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-details-range.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-range/item-details-range.page.html")).default,
        providers: [_services_range_service__WEBPACK_IMPORTED_MODULE_4__["RangeService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-details-range.page.scss */ "./src/app/pages/item-details-range/item-details-range.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_range_service__WEBPACK_IMPORTED_MODULE_4__["RangeService"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ItemDetailsRangePage);



/***/ })

}]);
//# sourceMappingURL=pages-item-details-range-item-details-range-module-es2015.js.map