(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-google-card-item-details-google-card-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-google-card/item-details-google-card.page.html":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-google-card/item-details-google-card.page.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemDetailsGoogleCardItemDetailsGoogleCardPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <!-- Header -->\r\n  <ion-header class=\"box-shadow\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-capitalize\">{{data.toolbarTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content>\r\n\r\n    <!-- PAGE 1 -->\r\n    <cs-google-card-list-layout-1\r\n      *ngIf=\"isType(0)\"\r\n      [data]=\"data\"\r\n      (onFab)=\"onFab($event)\"\r\n      (onShare)=\"onShare($event)\"\r\n      (onLike)=\"onLike($event)\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-google-card-list-layout-1>\r\n\r\n    <!-- PAGE 2 -->\r\n    <cs-google-card-list-layout-2\r\n      *ngIf=\"isType(1)\"\r\n      [data]=\"data\"\r\n      (onFab)=\"onFab($event)\"\r\n      (onShare)=\"onShare($event)\"\r\n      (onLike)=\"onLike($event)\"\r\n      (onExplore)=\"onExplore($event)\"\r\n      (onFavorite)=\"onFavorite($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-google-card-list-layout-2>\r\n\r\n    <!-- PAGE 3 -->\r\n    <cs-google-card-list-layout-3\r\n      *ngIf=\"isType(2)\"\r\n      [data]=\"data\"\r\n      (onFab)=\"onFab($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-google-card-list-layout-3>\r\n\r\n    <!-- PAGE 4 -->\r\n    <cs-google-card-list-layout-4\r\n    *ngIf=\"isType(3)\"\r\n    [data]=\"data\"\r\n    (onItemClick)=\"onItemClick($event)\">>\r\n    </cs-google-card-list-layout-4>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/item-details-google-card/item-details-google-card.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/item-details-google-card/item-details-google-card.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: ItemDetailsGoogleCardPageModule */

    /***/
    function srcAppPagesItemDetailsGoogleCardItemDetailsGoogleCardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsGoogleCardPageModule", function () {
        return ItemDetailsGoogleCardPageModule;
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


      var _components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../components/shared.module */
      "./src/app/components/shared.module.ts");
      /* harmony import */


      var _item_details_google_card_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-details-google-card.page */
      "./src/app/pages/item-details-google-card/item-details-google-card.page.ts");

      var ItemDetailsGoogleCardPageModule = function ItemDetailsGoogleCardPageModule() {
        _classCallCheck(this, ItemDetailsGoogleCardPageModule);
      };

      ItemDetailsGoogleCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _item_details_google_card_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsGoogleCardPage"]
        }])],
        declarations: [_item_details_google_card_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsGoogleCardPage"]],
        exports: [_item_details_google_card_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsGoogleCardPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemDetailsGoogleCardPageModule);
      /***/
    },

    /***/
    "./src/app/pages/item-details-google-card/item-details-google-card.page.scss":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/item-details-google-card/item-details-google-card.page.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesItemDetailsGoogleCardItemDetailsGoogleCardPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*  #Style Expandable - List big image\r\n===========================================*/\nli {\n  list-style-type: none;\n}\n[item-accordion] {\n  height: 0;\n  display: block !important;\n  transition: all 300ms;\n  overflow: hidden;\n}\n[item-accordion].active {\n  height: 450px !important;\n}\n[default-item-active] {\n  margin: 8px 0 !important;\n  width: calc(100% - 24px) !important;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLWdvb2dsZS1jYXJkL2l0ZW0tZGV0YWlscy1nb29nbGUtY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7NENBQzRDO0FBQ3hDO0VBQ0UscUJBQXFCO0FBQzNCO0FBRUE7RUFDTSxTQUFTO0VBQ1QseUJBQXlCO0VBRXpCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDdEI7QUFFQTtFQUFRLHdCQUF3QjtBQUVoQztBQUVBO0VBQ00sd0JBQXdCO0VBQ3hCLG1DQUFtQztBQUN6QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1nb29nbGUtY2FyZC9pdGVtLWRldGFpbHMtZ29vZ2xlLWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogICNTdHlsZSBFeHBhbmRhYmxlIC0gTGlzdCBiaWcgaW1hZ2VcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICBsaSB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIH1cclxuICAgIC8vIExpc3QgYmlnIGltYWdlIEJvZHlcclxuICAgIFtpdGVtLWFjY29yZGlvbl0ge1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIFtkZWZhdWx0LWl0ZW0tYWN0aXZlXSB7XHJcbiAgICAgIG1hcmdpbjogOHB4IDAgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0cHgpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/item-details-google-card/item-details-google-card.page.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/item-details-google-card/item-details-google-card.page.ts ***!
      \*********************************************************************************/

    /*! exports provided: ItemDetailsGoogleCardPage */

    /***/
    function srcAppPagesItemDetailsGoogleCardItemDetailsGoogleCardPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsGoogleCardPage", function () {
        return ItemDetailsGoogleCardPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/list-view-google-card-service */
      "./src/app/services/list-view-google-card-service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/toast-service */
      "./src/app/services/toast-service.ts");

      var ItemDetailsGoogleCardPage = /*#__PURE__*/function () {
        function ItemDetailsGoogleCardPage(navCtrl, service, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, ItemDetailsGoogleCardPage);

          this.navCtrl = navCtrl;
          this.service = service;
          this.toastCtrl = toastCtrl;
          this.route = route;
          this.data = {};
          this.type = this.route.snapshot.paramMap.get('type');
          this.service.load(service.getAllThemes()[this.type]).subscribe(function (d) {
            _this.data = d;
          });
        }

        _createClass(ItemDetailsGoogleCardPage, [{
          key: "isType",
          value: function isType(item) {
            return item === parseInt(this.type, 10);
          } // events

        }, {
          key: "onItemClick",
          value: function onItemClick(params) {
            this.toastCtrl.presentToast('onItemClick');
          }
        }, {
          key: "onFab",
          value: function onFab(params) {
            this.toastCtrl.presentToast('onFab');
          }
        }, {
          key: "onShare",
          value: function onShare(params) {
            this.toastCtrl.presentToast(' onShare');
          }
        }, {
          key: "onExplore",
          value: function onExplore(params) {
            this.toastCtrl.presentToast('onExplore');
          }
        }, {
          key: "onFavorite",
          value: function onFavorite(params) {
            this.toastCtrl.presentToast('onFavorite');
          }
        }, {
          key: "onLike",
          value: function onLike(params) {
            this.toastCtrl.presentToast('onLike');
          }
        }]);

        return ItemDetailsGoogleCardPage;
      }();

      ItemDetailsGoogleCardPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_4__["ListViewGoogleCardsService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ItemDetailsGoogleCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details-google-card.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-google-card/item-details-google-card.page.html"))["default"],
        providers: [_services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_4__["ListViewGoogleCardsService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details-google-card.page.scss */
        "./src/app/pages/item-details-google-card/item-details-google-card.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_4__["ListViewGoogleCardsService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ItemDetailsGoogleCardPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-item-details-google-card-item-details-google-card-module-es5.js.map