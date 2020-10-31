(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-expandable-item-details-expandable-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-expandable/item-details-expandable.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-expandable/item-details-expandable.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n      <!-- PAGE 1 -->\r\n      <cs-expandable-list-layout-1\r\n        *ngIf=\"isType(0)\"\r\n        [data]=\"data\"\r\n        (onFavorite)=\"onFavorite($event)\"\r\n        (onLike)=\"onLike($event)\"\r\n        (onShare)=\"onShare($event)\"\r\n        (onItemClick)=\"onItemClick($event)\">\r\n      </cs-expandable-list-layout-1>\r\n\r\n      <!-- PAGE 2 -->\r\n      <cs-expandable-list-layout-2\r\n        *ngIf=\"isType(1)\"\r\n        [data]=\"data\"\r\n        (onItemClick)=\"onItemClick($event)\"\r\n        (onRates)=\"onRates($event)\">\r\n      </cs-expandable-list-layout-2>\r\n\r\n      <!-- PAGE 3 -->\r\n      <cs-expandable-list-layout-3\r\n        *ngIf=\"isType(2)\"\r\n        [data]=\"data\"\r\n        (onItemClick)=\"onItemClick($event)\"\r\n        (onRates)=\"onRates($event)\"\r\n        (onCheckBoxClick)=\"onCheckBoxClick($event)\"\r\n        (onButtonClick)=\"onButtonClick($event)\">\r\n      </cs-expandable-list-layout-3>\r\n");

/***/ }),

/***/ "./src/app/pages/item-details-expandable/item-details-expandable.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/item-details-expandable/item-details-expandable.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ItemDetailsExpandablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsExpandablePageModule", function() { return ItemDetailsExpandablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_expandable_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-details-expandable.page */ "./src/app/pages/item-details-expandable/item-details-expandable.page.ts");








let ItemDetailsExpandablePageModule = class ItemDetailsExpandablePageModule {
};
ItemDetailsExpandablePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _item_details_expandable_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsExpandablePage"]
                }
            ])
        ],
        declarations: [_item_details_expandable_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsExpandablePage"]],
        exports: [_item_details_expandable_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsExpandablePage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ItemDetailsExpandablePageModule);



/***/ }),

/***/ "./src/app/pages/item-details-expandable/item-details-expandable.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/item-details-expandable/item-details-expandable.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1leHBhbmRhYmxlL2l0ZW0tZGV0YWlscy1leHBhbmRhYmxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/item-details-expandable/item-details-expandable.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/item-details-expandable/item-details-expandable.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ItemDetailsExpandablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsExpandablePage", function() { return ItemDetailsExpandablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_list_view_expandable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/list-view-expandable-service */ "./src/app/services/list-view-expandable-service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast-service */ "./src/app/services/toast-service.ts");






let ItemDetailsExpandablePage = class ItemDetailsExpandablePage {
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
    onRates(params) {
        this.toastCtrl.presentToast('onRates:' + JSON.stringify(params));
    }
    onItemClick(params) {
        this.toastCtrl.presentToast('onItemClick:' + JSON.stringify(params));
    }
    onFavorite(params) {
        this.toastCtrl.presentToast('onFavorite');
    }
    onLike() {
        this.toastCtrl.presentToast('onLike');
    }
    onShare() {
        this.toastCtrl.presentToast('onShare');
    }
    onCheckBoxClick(params) {
        this.toastCtrl.presentToast('onCheckBoxClick:' + JSON.stringify(params));
    }
    onButtonClick(params) {
        this.toastCtrl.presentToast('onButtonClick:' + JSON.stringify(params));
    }
};
ItemDetailsExpandablePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_list_view_expandable_service__WEBPACK_IMPORTED_MODULE_4__["ListViewExpandableService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ItemDetailsExpandablePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-details-expandable.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-expandable/item-details-expandable.page.html")).default,
        providers: [_services_list_view_expandable_service__WEBPACK_IMPORTED_MODULE_4__["ListViewExpandableService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-details-expandable.page.scss */ "./src/app/pages/item-details-expandable/item-details-expandable.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_list_view_expandable_service__WEBPACK_IMPORTED_MODULE_4__["ListViewExpandableService"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ItemDetailsExpandablePage);



/***/ })

}]);
//# sourceMappingURL=pages-item-details-expandable-item-details-expandable-module-es2015.js.map