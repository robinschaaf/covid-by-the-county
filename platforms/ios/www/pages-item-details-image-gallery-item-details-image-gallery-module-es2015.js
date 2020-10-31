(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-image-gallery-item-details-image-gallery-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n\r\n  <ion-header>\r\n    <ion-toolbar class=\"box-shadow\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        {{toolbarTitle}}\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <!-- Content -->\r\n  <ion-content>\r\n\r\n    <!-- PAGE 1 -->\r\n    <cs-image-gallery-layout-1\r\n      *ngIf=\"isType(0)\"\r\n      [data]=\"data\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-image-gallery-layout-1>\r\n\r\n    <!-- PAGE 2 -->\r\n    <cs-image-gallery-layout-2\r\n      *ngIf=\"isType(1)\"\r\n      [data]=\"data\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-image-gallery-layout-2>\r\n\r\n    <!-- PAGE 3 -->\r\n    <cs-image-gallery-layout-3\r\n      *ngIf=\"isType(2)\"\r\n      [data]=\"data\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-image-gallery-layout-3>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/pages/item-details-image-gallery/item-details-image-gallery.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-gallery/item-details-image-gallery.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ItemDetailsImageGalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsImageGalleryPageModule", function() { return ItemDetailsImageGalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_image_gallery_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-details-image-gallery.page */ "./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.ts");








let ItemDetailsImageGalleryPageModule = class ItemDetailsImageGalleryPageModule {
};
ItemDetailsImageGalleryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _item_details_image_gallery_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsImageGalleryPage"]
                }
            ])
        ],
        declarations: [_item_details_image_gallery_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsImageGalleryPage"]],
        exports: [_item_details_image_gallery_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsImageGalleryPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ItemDetailsImageGalleryPageModule);



/***/ }),

/***/ "./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1pbWFnZS1nYWxsZXJ5L2l0ZW0tZGV0YWlscy1pbWFnZS1nYWxsZXJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.ts ***!
  \*************************************************************************************/
/*! exports provided: ItemDetailsImageGalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsImageGalleryPage", function() { return ItemDetailsImageGalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_image_gallery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/image-gallery-service */ "./src/app/services/image-gallery-service.ts");





let ItemDetailsImageGalleryPage = class ItemDetailsImageGalleryPage {
    constructor(navCtrl, service, route) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.route = route;
        this.data = {};
        this.type = this.route.snapshot.paramMap.get('type');
        this.service.load(service.getAllThemes()[this.type]).subscribe(d => {
            this.data = d;
            this.toolbarTitle = d.toolbarTitle;
        });
    }
    isType(item) {
        return item === parseInt(this.type, 10);
    }
    // events
    onItemClick(params) {
        let index = params.index;
        params = params.item;
        var dataItem = {};
        if (this.isType(1)) {
            if (!params.hasOwnProperty('items')) {
                dataItem = { 'items': this.data['items'], 'index': index };
            }
        }
        else {
            dataItem = params;
            if (!params.hasOwnProperty('items')) {
                dataItem = { 'items': params };
            }
        }
        const navigationExtras = {
            queryParams: { data: JSON.stringify(dataItem) }
        };
        if (this.isType(1)) {
            this.navCtrl.navigateForward(['full-image-gallery'], navigationExtras);
        }
        else {
            this.navCtrl.navigateForward(['image-gallery-subgallery'], navigationExtras);
        }
    }
    onFavorite(params) {
        params.favorite = !params.favorite;
    }
};
ItemDetailsImageGalleryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_image_gallery_service__WEBPACK_IMPORTED_MODULE_4__["ImageGalleryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ItemDetailsImageGalleryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-details-image-gallery.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.html")).default,
        providers: [_services_image_gallery_service__WEBPACK_IMPORTED_MODULE_4__["ImageGalleryService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-details-image-gallery.page.scss */ "./src/app/pages/item-details-image-gallery/item-details-image-gallery.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_image_gallery_service__WEBPACK_IMPORTED_MODULE_4__["ImageGalleryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ItemDetailsImageGalleryPage);



/***/ })

}]);
//# sourceMappingURL=pages-item-details-image-gallery-item-details-image-gallery-module-es2015.js.map