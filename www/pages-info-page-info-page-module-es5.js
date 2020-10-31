(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-info-page-info-page-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/info-page/info-page.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/info-page/info-page.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesInfoPageInfoPagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Intro Page -->\r\n<ion-app>\r\n  <ion-header class=\"box-shadow\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-capitalize\">About COVID Case Alerts</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content class=\"background-size\" style=\"background-image: url('39.jpg')\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-align-self-center ion-padding-start\">\r\n          <ion-label class=\"ion-padding\">\r\n            <h2 class=\"text-size-md text-color-primary ion-text-wrap\">\r\n              <span class=\"font-light\">Notifications are usually sent by 2pm Eastern for the prior day's numbers</span>\r\n            </h2>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-align-self-center ion-padding-start\">\r\n          <ion-label class=\"ion-padding\">\r\n            <h2 class=\"text-size-md text-color-primary ion-text-wrap\">\r\n              <span class=\"font-light\">County Data is provided by USA Facts:</span>\r\n            </h2>\r\n            <h2 class=\"text-size-md text-color-primary ion-text-wrap\">\r\n              <span><a href=\"https://usafacts.org/visualizations/coronavirus-covid-19-spread-map/\">https://usafacts.org/visualizations/coronavirus-covid-19-spread-map/</a></span>\r\n            </h2>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-align-self-center ion-padding-start\">\r\n          <ion-label class=\"ion-padding\">\r\n            <h2 class=\"text-size-md text-color-primary ion-text-wrap\">\r\n              <span class=\"font-light\">&copy; 2020 Robin Cottrell</span>\r\n            </h2>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/info-page/info-page.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/info-page/info-page.module.ts ***!
      \*****************************************************/

    /*! exports provided: InfoPageModule */

    /***/
    function srcAppPagesInfoPageInfoPageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoPageModule", function () {
        return InfoPageModule;
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


      var _info_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./info-page.page */
      "./src/app/pages/info-page/info-page.page.ts");
      /* harmony import */


      var _components_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../components/shared.module */
      "./src/app/components/shared.module.ts");

      var InfoPageModule = function InfoPageModule() {
        _classCallCheck(this, InfoPageModule);
      };

      InfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], // IntroPageModule,
        _components_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _info_page_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]
        }])],
        declarations: [_info_page_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]],
        //entryComponents: [HomePage],
        exports: [_info_page_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], InfoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/info-page/info-page.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/info-page/info-page.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesInfoPageInfoPagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm8tcGFnZS9pbmZvLXBhZ2UucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/info-page/info-page.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/info-page/info-page.page.ts ***!
      \***************************************************/

    /*! exports provided: InfoPage */

    /***/
    function srcAppPagesInfoPageInfoPagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoPage", function () {
        return InfoPage;
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


      var _services_intro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/intro-service */
      "./src/app/services/intro-service.ts");

      var InfoPage = function InfoPage(modalController, navCtrl, service) {
        _classCallCheck(this, InfoPage);

        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.service = service;
        this.data = {};
      };

      InfoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_intro_service__WEBPACK_IMPORTED_MODULE_3__["IntroService"]
        }];
      };

      InfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./info-page.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/info-page/info-page.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./info-page.page.scss */
        "./src/app/pages/info-page/info-page.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_intro_service__WEBPACK_IMPORTED_MODULE_3__["IntroService"]])], InfoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-info-page-info-page-module-es5.js.map