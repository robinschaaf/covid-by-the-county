(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-parallax-item-details-parallax-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-parallax/item-details-parallax.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-parallax/item-details-parallax.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <!-- Header -->\r\n    <!-- PAGE 1 -->\r\n    <cs-parallax-layout-1\r\n      *ngIf=\"isType(0)\"\r\n      [data]=\"data\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onLike)=\"onLike($event)\"\r\n      (onShare)=\"onShare($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-parallax-layout-1>\r\n\r\n    <!-- PAGE 2 -->\r\n    <cs-parallax-layout-2\r\n      *ngIf=\"isType(1)\"\r\n      [data]=\"data\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onLike)=\"onLike($event)\"\r\n      (onShare)=\"onShare($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-parallax-layout-2>\r\n\r\n    <!-- PAGE 3 -->\r\n    <cs-parallax-layout-3\r\n      *ngIf=\"isType(2)\"\r\n      [data]=\"data\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-parallax-layout-3>\r\n\r\n    <!-- PAGE 4 -->\r\n    <cs-parallax-layout-4\r\n      *ngIf=\"isType(3)\"\r\n      [data]=\"data\"\r\n      (onRates)=\"onRates($event)\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onLike)=\"onLike($event)\"\r\n      (onShare)=\"onShare($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n      </cs-parallax-layout-4>\r\n\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/pages/item-details-parallax/item-details-parallax.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/item-details-parallax/item-details-parallax.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ItemDetailsParallaxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsParallaxPageModule", function() { return ItemDetailsParallaxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_parallax_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-details-parallax.page */ "./src/app/pages/item-details-parallax/item-details-parallax.page.ts");








let ItemDetailsParallaxPageModule = class ItemDetailsParallaxPageModule {
};
ItemDetailsParallaxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _item_details_parallax_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsParallaxPage"]
                }
            ])
        ],
        declarations: [_item_details_parallax_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsParallaxPage"]],
        exports: [_item_details_parallax_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsParallaxPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ItemDetailsParallaxPageModule);



/***/ }),

/***/ "./src/app/pages/item-details-parallax/item-details-parallax.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/item-details-parallax/item-details-parallax.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1wYXJhbGxheC9pdGVtLWRldGFpbHMtcGFyYWxsYXgucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/item-details-parallax/item-details-parallax.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/item-details-parallax/item-details-parallax.page.ts ***!
  \***************************************************************************/
/*! exports provided: ItemDetailsParallaxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsParallaxPage", function() { return ItemDetailsParallaxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_parallax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/parallax-service */ "./src/app/services/parallax-service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast-service */ "./src/app/services/toast-service.ts");






let ItemDetailsParallaxPage = class ItemDetailsParallaxPage {
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
    onLike(params) {
        this.toastCtrl.presentToast('onLike');
    }
    onFavorite(params) {
        this.toastCtrl.presentToast('onFavorite');
    }
    onShare(params) {
        this.toastCtrl.presentToast('onShare');
    }
    onItemClick(params) {
        this.toastCtrl.presentToast('onItemClick:' + JSON.stringify(params));
    }
    onRates(params) {
        this.toastCtrl.presentToast('onRates:' + JSON.stringify(params));
    }
    onFab(params) {
        this.toastCtrl.presentToast('onFab:' + JSON.stringify(params));
    }
};
ItemDetailsParallaxPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_parallax_service__WEBPACK_IMPORTED_MODULE_4__["ParallaxService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ItemDetailsParallaxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-details-parallax.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-parallax/item-details-parallax.page.html")).default,
        providers: [_services_parallax_service__WEBPACK_IMPORTED_MODULE_4__["ParallaxService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-details-parallax.page.scss */ "./src/app/pages/item-details-parallax/item-details-parallax.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_parallax_service__WEBPACK_IMPORTED_MODULE_4__["ParallaxService"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ItemDetailsParallaxPage);



/***/ })

}]);
//# sourceMappingURL=pages-item-details-parallax-item-details-parallax-module-es2015.js.map