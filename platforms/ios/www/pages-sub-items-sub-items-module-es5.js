(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sub-items-sub-items-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sub-items/sub-items.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sub-items/sub-items.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSubItemsSubItemsHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Back button with custom text and icon -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\" size=\"12\">\r\n        <ion-list *ngIf=\"pages.length\">\r\n          <ion-item class=\"ion-menu-toggle\" *ngFor=\"let item of pages\" (click)=\"openPage(item)\">\r\n            <ion-label>\r\n              <h1 class=\"text-size-md text-color-primary font-light\">{{item.title}}</h1>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/sub-items/sub-items.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/sub-items/sub-items.module.ts ***!
      \*****************************************************/

    /*! exports provided: SubItemsPageModule */

    /***/
    function srcAppPagesSubItemsSubItemsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubItemsPageModule", function () {
        return SubItemsPageModule;
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


      var _sub_items_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sub-items.page */
      "./src/app/pages/sub-items/sub-items.page.ts");

      var SubItemsPageModule = function SubItemsPageModule() {
        _classCallCheck(this, SubItemsPageModule);
      };

      SubItemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _sub_items_page__WEBPACK_IMPORTED_MODULE_6__["SubItemsPage"]
        }])],
        declarations: [_sub_items_page__WEBPACK_IMPORTED_MODULE_6__["SubItemsPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], SubItemsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/sub-items/sub-items.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/sub-items/sub-items.page.ts ***!
      \***************************************************/

    /*! exports provided: SubItemsPage */

    /***/
    function srcAppPagesSubItemsSubItemsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubItemsPage", function () {
        return SubItemsPage;
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


      var _services_list_view_expandable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/list-view-expandable-service */
      "./src/app/services/list-view-expandable-service.ts");
      /* harmony import */


      var _services_list_view_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/list-view-drag-and-drop-service */
      "./src/app/services/list-view-drag-and-drop-service.ts");
      /* harmony import */


      var _services_list_view_swipe_to_dismiss_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/list-view-swipe-to-dismiss-service */
      "./src/app/services/list-view-swipe-to-dismiss-service.ts");
      /* harmony import */


      var _services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/list-view-google-card-service */
      "./src/app/services/list-view-google-card-service.ts");

      var SubItemsPage = /*#__PURE__*/function () {
        // services: array
        function SubItemsPage(navCtrl, listViewExpandableService, listViewDragAndDropService, listViewSwipeToDismissService, listViewGoogleCardsService, route, router) {
          _classCallCheck(this, SubItemsPage);

          this.navCtrl = navCtrl;
          this.listViewExpandableService = listViewExpandableService;
          this.listViewDragAndDropService = listViewDragAndDropService;
          this.listViewSwipeToDismissService = listViewSwipeToDismissService;
          this.listViewGoogleCardsService = listViewGoogleCardsService;
          this.route = route;
          this.router = router;
          this.pages = {};
          this.listServices = {};
          this.listServices = {
            'expandable': this.listViewExpandableService,
            'dragAndDrop': this.listViewDragAndDropService,
            'swipeToDismiss': this.listViewSwipeToDismissService,
            'googleCards': this.listViewGoogleCardsService
          };
          this.componentName = this.route.snapshot.paramMap.get('type');
          this.service = this.listServices[this.componentName];

          if (this.service) {
            this.pages = this.service.getAllThemes();
            this.title = this.service.getTitle();
          }
        }

        _createClass(SubItemsPage, [{
          key: "openPage",
          value: function openPage(page) {
            this.navCtrl.navigateForward([page.url], {});
          }
        }]);

        return SubItemsPage;
      }();

      SubItemsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_list_view_expandable_service__WEBPACK_IMPORTED_MODULE_4__["ListViewExpandableService"]
        }, {
          type: _services_list_view_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_5__["ListViewDragAndDropService"]
        }, {
          type: _services_list_view_swipe_to_dismiss_service__WEBPACK_IMPORTED_MODULE_6__["ListViewSwipeToDismissService"]
        }, {
          type: _services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_7__["ListViewGoogleCardsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      SubItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sub-items.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sub-items/sub-items.html"))["default"],
        providers: [_services_list_view_expandable_service__WEBPACK_IMPORTED_MODULE_4__["ListViewExpandableService"], _services_list_view_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_5__["ListViewDragAndDropService"], _services_list_view_swipe_to_dismiss_service__WEBPACK_IMPORTED_MODULE_6__["ListViewSwipeToDismissService"], _services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_7__["ListViewGoogleCardsService"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_list_view_expandable_service__WEBPACK_IMPORTED_MODULE_4__["ListViewExpandableService"], _services_list_view_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_5__["ListViewDragAndDropService"], _services_list_view_swipe_to_dismiss_service__WEBPACK_IMPORTED_MODULE_6__["ListViewSwipeToDismissService"], _services_list_view_google_card_service__WEBPACK_IMPORTED_MODULE_7__["ListViewGoogleCardsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], SubItemsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-sub-items-sub-items-module-es5.js.map