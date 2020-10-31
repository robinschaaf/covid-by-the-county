(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-scroll-segment-item-details-scroll-segment-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-scroll-segment/item-details-scroll-segment.page.html":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-scroll-segment/item-details-scroll-segment.page.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemDetailsScrollSegmentItemDetailsScrollSegmentPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <!-- PAGE 1 -->\r\n  <cs-scroll-segment-layout-1\r\n    *ngIf=\"isType(0)\"\r\n    (onItemClick)=\"onItemClick($event)\"\r\n    (onFollowClick)=\"onFollowClick($event)\"\r\n    (onMessageClick)=\"onMessageClick($event)\"\r\n    [data]=\"data\">\r\n  </cs-scroll-segment-layout-1>\r\n\r\n  <!-- PAGE 2 -->\r\n  <cs-scroll-segment-layout-2\r\n    *ngIf=\"isType(1)\"\r\n    (onItemClick)=\"onItemClick($event)\"\r\n    (onFollowClick)=\"onFollowClick($event)\"\r\n    [data]=\"data\">\r\n  </cs-scroll-segment-layout-2>\r\n\r\n  <!-- PAGE 3 -->\r\n  <cs-scroll-segment-layout-3\r\n    *ngIf=\"isType(2)\"\r\n    (onItemClick)=\"onItemClick($event)\"\r\n    [data]=\"data\">\r\n  </cs-scroll-segment-layout-3>\r\n\r\n    <!-- PAGE 4 -->\r\n    <cs-scroll-segment-layout-4\r\n    *ngIf=\"isType(3)\"\r\n    (onItemClick)=\"onItemClick($event)\"\r\n    (onFollowClick)=\"onFollowClick($event)\"\r\n    (onMessageClick)=\"onMessageClick($event)\"\r\n    [data]=\"data\">\r\n  </cs-scroll-segment-layout-4>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/item-details-scroll-segment/item-details-scroll-segment.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/item-details-scroll-segment/item-details-scroll-segment.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ItemDetailsScrollSegmentPageModule */

    /***/
    function srcAppPagesItemDetailsScrollSegmentItemDetailsScrollSegmentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsScrollSegmentPageModule", function () {
        return ItemDetailsScrollSegmentPageModule;
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
      /*! ../../components/shared.module */
      "./src/app/components/shared.module.ts");
      /* harmony import */


      var _item_details_scroll_segment_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-details-scroll-segment.page */
      "./src/app/pages/item-details-scroll-segment/item-details-scroll-segment.page.ts");

      var ItemDetailsScrollSegmentPageModule = function ItemDetailsScrollSegmentPageModule() {
        _classCallCheck(this, ItemDetailsScrollSegmentPageModule);
      };

      ItemDetailsScrollSegmentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _item_details_scroll_segment_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsScrollSegmentPage"]
        }])],
        declarations: [_item_details_scroll_segment_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsScrollSegmentPage"]],
        exports: [_item_details_scroll_segment_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsScrollSegmentPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemDetailsScrollSegmentPageModule);
      /***/
    },

    /***/
    "./src/app/pages/item-details-scroll-segment/item-details-scroll-segment.page.scss":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/item-details-scroll-segment/item-details-scroll-segment.page.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesItemDetailsScrollSegmentItemDetailsScrollSegmentPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1zY3JvbGwtc2VnbWVudC9pdGVtLWRldGFpbHMtc2Nyb2xsLXNlZ21lbnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/item-details-scroll-segment/item-details-scroll-segment.page.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/item-details-scroll-segment/item-details-scroll-segment.page.ts ***!
      \***************************************************************************************/

    /*! exports provided: ItemDetailsScrollSegmentPage */

    /***/
    function srcAppPagesItemDetailsScrollSegmentItemDetailsScrollSegmentPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsScrollSegmentPage", function () {
        return ItemDetailsScrollSegmentPage;
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


      var _services_scroll_segment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/scroll-segment-service */
      "./src/app/services/scroll-segment-service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/toast-service */
      "./src/app/services/toast-service.ts");

      var ItemDetailsScrollSegmentPage = /*#__PURE__*/function () {
        function ItemDetailsScrollSegmentPage(navCtrl, service, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, ItemDetailsScrollSegmentPage);

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

        _createClass(ItemDetailsScrollSegmentPage, [{
          key: "isType",
          value: function isType(item) {
            return item === parseInt(this.type, 10);
          }
        }, {
          key: "onItemClick",
          value: function onItemClick(params) {
            this.toastCtrl.presentToast('onItemClick:' + JSON.stringify(params));
          }
        }, {
          key: "onFollowClick",
          value: function onFollowClick(params) {
            this.toastCtrl.presentToast('onFollowClick');
          }
        }, {
          key: "onMessageClick",
          value: function onMessageClick(params) {
            this.toastCtrl.presentToast('onMessageClick');
          }
        }]);

        return ItemDetailsScrollSegmentPage;
      }();

      ItemDetailsScrollSegmentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_scroll_segment_service__WEBPACK_IMPORTED_MODULE_4__["ScrollSegmentService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ItemDetailsScrollSegmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details-scroll-segment.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-scroll-segment/item-details-scroll-segment.page.html"))["default"],
        providers: [_services_scroll_segment_service__WEBPACK_IMPORTED_MODULE_4__["ScrollSegmentService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details-scroll-segment.page.scss */
        "./src/app/pages/item-details-scroll-segment/item-details-scroll-segment.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_scroll_segment_service__WEBPACK_IMPORTED_MODULE_4__["ScrollSegmentService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ItemDetailsScrollSegmentPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-item-details-scroll-segment-item-details-scroll-segment-module-es5.js.map