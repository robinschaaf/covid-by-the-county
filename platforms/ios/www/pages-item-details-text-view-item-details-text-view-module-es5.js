(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-text-view-item-details-text-view-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-text-view/item-details-text-view.page.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-text-view/item-details-text-view.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemDetailsTextViewItemDetailsTextViewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <!--- Header -->\r\n  <ion-header>\r\n    <ion-toolbar class=\"box-shadow\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>All</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!--- Content text exapmles  --->\r\n  <ion-content class=\"ion-padding\">\r\n    <ion-grid>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <div class=\"title-components ion-text-uppercase ion-padding-bottom text-size-lg\">Typography examples:</div>\r\n          <h1 class=\"text-size-xl\">This is example of h1 title.</h1>\r\n          <h2 class=\"text-size-lg\">And this is example of h2 title/subtitle.</h2>\r\n          <h3 class=\"text-size-md\">Example of h3 subtitle is also here.</h3>\r\n          <h4 class=\"text-size-xs\">And h4 subtitle example is here.</h4>\r\n          <h5 class=\"text-size-sm\">h5 subtitle is like this!</h5>\r\n          <h6 class=\"text-size-sm\">And h6 at the end usualy same as h6.</h6>\r\n          <p class=\"text-size-p\">This is example of paragraph text.\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit,\r\n            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n            laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n          <!--- BUTTON EXAMPLE  --->\r\n          <div class=\"title-components ion-text-uppercase ion-padding-vertical text-size-md ion-margin-bottom\">Button examples:</div>\r\n          <ion-row>\r\n            <ion-col size=\"12\" size-md=\"6\">\r\n              <span class=\"text-size-xs ion-text-capitalize\">Default button</span>\r\n              <div class=\"clerfix\"></div>\r\n              <ion-button class=\"ion-text-capitalize default-button\">\r\n                Button\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-md=\"6\">\r\n              <span class=\"text-size-xs ion-text-capitalize\">Button with icon</span>\r\n              <div class=\"clerfix\"></div>\r\n              <ion-button class=\"ion-text-capitalize button-icon\">\r\n                <ion-icon class=\"icon-small\" slot=\"start\" name=\"star\"></ion-icon>\r\n                Button\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-md=\"6\">\r\n              <span class=\"text-size-xs ion-text-capitalize\">Clear button</span>\r\n              <div class=\"clerfix\"></div>\r\n              <ion-button class=\"ion-text-capitalize clear-button\" fill=\"clear\">\r\n                Button\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"12\" size-md=\"6\">\r\n              <span class=\"text-size-xs ion-text-capitalize\">Action Sheet Button</span>\r\n              <div class=\"clerfix\"></div>\r\n              <ion-button class=\"button-action-shit\">\r\n                <ion-icon class=\"icon-large\" name=\"ios-more\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <!--- ICON EXAMPLES  --->\r\n          <div class=\"title-components ion-text-uppercase ion-padding-vertical text-size-md ion-margin-bottom\">ICON EXAMPLES:</div>\r\n          <span class=\"block ion-padding-vertical text-size-xs\">Small</span>\r\n          <i class=\"icon icon-thumb-up icon-small\"></i>\r\n          <i class=\"icon icon-heart icon-small\"></i>\r\n          <i class=\"icon icon-share-variant icon-small\"></i>\r\n          <div class=\"clerfix\"></div>\r\n          <span class=\"block ion-padding-vertical text-size-xs\">Medium</span>\r\n          <i class=\"icon icon-thumb-up icon-medium\"></i>\r\n          <i class=\"icon icon-heart icon-medium\"></i>\r\n          <i class=\"icon icon-share-variant icon-medium\"></i>\r\n          <div class=\"clerfix\"></div>\r\n          <span class=\"block ion-padding-vertical text-size-xs\">Large</span>\r\n          <i class=\"icon icon-thumb-up icon-large\"></i>\r\n          <i class=\"icon icon-heart icon-large\"></i>\r\n          <i class=\"icon icon-share-variant icon-large\"></i>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-grid>\r\n  </ion-content>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/item-details-text-view/item-details-text-view.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/item-details-text-view/item-details-text-view.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ItemDetailsPageTextViewModule */

    /***/
    function srcAppPagesItemDetailsTextViewItemDetailsTextViewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsPageTextViewModule", function () {
        return ItemDetailsPageTextViewModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _item_details_text_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./item-details-text-view.page */
      "./src/app/pages/item-details-text-view/item-details-text-view.page.ts");

      var ItemDetailsPageTextViewModule = function ItemDetailsPageTextViewModule() {
        _classCallCheck(this, ItemDetailsPageTextViewModule);
      };

      ItemDetailsPageTextViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _item_details_text_view_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsPageTextView"]
        }])],
        declarations: [_item_details_text_view_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsPageTextView"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemDetailsPageTextViewModule);
      /***/
    },

    /***/
    "./src/app/pages/item-details-text-view/item-details-text-view.page.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/item-details-text-view/item-details-text-view.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesItemDetailsTextViewItemDetailsTextViewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title-components {\n  border-bottom: 1px solid var(--cs-background-border);\n}\n\n.icon-large {\n  color: var(--cs-icon-color-primary);\n}\n\nspan.block {\n  width: 100%;\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLXRleHQtdmlldy9pdGVtLWRldGFpbHMtdGV4dC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLXRleHQtdmlldy9pdGVtLWRldGFpbHMtdGV4dC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1jb21wb25lbnRzIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY3MtYmFja2dyb3VuZC1ib3JkZXIpO1xyXG59XHJcblxyXG4uaWNvbi1sYXJnZSB7XHJcbiAgY29sb3I6IHZhcigtLWNzLWljb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbnNwYW4uYmxvY2t7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/item-details-text-view/item-details-text-view.page.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/item-details-text-view/item-details-text-view.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: ItemDetailsPageTextView */

    /***/
    function srcAppPagesItemDetailsTextViewItemDetailsTextViewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsPageTextView", function () {
        return ItemDetailsPageTextView;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_text_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/text-view-service */
      "./src/app/services/text-view-service.ts");

      var ItemDetailsPageTextView = function ItemDetailsPageTextView(navCtrl, textViewService) {
        _classCallCheck(this, ItemDetailsPageTextView);

        this.navCtrl = navCtrl;
        this.textViewService = textViewService;
        this.params = {}; // If we navigated to this page, we will have an item available as a nav param

        this.params = this.textViewService.prepareParams(navCtrl);
      };

      ItemDetailsPageTextView.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_text_view_service__WEBPACK_IMPORTED_MODULE_3__["TextViewService"]
        }];
      };

      ItemDetailsPageTextView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details-text-view.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-text-view/item-details-text-view.page.html"))["default"],
        providers: [_services_text_view_service__WEBPACK_IMPORTED_MODULE_3__["TextViewService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details-text-view.page.scss */
        "./src/app/pages/item-details-text-view/item-details-text-view.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_text_view_service__WEBPACK_IMPORTED_MODULE_3__["TextViewService"]])], ItemDetailsPageTextView);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-item-details-text-view-item-details-text-view-module-es5.js.map