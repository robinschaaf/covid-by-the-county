(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-wizard-item-details-wizard-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-wizard/item-details-wizard.page.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-wizard/item-details-wizard.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemDetailsWizardItemDetailsWizardPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-capitalize\">{{data.toolbarTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content>\r\n\r\n    <!-- PAGE 1 -->\r\n    <cs-wizard-layout-1\r\n    *ngIf=\"isType(0)\"\r\n    [data]=\"data\"\r\n    (onNext)=\"onNext($event)\"\r\n    (onPrevious)=\"onPrevious($event)\"\r\n    (onFinish)=\"onFinish($event)\">\r\n    </cs-wizard-layout-1>\r\n\r\n    <!-- PAGE 2 -->\r\n    <cs-wizard-layout-2\r\n    *ngIf=\"isType(1)\"\r\n    [data]=\"data\"\r\n    (onNext)=\"onNext($event)\"\r\n    (onPrevious)=\"onPrevious($event)\"\r\n    (onFinish)=\"onFinish($event)\">\r\n    </cs-wizard-layout-2>\r\n\r\n    <!-- PAGE 3 -->\r\n    <cs-wizard-layout-3\r\n    *ngIf=\"isType(2)\"\r\n    [data]=\"data\"\r\n    (onNext)=\"onNext($event)\"\r\n    (onPrevious)=\"onPrevious($event)\"\r\n    (onFinish)=\"onFinish($event)\">\r\n    </cs-wizard-layout-3>\r\n\r\n    <!-- PAGE 4 -->\r\n    <cs-wizard-layout-4\r\n    *ngIf=\"isType(3)\"\r\n    [data]=\"data\"\r\n    (onNext)=\"onNext($event)\"\r\n    (onPrevious)=\"onPrevious($event)\"\r\n    (onFinish)=\"onFinish($event)\">\r\n    </cs-wizard-layout-4>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/item-details-wizard/item-details-wizard.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/item-details-wizard/item-details-wizard.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ItemDetailsWizardPageModule */

    /***/
    function srcAppPagesItemDetailsWizardItemDetailsWizardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsWizardPageModule", function () {
        return ItemDetailsWizardPageModule;
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


      var _item_details_wizard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-details-wizard.page */
      "./src/app/pages/item-details-wizard/item-details-wizard.page.ts");

      var ItemDetailsWizardPageModule = function ItemDetailsWizardPageModule() {
        _classCallCheck(this, ItemDetailsWizardPageModule);
      };

      ItemDetailsWizardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _item_details_wizard_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsWizardPage"]
        }])],
        declarations: [_item_details_wizard_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsWizardPage"]],
        exports: [_item_details_wizard_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsWizardPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemDetailsWizardPageModule);
      /***/
    },

    /***/
    "./src/app/pages/item-details-wizard/item-details-wizard.page.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/item-details-wizard/item-details-wizard.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesItemDetailsWizardItemDetailsWizardPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy13aXphcmQvaXRlbS1kZXRhaWxzLXdpemFyZC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/item-details-wizard/item-details-wizard.page.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/item-details-wizard/item-details-wizard.page.ts ***!
      \***********************************************************************/

    /*! exports provided: ItemDetailsWizardPage */

    /***/
    function srcAppPagesItemDetailsWizardItemDetailsWizardPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsWizardPage", function () {
        return ItemDetailsWizardPage;
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


      var _services_wizard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/wizard-service */
      "./src/app/services/wizard-service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/toast-service */
      "./src/app/services/toast-service.ts");

      var ItemDetailsWizardPage = /*#__PURE__*/function () {
        function ItemDetailsWizardPage(navCtrl, service, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, ItemDetailsWizardPage);

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

        _createClass(ItemDetailsWizardPage, [{
          key: "isType",
          value: function isType(item) {
            return item === parseInt(this.type, 10);
          } // events

        }, {
          key: "onFinish",
          value: function onFinish() {
            this.toastCtrl.presentToast('onFinish');
          }
        }, {
          key: "onPrevious",
          value: function onPrevious() {}
        }, {
          key: "onNext",
          value: function onNext() {}
        }]);

        return ItemDetailsWizardPage;
      }();

      ItemDetailsWizardPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_wizard_service__WEBPACK_IMPORTED_MODULE_4__["WizardService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ItemDetailsWizardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details-wizard.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-wizard/item-details-wizard.page.html"))["default"],
        providers: [_services_wizard_service__WEBPACK_IMPORTED_MODULE_4__["WizardService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details-wizard.page.scss */
        "./src/app/pages/item-details-wizard/item-details-wizard.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_wizard_service__WEBPACK_IMPORTED_MODULE_4__["WizardService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ItemDetailsWizardPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-item-details-wizard-item-details-wizard-module-es5.js.map