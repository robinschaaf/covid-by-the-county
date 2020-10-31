(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-tab-item-details-tab-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-tab/item-details-tab.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-tab/item-details-tab.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemDetailsTabItemDetailsTabPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Tabs component 1 -->\r\n<cs-tab-layout-1 *ngIf=\"isType(0)\" [data]=\"data\">\r\n</cs-tab-layout-1>\r\n<!-- Tabs component 2 -->\r\n<cs-tab-layout-2 *ngIf=\"isType(1)\" [data]=\"data\">\r\n</cs-tab-layout-2>\r\n<!-- Tabs component 3 -->\r\n<cs-tab-layout-3 *ngIf=\"isType(2)\" [data]=\"data\">\r\n</cs-tab-layout-3>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/item-details-tab/item-details-tab.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/item-details-tab/item-details-tab.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ItemDetailsTabPageModule */

    /***/
    function srcAppPagesItemDetailsTabItemDetailsTabModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsTabPageModule", function () {
        return ItemDetailsTabPageModule;
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


      var _item_details_tab_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-details-tab.page */
      "./src/app/pages/item-details-tab/item-details-tab.page.ts");

      var ItemDetailsTabPageModule = function ItemDetailsTabPageModule() {
        _classCallCheck(this, ItemDetailsTabPageModule);
      };

      ItemDetailsTabPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _item_details_tab_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsTabPage"]
        }])],
        declarations: [_item_details_tab_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsTabPage"]],
        exports: [_item_details_tab_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsTabPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemDetailsTabPageModule);
      /***/
    },

    /***/
    "./src/app/pages/item-details-tab/item-details-tab.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/item-details-tab/item-details-tab.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesItemDetailsTabItemDetailsTabPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy10YWIvaXRlbS1kZXRhaWxzLXRhYi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/item-details-tab/item-details-tab.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/item-details-tab/item-details-tab.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ItemDetailsTabPage */

    /***/
    function srcAppPagesItemDetailsTabItemDetailsTabPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsTabPage", function () {
        return ItemDetailsTabPage;
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


      var _services_tabs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/tabs-service */
      "./src/app/services/tabs-service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/toast-service */
      "./src/app/services/toast-service.ts");

      var ItemDetailsTabPage = /*#__PURE__*/function () {
        function ItemDetailsTabPage(navCtrl, service, toastCtrl, route) {
          _classCallCheck(this, ItemDetailsTabPage);

          this.navCtrl = navCtrl;
          this.service = service;
          this.toastCtrl = toastCtrl;
          this.route = route;
          this.data = {}; // this.type = this.route.snapshot.paramMap.get('type');
          // this.service.load(service.getAllThemes()[this.type]).subscribe(d => {
          //     this.data = d;
          // });
        }

        _createClass(ItemDetailsTabPage, [{
          key: "isType",
          value: function isType(item) {
            return item === parseInt(this.type, 10);
          }
        }]);

        return ItemDetailsTabPage;
      }();

      ItemDetailsTabPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_tabs_service__WEBPACK_IMPORTED_MODULE_4__["TabsService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ItemDetailsTabPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details-tab.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-tab/item-details-tab.page.html"))["default"],
        providers: [_services_tabs_service__WEBPACK_IMPORTED_MODULE_4__["TabsService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details-tab.page.scss */
        "./src/app/pages/item-details-tab/item-details-tab.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_tabs_service__WEBPACK_IMPORTED_MODULE_4__["TabsService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ItemDetailsTabPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-item-details-tab-item-details-tab-module-es5.js.map