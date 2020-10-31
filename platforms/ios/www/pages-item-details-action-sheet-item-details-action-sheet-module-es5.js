(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-action-sheet-item-details-action-sheet-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-action-sheet/item-details-action-sheet.page.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-action-sheet/item-details-action-sheet.page.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemDetailsActionSheetItemDetailsActionSheetPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  \r\n    <!-- PAGE 1 -->\r\n    <cs-action-sheet-layout-1\r\n      *ngIf=\"isType(0)\"\r\n      [data]=\"data\"\r\n      (onChangeScroll)=\"onChangeScroll($event)\"\r\n      (onItemClickActionSheet)=\"onItemClickActionSheet($event)\"\r\n      (onProceed)=\"onProceed($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-action-sheet-layout-1>\r\n\r\n    <!-- PAGE 2 -->\r\n    <cs-action-sheet-layout-2\r\n      *ngIf=\"isType(1)\"\r\n      [data]=\"data\"\r\n      (onChangeScroll)=\"onChangeScroll($event)\"\r\n      (onItemClickActionSheet)=\"onItemClickActionSheet($event)\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-action-sheet-layout-2>\r\n\r\n    <!-- PAGE 3 -->\r\n    <cs-action-sheet-layout-3\r\n      *ngIf=\"isType(2)\"\r\n      [data]=\"data\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-action-sheet-layout-3>\r\n\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/item-details-action-sheet/item-details-action-sheet.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/item-details-action-sheet/item-details-action-sheet.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: ItemDetailsActionSheetPageModule */

    /***/
    function srcAppPagesItemDetailsActionSheetItemDetailsActionSheetModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsActionSheetPageModule", function () {
        return ItemDetailsActionSheetPageModule;
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


      var _item_details_action_sheet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-details-action-sheet.page */
      "./src/app/pages/item-details-action-sheet/item-details-action-sheet.page.ts");

      var ItemDetailsActionSheetPageModule = function ItemDetailsActionSheetPageModule() {
        _classCallCheck(this, ItemDetailsActionSheetPageModule);
      };

      ItemDetailsActionSheetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _item_details_action_sheet_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsActionSheetPage"]
        }])],
        declarations: [_item_details_action_sheet_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsActionSheetPage"]],
        exports: [_item_details_action_sheet_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsActionSheetPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemDetailsActionSheetPageModule);
      /***/
    },

    /***/
    "./src/app/pages/item-details-action-sheet/item-details-action-sheet.page.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/item-details-action-sheet/item-details-action-sheet.page.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesItemDetailsActionSheetItemDetailsActionSheetPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1hY3Rpb24tc2hlZXQvaXRlbS1kZXRhaWxzLWFjdGlvbi1zaGVldC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/item-details-action-sheet/item-details-action-sheet.page.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/item-details-action-sheet/item-details-action-sheet.page.ts ***!
      \***********************************************************************************/

    /*! exports provided: ItemDetailsActionSheetPage */

    /***/
    function srcAppPagesItemDetailsActionSheetItemDetailsActionSheetPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsActionSheetPage", function () {
        return ItemDetailsActionSheetPage;
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


      var _services_action_sheet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/action-sheet-service */
      "./src/app/services/action-sheet-service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/toast-service */
      "./src/app/services/toast-service.ts");

      var ItemDetailsActionSheetPage = /*#__PURE__*/function () {
        function ItemDetailsActionSheetPage(navCtrl, service, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, ItemDetailsActionSheetPage);

          this.navCtrl = navCtrl;
          this.service = service;
          this.toastCtrl = toastCtrl;
          this.route = route;
          this.data = {};
          this.isHeaderActive = false;
          this.type = this.route.snapshot.paramMap.get('type');
          this.service.load(service.getAllThemes()[this.type]).subscribe(function (d) {
            _this.data = d;
          });
        }

        _createClass(ItemDetailsActionSheetPage, [{
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
          key: "onItemClickActionSheet",
          value: function onItemClickActionSheet(params) {
            this.toastCtrl.presentToast('onItemClickActionSheet');
          }
        }, {
          key: "onProceed",
          value: function onProceed(params) {
            this.toastCtrl.presentToast('onProceed');
          }
        }, {
          key: "onChangeScroll",
          value: function onChangeScroll(isHeaderActive) {
            this.isHeaderActive = isHeaderActive;
          }
        }]);

        return ItemDetailsActionSheetPage;
      }();

      ItemDetailsActionSheetPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_action_sheet_service__WEBPACK_IMPORTED_MODULE_4__["ActionSheetService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ItemDetailsActionSheetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details-action-sheet.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-action-sheet/item-details-action-sheet.page.html"))["default"],
        providers: [_services_action_sheet_service__WEBPACK_IMPORTED_MODULE_4__["ActionSheetService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details-action-sheet.page.scss */
        "./src/app/pages/item-details-action-sheet/item-details-action-sheet.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_action_sheet_service__WEBPACK_IMPORTED_MODULE_4__["ActionSheetService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ItemDetailsActionSheetPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-item-details-action-sheet-item-details-action-sheet-module-es5.js.map