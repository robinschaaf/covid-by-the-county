(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic-super-tabs/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic-super-tabs/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \****************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicSuperTabsCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./super-tab-button_2.entry.js": ["./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-button_2.entry.js", "common", 0],
        "./super-tab-indicator.entry.js": ["./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-indicator.entry.js", 1],
        "./super-tab_3.entry.js": ["./node_modules/@ionic-super-tabs/core/dist/esm/super-tab_3.entry.js", "common", 2]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic-super-tabs/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 3],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 4],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 5],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 6],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 7],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 8],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 9],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 10],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 11],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 12],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 13],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 14],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 15],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 16],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 17],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 18],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 19],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 20],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 21],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 22],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 23],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 24],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 25],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 26],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 27],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 28],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 29],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 30],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 31],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 32],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 33],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 34],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 35],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 36],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 37],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 38],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 39],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 40],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 41],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 42],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 43],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 44],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 45]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu side=\"start\" contentId=\"main-content\" type=\"overlay\">\r\n      <!-- Settings Toolbar -->\r\n      <ion-header class=\"background-size\"\r\n      [ngStyle]=\"{'background-image': 'url(' + headerMenuItem.background + ')'}\">\r\n          <ion-item class=\"transparent ion-text-center\" lines=\"none\">\r\n            <ion-label class=\"ion-text-center text-size-md text-color-light font-bold ion-text-wrap\">\r\n                <img class=\"ion-margin-bottom\" [src]=\"headerMenuItem.image\">\r\n                <div class=\"clearfix ion-margin-top ion-padding-bottom ion-padding-top\"></div>\r\n                {{headerMenuItem.title}}\r\n            </ion-label>\r\n          </ion-item>\r\n      </ion-header>\r\n      <!-- Content -->\r\n      <ion-content>\r\n        <ion-grid class=\"ion-no-padding\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n              <!-- Menu List -->\r\n              <ion-list>\r\n                <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\r\n                  <ion-item [routerDirection]=\"'root'\" (click)=\"openPage(p)\">\r\n                    <i class=\"icon {{p.icon}} icon-small\"></i>\r\n                    <ion-label>\r\n                      <h1 class=\"text-size-md text-color-primary font-light\">{{p.title}}</h1>\r\n                    </ion-label>\r\n                  </ion-item>\r\n                </ion-menu-toggle>\r\n              </ion-list>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-home-home-module */
          [__webpack_require__.e("default~pages-home-home-module~pages-info-page-info-page-module~pages-settings-page-settings-page-module"), __webpack_require__.e("default~pages-home-home-module~pages-settings-page-settings-page-module"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'info-page',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-info-page-info-page-module */
          [__webpack_require__.e("default~pages-home-home-module~pages-info-page-info-page-module~pages-settings-page-settings-page-module"), __webpack_require__.e("pages-info-page-info-page-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/info-page/info-page.module */
          "./src/app/pages/info-page/info-page.module.ts")).then(function (m) {
            return m.InfoPageModule;
          });
        }
      }, {
        path: 'settings-page',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-settings-page-settings-page-module */
          [__webpack_require__.e("default~pages-home-home-module~pages-info-page-info-page-module~pages-settings-page-settings-page-module"), __webpack_require__.e("default~pages-home-home-module~pages-settings-page-settings-page-module"), __webpack_require__.e("pages-settings-page-settings-page-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/settings-page/settings-page.module */
          "./src/app/pages/settings-page/settings-page.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".background-size {\n  height: 200px;\n  position: relative;\n}\n\n.background-size::before {\n  content: \"\";\n  display: block;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(33, 33, 33, 0.7) 100%);\n}\n\n.background-size ion-item {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  --color: var(--cs-text-primary, #ffffff);\n}\n\n.background-size ion-item img {\n  max-width: 185px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFIQTtFQUtJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsNkZBQStGO0FBRW5HOztBQWZBO0VBaUJJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsd0NBQVE7QUFFWjs7QUF4QkE7RUF5Qk0sZ0JBQWdCO0FBR3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtc2l6ZSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCwpIDAlLCByZ2JhKDMzLCAzMywgMzMsIDAuNywpIDEwMCUpO1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLS1jb2xvcjogdmFyKC0tY3MtdGV4dC1wcmltYXJ5LCAjZmZmZmZmKTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDE4NXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _services_export_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/export-service */
      "./src/app/services/export-service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/menu-service */
      "./src/app/services/menu-service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, menuService, exportService, navController) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.menuService = menuService;
          this.exportService = exportService;
          this.navController = navController;
          this.appPages = [];
          this.headerMenuItem = {
            'image': '',
            'title': '',
            'background': ''
          };
          this.isEnabledRTL = false;
          this.isEnabledRTL = localStorage.getItem('isEnabledRTL') == "true"; //console.log(JSON.stringify(exportService.export()));

          this.initializeApp();
          this.appPages = this.menuService.getAllThemes();
          this.headerMenuItem = this.menuService.getDataForTheme(null);
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.overlaysWebView(true);

              _this.statusBar.backgroundColorByHexString('#000000');

              _this.splashScreen.hide();

              _this.setRTL();
            });
          }
        }, {
          key: "setRTL",
          value: function setRTL() {
            document.getElementsByTagName('html')[0].setAttribute('dir', this.isEnabledRTL ? 'rtl' : 'ltr');
          }
        }, {
          key: "openPage",
          value: function openPage(page) {
            this.navController.navigateRoot([page.url], {});
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
        }, {
          type: _services_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"]
        }, {
          type: _services_export_service__WEBPACK_IMPORTED_MODULE_2__["ExportService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        providers: [_services_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"], _services_export_service__WEBPACK_IMPORTED_MODULE_2__["ExportService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _services_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"], _services_export_service__WEBPACK_IMPORTED_MODULE_2__["ExportService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: RestangularConfigFactory, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestangularConfigFactory", function () {
        return RestangularConfigFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _services_app_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/toast-service */
      "./src/app/services/toast-service.ts");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/loading-service */
      "./src/app/services/loading-service.ts");
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "./node_modules/@ionic-super-tabs/angular/__ivy_ngcc__/fesm2015/ionic-super-tabs-angular.js");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var ngx_restangular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-restangular */
      "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
      /* harmony import */


      var _pages_settings_page_settings_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./pages/settings-page/settings.service */
      "./src/app/pages/settings-page/settings.service.ts"); //import {PluralPipe} from './pages/home/pluralize.pipe'
      // Function for setting the default restangular configuration


      function RestangularConfigFactory(RestangularProvider) {
        RestangularProvider.setBaseUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].api_url);
        RestangularProvider.setDefaultHeaders({
          Authorization: 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'
        });
      }

      console.log('Environment', _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"]);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_services_app_settings__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].FIREBASE_CONFIG), _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_15__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_18__["IonicStorageModule"].forRoot(), _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_19__["SuperTabsModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ngx_restangular__WEBPACK_IMPORTED_MODULE_22__["RestangularModule"].forRoot(RestangularConfigFactory), _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_17__["BarcodeScanner"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _services_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_14__["LoadingService"], _pages_settings_page_settings_service__WEBPACK_IMPORTED_MODULE_23__["SettingsService"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/pages/settings-page/settings.service.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/settings-page/settings.service.ts ***!
      \*********************************************************/

    /*! exports provided: SettingsService */

    /***/
    function srcAppPagesSettingsPageSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
        return SettingsService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var SettingsService = /*#__PURE__*/function () {
        function SettingsService() {
          _classCallCheck(this, SettingsService);

          this.settingsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.settings$ = this.settingsSubject.asObservable();
        }

        _createClass(SettingsService, [{
          key: "publishSettings",
          value: function publishSettings(data) {
            this.settingsSubject.next(data);
          }
        }]);

        return SettingsService;
      }();

      SettingsService.ctorParameters = function () {
        return [];
      };

      SettingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SettingsService);
      /***/
    },

    /***/
    "./src/app/services/action-sheet-service.ts":
    /*!**************************************************!*\
      !*** ./src/app/services/action-sheet-service.ts ***!
      \**************************************************/

    /*! exports provided: ActionSheetService */

    /***/
    function srcAppServicesActionSheetServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionSheetService", function () {
        return ActionSheetService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var ActionSheetService = /*#__PURE__*/function () {
        function ActionSheetService(af, loadingService) {
          var _this2 = this;

          _classCallCheck(this, ActionSheetService);

          this.af = af;
          this.loadingService = loadingService;

          this.getId = function () {
            return 'actionSheet';
          };

          this.getTitle = function () {
            return 'Action Sheet';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'action-sheet/0',
              'title': 'Basic',
              'theme': 'layout1'
            }, {
              'url': 'action-sheet/1',
              'title': 'News',
              'theme': 'layout2'
            }, {
              'url': 'action-sheet/2',
              'title': 'With Text Header',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this2['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Basic',
              "headerImage": "assets/imgs/background/6.jpg",
              "actionSheet": {
                "buttons": [{
                  "text": "Mark as read",
                  "role": "destructive"
                }, {
                  "text": "Follow author"
                }, {
                  "text": "Read more info"
                }, {
                  "text": "More from category"
                }, {
                  "text": "Cancel",
                  "role": "cancel"
                }]
              },
              "items": [{
                "id": 1,
                "title": "Super & Black",
                "subtitle": "Available Now",
                "category": "NEW OFFER",
                "button": "$63.99",
                "shareIcon": "ellipsis-horizontal",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                "productDescriptions": [{
                  "id": 1,
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                }, {
                  "id": 2,
                  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }, {
                  "id": 3,
                  "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                }, {
                  "id": 4,
                  "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                }]
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'News',
              "headerImage": "assets/imgs/background/21.jpg",
              "title": "Infinit bridge made in China.",
              "subtitle": "by Victoria Kuijpers",
              "category": "ENGINEERING",
              "avatar": "assets/imgs/avatar/20.jpg",
              "shareIcon": "ellipsis-horizontal",
              "actionSheet": {
                "buttons": [{
                  "text": "Mark as read",
                  "role": "destructive"
                }, {
                  "text": "Follow author"
                }, {
                  "text": "Read more info"
                }, {
                  "text": "More from category"
                }, {
                  "text": "Cancel",
                  "role": "cancel"
                }]
              },
              "items": [{
                "id": 1,
                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }, {
                "id": 2,
                "title": "Lorem ipsum dolor sit amet",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }, {
                "id": 3,
                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
              }, {
                "id": 4,
                "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'With Text Header',
              "shareIcon": "ellipsis-horizontal",
              "actionSheet": {
                "title": "Choose what to do with this card?",
                "buttons": [{
                  "text": "Mark as read",
                  "role": "destructive"
                }, {
                  "text": "Follow author"
                }, {
                  "text": "Read more info"
                }, {
                  "text": "More from category"
                }, {
                  "text": "Cancel",
                  "role": "cancel"
                }]
              },
              "items": [{
                "id": 1,
                "category": "best offer",
                "image": "assets/imgs/background/14.jpg",
                "title": "Free Ride Tour",
                "subtitle": "West Avenue, NYC",
                "button": "$35.99"
              }, {
                "id": 2,
                "category": "main event",
                "image": "assets/imgs/background/11.jpg",
                "title": "Open Air Concert",
                "subtitle": "Hyde Park, London",
                "button": "$12.99"
              }, {
                "id": 3,
                "category": "Best Tourt",
                "image": "assets/imgs/background/21.jpg",
                "title": "Sea ture",
                "subtitle": "Guilin, Kweilin",
                "button": "$13.45"
              }, {
                "id": 4,
                "category": "Mountain",
                "image": "assets/imgs/background/7.jpg",
                "title": "Mountain Trout",
                "subtitle": "SMountain Trout Camp",
                "button": "$38.60"
              }, {
                "id": 5,
                "category": "Bridge Tour",
                "image": "assets/imgs/background/5.jpg",
                "title": "Bridge Tour",
                "subtitle": "BridgeClimb, Sydney",
                "button": "$40.85"
              }, {
                "id": 6,
                "category": "best events",
                "image": "assets/imgs/background/2.jpg",
                "title": "Main Stage Event",
                "subtitle": "Hyde Park, London ",
                "button": "$56.55"
              }]
            };
          };
        }

        _createClass(ActionSheetService, [{
          key: "load",
          value: function load(item) {
            var _this3 = this;

            var that = this;
            that.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this3.af.object('actionSheet/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  that.loadingService.hide();
                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  that.loadingService.hide();
                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this3.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return ActionSheetService;
      }();

      ActionSheetService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      ActionSheetService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], ActionSheetService);
      /***/
    },

    /***/
    "./src/app/services/alert-service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/alert-service.ts ***!
      \*******************************************/

    /*! exports provided: AlertService */

    /***/
    function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./toast-service */
      "./src/app/services/toast-service.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var AlertService = /*#__PURE__*/function () {
        function AlertService(af, loadingService, toastCtrl) {
          var _this4 = this;

          _classCallCheck(this, AlertService);

          this.af = af;
          this.loadingService = loadingService;
          this.toastCtrl = toastCtrl;

          this.getId = function () {
            return 'alert';
          };

          this.getTitle = function () {
            return 'Alert';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'alert/0',
              'title': 'Alert Info',
              'theme': 'layout1'
            }, {
              'url': 'alert/1',
              'title': 'Alert Warning',
              'theme': 'layout2'
            }, {
              'url': 'alert/2',
              'title': 'Alert Subscribe',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this4['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Alert Info',
              "items": [{
                "id": 1,
                "image": "assets/imgs/background/9.jpg",
                "title": "Smart Watch",
                "subtitle": "Category: Watch"
              }, {
                "id": 2,
                "image": "assets/imgs/background/6.jpg",
                "title": "Digital Watch",
                "subtitle": "Category: Watch"
              }, {
                "id": 3,
                "image": "assets/imgs/background/21.jpg",
                "title": "Longest bridge in world",
                "subtitle": "Category: Bridge"
              }, {
                "id": 4,
                "image": "assets/imgs/background/10.jpg",
                "title": "Classical guitar",
                "subtitle": "Category: Guitars"
              }, {
                "id": 4,
                "image": "assets/imgs/background/13.jpg",
                "title": "Bass guitars",
                "subtitle": "Category: Guitars"
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Alert Warning',
              "items": [{
                "id": 1,
                "category": "best offer",
                "image": "assets/imgs/background/34.jpg",
                "title": "New Floral Printing Slim Turndown Neck ",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "numberLike": "12",
                "numberCommnet": "4"
              }, {
                "id": 2,
                "category": "best offer",
                "image": "assets/imgs/background/35.jpg",
                "title": "Lapel Patchwork Long Sleeve Shirt",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "numberLike": "12",
                "numberCommnet": "4"
              }, {
                "id": 3,
                "category": "best offer",
                "image": "assets/imgs/background/36.jpg",
                "title": "Tidebuy Unique Floral Mens Casual Shirt",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "numberLike": "12",
                "numberCommnet": "4"
              }, {
                "id": 4,
                "category": "best offer",
                "image": "assets/imgs/background/16.jpg",
                "title": "Plain Lapel Single Breasted Mens Shirt",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "numberLike": "12",
                "numberCommnet": "4"
              }, {
                "id": 5,
                "category": "best offer",
                "image": "assets/imgs/background/38.jpg",
                "title": "Oblique Single Breasted Mens Slim Shirt",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "numberLike": "12",
                "numberCommnet": "4"
              }, {
                "id": 6,
                "category": "best offe",
                "image": "assets/imgs/background/37.jpg",
                "title": "Embroidery Lapel Straight Mens Shirt",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "numberLike": "12",
                "numberCommnet": "4"
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Alert Subscribe',
              "items": [{
                "id": 1,
                "image": "assets/imgs/background/14.jpg",
                "time": "MARCH 14, 2017",
                "title": "James Brown at Boston Garden",
                "description": "On April 4th, 1968, Martin Luther King Jr. was assassinated in Memphis. In the aftermath, America burned...",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "numberLike": "12",
                "numberCommnet": "4"
              }, {
                "id": 2,
                "image": "assets/imgs/background/15.jpg",
                "time": "MARCH 14, 2017",
                "title": "Elvis Comeback Special",
                "description": "Elvis was hardly ever nervous,” says drummer D.J. Fontana, remembering the NBC special that relaunched...",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "numberLike": "12",
                "numberCommnet": "4"
              }, {
                "id": 3,
                "image": "assets/imgs/background/13.jpg",
                "time": "MARCH 14, 2017",
                "title": "Cream Farewell Tour",
                "description": "Eric Clapton ended Cream in 1968 after only two years, burned out and sick of keeping the peace between...",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "numberLike": "12",
                "numberCommnet": "4"
              }, {
                "id": 4,
                "image": "assets/imgs/background/11.jpg",
                "time": "MARCH 14, 2017",
                "title": "Led Zeppelin World Tour",
                "description": "Before the private planes, mountains of cocaine and allegations of black magic, Led Zeppelin were four...",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "numberLike": "12",
                "numberCommnet": "4"
              }, {
                "id": 5,
                "image": "assets/imgs/background/10.jpg",
                "time": "MARCH 14, 2017",
                "title": "Black Sabbath American Tour",
                "description": "When Black Sabbath landed at JFK Airport for their first U.S. tour, Ozzy Osbourne scrawled “Satanist” as his...",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "numberLike": "12",
                "numberCommnet": "4"
              }, {
                "id": 6,
                "image": "assets/imgs/background/15.jpg",
                "time": "MARCH 14, 2017",
                "title": "Elton John at the Troubadour",
                "description": "When Elton John took the stage at Los Angeles’ Troubadour for the first night of his six-date residency...",
                "iconLike": "heart",
                "iconComment": "chatbubbles",
                "numberLike": "12",
                "numberCommnet": "4"
              }]
            };
          };
        }

        _createClass(AlertService, [{
          key: "load",
          value: function load(item) {
            var _this5 = this;

            var that = this;
            that.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this5.af.object('alert/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  that.loadingService.hide();
                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  that.loadingService.hide();
                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this5.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return AlertService;
      }();

      AlertService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])], AlertService);
      /***/
    },

    /***/
    "./src/app/services/animation-service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/animation-service.ts ***!
      \***********************************************/

    /*! exports provided: AnimationService */

    /***/
    function srcAppServicesAnimationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationService", function () {
        return AnimationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var AnimationService = /*#__PURE__*/function () {
        function AnimationService(af, loadingService) {
          var _this6 = this;

          _classCallCheck(this, AnimationService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Animation';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'animation/0',
              'title': 'FadeIn Right',
              'theme': 'layout1'
            }, {
              'url': 'animation/1',
              'title': 'FadeIn Left',
              'theme': 'layout2'
            }, {
              'url': 'animation/2',
              'title': 'BounceIn',
              'theme': 'layout3'
            }, {
              'url': 'animation/3',
              'title': 'FadeInUp',
              'theme': 'layout4'
            }, {
              'url': 'animation/4',
              'title': 'ZoomIn',
              'theme': 'layout5'
            }, {
              'url': 'animation/5',
              'title': 'ZoomIn and FadeIn Left',
              'theme': 'layout6'
            }, {
              'url': 'animation/6',
              'title': 'BounceIn Right',
              'theme': 'layout7'
            }, {
              'url': 'animation/7',
              'title': 'BounceIn Left and BounceIn Left',
              'theme': 'layout8'
            }, {
              'url': 'animation/8',
              'title': 'SlideIn Up',
              'theme': 'layout9'
            }, {
              'url': 'animation/9',
              'title': 'SlideIn Left',
              'theme': 'layout10'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this6['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'FadeIn Right',
              'items': [{
                "id": 1,
                "title": "New York",
                "subtitle": "United States",
                "detail": "General Electric",
                "isChecked": true
              }, {
                "id": 2,
                "title": "Maranello",
                "subtitle": "Italy",
                "detail": "Ferrari",
                "isChecked": false
              }, {
                "id": 3,
                "title": "Boston",
                "subtitle": "United States",
                "detail": "Gillette",
                "isChecked": true
              }, {
                "id": 4,
                "title": "Munich",
                "subtitle": "Germany",
                "detail": "Siemens AG",
                "isChecked": false
              }, {
                "id": 5,
                "title": "Seul",
                "subtitle": "South Korea",
                "detail": "Hyundai",
                "isChecked": false
              }, {
                "id": 6,
                "title": "Herzogenaurach",
                "subtitle": "Germany",
                "detail": "Adidas",
                "isChecked": true
              }, {
                "id": 7,
                "title": "Redwood City",
                "subtitle": "United States",
                "detail": "Oracle Corporation",
                "isChecked": false
              }, {
                "id": 8,
                "title": "Amsterdam",
                "subtitle": "Netherlands",
                "detail": "Heineken Brewery",
                "isChecked": true
              }, {
                "id": 9,
                "title": "Tokyo",
                "subtitle": "Japan",
                "detail": "Canon",
                "isChecked": false
              }, {
                "id": 10,
                "title": "London",
                "subtitle": "United Kingdom",
                "detail": "Vodafone",
                "isChecked": false
              }, {
                "id": 11,
                "title": "Florence",
                "subtitle": "Italy",
                "detail": "Gucci",
                "isChecked": true
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'BounceIn',
              "items": [{
                "title": "iPhone 8",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/1.jpg",
                "button": "BUY"
              }, {
                "title": "500+",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/2.jpg",
                "button": "BUY"
              }, {
                "title": "watch black",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/3.jpg",
                "button": "BUY"
              }, {
                "title": "canon photoaparat",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/4.jpg",
                "button": "BUY"
              }, {
                "title": "50mm",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/5.jpg",
                "button": "BUY"
              }, {
                "title": "nikon photoaparat",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/6.jpg",
                "button": "BUY"
              }, {
                "title": "sony PS 4",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/7.jpg",
                "button": "BUY"
              }, {
                "title": "watch new",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/8.jpg",
                "button": "BUY"
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'FadeInUp',
              "items": [{
                "id": 1,
                "title": "Free Ride",
                "backgroundImage": "assets/imgs/background/2.jpg",
                "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
              }, {
                "id": 2,
                "title": "Bridge Tour",
                "backgroundImage": "assets/imgs/background/5.jpg",
                "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
              }, {
                "id": 3,
                "title": "Sea Tour",
                "backgroundImage": "assets/imgs/background/21.jpg",
                "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
              }, {
                "id": 4,
                "title": "Main Stage Event",
                "backgroundImage": "assets/imgs/background/7.jpg",
                "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
              }, {
                "id": 5,
                "title": "Classic Open Air",
                "backgroundImage": "assets/imgs/background/11.jpg",
                "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
              }, {
                "id": 6,
                "title": "Concert Summer",
                "backgroundImage": "assets/imgs/background/14.jpg",
                "description": "LCras odio felis, blandit sit amet mi nec, euismod mattis tellus."
              }, {
                "id": 7,
                "title": "Open Air Concerts",
                "backgroundImage": "assets/imgs/background/10.jpg",
                "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.."
              }]
            };
          }; //* Data Set for page 4


          this.getDataForLayout4 = function () {
            return {
              'toolbarTitle': 'Styled cards 2',
              "items": [{
                "id": 1,
                "title": "Digital Watch",
                "subtitle": "Category: Watch",
                "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                "image": "assets/imgs/background/6.jpg",
                "price": "$144.50",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
              }, {
                "id": 2,
                "title": "Android Watch",
                "subtitle": "Category: Watch",
                "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
                "image": "assets/imgs/background/9.jpg",
                "price": "$130.99",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
              }, {
                "id": 3,
                "title": "Acoustic Guitars",
                "subtitle": "Category: Guitars",
                "description": "Icero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
                "image": "assets/imgs/background/10.jpg",
                "price": "$354.05",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
              }, {
                "id": 4,
                "title": "Bass guitar",
                "subtitle": "Category: Guitars",
                "description": "Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
                "image": "assets/imgs/background/13.jpg",
                "price": "$338.99",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
              }, {
                "id": 5,
                "title": "Classical guitar",
                "subtitle": "Category: Guitars",
                "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                "image": "assets/imgs/background/15.jpg",
                "price": "$109.60",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
              }]
            };
          }; //* Data Set for page 5


          this.getDataForLayout5 = function () {
            return {
              'toolbarTitle': 'ZoomIn',
              "items": [{
                "id": 1,
                "category": "best offer",
                "image": "assets/imgs/background/11.jpg",
                "title": "Free Ride Tour",
                "subtitle": "West Avenue, NYC",
                "button": "$135.99"
              }, {
                "id": 2,
                "category": "main event",
                "image": "assets/imgs/background/14.jpg",
                "title": "Open Air Concert",
                "subtitle": "Hyde Park, London",
                "button": "$312.99"
              }, {
                "id": 3,
                "category": "Best Tourt",
                "image": "assets/imgs/background/21.jpg",
                "title": "Sea ture",
                "subtitle": "Guilin, Kweilin",
                "button": "$213.45"
              }, {
                "id": 4,
                "category": "Mountain",
                "image": "assets/imgs/background/7.jpg",
                "title": "Mountain Trout",
                "subtitle": "Mountain Trout Camp",
                "button": "$338.60"
              }, {
                "id": 5,
                "category": "Bridge Tour",
                "image": "assets/imgs/background/5.jpg",
                "title": "Bridge Tour",
                "subtitle": "BridgeClimb, Sydney",
                "button": "$410.85"
              }, {
                "id": 6,
                "category": "best events",
                "image": "assets/imgs/background/2.jpg",
                "title": "Main Stage Event",
                "subtitle": "Hyde Park, London ",
                "button": "$516.55"
              }]
            };
          }; //* Data Set for page 6


          this.getDataForLayout6 = function () {
            return {
              'toolbarTitle': 'ZoomIn and FadeIn Left',
              "headerImage": "assets/imgs/background/9.jpg",
              "title": "Engage real-time",
              "subtitle": "Startup Pitches",
              "items": [{
                "id": 1,
                "title": "Victoria Simpson",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/9.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 2,
                "title": "Samantha Reynolds",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/10.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 3,
                "title": "Stacey Harris",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/11.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 4,
                "title": "Jacqueline Guyon",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/12.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 5,
                "title": "Mia Langevoort",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/13.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 6,
                "title": "Amy Simsek",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/14.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 7,
                "title": "Charlotte Sital",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/15.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 8,
                "title": "Iria Padrón",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/16.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 9,
                "title": "Laura Sarabia",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/17.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 10,
                "title": "Alexia Bañuelos",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/18.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 11,
                "title": "Erika Quiroz",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/19.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 12,
                "title": "Emma Banda",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/20.jpg",
                "imageAlt": "Presque Isle Harbor",
                "button": "Read"
              }]
            };
          }; //* Data Set for page 7


          this.getDataForLayout7 = function () {
            return {
              'toolbarTitle': 'BounceIn Right',
              "image": "assets/imgs/avatar/20.jpg",
              "title": "Samantha Kennedy",
              "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
              "category": "populary",
              "items": [{
                "id": 1,
                "category": "Engineering News",
                "title": "Small flying robots haul heavy loads",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbox-ellipses",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }, {
                "id": 2,
                "category": "Bioengineering News",
                "title": "Creating custom brains from the ground up",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbox-ellipses",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }, {
                "id": 3,
                "category": "Energy and Resources News",
                "title": "3D-printed lithium-ion batteries",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbox-ellipses",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }]
            };
          }; //* Data Set for page 8


          this.getDataForLayout8 = function () {
            return {
              'toolbarTitle': 'BounceIn Left and BounceIn Left',
              "headerImage": "assets/imgs/background/9.jpg",
              "shareIcon": "ellipsis-horizontal",
              "items": [{
                "id": 1,
                "category": "NEW OFFER",
                "title": "Super & Black",
                "titleDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy",
                "subtitle": "Available Now",
                "button": "$63.99",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "product": [{
                  "title": "iPhone 8",
                  "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "avatar": "assets/imgs/avatar/1.jpg",
                  "button": "BUY"
                }, {
                  "title": "500+",
                  "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "avatar": "assets/imgs/avatar/2.jpg",
                  "button": "BUY"
                }, {
                  "title": "watch black",
                  "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "avatar": "assets/imgs/avatar/3.jpg",
                  "button": "BUY"
                }, {
                  "title": "canon photoaparat",
                  "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "avatar": "assets/imgs/avatar/4.jpg",
                  "button": "BUY"
                }, {
                  "title": "50mm",
                  "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "avatar": "assets/imgs/avatar/5.jpg",
                  "button": "BUY"
                }, {
                  "title": "nikon photoaparat",
                  "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "avatar": "assets/imgs/avatar/6.jpg",
                  "button": "BUY"
                }, {
                  "title": "sony PS 4",
                  "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "avatar": "assets/imgs/avatar/7.jpg",
                  "button": "BUY"
                }, {
                  "title": "watch new",
                  "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "avatar": "assets/imgs/avatar/8.jpg",
                  "button": "BUY"
                }]
              }]
            };
          }; //* Data Set for page 9


          this.getDataForLayout9 = function () {
            return {
              'toolbarTitle': 'SlideIn Up',
              'allComments': '2121 Comments',
              'items': [{
                'id': 1,
                'image': 'assets/imgs/avatar/16.jpg',
                'title': 'Erica Romaguera',
                'time': '18 August 2018 at 12:20pm',
                'description': 'If you could have any kind of pet, what would you choose?'
              }, {
                'id': 2,
                'image': 'assets/imgs/avatar/15.jpg',
                'title': 'Caleigh Jerde',
                'time': '18 August 2018 at 8:13pm',
                'description': 'If you could learn any language, what would you choose?'
              }, {
                'id': 3,
                'image': 'assets/imgs/avatar/14.jpg',
                'title': 'Lucas Schultz',
                'time': '18 August 2018 at 5:22pm',
                'description': 'Life is about making an impact, not making an income.'
              }, {
                'id': 4,
                'image': 'assets/imgs/avatar/13.jpg',
                'title': 'Carole Marvin',
                'time': '18 August 2018 at 7:36am',
                'description': "I\u2019ve learned that people will forget what you said,\n               people will forget what you did, but people will never forget how you made them feel"
              }, {
                'id': 5,
                'image': 'assets/imgs/avatar/12.jpg',
                'title': 'Doriana Feeney',
                'time': '18 August 2018 at 5:28am',
                'description': 'Definiteness of purpose is the starting point of all achievement.'
              }, {
                'id': 6,
                'image': 'assets/imgs/avatar/11.jpg',
                'title': 'Nia Gutkowski',
                'time': '18 August 2018 at 11:27pm',
                'description': 'Life is what happens to you while you’re busy making other plans'
              }, {
                'id': 7,
                'image': 'assets/imgs/avatar/15.jpg',
                'title': 'Caleigh Jerde',
                'time': '18 August 2018 at 8:13pm',
                'description': 'If you could learn any language, what would you choose?'
              }, {
                'id': 8,
                'image': 'assets/imgs/avatar/14.jpg',
                'title': 'Lucas Schultz',
                'time': '18 August 2018 at 5:22pm',
                'description': 'Life is about making an impact, not making an income.'
              }, {
                'id': 9,
                'image': 'assets/imgs/avatar/13.jpg',
                'title': 'Carole Marvin',
                'time': '18 August 2018 at 7:36am',
                'description': "I\u2019ve learned that people will forget what you said,\n               people will forget what you did, but people will never forget how you made them feel"
              }, {
                'id': 10,
                'image': 'assets/imgs/avatar/12.jpg',
                'title': 'Doriana Feeney',
                'time': '18 August 2018 at 5:28am',
                'description': 'Definiteness of purpose is the starting point of all achievement.'
              }, {
                'id': 11,
                'image': 'assets/imgs/avatar/11.jpg',
                'title': 'Nia Gutkowski',
                'time': '18 August 2018 at 11:27pm',
                'description': 'Life is what happens to you while you’re busy making other plans'
              }]
            };
          }; //* Data Set for page 10


          this.getDataForLayout10 = function () {
            return {
              'toolbarTitle': 'SlideIn Left',
              "header": "List friends",
              "items": [{
                "id": 1,
                "title": "Erica Romaguera",
                "subtitle": "@erica",
                "image": "assets/imgs/avatar/13.jpg"
              }, {
                "id": 2,
                "title": "Nia Gutkowski",
                "subtitle": "@nia234",
                "image": "assets/imgs/avatar/14.jpg"
              }, {
                "id": 3,
                "title": "Camila Hintz",
                "subtitle": "@camila",
                "image": "assets/imgs/avatar/15.jpg"
              }, {
                "id": 4,
                "title": "Anna Yost",
                "subtitle": "@anna",
                "image": "assets/imgs/avatar/16.jpg"
              }, {
                "id": 5,
                "title": "Georgianna Baumbach",
                "subtitle": "@georgianna",
                "image": "assets/imgs/avatar/17.jpg"
              }, {
                "id": 6,
                "title": "Jaqueline Stehr",
                "subtitle": "@jaqueline",
                "image": "assets/imgs/avatar/18.jpg"
              }, {
                "id": 7,
                "title": "Naomi Mante",
                "subtitle": "@naomi",
                "image": "assets/imgs/avatar/19.jpg"
              }, {
                "id": 8,
                "title": "Amaya Abshire",
                "subtitle": "@amaya",
                "image": "assets/imgs/avatar/20.jpg"
              }, {
                "id": 9,
                "title": "Rickie Glover",
                "subtitle": "@rickie",
                "image": "assets/imgs/avatar/21.jpg"
              }, {
                "id": 10,
                "title": "Antone Mayert",
                "subtitle": "@antone",
                "image": "assets/imgs/avatar/22.jpg"
              }, {
                "id": 11,
                "title": "Alison Streich",
                "subtitle": "@alison",
                "image": "assets/imgs/avatar/23.jpg"
              }]
            };
          };
        }

        _createClass(AnimationService, [{
          key: "load",
          value: function load(item) {
            var _this7 = this;

            var that = this;
            that.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this7.af.object('animation/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  that.loadingService.hide();
                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  that.loadingService.hide();
                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this7.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return AnimationService;
      }();

      AnimationService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      AnimationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], AnimationService);
      /***/
    },

    /***/
    "./src/app/services/app-settings.ts":
    /*!******************************************!*\
      !*** ./src/app/services/app-settings.ts ***!
      \******************************************/

    /*! exports provided: AppSettings */

    /***/
    function srcAppServicesAppSettingsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
        return AppSettings;
      });

      var AppSettings = {
        'IS_FIREBASE_ENABLED': false,
        'SHOW_START_WIZARD': false,
        'SUBSCRIBE': false,
        'FIREBASE_CONFIG': {
          'apiKey': "AIzaSyBCZqYtHanSqxORQnvL5CLEXGIfOT4aO2E",
          'authDomain': "ionic4-brkko-theme.firebaseapp.com",
          'databaseURL': "https://ionic4-brkko-theme.firebaseio.com",
          'projectId': "ionic4-brkko-theme",
          'storageBucket': "ionic4-brkko-theme.appspot.com",
          'messagingSenderId': "238260117107",
          'appId': "1:238260117107:web:ec7c670560ffdad3"
        }
      };
      /***/
    },

    /***/
    "./src/app/services/check-box-service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/check-box-service.ts ***!
      \***********************************************/

    /*! exports provided: CheckBoxService */

    /***/
    function srcAppServicesCheckBoxServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckBoxService", function () {
        return CheckBoxService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var CheckBoxService = /*#__PURE__*/function () {
        function CheckBoxService(af, loadingService) {
          var _this8 = this;

          _classCallCheck(this, CheckBoxService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Check Boxes';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'check-boxes/0',
              'title': 'Simple',
              'theme': 'layout1'
            }, {
              'url': 'check-boxes/1',
              'title': 'With Avatar',
              'theme': 'layout2'
            }, {
              'url': 'check-boxes/2',
              'title': 'Simple 2',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this8['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Simple',
              "items": [{
                "id": 1,
                "title": "plegros@gmail.com",
                "isChecked": false
              }, {
                "id": 2,
                "title": "fyundt@gmail.com",
                "isChecked": false
              }, {
                "id": 4,
                "title": "godfrey.von@gmail.com",
                "isChecked": true
              }, {
                "id": 3,
                "title": "joey.feil@gmail.com",
                "isChecked": true
              }, {
                "id": 5,
                "title": "yframi@yahoo.com",
                "isChecked": true
              }, {
                "id": 6,
                "title": "ytillman@gmail.com",
                "isChecked": true
              }, {
                "id": 7,
                "title": "leola.kerluke@yahoo.com",
                "isChecked": true
              }, {
                "id": 8,
                "title": "ignacio20@yahoo.com",
                "isChecked": true
              }, {
                "id": 9,
                "title": "travis34@gmail.com",
                "isChecked": true
              }, {
                "id": 10,
                "title": "sauer.brenna@gmail.com",
                "isChecked": true
              }, {
                "id": 11,
                "title": "michelle27@gmail.com",
                "isChecked": true
              }, {
                "id": 12,
                "title": "ludie56@gmail.com",
                "isChecked": true
              }, {
                "id": 13,
                "title": "luisa.hauck@yahoo.com",
                "isChecked": true
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'With Avatar',
              "items": [{
                "id": 1,
                "title": "Isabel Anguiano",
                "subtitle": "@isabel",
                "isChecked": false,
                "image": "assets/imgs/avatar/11.jpg"
              }, {
                "id": 2,
                "title": "Luna Adorno",
                "subtitle": "@luna",
                "isChecked": false,
                "image": "assets/imgs/avatar/10.jpg"
              }, {
                "id": 3,
                "title": "Abbie Kelly",
                "subtitle": "@abbie",
                "isChecked": true,
                "image": "assets/imgs/avatar/9.jpg"
              }, {
                "id": 4,
                "title": "Silvia Salvador",
                "subtitle": "@silvia",
                "isChecked": true,
                "image": "assets/imgs/avatar/14.jpg"
              }, {
                "id": 5,
                "title": "Teresa Puga",
                "subtitle": "@teresa",
                "isChecked": true,
                "image": "assets/imgs/avatar/13.jpg"
              }, {
                "id": 6,
                "title": "Tara Saunders",
                "subtitle": "@tara34",
                "isChecked": true,
                "image": "assets/imgs/avatar/12.jpg"
              }, {
                "id": 7,
                "title": "Lisa Chapman",
                "subtitle": "@lisa957",
                "isChecked": true,
                "image": "assets/imgs/avatar/17.jpg"
              }, {
                "id": 8,
                "title": "Evie Stevens",
                "subtitle": "@evie957",
                "isChecked": true,
                "image": "assets/imgs/avatar/16.jpg"
              }, {
                "id": 9,
                "title": "Eva Tapia",
                "subtitle": "@eva",
                "isChecked": true,
                "image": "assets/imgs/avatar/15.jpg"
              }, {
                "id": 10,
                "title": "Julia Requena",
                "subtitle": "@julia",
                "isChecked": true,
                "image": "assets/imgs/avatar/18.jpg"
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Simple 2',
              "items": [{
                "id": 1,
                "title": "New York",
                "subtitle": "United States",
                "isChecked": true,
                "detail": "General Electric"
              }, {
                "id": 2,
                "title": "Maranello",
                "subtitle": "Italy",
                "isChecked": false,
                "detail": "Ferrari"
              }, {
                "id": 3,
                "title": "Boston",
                "subtitle": "United States",
                "isChecked": false,
                "detail": "Gillette"
              }, {
                "id": 4,
                "title": "Munich",
                "subtitle": "Germany",
                "isChecked": true,
                "detail": "Siemens AG"
              }, {
                "id": 5,
                "title": "Seul",
                "subtitle": "South Korea",
                "isChecked": true,
                "detail": "Hyundai"
              }, {
                "id": 6,
                "title": "Herzogenaurach",
                "subtitle": "Germany",
                "isChecked": true,
                "detail": "Adidas"
              }, {
                "id": 7,
                "title": "Redwood City",
                "subtitle": "United States",
                "isChecked": true,
                "detail": "Oracle Corporation"
              }, {
                "id": 8,
                "title": "Amsterdam",
                "subtitle": "Netherlands",
                "isChecked": true,
                "detail": "Heineken Brewery"
              }, {
                "id": 9,
                "title": "Tokyo",
                "subtitle": "Japan",
                "isChecked": true,
                "detail": "Canon"
              }, {
                "id": 10,
                "title": "London",
                "subtitle": "United Kingdom",
                "isChecked": true,
                "detail": "Vodafone"
              }, {
                "id": 11,
                "title": "Florence",
                "subtitle": "Italy",
                "isChecked": true,
                "detail": "Gucci"
              }]
            };
          };
        }

        _createClass(CheckBoxService, [{
          key: "load",
          value: function load(item) {
            var _this9 = this;

            var that = this;
            that.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this9.af.object('checkBoxes/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  that.loadingService.hide();
                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  that.loadingService.hide();
                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this9.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return CheckBoxService;
      }();

      CheckBoxService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      CheckBoxService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], CheckBoxService);
      /***/
    },

    /***/
    "./src/app/services/comment-service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/comment-service.ts ***!
      \*********************************************/

    /*! exports provided: CommentService */

    /***/
    function srcAppServicesCommentServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentService", function () {
        return CommentService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var CommentService = /*#__PURE__*/function () {
        function CommentService(af, loadingService) {
          var _this10 = this;

          _classCallCheck(this, CommentService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Comment';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'comment/0',
              'title': 'Comments Basic',
              'theme': 'layout1'
            }, {
              'url': 'comment/1',
              'title': 'Comments With Timeline',
              'theme': 'layout2'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this10['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Commnets Basic',
              'allComments': '2121 Comments',
              'items': [{
                'id': 1,
                'image': 'assets/imgs/avatar/16.jpg',
                'title': 'Erica Romaguera',
                'time': '18 August 2018 at 12:20pm',
                'description': 'If you could have any kind of pet, what would you choose?'
              }, {
                'id': 2,
                'image': 'assets/imgs/avatar/15.jpg',
                'title': 'Caleigh Jerde',
                'time': '18 August 2018 at 8:13pm',
                'description': 'If you could learn any language, what would you choose?'
              }, {
                'id': 3,
                'image': 'assets/imgs/avatar/14.jpg',
                'title': 'Lucas Schultz',
                'time': '18 August 2018 at 5:22pm',
                'description': 'Life is about making an impact, not making an income.'
              }, {
                'id': 4,
                'image': 'assets/imgs/avatar/13.jpg',
                'title': 'Carole Marvin',
                'time': '18 August 2018 at 7:36am',
                'description': "I\u2019ve learned that people will forget what you said,\n                   people will forget what you did, but people will never forget how you made them feel"
              }, {
                'id': 5,
                'image': 'assets/imgs/avatar/12.jpg',
                'title': 'Doriana Feeney',
                'time': '18 August 2018 at 5:28am',
                'description': 'Definiteness of purpose is the starting point of all achievement.'
              }, {
                'id': 6,
                'image': 'assets/imgs/avatar/11.jpg',
                'title': 'Nia Gutkowski',
                'time': '18 August 2018 at 11:27pm',
                'description': 'Life is what happens to you while you’re busy making other plans'
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Comment With Timeline',
              'allComments': '2121 Comments',
              'items': [{
                'id': 1,
                'image': 'assets/imgs/avatar/16.jpg',
                'title': 'Erica Romaguera',
                'time': '18 August 2018 at 12:20pm',
                'description': 'If you could have any kind of pet, what would you choose?'
              }, {
                'id': 2,
                'image': 'assets/imgs/avatar/15.jpg',
                'title': 'Caleigh Jerde',
                'time': '18 August 2018 at 8:13pm',
                'description': 'If you could learn any language, what would you choose?'
              }, {
                'id': 3,
                'image': 'assets/imgs/avatar/14.jpg',
                'title': 'Lucas Schultz',
                'time': '18 August 2018 at 5:22pm',
                'description': 'Life is about making an impact, not making an income.'
              }, {
                'id': 4,
                'image': 'assets/imgs/avatar/13.jpg',
                'title': 'Carole Marvin',
                'time': '18 August 2018 at 7:36am',
                'description': "I\u2019ve learned that people will forget what you said,\n                   people will forget what you did, but people will never forget how you made them feel"
              }, {
                'id': 5,
                'image': 'assets/imgs/avatar/12.jpg',
                'title': 'Doriana Feeney',
                'time': '18 August 2018 at 5:28am',
                'description': 'Definiteness of purpose is the starting point of all achievement.'
              }, {
                'id': 6,
                'image': 'assets/imgs/avatar/11.jpg',
                'title': 'Nia Gutkowski',
                'time': '18 August 2018 at 11:27pm',
                'description': 'Life is what happens to you while you’re busy making other plans'
              }]
            };
          };
        }

        _createClass(CommentService, [{
          key: "load",
          value: function load(item) {
            var _this11 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this11.af.object('comment/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this11.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this11.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this11.loadingService.hide();

                observer.next(_this11.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return CommentService;
      }();

      CommentService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      CommentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], CommentService);
      /***/
    },

    /***/
    "./src/app/services/export-service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/export-service.ts ***!
      \********************************************/

    /*! exports provided: ExportService */

    /***/
    function srcAppServicesExportServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExportService", function () {
        return ExportService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-service */
      "./src/app/services/home-service.ts");
      /* harmony import */


      var _intro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./intro-service */
      "./src/app/services/intro-service.ts");
      /* harmony import */


      var _tabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs-service */
      "./src/app/services/tabs-service.ts");
      /* harmony import */


      var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./menu-service */
      "./src/app/services/menu-service.ts");
      /* harmony import */


      var _new_password_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-password-services */
      "./src/app/services/new-password-services.ts");
      /* harmony import */


      var _forget_password_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forget-password-services */
      "./src/app/services/forget-password-services.ts");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./alert-service */
      "./src/app/services/alert-service.ts");
      /* harmony import */


      var _check_box_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./check-box-service */
      "./src/app/services/check-box-service.ts");
      /* harmony import */


      var _search_bar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./search-bar-service */
      "./src/app/services/search-bar-service.ts");
      /* harmony import */


      var _wizard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./wizard-service */
      "./src/app/services/wizard-service.ts");
      /* harmony import */


      var _login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./login-service */
      "./src/app/services/login-service.ts");
      /* harmony import */


      var _register_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./register-service */
      "./src/app/services/register-service.ts");
      /* harmony import */


      var _list_view_expandable_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./list-view-expandable-service */
      "./src/app/services/list-view-expandable-service.ts");
      /* harmony import */


      var _list_view_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./list-view-drag-and-drop-service */
      "./src/app/services/list-view-drag-and-drop-service.ts");
      /* harmony import */


      var _list_view_swipe_to_dismiss_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./list-view-swipe-to-dismiss-service */
      "./src/app/services/list-view-swipe-to-dismiss-service.ts");
      /* harmony import */


      var _list_view_google_card_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./list-view-google-card-service */
      "./src/app/services/list-view-google-card-service.ts");
      /* harmony import */


      var _parallax_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./parallax-service */
      "./src/app/services/parallax-service.ts");
      /* harmony import */


      var _image_gallery_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./image-gallery-service */
      "./src/app/services/image-gallery-service.ts");
      /* harmony import */


      var _maps_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./maps-service */
      "./src/app/services/maps-service.ts");
      /* harmony import */


      var _qrcode_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./qrcode-service */
      "./src/app/services/qrcode-service.ts");
      /* harmony import */


      var _radio_button_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./radio-button-service */
      "./src/app/services/radio-button-service.ts");
      /* harmony import */


      var _range_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./range-service */
      "./src/app/services/range-service.ts");
      /* harmony import */


      var _toggle_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./toggle-service */
      "./src/app/services/toggle-service.ts");
      /* harmony import */


      var _select_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./select-service */
      "./src/app/services/select-service.ts");
      /* harmony import */


      var _action_sheet_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./action-sheet-service */
      "./src/app/services/action-sheet-service.ts");
      /* harmony import */


      var _time_line_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./time-line-service */
      "./src/app/services/time-line-service.ts");
      /* harmony import */


      var _form_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./form-service */
      "./src/app/services/form-service.ts");
      /* harmony import */


      var _comment_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./comment-service */
      "./src/app/services/comment-service.ts");
      /* harmony import */


      var _profile_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./profile-service */
      "./src/app/services/profile-service.ts");
      /* harmony import */


      var _payment_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./payment-service */
      "./src/app/services/payment-service.ts");
      /* harmony import */


      var _segment_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./segment-service */
      "./src/app/services/segment-service.ts");
      /* harmony import */


      var _scroll_segment_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./scroll-segment-service */
      "./src/app/services/scroll-segment-service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _animation_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./animation-service */
      "./src/app/services/animation-service.ts");

      var ExportService = /*#__PURE__*/function () {
        function ExportService() {
          _classCallCheck(this, ExportService);
        }

        _createClass(ExportService, [{
          key: "export",
          value: function _export() {
            return {
              'actionSheet': this.getActionSheet(),
              'alert': this.getAlert(),
              'checkBoxes': this.getCheckBox(),
              'comment': this.getComment(),
              'forgetPassword': this.getForgetPassword(),
              'form': this.getForm(),
              'menu': this.getMenu(),
              'home': this.getHome(),
              'imageGallery': this.getImageGallery(),
              'intro': this.getIntro(),
              'listView': {
                'dragAndDrop': this.getListViewDragAndDrop(),
                'expandable': this.getListViewExpandable(),
                'googleCards': this.getListViewGoogleCards(),
                'swipeToDismiss': this.getListViewSwipeToDismiss()
              },
              'login': this.getLogin(),
              'maps': this.getMaps(),
              'newPassword': this.getNewPassword(),
              'parallax': this.getParallax(),
              'payment': this.getPayment(),
              'profile': this.getProfile(),
              'radioButton': this.getRadioButton(),
              'ranges': this.getRange(),
              'qrcode': this.getQRCode(),
              'register': this.getRegister(),
              'searchBars': this.getSearchBar(),
              'segment': this.getSegment(),
              'scrollSegment': this.getScrollSegment(),
              'select': this.getSelect(),
              'tab': this.getTabs(),
              'timeline': this.getTimeLine(),
              'toggle': this.getToggle(),
              'wizard': this.getWizard(),
              'animation': this.getAnimation()
            };
          }
        }, {
          key: "getNewPassword",
          value: function getNewPassword() {
            var service = new _new_password_services__WEBPACK_IMPORTED_MODULE_5__["NewPasswordService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2()
            };
          }
        }, {
          key: "getForgetPassword",
          value: function getForgetPassword() {
            var service = new _forget_password_services__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2()
            };
          }
        }, {
          key: "getAlert",
          value: function getAlert() {
            var service = new _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"](null, null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3()
            };
          }
        }, {
          key: "getCheckBox",
          value: function getCheckBox() {
            var service = new _check_box_service__WEBPACK_IMPORTED_MODULE_8__["CheckBoxService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3()
            };
          }
        }, {
          key: "getSearchBar",
          value: function getSearchBar() {
            var service = new _search_bar_service__WEBPACK_IMPORTED_MODULE_9__["SearchBarService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3()
            };
          }
        }, {
          key: "getWizard",
          value: function getWizard() {
            var service = new _wizard_service__WEBPACK_IMPORTED_MODULE_10__["WizardService"](null, null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3(),
              'layout4': service.getDataForLayout4()
            };
          }
        }, {
          key: "getLogin",
          value: function getLogin() {
            var service = new _login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2()
            };
          }
        }, {
          key: "getRegister",
          value: function getRegister() {
            var service = new _register_service__WEBPACK_IMPORTED_MODULE_12__["RegisterService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2()
            };
          }
        }, {
          key: "getListViewExpandable",
          value: function getListViewExpandable() {
            var service = new _list_view_expandable_service__WEBPACK_IMPORTED_MODULE_13__["ListViewExpandableService"](null, null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3()
            };
          }
        }, {
          key: "getListViewDragAndDrop",
          value: function getListViewDragAndDrop() {
            var service = new _list_view_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_14__["ListViewDragAndDropService"](null, null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3()
            };
          }
        }, {
          key: "getListViewSwipeToDismiss",
          value: function getListViewSwipeToDismiss() {
            var service = new _list_view_swipe_to_dismiss_service__WEBPACK_IMPORTED_MODULE_15__["ListViewSwipeToDismissService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3()
            };
          }
        }, {
          key: "getListViewGoogleCards",
          value: function getListViewGoogleCards() {
            var service = new _list_view_google_card_service__WEBPACK_IMPORTED_MODULE_16__["ListViewGoogleCardsService"](null, null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3(),
              'layout4': service.getDataForLayout4()
            };
          }
        }, {
          key: "getParallax",
          value: function getParallax() {
            var service = new _parallax_service__WEBPACK_IMPORTED_MODULE_17__["ParallaxService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3(),
              'layout4': service.getDataForLayout4()
            };
          }
        }, {
          key: "getImageGallery",
          value: function getImageGallery() {
            var service = new _image_gallery_service__WEBPACK_IMPORTED_MODULE_18__["ImageGalleryService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3()
            };
          }
        }, {
          key: "getMaps",
          value: function getMaps() {
            var service = new _maps_service__WEBPACK_IMPORTED_MODULE_19__["MapsService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3()
            };
          }
        }, {
          key: "getQRCode",
          value: function getQRCode() {
            var service = new _qrcode_service__WEBPACK_IMPORTED_MODULE_20__["QRCodeService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2()
            };
          }
        }, {
          key: "getRadioButton",
          value: function getRadioButton() {
            var service = new _radio_button_service__WEBPACK_IMPORTED_MODULE_21__["RadioButtonService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3()
            };
          }
        }, {
          key: "getRange",
          value: function getRange() {
            var service = new _range_service__WEBPACK_IMPORTED_MODULE_22__["RangeService"](null, null);
            return service.getDataForTheme(null);
          }
        }, {
          key: "getToggle",
          value: function getToggle() {
            var service = new _toggle_service__WEBPACK_IMPORTED_MODULE_23__["ToggleService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3()
            };
          }
        }, {
          key: "getSelect",
          value: function getSelect() {
            var service = new _select_service__WEBPACK_IMPORTED_MODULE_24__["SelectService"](null, null);
            return service.getDataForTheme(null);
          }
        }, {
          key: "getActionSheet",
          value: function getActionSheet() {
            var service = new _action_sheet_service__WEBPACK_IMPORTED_MODULE_25__["ActionSheetService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3()
            };
          }
        }, {
          key: "getTimeLine",
          value: function getTimeLine() {
            var service = new _time_line_service__WEBPACK_IMPORTED_MODULE_26__["TimeLineService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3()
            };
          }
        }, {
          key: "getComment",
          value: function getComment() {
            var service = new _comment_service__WEBPACK_IMPORTED_MODULE_28__["CommentService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2()
            };
          }
        }, {
          key: "getForm",
          value: function getForm() {
            var service = new _form_service__WEBPACK_IMPORTED_MODULE_27__["FormService"](null, null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3(),
              'layout4': service.getDataForLayout4()
            };
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var service = new _profile_service__WEBPACK_IMPORTED_MODULE_29__["ProfileService"](null, null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3(),
              'layout4': service.getDataForLayout4(),
              'layout5': service.getDataForLayout5()
            };
          }
        }, {
          key: "getPayment",
          value: function getPayment() {
            var service = new _payment_service__WEBPACK_IMPORTED_MODULE_30__["PaymentService"](null, null);
            return {
              'layout1': service.getDataForLayout1()
            };
          }
        }, {
          key: "getSegment",
          value: function getSegment() {
            var service = new _segment_service__WEBPACK_IMPORTED_MODULE_31__["SegmentService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3()
            };
          }
        }, {
          key: "getScrollSegment",
          value: function getScrollSegment() {
            var service = new _scroll_segment_service__WEBPACK_IMPORTED_MODULE_32__["ScrollSegmentService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3(),
              'layout4': service.getDataForLayout4()
            };
          }
        }, {
          key: "getMenu",
          value: function getMenu() {
            var service = new _menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"](null, null);
            return service.getDataForTheme(null);
          }
        }, {
          key: "getIntro",
          value: function getIntro() {
            var service = new _intro_service__WEBPACK_IMPORTED_MODULE_2__["IntroService"](null, null);
            return service.getData();
          }
        }, {
          key: "getHome",
          value: function getHome() {
            var service = new _home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"](null);
            return service.getData();
          }
        }, {
          key: "getAnimation",
          value: function getAnimation() {
            var service = new _animation_service__WEBPACK_IMPORTED_MODULE_34__["AnimationService"](null, null);
            return {
              'layout1': service.getDataForLayout1(),
              'layout2': service.getDataForLayout2(),
              'layout3': service.getDataForLayout3(),
              'layout4': service.getDataForLayout4(),
              'layout5': service.getDataForLayout5(),
              'layout6': service.getDataForLayout6(),
              'layout7': service.getDataForLayout7(),
              'layout8': service.getDataForLayout8(),
              'layout9': service.getDataForLayout9(),
              'layout10': service.getDataForLayout10()
            };
          }
        }, {
          key: "getTabs",
          value: function getTabs() {
            var service = new _tabs_service__WEBPACK_IMPORTED_MODULE_3__["TabsService"](null, null);
            return {
              'tab1': service.getDataForTab1(),
              'tab2': service.getDataForTab2(),
              'tab3': service.getDataForTab3(),
              'tab4': service.getDataForTab4(),
              'tab5': service.getDataForTab5(),
              'tab6': service.getDataForTab6(),
              'tab7': service.getDataForTab7(),
              'tab8': service.getDataForTab8(),
              'tab9': service.getDataForTab9()
            };
          }
        }]);

        return ExportService;
      }();

      ExportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_33__["Injectable"])()], ExportService);
      /***/
    },

    /***/
    "./src/app/services/forget-password-services.ts":
    /*!******************************************************!*\
      !*** ./src/app/services/forget-password-services.ts ***!
      \******************************************************/

    /*! exports provided: ForgetPasswordService */

    /***/
    function srcAppServicesForgetPasswordServicesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordService", function () {
        return ForgetPasswordService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var ForgetPasswordService = /*#__PURE__*/function () {
        function ForgetPasswordService(af, loadingService) {
          var _this12 = this;

          _classCallCheck(this, ForgetPasswordService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Forget passworsd pages';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'forgot-password/0',
              'title': 'Forget Password With Background',
              'theme': 'layout1'
            }, {
              'url': 'forgot-password/1',
              'title': 'Forget Password Simple',
              'theme': 'layout2'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this12['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Forget Password With Background',
              'background': 'assets/imgs/background/39.jpg',
              'title': 'Forgot Your Password',
              'subtitle': 'Welcome',
              'lableEmail': 'E-MAIL',
              'email': 'Your e-mail address',
              'send': 'Send',
              "logo": "assets/imgs/logo/1.png",
              'errorIcon': 'remove-circle'
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Forget Password Simple',
              'title': 'Forgot Your Password',
              'subtitle': 'Welcome',
              'lableEmail': 'E-MAIL',
              'email': 'Your e-mail address',
              'send': 'Send',
              'logo': 'assets/imgs/logo/1.png',
              'errorIcon': 'remove-circle'
            };
          };
        }

        _createClass(ForgetPasswordService, [{
          key: "load",
          value: function load(item) {
            var _this13 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this13.af.object('forgetPassword/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this13.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this13.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this13.loadingService.hide();

                observer.next(_this13.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return ForgetPasswordService;
      }();

      ForgetPasswordService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      ForgetPasswordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], ForgetPasswordService);
      /***/
    },

    /***/
    "./src/app/services/form-service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/form-service.ts ***!
      \******************************************/

    /*! exports provided: FormService */

    /***/
    function srcAppServicesFormServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormService", function () {
        return FormService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./toast-service */
      "./src/app/services/toast-service.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var FormService = /*#__PURE__*/function () {
        function FormService(af, loadingService, toastCtrl) {
          var _this14 = this;

          _classCallCheck(this, FormService);

          this.af = af;
          this.loadingService = loadingService;
          this.toastCtrl = toastCtrl;

          this.getTitle = function () {
            return 'Form';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'form/0',
              'title': 'Form + Write Comment',
              'theme': 'layout1'
            }, {
              'url': 'form/1',
              'title': 'Form + Write Review',
              'theme': 'layout2'
            }, {
              'url': 'form/2',
              'title': 'Form With Address',
              'theme': 'layout3'
            }, {
              'url': 'form/3',
              'title': 'Form With Location',
              'theme': 'layout4'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this14['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Form + Write Comment',
              'yourName': 'Your Name',
              'title': 'Title',
              'description': 'Enter a description',
              'button': ' Write Comment'
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Form + Write Review',
              'title': 'Continue',
              'rateTitle': 'Rate',
              'descriptionPlaceholder': 'Description',
              'btnSubmit': 'Write Comment',
              'iconsStars': [{
                'isActive': true,
                'iconInactive': 'icon-star-outline',
                'iconActive': 'icon-star'
              }, {
                'isActive': true,
                'iconInactive': 'icon-star-outline',
                'iconActive': 'icon-star'
              }, {
                'isActive': true,
                'iconInactive': 'icon-star-outline',
                'iconActive': 'icon-star'
              }, {
                'isActive': true,
                'iconInactive': 'icon-star-outline',
                'iconActive': 'icon-star'
              }, {
                'isActive': false,
                'iconInactive': 'icon-star-outline',
                'iconActive': 'icon-star'
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Form With Address',
              'firstName': 'Firs Name',
              'lastName': 'Last Name',
              'addressLine1': 'Address Line 1',
              'addressLine2': 'Address Line 2',
              'city': 'City',
              'zipCode': 'Zip Code',
              'button': 'Write Comment'
            };
          }; //* Data Set for page 4


          this.getDataForLayout4 = function () {
            return {
              'toolbarTitle': 'Form With Location',
              'descriptionPlaceholder': 'Description',
              'btnSubmit': 'Write Comment',
              'map': {
                'lat': 40.712562,
                'lng': -74.005911,
                'zoom': 15,
                'mapTypeControl': true,
                'streetViewControl': true
              }
            };
          };
        }

        _createClass(FormService, [{
          key: "load",
          value: function load(item) {
            var _this15 = this;

            var that = this;
            that.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this15.af.object('form/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  that.loadingService.hide();
                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  that.loadingService.hide();
                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this15.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return FormService;
      }();

      FormService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      FormService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])], FormService);
      /***/
    },

    /***/
    "./src/app/services/home-service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/home-service.ts ***!
      \******************************************/

    /*! exports provided: HomeService */

    /***/
    function srcAppServicesHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeService", function () {
        return HomeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");

      var HomeService = /*#__PURE__*/function () {
        function HomeService(af) {
          _classCallCheck(this, HomeService);

          this.af = af; // Set data for - HOME PAGE

          this.getData = function () {
            return {
              'toolbarTitle': 'COVID Counts',
              'title': 'SAVE HOURS',
              'subtitle': 'OF DEVELOPING',
              'subtitle2': 'and make apps fast as light!',
              'link': 'http://csform.com/ionic4/ionic4-UI-brkko-theme/documentation/',
              'description': 'For better understanding how our template works please read documentation.',
              'background': 'assets/imgs/background/39.jpg'
            };
          };
        }

        _createClass(HomeService, [{
          key: "load",
          value: function load() {
            var _this16 = this;

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this16.af.object('home').valueChanges().subscribe(function (snapshot) {
                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                observer.next(_this16.getData());
                observer.complete();
              });
            }
          }
        }]);

        return HomeService;
      }();

      HomeService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }];
      };

      HomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])], HomeService);
      /***/
    },

    /***/
    "./src/app/services/image-gallery-service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/image-gallery-service.ts ***!
      \***************************************************/

    /*! exports provided: ImageGalleryService */

    /***/
    function srcAppServicesImageGalleryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageGalleryService", function () {
        return ImageGalleryService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var ImageGalleryService = /*#__PURE__*/function () {
        function ImageGalleryService(af, loadingService) {
          var _this17 = this;

          _classCallCheck(this, ImageGalleryService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Image Gallery';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'image-gallery/0',
              'title': 'Full gallery 1',
              'theme': 'layout1'
            }, {
              'url': 'image-gallery/1',
              'title': 'Thumb grid',
              'theme': 'layout2'
            }, {
              'url': 'image-gallery/2',
              'title': 'Full gallery 2',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this17['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; // Set Data For Gallery - CATEGORY 1 (ANIMALS)


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Full gallery 1',
              "items": [{
                "id": 1,
                "title": "Bass Guitar",
                "image": "assets/imgs/gallery/full-gallery-content-1/0.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-1/1.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-1/2.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-1/3.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-1/4.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-1/5.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-1/6.jpg"
                }, {
                  "id": 7,
                  "image": "assets/imgs/gallery/full-gallery-content-1/7.jpg"
                }, {
                  "id": 8,
                  "image": "assets/imgs/gallery/full-gallery-content-1/8.jpg"
                }, {
                  "id": 9,
                  "image": "assets/imgs/gallery/full-gallery-content-1/9.jpg"
                }, {
                  "id": 10,
                  "image": "assets/imgs/gallery/full-gallery-content-1/3.jpg"
                }, {
                  "id": 11,
                  "image": "assets/imgs/gallery/full-gallery-content-1/4.jpg"
                }, {
                  "id": 12,
                  "image": "assets/imgs/gallery/full-gallery-content-1/6.jpg"
                }, {
                  "id": 13,
                  "image": "assets/imgs/gallery/full-gallery-content-1/8.jpg"
                }]
              }, {
                "id": 2,
                "title": "Bridge",
                "image": "assets/imgs/gallery/full-gallery-content-2/0.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-2/2.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-2/3.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-2/4.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-2/5.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-2/6.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-2/7.jpg"
                }, {
                  "id": 7,
                  "image": "assets/imgs/gallery/full-gallery-content-2/8.jpg"
                }, {
                  "id": 8,
                  "image": "assets/imgs/gallery/full-gallery-content-2/9.jpg"
                }, {
                  "id": 9,
                  "image": "assets/imgs/gallery/full-gallery-content-2/1.jpg"
                }, {
                  "id": 10,
                  "image": "assets/imgs/gallery/full-gallery-content-2/3.jpg"
                }, {
                  "id": 11,
                  "image": "assets/imgs/gallery/full-gallery-content-2/5.jpg"
                }, {
                  "id": 12,
                  "image": "assets/imgs/gallery/full-gallery-content-2/7.jpg"
                }, {
                  "id": 13,
                  "image": "assets/imgs/gallery/full-gallery-content-2/9.jpg"
                }]
              }, {
                "id": 3,
                "title": "Camera",
                "image": "assets/imgs/gallery/full-gallery-content-3/0.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-3/1.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-3/2.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-3/3.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-3/4.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-3/5.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-3/6.jpg"
                }, {
                  "id": 7,
                  "image": "assets/imgs/gallery/full-gallery-content-3/7.jpg"
                }, {
                  "id": 8,
                  "image": "assets/imgs/gallery/full-gallery-content-3/8.jpg"
                }, {
                  "id": 9,
                  "image": "assets/imgs/gallery/full-gallery-content-3/9.jpg"
                }, {
                  "id": 10,
                  "image": "assets/imgs/gallery/full-gallery-content-3/10.jpg"
                }, {
                  "id": 11,
                  "image": "assets/imgs/gallery/full-gallery-content-3/11.jpg"
                }, {
                  "id": 12,
                  "image": "assets/imgs/gallery/full-gallery-content-3/12.jpg"
                }, {
                  "id": 13,
                  "image": "assets/imgs/gallery/full-gallery-content-3/13.jpg"
                }, {
                  "id": 14,
                  "image": "assets/imgs/gallery/full-gallery-content-3/14.jpg"
                }]
              }, {
                "id": 4,
                "title": "Guitar",
                "image": "assets/imgs/gallery/full-gallery-content-4/0.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-4/1.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-4/2.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-4/3.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-4/4.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-4/5.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-4/6.jpg"
                }, {
                  "id": 7,
                  "image": "assets/imgs/gallery/full-gallery-content-4/7.jpg"
                }, {
                  "id": 8,
                  "image": "assets/imgs/gallery/full-gallery-content-4/8.jpg"
                }, {
                  "id": 9,
                  "image": "assets/imgs/gallery/full-gallery-content-4/9.jpg"
                }]
              }, {
                "id": 5,
                "title": "Party",
                "image": "assets/imgs/gallery/full-gallery-content-5/0.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-5/1.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-5/2.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-5/3.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-5/4.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-5/5.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-5/6.jpg"
                }, {
                  "id": 7,
                  "image": "assets/imgs/gallery/full-gallery-content-5/7.jpg"
                }, {
                  "id": 8,
                  "image": "assets/imgs/gallery/full-gallery-content-5/8.jpg"
                }, {
                  "id": 9,
                  "image": "assets/imgs/gallery/full-gallery-content-5/9.jpg"
                }, {
                  "id": 10,
                  "image": "assets/imgs/gallery/full-gallery-content-5/1.jpg"
                }, {
                  "id": 11,
                  "image": "assets/imgs/gallery/full-gallery-content-5/3.jpg"
                }, {
                  "id": 12,
                  "image": "assets/imgs/gallery/full-gallery-content-5/5.jpg"
                }, {
                  "id": 13,
                  "image": "assets/imgs/gallery/full-gallery-content-5/6.jpg"
                }, {
                  "id": 14,
                  "image": "assets/imgs/gallery/full-gallery-content-5/7.jpg"
                }, {
                  "id": 15,
                  "image": "assets/imgs/gallery/full-gallery-content-5/8.jpg"
                }]
              }, {
                "id": 6,
                "title": "preamps",
                "image": "assets/imgs/gallery/full-gallery-content-6/0.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-6/1.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-6/10.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-6/2.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-6/3.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-6/4.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-6/5.jpg"
                }, {
                  "id": 7,
                  "image": "assets/imgs/gallery/full-gallery-content-6/6.jpg"
                }, {
                  "id": 8,
                  "image": "assets/imgs/gallery/full-gallery-content-6/7.jpg"
                }, {
                  "id": 9,
                  "image": "assets/imgs/gallery/full-gallery-content-6/8.jpg"
                }, {
                  "id": 10,
                  "image": "assets/imgs/gallery/full-gallery-content-6/9.jpg"
                }, {
                  "id": 11,
                  "image": "assets/imgs/gallery/full-gallery-content-6/10.jpg"
                }, {
                  "id": 12,
                  "image": "assets/imgs/gallery/full-gallery-content-6/3.jpg"
                }, {
                  "id": 13,
                  "image": "assets/imgs/gallery/full-gallery-content-6/2.jpg"
                }, {
                  "id": 14,
                  "image": "assets/imgs/gallery/full-gallery-content-6/4.jpg"
                }, {
                  "id": 15,
                  "image": "assets/imgs/gallery/full-gallery-content-6/5.jpg"
                }, {
                  "id": 16,
                  "image": "assets/imgs/gallery/full-gallery-content-6/6.jpg"
                }, {
                  "id": 17,
                  "image": "assets/imgs/gallery/full-gallery-content-6/1.jpg"
                }]
              }, {
                "id": 7,
                "title": "Watch",
                "image": "assets/imgs/gallery/full-gallery-content-7/0.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-7/3.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-7/5.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-7/4.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-7/2.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-7/1.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-7/6.jpg"
                }, {
                  "id": 7,
                  "image": "assets/imgs/gallery/full-gallery-content-7/7.jpg"
                }, {
                  "id": 8,
                  "image": "assets/imgs/gallery/full-gallery-content-7/8.jpg"
                }, {
                  "id": 9,
                  "image": "assets/imgs/gallery/full-gallery-content-7/9.jpg"
                }, {
                  "id": 10,
                  "image": "assets/imgs/gallery/full-gallery-content-7/0.jpg"
                }, {
                  "id": 11,
                  "image": "assets/imgs/gallery/full-gallery-content-7/1.jpg"
                }, {
                  "id": 12,
                  "image": "assets/imgs/gallery/full-gallery-content-7/3.jpg"
                }, {
                  "id": 13,
                  "image": "assets/imgs/gallery/full-gallery-content-7/6.jpg"
                }, {
                  "id": 14,
                  "image": "assets/imgs/gallery/full-gallery-content-7/9.jpg"
                }]
              }, {
                "id": 8,
                "title": "Travel",
                "image": "assets/imgs/gallery/full-gallery-content-8/0.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-8/1.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-8/2.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-8/12.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-8/13.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-8/16.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-8/15.jpg"
                }, {
                  "id": 7,
                  "image": "assets/imgs/gallery/full-gallery-content-8/5.jpg"
                }, {
                  "id": 8,
                  "image": "assets/imgs/gallery/full-gallery-content-8/16.jpg"
                }, {
                  "id": 9,
                  "image": "assets/imgs/gallery/full-gallery-content-8/11.jpg"
                }, {
                  "id": 10,
                  "image": "assets/imgs/gallery/full-gallery-content-8/12.jpg"
                }, {
                  "id": 11,
                  "image": "assets/imgs/gallery/full-gallery-content-8/10.jpg"
                }, {
                  "id": 12,
                  "image": "assets/imgs/gallery/full-gallery-content-8/3.jpg"
                }, {
                  "id": 13,
                  "image": "assets/imgs/gallery/full-gallery-content-8/2.jpg"
                }, {
                  "id": 14,
                  "image": "assets/imgs/gallery/full-gallery-content-8/4.jpg"
                }, {
                  "id": 15,
                  "image": "assets/imgs/gallery/full-gallery-content-8/5.jpg"
                }]
              }]
            };
          }; // Set Data For Gallery - SUBCATEGORY 1 (DOGS)


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Thumb grid',
              "items": [{
                "id": 1,
                "image": "assets/imgs/gallery/thumb-grid/1.jpg"
              }, {
                "id": 2,
                "image": "assets/imgs/gallery/thumb-grid/2.jpg"
              }, {
                "id": 3,
                "image": "assets/imgs/gallery/thumb-grid/3.jpg"
              }, {
                "id": 4,
                "image": "assets/imgs/gallery/thumb-grid/4.jpg"
              }, {
                "id": 5,
                "image": "assets/imgs/gallery/thumb-grid/5.jpg"
              }, {
                "id": 6,
                "image": "assets/imgs/gallery/thumb-grid/6.jpg"
              }, {
                "id": 7,
                "image": "assets/imgs/gallery/thumb-grid/7.jpg"
              }, {
                "id": 8,
                "image": "assets/imgs/gallery/thumb-grid/8.jpg"
              }, {
                "id": 9,
                "image": "assets/imgs/gallery/thumb-grid/9.jpg"
              }, {
                "id": 10,
                "image": "assets/imgs/gallery/thumb-grid/10.jpg"
              }, {
                "id": 11,
                "image": "assets/imgs/gallery/thumb-grid/11.jpg"
              }, {
                "id": 12,
                "image": "assets/imgs/gallery/thumb-grid/12.jpg"
              }, {
                "id": 13,
                "image": "assets/imgs/gallery/thumb-grid/13.jpg"
              }, {
                "id": 14,
                "image": "assets/imgs/gallery/thumb-grid/14.jpg"
              }, {
                "id": 15,
                "image": "assets/imgs/gallery/thumb-grid/15.jpg"
              }, {
                "id": 16,
                "image": "assets/imgs/gallery/thumb-grid/16.jpg"
              }]
            };
          }; // Set Data For Gallery - CATEGORY 2 (MUSIC)


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Full gallery 2',
              "items": [{
                "id": 1,
                "title": "Amps",
                "subtitle": "Friday, August 07, 2017",
                "image": "assets/imgs/gallery/full-gallery-content-1/10.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-1/1.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-1/2.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-1/3.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-1/4.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-1/5.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-1/6.jpg"
                }]
              }, {
                "id": 2,
                "title": "laptops",
                "subtitle": "Wednesday, July 05, 2017",
                "image": "assets/imgs/gallery/full-gallery-content-2/10.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-2/2.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-2/4.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-2/6.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-2/8.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-2/10.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-2/9.jpg"
                }, {
                  "id": 7,
                  "image": "assets/imgs/gallery/full-gallery-content-2/1.jpg"
                }, {
                  "id": 8,
                  "image": "assets/imgs/gallery/full-gallery-content-2/3.jpg"
                }, {
                  "id": 9,
                  "image": "assets/imgs/gallery/full-gallery-content-2/5.jpg"
                }, {
                  "id": 10,
                  "image": "assets/imgs/gallery/full-gallery-content-2/7.jpg"
                }, {
                  "id": 11,
                  "image": "assets/imgs/gallery/full-gallery-content-2/10.jpg"
                }, {
                  "id": 12,
                  "image": "assets/imgs/gallery/full-gallery-content-2/9.jpg"
                }, {
                  "id": 13,
                  "image": "assets/imgs/gallery/full-gallery-content-2/8.jpg"
                }, {
                  "id": 14,
                  "image": "assets/imgs/gallery/full-gallery-content-2/7.jpg"
                }]
              }, {
                "id": 3,
                "title": "Watch",
                "subtitle": "Sunday, October 08, 2016",
                "image": "assets/imgs/gallery/full-gallery-content-3/1.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-3/8.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-3/7.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-3/6.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-3/5.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-3/4.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-3/3.jpg"
                }, {
                  "id": 7,
                  "image": "assets/imgs/gallery/full-gallery-content-3/2.jpg"
                }, {
                  "id": 8,
                  "image": "assets/imgs/gallery/full-gallery-content-3/1.jpg"
                }]
              }, {
                "id": 4,
                "title": "Sony PC",
                "subtitle": "Monday, June 26, 2017",
                "image": "assets/imgs/gallery/full-gallery-content-4/1.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-4/1.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-4/2.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-4/3.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-4/4.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-4/5.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-4/6.jpg"
                }, {
                  "id": 7,
                  "image": "assets/imgs/gallery/full-gallery-content-4/7.jpg"
                }, {
                  "id": 8,
                  "image": "assets/imgs/gallery/full-gallery-content-4/8.jpg"
                }, {
                  "id": 9,
                  "image": "assets/imgs/gallery/full-gallery-content-4/9.jpg"
                }]
              }, {
                "id": 5,
                "title": "Smart Watch",
                "subtitle": "Thursday, May 19, 2016",
                "image": "assets/imgs/gallery/full-gallery-content-5/1.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-5/1.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-5/9.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-5/8.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-5/7.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-5/6.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-5/5.jpg"
                }, {
                  "id": 7,
                  "image": "assets/imgs/gallery/full-gallery-content-5/4.jpg"
                }, {
                  "id": 8,
                  "image": "assets/imgs/gallery/full-gallery-content-5/3.jpg"
                }, {
                  "id": 9,
                  "image": "assets/imgs/gallery/full-gallery-content-5/2.jpg"
                }, {
                  "id": 10,
                  "image": "assets/imgs/gallery/full-gallery-content-5/1.jpg"
                }, {
                  "id": 11,
                  "image": "assets/imgs/gallery/full-gallery-content-5/0.jpg"
                }]
              }, {
                "id": 6,
                "title": "Usb",
                "subtitle": "Monday, September 01, 2016",
                "image": "assets/imgs/gallery/full-gallery-content-6/10.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-6/1.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-6/2.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-6/3.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-6/4.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-6/5.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-6/6.jpg"
                }]
              }, {
                "id": 7,
                "title": "Canon Photoaparat",
                "subtitle": "Tuesday, September 05, 2016",
                "image": "assets/imgs/gallery/full-gallery-content-7/7.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-7/0.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-7/2.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-7/3.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-7/5.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-7/6.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-7/7.jpg"
                }]
              }, {
                "id": 8,
                "title": "laptops",
                "subtitle": "Saturday, April 25, 2016",
                "image": "assets/imgs/gallery/full-gallery-content-8/12.jpg",
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/gallery/full-gallery-content-8/1.jpg"
                }, {
                  "id": 2,
                  "image": "assets/imgs/gallery/full-gallery-content-8/3.jpg"
                }, {
                  "id": 3,
                  "image": "assets/imgs/gallery/full-gallery-content-8/2.jpg"
                }, {
                  "id": 4,
                  "image": "assets/imgs/gallery/full-gallery-content-8/5.jpg"
                }, {
                  "id": 5,
                  "image": "assets/imgs/gallery/full-gallery-content-8/4.jpg"
                }, {
                  "id": 6,
                  "image": "assets/imgs/gallery/full-gallery-content-8/6.jpg"
                }, {
                  "id": 7,
                  "image": "assets/imgs/gallery/full-gallery-content-8/7.jpg"
                }, {
                  "id": 8,
                  "image": "assets/imgs/gallery/full-gallery-content-8/8.jpg"
                }, {
                  "id": 9,
                  "image": "assets/imgs/gallery/full-gallery-content-8/10.jpg"
                }]
              }]
            };
          };
        }

        _createClass(ImageGalleryService, [{
          key: "load",
          value: function load(item) {
            var _this18 = this;

            var that = this;
            that.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this18.af.object('imageGallery/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  that.loadingService.hide();
                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  that.loadingService.hide();
                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this18.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return ImageGalleryService;
      }();

      ImageGalleryService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      ImageGalleryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], ImageGalleryService);
      /***/
    },

    /***/
    "./src/app/services/intro-service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/intro-service.ts ***!
      \*******************************************/

    /*! exports provided: IntroService */

    /***/
    function srcAppServicesIntroServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroService", function () {
        return IntroService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var IntroService = /*#__PURE__*/function () {
        function IntroService(af, loadingService) {
          _classCallCheck(this, IntroService);

          this.af = af;
          this.loadingService = loadingService; // Set data for - WIZARD MAIN

          this.getData = function () {
            return {
              'btnPrev': 'Previous',
              'btnNext': 'Next',
              'btnFinish': 'Finish',
              "items": [{
                "backgroundImage": "assets/imgs/background/28.jpg",
                "logo": "assets/imgs/logo/1.png",
                "title": "Aenean feugiat ipsum eget porttitor auctor",
                "subtitle": "Donec finibus est ac augue feugiat pretium",
                "description": "Duis gravida, tellus eget condimentum vestibulum, massa metus gravida mauris, elementum sodales nunc tellus ut ligula"
              }, {
                "backgroundImage": "assets/imgs/background/29.jpg",
                "logo": "assets/imgs/logo/1.png",
                "title": "Sed sollicitudin tortor id bibendum sollicitudin",
                "subtitle": "Integer vel mi euismod, egestas neque in, tincidunt tellus",
                "description": "Donec tincidunt odio eget ante bibendum, eget dapibus mauris hendrerit"
              }, {
                "backgroundImage": "assets/imgs/background/30.jpg",
                "logo": "assets/imgs/logo/1.png",
                "title": "In ac tortor in risus commodo molestie",
                "subtitle": "Pellentesque porttitor turpis eget metus dignissim sollicitudin",
                "description": "Ut iaculis scelerisque mauris sit amet interdum"
              }]
            };
          };
        }

        _createClass(IntroService, [{
          key: "load",
          value: function load() {
            var _this19 = this;

            var that = this;
            that.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this19.af.object('intro').valueChanges().subscribe(function (snapshot) {
                  that.loadingService.hide();
                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  that.loadingService.hide();
                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this19.getData());
                observer.complete();
              });
            }
          }
        }]);

        return IntroService;
      }();

      IntroService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      IntroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], IntroService);
      /***/
    },

    /***/
    "./src/app/services/list-view-drag-and-drop-service.ts":
    /*!*************************************************************!*\
      !*** ./src/app/services/list-view-drag-and-drop-service.ts ***!
      \*************************************************************/

    /*! exports provided: ListViewDragAndDropService */

    /***/
    function srcAppServicesListViewDragAndDropServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListViewDragAndDropService", function () {
        return ListViewDragAndDropService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./toast-service */
      "./src/app/services/toast-service.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var ListViewDragAndDropService = /*#__PURE__*/function () {
        function ListViewDragAndDropService(af, loadingService, toastCtrl) {
          var _this20 = this;

          _classCallCheck(this, ListViewDragAndDropService);

          this.af = af;
          this.loadingService = loadingService;
          this.toastCtrl = toastCtrl;

          this.getId = function () {
            return 'dragAndDrop';
          };

          this.getTitle = function () {
            return 'Drag and Drop';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'drag-and-drop/0',
              'title': 'Small item + header',
              'theme': 'layout1'
            }, {
              'url': 'drag-and-drop/1',
              'title': 'Products + CTA header',
              'theme': 'layout2'
            }, {
              'url': 'drag-and-drop/2',
              'title': 'Medium item with avatar',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this20['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Small Item + Header',
              "header": "Restaurants",
              "items": [{
                "id": 1,
                "title": "Rainforest Cafe",
                "subtitle": "New York City",
                "description": "7186 km"
              }, {
                "id": 2,
                "title": "Big Boy",
                "subtitle": "Los Angeles",
                "description": "2281 km"
              }, {
                "id": 3,
                "title": "California Pizza Kitchen",
                "subtitle": "Beijing",
                "description": "1748 km"
              }, {
                "id": 4,
                "title": "Cheese Burger in Paradise",
                "subtitle": "Delhi",
                "description": "3450 km"
              }, {
                "id": 5,
                "title": "T.G.I. Friday's",
                "subtitle": "Shanghai",
                "description": "7374 km"
              }, {
                "id": 6,
                "title": "Heart Attack Grill",
                "subtitle": "Paris",
                "description": "6070 km"
              }, {
                "id": 7,
                "title": "Heart Attack Grill",
                "subtitle": "Istanbul",
                "description": "8158 km"
              }, {
                "id": 8,
                "title": "Dick's Last Resort",
                "subtitle": "Tokyo",
                "description": "292 km"
              }, {
                "id": 9,
                "title": "Steak 'n Shake",
                "subtitle": "Guangzhou",
                "description": "9231 km"
              }, {
                "id": 10,
                "title": "Bluepoint Sage Cafe",
                "subtitle": "Mumbai",
                "description": "9972 km"
              }, {
                "id": 11,
                "title": "Ground Round",
                "subtitle": "Moscow",
                "description": "9720 km"
              }, {
                "id": 12,
                "title": "Waffle House",
                "subtitle": "São Paulo",
                "description": "988 km"
              }, {
                "id": 13,
                "title": "Quaker Steak & Lube",
                "subtitle": "Shenzhen",
                "description": "1000 km"
              }, {
                "id": 14,
                "title": "Boston Pizza",
                "subtitle": "Boston",
                "description": "2565 km"
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Product + Cta Header',
              "header": "Cart",
              "title": "Make order now!",
              "subtitle": "Reorder list by your wish.",
              "button": "Get",
              "items": [{
                "id": 1,
                "title": "500+",
                "subtitle": "20% Off",
                "image": "assets/imgs/avatar/2.jpg",
                "price": "$199.99"
              }, {
                "id": 2,
                "title": "iWatch black",
                "subtitle": "15% Off",
                "image": "assets/imgs/avatar/3.jpg",
                "price": "$295.99"
              }, {
                "id": 3,
                "title": "Nikon Photoaparat",
                "subtitle": "22% Off",
                "image": "assets/imgs/avatar/6.jpg",
                "price": "$1032.99"
              }, {
                "id": 4,
                "title": "Canon Photoaparat",
                "subtitle": "10% Off",
                "image": "assets/imgs/avatar/0.jpg",
                "price": "$1269.99"
              }, {
                "id": 5,
                "title": "50mm",
                "subtitle": "12% Off",
                "image": "assets/imgs/avatar/5.jpg",
                "price": "$34.99"
              }, {
                "id": 6,
                "title": "Sony PS",
                "subtitle": "14% Off",
                "image": "assets/imgs/avatar/7.jpg",
                "price": "$499.99"
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Medium Item With Avatar',
              "header": "List friends",
              "items": [{
                "id": 1,
                "title": "Erica Romaguera",
                "subtitle": "@erica",
                "image": "assets/imgs/avatar/13.jpg"
              }, {
                "id": 2,
                "title": "Nia Gutkowski",
                "subtitle": "@nia234",
                "image": "assets/imgs/avatar/14.jpg"
              }, {
                "id": 3,
                "title": "Camila Hintz",
                "subtitle": "@camila",
                "image": "assets/imgs/avatar/15.jpg"
              }, {
                "id": 4,
                "title": "Anna Yost",
                "subtitle": "@anna",
                "image": "assets/imgs/avatar/16.jpg"
              }, {
                "id": 5,
                "title": "Georgianna Baumbach",
                "subtitle": "@georgianna",
                "image": "assets/imgs/avatar/17.jpg"
              }, {
                "id": 6,
                "title": "Jaqueline Stehr",
                "subtitle": "@jaqueline",
                "image": "assets/imgs/avatar/18.jpg"
              }, {
                "id": 7,
                "title": "Naomi Mante",
                "subtitle": "@naomi",
                "image": "assets/imgs/avatar/19.jpg"
              }, {
                "id": 8,
                "title": "Amaya Abshire",
                "subtitle": "@amaya",
                "image": "assets/imgs/avatar/20.jpg"
              }, {
                "id": 9,
                "title": "Rickie Glover",
                "subtitle": "@rickie",
                "image": "assets/imgs/avatar/21.jpg"
              }, {
                "id": 10,
                "title": "Antone Mayert",
                "subtitle": "@antone",
                "image": "assets/imgs/avatar/22.jpg"
              }, {
                "id": 11,
                "title": "Alison Streich",
                "subtitle": "@alison",
                "image": "assets/imgs/avatar/23.jpg"
              }]
            };
          };
        }

        _createClass(ListViewDragAndDropService, [{
          key: "load",
          value: function load(item) {
            var _this21 = this;

            var that = this;
            that.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this21.af.object('listView/dragAndDrop/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  that.loadingService.hide();
                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  that.loadingService.hide();
                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this21.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return ListViewDragAndDropService;
      }();

      ListViewDragAndDropService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      ListViewDragAndDropService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])], ListViewDragAndDropService);
      /***/
    },

    /***/
    "./src/app/services/list-view-expandable-service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/services/list-view-expandable-service.ts ***!
      \**********************************************************/

    /*! exports provided: ListViewExpandableService */

    /***/
    function srcAppServicesListViewExpandableServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListViewExpandableService", function () {
        return ListViewExpandableService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./toast-service */
      "./src/app/services/toast-service.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var ListViewExpandableService = /*#__PURE__*/function () {
        function ListViewExpandableService(af, loadingService, toastCtrl) {
          var _this22 = this;

          _classCallCheck(this, ListViewExpandableService);

          this.af = af;
          this.loadingService = loadingService;
          this.toastCtrl = toastCtrl;

          this.getId = function () {
            return 'expandable';
          };

          this.getTitle = function () {
            return 'Expandable';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'expandable/0',
              'title': 'List big image',
              'theme': 'layout1'
            }, {
              'url': 'expandable/1',
              'title': 'Full image with CTA',
              'theme': 'layout2'
            }, {
              'url': 'expandable/2',
              'title': 'Centered with header',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this22['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'List big image',
              "header": "Catalogue",
              "items": [{
                "id": 1,
                "title": "Nikon",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/avatar/0.jpg",
                "items": [{
                  "id": 1,
                  "title": "Sony PC",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/7.jpg",
                  "details": "$399.99"
                }, {
                  "id": 2,
                  "title": "Nikon Photoaparat",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/6.jpg",
                  "details": "$2058.99"
                }, {
                  "id": 3,
                  "title": "Objective",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/5.jpg",
                  "details": "$89.99"
                }, {
                  "id": 4,
                  "title": "Canon Photoaparat",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/4.jpg",
                  "details": "$1999.99"
                }]
              }, {
                "id": 2,
                "title": "500+",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/avatar/2.jpg",
                "items": [{
                  "id": 1,
                  "title": "Watch black",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/3.jpg",
                  "details": "$99.99"
                }, {
                  "id": 2,
                  "title": "Sony PC",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/7.jpg",
                  "details": "$499.99"
                }, {
                  "id": 3,
                  "title": "iPhone 8 Plus",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/1.jpg",
                  "details": "$1199.99"
                }, {
                  "id": 4,
                  "title": "Canon Photoaparat",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/0.jpg",
                  "details": "$798.99"
                }]
              }, {
                "id": 3,
                "title": "Canon Photoaparat",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/avatar/4.jpg",
                "items": [{
                  "id": 1,
                  "title": "500+",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/2.jpg",
                  "details": "$589.99"
                }, {
                  "id": 2,
                  "title": "Nikon Photoaparat",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/4.jpg",
                  "details": "$799.99"
                }, {
                  "id": 3,
                  "title": "Objective",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/6.jpg",
                  "details": "$99.99"
                }, {
                  "id": 4,
                  "title": "Sony PC",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/7.jpg",
                  "details": "$599.99"
                }]
              }, {
                "id": 4,
                "title": "iPhone 8 Plus",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/avatar/1.jpg",
                "items": [{
                  "id": 1,
                  "title": "Canon Photoaparat",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/4.jpg",
                  "details": "$412.99"
                }, {
                  "id": 2,
                  "title": "Watch black",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/3.jpg",
                  "details": "$657.99"
                }, {
                  "id": 3,
                  "title": "50mm",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/5.jpg",
                  "details": "$58.99"
                }, {
                  "id": 4,
                  "title": "Sony PC",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/7.jpg",
                  "details": "$856.99"
                }]
              }, {
                "id": 5,
                "title": "50mm",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/avatar/5.jpg",
                "items": [{
                  "id": 1,
                  "title": "Nikon",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/6.jpg",
                  "details": "$999.99"
                }, {
                  "id": 2,
                  "title": "Watch black",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/3.jpg",
                  "details": "$299.99"
                }, {
                  "id": 3,
                  "title": "Sony PC",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/7.jpg",
                  "details": "$658.99"
                }, {
                  "id": 4,
                  "title": "500+",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/2.jpg",
                  "details": "$158.99"
                }]
              }, {
                "id": 6,
                "title": "Nikon Photoaparat",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/avatar/6.jpg",
                "items": [{
                  "id": 1,
                  "title": "iPhone 8 Plus",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/1.jpg",
                  "details": "$1008.99"
                }, {
                  "id": 2,
                  "title": "50mm",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/5.jpg",
                  "details": "$258.99"
                }, {
                  "id": 3,
                  "title": "500+",
                  "description": "Lorem ipsum.",
                  "image": "assets/imgs/avatar/2.jpg",
                  "details": "$628.99"
                }, {
                  "id": 4,
                  "title": "Sony PC",
                  "description": "Lorem ipsum",
                  "image": "assets/imgs/avatar/7.jpg",
                  "details": "$580.99"
                }]
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Full Image With Cta',
              "items": [{
                "id": 1,
                "title": "Open Air Concerts",
                "subtitle": "Monday, 15th Oct. 2018",
                "backgroundImage": "assets/imgs/background/11.jpg",
                "icon": "arrow-forward-circle-outline",
                "iconText": "Watch now",
                "items": {
                  "iconsStars": [{
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": false,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }],
                  "reviews": "4.12 (78 reviews)",
                  "title": "Lorem ipsum dolor sit amet",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                }
              }, {
                "id": 2,
                "title": "Concert Summer",
                "subtitle": "Wendsday, 21st Oct. 2018",
                "backgroundImage": "assets/imgs/background/14.jpg",
                "icon": "arrow-forward-circle-outline",
                "iconText": "Watch now",
                "items": {
                  "iconsStars": [{
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": false,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }],
                  "reviews": "4.12 (78 reviews)",
                  "title": "Lorem ipsum dolor sit amet",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                }
              }, {
                "id": 3,
                "title": "Summer Open Air Festival",
                "subtitle": "Wendsday, 21st Oct. 2018",
                "backgroundImage": "assets/imgs/background/13.jpg",
                "icon": "arrow-forward-circle-outline",
                "iconText": "Watch now",
                "items": {
                  "iconsStars": [{
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": false,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }],
                  "reviews": "4.12 (78 reviews)",
                  "title": "Lorem ipsum dolor sit amet",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                }
              }, {
                "id": 4,
                "title": "Classic Open Air",
                "subtitle": "Wendsday, 21st Oct. 2018",
                "backgroundImage": "assets/imgs/background/10.jpg",
                "icon": "arrow-forward-circle-outline",
                "iconText": "Watch now",
                "items": {
                  "iconsStars": [{
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": true,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }, {
                    "isActive": false,
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline"
                  }],
                  "reviews": "4.12 (78 reviews)",
                  "title": "Lorem ipsum dolor sit amet",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                }
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Centered With Header',
              "header": "Popular Car",
              "button": "CHOOSE",
              "items": [{
                "id": 1,
                "title": "Tesla Model S",
                "icon": "icon-chevron-right",
                "items": [{
                  "title": "year",
                  "isChecked": "true"
                }, {
                  "title": "price",
                  "isChecked": "true"
                }, {
                  "title": "fuel",
                  "isChecked": "false"
                }, {
                  "title": "color",
                  "isChecked": "false"
                }, {
                  "title": "horse power",
                  "isChecked": "false"
                }]
              }, {
                "id": 2,
                "title": "Toyota RAV4",
                "icon": "icon-chevron-right",
                "items": [{
                  "title": "year",
                  "isChecked": "true"
                }, {
                  "title": "price",
                  "isChecked": "true"
                }, {
                  "title": "fuel",
                  "isChecked": "false"
                }, {
                  "title": "color",
                  "isChecked": "false"
                }, {
                  "title": "horse power",
                  "isChecked": "false"
                }]
              }, {
                "id": 3,
                "title": "Audi Q5",
                "icon": "icon-chevron-right",
                "items": [{
                  "title": "year",
                  "isChecked": "true"
                }, {
                  "title": "price",
                  "isChecked": "true"
                }, {
                  "title": "fuel",
                  "isChecked": "false"
                }, {
                  "title": "color",
                  "isChecked": "false"
                }, {
                  "title": "horse power",
                  "isChecked": "false"
                }]
              }, {
                "id": 4,
                "title": "BMW 3 Series",
                "icon": "icon-chevron-right",
                "items": [{
                  "title": "year",
                  "isChecked": "true"
                }, {
                  "title": "price",
                  "isChecked": "true"
                }, {
                  "title": "fuel",
                  "isChecked": "false"
                }, {
                  "title": "color",
                  "isChecked": "false"
                }, {
                  "title": "horse power",
                  "isChecked": "false"
                }]
              }, {
                "id": 5,
                "title": "Audi Q7",
                "icon": "icon-chevron-right",
                "items": [{
                  "title": "year",
                  "isChecked": "true"
                }, {
                  "title": "price",
                  "isChecked": "true"
                }, {
                  "title": "fuel",
                  "isChecked": "false"
                }, {
                  "title": "color",
                  "isChecked": "false"
                }, {
                  "title": "horse power",
                  "isChecked": "false"
                }]
              }, {
                "id": 6,
                "title": "Subaru Impreza",
                "icon": "icon-chevron-right",
                "items": [{
                  "title": "year",
                  "isChecked": "true"
                }, {
                  "title": "price",
                  "isChecked": "true"
                }, {
                  "title": "fuel",
                  "isChecked": "false"
                }, {
                  "title": "color",
                  "isChecked": "false"
                }, {
                  "title": "horse power",
                  "isChecked": "false"
                }]
              }, {
                "id": 7,
                "title": "BMW X5",
                "icon": "icon-chevron-right",
                "items": [{
                  "title": "year",
                  "isChecked": "true"
                }, {
                  "title": "price",
                  "isChecked": "true"
                }, {
                  "title": "fuel",
                  "isChecked": "false"
                }, {
                  "title": "color",
                  "isChecked": "false"
                }, {
                  "title": "horse power",
                  "isChecked": "false"
                }]
              }, {
                "id": 8,
                "title": "Hyundai Tucson",
                "icon": "icon-chevron-right",
                "items": [{
                  "title": "year",
                  "isChecked": "true"
                }, {
                  "title": "price",
                  "isChecked": "true"
                }, {
                  "title": "fuel",
                  "isChecked": "false"
                }, {
                  "title": "color",
                  "isChecked": "false"
                }, {
                  "title": "horse power",
                  "isChecked": "false"
                }]
              }, {
                "id": 9,
                "title": "Lexus RX 350",
                "icon": "icon-chevron-right",
                "items": [{
                  "title": "year",
                  "isChecked": "true"
                }, {
                  "title": "price",
                  "isChecked": "true"
                }, {
                  "title": "fuel",
                  "isChecked": "false"
                }, {
                  "title": "color",
                  "isChecked": "false"
                }, {
                  "title": "horse power",
                  "isChecked": "false"
                }]
              }, {
                "id": 10,
                "title": "Jeep Wrangler",
                "icon": "icon-chevron-right",
                "items": [{
                  "title": "year",
                  "isChecked": "true"
                }, {
                  "title": "price",
                  "isChecked": "true"
                }, {
                  "title": "fuel",
                  "isChecked": "false"
                }, {
                  "title": "color",
                  "isChecked": "false"
                }, {
                  "title": "horse power",
                  "isChecked": "false"
                }]
              }, {
                "id": 11,
                "title": "Subaru Outback",
                "icon": "icon-chevron-right",
                "items": [{
                  "title": "year",
                  "isChecked": "true"
                }, {
                  "title": "price",
                  "isChecked": "true"
                }, {
                  "title": "fuel",
                  "isChecked": "false"
                }, {
                  "title": "color",
                  "isChecked": "false"
                }, {
                  "title": "horse power",
                  "isChecked": "false"
                }]
              }]
            };
          };
        }

        _createClass(ListViewExpandableService, [{
          key: "load",
          value: function load(item) {
            var _this23 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this23.af.object('listView/expandable/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this23.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this23.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this23.loadingService.hide();

                observer.next(_this23.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return ListViewExpandableService;
      }();

      ListViewExpandableService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      ListViewExpandableService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])], ListViewExpandableService);
      /***/
    },

    /***/
    "./src/app/services/list-view-google-card-service.ts":
    /*!***********************************************************!*\
      !*** ./src/app/services/list-view-google-card-service.ts ***!
      \***********************************************************/

    /*! exports provided: ListViewGoogleCardsService */

    /***/
    function srcAppServicesListViewGoogleCardServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListViewGoogleCardsService", function () {
        return ListViewGoogleCardsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./toast-service */
      "./src/app/services/toast-service.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var ListViewGoogleCardsService = /*#__PURE__*/function () {
        function ListViewGoogleCardsService(af, loadingService, toastCtrl) {
          var _this24 = this;

          _classCallCheck(this, ListViewGoogleCardsService);

          this.af = af;
          this.loadingService = loadingService;
          this.toastCtrl = toastCtrl;

          this.getId = function () {
            return 'googleCards';
          };

          this.getTitle = function () {
            return 'Google Cards';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'google-card/0',
              'title': 'Styled cards',
              'theme': 'layout1'
            }, {
              'url': 'google-card/1',
              'title': 'Styled cards 2',
              'theme': 'layout2'
            }, {
              'url': 'google-card/2',
              'title': 'Full image cards',
              'theme': 'layout3'
            }, {
              'url': 'google-card/3',
              'title': 'Full image cards with avatar',
              'theme': 'layout4'
            }];
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Styled cards',
              "items": [{
                "id": 1,
                "title": "Free Ride",
                "backgroundImage": "assets/imgs/background/2.jpg",
                "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
              }, {
                "id": 2,
                "title": "Bridge Tour",
                "backgroundImage": "assets/imgs/background/5.jpg",
                "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
              }, {
                "id": 3,
                "title": "Sea Tour",
                "backgroundImage": "assets/imgs/background/21.jpg",
                "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
              }, {
                "id": 4,
                "title": "Main Stage Event",
                "backgroundImage": "assets/imgs/background/7.jpg",
                "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
              }, {
                "id": 5,
                "title": "Classic Open Air",
                "backgroundImage": "assets/imgs/background/11.jpg",
                "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
              }, {
                "id": 6,
                "title": "Concert Summer",
                "backgroundImage": "assets/imgs/background/14.jpg",
                "description": "LCras odio felis, blandit sit amet mi nec, euismod mattis tellus."
              }, {
                "id": 7,
                "title": "Open Air Concerts",
                "backgroundImage": "assets/imgs/background/10.jpg",
                "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.."
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Styled cards 2',
              "items": [{
                "id": 1,
                "title": "Digital Watch",
                "subtitle": "Category: Watch",
                "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                "image": "assets/imgs/background/6.jpg",
                "price": "$144.50",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
              }, {
                "id": 2,
                "title": "Android Watch",
                "subtitle": "Category: Watch",
                "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
                "image": "assets/imgs/background/9.jpg",
                "price": "$130.99",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
              }, {
                "id": 3,
                "title": "Acoustic Guitars",
                "subtitle": "Category: Guitars",
                "description": "Icero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
                "image": "assets/imgs/background/10.jpg",
                "price": "$354.05",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
              }, {
                "id": 4,
                "title": "Bass guitar",
                "subtitle": "Category: Guitars",
                "description": "Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
                "image": "assets/imgs/background/13.jpg",
                "price": "$338.99",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
              }, {
                "id": 5,
                "title": "Classical guitar",
                "subtitle": "Category: Guitars",
                "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                "image": "assets/imgs/background/15.jpg",
                "price": "$109.60",
                "button": "Buy",
                "shareIcon": "ellipsis-horizontal"
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Full image cards',
              "items": [{
                "id": 1,
                "category": "best offer",
                "image": "assets/imgs/background/11.jpg",
                "title": "Free Ride Tour",
                "subtitle": "West Avenue, NYC",
                "button": "$135.99"
              }, {
                "id": 2,
                "category": "main event",
                "image": "assets/imgs/background/14.jpg",
                "title": "Open Air Concert",
                "subtitle": "Hyde Park, London",
                "button": "$312.99"
              }, {
                "id": 3,
                "category": "Best Tourt",
                "image": "assets/imgs/background/21.jpg",
                "title": "Sea ture",
                "subtitle": "Guilin, Kweilin",
                "button": "$213.45"
              }, {
                "id": 4,
                "category": "Mountain",
                "image": "assets/imgs/background/7.jpg",
                "title": "Mountain Trout",
                "subtitle": "Mountain Trout Camp",
                "button": "$338.60"
              }, {
                "id": 5,
                "category": "Bridge Tour",
                "image": "assets/imgs/background/5.jpg",
                "title": "Bridge Tour",
                "subtitle": "BridgeClimb, Sydney",
                "button": "$410.85"
              }, {
                "id": 6,
                "category": "best events",
                "image": "assets/imgs/background/2.jpg",
                "title": "Main Stage Event",
                "subtitle": "Hyde Park, London ",
                "button": "$516.55"
              }]
            };
          }; //* Data Set for page 4


          this.getDataForLayout4 = function () {
            return {
              'toolbarTitle': 'Full image cards with avatar',
              'items': [{
                'id': 1,
                'avatar': 'assets/imgs/avatar/10.jpg',
                'avatarTitle': 'Katlynn Pouros',
                'avatarSubtitle': 'from Los Angeles',
                'time': '15 min ago',
                'image': 'assets/imgs/background/16.jpg',
                'title': 'Women in the Slaves',
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }, {
                'id': 2,
                'avatar': 'assets/imgs/avatar/12.jpg',
                'avatarTitle': 'Katlynn Pouros',
                'avatarSubtitle': 'from Los Angeles',
                'time': '21 min ago',
                'image': 'assets/imgs/background/34.jpg',
                'title': 'Women in the Slaves',
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }, {
                'id': 3,
                'avatar': 'assets/imgs/avatar/13.jpg',
                'avatarTitle': 'Katlynn Pouros',
                'avatarSubtitle': 'from Los Angeles',
                'time': '29 min ago',
                'image': 'assets/imgs/background/35.jpg',
                'title': 'Women in the Slaves',
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }, {
                'id': 4,
                'avatar': 'assets/imgs/avatar/14.jpg',
                'avatarTitle': 'Katlynn Pouros',
                'avatarSubtitle': 'from Los Angeles',
                'time': '32 min ago',
                'image': 'assets/imgs/background/36.jpg',
                'title': 'Women in the Slaves',
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }, {
                'id': 5,
                'avatar': 'assets/imgs/avatar/15.jpg',
                'avatarTitle': 'Katlynn Pouros',
                'avatarSubtitle': 'from Los Angeles',
                'time': '45 min ago',
                'image': 'assets/imgs/background/37.jpg',
                'title': 'Women in the Slaves',
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }, {
                'id': 6,
                'avatar': 'assets/imgs/avatar/16.jpg',
                'avatarTitle': 'Katlynn Pouros',
                'avatarSubtitle': 'from Los Angeles',
                'time': '21 min ago',
                'image': 'assets/imgs/background/38.jpg',
                'title': 'Women in the Slaves',
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }]
            };
          };

          this.getDataForTheme = function (menuItem) {
            return _this24['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          };
        }

        _createClass(ListViewGoogleCardsService, [{
          key: "load",
          value: function load(item) {
            var _this25 = this;

            var that = this;
            that.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this25.af.object('listView/googleCards/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  that.loadingService.hide();
                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  that.loadingService.hide();
                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this25.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return ListViewGoogleCardsService;
      }();

      ListViewGoogleCardsService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      ListViewGoogleCardsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])], ListViewGoogleCardsService);
      /***/
    },

    /***/
    "./src/app/services/list-view-swipe-to-dismiss-service.ts":
    /*!****************************************************************!*\
      !*** ./src/app/services/list-view-swipe-to-dismiss-service.ts ***!
      \****************************************************************/

    /*! exports provided: ListViewSwipeToDismissService */

    /***/
    function srcAppServicesListViewSwipeToDismissServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListViewSwipeToDismissService", function () {
        return ListViewSwipeToDismissService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var ListViewSwipeToDismissService = /*#__PURE__*/function () {
        function ListViewSwipeToDismissService(af, loadingService) {
          var _this26 = this;

          _classCallCheck(this, ListViewSwipeToDismissService);

          this.af = af;
          this.loadingService = loadingService;

          this.getId = function () {
            return 'swipeToDismiss';
          };

          this.getTitle = function () {
            return 'Swipe to dismiss';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'swipe-to-dismiss/0',
              'title': 'Small item + header',
              'theme': 'layout1'
            }, {
              'url': 'swipe-to-dismiss/1',
              'title': 'Products + CTA',
              'theme': 'layout2'
            }, {
              'url': 'swipe-to-dismiss/2',
              'title': 'Full with image + left swipe',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this26['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'headerTitle': 'Small item + header',
              "header": "Inbox",
              "title": "8 new mesages",
              "subtitle": "Mark all messages as read.",
              "button": "ok",
              "items": [{
                "id": 1,
                "title": "Yasmine Hassan",
                "subtitle": "AIGA Design Conference",
                "time": "6min ago",
                'iconDelate': 'icon-delete',
                'iconUndo': 'icon-undo-variant'
              }, {
                "id": 2,
                "title": "Adam Wolters",
                "subtitle": "An Event Apart",
                "time": "58min ago",
                'iconDelate': 'icon-delete',
                'iconUndo': 'icon-undo-variant'
              }, {
                "id": 3,
                "title": "Livia Koning",
                "subtitle": "Core 77 Conference",
                "time": "12min ago",
                'iconDelate': 'icon-delete',
                'iconUndo': 'icon-undo-variant'
              }, {
                "id": 4,
                "title": "Fatima Hussein",
                "subtitle": "London Design Festival",
                "time": "23min ago",
                'iconDelate': 'icon-delete',
                'iconUndo': 'icon-undo-variant'
              }, {
                "id": 5,
                "title": "Lars Sambo",
                "subtitle": "NeoCon",
                "time": "43min ago",
                'iconDelate': 'icon-delete',
                'iconUndo': 'icon-undo-variant'
              }, {
                "id": 6,
                "title": "Kyan Zhou",
                "subtitle": "New York Times Cities for Tomorrow",
                "time": "62min ago",
                'iconDelate': 'icon-delete',
                'iconUndo': 'icon-undo-variant'
              }, {
                "id": 7,
                "title": "Amina Mohan",
                "subtitle": "Salone del Mobile Milano",
                "time": "81min ago",
                'iconDelate': 'icon-delete',
                'iconUndo': 'icon-undo-variant'
              }, {
                "id": 8,
                "title": "Emir van der Velden",
                "subtitle": "Creative Mornings",
                "time": "98min ago",
                'iconDelate': 'icon-delete',
                'iconUndo': 'icon-undo-variant'
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'headerTitle': 'Products + CTA',
              "header": "Followings",
              "items": [{
                "id": 1,
                "title": "Isabel Anguiano",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                "image": "assets/imgs/avatar/9.jpg",
                "ionBadge": "Follow",
                "delate": "Delete"
              }, {
                "id": 2,
                "title": "Iria Mascareñas",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                "image": "assets/imgs/avatar/10.jpg",
                "ionBadge": "Follow",
                "delate": "Delete"
              }, {
                "id": 3,
                "title": "Maria Cardenas",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                "image": "assets/imgs/avatar/11.jpg",
                "ionBadge": "Follow",
                "delate": "Delete"
              }, {
                "id": 4,
                "title": "Silvia Salvador",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                "image": "assets/imgs/avatar/12.jpg",
                "ionBadge": "Follow",
                "delate": "Delete"
              }, {
                "id": 5,
                "title": "Marina Vidal",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur.",
                "image": "assets/imgs/avatar/13.jpg",
                "ionBadge": "Follow",
                "delate": "Delete"
              }, {
                "id": 6,
                "title": "Sara Alcántarl",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                "image": "assets/imgs/avatar/14.jpg",
                "ionBadge": "Follow",
                "delate": "Delete"
              }, {
                "id": 7,
                "title": "Gabriela Reyes",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                "image": "assets/imgs/avatar/15.jpg",
                "ionBadge": "Follow",
                "delate": "Delete"
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'headerTitle': 'Full with image + left swipe',
              "items": [{
                "id": 1,
                "title": "Acoustic Guitars",
                "subtitle": "Pre-sale",
                "image": "assets/imgs/background/10.jpg",
                "delate": "Delete"
              }, {
                "id": 2,
                "title": "Bass guitar",
                "subtitle": "Order now!",
                "image": "assets/imgs/background/13.jpg",
                "delate": "Delete"
              }, {
                "id": 3,
                "title": "Classical guitar",
                "subtitle": "Pre-sale",
                "image": "assets/imgs/background/15.jpg",
                "delate": "Delete"
              }]
            };
          };
        }

        _createClass(ListViewSwipeToDismissService, [{
          key: "load",
          value: function load(item) {
            var _this27 = this;

            var that = this;
            that.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this27.af.object('listView/swipeToDismiss/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  that.loadingService.hide();
                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  that.loadingService.hide();
                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this27.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return ListViewSwipeToDismissService;
      }();

      ListViewSwipeToDismissService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      ListViewSwipeToDismissService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], ListViewSwipeToDismissService);
      /***/
    },

    /***/
    "./src/app/services/loading-service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/loading-service.ts ***!
      \*********************************************/

    /*! exports provided: LoadingService */

    /***/
    function srcAppServicesLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingCtrl) {
          _classCallCheck(this, LoadingService);

          this.loadingCtrl = loadingCtrl;
        }

        _createClass(LoadingService, [{
          key: "show",
          value: function show() {// this.loading = this.loadingCtrl.create({
            // message: 'Please wait...'
            // });
            // this.loading.present();
          }
        }, {
          key: "hide",
          value: function hide() {// this.loading.dismiss();
          }
        }]);

        return LoadingService;
      }();

      LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }];
      };

      LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])], LoadingService);
      /***/
    },

    /***/
    "./src/app/services/login-service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/login-service.ts ***!
      \*******************************************/

    /*! exports provided: LoginService */

    /***/
    function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(af, loadingService) {
          var _this28 = this;

          _classCallCheck(this, LoginService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Login pages';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'login/0',
              'title': 'Login + logo 1',
              'theme': 'layout1'
            }, {
              'url': 'login/1',
              'title': 'Login + logo 2',
              'theme': 'layout2'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this28['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'headerTitle': 'Login + logo 1',
              "background": "assets/imgs/background/39.jpg",
              "username": "Enter your username",
              "password": "Enter your password",
              "labelUsername": "USERNAME",
              "labelPassword": "PASSWORD",
              "register": "Register now!",
              "forgotPassword": "Forgot password?",
              "login": "Login",
              "loginFacebook": "Login With",
              "subtitle": "Welcome",
              "title": "Login to your account",
              "description": "Don't have account?",
              "skip": "Skip",
              "logo": "assets/imgs/logo/1.png"
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'headerTitle': 'Login + logo 2',
              "background": "assets/imgs/background/28.jpg",
              "forgotPassword": "Forgot password?",
              "subtitle": "Welcome",
              "labelUsername": "USERNAME",
              "labelPassword": "PASSWORD",
              "title": "Login to your account",
              "username": "Enter your username",
              "password": "Enter your password",
              "register": "Register",
              "login": "Login",
              "skip": "Skip",
              "description": "Don't have account?",
              "logo": "assets/imgs/logo/1.png"
            };
          };
        }

        _createClass(LoginService, [{
          key: "load",
          value: function load(item) {
            var _this29 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this29.af.object('login/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this29.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this29.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this29.loadingService.hide();

                observer.next(_this29.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return LoginService;
      }();

      LoginService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], LoginService);
      /***/
    },

    /***/
    "./src/app/services/maps-service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/maps-service.ts ***!
      \******************************************/

    /*! exports provided: MapsService */

    /***/
    function srcAppServicesMapsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapsService", function () {
        return MapsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var MapsService = /*#__PURE__*/function () {
        function MapsService(af, loadingService) {
          var _this30 = this;

          _classCallCheck(this, MapsService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Maps';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'maps/0',
              'title': 'GMAPS + Location  Details',
              'theme': 'layout1'
            }, {
              'url': 'maps/1',
              'title': 'GMAPS + About Us',
              'theme': 'layout2'
            }, {
              'url': 'maps/2',
              'title': 'Full Screen View',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this30['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'GMAPS + Location  Details',
              'title': 'Best Restaurants for Power Lunches',
              'titleDescription': 'The iconic restaurant that has defined the term power lunch since 1959 is the one and only Four Seasons.',
              'reviews': '4.12 (78 reviews)',
              'contentDescription': "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n             Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris.\n             Consequat gravida pretium ligula lectus;\n             Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
              'iconLoacation': 'icon-map-marker-radius',
              'iconLoacationText': 'Design Street, New York, USA',
              'iconWatch': 'icon-alarm',
              'iconWatchText': '8:00 to 16:00 working days',
              'iconPhone': 'icon-phone',
              'iconPhoneText': '333 222 111',
              'iconEarth': 'icon-earth',
              'iconEarthText': 'www.csform.com',
              'iconEmail': 'icon-email-outline',
              'iconEmailText': 'dev@csform.com',
              'iconsStars': [{
                'iconActive': 'icon-star',
                'iconInactive': 'icon-star-outline',
                'isActive': true
              }, {
                'iconActive': 'icon-star',
                'iconInactive': 'icon-star-outline',
                'isActive': true
              }, {
                'iconActive': 'icon-star',
                'iconInactive': 'icon-star-outline',
                'isActive': true
              }, {
                'iconActive': 'icon-star',
                'iconInactive': 'icon-star-outline',
                'isActive': true
              }, {
                'iconActive': 'icon-star',
                'iconInactive': 'icon-star-outline',
                'isActive': false
              }],
              "map": {
                "lat": 40.712562,
                "lng": -74.005911,
                "zoom": 15,
                "mapTypeControl": true,
                "streetViewControl": true
              }
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'GMAPS + About Us',
              'title': 'Creative Studio Form',
              'titleDescription': 'Design & Development agency',
              'contentTitle': 'About us',
              'contentDescription': "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n             Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris.\n             Consequat gravida pretium ligula lectus;\n              Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
              'iconLoacation': 'icon-map-marker-radius',
              'iconLoacationText': 'Design Street, New York, USA',
              'iconWatch': 'icon-alarm',
              'iconWatchText': '8:00 to 16:00 working days',
              'iconPhone': 'icon-phone',
              'iconPhoneText': '333 222 111',
              'iconEarth': 'icon-earth',
              'iconEarthText': 'www.csform.com',
              'iconEmail': 'icon-email-outline',
              'iconEmailText': 'dev@csform.com',
              'titleMap': 'Here we are :',
              'map': {
                'lat': 40.712562,
                'lng': -74.005911,
                'zoom': 15,
                'mapTypeControl': true,
                'streetViewControl': true
              }
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Full Screen View',
              'map': {
                'lat': 40.712562,
                'lng': -74.005911,
                'zoom': 15,
                'mapTypeControl': true,
                'streetViewControl': true
              }
            };
          };
        }

        _createClass(MapsService, [{
          key: "load",
          value: function load(item) {
            var _this31 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this31.af.object('maps/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this31.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this31.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this31.loadingService.hide();

                observer.next(_this31.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return MapsService;
      }();

      MapsService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      MapsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], MapsService);
      /***/
    },

    /***/
    "./src/app/services/menu-service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/menu-service.ts ***!
      \******************************************/

    /*! exports provided: MenuService */

    /***/
    function srcAppServicesMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuService", function () {
        return MenuService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var MenuService = /*#__PURE__*/function () {
        function MenuService(af, loadingService) {
          var _this32 = this;

          _classCallCheck(this, MenuService);

          this.af = af;
          this.loadingService = loadingService;

          this.getId = function () {
            return 'menu';
          };

          this.getTitle = function () {
            return 'UIAppTemplate';
          }; //* Data Set for main menu


          this.getAllThemes = function () {
            return [{
              'url': 'items/listViews',
              'title': 'List Views',
              'theme': 'listViews',
              'icon': 'icon-format-align-justify',
              'listView': true,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/parallax',
              'title': 'Parallax',
              'theme': 'parallax',
              'icon': 'icon-format-line-spacing',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'settings',
              'title': 'RTL + Color Change',
              'theme': 'demo',
              'icon': 'icon-settings',
              'listView': false,
              'component': '',
              'singlePage': true
            }, {
              'url': 'items/animation',
              'title': 'Animations',
              'theme': 'animation',
              'icon': 'icon-arrange-bring-forward',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/login',
              'title': 'Login Pages',
              'theme': 'login',
              'icon': 'icon-lock-open-outline',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/register',
              'title': 'Register Pages',
              'theme': 'register',
              'icon': 'icon-comment-account',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/forgetPassword',
              'title': 'Forgot Password Pages',
              'theme': 'forgetPassword',
              'icon': 'icon-eye-off',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/newPassword',
              'title': 'Old/New Password Pages',
              'theme': 'newPassword',
              'icon': 'icon-key-variant',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/imageGallery',
              'title': 'Image Gallery',
              'theme': 'imageGallery',
              'icon': 'icon-apps',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/splashScreens',
              'title': 'Splash Screen',
              'theme': 'splashScreens',
              'icon': 'icon-logout',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/checkBoxes',
              'title': 'Check Boxs',
              'theme': 'checkBoxes',
              'icon': 'icon-checkbox-marked',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/searchBars',
              'title': 'Search Bars',
              'theme': 'searchBars',
              'icon': 'icon-magnify',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/textViews',
              'title': 'Typo + small components',
              'theme': 'textViews',
              'icon': 'icon-tumblr',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/wizard',
              'title': 'Wizard',
              'theme': 'wizard',
              'icon': 'icon-cellphone-settings',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/spinner',
              'title': 'Spinner',
              'theme': 'spinner',
              'icon': 'icon-image-filter-tilt-shift',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/tabs',
              'title': 'Tabs',
              'theme': 'tabs',
              'icon': 'icon-view-array',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/maps',
              'title': 'Maps',
              'theme': 'maps',
              'icon': 'icon-google-maps',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/qrcode',
              'title': 'QRCode',
              'theme': 'qrcode',
              'icon': 'icon-qrcode',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/timeline',
              'title': 'Timeline',
              'theme': 'timeline',
              'icon': 'icon-timer',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/radioButton',
              'title': 'Radio Button',
              'theme': 'radioButton',
              'icon': 'icon-radiobox-marked',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/range',
              'title': 'Range',
              'theme': 'range',
              'icon': 'icon-toggle-switch-off',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/form',
              'title': 'Forms',
              'theme': 'form',
              'icon': 'icon-content-paste',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/toggle',
              'title': 'Toggle',
              'theme': 'toggle',
              'icon': 'icon-toggle-switch',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/select',
              'title': 'Select',
              'theme': 'select',
              'icon': 'icon-menu-down',
              'listView': true,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/profile',
              'title': 'Profile',
              'theme': 'profile',
              'icon': 'icon-account-outline',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/comment',
              'title': 'Comments',
              'theme': 'comment',
              'icon': 'icon-comment-outline',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/payment',
              'title': 'Payment',
              'theme': 'payment',
              'icon': 'icon-cash',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/segment',
              'title': 'Segment',
              'theme': 'segment',
              'icon': 'icon-timelapse',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/scrollSegment',
              'title': 'Scroll Segment',
              'theme': 'scrollSegment',
              'icon': 'icon-view-carousel',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/actionSheet',
              'title': 'Action Sheet',
              'theme': 'actionSheet',
              'icon': 'icon-dots-horizontal',
              'listView': false,
              'component': '',
              'singlePage': false
            }, {
              'url': 'items/alert',
              'title': 'Alert',
              'theme': 'alert',
              'icon': 'icon-alert',
              'listView': false,
              'component': '',
              'singlePage': false
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return {
              'background': 'assets/imgs/background/16.jpg',
              'image': 'assets/imgs/logo/logo.png',
              'title': 'Ionic UI - Brkko Theme'
            };
          };

          this.getEventsForTheme = function (menuItem) {
            return {};
          };

          this.prepareParams = function (item) {
            return {
              title: item.title,
              data: {},
              events: _this32.getEventsForTheme(item)
            };
          };
        }

        _createClass(MenuService, [{
          key: "load",
          value: function load(item) {
            var _this33 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this33.af.object('menu').valueChanges().subscribe(function (snapshot) {
                  _this33.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this33.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this33.loadingService.hide();

                observer.next(_this33.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return MenuService;
      }();

      MenuService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      MenuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], MenuService);
      /***/
    },

    /***/
    "./src/app/services/new-password-services.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/new-password-services.ts ***!
      \***************************************************/

    /*! exports provided: NewPasswordService */

    /***/
    function srcAppServicesNewPasswordServicesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPasswordService", function () {
        return NewPasswordService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var NewPasswordService = /*#__PURE__*/function () {
        function NewPasswordService(af, loadingService) {
          var _this34 = this;

          _classCallCheck(this, NewPasswordService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Old/New Passworsd pages';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'new-password/0',
              'title': 'New Password With Background',
              'theme': 'layout1'
            }, {
              'url': 'new-password/1',
              'title': 'New Password Simple',
              'theme': 'layout2'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this34['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'New Password With Background',
              'title': 'Reset Your Password',
              'subtitle': 'Welcome',
              'background': 'assets/imgs/background/39.jpg',
              'labelPassword': 'PASSWORD',
              'password': 'New password',
              'labelPasswordNew': 'CONFRIM',
              'confrim': 'Confirm password',
              'done': 'Done',
              'logo': 'assets/imgs/logo/1.png',
              'errorIcon': 'remove-circle'
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'New Password Simple',
              'title': 'Reset Your Password',
              'subtitle': 'Welcome',
              'labelPassword': 'PASSWORD',
              'password': 'New password',
              'labelPasswordNew': 'CONFRIM',
              'confrim': 'Confirm password',
              'done': 'Done',
              'logo': 'assets/imgs/logo/1.png',
              'errorIcon': 'remove-circle'
            };
          };
        }

        _createClass(NewPasswordService, [{
          key: "load",
          value: function load(item) {
            var _this35 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this35.af.object('newPassword/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this35.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this35.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this35.loadingService.hide();

                observer.next(_this35.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return NewPasswordService;
      }();

      NewPasswordService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      NewPasswordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], NewPasswordService);
      /***/
    },

    /***/
    "./src/app/services/parallax-service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/parallax-service.ts ***!
      \**********************************************/

    /*! exports provided: ParallaxService */

    /***/
    function srcAppServicesParallaxServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParallaxService", function () {
        return ParallaxService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var ParallaxService = /*#__PURE__*/function () {
        function ParallaxService(af, loadingService) {
          var _this36 = this;

          _classCallCheck(this, ParallaxService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Parallax';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'parallax/0',
              'title': 'News List',
              'theme': 'layout1'
            }, {
              'url': 'parallax/1',
              'title': 'Profile',
              'theme': 'layout2'
            }, {
              'url': 'parallax/2',
              'title': 'Basic',
              'theme': 'layout3'
            }, {
              'url': 'parallax/3',
              'title': 'News',
              'theme': 'layout4'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this36['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Showbiz',
              "headerImage": "assets/imgs/background/9.jpg",
              "title": "Engage real-time",
              "subtitle": "Startup Pitches",
              "items": [{
                "id": 1,
                "title": "Victoria Simpson",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/9.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 2,
                "title": "Samantha Reynolds",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/10.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 3,
                "title": "Stacey Harris",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/11.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 4,
                "title": "Jacqueline Guyon",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/12.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 5,
                "title": "Mia Langevoort",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/13.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 6,
                "title": "Amy Simsek",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/14.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 7,
                "title": "Charlotte Sital",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/15.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 8,
                "title": "Iria Padrón",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/16.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 9,
                "title": "Laura Sarabia",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/17.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 10,
                "title": "Alexia Bañuelos",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/18.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 11,
                "title": "Erika Quiroz",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/19.jpg",
                "imageAlt": "avatar",
                "button": "Read"
              }, {
                "id": 12,
                "title": "Emma Banda",
                "subtitle": "Aenean pretium nunc vel rhoncus.",
                "image": "assets/imgs/avatar/20.jpg",
                "imageAlt": "Presque Isle Harbor",
                "button": "Read"
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Profile',
              "headerImage": "assets/imgs/background/40.jpg",
              "avatar": "assets/imgs/avatar/22.jpg",
              "title": "Bruce Wilkerson",
              "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "items": [{
                "id": 1,
                "avatar": "assets/imgs/avatar/16.jpg",
                "title": "Abbie Kelly",
                "subtitle": "@abbie",
                "button": "Follow"
              }, {
                "id": 2,
                "avatar": "assets/imgs/avatar/17.jpg",
                "title": "Luna Adorno",
                "subtitle": "@luna",
                "button": "Follow"
              }, {
                "id": 3,
                "avatar": "assets/imgs/avatar/18.jpg",
                "title": "Tara Saunders",
                "subtitle": "@tara",
                "button": "Follow"
              }, {
                "id": 4,
                "avatar": "assets/imgs/avatar/19.jpg",
                "title": "Amy Lee",
                "subtitle": "@amy",
                "button": "Follow"
              }, {
                "id": 5,
                "avatar": "assets/imgs/avatar/20.jpg",
                "title": "Silvia Salvador",
                "subtitle": "@silvia",
                "button": "Follow"
              }, {
                "id": 6,
                "avatar": "assets/imgs/avatar/15.jpg",
                "title": "Patrick Wright",
                "subtitle": "@patrick",
                "button": "Follow"
              }, {
                "id": 7,
                "avatar": "assets/imgs/avatar/22.jpg",
                "title": "Gabriel Mascareñas",
                "subtitle": "@gabriel",
                "button": "Follow"
              }, {
                "id": 8,
                "avatar": "assets/imgs/avatar/14.jpg",
                "title": "Sofia Clarke",
                "subtitle": "@stephen",
                "button": "Follow"
              }, {
                "id": 9,
                "avatar": "assets/imgs/avatar/21.jpg",
                "title": "Milenko Draganic",
                "subtitle": "@milenko",
                "button": "Follow"
              }, {
                "id": 10,
                "avatar": "assets/imgs/avatar/23.jpg",
                "title": "Danijel Bilic",
                "subtitle": "@danijel",
                "button": "Follow"
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Product',
              "headerImage": "assets/imgs/background/9.jpg",
              "shareIcon": "ellipsis-horizontal",
              "items": [{
                "id": 1,
                "category": "NEW OFFER",
                "title": "Super & Black",
                "titleDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy",
                "subtitle": "Available Now",
                "button": "$63.99",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "productDescriptions": [{
                  "id": 1,
                  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }, {
                  "id": 2,
                  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }, {
                  "id": 3,
                  "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                }, {
                  "id": 4,
                  "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                }]
              }]
            };
          }; //* Data Set for page 4


          this.getDataForLayout4 = function () {
            return {
              "toolbarTitle": "News",
              "headerImage": "assets/imgs/background/5.jpg",
              "title": "Infinit bridge made in China.",
              "subtitle": "by Myrtle Stiedemann",
              "category": "ENGINEERING",
              "avatar": "assets/imgs/avatar/23.jpg",
              "shareIcon": "ellipsis-horizontal",
              "items": [{
                "id": 1,
                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }, {
                "id": 2,
                "title": "Lorem ipsum dolor sit amet",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }, {
                "id": 3,
                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
              }, {
                "id": 4,
                "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              }]
            };
          };
        }

        _createClass(ParallaxService, [{
          key: "load",
          value: function load(item) {
            var _this37 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this37.af.object('parallax/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this37.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this37.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this37.loadingService.hide();

                observer.next(_this37.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return ParallaxService;
      }();

      ParallaxService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      ParallaxService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], ParallaxService);
      /***/
    },

    /***/
    "./src/app/services/payment-service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/payment-service.ts ***!
      \*********************************************/

    /*! exports provided: PaymentService */

    /***/
    function srcAppServicesPaymentServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentService", function () {
        return PaymentService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var PaymentService = /*#__PURE__*/function () {
        function PaymentService(af, loadingService) {
          var _this38 = this;

          _classCallCheck(this, PaymentService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Payment';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'payment/0',
              'title': 'Payment',
              'theme': 'layout1'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this38['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Payment',
              'title': 'Payment',
              'imgs': 'assets/imgs/background/41.jpg',
              'cardNumber': 'Card Number',
              'cardHolder': 'Card Holder',
              'experienceDate': 'Exp. Date',
              'code': 'CVC Code',
              'button': 'Continue'
            };
          };
        }

        _createClass(PaymentService, [{
          key: "load",
          value: function load(item) {
            var _this39 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this39.af.object('payment/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this39.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this39.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this39.loadingService.hide();

                observer.next(_this39.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return PaymentService;
      }();

      PaymentService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      PaymentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], PaymentService);
      /***/
    },

    /***/
    "./src/app/services/profile-service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/profile-service.ts ***!
      \*********************************************/

    /*! exports provided: ProfileService */

    /***/
    function srcAppServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
        return ProfileService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./toast-service */
      "./src/app/services/toast-service.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var ProfileService = /*#__PURE__*/function () {
        function ProfileService(af, loadingService, toastCtrl) {
          var _this40 = this;

          _classCallCheck(this, ProfileService);

          this.af = af;
          this.loadingService = loadingService;
          this.toastCtrl = toastCtrl;

          this.getTitle = function () {
            return 'Profile';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'profile/0',
              'title': 'Profile With Avatar',
              'theme': 'layout1'
            }, {
              'url': 'profile/1',
              'title': 'Profile with Slider + Comments',
              'theme': 'layout2'
            }, {
              'url': 'profile/2',
              'title': 'Profile Basic',
              'theme': 'layout3'
            }, {
              'url': 'profile/3',
              'title': 'Profile with Slider',
              'theme': 'layout4'
            }, {
              'url': 'profile/4',
              'title': 'Profile with Big Image',
              'theme': 'layout5'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this40['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Profile With Avatar',
              "image": "assets/imgs/avatar/20.jpg",
              "title": "Samantha Kennedy",
              "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
              "category": "populary",
              "items": [{
                "id": 1,
                "category": "Engineering News",
                "title": "Small flying robots haul heavy loads",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }, {
                "id": 2,
                "category": "Bioengineering News",
                "title": "Creating custom brains from the ground up",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }, {
                "id": 3,
                "category": "Energy and Resources News",
                "title": "3D-printed lithium-ion batteries",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Profile with Slider + Comments',
              "image": "assets/imgs/avatar/22.jpg",
              "title": "Carolyn Guerrero",
              "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
              "category": "populary",
              "followers": "Followers",
              "valueFollowers": "439",
              "following": "Following",
              "valueFollowing": "297",
              "posts": "Posts",
              "valuePosts": "43",
              "items": [{
                "id": 1,
                "category": "Engineering News",
                "title": "New definition returns meaning to information",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }, {
                "id": 2,
                "category": "Science News",
                "title": "Investigating glaciers in depth",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }, {
                "id": 3,
                "category": "Science News",
                "title": "Nanodiamonds as photocatalysts",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Profile Basic',
              "image": "assets/imgs/avatar/24.jpg",
              "title": "Carolyn Guerrero",
              "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
              "category": "populary",
              "followers": "Followers",
              "valueFollowers": "439",
              "following": "Following",
              "valueFollowing": "297",
              "posts": "Posts",
              "valuePosts": "43",
              "items": [{
                "id": 1,
                "category": "architecture",
                "backgroundCard": "assets/imgs/background/5.jpg",
                "title": "Sea bridge opens between hong kong and china",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }, {
                "id": 2,
                "category": "architecture",
                "backgroundCard": "assets/imgs/background/21.jpg",
                "title": "The World's longest sea crossing opens",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }, {
                "id": 3,
                "category": "architecture",
                "backgroundCard": "assets/imgs/background/2.jpg",
                "title": "The 'bank of africa tower' will be tallest",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }]
            };
          }; //* Data Set for page 4


          this.getDataForLayout4 = function () {
            return {
              'toolbarTitle': 'Profile with Slider',
              "image": "assets/imgs/avatar/16.jpg",
              "title": "Katie Murray",
              "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
              "category": "populary",
              "followers": "Followers",
              "valueFollowers": "439",
              "following": "Following",
              "valueFollowing": "297",
              "posts": "Posts",
              "valuePosts": "43",
              "items": [{
                "id": 1,
                "category": "architecture",
                "backgroundCard": "assets/imgs/background/21.jpg",
                "title": "The World's longest sea crossing opens",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }, {
                "id": 2,
                "category": "architecture",
                "backgroundCard": "assets/imgs/background/5.jpg",
                "title": "SSea bridge opens between hong kong and china",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }, {
                "id": 3,
                "category": "architecture",
                "backgroundCard": "assets/imgs/background/2.jpg",
                "title": "The 'bank of africa tower' will be tallest",
                "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": true
                },
                "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
                  "isActive": false
                }
              }]
            };
          }; //* Data Set for page 5


          this.getDataForLayout5 = function () {
            return {
              'toolbarTitle': 'Profile with Big Image',
              "headerImage": "assets/imgs/background/26.jpg",
              "image": "assets/imgs/avatar/12.jpg",
              "title": "Jennifer Reid",
              "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
              "category": "populary",
              "followers": "Followers",
              "valueFollowers": "439",
              "following": "Following",
              "valueFollowing": "297",
              "posts": "Posts",
              "valuePosts": "43",
              "logoFacebook": "logo-facebook",
              "logoTwitter": "logo-twitter",
              "logoInstagram": "logo-instagram",
              "items": [{
                "id": 1,
                "iconPhone": "call",
                "iconMail": "mail-open",
                "iconGlobe": "globe",
                "phone": "i598-968-5698987",
                "mail": "dev@csform.com",
                "globe": "csform.com",
                "content": "Content",
                "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "title": "About"
              }]
            };
          };
        }

        _createClass(ProfileService, [{
          key: "load",
          value: function load(item) {
            var _this41 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this41.af.object('profile/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this41.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this41.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this41.loadingService.hide();

                observer.next(_this41.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return ProfileService;
      }();

      ProfileService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])], ProfileService);
      /***/
    },

    /***/
    "./src/app/services/qrcode-service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/qrcode-service.ts ***!
      \********************************************/

    /*! exports provided: QRCodeService */

    /***/
    function srcAppServicesQrcodeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QRCodeService", function () {
        return QRCodeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var QRCodeService = /*#__PURE__*/function () {
        function QRCodeService(af, loadingService) {
          var _this42 = this;

          _classCallCheck(this, QRCodeService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Scanner';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'qrcode/0',
              'title': 'Qrcode Scanner',
              'theme': 'layout1'
            }, {
              'url': 'qrcode/1',
              'title': 'Qrcode Encode',
              'theme': 'layout2'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this42['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          };
        } //* Data Set for page 1


        _createClass(QRCodeService, [{
          key: "getDataForLayout1",
          value: function getDataForLayout1() {
            return {
              'toolbarTitle': 'QRCode page'
            };
          } //* Data Set for page 2

        }, {
          key: "getDataForLayout2",
          value: function getDataForLayout2() {
            return {
              'toolbarTitle': 'QRCode page',
              'title': 'Click To Generate QR Code',
              'label': 'Please insert your text',
              'buttonText': 'Encode Text'
            };
          }
        }, {
          key: "load",
          value: function load(item) {
            var _this43 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this43.af.object('qrcode/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this43.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this43.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this43.loadingService.hide();

                observer.next(_this43.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return QRCodeService;
      }();

      QRCodeService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      QRCodeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], QRCodeService);
      /***/
    },

    /***/
    "./src/app/services/radio-button-service.ts":
    /*!**************************************************!*\
      !*** ./src/app/services/radio-button-service.ts ***!
      \**************************************************/

    /*! exports provided: RadioButtonService */

    /***/
    function srcAppServicesRadioButtonServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioButtonService", function () {
        return RadioButtonService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var RadioButtonService = /*#__PURE__*/function () {
        function RadioButtonService(af, loadingService) {
          var _this44 = this;

          _classCallCheck(this, RadioButtonService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Radio Button';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'radio-button/0',
              'title': 'Simple',
              'theme': 'layout1'
            }, {
              'url': 'radio-button/1',
              'title': 'With avatars',
              'theme': 'layout2'
            }, {
              'url': 'radio-button/2',
              'title': 'Simple 2',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this44['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Simple',
              "title": "Your country",
              "selectedItem": 3,
              "items": [{
                "id": 1,
                "title": "The Gambia"
              }, {
                "id": 2,
                "title": "Ecuador"
              }, {
                "id": 4,
                "title": "Czechia"
              }, {
                "id": 3,
                "title": "Brunei"
              }, {
                "id": 5,
                "title": "Madagascar"
              }, {
                "id": 6,
                "title": "Kuwait"
              }, {
                "id": 7,
                "title": "Liechtenstein"
              }, {
                "id": 8,
                "title": "Kiribati"
              }, {
                "id": 9,
                "title": "Hungary"
              }, {
                "id": 10,
                "title": "Fiji"
              }, {
                "id": 11,
                "title": "Serbia"
              }, {
                "id": 12,
                "title": "Saint Lucia"
              }, {
                "id": 13,
                "title": "Portugal"
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'With avatars',
              "title": "Following",
              "selectedItem": 4,
              "items": [{
                "id": 1,
                "title": "Tara Saunders",
                "subtitle": "@tara333",
                "avatar": "assets/imgs/avatar/24.jpg"
              }, {
                "id": 2,
                "title": "Daniel Perrin",
                "subtitle": "@daniel",
                "avatar": "assets/imgs/avatar/23.jpg"
              }, {
                "id": 4,
                "title": "Jackson Phillips",
                "subtitle": "@jackson",
                "avatar": "assets/imgs/avatar/22.jpg"
              }, {
                "id": 3,
                "title": "Antoine Chevallier",
                "subtitle": "@antoine",
                "avatar": "assets/imgs/avatar/21.jpg"
              }, {
                "id": 5,
                "title": "Jessica White",
                "subtitle": "@jessica",
                "avatar": "assets/imgs/avatar/20.jpg"
              }, {
                "id": 6,
                "title": "Laetitia Duhamel",
                "subtitle": "@laetitia",
                "avatar": "assets/imgs/avatar/19.jpg"
              }, {
                "id": 7,
                "title": "Sylvie Rey",
                "subtitle": "@sylvie",
                "avatar": "assets/imgs/avatar/18.jpg"
              }, {
                "id": 8,
                "title": "Julie Lewis",
                "subtitle": "@julie44",
                "avatar": "assets/imgs/avatar/17.jpg"
              }, {
                "id": 9,
                "title": "Layla Chapman",
                "subtitle": "@layla",
                "avatar": "assets/imgs/avatar/16.jpg"
              }, {
                "id": 10,
                "title": "Charlotte Pelletier",
                "subtitle": "@charlotte",
                "avatar": "assets/imgs/avatar/15.jpg"
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Simple 2',
              "title": "Loctions",
              "selectedItem": 4,
              "items": [{
                "id": 1,
                "title": "New York City",
                "subtitle": "United States"
              }, {
                "id": 2,
                "title": "Paris",
                "subtitle": "France"
              }, {
                "id": 4,
                "title": "Istanbul",
                "subtitle": "Turkey"
              }, {
                "id": 3,
                "title": "Tokyo",
                "subtitle": "‎Japan"
              }, {
                "id": 5,
                "title": "Moscow",
                "subtitle": "Russia"
              }, {
                "id": 6,
                "title": "Mexico City",
                "subtitle": "Mexico"
              }, {
                "id": 7,
                "title": "Rio de Janeiro",
                "subtitle": "Brazil"
              }, {
                "id": 8,
                "title": "Berlin",
                "subtitle": "Germany"
              }, {
                "id": 9,
                "title": "Madrid",
                "subtitle": "Spain"
              }, {
                "id": 10,
                "title": "London",
                "subtitle": "United Kingdom"
              }, {
                "id": 11,
                "title": "Shanghai",
                "subtitle": "China"
              }, {
                "id": 12,
                "title": "Seoul",
                "subtitle": "South Korea"
              }, {
                "id": 13,
                "title": "Cairo",
                "subtitle": "Egypt"
              }]
            };
          };
        }

        _createClass(RadioButtonService, [{
          key: "load",
          value: function load(item) {
            var _this45 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this45.af.object('radioButton/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this45.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this45.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this45.loadingService.hide();

                observer.next(_this45.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return RadioButtonService;
      }();

      RadioButtonService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      RadioButtonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], RadioButtonService);
      /***/
    },

    /***/
    "./src/app/services/range-service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/range-service.ts ***!
      \*******************************************/

    /*! exports provided: RangeService */

    /***/
    function srcAppServicesRangeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RangeService", function () {
        return RangeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var RangeService = /*#__PURE__*/function () {
        function RangeService(af, loadingService) {
          _classCallCheck(this, RangeService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Range';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'range/0',
              'title': 'All',
              'theme': 'layout1'
            }];
          }; // Set Data For Range Services


          this.getDataForTheme = function (menuItem) {
            return {
              'toolbarTitle': 'All',
              // Set Data For Range Services - BASIC
              'layout1': {
                'title': 'BASIC',
                'value': 10
              },
              // Set Data For Range Services - WITH ICONS
              'layout2': {
                'title': 'WITH ICONS',
                'iconLeft': 'icon-volume-low',
                'iconRight': 'icon-volume-high',
                'min': '-200',
                'max': '200',
                'value': 0
              },
              // Set Data For Range Services - WITH PREDEFINED STEPS
              'layout3': {
                'textLeft': 'A',
                'textRight': 'A',
                'title': 'WITH PREDEFINED STEPS',
                'min': '1000',
                'max': '2000',
                'step': '100',
                'value': 20
              },
              // Set Data For Range Services - TWO SLIDERS
              'layout4': {
                'title': 'TWO SLIDERS',
                'min': '1',
                'max': '100',
                'step': '10',
                'value': {
                  'lower': 20,
                  'upper': 70
                },
                'textLeft': '1',
                'textRight': '10'
              }
            };
          };
        }

        _createClass(RangeService, [{
          key: "load",
          value: function load(item) {
            var _this46 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this46.af.object('ranges').valueChanges().subscribe(function (snapshot) {
                  _this46.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this46.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this46.loadingService.hide();

                observer.next(_this46.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return RangeService;
      }();

      RangeService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      RangeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], RangeService);
      /***/
    },

    /***/
    "./src/app/services/register-service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/register-service.ts ***!
      \**********************************************/

    /*! exports provided: RegisterService */

    /***/
    function srcAppServicesRegisterServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
        return RegisterService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var RegisterService = /*#__PURE__*/function () {
        function RegisterService(af, loadingService) {
          var _this47 = this;

          _classCallCheck(this, RegisterService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Register pages';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'register/0',
              'title': 'Register + logo',
              'theme': 'layout1'
            }, {
              'url': 'register/1',
              'title': 'Register + image',
              'theme': 'layout2'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this47['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              "toolbarTitle": "Register + logo",
              "logo": "assets/imgs/logo/1.png",
              "register": "register",
              "title": "Register your new account",
              "background": "assets/imgs/background/29.jpg",
              "username": "Enter your username",
              "city": "Your home town",
              "country": "Where are you from?",
              "password": "Enter your password",
              "email": "Your e-mail address",
              "skip": "Skip",
              "lableUsername": "USERNAME",
              "lablePassword": "PASSWORD",
              "lableEmail": "E-MAIL",
              "lableCountry": "COUNTRY",
              "lableCity": "CITY"
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              "toolbarTitle": "Register + image",
              "title": "Register",
              "background": "assets/imgs/background/2.jpg",
              "username": "Enter your username",
              "city": "Your home town",
              "country": "Where are you from?",
              "password": "Enter your password",
              "email": "Your e-mail address",
              "register": "register",
              "lableUsername": "USERNAME",
              "lablePassword": "PASSWORD",
              "lableEmail": "E-MAIL",
              "lableCountry": "COUNTRY",
              "lableCity": "CITY"
            };
          };
        }

        _createClass(RegisterService, [{
          key: "load",
          value: function load(item) {
            var _this48 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this48.af.object('register/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this48.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this48.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this48.loadingService.hide();

                observer.next(_this48.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return RegisterService;
      }();

      RegisterService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      RegisterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], RegisterService);
      /***/
    },

    /***/
    "./src/app/services/scroll-segment-service.ts":
    /*!****************************************************!*\
      !*** ./src/app/services/scroll-segment-service.ts ***!
      \****************************************************/

    /*! exports provided: ScrollSegmentService */

    /***/
    function srcAppServicesScrollSegmentServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollSegmentService", function () {
        return ScrollSegmentService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var ScrollSegmentService = /*#__PURE__*/function () {
        function ScrollSegmentService(af, loadingService) {
          var _this49 = this;

          _classCallCheck(this, ScrollSegmentService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Scroll Segment';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'scrollSegment/0',
              'title': 'Scroll Segment Text Top',
              'theme': 'layout1'
            }, {
              'url': 'scrollSegment/1',
              'title': 'Scroll Segment Text Bottom',
              'theme': 'layout2'
            }, {
              'url': 'scrollSegment/2',
              'title': 'Scroll Segment Icon Top',
              'theme': 'layout3'
            }, {
              'url': 'scrollSegment/3',
              'title': 'Scroll Segment Icon With Text Bottom',
              'theme': 'layout4'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this49['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              "toolbarTitle": "Scroll Segment Text Top",
              "segmentHeader": [{
                "text": "Profile"
              }, {
                "text": "New Offer"
              }, {
                "text": "Best  Offer"
              }],
              // Data Page 1
              "page1": {
                'image': 'assets/imgs/avatar/20.jpg',
                'title': 'Amanda Smith',
                'subtitle': 'Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.',
                'followers': 'Followers',
                'valueFollowers': '439',
                'following': 'Following',
                'valueFollowing': '297',
                'posts': 'Posts',
                'valuePosts': '43',
                'buttonFollow': 'Follow',
                'buttonMessage': 'Message',
                'items': [{
                  'id': 1,
                  'subtitle': 'Iphone',
                  'title': 'Iphone 8',
                  'time': '22 August',
                  'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }, {
                  'id': 2,
                  'subtitle': 'Mac',
                  'title': 'Keyboard',
                  'time': '19 August',
                  'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }, {
                  'id': 3,
                  'subtitle': 'Photoaparat',
                  'title': 'Canon Photoaparat',
                  'time': '12 August',
                  'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }, {
                  'id': 4,
                  'subtitle': 'Music',
                  'title': 'Headphones',
                  'time': '10 August',
                  'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }, {
                  'id': 5,
                  'subtitle': 'Watch',
                  'title': 'Watch Black',
                  'time': '5 August',
                  'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }]
              },
              // Data Page 2
              "page2": {
                "items": [{
                  "id": 1,
                  "title": "Iphone 8",
                  "description": "Lorem ipsum dolor sit amet",
                  "image": "assets/imgs/avatar/1.jpg",
                  "price": "$99.99"
                }, {
                  "id": 2,
                  "title": "Keyboard",
                  "description": "Lorem ipsum dolor sit amet",
                  "image": "assets/imgs/avatar/2.jpg",
                  "price": "$139.99"
                }, {
                  "id": 3,
                  "title": "Canon Photoaparat",
                  "description": "Lorem ipsum dolor sit amet",
                  "image": "assets/imgs/avatar/3.jpg",
                  "price": "$149.99"
                }, {
                  "id": 4,
                  "title": "Headphones",
                  "description": "Lorem ipsum dolor sit amet",
                  "image": "assets/imgs/avatar/4.jpg",
                  "price": "$19.99"
                }, {
                  "id": 5,
                  "title": "Watch Black",
                  "description": "Lorem ipsum dolor sit amet",
                  "image": "assets/imgs/avatar/5.jpg",
                  "price": "$199.99"
                }]
              },
              // Data Page 3
              "page3": {
                "items": [{
                  "id": 1,
                  "title": "Iphone 8",
                  "description": "Lorem ipsum dolor sit amet",
                  "image": "assets/imgs/avatar/1.jpg",
                  "price": "$99.99",
                  "button": "Buy"
                }, {
                  "id": 2,
                  "title": "Keyboard",
                  "description": "Lorem ipsum dolor sit amet",
                  "image": "assets/imgs/avatar/2.jpg",
                  "price": "$139.99",
                  "button": "Buy"
                }, {
                  "id": 3,
                  "title": "Canon Photoaparat",
                  "description": "Lorem ipsum dolor sit amet",
                  "image": "assets/imgs/avatar/3.jpg",
                  "price": "$149.99",
                  "button": "Buy"
                }, {
                  "id": 4,
                  "title": "Headphones",
                  "description": "Lorem ipsum dolor sit amet",
                  "image": "assets/imgs/avatar/4.jpg",
                  "price": "$19.99",
                  "button": "Buy"
                }, {
                  "id": 5,
                  "title": "Watch Black",
                  "description": "Lorem ipsum dolor sit amet",
                  "image": "assets/imgs/avatar/5.jpg",
                  "price": "$199.99",
                  "button": "Buy"
                }]
              }
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Scroll Segment Text Bottom',
              "segmentHeader": [{
                "text": "Profile"
              }, {
                "text": "European Travel"
              }, {
                "text": "Asian Travel"
              }],
              // Data Page 1
              "page1": {
                'image': 'assets/imgs/avatar/21.jpg',
                'title': 'Carolyn Guerrero',
                'subtitle': 'From New York',
                'description': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                'button': 'Follow',
                'icon': "chatbubble-ellipses",
                'followers': 'Followers',
                'valueFollowers': '439',
                'following': 'Following',
                'valueFollowing': '297',
                'posts': 'Posts',
                'valuePosts': '43',
                'items': [{
                  'id': 1,
                  'category': 'Best Cities',
                  'backgroundCard': 'assets/imgs/background/21.jpg',
                  'title': 'New York City, United States'
                }, {
                  'id': 2,
                  'category': 'Best Cities',
                  'backgroundCard': 'assets/imgs/background/5.jpg',
                  'title': 'London, England'
                }, {
                  'id': 3,
                  'category': 'Best Cities',
                  'backgroundCard': 'assets/imgs/background/7.jpg',
                  'title': 'Paris, France'
                }]
              },
              // Data Page 2
              "page2": {
                'items': [{
                  'id': 1,
                  'title': 'Athens, Greece',
                  'subtitle': 'Trendier than ever, Athens is a city in constant evolution ...',
                  'price': '$ 340',
                  'image': 'assets/imgs/background/2.jpg'
                }, {
                  'id': 2,
                  'title': 'Tbilisi, Georgia',
                  'subtitle': 'The Capital of Georgia is more trendy than ever in 2020; it ...',
                  'price': '$ 200',
                  'image': 'assets/imgs/background/7.jpg'
                }, {
                  'id': 3,
                  'title': 'Vienna, Austria',
                  'subtitle': 'Vienna is, with Paris, Rome, Bruges and Prague, one of the ...',
                  'price': '$ 500',
                  'image': 'assets/imgs/background/5.jpg'
                }, {
                  'id': 4,
                  'title': 'Cascais, Portugal',
                  'subtitle': 'Cascais is truly one of the best destinations in Europe. It ...',
                  'price': '$ 100',
                  'image': 'assets/imgs/background/18.jpg'
                }, {
                  'id': 5,
                  'title': 'Sibiu, Romania',
                  'subtitle': 'Still wondering which will be the next trendy destination this ...',
                  'price': '$ 600',
                  'image': 'assets/imgs/background/21.jpg'
                }]
              },
              // Data Page 3
              "page3": {
                'items': [{
                  'id': 1,
                  'title': 'Beijing, China',
                  'subtitle': 'In the past year, China capital has seen the opening of ...',
                  'image': 'assets/imgs/background/21.jpg'
                }, {
                  'id': 2,
                  'title': 'Kuala Lumpur, Malaysia',
                  'subtitle': 'Chic boutique hotels as well as Four Seasons and the ...',
                  'image': 'assets/imgs/background/5.jpg'
                }, {
                  'id': 3,
                  'title': 'Kyoto, Japan',
                  'subtitle': 'As visits to Kyoto continue to climb, a trend that will ...',
                  'image': 'assets/imgs/background/14.jpg'
                }, {
                  'id': 4,
                  'title': 'Singapore',
                  'subtitle': 'In 2019, Singapore iconic Raffles Hotel reopened after ...',
                  'image': 'assets/imgs/background/2.jpg'
                }, {
                  'id': 5,
                  'title': 'Songyang County, China',
                  'subtitle': 'Rural Songyang County in China eastern Zhejiang province ...',
                  'image': 'assets/imgs/background/18.jpg'
                }]
              }
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Scroll Segment Icon Top',
              "segmentHeader": [{
                "icon": "heart"
              }, {
                "icon": "chatbox"
              }, {
                "icon": "reader"
              }],
              // Data Page 1
              "page1": {
                'items': [{
                  'id': 1,
                  'title': 'Dubai, United Arab Emirates',
                  'price': '$ 20 per month',
                  'available': 'Available Now',
                  'image': 'assets/imgs/background/5.jpg',
                  "iconsStars": [{
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star-outline"
                  }]
                }, {
                  'id': 2,
                  'title': 'Moscow, Russia',
                  'price': '$ 700 per month',
                  'available': 'Available Now',
                  'image': 'assets/imgs/background/2.jpg',
                  "iconsStars": [{
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star-outline"
                  }]
                }, {
                  'id': 3,
                  'title': 'Tokyo, Japan',
                  'price': '$ 300 per month',
                  'available': 'Available Now',
                  'image': 'assets/imgs/background/21.jpg',
                  "iconsStars": [{
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star-outline"
                  }]
                }, {
                  'id': 4,
                  'title': 'Paris, France',
                  'price': '$ 500 per month',
                  'available': 'Available Now',
                  'image': 'assets/imgs/background/14.jpg',
                  "iconsStars": [{
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star-outline"
                  }]
                }]
              },
              // Data Page 2
              "page2": {
                'allComments': '2121 Comments',
                'items': [{
                  'id': 1,
                  'image': 'assets/imgs/avatar/16.jpg',
                  'title': 'Erica Romaguera',
                  'time': '18 August 2018 at 12:20pm',
                  'description': 'If you could have any kind of pet, what would you choose?'
                }, {
                  'id': 2,
                  'image': 'assets/imgs/avatar/15.jpg',
                  'title': 'Caleigh Jerde',
                  'time': '18 August 2018 at 8:13pm',
                  'description': 'If you could learn any language, what would you choose?'
                }, {
                  'id': 3,
                  'image': 'assets/imgs/avatar/14.jpg',
                  'title': 'Lucas Schultz',
                  'time': '18 August 2018 at 5:22pm',
                  'description': 'Life is about making an impact, not making an income.'
                }, {
                  'id': 4,
                  'image': 'assets/imgs/avatar/13.jpg',
                  'title': 'Carole Marvin',
                  'time': '18 August 2018 at 7:36am',
                  'description': "I\u2019ve learned that people will forget what you said,\n                     people will forget what you did, but people will never forget how you made them feel"
                }, {
                  'id': 5,
                  'image': 'assets/imgs/avatar/12.jpg',
                  'title': 'Doriana Feeney',
                  'time': '18 August 2018 at 5:28am',
                  'description': 'Definiteness of purpose is the starting point of all achievement.'
                }, {
                  'id': 6,
                  'image': 'assets/imgs/avatar/11.jpg',
                  'title': 'Nia Gutkowski',
                  'time': '18 August 2018 at 11:27pm',
                  'description': 'Life is what happens to you while you’re busy making other plans'
                }]
              },
              // Data Page 3
              "page3": {
                "rating": "4.5",
                "iconsStars": [{
                  "iconStar": "star"
                }, {
                  "iconStar": "star"
                }, {
                  "iconStar": "star"
                }, {
                  "iconStar": "star"
                }, {
                  "iconStar": "star-outline"
                }],
                "items": [{
                  "id": 1,
                  "title": "Erica Romaguera",
                  "time": "18 August 2018",
                  "description": "If you could have any kind of pet, what would you choose?",
                  "iconsStars": [{
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star-outline"
                  }, {
                    "iconStar": "star-outline"
                  }]
                }, {
                  "id": 2,
                  "title": "Caleigh Jerde",
                  "time": "18 August 2018",
                  "description": "If you could learn any language, what would you choose?",
                  "iconsStars": [{
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star-outline"
                  }, {
                    "iconStar": "star-outline"
                  }, {
                    "iconStar": "star-outline"
                  }]
                }, {
                  "id": 3,
                  "title": "Lucas Schultz",
                  "time": "18 August 2018",
                  "description": "Life is about making an impact, not making an income.",
                  "iconsStars": [{
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star-outline"
                  }]
                }, {
                  "id": 4,
                  "title": "Carole Marvin",
                  "time": "18 August 2018",
                  "description": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
                  "iconsStars": [{
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }]
                }, {
                  "id": 5,
                  "title": "Doriana Feeney",
                  "time": "18 August 2018",
                  "description": "Definiteness of purpose is the starting point of all achievement.",
                  "iconsStars": [{
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star-outline"
                  }]
                }, {
                  "id": 6,
                  "title": "Nia Gutkowski",
                  "time": "18 August 2018",
                  "description": "Life is what happens to you while you’re busy making other plans",
                  "iconsStars": [{
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star-outline"
                  }]
                }]
              }
            };
          }; //* Data Set for page 4


          this.getDataForLayout4 = function () {
            return {
              'toolbarTitle': 'Scroll Segment Icon With Text Bottom',
              "segmentHeader": [{
                "text": "Profile",
                "icon": "person-circle"
              }, {
                "text": "Commnets",
                "icon": "chatbox-ellipses"
              }, {
                "text": "Review",
                "icon": "reader"
              }],
              // Data Page 1
              "page1": {
                'toolbarTitle': 'Profile With Big Avatar',
                'image': 'assets/imgs/avatar/24.jpg',
                'title': 'Claire Stewart',
                'subtitle': 'Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.',
                'buttonFollow': 'Follow',
                'buttonMessage': 'Message',
                'category': 'Favorite',
                'image1': 'assets/imgs/background/5.jpg',
                'image2': 'assets/imgs/background/2.jpg',
                'image3': 'assets/imgs/background/21.jpg'
              },
              // Data Page 2
              "page2": {
                'allComments': '2121 Comments',
                'items': [{
                  'id': 1,
                  'image': 'assets/imgs/avatar/17.jpg',
                  'title': 'Erica Romaguera',
                  'time': '18 August',
                  'description': 'If you could have any kind of pet, what would you choose?',
                  'buttonLike': '743',
                  'buttonDislike': '33',
                  'iconLike': 'thumbs-up',
                  'iconDislike': 'thumbs-down',
                  "iconsStars": [{
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star-outline"
                  }]
                }, {
                  'id': 2,
                  'image': 'assets/imgs/avatar/18.jpg',
                  'title': 'Caleigh Jerde',
                  'time': '18 August',
                  'description': 'If you could learn any language, what would you choose?',
                  'buttonLike': '743',
                  'buttonDislike': '33',
                  'iconLike': 'thumbs-up',
                  'iconDislike': 'thumbs-down',
                  "iconsStars": [{
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star-outline"
                  }, {
                    "icon": "star-outline"
                  }]
                }, {
                  'id': 3,
                  'image': 'assets/imgs/avatar/19.jpg',
                  'title': 'Lucas Schultz',
                  'time': '18 August',
                  'description': 'Life is about making an impact, not making an income.',
                  'buttonLike': '743',
                  'buttonDislike': '33',
                  'iconLike': 'thumbs-up',
                  'iconDislike': 'thumbs-down',
                  "iconsStars": [{
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star-outline"
                  }]
                }, {
                  'id': 4,
                  'image': 'assets/imgs/avatar/20.jpg',
                  'title': 'Carole Marvin',
                  'time': '18 August',
                  'description': "I\u2019ve learned that people will forget what you said,\n                     people will forget what you did, but people will never forget how you made them feel",
                  'buttonLike': '743',
                  'buttonDislike': '33',
                  'iconLike': 'thumbs-up',
                  'iconDislike': 'thumbs-down',
                  "iconsStars": [{
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star-outline"
                  }, {
                    "icon": "star-outline"
                  }]
                }, {
                  'id': 5,
                  'image': 'assets/imgs/avatar/21.jpg',
                  'title': 'Doriana Feeney',
                  'time': '18 August',
                  'description': 'Definiteness of purpose is the starting point of all achievement.',
                  'buttonLike': '743',
                  'buttonDislike': '33',
                  'iconLike': 'thumbs-up',
                  'iconDislike': 'thumbs-down',
                  "iconsStars": [{
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star-outline"
                  }]
                }, {
                  'id': 6,
                  'image': 'assets/imgs/avatar/22.jpg',
                  'title': 'Nia Gutkowski',
                  'time': '18 August',
                  'description': 'Life is what happens to you while you’re busy making other plans',
                  'buttonLike': '743',
                  'buttonDislike': '33',
                  'iconLike': 'thumbs-up',
                  'iconDislike': 'thumbs-down',
                  "iconsStars": [{
                    "icon": "star"
                  }, {
                    "icon": "star"
                  }, {
                    "icon": "star-outline"
                  }, {
                    "icon": "star-outline"
                  }, {
                    "icon": "star-outline"
                  }]
                }]
              },
              // Data Page 3
              "page3": {
                "rating": "4.5",
                "iconsStars": [{
                  "iconStar": "star"
                }, {
                  "iconStar": "star"
                }, {
                  "iconStar": "star"
                }, {
                  "iconStar": "star"
                }, {
                  "iconStar": "star-outline"
                }],
                "items": [{
                  "id": 1,
                  "title": "Erica Romaguera",
                  "time": "18 August 2018",
                  "description": "If you could have any kind of pet, what would you choose?",
                  "iconsStars": [{
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star-outline"
                  }, {
                    "iconStar": "star-outline"
                  }]
                }, {
                  "id": 2,
                  "title": "Caleigh Jerde",
                  "time": "18 August 2018",
                  "description": "If you could learn any language, what would you choose?",
                  "iconsStars": [{
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star-outline"
                  }, {
                    "iconStar": "star-outline"
                  }, {
                    "iconStar": "star-outline"
                  }]
                }, {
                  "id": 3,
                  "title": "Lucas Schultz",
                  "time": "18 August 2018",
                  "description": "Life is about making an impact, not making an income.",
                  "iconsStars": [{
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star-outline"
                  }]
                }, {
                  "id": 4,
                  "title": "Carole Marvin",
                  "time": "18 August 2018",
                  "description": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
                  "iconsStars": [{
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }]
                }, {
                  "id": 5,
                  "title": "Doriana Feeney",
                  "time": "18 August 2018",
                  "description": "Definiteness of purpose is the starting point of all achievement.",
                  "iconsStars": [{
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star-outline"
                  }]
                }, {
                  "id": 6,
                  "title": "Nia Gutkowski",
                  "time": "18 August 2018",
                  "description": "Life is what happens to you while you’re busy making other plans",
                  "iconsStars": [{
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star"
                  }, {
                    "iconStar": "star-outline"
                  }]
                }]
              }
            };
          };
        }

        _createClass(ScrollSegmentService, [{
          key: "load",
          value: function load(item) {
            var _this50 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this50.af.object('scrollSegment/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this50.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this50.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this50.loadingService.hide();

                observer.next(_this50.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return ScrollSegmentService;
      }();

      ScrollSegmentService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      ScrollSegmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], ScrollSegmentService);
      /***/
    },

    /***/
    "./src/app/services/search-bar-service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/search-bar-service.ts ***!
      \************************************************/

    /*! exports provided: SearchBarService */

    /***/
    function srcAppServicesSearchBarServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchBarService", function () {
        return SearchBarService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var SearchBarService = /*#__PURE__*/function () {
        function SearchBarService(af, loadingService) {
          var _this51 = this;

          _classCallCheck(this, SearchBarService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Search bars';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'search-bars/0',
              'title': 'Simple',
              'theme': 'layout1'
            }, {
              'url': 'search-bars/1',
              'title': 'Field + header',
              'theme': 'layout2'
            }, {
              'url': 'search-bars/2',
              'title': 'Field + header 2',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this51['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Simple',
              "items": [{
                "title": "friends",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/background/1.jpg"
              }, {
                "title": "enemies",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/background/2.jpg"
              }, {
                "title": "neutral",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/background/3.jpg"
              }, {
                "title": "family",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/background/4.jpg"
              }, {
                "title": "guests",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/background/5.jpg"
              }, {
                "title": "students",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/background/6.jpg"
              }, {
                "title": "friends",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/background/7.jpg"
              }, {
                "title": "enemies",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/background/8.jpg"
              }, {
                "title": "neutral",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "image": "assets/imgs/background/9.jpg"
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Field + header',
              "title": "Just type",
              "headerImage": "assets/imgs/background/1.jpg",
              "items": [{
                "title": "iPhone 8",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/1.jpg",
                "button": "BUY"
              }, {
                "title": "500+",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/2.jpg",
                "button": "BUY"
              }, {
                "title": "watch black",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/3.jpg",
                "button": "BUY"
              }, {
                "title": "canon photoaparat",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/4.jpg",
                "button": "BUY"
              }, {
                "title": "50mm",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/5.jpg",
                "button": "BUY"
              }, {
                "title": "nikon photoaparat",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/6.jpg",
                "button": "BUY"
              }, {
                "title": "sony PS 4",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/7.jpg",
                "button": "BUY"
              }, {
                "title": "watch new",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "avatar": "assets/imgs/avatar/8.jpg",
                "button": "BUY"
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Field + header 2',
              "title": "Search Friends",
              "items": [{
                "id": 1,
                "title": "justine robinson",
                "subtitle": "@justine",
                "detail": "Berlin",
                "avatar": "assets/imgs/avatar/22.jpg"
              }, {
                "id": 2,
                "title": "ruben escribano",
                "subtitle": "@ruben",
                "detail": "Casablanca",
                "avatar": "assets/imgs/avatar/23.jpg"
              }, {
                "id": 3,
                "title": "abbie wilson",
                "subtitle": "@abbie453",
                "detail": "Cape Town",
                "avatar": "assets/imgs/avatar/24.jpg"
              }, {
                "id": 4,
                "title": "laura sarabia",
                "subtitle": "@laura",
                "detail": "New Taipei City",
                "avatar": "assets/imgs/avatar/19.jpg"
              }, {
                "id": 5,
                "title": "lizzie rose",
                "subtitle": "@lizzie",
                "detail": "Jakarta",
                "avatar": "assets/imgs/avatar/20.jpg"
              }, {
                "id": 6,
                "title": "fernando villegas",
                "subtitle": "@fernando",
                "detail": "São Paulo",
                "avatar": "assets/imgs/avatar/21.jpg"
              }, {
                "id": 7,
                "title": "theresa stewart",
                "subtitle": "@theresa",
                "detail": "Guangzhou",
                "avatar": "assets/imgs/avatar/16.jpg"
              }, {
                "id": 8,
                "title": "helena scott",
                "subtitle": "@helena44",
                "detail": "Shanghai",
                "avatar": "assets/imgs/avatar/17.jpg"
              }]
            };
          };
        }

        _createClass(SearchBarService, [{
          key: "load",
          value: function load(item) {
            var _this52 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this52.af.object('searchBars/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this52.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this52.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this52.loadingService.hide();

                observer.next(_this52.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return SearchBarService;
      }();

      SearchBarService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      SearchBarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], SearchBarService);
      /***/
    },

    /***/
    "./src/app/services/segment-service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/segment-service.ts ***!
      \*********************************************/

    /*! exports provided: SegmentService */

    /***/
    function srcAppServicesSegmentServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SegmentService", function () {
        return SegmentService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var SegmentService = /*#__PURE__*/function () {
        function SegmentService(af, loadingService) {
          var _this53 = this;

          _classCallCheck(this, SegmentService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Segment';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'segment/0',
              'title': 'Segment List',
              'theme': 'layout1'
            }, {
              'url': 'segment/1',
              'title': 'Segment Card',
              'theme': 'layout2'
            }, {
              'url': 'segment/2',
              'title': 'Segment Post',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this53['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Segment List',
              "segmentButton1": "New Product",
              "segmentButton2": "Most Sold Products",
              "segmentButton3": "Make Order",
              // Data Page 1
              "page1": {
                "background": "assets/imgs/background/9.jpg",
                "items": [{
                  "id": 1,
                  "title": "Nikon",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/0.jpg",
                  "button": "Buy"
                }, {
                  "id": 2,
                  "title": "500+",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/2.jpg",
                  "button": "Buy"
                }, {
                  "id": 3,
                  "title": "Canon Photoaparat",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/4.jpg",
                  "button": "Buy"
                }, {
                  "id": 4,
                  "title": "iPhone 8 Plus",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/1.jpg",
                  "button": "Buy"
                }, {
                  "id": 5,
                  "title": "50mm",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/5.jpg",
                  "button": "Buy"
                }]
              },
              // Data Page 2
              "page2": {
                "background": "assets/imgs/background/6.jpg",
                "items": [{
                  "id": 1,
                  "title": "Nikon Photoaparat",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/6.jpg"
                }, {
                  "id": 2,
                  "title": "iPhone 8 Plus",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/1.jpg"
                }, {
                  "id": 3,
                  "title": "50mm",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/5.jpg"
                }, {
                  "id": 4,
                  "title": "Nikon",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/0.jpg"
                }, {
                  "id": 5,
                  "title": "500+",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/2.jpg"
                }]
              },
              // Data Page 3
              "page3": {
                "title": "Make order now!",
                "subtitle": "List products",
                "button": "Get",
                "items": [{
                  "id": 1,
                  "title": "500+",
                  "subtitle": "20% Off",
                  "image": "assets/imgs/avatar/2.jpg",
                  "price": "$199.99"
                }, {
                  "id": 2,
                  "title": "iWatch black",
                  "subtitle": "15% Off",
                  "image": "assets/imgs/avatar/3.jpg",
                  "price": "$295.99"
                }, {
                  "id": 3,
                  "title": "Nikon Photoaparat",
                  "subtitle": "22% Off",
                  "image": "assets/imgs/avatar/6.jpg",
                  "price": "$1032.99"
                }, {
                  "id": 4,
                  "title": "Canon Photoaparat",
                  "subtitle": "10% Off",
                  "image": "assets/imgs/avatar/0.jpg",
                  "price": "$1269.99"
                }, {
                  "id": 5,
                  "title": "50mm",
                  "subtitle": "12% Off",
                  "image": "assets/imgs/avatar/5.jpg",
                  "price": "$34.99"
                }, {
                  "id": 6,
                  "title": "Sony PS",
                  "subtitle": "14% Off",
                  "image": "assets/imgs/avatar/7.jpg",
                  "price": "$499.99"
                }]
              }
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Segment Card',
              "segmentButton1": "Profile",
              "segmentButton2": "All Products",
              "segmentButton3": "About Us",
              // Data Page 1
              "page1": {
                "image": "assets/imgs/avatar/22.jpg",
                "title": "Carolyn Guerrero",
                "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
                "category": "populary",
                "followers": "Followers",
                "valueFollowers": "439",
                "following": "Following",
                "valueFollowing": "297",
                "posts": "Posts",
                "valuePosts": "43",
                "items": [{
                  "id": 1,
                  "category": "Engineering News",
                  "title": "New definition returns meaning to information",
                  "like": {
                    "icon": "heart",
                    "text": "Like",
                    "isActive": true
                  },
                  "comment": {
                    "icon": "chatbubbles",
                    "number": "4",
                    "text": "Comments",
                    "isActive": false
                  }
                }, {
                  "id": 2,
                  "category": "Science News",
                  "title": "Investigating glaciers in depth",
                  "like": {
                    "icon": "heart",
                    "text": "Like",
                    "isActive": true
                  },
                  "comment": {
                    "icon": "chatbubbles",
                    "number": "4",
                    "text": "Comments",
                    "isActive": false
                  }
                }, {
                  "id": 3,
                  "category": "Science News",
                  "title": "Nanodiamonds as photocatalysts",
                  "like": {
                    "icon": "heart",
                    "text": "Like",
                    "isActive": true
                  },
                  "comment": {
                    "icon": "chatbubbles",
                    "number": "4",
                    "text": "Comments",
                    "isActive": false
                  }
                }]
              },
              // Data Page 2
              "page2": {
                "items": [{
                  "id": 1,
                  "title": "Digital Watch",
                  "subtitle": "Category: Watch",
                  "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                  "image": "assets/imgs/background/6.jpg"
                }, {
                  "id": 2,
                  "title": "Android Watch",
                  "subtitle": "Category: Watch",
                  "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
                  "image": "assets/imgs/background/9.jpg"
                }, {
                  "id": 3,
                  "title": "Acoustic Guitars",
                  "subtitle": "Category: Guitars",
                  "description": "Icero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
                  "image": "assets/imgs/background/10.jpg"
                }, {
                  "id": 4,
                  "title": "Bass guitar",
                  "subtitle": "Category: Guitars",
                  "description": "Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
                  "image": "assets/imgs/background/13.jpg"
                }]
              },
              // Data Page 3
              "page3": {
                'toolbarTitle': 'GMAPS + About Us',
                'title': 'Creative Studio Form',
                'titleDescription': 'Design & Development agency',
                'contentTitle': 'About us',
                'contentDescription': "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n               Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris.\n               Consequat gravida pretium ligula lectus;\n                Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
                'iconLoacation': 'icon-map-marker-radius',
                'iconLoacationText': 'Design Street, New York, USA',
                'iconWatch': 'icon-alarm',
                'iconWatchText': '8:00 to 16:00 working days',
                'iconPhone': 'icon-phone',
                'iconPhoneText': '333 222 111',
                'iconEarth': 'icon-earth',
                'iconEarthText': 'www.csform.com',
                'iconEmail': 'icon-email-outline',
                'iconEmailText': 'dev@csform.com',
                'titleMap': 'Here we are :',
                'map': {
                  'lat': 40.712562,
                  'lng': -74.005911,
                  'zoom': 15,
                  'mapTypeControl': true,
                  'streetViewControl': true
                }
              }
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Segment Post',
              "segmentButton1": "Profile",
              "segmentButton2": "All Post",
              "segmentButton3": "Old Post",
              // Data Page 1
              "page1": {
                "image": "assets/imgs/avatar/24.jpg",
                "title": "Carolyn Guerrero",
                "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
                "category": "populary",
                "followers": "Followers",
                "valueFollowers": "439",
                "following": "Following",
                "valueFollowing": "297",
                "posts": "Posts",
                "valuePosts": "43",
                "items": [{
                  "id": 1,
                  "category": "architecture",
                  "backgroundCard": "assets/imgs/background/5.jpg",
                  "title": "Sea bridge opens between hong kong and china",
                  "like": {
                    "icon": "heart",
                    "text": "Like",
                    "isActive": true
                  },
                  "comment": {
                    "icon": "chatbubbles",
                    "number": "4",
                    "text": "Comments",
                    "isActive": false
                  }
                }, {
                  "id": 2,
                  "category": "architecture",
                  "backgroundCard": "assets/imgs/background/21.jpg",
                  "title": "The World's longest sea crossing opens",
                  "like": {
                    "icon": "heart",
                    "text": "Like",
                    "isActive": true
                  },
                  "comment": {
                    "icon": "chatbubbles",
                    "number": "4",
                    "text": "Comments",
                    "isActive": false
                  }
                }, {
                  "id": 3,
                  "category": "architecture",
                  "backgroundCard": "assets/imgs/background/2.jpg",
                  "title": "The 'bank of africa tower' will be tallest",
                  "like": {
                    "icon": "heart",
                    "text": "Like",
                    "isActive": true
                  },
                  "comment": {
                    "icon": "chatbubbles",
                    "number": "4",
                    "text": "Comments",
                    "isActive": false
                  }
                }]
              },
              // Data Page 2
              "page2": {
                "items": [{
                  "id": 1,
                  "title": "Free Ride",
                  "backgroundImage": "assets/imgs/background/2.jpg",
                  "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                }, {
                  "id": 2,
                  "title": "Bridge Tour",
                  "backgroundImage": "assets/imgs/background/5.jpg",
                  "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                }, {
                  "id": 3,
                  "title": "Sea Tour",
                  "backgroundImage": "assets/imgs/background/21.jpg",
                  "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                }, {
                  "id": 4,
                  "title": "Main Stage Event",
                  "backgroundImage": "assets/imgs/background/7.jpg",
                  "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                }, {
                  "id": 5,
                  "title": "Classic Open Air",
                  "backgroundImage": "assets/imgs/background/11.jpg",
                  "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                }, {
                  "id": 6,
                  "title": "Concert Summer",
                  "backgroundImage": "assets/imgs/background/14.jpg",
                  "description": "LCras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                }, {
                  "id": 7,
                  "title": "Open Air Concerts",
                  "backgroundImage": "assets/imgs/background/10.jpg",
                  "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.."
                }]
              },
              // Data Page 2
              "page3": {
                "items": [{
                  "id": 1,
                  "image": "assets/imgs/background/7.jpg",
                  "time": "09 May 2018",
                  "title": "Elton John at the Troubadour",
                  "description": "When Elton John took the stage at Los Angeles’ Troubadour for the first night of his six-date residency...",
                  "like": {
                    "icon": "heart",
                    "number": "12",
                    "isActive": false
                  },
                  "comment": {
                    "icon": "chatbubbles",
                    "number": "4",
                    "isActive": false
                  }
                }, {
                  "id": 2,
                  "image": "assets/imgs/background/15.jpg",
                  "time": "08 July 2018",
                  "title": "The Rolling Stones",
                  "description": "Jagger still marvels at the live version – particularly Mick Taylor’s searing lead guitar, which slowly...",
                  "like": {
                    "icon": "heart",
                    "number": "12",
                    "isActive": false
                  },
                  "comment": {
                    "icon": "chatbubbles",
                    "number": "4",
                    "isActive": false
                  }
                }, {
                  "id": 3,
                  "image": "assets/imgs/background/13.jpg",
                  "time": "11 September 2018",
                  "title": "The Ramones European Tour",
                  "description": "The Ramones arrived in England with something to prove. The punk revolution had broken out in London in...",
                  "like": {
                    "icon": "heart",
                    "number": "12",
                    "isActive": false
                  },
                  "comment": {
                    "icon": "chatbubbles",
                    "number": "4",
                    "isActive": false
                  }
                }, {
                  "id": 4,
                  "image": "assets/imgs/background/10.jpg",
                  "time": "23 July 2018",
                  "title": "The Eagles U.S. Tour",
                  "description": "The career-defining two-year stretch of shows that followed 1976’s Hotel California saw the Eagles become...",
                  "like": {
                    "icon": "heart",
                    "number": "12",
                    "isActive": false
                  },
                  "comment": {
                    "icon": "chatbubbles",
                    "number": "4",
                    "isActive": false
                  }
                }, {
                  "id": 5,
                  "image": "assets/imgs/background/5.jpg",
                  "time": "05 June 2018",
                  "title": "Pink Floyd ‘The Wall’ Tour",
                  "description": "Pink Floyd’s 1979 rock opera, The Wall, was their most ambitious album to date, and when they took it on...",
                  "like": {
                    "icon": "heart",
                    "number": "12",
                    "isActive": false
                  },
                  "comment": {
                    "icon": "chatbubbles",
                    "number": "4",
                    "isActive": false
                  }
                }]
              }
            };
          };
        }

        _createClass(SegmentService, [{
          key: "load",
          value: function load(item) {
            var _this54 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this54.af.object('segment/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this54.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this54.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this54.loadingService.hide();

                observer.next(_this54.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return SegmentService;
      }();

      SegmentService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      SegmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], SegmentService);
      /***/
    },

    /***/
    "./src/app/services/select-service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/select-service.ts ***!
      \********************************************/

    /*! exports provided: SelectService */

    /***/
    function srcAppServicesSelectServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectService", function () {
        return SelectService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var SelectService = /*#__PURE__*/function () {
        function SelectService(af, loadingService) {
          _classCallCheck(this, SelectService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Select';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'select/0',
              'title': 'Single Select',
              'theme': 'layout1'
            }, {
              'url': 'select/1',
              'title': 'Multi Select',
              'theme': 'layout2'
            }];
          }; //* Data Set for page 1


          this.getDataForTheme = function (menuItem) {
            return {
              'title': 'Select',
              'layout1': {
                'headerTitle': 'Single Select',
                'title': 'City',
                'selectedItem': 12,
                'header': 'Basic dialog',
                'items': [{
                  'id': 12,
                  'title': 'New York'
                }, {
                  'id': 14,
                  'title': 'Paris'
                }, {
                  'id': 13,
                  'title': 'Amsterdam'
                }, {
                  'id': 15,
                  'title': 'Gotham City'
                }]
              },
              'layout2': {
                'headerTitle': 'Single Select',
                'title': 'Country',
                'header': 'One touch dialog',
                'selectedItem': 22,
                'items': [{
                  'id': 22,
                  'title': 'USA'
                }, {
                  'id': 24,
                  'title': 'France'
                }, {
                  'id': 23,
                  'title': 'Netherland'
                }, {
                  'id': 25,
                  'title': 'Gothamland'
                }]
              },
              'layout3': {
                'headerTitle': 'Single Select',
                'title': 'Address',
                'header': 'With Action sheet',
                'selectedItem': 31,
                'items': [{
                  'id': 31,
                  'title': 'Choose address'
                }, {
                  'id': 32,
                  'title': '222 Duffield Street'
                }, {
                  'id': 34,
                  'title': '198 Clark Street'
                }, {
                  'id': 33,
                  'title': '588 Kenmore Terrace'
                }]
              },
              'layout4': {
                'headerTitle': 'Multi Select',
                'title': 'Date',
                'header': 'Two option select',
                'selectedItemMonth': 38,
                'selectedItemYear': 50,
                'itemsMonth': [{
                  'id': 38,
                  'title': 'January'
                }, {
                  'id': 39,
                  'title': 'February'
                }, {
                  'id': 40,
                  'title': 'March'
                }, {
                  'id': 41,
                  'title': 'April'
                }, {
                  'id': 42,
                  'title': 'May'
                }, {
                  'id': 43,
                  'title': 'June'
                }, {
                  'id': 44,
                  'title': 'July'
                }, {
                  'id': 45,
                  'title': 'August'
                }, {
                  'id': 46,
                  'title': 'September'
                }, {
                  'id': 47,
                  'title': 'October'
                }, {
                  'id': 48,
                  'title': 'November'
                }, {
                  'id': 49,
                  'title': 'December'
                }],
                'itemsYears': [{
                  'id': 50,
                  'title': '2009'
                }, {
                  'id': 51,
                  'title': '2010'
                }, {
                  'id': 52,
                  'title': '2011'
                }, {
                  'id': 53,
                  'title': '2012'
                }, {
                  'id': 54,
                  'title': '2013'
                }, {
                  'id': 55,
                  'title': '2014'
                }, {
                  'id': 56,
                  'title': '2015'
                }, {
                  'id': 57,
                  'title': '2016'
                }, {
                  'id': 58,
                  'title': '2017'
                }]
              },
              'layout5': {
                'headerTitle': 'Single Select',
                'title': 'Country',
                'header': 'One touch dialog',
                'selectedItem': 22,
                'items': [{
                  'id': 22,
                  'title': 'USA'
                }, {
                  'id': 24,
                  'title': 'France'
                }, {
                  'id': 23,
                  'title': 'Netherland'
                }, {
                  'id': 25,
                  'title': 'Gothamland'
                }]
              },
              'layout6': {
                'headerTitle': 'Multi Select',
                'title': 'Date',
                'header': 'Two option select',
                'selectedItemMonth': 38,
                'selectedItemYear': 50,
                'itemsMonth': [{
                  'id': 38,
                  'title': 'January'
                }, {
                  'id': 39,
                  'title': 'February'
                }, {
                  'id': 40,
                  'title': 'March'
                }, {
                  'id': 41,
                  'title': 'April'
                }, {
                  'id': 42,
                  'title': 'May'
                }, {
                  'id': 43,
                  'title': 'June'
                }, {
                  'id': 44,
                  'title': 'July'
                }, {
                  'id': 45,
                  'title': 'August'
                }, {
                  'id': 46,
                  'title': 'September'
                }, {
                  'id': 47,
                  'title': 'October'
                }, {
                  'id': 48,
                  'title': 'November'
                }, {
                  'id': 49,
                  'title': 'December'
                }],
                'itemsYears': [{
                  'id': 50,
                  'title': '2009'
                }, {
                  'id': 51,
                  'title': '2010'
                }, {
                  'id': 52,
                  'title': '2011'
                }, {
                  'id': 53,
                  'title': '2012'
                }, {
                  'id': 54,
                  'title': '2013'
                }, {
                  'id': 55,
                  'title': '2014'
                }, {
                  'id': 56,
                  'title': '2015'
                }, {
                  'id': 57,
                  'title': '2016'
                }, {
                  'id': 58,
                  'title': '2017'
                }]
              }
            };
          };
        }

        _createClass(SelectService, [{
          key: "load",
          value: function load(item) {
            var _this55 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this55.af.object('select').valueChanges().subscribe(function (snapshot) {
                  _this55.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this55.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this55.loadingService.hide();

                observer.next(_this55.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return SelectService;
      }();

      SelectService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      SelectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], SelectService);
      /***/
    },

    /***/
    "./src/app/services/tabs-service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/tabs-service.ts ***!
      \******************************************/

    /*! exports provided: TabsService */

    /***/
    function srcAppServicesTabsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsService", function () {
        return TabsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var TabsService = /*#__PURE__*/function () {
        function TabsService(af, loadingService) {
          var _this56 = this;

          _classCallCheck(this, TabsService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Tabs';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'tab/0/tab/tab1',
              'title': 'Footer tab - text',
              'theme': 'layout1'
            }, {
              'url': 'tab/1/tab/tab4',
              'title': 'Footer tab - icons',
              'theme': 'layout2'
            }, {
              'url': 'tab/2/tab/tab7',
              'title': 'Header tab - text',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this56['getDataFor' + menuItem.charAt(0).toUpperCase() + menuItem.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForTab1 = function () {
            return {
              'items': [{
                'id': 1,
                'title': 'Fortuitu ad aeroportus',
                'titleHeader': 'Simul quanta praecinctionis',
                'description': "Contra opinione vulgi, accumsan non tantum temere text.\n                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock",
                'image': 'assets/imgs/background/1.jpg',
                'button': 'EXPLORE',
                'shareButton': 'SHARE'
              }, {
                'id': 2,
                'title': 'Hoc est exortum',
                'titleHeader': 'Pedestres sub imprudentia contentum',
                'description': "Contra opinione vulgi, accumsan non tantum temere text.\n                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock",
                'image': 'assets/imgs/background/2.jpg',
                'button': 'EXPLORE',
                'shareButton': 'SHARE'
              }, {
                'id': 3,
                'title': 'Communications moderatoris',
                'titleHeader': 'Technica et Internet habeat facultatem',
                'description': "Contra opinione vulgi, accumsan non tantum temere text.\n                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock",
                'image': 'assets/imgs/background/5.jpg',
                'button': 'EXPLORE',
                'shareButton': 'SHARE'
              }, {
                'id': 4,
                'title': 'Tabulas scripto munus agere providere',
                'titleHeader': 'Ut adeptus est atrium',
                'description': "Contra opinione vulgi, accumsan non tantum temere text.\n                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock",
                'image': 'assets/imgs/background/3.jpg',
                'button': 'EXPLORE',
                'shareButton': 'SHARE'
              }, {
                'id': 5,
                'title': 'In outpatient nuntiatum ministerium',
                'titleHeader': 'Testis unus',
                'description': "Contra opinione vulgi, accumsan non tantum temere text.\n                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock",
                'image': 'assets/imgs/background/1.jpg',
                'button': 'EXPLORE',
                'shareButton': 'SHARE'
              }]
            };
          }; //* Data Set for page 2


          this.getDataForTab2 = function () {
            return {
              'headerTitle': "List Frends",
              "items": [{
                "title": "Isabel Villar",
                "subtitle": "@isabel.villar",
                "follow": "follow",
                "avatar": "assets/imgs/avatar/17.jpg"
              }, {
                "title": "Silvia Salvador",
                "subtitle": "@silvia.salvador",
                "follow": "follow",
                "avatar": "assets/imgs/avatar/16.jpg"
              }, {
                "title": "Marguerite Thibault",
                "subtitle": "@marguerite.thib",
                "follow": "follow",
                "avatar": "assets/imgs/avatar/15.jpg"
              }, {
                "title": "Marianne Maillet",
                "subtitle": "@marianne.maillet",
                "follow": "follow",
                "avatar": "assets/imgs/avatar/14.jpg"
              }, {
                "title": "Julie Martins",
                "subtitle": "@julie.martins",
                "follow": "follow",
                "avatar": "assets/imgs/avatar/13.jpg"
              }, {
                "title": "Sofia Zepeda",
                "subtitle": "@sofia.zepeda",
                "follow": "follow",
                "avatar": "assets/imgs/avatar/12.jpg"
              }, {
                "title": "Nathalie Voisin",
                "subtitle": "@nathalie.voisin",
                "follow": "follow",
                "avatar": "assets/imgs/avatar/11.jpg"
              }]
            };
          }; //* Data Set for page 3


          this.getDataForTab3 = function () {
            return {
              'allComments': '2121 Comments',
              'items': [{
                'id': 1,
                'image': 'assets/imgs/avatar/16.jpg',
                'title': 'Erica Romaguera',
                'time': '18 August 2018 at 12:20pm',
                'description': 'If you could have any kind of pet, what would you choose?'
              }, {
                'id': 2,
                'image': 'assets/imgs/avatar/15.jpg',
                'title': 'Caleigh Jerde',
                'time': '18 August 2018 at 8:13pm',
                'description': 'If you could learn any language, what would you choose?'
              }, {
                'id': 3,
                'image': 'assets/imgs/avatar/14.jpg',
                'title': 'Lucas Schultz',
                'time': '18 August 2018 at 5:22pm',
                'description': 'Life is about making an impact, not making an income.'
              }, {
                'id': 4,
                'image': 'assets/imgs/avatar/13.jpg',
                'title': 'Carole Marvin',
                'time': '18 August 2018 at 7:36am',
                'description': "I\u2019ve learned that people will forget what you said,\n               people will forget what you did, but people will never forget how you made them feel"
              }, {
                'id': 5,
                'image': 'assets/imgs/avatar/12.jpg',
                'title': 'Doriana Feeney',
                'time': '18 August 2018 at 5:28am',
                'description': 'Definiteness of purpose is the starting point of all achievement.'
              }, {
                'id': 6,
                'image': 'assets/imgs/avatar/11.jpg',
                'title': 'Nia Gutkowski',
                'time': '18 August 2018 at 11:27pm',
                'description': 'Life is what happens to you while you’re busy making other plans'
              }]
            };
          }; //* Data Set for page 4


          this.getDataForTab4 = function () {
            return {
              'items': [{
                'id': 1,
                'avatar': 'assets/imgs/avatar/10.jpg',
                'avatarTitle': 'Katlynn Pouros',
                'avatarSubtitle': 'from Los Angeles',
                'time': '15 min ago',
                'image': 'assets/imgs/background/34.jpg',
                'title': 'Women in the Slaves',
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }, {
                'id': 2,
                'avatar': 'assets/imgs/avatar/12.jpg',
                'avatarTitle': 'Katlynn Pouros',
                'avatarSubtitle': 'from Los Angeles',
                'time': '21 min ago',
                'image': 'assets/imgs/background/35.jpg',
                'title': 'Women in the Slaves',
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }, {
                'id': 3,
                'avatar': 'assets/imgs/avatar/13.jpg',
                'avatarTitle': 'Katlynn Pouros',
                'avatarSubtitle': 'from Los Angeles',
                'time': '29 min ago',
                'image': 'assets/imgs/background/36.jpg',
                'title': 'Women in the Slaves',
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }, {
                'id': 4,
                'avatar': 'assets/imgs/avatar/14.jpg',
                'avatarTitle': 'Katlynn Pouros',
                'avatarSubtitle': 'from Los Angeles',
                'time': '32 min ago',
                'image': 'assets/imgs/background/37.jpg',
                'title': 'Women in the Slaves',
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }, {
                'id': 5,
                'avatar': 'assets/imgs/avatar/15.jpg',
                'avatarTitle': 'Katlynn Pouros',
                'avatarSubtitle': 'from Los Angeles',
                'time': '45 min ago',
                'image': 'assets/imgs/background/16.jpg',
                'title': 'Women in the Slaves',
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }, {
                'id': 6,
                'avatar': 'assets/imgs/avatar/16.jpg',
                'avatarTitle': 'Katlynn Pouros',
                'avatarSubtitle': 'from Los Angeles',
                'time': '21 min ago',
                'image': 'assets/imgs/background/38.jpg',
                'title': 'Women in the Slaves',
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }]
            };
          }; //* Data Set for page 5


          this.getDataForTab5 = function () {
            return {
              'allComments': '2121 Comments',
              'items': [{
                'id': 1,
                'image': 'assets/imgs/avatar/16.jpg',
                'title': 'Erica Romaguera',
                'time': '18 August 2018 at 12:20pm',
                'description': 'If you could have any kind of pet, what would you choose?'
              }, {
                'id': 2,
                'image': 'assets/imgs/avatar/15.jpg',
                'title': 'Caleigh Jerde',
                'time': '18 August 2018 at 8:13pm',
                'description': 'If you could learn any language, what would you choose?'
              }, {
                'id': 3,
                'image': 'assets/imgs/avatar/14.jpg',
                'title': 'Lucas Schultz',
                'time': '18 August 2018 at 5:22pm',
                'description': 'Life is about making an impact, not making an income.'
              }, {
                'id': 4,
                'image': 'assets/imgs/avatar/13.jpg',
                'title': 'Carole Marvin',
                'time': '18 August 2018 at 7:36am',
                'description': "I\u2019ve learned that people will forget what you said,\n               people will forget what you did, but people will never forget how you made them feel"
              }, {
                'id': 5,
                'image': 'assets/imgs/avatar/12.jpg',
                'title': 'Doriana Feeney',
                'time': '18 August 2018 at 5:28am',
                'description': 'Definiteness of purpose is the starting point of all achievement.'
              }, {
                'id': 6,
                'image': 'assets/imgs/avatar/11.jpg',
                'title': 'Nia Gutkowski',
                'time': '18 August 2018 at 11:27pm',
                'description': 'Life is what happens to you while you’re busy making other plans'
              }]
            };
          }; //* Data Set for page 6


          this.getDataForTab6 = function () {
            return {
              'yourName': 'Your Name',
              'title': 'Title',
              'description': 'Enter a description',
              'button': ' Write Comment'
            };
          }; //* Data Set for page 7


          this.getDataForTab7 = function () {
            return {
              'headerImage': 'assets/imgs/background/21.jpg',
              'title': 'Infinit pontem in Sinis',
              'subtitle': 'per marescalluml',
              'category': 'Category',
              'avatar': 'assets/imgs/avatar/13.jpg',
              'shareIcon': 'ellipsis-horizontal',
              'actionSheet': {
                'buttons': [{
                  'text': 'Add to Cart',
                  'role': 'destructive'
                }, {
                  'text': 'Add to Favorites'
                }, {
                  'text': 'Read more info'
                }, {
                  'text': 'Delete Item'
                }, {
                  'text': 'Cancel',
                  'role': 'cancel'
                }]
              },
              'items': [{
                'id': 1,
                'subtitle': "Hoc est, visu nova thriller, posuit orbem in fimbriis modern arte, quae est tenebrosa, haunting, torta - vertit se et in suo modo. Non quod objective, et arte discipulus apud Notingham, nuper Jack quae ducitur 'diluvium, ' frigus, saeva enfant inexpugnabiles omnes modern art. Et vadit ad deversorium cubiculum vult bibere et cetera id exuendum statum tunc illa e somno evigilans in lecto suo."
              }, {
                'id': 2,
                'subtitle': 'Percussas pavore est, sane, sed etiam in auribus eorum amplius diluvium ad inveniendum, qui utitur maxime auctoribus imaginum cinematographicarum praebere video camera ejus vita (hoc est ars, ut videtur). Et obliti sunt ea nocte in hotel cubiculum terminus sursum in quodam loco quis gallery? Si illa ad magistratus? Et factum est, ut quod deest illi amice Jenny?'
              }, {
                'id': 3,
                'subtitle': 'It takes sursum magis, nimis longum est aedificate (usque ad paginam fere CLX) Ad validam in mia quia actio, sed altiore hoc est a dolor modern thriller, et fortiter mentis habitu femineo (adhuc inusitato scelus ficta). Jaq Hazell vigilare sit an author.'
              }, {
                'id': 4,
                'subtitle': 'Vesalius habet cum ramosis in lupinotuum, conscripserit et comici librorum, sed saeva Lane videt eum quasi animam suam antiquis nota mundo, quamvis tempus suum ingenia sunt paulo plus crevit et hi qui crediderant, cum ex Novus York ad urbem est viridius, affluentes, et suburbana earum.'
              }]
            };
          }; //* Data Set for page 8


          this.getDataForTab8 = function () {
            return {
              'allComments': '2121 Comments',
              'items': [{
                'id': 1,
                'image': 'assets/imgs/avatar/16.jpg',
                'title': 'Erica Romaguera',
                'time': '18 August 2018 at 12:20pm',
                'description': 'If you could have any kind of pet, what would you choose?'
              }, {
                'id': 2,
                'image': 'assets/imgs/avatar/15.jpg',
                'title': 'Caleigh Jerde',
                'time': '18 August 2018 at 8:13pm',
                'description': 'If you could learn any language, what would you choose?'
              }, {
                'id': 3,
                'image': 'assets/imgs/avatar/14.jpg',
                'title': 'Lucas Schultz',
                'time': '18 August 2018 at 5:22pm',
                'description': 'Life is about making an impact, not making an income.'
              }, {
                'id': 4,
                'image': 'assets/imgs/avatar/13.jpg',
                'title': 'Carole Marvin',
                'time': '18 August 2018 at 7:36am',
                'description': "I\u2019ve learned that people will forget what you said,\n               people will forget what you did, but people will never forget how you made them feel"
              }, {
                'id': 5,
                'image': 'assets/imgs/avatar/12.jpg',
                'title': 'Doriana Feeney',
                'time': '18 August 2018 at 5:28am',
                'description': 'Definiteness of purpose is the starting point of all achievement.'
              }, {
                'id': 6,
                'image': 'assets/imgs/avatar/11.jpg',
                'title': 'Nia Gutkowski',
                'time': '18 August 2018 at 11:27pm',
                'description': 'Life is what happens to you while you’re busy making other plans'
              }]
            };
          }; //* Data Set for page 9


          this.getDataForTab9 = function () {
            return {
              "map": {
                "lat": 40.712562,
                "lng": -74.005911,
                "zoom": 15,
                "mapTypeControl": true,
                "streetViewControl": true
              },
              "slider": [{
                "id": 1,
                "image": "assets/imgs/background/16.jpg",
                "title": "Free Ride Tour",
                "subtitle": "Best Offer"
              }, {
                "id": 2,
                "image": "assets/imgs/background/13.jpg",
                "title": "Main Stage Event",
                "subtitle": "Main Event"
              }, {
                "id": 3,
                "image": "assets/imgs/background/19.jpg",
                "title": "Bridge Tour",
                "subtitle": "Mountain"
              }, {
                "id": 4,
                "image": "assets/imgs/background/21.jpg",
                "title": "Free Ride Tour",
                "subtitle": "Best Tourt"
              }, {
                "id": 5,
                "image": "assets/imgs/background/6.jpg",
                "title": "Mountain Trout",
                "subtitle": "Mountain"
              }, {
                "id": 6,
                "image": "assets/imgs/background/10.jpg",
                "title": "Sea ture",
                "subtitle": "Bridge Tour"
              }, {
                "id": 7,
                "image": "assets/imgs/background/11.jpg",
                "title": "Free Ride Tour",
                "subtitle": "Best Events"
              }, {
                "id": 8,
                "image": "assets/imgs/background/19.jpg",
                "title": "Mountain Trout",
                "subtitle": "Mountain"
              }, {
                "id": 9,
                "image": "assets/imgs/background/16.jpg",
                "title": "Sea ture",
                "subtitle": "Best Events"
              }, {
                "id": 10,
                "image": "assets/imgs/background/21.jpg",
                "title": "Free Ride Tour",
                "subtitle": "Main Event"
              }]
            };
          };
        }

        _createClass(TabsService, [{
          key: "load",
          value: function load(item) {
            var _this57 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this57.af.object('tab/' + item).valueChanges().subscribe(function (snapshot) {
                  _this57.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this57.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this57.loadingService.hide();

                observer.next(_this57.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return TabsService;
      }();

      TabsService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      TabsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], TabsService);
      /***/
    },

    /***/
    "./src/app/services/time-line-service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/time-line-service.ts ***!
      \***********************************************/

    /*! exports provided: TimeLineService */

    /***/
    function srcAppServicesTimeLineServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeLineService", function () {
        return TimeLineService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var TimeLineService = /*#__PURE__*/function () {
        function TimeLineService(af, loadingService) {
          var _this58 = this;

          _classCallCheck(this, TimeLineService);

          this.af = af;
          this.loadingService = loadingService;

          this.getId = function () {
            return 'timeline';
          };

          this.getTitle = function () {
            return 'Time Line';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'timeline/0',
              'title': 'Timeline With Cards',
              'theme': 'layout1'
            }, {
              'url': 'timeline/1',
              'title': 'Timeline With Avatar',
              'theme': 'layout2'
            }, {
              'url': 'timeline/2',
              'title': 'Timeline With Comments',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this58['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 2


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Timeline With Cards',
              "items": [{
                "id": 1,
                "title": "Electric Guitar",
                "time": "TODAY AT 2:20PM",
                "image": "assets/imgs/background/10.jpg"
              }, {
                "id": 2,
                "title": "Electric Guitar Pack",
                "time": "TODAY AT 1:30PM",
                "image": "assets/imgs/background/11.jpg"
              }, {
                "id": 3,
                "title": "Acoustic Guitar",
                "time": "TODAY AT 14:20PM",
                "image": "assets/imgs/background/13.jpg"
              }, {
                "id": 4,
                "title": "Acoustic-Electric",
                "time": "TODAY AT 15:15PM",
                "image": "assets/imgs/background/15.jpg"
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Timeline With Avatar',
              "items": [{
                "id": 1,
                "title": "iPhone 8 Plus",
                "time": "TODAY AT 2:20PM",
                "avatar": "assets/imgs/avatar/1.jpg",
                "price": "$ 3.23"
              }, {
                "id": 2,
                "title": "Watch black",
                "time": "TODAY AT 1:30PM",
                "avatar": "assets/imgs/avatar/3.jpg",
                "price": "$ 3.23"
              }, {
                "id": 3,
                "title": "Canon Photoaparat",
                "time": "TODAY AT 14:20PM",
                "avatar": "assets/imgs/avatar/4.jpg",
                "price": "$ 3.23"
              }, {
                "id": 4,
                "title": "Nikon Photoaparat",
                "time": "TODAY AT 15:15PM",
                "avatar": "assets/imgs/avatar/0.jpg",
                "price": "$ 3.23"
              }, {
                "id": 5,
                "title": "Objective",
                "time": "TODAY AT 15:15PM",
                "avatar": "assets/imgs/avatar/6.jpg",
                "price": "$ 3.23"
              }, {
                "id": 6,
                "title": "50mm",
                "time": "TODAY AT 18:15PM",
                "avatar": "assets/imgs/avatar/5.jpg",
                "price": "$ 3.23"
              }, {
                "id": 7,
                "title": "Watch black",
                "time": "TODAY AT 19:55PM",
                "avatar": "assets/imgs/avatar/8.jpg",
                "price": "$ 3.23"
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Timeline With Comments',
              "items": [{
                "id": 1,
                "time": "TODAY AT 2:20PM",
                "avatar": "assets/imgs/avatar/10.jpg",
                "title": "Alice Ellis",
                "subtitle": "@alice",
                "description": "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks."
              }, {
                "id": 2,
                "time": "TODAY AT 1:30PM",
                "avatar": "assets/imgs/avatar/11.jpg",
                "title": "Natasha Cox",
                "subtitle": "@natasha",
                "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
              }, {
                "id": 3,
                "time": "TODAY AT 14:20PM",
                "avatar": "assets/imgs/avatar/12.jpg",
                "title": "Caroline Wright",
                "subtitle": "@caroline",
                "description": "It is a long established fact that a reader will be distracted by the readable."
              }, {
                "id": 4,
                "time": "TODAY AT 14:20PM",
                "avatar": "assets/imgs/avatar/13.jpg",
                "title": "Cameron Rogers",
                "subtitle": "@cameron",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }]
            };
          };
        }

        _createClass(TimeLineService, [{
          key: "load",
          value: function load(item) {
            var _this59 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this59.af.object('timeline/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this59.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this59.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this59.loadingService.hide();

                observer.next(_this59.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return TimeLineService;
      }();

      TimeLineService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      TimeLineService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], TimeLineService);
      /***/
    },

    /***/
    "./src/app/services/toast-service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/toast-service.ts ***!
      \*******************************************/

    /*! exports provided: ToastService */

    /***/
    function srcAppServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(toastController) {
          _classCallCheck(this, ToastService);

          this.toastController = toastController;
        }

        _createClass(ToastService, [{
          key: "presentToast",
          value: function presentToast(message) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        'position': 'bottom',
                        'duration': duration,
                        'message': message,
                        'color': 'info'
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentDismissableToast",
          value: function presentDismissableToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this60 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        position: 'bottom',
                        message: message,
                        duration: 50000,
                        color: 'danger',
                        buttons: [{
                          text: 'Done',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');

                            _this60.toast.dismiss();
                          }
                        }]
                      });

                    case 2:
                      this.toast = _context2.sent;
                      this.toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismissToast",
          value: function dismissToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.toast.dismiss();

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
        }];
      };

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])], ToastService);
      /***/
    },

    /***/
    "./src/app/services/toggle-service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/toggle-service.ts ***!
      \********************************************/

    /*! exports provided: ToggleService */

    /***/
    function srcAppServicesToggleServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleService", function () {
        return ToggleService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var ToggleService = /*#__PURE__*/function () {
        function ToggleService(af, loadingService) {
          var _this61 = this;

          _classCallCheck(this, ToggleService);

          this.af = af;
          this.loadingService = loadingService;

          this.getTitle = function () {
            return 'Toggle';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'toggle/0',
              'title': 'With avatars',
              'theme': 'layout1'
            }, {
              'url': 'toggle/1',
              'title': 'Simple 2',
              'theme': 'layout2'
            }, {
              'url': 'toggle/2',
              'title': 'Simple',
              'theme': 'layout3'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this61['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'With avatars',
              "title": "With avatars",
              "items": [{
                "id": 0,
                "title": "Theresa Mason",
                "subtitle": "theresa@email",
                "isChecked": false,
                "avatar": "assets/imgs/avatar/9.jpg"
              }, {
                "id": 1,
                "title": "Laetitia Duhamel",
                "subtitle": "laetitia@email",
                "isChecked": false,
                "avatar": "assets/imgs/avatar/10.jpg"
              }, {
                "id": 2,
                "title": "Marine Aubry",
                "subtitle": "marine@email",
                "isChecked": false,
                "avatar": "assets/imgs/avatar/11.jpg"
              }, {
                "id": 3,
                "title": "Samantha Kennedy",
                "subtitle": "samantha@email",
                "isChecked": false,
                "avatar": "assets/imgs/avatar/12.jpg"
              }, {
                "id": 4,
                "title": "Juliette Blondel",
                "subtitle": "juliette@email",
                "isChecked": false,
                "avatar": "assets/imgs/avatar/13.jpg"
              }, {
                "id": 5,
                "title": "Isabelle Pascal",
                "subtitle": "isabelle@email",
                "isChecked": false,
                "avatar": "assets/imgs/avatar/14.jpg"
              }, {
                "id": 6,
                "title": "Valentine Roy",
                "subtitle": "valentine@email",
                "isChecked": false,
                "avatar": "assets/imgs/avatar/15.jpg"
              }, {
                "id": 7,
                "title": "Alice Kelly",
                "subtitle": "alice@emai",
                "isChecked": false,
                "avatar": "assets/imgs/avatar/16.jpg"
              }, {
                "id": 8,
                "title": "Caitlin Wilkinson",
                "subtitle": "caitlin@email",
                "isChecked": false,
                "avatar": "assets/imgs/avatar/17.jpg"
              }, {
                "id": 9,
                "title": "Camille Garnier",
                "subtitle": "camille@email",
                "isChecked": false,
                "avatar": "assets/imgs/avatar/18.jpg"
              }, {
                "id": 10,
                "title": "Suzanne Petit",
                "subtitle": "suzanne@email",
                "isChecked": false,
                "avatar": "assets/imgs/avatar/19.jpg"
              }, {
                "id": 11,
                "title": "Stacey Harris",
                "subtitle": "stacey@email",
                "isChecked": false,
                "avatar": "assets/imgs/avatar/20.jpg"
              }, {
                "id": 12,
                "title": "Jamie Clark",
                "subtitle": "jamie@email",
                "isChecked": false,
                "avatar": "assets/imgs/avatar/21.jpg"
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Simple 2',
              "title": "Simple 2",
              "items": [{
                "id": 1,
                "title": "bilic@yahoo.com",
                "subtitle": "Daniel",
                "isChecked": true
              }, {
                "id": 2,
                "title": "roussel@yahoo.com",
                "subtitle": "Manon",
                "isChecked": false
              }, {
                "id": 4,
                "title": "chevallier@mail.com",
                "subtitle": "Antoine",
                "isChecked": false
              }, {
                "id": 3,
                "title": "laurent@gmail.com",
                "subtitle": "Michel",
                "isChecked": false
              }, {
                "id": 5,
                "title": "delahaye@mail.com",
                "subtitle": "Laurence",
                "isChecked": false
              }, {
                "id": 6,
                "title": "valentin@mail.com",
                "subtitle": "Pénélope",
                "isChecked": true
              }, {
                "id": 7,
                "title": "hebert@mail.com",
                "subtitle": "Adèle",
                "isChecked": false
              }, {
                "id": 8,
                "title": "delattre@yahoo.com",
                "subtitle": "Monique",
                "isChecked": false
              }, {
                "id": 9,
                "title": "mahe@mail.com",
                "subtitle": "Charles",
                "isChecked": false
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Simple',
              "title": "Simple",
              "items": [{
                "id": 0,
                "title": "United Kingdom",
                "isChecked": true
              }, {
                "id": 1,
                "title": "South Africa",
                "isChecked": false
              }, {
                "id": 2,
                "title": "Qatar",
                "isChecked": false
              }, {
                "id": 3,
                "title": "Philippines",
                "isChecked": false
              }, {
                "id": 4,
                "title": "New Zealand",
                "isChecked": true
              }, {
                "id": 5,
                "title": "Mongolia",
                "isChecked": true
              }, {
                "id": 6,
                "title": "Luxembourg",
                "isChecked": true
              }, {
                "id": 7,
                "title": "Jamaica",
                "isChecked": false
              }, {
                "id": 8,
                "title": "India",
                "isChecked": false
              }, {
                "id": 9,
                "title": "Grenada",
                "isChecked": false
              }, {
                "id": 10,
                "title": "France",
                "isChecked": false
              }, {
                "id": 11,
                "title": "Ecuador",
                "isChecked": false
              }, {
                "id": 12,
                "title": "Argentina",
                "isChecked": false
              }]
            };
          };
        }

        _createClass(ToggleService, [{
          key: "load",
          value: function load(item) {
            var _this62 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this62.af.object('toggle/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this62.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this62.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this62.loadingService.hide();

                observer.next(_this62.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return ToggleService;
      }();

      ToggleService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }];
      };

      ToggleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])], ToggleService);
      /***/
    },

    /***/
    "./src/app/services/wizard-service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/wizard-service.ts ***!
      \********************************************/

    /*! exports provided: WizardService */

    /***/
    function srcAppServicesWizardServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardService", function () {
        return WizardService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-settings */
      "./src/app/services/app-settings.ts");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./toast-service */
      "./src/app/services/toast-service.ts");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loading-service */
      "./src/app/services/loading-service.ts");

      var WizardService = /*#__PURE__*/function () {
        function WizardService(af, loadingService, toastCtrl) {
          var _this63 = this;

          _classCallCheck(this, WizardService);

          this.af = af;
          this.loadingService = loadingService;
          this.toastCtrl = toastCtrl;

          this.getTitle = function () {
            return 'Wizard';
          };

          this.getAllThemes = function () {
            return [{
              'url': 'wizard/0',
              'title': 'Simple + icon',
              'theme': 'layout1'
            }, {
              'url': 'wizard/1',
              'title': 'Big image',
              'theme': 'layout2'
            }, {
              'url': 'wizard/2',
              'title': 'Big Image + Text',
              'theme': 'layout3'
            }, {
              'url': 'wizard/3',
              'title': 'Article with Text',
              'theme': 'layout4'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return _this63['getDataFor' + menuItem.theme.charAt(0).toUpperCase() + menuItem.theme.slice(1)]();
          }; //* Data Set for page 1


          this.getDataForLayout1 = function () {
            return {
              'toolbarTitle': 'Simple + icon',
              "btnPrev": "Previous",
              "btnNext": "Next",
              "btnFinish": "Finish",
              "items": [{
                "backgroundImage": "assets/imgs/background/28.jpg",
                "logo": "assets/imgs/logo/1.png",
                "title": "Aenean feugiat ipsum eget porttitor auctor",
                "subtitle": "Donec finibus est ac augue feugiat pretium",
                "description": "Duis gravida, tellus eget condimentum vestibulum, massa metus gravida mauris, elementum sodales nunc tellus ut ligula"
              }, {
                "backgroundImage": "assets/imgs/background/29.jpg",
                "logo": "assets/imgs/logo/1.png",
                "title": "Sed sollicitudin tortor id bibendum sollicitudin",
                "subtitle": "Integer vel mi euismod, egestas neque in, tincidunt tellus",
                "description": "Donec tincidunt odio eget ante bibendum, eget dapibus mauris hendrerit"
              }, {
                "backgroundImage": "assets/imgs/background/30.jpg",
                "logo": "assets/imgs/logo/1.png",
                "title": "In ac tortor in risus commodo molestie",
                "subtitle": "Pellentesque porttitor turpis eget metus dignissim sollicitudin",
                "description": "Ut iaculis scelerisque mauris sit amet interdum"
              }]
            };
          }; //* Data Set for page 2


          this.getDataForLayout2 = function () {
            return {
              'toolbarTitle': 'Big image',
              "btnNext": "Next",
              "btnFinish": "Finish",
              "items": [{
                "welcome": "Welcome",
                "backgroundImage": "assets/imgs/background/32.jpg",
                "title": "Welcome to our new iOS theme",
                "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }, {
                "welcome": "Welcome",
                "backgroundImage": "assets/imgs/background/26.jpg",
                "title": "Welcome to our new iOS theme",
                "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }, {
                "welcome": "Welcome",
                "backgroundImage": "assets/imgs/background/25.jpg",
                "title": "Welcome to our new iOS theme",
                "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }]
            };
          }; //* Data Set for page 3


          this.getDataForLayout3 = function () {
            return {
              'toolbarTitle': 'Big Image + Text',
              "btnNext": "Next",
              "btnFinish": "Finish",
              "items": [{
                "backgroundImage": "assets/imgs/background/30.jpg",
                "subtitle": "Cosmologist Stephen Hawking",
                "title": "Happy Anniversary, Juno! NASA Probe Marks 1 Year at Jupiter."
              }, {
                "backgroundImage": "assets/imgs/background/27.jpg",
                "subtitle": "Bennu is an asteroid",
                "title": "Colorful Clouds on Jupiter by Juno"
              }, {
                "backgroundImage": "assets/imgs/background/31.jpg",
                "subtitle": "Light elements clumpeds",
                "title": "Best Space Stories of The Week!"
              }]
            };
          }; //* Data Set for page 4


          this.getDataForLayout4 = function () {
            return {
              'toolbarTitle': 'Article with Text',
              'items': [{
                'backgroundImage': 'assets/imgs/background/27.jpg'
              }, {
                'backgroundImage': 'assets/imgs/background/31.jpg'
              }, {
                'backgroundImage': 'assets/imgs/background/29.jpg'
              }],
              "title": "The generated Lorem Ipsum is therefore always free from repetition, injected humour",
              "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
              "image": "assets/imgs/background/30.jpg",
              "description2": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            };
          };
        }

        _createClass(WizardService, [{
          key: "load",
          value: function load(item) {
            var _this64 = this;

            this.loadingService.show();

            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this64.af.object('wizard/' + item.theme).valueChanges().subscribe(function (snapshot) {
                  _this64.loadingService.hide();

                  observer.next(snapshot);
                  observer.complete();
                }, function (err) {
                  _this64.loadingService.hide();

                  observer.error([]);
                  observer.complete();
                });
              });
            } else {
              return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                _this64.loadingService.hide();

                observer.next(_this64.getDataForTheme(item));
                observer.complete();
              });
            }
          }
        }]);

        return WizardService;
      }();

      WizardService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      WizardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])], WizardService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        api_url: 'https://covid-counts.herokuapp.com'
      }; //covidact ab7e30649b634052ae45d1d4404e9ccf
      //api_url: 'https://covid-counts.herokuapp.com'

      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/robin/covid-by-the-county-20201013013914/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map