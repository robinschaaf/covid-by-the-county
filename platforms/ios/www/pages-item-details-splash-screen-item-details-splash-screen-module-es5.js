(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-splash-screen-item-details-splash-screen-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemDetailsSplashScreenItemDetailsSplashScreenPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <!-- Content-->\r\n  <ion-content>\r\n\r\n    <!-- Page 1 -->\r\n    <cs-splash-screen-layout-1\r\n      *ngIf=\"isType(0)\"\r\n      [data]=\"data\"\r\n      (onRedirect)=\"onRedirect($event)\">\r\n    </cs-splash-screen-layout-1>\r\n\r\n    <!-- Page 2 -->\r\n    <cs-splash-screen-layout-2\r\n      *ngIf=\"isType(1)\"\r\n      [data]=\"data\"\r\n      (onRedirect)=\"onRedirect($event)\">\r\n    </cs-splash-screen-layout-2>\r\n\r\n    <!-- Page 3 -->\r\n    <cs-splash-screen-layout-3\r\n      *ngIf=\"isType(2)\"\r\n      [data]=\"data\"\r\n      (onRedirect)=\"onRedirect($event)\">\r\n    </cs-splash-screen-layout-3>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/item-details-splash-screen/item-details-splash-screen.module.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/item-details-splash-screen/item-details-splash-screen.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: ItemDetailsSplashScreenPageModule */

    /***/
    function srcAppPagesItemDetailsSplashScreenItemDetailsSplashScreenModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsSplashScreenPageModule", function () {
        return ItemDetailsSplashScreenPageModule;
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


      var _item_details_splash_screen_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-details-splash-screen.page */
      "./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.ts");

      var ItemDetailsSplashScreenPageModule = function ItemDetailsSplashScreenPageModule() {
        _classCallCheck(this, ItemDetailsSplashScreenPageModule);
      };

      ItemDetailsSplashScreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _item_details_splash_screen_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsSplashScreenPage"]
        }])],
        declarations: [_item_details_splash_screen_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsSplashScreenPage"]],
        exports: [_item_details_splash_screen_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsSplashScreenPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemDetailsSplashScreenPageModule);
      /***/
    },

    /***/
    "./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesItemDetailsSplashScreenItemDetailsSplashScreenPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1zcGxhc2gtc2NyZWVuL2l0ZW0tZGV0YWlscy1zcGxhc2gtc2NyZWVuLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.ts ***!
      \*************************************************************************************/

    /*! exports provided: ItemDetailsSplashScreenPage */

    /***/
    function srcAppPagesItemDetailsSplashScreenItemDetailsSplashScreenPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsSplashScreenPage", function () {
        return ItemDetailsSplashScreenPage;
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


      var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/splash-screen-service */
      "./src/app/services/splash-screen-service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/toast-service */
      "./src/app/services/toast-service.ts");

      var ItemDetailsSplashScreenPage = /*#__PURE__*/function () {
        function ItemDetailsSplashScreenPage(navCtrl, service, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, ItemDetailsSplashScreenPage);

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

        _createClass(ItemDetailsSplashScreenPage, [{
          key: "isType",
          value: function isType(item) {
            return item === parseInt(this.type, 10);
          } // events

        }, {
          key: "onRedirect",
          value: function onRedirect() {
            this.navCtrl.back();
          }
        }]);

        return ItemDetailsSplashScreenPage;
      }();

      ItemDetailsSplashScreenPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ItemDetailsSplashScreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details-splash-screen.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.html"))["default"],
        providers: [_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details-splash-screen.page.scss */
        "./src/app/pages/item-details-splash-screen/item-details-splash-screen.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ItemDetailsSplashScreenPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-item-details-splash-screen-item-details-splash-screen-module-es5.js.map