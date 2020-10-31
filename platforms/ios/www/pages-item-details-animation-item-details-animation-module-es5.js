(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-animation-item-details-animation-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-animation/item-details-animation.page.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-animation/item-details-animation.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemDetailsAnimationItemDetailsAnimationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <!-- Header -->\r\n  <ion-header class=\"box-shadow\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-capitalize\">{{data.toolbarTitle}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <!-- Content -->\r\n  <ion-content>\r\n\r\n    <!-- PAGE 1 -->\r\n    <cs-animation-layout-1\r\n      *ngIf=\"isType(0)\"\r\n      [data]=\"data.items\"\r\n      (onItemClick)=\"onItemClick($event)\">\r\n    </cs-animation-layout-1>\r\n\r\n    <!-- PAGE 2 -->\r\n    <cs-animation-layout-2\r\n    *ngIf=\"isType(1)\"\r\n    [data]=\"data\"\r\n    (onItemClick)=\"onItemClick($event)\">\r\n    </cs-animation-layout-2>\r\n\r\n    <!-- PAGE 3 -->\r\n    <cs-animation-layout-3\r\n    *ngIf=\"isType(2)\"\r\n    [data]=\"data\"\r\n    (onFab)=\"onFab($event)\"\r\n    (onShare)=\"onShare($event)\"\r\n    (onLike)=\"onLike($event)\"\r\n    (onFavorite)=\"onFavorite($event)\"\r\n    (onItemClick)=\"onItemClick($event)\">\r\n    </cs-animation-layout-3>\r\n\r\n    <!-- PAGE 4 -->\r\n    <cs-animation-layout-4\r\n    *ngIf=\"isType(3)\"\r\n    [data]=\"data\"\r\n    (onFab)=\"onFab($event)\"\r\n    (onShare)=\"onShare($event)\"\r\n    (onLike)=\"onLike($event)\"\r\n    (onExplore)=\"onExplore($event)\"\r\n    (onFavorite)=\"onFavorite($event)\"\r\n    (onItemClick)=\"onItemClick($event)\">\r\n    </cs-animation-layout-4>\r\n\r\n    <!-- PAGE 5 -->\r\n    <cs-animation-layout-5\r\n    *ngIf=\"isType(4)\"\r\n    [data]=\"data\"\r\n    (onItemClick)=\"onItemClick($event)\">\r\n    </cs-animation-layout-5>\r\n\r\n    <!-- PAGE 6 -->\r\n    <cs-animation-layout-6\r\n    *ngIf=\"isType(5)\"\r\n    [data]=\"data\"\r\n    (onItemClick)=\"onItemClick($event)\">>\r\n    </cs-animation-layout-6>\r\n\r\n    <!-- PAGE 7 -->\r\n    <cs-animation-layout-7\r\n    *ngIf=\"isType(6)\"\r\n    (onComment)=\"onComment($event)\"\r\n    (onItemClick)=\"onItemClick($event)\"\r\n    (onLike)=\"onLike($event)\"\r\n    [data]=\"data\">\r\n    </cs-animation-layout-7>\r\n\r\n    <!-- PAGE 8 -->\r\n    <cs-animation-layout-8\r\n    *ngIf=\"isType(7)\"\r\n    [data]=\"data\"\r\n    (onLogin)=\"onItemClick($event)\">\r\n    </cs-animation-layout-8>\r\n\r\n    <!-- PAGE 9 -->\r\n    <cs-animation-layout-9\r\n    *ngIf=\"isType(8)\"\r\n    [data]=\"data\"\r\n    (onLogin)=\"onItemClick($event)\">\r\n    </cs-animation-layout-9>\r\n\r\n    <!-- PAGE 10 -->\r\n    <cs-animation-layout-10\r\n    *ngIf=\"isType(9)\"\r\n    [data]=\"data\"\r\n    (onFavorite)=\"onFavorite($event)\"\r\n    (onLike)=\"onLike($event)\"\r\n    (onShare)=\"onShare($event)\"\r\n    (onItemClick)=\"onItemClick($event)\">\r\n    </cs-animation-layout-10>\r\n\r\n  </ion-content>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/item-details-animation/item-details-animation.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/item-details-animation/item-details-animation.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ItemDetailsAnimationPageModule */

    /***/
    function srcAppPagesItemDetailsAnimationItemDetailsAnimationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsAnimationPageModule", function () {
        return ItemDetailsAnimationPageModule;
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


      var _item_details_animation_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-details-animation.page */
      "./src/app/pages/item-details-animation/item-details-animation.page.ts");

      var ItemDetailsAnimationPageModule = function ItemDetailsAnimationPageModule() {
        _classCallCheck(this, ItemDetailsAnimationPageModule);
      };

      ItemDetailsAnimationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _item_details_animation_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsAnimationPage"]
        }])],
        declarations: [_item_details_animation_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsAnimationPage"]],
        exports: [_item_details_animation_page__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsAnimationPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemDetailsAnimationPageModule);
      /***/
    },

    /***/
    "./src/app/pages/item-details-animation/item-details-animation.page.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/item-details-animation/item-details-animation.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesItemDetailsAnimationItemDetailsAnimationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tZGV0YWlscy1hbmltYXRpb24vaXRlbS1kZXRhaWxzLWFuaW1hdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/item-details-animation/item-details-animation.page.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/item-details-animation/item-details-animation.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: ItemDetailsAnimationPage */

    /***/
    function srcAppPagesItemDetailsAnimationItemDetailsAnimationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsAnimationPage", function () {
        return ItemDetailsAnimationPage;
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


      var _services_animation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/animation-service */
      "./src/app/services/animation-service.ts");
      /* harmony import */


      var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/toast-service */
      "./src/app/services/toast-service.ts");

      var ItemDetailsAnimationPage = /*#__PURE__*/function () {
        function ItemDetailsAnimationPage(navCtrl, service, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, ItemDetailsAnimationPage);

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

        _createClass(ItemDetailsAnimationPage, [{
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
          key: "onFab",
          value: function onFab(params) {
            this.toastCtrl.presentToast('onFab');
          }
        }, {
          key: "onShare",
          value: function onShare(params) {
            this.toastCtrl.presentToast(' onShare');
          }
        }, {
          key: "onExplore",
          value: function onExplore(params) {
            this.toastCtrl.presentToast('onExplore');
          }
        }, {
          key: "onFavorite",
          value: function onFavorite(params) {
            this.toastCtrl.presentToast('onFavorite');
          }
        }, {
          key: "buttonClick",
          value: function buttonClick(params) {
            this.toastCtrl.presentToast('Click');
          }
        }, {
          key: "onLike",
          value: function onLike(params) {
            this.toastCtrl.presentToast('onLike');
          }
        }, {
          key: "onComment",
          value: function onComment(params) {
            this.toastCtrl.presentToast('onComment');
          }
        }]);

        return ItemDetailsAnimationPage;
      }();

      ItemDetailsAnimationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_animation_service__WEBPACK_IMPORTED_MODULE_4__["AnimationService"]
        }, {
          type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ItemDetailsAnimationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details-animation.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-animation/item-details-animation.page.html"))["default"],
        providers: [_services_animation_service__WEBPACK_IMPORTED_MODULE_4__["AnimationService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details-animation.page.scss */
        "./src/app/pages/item-details-animation/item-details-animation.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_animation_service__WEBPACK_IMPORTED_MODULE_4__["AnimationService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ItemDetailsAnimationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-item-details-animation-item-details-animation-module-es5.js.map