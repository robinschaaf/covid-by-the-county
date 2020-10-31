(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-image-subgallery-item-details-image-subgallery-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <!-- Header-->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        SubImage Gallery page\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content>\r\n\r\n    <cs-image-gallery-layout-2\r\n      [data]=\"data\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-image-gallery-layout-2>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ItemDetailsImageSubGalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsImageSubGalleryPageModule", function() { return ItemDetailsImageSubGalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_image_subgallery_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-details-image-subgallery.page */ "./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.ts");








let ItemDetailsImageSubGalleryPageModule = class ItemDetailsImageSubGalleryPageModule {
};
ItemDetailsImageSubGalleryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _item_details_image_subgallery_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsImageSubGalleryPage"]
                }
            ])
        ],
        declarations: [_item_details_image_subgallery_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsImageSubGalleryPage"]],
        exports: [_item_details_image_subgallery_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsImageSubGalleryPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ItemDetailsImageSubGalleryPageModule);



/***/ }),

/***/ "./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1pbWFnZS1zdWJnYWxsZXJ5L2l0ZW0tZGV0YWlscy1pbWFnZS1zdWJnYWxsZXJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: ItemDetailsImageSubGalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsImageSubGalleryPage", function() { return ItemDetailsImageSubGalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_image_gallery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/image-gallery-service */ "./src/app/services/image-gallery-service.ts");





let ItemDetailsImageSubGalleryPage = class ItemDetailsImageSubGalleryPage {
    constructor(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.data = {};
        let self = this;
        this.data = this.route.snapshot.paramMap.get('data');
        this.route.queryParams.subscribe(params => {
            self.data = JSON.parse(params['data']);
        });
    }
    // events
    onItemClick(params) {
        var dataItem = { 'items': this.data['items'], index: params.index };
        const navigationExtras = {
            queryParams: { data: JSON.stringify(dataItem) }
        };
        this.navCtrl.navigateForward(['full-image-gallery'], navigationExtras);
    }
    onFavorite(params) {
    }
};
ItemDetailsImageSubGalleryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ItemDetailsImageSubGalleryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-details-image-subgallery.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.html")).default,
        providers: [_services_image_gallery_service__WEBPACK_IMPORTED_MODULE_4__["ImageGalleryService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-details-image-subgallery.page.scss */ "./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ItemDetailsImageSubGalleryPage);



/***/ })

}]);
//# sourceMappingURL=pages-item-details-image-subgallery-item-details-image-subgallery-module-es2015.js.map