(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-spinner-item-details-spinner-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-spinner/item-details-spinner.page.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-spinner/item-details-spinner.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemDetailsSpinnerItemDetailsSpinnerPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <!-- Header -->\r\n  <ion-header>\r\n    <ion-toolbar class=\"box-shadow\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Spinner page</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content>\r\n    <ion-grid pager=\"true\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-list class=\"spinner\">\r\n            <ion-item lines=\"lines\" *ngFor=\"let item of data;let i = index\">\r\n              <!-- Default Spinner -->\r\n              {{item.name}}\r\n              <ion-spinner slot=\"end\" *ngIf=\"isType(0)\" [name]=\"item.icon\"></ion-spinner>\r\n              <!-- Creativ Studio Spinner (Custom components) -->\r\n              {{item.name}}\r\n              <cs-spinner slot=\"end\" class=\"svg-size\" *ngIf=\"isType(1)\" [name]=\"item.icon\"></cs-spinner>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/item-details-spinner/item-details-spinner.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/item-details-spinner/item-details-spinner.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ItemDetailsSpinnerPageModule */

    /***/
    function srcAppPagesItemDetailsSpinnerItemDetailsSpinnerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsSpinnerPageModule", function () {
        return ItemDetailsSpinnerPageModule;
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


      var _item_details_spinner_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-details-spinner.page */
      "./src/app/pages/item-details-spinner/item-details-spinner.page.ts");

      var ItemDetailsSpinnerPageModule = function ItemDetailsSpinnerPageModule() {
        _classCallCheck(this, ItemDetailsSpinnerPageModule);
      };

      ItemDetailsSpinnerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _item_details_spinner_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsSpinnerPage"]
        }])],
        declarations: [_item_details_spinner_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsSpinnerPage"]],
        exports: [_item_details_spinner_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsSpinnerPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemDetailsSpinnerPageModule);
      /***/
    },

    /***/
    "./src/app/pages/item-details-spinner/item-details-spinner.page.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/item-details-spinner/item-details-spinner.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesItemDetailsSpinnerItemDetailsSpinnerPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* Settings Spinner\r\n======================================*/\n.spinner cs-spinner.svg-size,\n.spinner ion-spinner {\n  display: flex !important;\n  padding: 10px;\n}\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLXNwaW5uZXIvaXRlbS1kZXRhaWxzLXNwaW5uZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO3VDQUN1QztBQUN2Qzs7RUFFRSx3QkFBd0I7RUFDeEIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLXNwaW5uZXIvaXRlbS1kZXRhaWxzLXNwaW5uZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0dGluZ3MgU3Bpbm5lclxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi5zcGlubmVyIGNzLXNwaW5uZXIuc3ZnLXNpemUsXHJcbi5zcGlubmVyIGlvbi1zcGlubmVyIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/item-details-spinner/item-details-spinner.page.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/item-details-spinner/item-details-spinner.page.ts ***!
      \*************************************************************************/

    /*! exports provided: ItemDetailsSpinnerPage */

    /***/
    function srcAppPagesItemDetailsSpinnerItemDetailsSpinnerPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsSpinnerPage", function () {
        return ItemDetailsSpinnerPage;
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


      var _services_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/spinner-service */
      "./src/app/services/spinner-service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ItemDetailsSpinnerPage = /*#__PURE__*/function () {
        function ItemDetailsSpinnerPage(navCtrl, service, route) {
          var _this = this;

          _classCallCheck(this, ItemDetailsSpinnerPage);

          this.navCtrl = navCtrl;
          this.service = service;
          this.route = route;
          this.data = {};
          this.slideOpts = {
            'effect': 'flip'
          };
          this.type = this.route.snapshot.paramMap.get('type');
          this.service.load(service.getAllThemes()[this.type]).subscribe(function (d) {
            _this.data = d;
          });
        }

        _createClass(ItemDetailsSpinnerPage, [{
          key: "isType",
          value: function isType(item) {
            return item === parseInt(this.type, 10);
          }
        }]);

        return ItemDetailsSpinnerPage;
      }();

      ItemDetailsSpinnerPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      ItemDetailsSpinnerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details-spinner.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-spinner/item-details-spinner.page.html"))["default"],
        providers: [_services_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details-spinner.page.scss */
        "./src/app/pages/item-details-spinner/item-details-spinner.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], ItemDetailsSpinnerPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-item-details-spinner-item-details-spinner-module-es5.js.map