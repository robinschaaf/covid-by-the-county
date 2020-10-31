(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-select-item-details-select-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-select/item-details-select.page.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-select/item-details-select.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemDetailsSelectItemDetailsSelectPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <!-- Header -->\r\n  <ion-header>\r\n    <ion-toolbar class=\"box-shadow\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-capitalize\">{{headerTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content class=\"ion-padding-top\">\r\n    <ion-grid class=\"ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col class=\"ion-no-padding\" size=\"12\">\r\n\r\n          <!-- Select 1 -->\r\n          <cs-select-layout-1 *ngIf=\"isType(0)\" [data]=\"dataLayout1\" (onChange)=\"onChange($event)\">\r\n          </cs-select-layout-1>\r\n\r\n          <!-- Select 2 -->\r\n          <cs-select-layout-2 *ngIf=\"isType(0)\" [data]=\"dataLayout2\" (onChange)=\"onChange($event)\">\r\n          </cs-select-layout-2>\r\n\r\n          <!-- Select 3 -->\r\n          <cs-select-layout-3 *ngIf=\"isType(0)\" [data]=\"dataLayout3\" (onChange)=\"onChange($event)\">\r\n          </cs-select-layout-3>\r\n\r\n          <!-- Select 4 -->\r\n          <cs-select-layout-4 *ngIf=\"isType(0)\" [data]=\"dataLayout4\" (onChangeMonth)=\"onChangeMonth($event)\" (onChangeYears)=\"onChangeYears($event)\">\r\n          </cs-select-layout-4>\r\n\r\n          <!-- Select 5 -->\r\n          <cs-select-layout-5 *ngIf=\"isType(1)\" [data]=\"dataLayout5\" (onChange)=\"onChange($event)\">\r\n          </cs-select-layout-5>\r\n\r\n          <!-- Select 6 -->\r\n          <cs-select-layout-6 *ngIf=\"isType(1)\" [data]=\"dataLayout6\" (onChangeMonth)=\"onChangeMonth($event)\" (onChangeYears)=\"onChangeYears($event)\">\r\n          </cs-select-layout-6>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/item-details-select/item-details-select.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/item-details-select/item-details-select.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ItemDetailsSelectPageModule */

    /***/
    function srcAppPagesItemDetailsSelectItemDetailsSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsSelectPageModule", function () {
        return ItemDetailsSelectPageModule;
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


      var _item_details_select_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-details-select.page */
      "./src/app/pages/item-details-select/item-details-select.page.ts");

      var ItemDetailsSelectPageModule = function ItemDetailsSelectPageModule() {
        _classCallCheck(this, ItemDetailsSelectPageModule);
      };

      ItemDetailsSelectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _item_details_select_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsSelectPage"]
        }])],
        declarations: [_item_details_select_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsSelectPage"]],
        exports: [_item_details_select_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsSelectPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemDetailsSelectPageModule);
      /***/
    },

    /***/
    "./src/app/pages/item-details-select/item-details-select.page.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/item-details-select/item-details-select.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesItemDetailsSelectItemDetailsSelectPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1zZWxlY3QvaXRlbS1kZXRhaWxzLXNlbGVjdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/item-details-select/item-details-select.page.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/item-details-select/item-details-select.page.ts ***!
      \***********************************************************************/

    /*! exports provided: ItemDetailsSelectPage */

    /***/
    function srcAppPagesItemDetailsSelectItemDetailsSelectPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsSelectPage", function () {
        return ItemDetailsSelectPage;
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


      var _services_select_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/select-service */
      "./src/app/services/select-service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/toast-service */
      "./src/app/services/toast-service.ts");

      var ItemDetailsSelectPage = /*#__PURE__*/function () {
        function ItemDetailsSelectPage(navCtrl, service, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, ItemDetailsSelectPage);

          this.navCtrl = navCtrl;
          this.service = service;
          this.toastCtrl = toastCtrl;
          this.route = route;
          this.dataLayout1 = {};
          this.dataLayout2 = {};
          this.dataLayout3 = {};
          this.dataLayout4 = {};
          this.dataLayout5 = {};
          this.dataLayout6 = {};
          this.headerTitle = {};
          this.type = this.route.snapshot.paramMap.get('type');
          this.service.load(service.getAllThemes()[this.type]).subscribe(function (d) {
            _this.dataLayout1 = d.layout1;
            _this.dataLayout2 = d.layout2;
            _this.dataLayout3 = d.layout3;
            _this.dataLayout4 = d.layout4;
            _this.dataLayout5 = d.layout5;
            _this.dataLayout6 = d.layout6;

            if (_this.isType(0)) {
              _this.headerTitle = d.layout1.headerTitle;
            } else {
              _this.headerTitle = d.layout4.headerTitle;
            }
          });
        }

        _createClass(ItemDetailsSelectPage, [{
          key: "isType",
          value: function isType(item) {
            return item === parseInt(this.type, 10);
          } // events

        }, {
          key: "onChangeYears",
          value: function onChangeYears(params) {
            this.toastCtrl.presentToast('onChangeYears:' + JSON.stringify(params));
          }
        }, {
          key: "onChangeMonth",
          value: function onChangeMonth(params) {
            this.toastCtrl.presentToast('onChangeMonth:' + JSON.stringify(params));
          }
        }, {
          key: "onChange",
          value: function onChange(params) {
            this.toastCtrl.presentToast('onChange:' + JSON.stringify(params));
          }
        }]);

        return ItemDetailsSelectPage;
      }();

      ItemDetailsSelectPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_select_service__WEBPACK_IMPORTED_MODULE_4__["SelectService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ItemDetailsSelectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details-select.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-select/item-details-select.page.html"))["default"],
        providers: [_services_select_service__WEBPACK_IMPORTED_MODULE_4__["SelectService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details-select.page.scss */
        "./src/app/pages/item-details-select/item-details-select.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_select_service__WEBPACK_IMPORTED_MODULE_4__["SelectService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ItemDetailsSelectPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-item-details-select-item-details-select-module-es5.js.map