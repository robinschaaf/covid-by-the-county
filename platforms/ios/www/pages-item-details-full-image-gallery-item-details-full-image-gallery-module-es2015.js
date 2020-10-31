(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-full-image-gallery-item-details-full-image-gallery-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Full Image Gallery page</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n  <!--Content -->\r\n  <ion-content>\r\n\r\n    <!-- Page 1-->\r\n    <cs-full-image-gallery-layout-1 [data]=\"data\">\r\n    </cs-full-image-gallery-layout-1>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ItemDetailsFullImageGalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsFullImageGalleryPageModule", function() { return ItemDetailsFullImageGalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _item_details_full_image_gallery_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-details-full-image-gallery.page */ "./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.ts");








let ItemDetailsFullImageGalleryPageModule = class ItemDetailsFullImageGalleryPageModule {
};
ItemDetailsFullImageGalleryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _item_details_full_image_gallery_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsFullImageGalleryPage"]
                }
            ])
        ],
        declarations: [_item_details_full_image_gallery_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsFullImageGalleryPage"]],
        exports: [_item_details_full_image_gallery_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsFullImageGalleryPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ItemDetailsFullImageGalleryPageModule);



/***/ }),

/***/ "./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1mdWxsLWltYWdlLWdhbGxlcnkvaXRlbS1kZXRhaWxzLWZ1bGwtaW1hZ2UtZ2FsbGVyeS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: ItemDetailsFullImageGalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsFullImageGalleryPage", function() { return ItemDetailsFullImageGalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ItemDetailsFullImageGalleryPage = class ItemDetailsFullImageGalleryPage {
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
};
ItemDetailsFullImageGalleryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ItemDetailsFullImageGalleryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-details-full-image-gallery.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-details-full-image-gallery.page.scss */ "./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ItemDetailsFullImageGalleryPage);



/***/ })

}]);
//# sourceMappingURL=pages-item-details-full-image-gallery-item-details-full-image-gallery-module-es2015.js.map