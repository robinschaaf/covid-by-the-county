(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-check-box-item-details-check-box-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-check-box/item-details-check-box.page.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-check-box/item-details-check-box.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemDetailsCheckBoxItemDetailsCheckBoxPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <!-- Header -->\r\n  <ion-header class=\"box-shadow\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-capitalize\">{{data.toolbarTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content>\r\n\r\n    <!-- PAGE 1-->\r\n    <cs-check-box-layout-1\r\n      *ngIf=\"isType(0)\"\r\n      [data]=\"data.items\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-check-box-layout-1>\r\n\r\n    <!-- PAGE 2-->\r\n    <cs-check-box-layout-2\r\n      *ngIf=\"isType(1)\"\r\n      [data]=\"data.items\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-check-box-layout-2>\r\n\r\n    <!-- PAGE 3-->\r\n    <cs-check-box-layout-3\r\n      *ngIf=\"isType(2)\"\r\n      [data]=\"data.items\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-check-box-layout-3>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/item-details-check-box/item-details-check-box.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/item-details-check-box/item-details-check-box.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ItemDetailsCheckBoxPageModule */

    /***/
    function srcAppPagesItemDetailsCheckBoxItemDetailsCheckBoxModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsCheckBoxPageModule", function () {
        return ItemDetailsCheckBoxPageModule;
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


      var _item_details_check_box_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-details-check-box.page */
      "./src/app/pages/item-details-check-box/item-details-check-box.page.ts");

      var ItemDetailsCheckBoxPageModule = function ItemDetailsCheckBoxPageModule() {
        _classCallCheck(this, ItemDetailsCheckBoxPageModule);
      };

      ItemDetailsCheckBoxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _item_details_check_box_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsCheckBoxPage"]
        }])],
        declarations: [_item_details_check_box_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsCheckBoxPage"]],
        exports: [_item_details_check_box_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsCheckBoxPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemDetailsCheckBoxPageModule);
      /***/
    },

    /***/
    "./src/app/pages/item-details-check-box/item-details-check-box.page.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/item-details-check-box/item-details-check-box.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesItemDetailsCheckBoxItemDetailsCheckBoxPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1jaGVjay1ib3gvaXRlbS1kZXRhaWxzLWNoZWNrLWJveC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/item-details-check-box/item-details-check-box.page.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/item-details-check-box/item-details-check-box.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: ItemDetailsCheckBoxPage */

    /***/
    function srcAppPagesItemDetailsCheckBoxItemDetailsCheckBoxPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsCheckBoxPage", function () {
        return ItemDetailsCheckBoxPage;
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


      var _services_check_box_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/check-box-service */
      "./src/app/services/check-box-service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/toast-service */
      "./src/app/services/toast-service.ts");

      var ItemDetailsCheckBoxPage = /*#__PURE__*/function () {
        function ItemDetailsCheckBoxPage(navCtrl, service, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, ItemDetailsCheckBoxPage);

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

        _createClass(ItemDetailsCheckBoxPage, [{
          key: "isType",
          value: function isType(item) {
            return item === parseInt(this.type, 10);
          } // events

        }, {
          key: "onItemClick",
          value: function onItemClick(params) {
            this.toastCtrl.presentToast('onItemClick:' + JSON.stringify(params));
          }
        }]);

        return ItemDetailsCheckBoxPage;
      }();

      ItemDetailsCheckBoxPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_check_box_service__WEBPACK_IMPORTED_MODULE_4__["CheckBoxService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ItemDetailsCheckBoxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details-check-box.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-check-box/item-details-check-box.page.html"))["default"],
        providers: [_services_check_box_service__WEBPACK_IMPORTED_MODULE_4__["CheckBoxService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details-check-box.page.scss */
        "./src/app/pages/item-details-check-box/item-details-check-box.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_check_box_service__WEBPACK_IMPORTED_MODULE_4__["CheckBoxService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ItemDetailsCheckBoxPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-item-details-check-box-item-details-check-box-module-es5.js.map