(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-login-item-details-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-login/item-details-login.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-login/item-details-login.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemDetailsLoginItemDetailsLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n\r\n  <!-- Header -->\r\n  <ion-header>\r\n    <ion-toolbar class=\"transparent\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-capitalize\">{{data.headerTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <!-- PAGE 1-->\r\n  <cs-login-layout-1\r\n    *ngIf=\"isType(0)\"\r\n    [data]=\"data\"\r\n    (onLogin)=\"onLogin($event)\"\r\n    (onRegister)=\"onRegister($event)\"\r\n    (onSkip)=\"onSkip($event)\"\r\n    (onFacebook)=\"onFacebook($event)\"\r\n    (onTwitter)=\"onTwitter($event)\"\r\n    (onGoogle)=\"onGoogle($event)\"\r\n    (onPinterest)=\"onPinterest($event)\">\r\n  </cs-login-layout-1>\r\n\r\n  <!-- PAGE 2-->\r\n  <cs-login-layout-2\r\n    *ngIf=\"isType(1)\"\r\n    [data]=\"data\"\r\n    (onLogin)=\"onLogin($event)\"\r\n    (onRegister)=\"onRegister($event)\"\r\n    (onSkip)=\"onSkip($event)\"\r\n    (onFacebook)=\"onFacebook($event)\"\r\n    (onTwitter)=\"onTwitter($event)\"\r\n    (onGoogle)=\"onGoogle($event)\"\r\n    (onPinterest)=\"onPinterest($event)\">\r\n  </cs-login-layout-2>\r\n\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/item-details-login/item-details-login.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/item-details-login/item-details-login.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ItemDetailsLoginPageModule */

    /***/
    function srcAppPagesItemDetailsLoginItemDetailsLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsLoginPageModule", function () {
        return ItemDetailsLoginPageModule;
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


      var _item_details_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-details-login.page */
      "./src/app/pages/item-details-login/item-details-login.page.ts");

      var ItemDetailsLoginPageModule = function ItemDetailsLoginPageModule() {
        _classCallCheck(this, ItemDetailsLoginPageModule);
      };

      ItemDetailsLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _item_details_login_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsLoginPage"]
        }])],
        declarations: [_item_details_login_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsLoginPage"]],
        exports: [_item_details_login_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsLoginPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemDetailsLoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/item-details-login/item-details-login.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/item-details-login/item-details-login.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesItemDetailsLoginItemDetailsLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1sb2dpbi9pdGVtLWRldGFpbHMtbG9naW4ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/item-details-login/item-details-login.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/item-details-login/item-details-login.page.ts ***!
      \*********************************************************************/

    /*! exports provided: ItemDetailsLoginPage */

    /***/
    function srcAppPagesItemDetailsLoginItemDetailsLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsLoginPage", function () {
        return ItemDetailsLoginPage;
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


      var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/login-service */
      "./src/app/services/login-service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/toast-service */
      "./src/app/services/toast-service.ts");

      var ItemDetailsLoginPage = /*#__PURE__*/function () {
        function ItemDetailsLoginPage(navCtrl, service, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, ItemDetailsLoginPage);

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

        _createClass(ItemDetailsLoginPage, [{
          key: "isType",
          value: function isType(item) {
            return item === parseInt(this.type, 10);
          } // events

        }, {
          key: "onLogin",
          value: function onLogin(params) {
            this.toastCtrl.presentToast('onLogin:' + JSON.stringify(params));
          }
        }, {
          key: "onRegister",
          value: function onRegister(params) {
            this.toastCtrl.presentToast('onRegister:' + JSON.stringify(params));
          }
        }, {
          key: "onSkip",
          value: function onSkip() {
            this.toastCtrl.presentToast('onSkip');
          }
        }, {
          key: "onFacebook",
          value: function onFacebook(params) {
            this.toastCtrl.presentToast('onFacebook:' + JSON.stringify(params));
          }
        }, {
          key: "onTwitter",
          value: function onTwitter(params) {
            this.toastCtrl.presentToast('onTwitter:' + JSON.stringify(params));
          }
        }, {
          key: "onGoogle",
          value: function onGoogle(params) {
            this.toastCtrl.presentToast('onGoogle:' + JSON.stringify(params));
          }
        }, {
          key: "onPinterest",
          value: function onPinterest(params) {
            this.toastCtrl.presentToast('onPinterest:' + JSON.stringify(params));
          }
        }]);

        return ItemDetailsLoginPage;
      }();

      ItemDetailsLoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ItemDetailsLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details-login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-login/item-details-login.page.html"))["default"],
        providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details-login.page.scss */
        "./src/app/pages/item-details-login/item-details-login.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ItemDetailsLoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-item-details-login-item-details-login-module-es5.js.map