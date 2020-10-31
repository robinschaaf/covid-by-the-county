(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/@ionic-super-tabs/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic-super-tabs/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./super-tab-button_2.entry.js": [
		"./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-button_2.entry.js",
		"common",
		0
	],
	"./super-tab-indicator.entry.js": [
		"./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-indicator.entry.js",
		1
	],
	"./super-tab_3.entry.js": [
		"./node_modules/@ionic-super-tabs/core/dist/esm/super-tab_3.entry.js",
		"common",
		2
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic-super-tabs/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js",
		"common",
		3
	],
	"./ion-alert.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert.entry.js",
		"common",
		4
	],
	"./ion-app_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js",
		"common",
		5
	],
	"./ion-avatar_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js",
		"common",
		6
	],
	"./ion-back-button.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js",
		"common",
		7
	],
	"./ion-backdrop.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js",
		8
	],
	"./ion-button_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js",
		"common",
		9
	],
	"./ion-card_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js",
		"common",
		10
	],
	"./ion-checkbox.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js",
		"common",
		11
	],
	"./ion-chip.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip.entry.js",
		"common",
		12
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		13
	],
	"./ion-datetime_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js",
		"common",
		14
	],
	"./ion-fab_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js",
		"common",
		15
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		16
	],
	"./ion-infinite-scroll_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js",
		17
	],
	"./ion-input.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input.entry.js",
		"common",
		18
	],
	"./ion-item-option_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js",
		"common",
		19
	],
	"./ion-item_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js",
		"common",
		20
	],
	"./ion-loading.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading.entry.js",
		"common",
		21
	],
	"./ion-menu_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js",
		"common",
		22
	],
	"./ion-modal.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal.entry.js",
		"common",
		23
	],
	"./ion-nav_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js",
		"common",
		24
	],
	"./ion-popover.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover.entry.js",
		"common",
		25
	],
	"./ion-progress-bar.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js",
		"common",
		26
	],
	"./ion-radio_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js",
		"common",
		27
	],
	"./ion-range.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range.entry.js",
		"common",
		28
	],
	"./ion-refresher_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js",
		"common",
		29
	],
	"./ion-reorder_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js",
		"common",
		30
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		31
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		32
	],
	"./ion-searchbar.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js",
		"common",
		33
	],
	"./ion-segment_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js",
		"common",
		34
	],
	"./ion-select_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js",
		"common",
		35
	],
	"./ion-slide_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js",
		36
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		37
	],
	"./ion-split-pane.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js",
		38
	],
	"./ion-tab-bar_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js",
		"common",
		39
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		40
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		41
	],
	"./ion-textarea.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js",
		"common",
		42
	],
	"./ion-toast.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast.entry.js",
		"common",
		43
	],
	"./ion-toggle.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js",
		"common",
		44
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		45
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu side=\"start\" contentId=\"main-content\" type=\"overlay\">\r\n      <!-- Settings Toolbar -->\r\n      <ion-header class=\"background-size\"\r\n      [ngStyle]=\"{'background-image': 'url(' + headerMenuItem.background + ')'}\">\r\n          <ion-item class=\"transparent ion-text-center\" lines=\"none\">\r\n            <ion-label class=\"ion-text-center text-size-md text-color-light font-bold ion-text-wrap\">\r\n                <img class=\"ion-margin-bottom\" [src]=\"headerMenuItem.image\">\r\n                <div class=\"clearfix ion-margin-top ion-padding-bottom ion-padding-top\"></div>\r\n                {{headerMenuItem.title}}\r\n            </ion-label>\r\n          </ion-item>\r\n      </ion-header>\r\n      <!-- Content -->\r\n      <ion-content>\r\n        <ion-grid class=\"ion-no-padding\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n              <!-- Menu List -->\r\n              <ion-list>\r\n                <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\r\n                  <ion-item [routerDirection]=\"'root'\" (click)=\"openPage(p)\">\r\n                    <i class=\"icon {{p.icon}} icon-small\"></i>\r\n                    <ion-label>\r\n                      <h1 class=\"text-size-md text-color-primary font-light\">{{p.title}}</h1>\r\n                    </ion-label>\r\n                  </ion-item>\r\n                </ion-menu-toggle>\r\n              </ion-list>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomePageModule)
    },
    {
        path: 'list',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-list-list-module */ "pages-list-list-module").then(__webpack_require__.bind(null, /*! ./pages/list/list.module */ "./src/app/pages/list/list.module.ts")).then(m => m.ListPageModule)
    },
    {
        path: 'items/:type',
        loadChildren: () => Promise.all(/*! import() | pages-items-items-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-items-items-module")]).then(__webpack_require__.bind(null, /*! ./pages/items/items.module */ "./src/app/pages/items/items.module.ts")).then(m => m.ItemsPageModule)
    },
    {
        path: 'subitems/:type',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-sub-items-sub-items-module */ "pages-sub-items-sub-items-module").then(__webpack_require__.bind(null, /*! ./pages/sub-items/sub-items.module */ "./src/app/pages/sub-items/sub-items.module.ts")).then(m => m.SubItemsPageModule)
    },
    {
        path: 'textview',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-text-view-item-details-text-view-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-item-details-text-view-item-details-text-view-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-text-view/item-details-text-view.module */ "./src/app/pages/item-details-text-view/item-details-text-view.module.ts")).then(m => m.ItemDetailsPageTextViewModule)
    },
    {
        path: 'login/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-login-item-details-login-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-login-item-details-login-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-login/item-details-login.module */ "./src/app/pages/item-details-login/item-details-login.module.ts")).then(m => m.ItemDetailsLoginPageModule)
    },
    {
        path: 'register/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-register-item-details-register-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-register-item-details-register-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-register/item-details-register.module */ "./src/app/pages/item-details-register/item-details-register.module.ts")).then(m => m.ItemDetailsRegisterPageModule)
    },
    {
        path: 'forgot-password/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-forgot-password-item-details-forgot-password-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-forgot-password-item-details-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-forgot-password/item-details-forgot-password.module */ "./src/app/pages/item-details-forgot-password/item-details-forgot-password.module.ts")).then(m => m.ItemDetailsForgotPasswordPageModule)
    },
    {
        path: 'new-password/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-new-password-item-details-new-password-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-new-password-item-details-new-password-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-new-password/item-details-new-password.module */ "./src/app/pages/item-details-new-password/item-details-new-password.module.ts")).then(m => m.ItemDetailsNewPasswordPageModule)
    },
    {
        path: 'animation/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-animation-item-details-animation-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-animation-item-details-animation-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-animation/item-details-animation.module */ "./src/app/pages/item-details-animation/item-details-animation.module.ts")).then(m => m.ItemDetailsAnimationPageModule)
    },
    {
        path: 'check-boxes/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-check-box-item-details-check-box-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-check-box-item-details-check-box-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-check-box/item-details-check-box.module */ "./src/app/pages/item-details-check-box/item-details-check-box.module.ts")).then(m => m.ItemDetailsCheckBoxPageModule)
    },
    {
        path: 'radio-button/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-radio-button-item-details-radio-button-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-radio-button-item-details-radio-button-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-radio-button/item-details-radio-button.module */ "./src/app/pages/item-details-radio-button/item-details-radio-button.module.ts")).then(m => m.ItemDetailsRadioButtonPageModule)
    },
    {
        path: 'toggle/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-toggle-button-item-details-toggle-button-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-toggle-button-item-details-toggle-button-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-toggle-button/item-details-toggle-button.module */ "./src/app/pages/item-details-toggle-button/item-details-toggle-button.module.ts")).then(m => m.ItemDetailsToggleButtonPageModule)
    },
    {
        path: 'form/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-forms-item-details-forms-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-forms-item-details-forms-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-forms/item-details-forms.module */ "./src/app/pages/item-details-forms/item-details-forms.module.ts")).then(m => m.ItemDetailsFormsPageModule)
    },
    {
        path: 'splash-screens/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-splash-screen-item-details-splash-screen-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("common"), __webpack_require__.e("pages-item-details-splash-screen-item-details-splash-screen-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-splash-screen/item-details-splash-screen.module */ "./src/app/pages/item-details-splash-screen/item-details-splash-screen.module.ts")).then(m => m.ItemDetailsSplashScreenPageModule)
    },
    {
        path: 'search-bars/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-search-bar-item-details-search-bar-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-search-bar-item-details-search-bar-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-search-bar/item-details-search-bar.module */ "./src/app/pages/item-details-search-bar/item-details-search-bar.module.ts")).then(m => m.ItemDetailsSearchBarPageModule)
    },
    {
        path: 'wizard/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-wizard-item-details-wizard-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-wizard-item-details-wizard-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-wizard/item-details-wizard.module */ "./src/app/pages/item-details-wizard/item-details-wizard.module.ts")).then(m => m.ItemDetailsWizardPageModule)
    },
    {
        path: 'parallax/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-parallax-item-details-parallax-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-parallax-item-details-parallax-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-parallax/item-details-parallax.module */ "./src/app/pages/item-details-parallax/item-details-parallax.module.ts")).then(m => m.ItemDetailsParallaxPageModule)
    },
    {
        path: 'spinner/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-spinner-item-details-spinner-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("common"), __webpack_require__.e("pages-item-details-spinner-item-details-spinner-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-spinner/item-details-spinner.module */ "./src/app/pages/item-details-spinner/item-details-spinner.module.ts")).then(m => m.ItemDetailsSpinnerPageModule)
    },
    {
        path: 'maps/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-map-item-details-map-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-map-item-details-map-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-map/item-details-map.module */ "./src/app/pages/item-details-map/item-details-map.module.ts")).then(m => m.ItemDetailsMapPageModule)
    },
    {
        path: 'qrcode/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-qrcode-item-details-qrcode-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-qrcode-item-details-qrcode-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-qrcode/item-details-qrcode.module */ "./src/app/pages/item-details-qrcode/item-details-qrcode.module.ts")).then(m => m.ItemDetailsQrcodePageModule)
    },
    {
        path: 'timeline/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-timeline-item-details-timeline-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-timeline-item-details-timeline-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-timeline/item-details-timeline.module */ "./src/app/pages/item-details-timeline/item-details-timeline.module.ts")).then(m => m.ItemDetailsTimeLinePageModule)
    },
    {
        path: 'profile/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-profile-item-details-profile-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-profile-item-details-profile-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-profile/item-details-profile.module */ "./src/app/pages/item-details-profile/item-details-profile.module.ts")).then(m => m.ItemDetailsProfilePageModule)
    },
    {
        path: 'range/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-range-item-details-range-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-range-item-details-range-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-range/item-details-range.module */ "./src/app/pages/item-details-range/item-details-range.module.ts")).then(m => m.ItemDetailsRangePageModule)
    },
    {
        path: 'select/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-select-item-details-select-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-select-item-details-select-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-select/item-details-select.module */ "./src/app/pages/item-details-select/item-details-select.module.ts")).then(m => m.ItemDetailsSelectPageModule)
    },
    {
        path: 'comment/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-comment-item-details-comment-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-comment-item-details-comment-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-comment/item-details-comment.module */ "./src/app/pages/item-details-comment/item-details-comment.module.ts")).then(m => m.ItemDetailsCommentPageModule)
    },
    {
        path: 'payment/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-payment-item-details-payment-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-payment-item-details-payment-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-payment/item-details-payment.module */ "./src/app/pages/item-details-payment/item-details-payment.module.ts")).then(m => m.ItemDetailsPaymentPageModule)
    },
    {
        path: 'action-sheet/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-action-sheet-item-details-action-sheet-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-action-sheet-item-details-action-sheet-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-action-sheet/item-details-action-sheet.module */ "./src/app/pages/item-details-action-sheet/item-details-action-sheet.module.ts")).then(m => m.ItemDetailsActionSheetPageModule)
    },
    {
        path: 'alert/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-alert-item-details-alert-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-alert-item-details-alert-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-alert/item-details-alert.module */ "./src/app/pages/item-details-alert/item-details-alert.module.ts")).then(m => m.ItemDetailsAlertPageModule)
    },
    {
        path: 'expandable/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-expandable-item-details-expandable-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-expandable-item-details-expandable-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-expandable/item-details-expandable.module */ "./src/app/pages/item-details-expandable/item-details-expandable.module.ts")).then(m => m.ItemDetailsExpandablePageModule)
    },
    {
        path: 'drag-and-drop/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-drag-and-drop-item-details-drag-and-drop-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-drag-and-drop-item-details-drag-and-drop-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-drag-and-drop/item-details-drag-and-drop.module */ "./src/app/pages/item-details-drag-and-drop/item-details-drag-and-drop.module.ts")).then(m => m.ItemDetailsDragAndDropPageModule)
    },
    {
        path: 'google-card/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-google-card-item-details-google-card-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-google-card-item-details-google-card-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-google-card/item-details-google-card.module */ "./src/app/pages/item-details-google-card/item-details-google-card.module.ts")).then(m => m.ItemDetailsGoogleCardPageModule)
    },
    {
        path: 'swipe-to-dismiss/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-swipe-to-dismiss-item-details-swipe-to-dismiss-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-swipe-to-dismiss-item-details-swipe-to-dismiss-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.module */ "./src/app/pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.module.ts")).then(m => m.ItemDetailsSwipeToDismissPageModule)
    },
    {
        path: 'segment/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-segment-item-details-segment-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-segment-item-details-segment-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-segment/item-details-segment.module */ "./src/app/pages/item-details-segment/item-details-segment.module.ts")).then(m => m.ItemDetailsSegmentPageModule)
    },
    {
        path: 'scrollSegment/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-scroll-segment-item-details-scroll-segment-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-scroll-segment-item-details-scroll-segment-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-scroll-segment/item-details-scroll-segment.module */ "./src/app/pages/item-details-scroll-segment/item-details-scroll-segment.module.ts")).then(m => m.ItemDetailsScrollSegmentPageModule)
    },
    {
        path: 'image-gallery/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-image-gallery-item-details-image-gallery-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-image-gallery-item-details-image-gallery-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-image-gallery/item-details-image-gallery.module */ "./src/app/pages/item-details-image-gallery/item-details-image-gallery.module.ts")).then(m => m.ItemDetailsImageGalleryPageModule)
    },
    {
        path: 'image-gallery-subgallery',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-image-subgallery-item-details-image-subgallery-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-image-subgallery-item-details-image-subgallery-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-image-subgallery/item-details-image-subgallery.module */ "./src/app/pages/item-details-image-subgallery/item-details-image-subgallery.module.ts")).then(m => m.ItemDetailsImageSubGalleryPageModule)
    },
    {
        path: 'full-image-gallery',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-full-image-gallery-item-details-full-image-gallery-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-full-image-gallery-item-details-full-image-gallery-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-full-image-gallery/item-details-full-image-gallery.module */ "./src/app/pages/item-details-full-image-gallery/item-details-full-image-gallery.module.ts")).then(m => m.ItemDetailsFullImageGalleryPageModule)
    },
    {
        path: 'tab/:type',
        loadChildren: () => Promise.all(/*! import() | pages-item-details-tab-item-details-tab-module */[__webpack_require__.e("default~pages-home-home-module~pages-item-details-action-sheet-item-details-action-sheet-module~page~7d4ce9fe"), __webpack_require__.e("pages-item-details-tab-item-details-tab-module")]).then(__webpack_require__.bind(null, /*! ./pages/item-details-tab/item-details-tab.module */ "./src/app/pages/item-details-tab/item-details-tab.module.ts")).then(m => m.ItemDetailsTabPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-item-details-settings-item-details-settings-module */ "pages-item-details-settings-item-details-settings-module").then(__webpack_require__.bind(null, /*! ./pages/item-details-settings/item-details-settings.module */ "./src/app/pages/item-details-settings/item-details-settings.module.ts")).then(m => m.ItemDetailsSettingsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-size {\n  height: 200px;\n  position: relative;\n}\n\n.background-size::before {\n  content: \"\";\n  display: block;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(33, 33, 33, 0.7) 100%);\n}\n\n.background-size ion-item {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  --color: var(--cs-text-primary, #ffffff);\n}\n\n.background-size ion-item img {\n  max-width: 185px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFIQTtFQUtJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsNkZBQStGO0FBRW5HOztBQWZBO0VBaUJJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsd0NBQVE7QUFFWjs7QUF4QkE7RUF5Qk0sZ0JBQWdCO0FBR3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtc2l6ZSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCwpIDAlLCByZ2JhKDMzLCAzMywgMzMsIDAuNywpIDEwMCUpO1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLS1jb2xvcjogdmFyKC0tY3MtdGV4dC1wcmltYXJ5LCAjZmZmZmZmKTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDE4NXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/export-service */ "./src/app/services/export-service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/menu-service */ "./src/app/services/menu-service.ts");








let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, menuService, exportService, navController) {
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
        this.isEnabledRTL = localStorage.getItem('isEnabledRTL') == "true";
        //console.log(JSON.stringify(exportService.export()));
        this.initializeApp();
        this.appPages = this.menuService.getAllThemes();
        this.headerMenuItem = this.menuService.getDataForTheme(null);
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.overlaysWebView(false);
            this.statusBar.backgroundColorByHexString('#0091D2');
            //this.splashScreen.hide();
            this.setRTL();
        });
    }
    setRTL() {
        document.getElementsByTagName('html')[0]
            .setAttribute('dir', this.isEnabledRTL ? 'rtl' : 'ltr');
    }
    openPage(page) {
        this.navController.navigateRoot([page.url], {});
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: _services_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"] },
    { type: _services_export_service__WEBPACK_IMPORTED_MODULE_2__["ExportService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_services_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"], _services_export_service__WEBPACK_IMPORTED_MODULE_2__["ExportService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
        _services_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"],
        _services_export_service__WEBPACK_IMPORTED_MODULE_2__["ExportService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: RestangularConfigFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestangularConfigFactory", function() { return RestangularConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _services_app_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/toast-service */ "./src/app/services/toast-service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/loading-service */ "./src/app/services/loading-service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/__ivy_ngcc__/fesm2015/ionic-super-tabs-angular.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");























// Function for setting the default restangular configuration
function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].api_url);
    RestangularProvider.setDefaultHeaders({ Authorization: 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1' });
}
console.log('Environment', _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"]);
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_services_app_settings__WEBPACK_IMPORTED_MODULE_12__["AppSettings"].FIREBASE_CONFIG),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_15__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_18__["IonicStorageModule"].forRoot(),
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_19__["SuperTabsModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            ngx_restangular__WEBPACK_IMPORTED_MODULE_22__["RestangularModule"].forRoot(RestangularConfigFactory),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production })
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_17__["BarcodeScanner"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _services_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_14__["LoadingService"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/services/action-sheet-service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/action-sheet-service.ts ***!
  \**************************************************/
/*! exports provided: ActionSheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetService", function() { return ActionSheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let ActionSheetService = class ActionSheetService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getId = () => 'actionSheet';
        this.getTitle = () => 'Action Sheet';
        this.getAllThemes = () => {
            return [
                { 'url': 'action-sheet/0', 'title': 'Basic', 'theme': 'layout1' },
                { 'url': 'action-sheet/1', 'title': 'News', 'theme': 'layout2' },
                { 'url': 'action-sheet/2', 'title': 'With Text Header', 'theme': 'layout3' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Basic',
                "headerImage": "assets/imgs/background/6.jpg",
                "actionSheet": {
                    "buttons": [
                        {
                            "text": "Mark as read",
                            "role": "destructive"
                        },
                        {
                            "text": "Follow author"
                        },
                        {
                            "text": "Read more info"
                        },
                        {
                            "text": "More from category"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "title": "Super & Black",
                        "subtitle": "Available Now",
                        "category": "NEW OFFER",
                        "button": "$63.99",
                        "shareIcon": "ellipsis-horizontal",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "productDescriptions": [
                            {
                                "id": 1,
                                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            },
                            {
                                "id": 2,
                                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            },
                            {
                                "id": 3,
                                "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                            },
                            {
                                "id": 4,
                                "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                            }
                        ]
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'News',
                "headerImage": "assets/imgs/background/21.jpg",
                "title": "Infinit bridge made in China.",
                "subtitle": "by Victoria Kuijpers",
                "category": "ENGINEERING",
                "avatar": "assets/imgs/avatar/20.jpg",
                "shareIcon": "ellipsis-horizontal",
                "actionSheet": {
                    "buttons": [
                        {
                            "text": "Mark as read",
                            "role": "destructive"
                        },
                        {
                            "text": "Follow author"
                        },
                        {
                            "text": "Read more info"
                        },
                        {
                            "text": "More from category"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 2,
                        "title": "Lorem ipsum dolor sit amet",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 3,
                        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                    },
                    {
                        "id": 4,
                        "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'With Text Header',
                "shareIcon": "ellipsis-horizontal",
                "actionSheet": {
                    "title": "Choose what to do with this card?",
                    "buttons": [
                        {
                            "text": "Mark as read",
                            "role": "destructive"
                        },
                        {
                            "text": "Follow author"
                        },
                        {
                            "text": "Read more info"
                        },
                        {
                            "text": "More from category"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "category": "best offer",
                        "image": "assets/imgs/background/14.jpg",
                        "title": "Free Ride Tour",
                        "subtitle": "West Avenue, NYC",
                        "button": "$35.99"
                    },
                    {
                        "id": 2,
                        "category": "main event",
                        "image": "assets/imgs/background/11.jpg",
                        "title": "Open Air Concert",
                        "subtitle": "Hyde Park, London",
                        "button": "$12.99"
                    },
                    {
                        "id": 3,
                        "category": "Best Tourt",
                        "image": "assets/imgs/background/21.jpg",
                        "title": "Sea ture",
                        "subtitle": "Guilin, Kweilin",
                        "button": "$13.45"
                    },
                    {
                        "id": 4,
                        "category": "Mountain",
                        "image": "assets/imgs/background/7.jpg",
                        "title": "Mountain Trout",
                        "subtitle": "SMountain Trout Camp",
                        "button": "$38.60"
                    },
                    {
                        "id": 5,
                        "category": "Bridge Tour",
                        "image": "assets/imgs/background/5.jpg",
                        "title": "Bridge Tour",
                        "subtitle": "BridgeClimb, Sydney",
                        "button": "$40.85"
                    },
                    {
                        "id": 6,
                        "category": "best events",
                        "image": "assets/imgs/background/2.jpg",
                        "title": "Main Stage Event",
                        "subtitle": "Hyde Park, London ",
                        "button": "$56.55"
                    }
                ]
            };
        };
    }
    load(item) {
        const that = this;
        that.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('actionSheet/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
ActionSheetService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
ActionSheetService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], ActionSheetService);



/***/ }),

/***/ "./src/app/services/alert-service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert-service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-service */ "./src/app/services/toast-service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");







let AlertService = class AlertService {
    constructor(af, loadingService, toastCtrl) {
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = () => 'alert';
        this.getTitle = () => 'Alert';
        this.getAllThemes = () => {
            return [
                { 'url': 'alert/0', 'title': 'Alert Info', 'theme': 'layout1' },
                { 'url': 'alert/1', 'title': 'Alert Warning', 'theme': 'layout2' },
                { 'url': 'alert/2', 'title': 'Alert Subscribe', 'theme': 'layout3' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Alert Info',
                "items": [
                    {
                        "id": 1,
                        "image": "assets/imgs/background/9.jpg",
                        "title": "Smart Watch",
                        "subtitle": "Category: Watch",
                    },
                    {
                        "id": 2,
                        "image": "assets/imgs/background/6.jpg",
                        "title": "Digital Watch",
                        "subtitle": "Category: Watch",
                    },
                    {
                        "id": 3,
                        "image": "assets/imgs/background/21.jpg",
                        "title": "Longest bridge in world",
                        "subtitle": "Category: Bridge",
                    },
                    {
                        "id": 4,
                        "image": "assets/imgs/background/10.jpg",
                        "title": "Classical guitar",
                        "subtitle": "Category: Guitars",
                    },
                    {
                        "id": 4,
                        "image": "assets/imgs/background/13.jpg",
                        "title": "Bass guitars",
                        "subtitle": "Category: Guitars",
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'Alert Warning',
                "items": [
                    {
                        "id": 1,
                        "category": "best offer",
                        "image": "assets/imgs/background/34.jpg",
                        "title": "New Floral Printing Slim Turndown Neck ",
                        "iconLike": "heart",
                        "iconComment": "chatbubbles",
                        "numberLike": "12",
                        "numberCommnet": "4",
                    },
                    {
                        "id": 2,
                        "category": "best offer",
                        "image": "assets/imgs/background/35.jpg",
                        "title": "Lapel Patchwork Long Sleeve Shirt",
                        "iconLike": "heart",
                        "iconComment": "chatbubbles",
                        "numberLike": "12",
                        "numberCommnet": "4",
                    },
                    {
                        "id": 3,
                        "category": "best offer",
                        "image": "assets/imgs/background/36.jpg",
                        "title": "Tidebuy Unique Floral Mens Casual Shirt",
                        "iconLike": "heart",
                        "iconComment": "chatbubbles",
                        "numberLike": "12",
                        "numberCommnet": "4",
                    },
                    {
                        "id": 4,
                        "category": "best offer",
                        "image": "assets/imgs/background/16.jpg",
                        "title": "Plain Lapel Single Breasted Mens Shirt",
                        "iconLike": "heart",
                        "iconComment": "chatbubbles",
                        "numberLike": "12",
                        "numberCommnet": "4",
                    },
                    {
                        "id": 5,
                        "category": "best offer",
                        "image": "assets/imgs/background/38.jpg",
                        "title": "Oblique Single Breasted Mens Slim Shirt",
                        "iconLike": "heart",
                        "iconComment": "chatbubbles",
                        "numberLike": "12",
                        "numberCommnet": "4",
                    },
                    {
                        "id": 6,
                        "category": "best offe",
                        "image": "assets/imgs/background/37.jpg",
                        "title": "Embroidery Lapel Straight Mens Shirt",
                        "iconLike": "heart",
                        "iconComment": "chatbubbles",
                        "numberLike": "12",
                        "numberCommnet": "4",
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'Alert Subscribe',
                "items": [
                    {
                        "id": 1,
                        "image": "assets/imgs/background/14.jpg",
                        "time": "MARCH 14, 2017",
                        "title": "James Brown at Boston Garden",
                        "description": "On April 4th, 1968, Martin Luther King Jr. was assassinated in Memphis. In the aftermath, America burned...",
                        "iconLike": "heart",
                        "iconComment": "chatbubbles",
                        "numberLike": "12",
                        "numberCommnet": "4",
                    },
                    {
                        "id": 2,
                        "image": "assets/imgs/background/15.jpg",
                        "time": "MARCH 14, 2017",
                        "title": "Elvis Comeback Special",
                        "description": "Elvis was hardly ever nervous,” says drummer D.J. Fontana, remembering the NBC special that relaunched...",
                        "iconLike": "heart",
                        "iconComment": "chatbubbles",
                        "numberLike": "12",
                        "numberCommnet": "4",
                    },
                    {
                        "id": 3,
                        "image": "assets/imgs/background/13.jpg",
                        "time": "MARCH 14, 2017",
                        "title": "Cream Farewell Tour",
                        "description": "Eric Clapton ended Cream in 1968 after only two years, burned out and sick of keeping the peace between...",
                        "iconLike": "heart",
                        "iconComment": "chatbubbles",
                        "numberLike": "12",
                        "numberCommnet": "4",
                    },
                    {
                        "id": 4,
                        "image": "assets/imgs/background/11.jpg",
                        "time": "MARCH 14, 2017",
                        "title": "Led Zeppelin World Tour",
                        "description": "Before the private planes, mountains of cocaine and allegations of black magic, Led Zeppelin were four...",
                        "iconLike": "heart",
                        "iconComment": "chatbubbles",
                        "numberLike": "12",
                        "numberCommnet": "4",
                    },
                    {
                        "id": 5,
                        "image": "assets/imgs/background/10.jpg",
                        "time": "MARCH 14, 2017",
                        "title": "Black Sabbath American Tour",
                        "description": "When Black Sabbath landed at JFK Airport for their first U.S. tour, Ozzy Osbourne scrawled “Satanist” as his...",
                        "iconLike": "heart",
                        "iconComment": "chatbubbles",
                        "numberLike": "12",
                        "numberCommnet": "4",
                    },
                    {
                        "id": 6,
                        "image": "assets/imgs/background/15.jpg",
                        "time": "MARCH 14, 2017",
                        "title": "Elton John at the Troubadour",
                        "description": "When Elton John took the stage at Los Angeles’ Troubadour for the first night of his six-date residency...",
                        "iconLike": "heart",
                        "iconComment": "chatbubbles",
                        "numberLike": "12",
                        "numberCommnet": "4",
                    }
                ]
            };
        };
    }
    load(item) {
        const that = this;
        that.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('alert/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
], AlertService);



/***/ }),

/***/ "./src/app/services/animation-service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/animation-service.ts ***!
  \***********************************************/
/*! exports provided: AnimationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationService", function() { return AnimationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let AnimationService = class AnimationService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Animation';
        this.getAllThemes = () => {
            return [
                { 'url': 'animation/0', 'title': 'FadeIn Right', 'theme': 'layout1' },
                { 'url': 'animation/1', 'title': 'FadeIn Left', 'theme': 'layout2' },
                { 'url': 'animation/2', 'title': 'BounceIn', 'theme': 'layout3' },
                { 'url': 'animation/3', 'title': 'FadeInUp', 'theme': 'layout4' },
                { 'url': 'animation/4', 'title': 'ZoomIn', 'theme': 'layout5' },
                { 'url': 'animation/5', 'title': 'ZoomIn and FadeIn Left', 'theme': 'layout6' },
                { 'url': 'animation/6', 'title': 'BounceIn Right', 'theme': 'layout7' },
                { 'url': 'animation/7', 'title': 'BounceIn Left and BounceIn Left', 'theme': 'layout8' },
                { 'url': 'animation/8', 'title': 'SlideIn Up', 'theme': 'layout9' },
                { 'url': 'animation/9', 'title': 'SlideIn Left', 'theme': 'layout10' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'FadeIn Right',
                'items': [
                    {
                        "id": 1,
                        "title": "New York",
                        "subtitle": "United States",
                        "detail": "General Electric",
                        "isChecked": true
                    },
                    {
                        "id": 2,
                        "title": "Maranello",
                        "subtitle": "Italy",
                        "detail": "Ferrari",
                        "isChecked": false
                    },
                    {
                        "id": 3,
                        "title": "Boston",
                        "subtitle": "United States",
                        "detail": "Gillette",
                        "isChecked": true
                    },
                    {
                        "id": 4,
                        "title": "Munich",
                        "subtitle": "Germany",
                        "detail": "Siemens AG",
                        "isChecked": false
                    },
                    {
                        "id": 5,
                        "title": "Seul",
                        "subtitle": "South Korea",
                        "detail": "Hyundai",
                        "isChecked": false
                    },
                    {
                        "id": 6,
                        "title": "Herzogenaurach",
                        "subtitle": "Germany",
                        "detail": "Adidas",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "Redwood City",
                        "subtitle": "United States",
                        "detail": "Oracle Corporation",
                        "isChecked": false
                    },
                    {
                        "id": 8,
                        "title": "Amsterdam",
                        "subtitle": "Netherlands",
                        "detail": "Heineken Brewery",
                        "isChecked": true
                    },
                    {
                        "id": 9,
                        "title": "Tokyo",
                        "subtitle": "Japan",
                        "detail": "Canon",
                        "isChecked": false
                    },
                    {
                        "id": 10,
                        "title": "London",
                        "subtitle": "United Kingdom",
                        "detail": "Vodafone",
                        "isChecked": false
                    },
                    {
                        "id": 11,
                        "title": "Florence",
                        "subtitle": "Italy",
                        "detail": "Gucci",
                        "isChecked": true
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'BounceIn',
                "items": [
                    {
                        "title": "iPhone 8",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/1.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "500+",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/2.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "watch black",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/3.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "canon photoaparat",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/4.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "50mm",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/5.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "nikon photoaparat",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/6.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "sony PS 4",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/7.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "watch new",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/8.jpg",
                        "button": "BUY"
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'FadeInUp',
                "items": [
                    {
                        "id": 1,
                        "title": "Free Ride",
                        "backgroundImage": "assets/imgs/background/2.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 2,
                        "title": "Bridge Tour",
                        "backgroundImage": "assets/imgs/background/5.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 3,
                        "title": "Sea Tour",
                        "backgroundImage": "assets/imgs/background/21.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 4,
                        "title": "Main Stage Event",
                        "backgroundImage": "assets/imgs/background/7.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 5,
                        "title": "Classic Open Air",
                        "backgroundImage": "assets/imgs/background/11.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 6,
                        "title": "Concert Summer",
                        "backgroundImage": "assets/imgs/background/14.jpg",
                        "description": "LCras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 7,
                        "title": "Open Air Concerts",
                        "backgroundImage": "assets/imgs/background/10.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.."
                    }
                ]
            };
        };
        //* Data Set for page 4
        this.getDataForLayout4 = () => {
            return {
                'toolbarTitle': 'Styled cards 2',
                "items": [
                    {
                        "id": 1,
                        "title": "Digital Watch",
                        "subtitle": "Category: Watch",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                        "image": "assets/imgs/background/6.jpg",
                        "price": "$144.50",
                        "button": "Buy",
                        "shareIcon": "ellipsis-horizontal"
                    },
                    {
                        "id": 2,
                        "title": "Android Watch",
                        "subtitle": "Category: Watch",
                        "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
                        "image": "assets/imgs/background/9.jpg",
                        "price": "$130.99",
                        "button": "Buy",
                        "shareIcon": "ellipsis-horizontal"
                    },
                    {
                        "id": 3,
                        "title": "Acoustic Guitars",
                        "subtitle": "Category: Guitars",
                        "description": "Icero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
                        "image": "assets/imgs/background/10.jpg",
                        "price": "$354.05",
                        "button": "Buy",
                        "shareIcon": "ellipsis-horizontal"
                    },
                    {
                        "id": 4,
                        "title": "Bass guitar",
                        "subtitle": "Category: Guitars",
                        "description": "Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
                        "image": "assets/imgs/background/13.jpg",
                        "price": "$338.99",
                        "button": "Buy",
                        "shareIcon": "ellipsis-horizontal"
                    },
                    {
                        "id": 5,
                        "title": "Classical guitar",
                        "subtitle": "Category: Guitars",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                        "image": "assets/imgs/background/15.jpg",
                        "price": "$109.60",
                        "button": "Buy",
                        "shareIcon": "ellipsis-horizontal"
                    }
                ]
            };
        };
        //* Data Set for page 5
        this.getDataForLayout5 = () => {
            return {
                'toolbarTitle': 'ZoomIn',
                "items": [
                    {
                        "id": 1,
                        "category": "best offer",
                        "image": "assets/imgs/background/11.jpg",
                        "title": "Free Ride Tour",
                        "subtitle": "West Avenue, NYC",
                        "button": "$135.99"
                    },
                    {
                        "id": 2,
                        "category": "main event",
                        "image": "assets/imgs/background/14.jpg",
                        "title": "Open Air Concert",
                        "subtitle": "Hyde Park, London",
                        "button": "$312.99"
                    },
                    {
                        "id": 3,
                        "category": "Best Tourt",
                        "image": "assets/imgs/background/21.jpg",
                        "title": "Sea ture",
                        "subtitle": "Guilin, Kweilin",
                        "button": "$213.45"
                    },
                    {
                        "id": 4,
                        "category": "Mountain",
                        "image": "assets/imgs/background/7.jpg",
                        "title": "Mountain Trout",
                        "subtitle": "Mountain Trout Camp",
                        "button": "$338.60"
                    },
                    {
                        "id": 5,
                        "category": "Bridge Tour",
                        "image": "assets/imgs/background/5.jpg",
                        "title": "Bridge Tour",
                        "subtitle": "BridgeClimb, Sydney",
                        "button": "$410.85"
                    },
                    {
                        "id": 6,
                        "category": "best events",
                        "image": "assets/imgs/background/2.jpg",
                        "title": "Main Stage Event",
                        "subtitle": "Hyde Park, London ",
                        "button": "$516.55"
                    }
                ]
            };
        };
        //* Data Set for page 6
        this.getDataForLayout6 = () => {
            return {
                'toolbarTitle': 'ZoomIn and FadeIn Left',
                "headerImage": "assets/imgs/background/9.jpg",
                "title": "Engage real-time",
                "subtitle": "Startup Pitches",
                "items": [
                    {
                        "id": 1,
                        "title": "Victoria Simpson",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/9.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 2,
                        "title": "Samantha Reynolds",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/10.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 3,
                        "title": "Stacey Harris",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/11.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 4,
                        "title": "Jacqueline Guyon",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/12.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 5,
                        "title": "Mia Langevoort",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/13.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 6,
                        "title": "Amy Simsek",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/14.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 7,
                        "title": "Charlotte Sital",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/15.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 8,
                        "title": "Iria Padrón",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/16.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 9,
                        "title": "Laura Sarabia",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/17.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 10,
                        "title": "Alexia Bañuelos",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/18.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 11,
                        "title": "Erika Quiroz",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/19.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 12,
                        "title": "Emma Banda",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/20.jpg",
                        "imageAlt": "Presque Isle Harbor",
                        "button": "Read"
                    }
                ]
            };
        };
        //* Data Set for page 7
        this.getDataForLayout7 = () => {
            return {
                'toolbarTitle': 'BounceIn Right',
                "image": "assets/imgs/avatar/20.jpg",
                "title": "Samantha Kennedy",
                "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
                "category": "populary",
                "items": [
                    {
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
                    },
                    {
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
                    },
                    {
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
                    }
                ]
            };
        };
        //* Data Set for page 8
        this.getDataForLayout8 = () => {
            return {
                'toolbarTitle': 'BounceIn Left and BounceIn Left',
                "headerImage": "assets/imgs/background/9.jpg",
                "shareIcon": "ellipsis-horizontal",
                "items": [
                    {
                        "id": 1,
                        "category": "NEW OFFER",
                        "title": "Super & Black",
                        "titleDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy",
                        "subtitle": "Available Now",
                        "button": "$63.99",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "product": [
                            {
                                "title": "iPhone 8",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "avatar": "assets/imgs/avatar/1.jpg",
                                "button": "BUY"
                            },
                            {
                                "title": "500+",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "avatar": "assets/imgs/avatar/2.jpg",
                                "button": "BUY"
                            },
                            {
                                "title": "watch black",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "avatar": "assets/imgs/avatar/3.jpg",
                                "button": "BUY"
                            },
                            {
                                "title": "canon photoaparat",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "avatar": "assets/imgs/avatar/4.jpg",
                                "button": "BUY"
                            },
                            {
                                "title": "50mm",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "avatar": "assets/imgs/avatar/5.jpg",
                                "button": "BUY"
                            },
                            {
                                "title": "nikon photoaparat",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "avatar": "assets/imgs/avatar/6.jpg",
                                "button": "BUY"
                            },
                            {
                                "title": "sony PS 4",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "avatar": "assets/imgs/avatar/7.jpg",
                                "button": "BUY"
                            },
                            {
                                "title": "watch new",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "avatar": "assets/imgs/avatar/8.jpg",
                                "button": "BUY"
                            }
                        ]
                    }
                ]
            };
        };
        //* Data Set for page 9
        this.getDataForLayout9 = () => {
            return {
                'toolbarTitle': 'SlideIn Up',
                'allComments': '2121 Comments',
                'items': [
                    {
                        'id': 1,
                        'image': 'assets/imgs/avatar/16.jpg',
                        'title': 'Erica Romaguera',
                        'time': '18 August 2018 at 12:20pm',
                        'description': 'If you could have any kind of pet, what would you choose?'
                    },
                    {
                        'id': 2,
                        'image': 'assets/imgs/avatar/15.jpg',
                        'title': 'Caleigh Jerde',
                        'time': '18 August 2018 at 8:13pm',
                        'description': 'If you could learn any language, what would you choose?'
                    },
                    {
                        'id': 3,
                        'image': 'assets/imgs/avatar/14.jpg',
                        'title': 'Lucas Schultz',
                        'time': '18 August 2018 at 5:22pm',
                        'description': 'Life is about making an impact, not making an income.'
                    },
                    {
                        'id': 4,
                        'image': 'assets/imgs/avatar/13.jpg',
                        'title': 'Carole Marvin',
                        'time': '18 August 2018 at 7:36am',
                        'description': `I\’ve learned that people will forget what you said,
               people will forget what you did, but people will never forget how you made them feel`
                    },
                    {
                        'id': 5,
                        'image': 'assets/imgs/avatar/12.jpg',
                        'title': 'Doriana Feeney',
                        'time': '18 August 2018 at 5:28am',
                        'description': 'Definiteness of purpose is the starting point of all achievement.'
                    },
                    {
                        'id': 6,
                        'image': 'assets/imgs/avatar/11.jpg',
                        'title': 'Nia Gutkowski',
                        'time': '18 August 2018 at 11:27pm',
                        'description': 'Life is what happens to you while you’re busy making other plans'
                    },
                    {
                        'id': 7,
                        'image': 'assets/imgs/avatar/15.jpg',
                        'title': 'Caleigh Jerde',
                        'time': '18 August 2018 at 8:13pm',
                        'description': 'If you could learn any language, what would you choose?'
                    },
                    {
                        'id': 8,
                        'image': 'assets/imgs/avatar/14.jpg',
                        'title': 'Lucas Schultz',
                        'time': '18 August 2018 at 5:22pm',
                        'description': 'Life is about making an impact, not making an income.'
                    },
                    {
                        'id': 9,
                        'image': 'assets/imgs/avatar/13.jpg',
                        'title': 'Carole Marvin',
                        'time': '18 August 2018 at 7:36am',
                        'description': `I\’ve learned that people will forget what you said,
               people will forget what you did, but people will never forget how you made them feel`
                    },
                    {
                        'id': 10,
                        'image': 'assets/imgs/avatar/12.jpg',
                        'title': 'Doriana Feeney',
                        'time': '18 August 2018 at 5:28am',
                        'description': 'Definiteness of purpose is the starting point of all achievement.'
                    },
                    {
                        'id': 11,
                        'image': 'assets/imgs/avatar/11.jpg',
                        'title': 'Nia Gutkowski',
                        'time': '18 August 2018 at 11:27pm',
                        'description': 'Life is what happens to you while you’re busy making other plans'
                    }
                ]
            };
        };
        //* Data Set for page 10
        this.getDataForLayout10 = () => {
            return {
                'toolbarTitle': 'SlideIn Left',
                "header": "List friends",
                "items": [
                    {
                        "id": 1,
                        "title": "Erica Romaguera",
                        "subtitle": "@erica",
                        "image": "assets/imgs/avatar/13.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Nia Gutkowski",
                        "subtitle": "@nia234",
                        "image": "assets/imgs/avatar/14.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Camila Hintz",
                        "subtitle": "@camila",
                        "image": "assets/imgs/avatar/15.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Anna Yost",
                        "subtitle": "@anna",
                        "image": "assets/imgs/avatar/16.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Georgianna Baumbach",
                        "subtitle": "@georgianna",
                        "image": "assets/imgs/avatar/17.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Jaqueline Stehr",
                        "subtitle": "@jaqueline",
                        "image": "assets/imgs/avatar/18.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Naomi Mante",
                        "subtitle": "@naomi",
                        "image": "assets/imgs/avatar/19.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Amaya Abshire",
                        "subtitle": "@amaya",
                        "image": "assets/imgs/avatar/20.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Rickie Glover",
                        "subtitle": "@rickie",
                        "image": "assets/imgs/avatar/21.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Antone Mayert",
                        "subtitle": "@antone",
                        "image": "assets/imgs/avatar/22.jpg"
                    },
                    {
                        "id": 11,
                        "title": "Alison Streich",
                        "subtitle": "@alison",
                        "image": "assets/imgs/avatar/23.jpg"
                    }
                ]
            };
        };
    }
    load(item) {
        const that = this;
        that.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('animation/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
AnimationService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
AnimationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], AnimationService);



/***/ }),

/***/ "./src/app/services/app-settings.ts":
/*!******************************************!*\
  !*** ./src/app/services/app-settings.ts ***!
  \******************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
const AppSettings = {
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


/***/ }),

/***/ "./src/app/services/check-box-service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/check-box-service.ts ***!
  \***********************************************/
/*! exports provided: CheckBoxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxService", function() { return CheckBoxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let CheckBoxService = class CheckBoxService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Check Boxes';
        this.getAllThemes = () => {
            return [
                { 'url': 'check-boxes/0', 'title': 'Simple', 'theme': 'layout1' },
                { 'url': 'check-boxes/1', 'title': 'With Avatar', 'theme': 'layout2' },
                { 'url': 'check-boxes/2', 'title': 'Simple 2', 'theme': 'layout3' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Simple',
                "items": [
                    {
                        "id": 1,
                        "title": "plegros@gmail.com",
                        "isChecked": false
                    },
                    {
                        "id": 2,
                        "title": "fyundt@gmail.com",
                        "isChecked": false
                    },
                    {
                        "id": 4,
                        "title": "godfrey.von@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 3,
                        "title": "joey.feil@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 5,
                        "title": "yframi@yahoo.com",
                        "isChecked": true
                    },
                    {
                        "id": 6,
                        "title": "ytillman@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "leola.kerluke@yahoo.com",
                        "isChecked": true
                    },
                    {
                        "id": 8,
                        "title": "ignacio20@yahoo.com",
                        "isChecked": true
                    },
                    {
                        "id": 9,
                        "title": "travis34@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 10,
                        "title": "sauer.brenna@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 11,
                        "title": "michelle27@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 12,
                        "title": "ludie56@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 13,
                        "title": "luisa.hauck@yahoo.com",
                        "isChecked": true
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'With Avatar',
                "items": [
                    {
                        "id": 1,
                        "title": "Isabel Anguiano",
                        "subtitle": "@isabel",
                        "isChecked": false,
                        "image": "assets/imgs/avatar/11.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Luna Adorno",
                        "subtitle": "@luna",
                        "isChecked": false,
                        "image": "assets/imgs/avatar/10.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Abbie Kelly",
                        "subtitle": "@abbie",
                        "isChecked": true,
                        "image": "assets/imgs/avatar/9.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Silvia Salvador",
                        "subtitle": "@silvia",
                        "isChecked": true,
                        "image": "assets/imgs/avatar/14.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Teresa Puga",
                        "subtitle": "@teresa",
                        "isChecked": true,
                        "image": "assets/imgs/avatar/13.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Tara Saunders",
                        "subtitle": "@tara34",
                        "isChecked": true,
                        "image": "assets/imgs/avatar/12.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Lisa Chapman",
                        "subtitle": "@lisa957",
                        "isChecked": true,
                        "image": "assets/imgs/avatar/17.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Evie Stevens",
                        "subtitle": "@evie957",
                        "isChecked": true,
                        "image": "assets/imgs/avatar/16.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Eva Tapia",
                        "subtitle": "@eva",
                        "isChecked": true,
                        "image": "assets/imgs/avatar/15.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Julia Requena",
                        "subtitle": "@julia",
                        "isChecked": true,
                        "image": "assets/imgs/avatar/18.jpg"
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'Simple 2',
                "items": [
                    {
                        "id": 1,
                        "title": "New York",
                        "subtitle": "United States",
                        "isChecked": true,
                        "detail": "General Electric"
                    },
                    {
                        "id": 2,
                        "title": "Maranello",
                        "subtitle": "Italy",
                        "isChecked": false,
                        "detail": "Ferrari"
                    },
                    {
                        "id": 3,
                        "title": "Boston",
                        "subtitle": "United States",
                        "isChecked": false,
                        "detail": "Gillette"
                    },
                    {
                        "id": 4,
                        "title": "Munich",
                        "subtitle": "Germany",
                        "isChecked": true,
                        "detail": "Siemens AG"
                    },
                    {
                        "id": 5,
                        "title": "Seul",
                        "subtitle": "South Korea",
                        "isChecked": true,
                        "detail": "Hyundai"
                    },
                    {
                        "id": 6,
                        "title": "Herzogenaurach",
                        "subtitle": "Germany",
                        "isChecked": true,
                        "detail": "Adidas"
                    },
                    {
                        "id": 7,
                        "title": "Redwood City",
                        "subtitle": "United States",
                        "isChecked": true,
                        "detail": "Oracle Corporation"
                    },
                    {
                        "id": 8,
                        "title": "Amsterdam",
                        "subtitle": "Netherlands",
                        "isChecked": true,
                        "detail": "Heineken Brewery"
                    },
                    {
                        "id": 9,
                        "title": "Tokyo",
                        "subtitle": "Japan",
                        "isChecked": true,
                        "detail": "Canon"
                    },
                    {
                        "id": 10,
                        "title": "London",
                        "subtitle": "United Kingdom",
                        "isChecked": true,
                        "detail": "Vodafone"
                    },
                    {
                        "id": 11,
                        "title": "Florence",
                        "subtitle": "Italy",
                        "isChecked": true,
                        "detail": "Gucci"
                    }
                ]
            };
        };
    }
    load(item) {
        const that = this;
        that.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('checkBoxes/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
CheckBoxService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
CheckBoxService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], CheckBoxService);



/***/ }),

/***/ "./src/app/services/comment-service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/comment-service.ts ***!
  \*********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let CommentService = class CommentService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Comment';
        this.getAllThemes = () => {
            return [
                { 'url': 'comment/0', 'title': 'Comments Basic', 'theme': 'layout1' },
                { 'url': 'comment/1', 'title': 'Comments With Timeline', 'theme': 'layout2' },
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Commnets Basic',
                'allComments': '2121 Comments',
                'items': [
                    {
                        'id': 1,
                        'image': 'assets/imgs/avatar/16.jpg',
                        'title': 'Erica Romaguera',
                        'time': '18 August 2018 at 12:20pm',
                        'description': 'If you could have any kind of pet, what would you choose?'
                    },
                    {
                        'id': 2,
                        'image': 'assets/imgs/avatar/15.jpg',
                        'title': 'Caleigh Jerde',
                        'time': '18 August 2018 at 8:13pm',
                        'description': 'If you could learn any language, what would you choose?'
                    },
                    {
                        'id': 3,
                        'image': 'assets/imgs/avatar/14.jpg',
                        'title': 'Lucas Schultz',
                        'time': '18 August 2018 at 5:22pm',
                        'description': 'Life is about making an impact, not making an income.'
                    },
                    {
                        'id': 4,
                        'image': 'assets/imgs/avatar/13.jpg',
                        'title': 'Carole Marvin',
                        'time': '18 August 2018 at 7:36am',
                        'description': `I\’ve learned that people will forget what you said,
                   people will forget what you did, but people will never forget how you made them feel`
                    },
                    {
                        'id': 5,
                        'image': 'assets/imgs/avatar/12.jpg',
                        'title': 'Doriana Feeney',
                        'time': '18 August 2018 at 5:28am',
                        'description': 'Definiteness of purpose is the starting point of all achievement.'
                    },
                    {
                        'id': 6,
                        'image': 'assets/imgs/avatar/11.jpg',
                        'title': 'Nia Gutkowski',
                        'time': '18 August 2018 at 11:27pm',
                        'description': 'Life is what happens to you while you’re busy making other plans'
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'Comment With Timeline',
                'allComments': '2121 Comments',
                'items': [
                    {
                        'id': 1,
                        'image': 'assets/imgs/avatar/16.jpg',
                        'title': 'Erica Romaguera',
                        'time': '18 August 2018 at 12:20pm',
                        'description': 'If you could have any kind of pet, what would you choose?'
                    },
                    {
                        'id': 2,
                        'image': 'assets/imgs/avatar/15.jpg',
                        'title': 'Caleigh Jerde',
                        'time': '18 August 2018 at 8:13pm',
                        'description': 'If you could learn any language, what would you choose?'
                    },
                    {
                        'id': 3,
                        'image': 'assets/imgs/avatar/14.jpg',
                        'title': 'Lucas Schultz',
                        'time': '18 August 2018 at 5:22pm',
                        'description': 'Life is about making an impact, not making an income.'
                    },
                    {
                        'id': 4,
                        'image': 'assets/imgs/avatar/13.jpg',
                        'title': 'Carole Marvin',
                        'time': '18 August 2018 at 7:36am',
                        'description': `I’ve learned that people will forget what you said,
                   people will forget what you did, but people will never forget how you made them feel`
                    },
                    {
                        'id': 5,
                        'image': 'assets/imgs/avatar/12.jpg',
                        'title': 'Doriana Feeney',
                        'time': '18 August 2018 at 5:28am',
                        'description': 'Definiteness of purpose is the starting point of all achievement.'
                    },
                    {
                        'id': 6,
                        'image': 'assets/imgs/avatar/11.jpg',
                        'title': 'Nia Gutkowski',
                        'time': '18 August 2018 at 11:27pm',
                        'description': 'Life is what happens to you while you’re busy making other plans'
                    }
                ]
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('comment/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
CommentService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
CommentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], CommentService);



/***/ }),

/***/ "./src/app/services/export-service.ts":
/*!********************************************!*\
  !*** ./src/app/services/export-service.ts ***!
  \********************************************/
/*! exports provided: ExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportService", function() { return ExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-service */ "./src/app/services/home-service.ts");
/* harmony import */ var _intro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro-service */ "./src/app/services/intro-service.ts");
/* harmony import */ var _tabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-service */ "./src/app/services/tabs-service.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-service */ "./src/app/services/menu-service.ts");
/* harmony import */ var _new_password_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-password-services */ "./src/app/services/new-password-services.ts");
/* harmony import */ var _forget_password_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-password-services */ "./src/app/services/forget-password-services.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert-service */ "./src/app/services/alert-service.ts");
/* harmony import */ var _check_box_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./check-box-service */ "./src/app/services/check-box-service.ts");
/* harmony import */ var _search_bar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-bar-service */ "./src/app/services/search-bar-service.ts");
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wizard-service */ "./src/app/services/wizard-service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-service */ "./src/app/services/login-service.ts");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register-service */ "./src/app/services/register-service.ts");
/* harmony import */ var _list_view_expandable_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-view-expandable-service */ "./src/app/services/list-view-expandable-service.ts");
/* harmony import */ var _list_view_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list-view-drag-and-drop-service */ "./src/app/services/list-view-drag-and-drop-service.ts");
/* harmony import */ var _list_view_swipe_to_dismiss_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./list-view-swipe-to-dismiss-service */ "./src/app/services/list-view-swipe-to-dismiss-service.ts");
/* harmony import */ var _list_view_google_card_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list-view-google-card-service */ "./src/app/services/list-view-google-card-service.ts");
/* harmony import */ var _parallax_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parallax-service */ "./src/app/services/parallax-service.ts");
/* harmony import */ var _image_gallery_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./image-gallery-service */ "./src/app/services/image-gallery-service.ts");
/* harmony import */ var _maps_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./maps-service */ "./src/app/services/maps-service.ts");
/* harmony import */ var _qrcode_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./qrcode-service */ "./src/app/services/qrcode-service.ts");
/* harmony import */ var _radio_button_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./radio-button-service */ "./src/app/services/radio-button-service.ts");
/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./range-service */ "./src/app/services/range-service.ts");
/* harmony import */ var _toggle_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./toggle-service */ "./src/app/services/toggle-service.ts");
/* harmony import */ var _select_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./select-service */ "./src/app/services/select-service.ts");
/* harmony import */ var _action_sheet_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./action-sheet-service */ "./src/app/services/action-sheet-service.ts");
/* harmony import */ var _time_line_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./time-line-service */ "./src/app/services/time-line-service.ts");
/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./form-service */ "./src/app/services/form-service.ts");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./comment-service */ "./src/app/services/comment-service.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./profile-service */ "./src/app/services/profile-service.ts");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./payment-service */ "./src/app/services/payment-service.ts");
/* harmony import */ var _segment_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./segment-service */ "./src/app/services/segment-service.ts");
/* harmony import */ var _scroll_segment_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./scroll-segment-service */ "./src/app/services/scroll-segment-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animation_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./animation-service */ "./src/app/services/animation-service.ts");



































let ExportService = class ExportService {
    export() {
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
    getNewPassword() {
        let service = new _new_password_services__WEBPACK_IMPORTED_MODULE_5__["NewPasswordService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
        };
    }
    getForgetPassword() {
        let service = new _forget_password_services__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
        };
    }
    getAlert() {
        let service = new _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"](null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        };
    }
    getCheckBox() {
        let service = new _check_box_service__WEBPACK_IMPORTED_MODULE_8__["CheckBoxService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        };
    }
    getSearchBar() {
        let service = new _search_bar_service__WEBPACK_IMPORTED_MODULE_9__["SearchBarService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        };
    }
    getWizard() {
        let service = new _wizard_service__WEBPACK_IMPORTED_MODULE_10__["WizardService"](null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
        };
    }
    getLogin() {
        let service = new _login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
        };
    }
    getRegister() {
        let service = new _register_service__WEBPACK_IMPORTED_MODULE_12__["RegisterService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
        };
    }
    getListViewExpandable() {
        let service = new _list_view_expandable_service__WEBPACK_IMPORTED_MODULE_13__["ListViewExpandableService"](null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        };
    }
    getListViewDragAndDrop() {
        let service = new _list_view_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_14__["ListViewDragAndDropService"](null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        };
    }
    getListViewSwipeToDismiss() {
        let service = new _list_view_swipe_to_dismiss_service__WEBPACK_IMPORTED_MODULE_15__["ListViewSwipeToDismissService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        };
    }
    getListViewGoogleCards() {
        let service = new _list_view_google_card_service__WEBPACK_IMPORTED_MODULE_16__["ListViewGoogleCardsService"](null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
        };
    }
    getParallax() {
        let service = new _parallax_service__WEBPACK_IMPORTED_MODULE_17__["ParallaxService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
        };
    }
    getImageGallery() {
        let service = new _image_gallery_service__WEBPACK_IMPORTED_MODULE_18__["ImageGalleryService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        };
    }
    getMaps() {
        let service = new _maps_service__WEBPACK_IMPORTED_MODULE_19__["MapsService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        };
    }
    getQRCode() {
        let service = new _qrcode_service__WEBPACK_IMPORTED_MODULE_20__["QRCodeService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2()
        };
    }
    getRadioButton() {
        let service = new _radio_button_service__WEBPACK_IMPORTED_MODULE_21__["RadioButtonService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        };
    }
    getRange() {
        let service = new _range_service__WEBPACK_IMPORTED_MODULE_22__["RangeService"](null, null);
        return service.getDataForTheme(null);
    }
    getToggle() {
        let service = new _toggle_service__WEBPACK_IMPORTED_MODULE_23__["ToggleService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        };
    }
    getSelect() {
        let service = new _select_service__WEBPACK_IMPORTED_MODULE_24__["SelectService"](null, null);
        return service.getDataForTheme(null);
    }
    getActionSheet() {
        let service = new _action_sheet_service__WEBPACK_IMPORTED_MODULE_25__["ActionSheetService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        };
    }
    getTimeLine() {
        let service = new _time_line_service__WEBPACK_IMPORTED_MODULE_26__["TimeLineService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        };
    }
    getComment() {
        let service = new _comment_service__WEBPACK_IMPORTED_MODULE_28__["CommentService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
        };
    }
    getForm() {
        let service = new _form_service__WEBPACK_IMPORTED_MODULE_27__["FormService"](null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
        };
    }
    getProfile() {
        let service = new _profile_service__WEBPACK_IMPORTED_MODULE_29__["ProfileService"](null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
            'layout5': service.getDataForLayout5(),
        };
    }
    getPayment() {
        let service = new _payment_service__WEBPACK_IMPORTED_MODULE_30__["PaymentService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
        };
    }
    getSegment() {
        let service = new _segment_service__WEBPACK_IMPORTED_MODULE_31__["SegmentService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        };
    }
    getScrollSegment() {
        let service = new _scroll_segment_service__WEBPACK_IMPORTED_MODULE_32__["ScrollSegmentService"](null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
        };
    }
    getMenu() {
        let service = new _menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"](null, null);
        return service.getDataForTheme(null);
    }
    getIntro() {
        let service = new _intro_service__WEBPACK_IMPORTED_MODULE_2__["IntroService"](null, null);
        return service.getData();
    }
    getHome() {
        let service = new _home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"](null);
        return service.getData();
    }
    getAnimation() {
        let service = new _animation_service__WEBPACK_IMPORTED_MODULE_34__["AnimationService"](null, null);
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
            'layout10': service.getDataForLayout10(),
        };
    }
    getTabs() {
        let service = new _tabs_service__WEBPACK_IMPORTED_MODULE_3__["TabsService"](null, null);
        return {
            'tab1': service.getDataForTab1(),
            'tab2': service.getDataForTab2(),
            'tab3': service.getDataForTab3(),
            'tab4': service.getDataForTab4(),
            'tab5': service.getDataForTab5(),
            'tab6': service.getDataForTab6(),
            'tab7': service.getDataForTab7(),
            'tab8': service.getDataForTab8(),
            'tab9': service.getDataForTab9(),
        };
    }
};
ExportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_33__["Injectable"])()
], ExportService);



/***/ }),

/***/ "./src/app/services/forget-password-services.ts":
/*!******************************************************!*\
  !*** ./src/app/services/forget-password-services.ts ***!
  \******************************************************/
/*! exports provided: ForgetPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordService", function() { return ForgetPasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let ForgetPasswordService = class ForgetPasswordService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Forget passworsd pages';
        this.getAllThemes = () => {
            return [
                { 'url': 'forgot-password/0', 'title': 'Forget Password With Background', 'theme': 'layout1' },
                { 'url': 'forgot-password/1', 'title': 'Forget Password Simple', 'theme': 'layout2' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
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
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
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
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('forgetPassword/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
ForgetPasswordService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
ForgetPasswordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], ForgetPasswordService);



/***/ }),

/***/ "./src/app/services/form-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/form-service.ts ***!
  \******************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-service */ "./src/app/services/toast-service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");







let FormService = class FormService {
    constructor(af, loadingService, toastCtrl) {
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getTitle = () => 'Form';
        this.getAllThemes = () => {
            return [
                { 'url': 'form/0', 'title': 'Form + Write Comment', 'theme': 'layout1' },
                { 'url': 'form/1', 'title': 'Form + Write Review', 'theme': 'layout2' },
                { 'url': 'form/2', 'title': 'Form With Address', 'theme': 'layout3' },
                { 'url': 'form/3', 'title': 'Form With Location', 'theme': 'layout4' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Form + Write Comment',
                'yourName': 'Your Name',
                'title': 'Title',
                'description': 'Enter a description',
                'button': ' Write Comment'
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'Form + Write Review',
                'title': 'Continue',
                'rateTitle': 'Rate',
                'descriptionPlaceholder': 'Description',
                'btnSubmit': 'Write Comment',
                'iconsStars': [
                    {
                        'isActive': true,
                        'iconInactive': 'icon-star-outline',
                        'iconActive': 'icon-star'
                    },
                    {
                        'isActive': true,
                        'iconInactive': 'icon-star-outline',
                        'iconActive': 'icon-star'
                    },
                    {
                        'isActive': true,
                        'iconInactive': 'icon-star-outline',
                        'iconActive': 'icon-star'
                    },
                    {
                        'isActive': true,
                        'iconInactive': 'icon-star-outline',
                        'iconActive': 'icon-star'
                    },
                    {
                        'isActive': false,
                        'iconInactive': 'icon-star-outline',
                        'iconActive': 'icon-star'
                    }
                ],
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
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
        };
        //* Data Set for page 4
        this.getDataForLayout4 = () => {
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
    load(item) {
        const that = this;
        that.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('form/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
FormService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
FormService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
], FormService);



/***/ }),

/***/ "./src/app/services/home-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home-service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");





let HomeService = class HomeService {
    constructor(af) {
        this.af = af;
        // Set data for - HOME PAGE
        this.getData = () => {
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
    load() {
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('home')
                    .valueChanges()
                    .subscribe(snapshot => {
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                observer.next(this.getData());
                observer.complete();
            });
        }
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }
];
HomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
], HomeService);



/***/ }),

/***/ "./src/app/services/image-gallery-service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/image-gallery-service.ts ***!
  \***************************************************/
/*! exports provided: ImageGalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryService", function() { return ImageGalleryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let ImageGalleryService = class ImageGalleryService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Image Gallery';
        this.getAllThemes = () => {
            return [
                { 'url': 'image-gallery/0', 'title': 'Full gallery 1', 'theme': 'layout1' },
                { 'url': 'image-gallery/1', 'title': 'Thumb grid', 'theme': 'layout2' },
                { 'url': 'image-gallery/2', 'title': 'Full gallery 2', 'theme': 'layout3' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // Set Data For Gallery - CATEGORY 1 (ANIMALS)
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Full gallery 1',
                "items": [
                    {
                        "id": 1,
                        "title": "Bass Guitar",
                        "image": "assets/imgs/gallery/full-gallery-content-1/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-1/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-1/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-1/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-1/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-1/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-1/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/imgs/gallery/full-gallery-content-1/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/imgs/gallery/full-gallery-content-1/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/imgs/gallery/full-gallery-content-1/9.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/imgs/gallery/full-gallery-content-1/3.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/imgs/gallery/full-gallery-content-1/4.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/imgs/gallery/full-gallery-content-1/6.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/imgs/gallery/full-gallery-content-1/8.jpg"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Bridge",
                        "image": "assets/imgs/gallery/full-gallery-content-2/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-2/2.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-2/3.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-2/4.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-2/5.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-2/6.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-2/7.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/imgs/gallery/full-gallery-content-2/8.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/imgs/gallery/full-gallery-content-2/9.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/imgs/gallery/full-gallery-content-2/1.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/imgs/gallery/full-gallery-content-2/3.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/imgs/gallery/full-gallery-content-2/5.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/imgs/gallery/full-gallery-content-2/7.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/imgs/gallery/full-gallery-content-2/9.jpg"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Camera",
                        "image": "assets/imgs/gallery/full-gallery-content-3/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-3/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-3/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-3/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-3/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-3/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-3/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/imgs/gallery/full-gallery-content-3/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/imgs/gallery/full-gallery-content-3/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/imgs/gallery/full-gallery-content-3/9.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/imgs/gallery/full-gallery-content-3/10.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/imgs/gallery/full-gallery-content-3/11.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/imgs/gallery/full-gallery-content-3/12.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/imgs/gallery/full-gallery-content-3/13.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/imgs/gallery/full-gallery-content-3/14.jpg"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Guitar",
                        "image": "assets/imgs/gallery/full-gallery-content-4/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-4/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-4/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-4/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-4/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-4/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-4/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/imgs/gallery/full-gallery-content-4/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/imgs/gallery/full-gallery-content-4/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/imgs/gallery/full-gallery-content-4/9.jpg"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Party",
                        "image": "assets/imgs/gallery/full-gallery-content-5/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-5/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-5/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-5/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-5/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-5/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-5/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/imgs/gallery/full-gallery-content-5/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/imgs/gallery/full-gallery-content-5/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/imgs/gallery/full-gallery-content-5/9.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/imgs/gallery/full-gallery-content-5/1.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/imgs/gallery/full-gallery-content-5/3.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/imgs/gallery/full-gallery-content-5/5.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/imgs/gallery/full-gallery-content-5/6.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/imgs/gallery/full-gallery-content-5/7.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/imgs/gallery/full-gallery-content-5/8.jpg"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "preamps",
                        "image": "assets/imgs/gallery/full-gallery-content-6/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-6/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-6/10.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-6/2.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-6/3.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-6/4.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-6/5.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/imgs/gallery/full-gallery-content-6/6.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/imgs/gallery/full-gallery-content-6/7.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/imgs/gallery/full-gallery-content-6/8.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/imgs/gallery/full-gallery-content-6/9.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/imgs/gallery/full-gallery-content-6/10.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/imgs/gallery/full-gallery-content-6/3.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/imgs/gallery/full-gallery-content-6/2.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/imgs/gallery/full-gallery-content-6/4.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/imgs/gallery/full-gallery-content-6/5.jpg"
                            },
                            {
                                "id": 16,
                                "image": "assets/imgs/gallery/full-gallery-content-6/6.jpg"
                            },
                            {
                                "id": 17,
                                "image": "assets/imgs/gallery/full-gallery-content-6/1.jpg"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "Watch",
                        "image": "assets/imgs/gallery/full-gallery-content-7/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-7/3.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-7/5.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-7/4.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-7/2.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-7/1.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-7/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/imgs/gallery/full-gallery-content-7/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/imgs/gallery/full-gallery-content-7/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/imgs/gallery/full-gallery-content-7/9.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/imgs/gallery/full-gallery-content-7/0.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/imgs/gallery/full-gallery-content-7/1.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/imgs/gallery/full-gallery-content-7/3.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/imgs/gallery/full-gallery-content-7/6.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/imgs/gallery/full-gallery-content-7/9.jpg"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "title": "Travel",
                        "image": "assets/imgs/gallery/full-gallery-content-8/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-8/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-8/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-8/12.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-8/13.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-8/16.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-8/15.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/imgs/gallery/full-gallery-content-8/5.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/imgs/gallery/full-gallery-content-8/16.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/imgs/gallery/full-gallery-content-8/11.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/imgs/gallery/full-gallery-content-8/12.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/imgs/gallery/full-gallery-content-8/10.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/imgs/gallery/full-gallery-content-8/3.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/imgs/gallery/full-gallery-content-8/2.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/imgs/gallery/full-gallery-content-8/4.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/imgs/gallery/full-gallery-content-8/5.jpg"
                            }
                        ]
                    }
                ]
            };
        };
        // Set Data For Gallery - SUBCATEGORY 1 (DOGS)
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'Thumb grid',
                "items": [
                    {
                        "id": 1,
                        "image": "assets/imgs/gallery/thumb-grid/1.jpg"
                    },
                    {
                        "id": 2,
                        "image": "assets/imgs/gallery/thumb-grid/2.jpg"
                    },
                    {
                        "id": 3,
                        "image": "assets/imgs/gallery/thumb-grid/3.jpg"
                    },
                    {
                        "id": 4,
                        "image": "assets/imgs/gallery/thumb-grid/4.jpg"
                    },
                    {
                        "id": 5,
                        "image": "assets/imgs/gallery/thumb-grid/5.jpg"
                    },
                    {
                        "id": 6,
                        "image": "assets/imgs/gallery/thumb-grid/6.jpg"
                    },
                    {
                        "id": 7,
                        "image": "assets/imgs/gallery/thumb-grid/7.jpg"
                    },
                    {
                        "id": 8,
                        "image": "assets/imgs/gallery/thumb-grid/8.jpg"
                    },
                    {
                        "id": 9,
                        "image": "assets/imgs/gallery/thumb-grid/9.jpg"
                    },
                    {
                        "id": 10,
                        "image": "assets/imgs/gallery/thumb-grid/10.jpg"
                    },
                    {
                        "id": 11,
                        "image": "assets/imgs/gallery/thumb-grid/11.jpg"
                    },
                    {
                        "id": 12,
                        "image": "assets/imgs/gallery/thumb-grid/12.jpg"
                    },
                    {
                        "id": 13,
                        "image": "assets/imgs/gallery/thumb-grid/13.jpg"
                    },
                    {
                        "id": 14,
                        "image": "assets/imgs/gallery/thumb-grid/14.jpg"
                    },
                    {
                        "id": 15,
                        "image": "assets/imgs/gallery/thumb-grid/15.jpg"
                    },
                    {
                        "id": 16,
                        "image": "assets/imgs/gallery/thumb-grid/16.jpg"
                    }
                ]
            };
        };
        // Set Data For Gallery - CATEGORY 2 (MUSIC)
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'Full gallery 2',
                "items": [
                    {
                        "id": 1,
                        "title": "Amps",
                        "subtitle": "Friday, August 07, 2017",
                        "image": "assets/imgs/gallery/full-gallery-content-1/10.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-1/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-1/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-1/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-1/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-1/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-1/6.jpg"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "laptops",
                        "subtitle": "Wednesday, July 05, 2017",
                        "image": "assets/imgs/gallery/full-gallery-content-2/10.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-2/2.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-2/4.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-2/6.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-2/8.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-2/10.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-2/9.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/imgs/gallery/full-gallery-content-2/1.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/imgs/gallery/full-gallery-content-2/3.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/imgs/gallery/full-gallery-content-2/5.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/imgs/gallery/full-gallery-content-2/7.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/imgs/gallery/full-gallery-content-2/10.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/imgs/gallery/full-gallery-content-2/9.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/imgs/gallery/full-gallery-content-2/8.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/imgs/gallery/full-gallery-content-2/7.jpg"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Watch",
                        "subtitle": "Sunday, October 08, 2016",
                        "image": "assets/imgs/gallery/full-gallery-content-3/1.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-3/8.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-3/7.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-3/6.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-3/5.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-3/4.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-3/3.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/imgs/gallery/full-gallery-content-3/2.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/imgs/gallery/full-gallery-content-3/1.jpg"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Sony PC",
                        "subtitle": "Monday, June 26, 2017",
                        "image": "assets/imgs/gallery/full-gallery-content-4/1.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-4/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-4/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-4/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-4/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-4/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-4/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/imgs/gallery/full-gallery-content-4/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/imgs/gallery/full-gallery-content-4/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/imgs/gallery/full-gallery-content-4/9.jpg"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Smart Watch",
                        "subtitle": "Thursday, May 19, 2016",
                        "image": "assets/imgs/gallery/full-gallery-content-5/1.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-5/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-5/9.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-5/8.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-5/7.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-5/6.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-5/5.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/imgs/gallery/full-gallery-content-5/4.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/imgs/gallery/full-gallery-content-5/3.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/imgs/gallery/full-gallery-content-5/2.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/imgs/gallery/full-gallery-content-5/1.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/imgs/gallery/full-gallery-content-5/0.jpg"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Usb",
                        "subtitle": "Monday, September 01, 2016",
                        "image": "assets/imgs/gallery/full-gallery-content-6/10.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-6/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-6/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-6/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-6/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-6/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-6/6.jpg"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "Canon Photoaparat",
                        "subtitle": "Tuesday, September 05, 2016",
                        "image": "assets/imgs/gallery/full-gallery-content-7/7.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-7/0.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-7/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-7/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-7/5.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-7/6.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-7/7.jpg"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "title": "laptops",
                        "subtitle": "Saturday, April 25, 2016",
                        "image": "assets/imgs/gallery/full-gallery-content-8/12.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/imgs/gallery/full-gallery-content-8/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/imgs/gallery/full-gallery-content-8/3.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/imgs/gallery/full-gallery-content-8/2.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/imgs/gallery/full-gallery-content-8/5.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/imgs/gallery/full-gallery-content-8/4.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/imgs/gallery/full-gallery-content-8/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/imgs/gallery/full-gallery-content-8/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/imgs/gallery/full-gallery-content-8/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/imgs/gallery/full-gallery-content-8/10.jpg"
                            }
                        ]
                    }
                ]
            };
        };
    }
    load(item) {
        const that = this;
        that.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('imageGallery/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
ImageGalleryService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
ImageGalleryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], ImageGalleryService);



/***/ }),

/***/ "./src/app/services/intro-service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/intro-service.ts ***!
  \*******************************************/
/*! exports provided: IntroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroService", function() { return IntroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let IntroService = class IntroService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        // Set data for - WIZARD MAIN
        this.getData = () => {
            return {
                'btnPrev': 'Previous',
                'btnNext': 'Next',
                'btnFinish': 'Finish',
                "items": [
                    {
                        "backgroundImage": "assets/imgs/background/28.jpg",
                        "logo": "assets/imgs/logo/1.png",
                        "title": "Aenean feugiat ipsum eget porttitor auctor",
                        "subtitle": "Donec finibus est ac augue feugiat pretium",
                        "description": "Duis gravida, tellus eget condimentum vestibulum, massa metus gravida mauris, elementum sodales nunc tellus ut ligula"
                    },
                    {
                        "backgroundImage": "assets/imgs/background/29.jpg",
                        "logo": "assets/imgs/logo/1.png",
                        "title": "Sed sollicitudin tortor id bibendum sollicitudin",
                        "subtitle": "Integer vel mi euismod, egestas neque in, tincidunt tellus",
                        "description": "Donec tincidunt odio eget ante bibendum, eget dapibus mauris hendrerit"
                    },
                    {
                        "backgroundImage": "assets/imgs/background/30.jpg",
                        "logo": "assets/imgs/logo/1.png",
                        "title": "In ac tortor in risus commodo molestie",
                        "subtitle": "Pellentesque porttitor turpis eget metus dignissim sollicitudin",
                        "description": "Ut iaculis scelerisque mauris sit amet interdum"
                    }
                ]
            };
        };
    }
    load() {
        const that = this;
        that.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('intro')
                    .valueChanges()
                    .subscribe(snapshot => {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                that.loadingService.hide();
                observer.next(this.getData());
                observer.complete();
            });
        }
    }
};
IntroService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
IntroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], IntroService);



/***/ }),

/***/ "./src/app/services/list-view-drag-and-drop-service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/list-view-drag-and-drop-service.ts ***!
  \*************************************************************/
/*! exports provided: ListViewDragAndDropService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewDragAndDropService", function() { return ListViewDragAndDropService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-service */ "./src/app/services/toast-service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");







let ListViewDragAndDropService = class ListViewDragAndDropService {
    constructor(af, loadingService, toastCtrl) {
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = () => 'dragAndDrop';
        this.getTitle = () => 'Drag and Drop';
        this.getAllThemes = () => {
            return [
                { 'url': 'drag-and-drop/0', 'title': 'Small item + header', 'theme': 'layout1' },
                { 'url': 'drag-and-drop/1', 'title': 'Products + CTA header', 'theme': 'layout2' },
                { 'url': 'drag-and-drop/2', 'title': 'Medium item with avatar', 'theme': 'layout3' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Small Item + Header',
                "header": "Restaurants",
                "items": [
                    {
                        "id": 1,
                        "title": "Rainforest Cafe",
                        "subtitle": "New York City",
                        "description": "7186 km"
                    },
                    {
                        "id": 2,
                        "title": "Big Boy",
                        "subtitle": "Los Angeles",
                        "description": "2281 km"
                    },
                    {
                        "id": 3,
                        "title": "California Pizza Kitchen",
                        "subtitle": "Beijing",
                        "description": "1748 km"
                    },
                    {
                        "id": 4,
                        "title": "Cheese Burger in Paradise",
                        "subtitle": "Delhi",
                        "description": "3450 km"
                    },
                    {
                        "id": 5,
                        "title": "T.G.I. Friday's",
                        "subtitle": "Shanghai",
                        "description": "7374 km"
                    },
                    {
                        "id": 6,
                        "title": "Heart Attack Grill",
                        "subtitle": "Paris",
                        "description": "6070 km"
                    },
                    {
                        "id": 7,
                        "title": "Heart Attack Grill",
                        "subtitle": "Istanbul",
                        "description": "8158 km"
                    },
                    {
                        "id": 8,
                        "title": "Dick's Last Resort",
                        "subtitle": "Tokyo",
                        "description": "292 km"
                    },
                    {
                        "id": 9,
                        "title": "Steak 'n Shake",
                        "subtitle": "Guangzhou",
                        "description": "9231 km"
                    },
                    {
                        "id": 10,
                        "title": "Bluepoint Sage Cafe",
                        "subtitle": "Mumbai",
                        "description": "9972 km"
                    },
                    {
                        "id": 11,
                        "title": "Ground Round",
                        "subtitle": "Moscow",
                        "description": "9720 km"
                    },
                    {
                        "id": 12,
                        "title": "Waffle House",
                        "subtitle": "São Paulo",
                        "description": "988 km"
                    },
                    {
                        "id": 13,
                        "title": "Quaker Steak & Lube",
                        "subtitle": "Shenzhen",
                        "description": "1000 km"
                    },
                    {
                        "id": 14,
                        "title": "Boston Pizza",
                        "subtitle": "Boston",
                        "description": "2565 km"
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'Product + Cta Header',
                "header": "Cart",
                "title": "Make order now!",
                "subtitle": "Reorder list by your wish.",
                "button": "Get",
                "items": [
                    {
                        "id": 1,
                        "title": "500+",
                        "subtitle": "20% Off",
                        "image": "assets/imgs/avatar/2.jpg",
                        "price": "$199.99"
                    },
                    {
                        "id": 2,
                        "title": "iWatch black",
                        "subtitle": "15% Off",
                        "image": "assets/imgs/avatar/3.jpg",
                        "price": "$295.99"
                    },
                    {
                        "id": 3,
                        "title": "Nikon Photoaparat",
                        "subtitle": "22% Off",
                        "image": "assets/imgs/avatar/6.jpg",
                        "price": "$1032.99"
                    },
                    {
                        "id": 4,
                        "title": "Canon Photoaparat",
                        "subtitle": "10% Off",
                        "image": "assets/imgs/avatar/0.jpg",
                        "price": "$1269.99"
                    },
                    {
                        "id": 5,
                        "title": "50mm",
                        "subtitle": "12% Off",
                        "image": "assets/imgs/avatar/5.jpg",
                        "price": "$34.99"
                    },
                    {
                        "id": 6,
                        "title": "Sony PS",
                        "subtitle": "14% Off",
                        "image": "assets/imgs/avatar/7.jpg",
                        "price": "$499.99"
                    },
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'Medium Item With Avatar',
                "header": "List friends",
                "items": [
                    {
                        "id": 1,
                        "title": "Erica Romaguera",
                        "subtitle": "@erica",
                        "image": "assets/imgs/avatar/13.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Nia Gutkowski",
                        "subtitle": "@nia234",
                        "image": "assets/imgs/avatar/14.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Camila Hintz",
                        "subtitle": "@camila",
                        "image": "assets/imgs/avatar/15.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Anna Yost",
                        "subtitle": "@anna",
                        "image": "assets/imgs/avatar/16.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Georgianna Baumbach",
                        "subtitle": "@georgianna",
                        "image": "assets/imgs/avatar/17.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Jaqueline Stehr",
                        "subtitle": "@jaqueline",
                        "image": "assets/imgs/avatar/18.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Naomi Mante",
                        "subtitle": "@naomi",
                        "image": "assets/imgs/avatar/19.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Amaya Abshire",
                        "subtitle": "@amaya",
                        "image": "assets/imgs/avatar/20.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Rickie Glover",
                        "subtitle": "@rickie",
                        "image": "assets/imgs/avatar/21.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Antone Mayert",
                        "subtitle": "@antone",
                        "image": "assets/imgs/avatar/22.jpg"
                    },
                    {
                        "id": 11,
                        "title": "Alison Streich",
                        "subtitle": "@alison",
                        "image": "assets/imgs/avatar/23.jpg"
                    }
                ]
            };
        };
    }
    load(item) {
        const that = this;
        that.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('listView/dragAndDrop/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
ListViewDragAndDropService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
ListViewDragAndDropService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
], ListViewDragAndDropService);



/***/ }),

/***/ "./src/app/services/list-view-expandable-service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/list-view-expandable-service.ts ***!
  \**********************************************************/
/*! exports provided: ListViewExpandableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewExpandableService", function() { return ListViewExpandableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-service */ "./src/app/services/toast-service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");







let ListViewExpandableService = class ListViewExpandableService {
    constructor(af, loadingService, toastCtrl) {
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = () => 'expandable';
        this.getTitle = () => 'Expandable';
        this.getAllThemes = () => {
            return [
                { 'url': 'expandable/0', 'title': 'List big image', 'theme': 'layout1' },
                { 'url': 'expandable/1', 'title': 'Full image with CTA', 'theme': 'layout2' },
                { 'url': 'expandable/2', 'title': 'Centered with header', 'theme': 'layout3' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'List big image',
                "header": "Catalogue",
                "items": [
                    {
                        "id": 1,
                        "title": "Nikon",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "title": "Sony PC",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/7.jpg",
                                "details": "$399.99"
                            },
                            {
                                "id": 2,
                                "title": "Nikon Photoaparat",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/6.jpg",
                                "details": "$2058.99"
                            },
                            {
                                "id": 3,
                                "title": "Objective",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/5.jpg",
                                "details": "$89.99"
                            },
                            {
                                "id": 4,
                                "title": "Canon Photoaparat",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/4.jpg",
                                "details": "$1999.99"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "500+",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/2.jpg",
                        "items": [
                            {
                                "id": 1,
                                "title": "Watch black",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/3.jpg",
                                "details": "$99.99"
                            },
                            {
                                "id": 2,
                                "title": "Sony PC",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/7.jpg",
                                "details": "$499.99"
                            },
                            {
                                "id": 3,
                                "title": "iPhone 8 Plus",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/1.jpg",
                                "details": "$1199.99"
                            },
                            {
                                "id": 4,
                                "title": "Canon Photoaparat",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/0.jpg",
                                "details": "$798.99"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Canon Photoaparat",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/4.jpg",
                        "items": [
                            {
                                "id": 1,
                                "title": "500+",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/2.jpg",
                                "details": "$589.99"
                            },
                            {
                                "id": 2,
                                "title": "Nikon Photoaparat",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/4.jpg",
                                "details": "$799.99"
                            },
                            {
                                "id": 3,
                                "title": "Objective",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/6.jpg",
                                "details": "$99.99"
                            },
                            {
                                "id": 4,
                                "title": "Sony PC",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/7.jpg",
                                "details": "$599.99"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "iPhone 8 Plus",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/1.jpg",
                        "items": [
                            {
                                "id": 1,
                                "title": "Canon Photoaparat",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/4.jpg",
                                "details": "$412.99"
                            },
                            {
                                "id": 2,
                                "title": "Watch black",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/3.jpg",
                                "details": "$657.99"
                            },
                            {
                                "id": 3,
                                "title": "50mm",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/5.jpg",
                                "details": "$58.99"
                            },
                            {
                                "id": 4,
                                "title": "Sony PC",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/7.jpg",
                                "details": "$856.99"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "50mm",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/5.jpg",
                        "items": [
                            {
                                "id": 1,
                                "title": "Nikon",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/6.jpg",
                                "details": "$999.99"
                            },
                            {
                                "id": 2,
                                "title": "Watch black",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/3.jpg",
                                "details": "$299.99"
                            },
                            {
                                "id": 3,
                                "title": "Sony PC",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/7.jpg",
                                "details": "$658.99"
                            },
                            {
                                "id": 4,
                                "title": "500+",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/2.jpg",
                                "details": "$158.99"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Nikon Photoaparat",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/6.jpg",
                        "items": [
                            {
                                "id": 1,
                                "title": "iPhone 8 Plus",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/1.jpg",
                                "details": "$1008.99"
                            },
                            {
                                "id": 2,
                                "title": "50mm",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/5.jpg",
                                "details": "$258.99"
                            },
                            {
                                "id": 3,
                                "title": "500+",
                                "description": "Lorem ipsum.",
                                "image": "assets/imgs/avatar/2.jpg",
                                "details": "$628.99"
                            },
                            {
                                "id": 4,
                                "title": "Sony PC",
                                "description": "Lorem ipsum",
                                "image": "assets/imgs/avatar/7.jpg",
                                "details": "$580.99"
                            }
                        ]
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'Full Image With Cta',
                "items": [
                    {
                        "id": 1,
                        "title": "Open Air Concerts",
                        "subtitle": "Monday, 15th Oct. 2018",
                        "backgroundImage": "assets/imgs/background/11.jpg",
                        "icon": "arrow-forward-circle-outline",
                        "iconText": "Watch now",
                        "items": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    },
                    {
                        "id": 2,
                        "title": "Concert Summer",
                        "subtitle": "Wendsday, 21st Oct. 2018",
                        "backgroundImage": "assets/imgs/background/14.jpg",
                        "icon": "arrow-forward-circle-outline",
                        "iconText": "Watch now",
                        "items": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    },
                    {
                        "id": 3,
                        "title": "Summer Open Air Festival",
                        "subtitle": "Wendsday, 21st Oct. 2018",
                        "backgroundImage": "assets/imgs/background/13.jpg",
                        "icon": "arrow-forward-circle-outline",
                        "iconText": "Watch now",
                        "items": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    },
                    {
                        "id": 4,
                        "title": "Classic Open Air",
                        "subtitle": "Wendsday, 21st Oct. 2018",
                        "backgroundImage": "assets/imgs/background/10.jpg",
                        "icon": "arrow-forward-circle-outline",
                        "iconText": "Watch now",
                        "items": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'Centered With Header',
                "header": "Popular Car",
                "button": "CHOOSE",
                "items": [
                    {
                        "id": 1,
                        "title": "Tesla Model S",
                        "icon": "icon-chevron-right",
                        "items": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Toyota RAV4",
                        "icon": "icon-chevron-right",
                        "items": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Audi Q5",
                        "icon": "icon-chevron-right",
                        "items": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "BMW 3 Series",
                        "icon": "icon-chevron-right",
                        "items": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Audi Q7",
                        "icon": "icon-chevron-right",
                        "items": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Subaru Impreza",
                        "icon": "icon-chevron-right",
                        "items": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "BMW X5",
                        "icon": "icon-chevron-right",
                        "items": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "title": "Hyundai Tucson",
                        "icon": "icon-chevron-right",
                        "items": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "title": "Lexus RX 350",
                        "icon": "icon-chevron-right",
                        "items": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 10,
                        "title": "Jeep Wrangler",
                        "icon": "icon-chevron-right",
                        "items": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 11,
                        "title": "Subaru Outback",
                        "icon": "icon-chevron-right",
                        "items": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    }
                ]
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('listView/expandable/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
ListViewExpandableService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
ListViewExpandableService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
], ListViewExpandableService);



/***/ }),

/***/ "./src/app/services/list-view-google-card-service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/list-view-google-card-service.ts ***!
  \***********************************************************/
/*! exports provided: ListViewGoogleCardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewGoogleCardsService", function() { return ListViewGoogleCardsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-service */ "./src/app/services/toast-service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");







let ListViewGoogleCardsService = class ListViewGoogleCardsService {
    constructor(af, loadingService, toastCtrl) {
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = () => 'googleCards';
        this.getTitle = () => 'Google Cards';
        this.getAllThemes = () => {
            return [
                { 'url': 'google-card/0', 'title': 'Styled cards', 'theme': 'layout1' },
                { 'url': 'google-card/1', 'title': 'Styled cards 2', 'theme': 'layout2' },
                { 'url': 'google-card/2', 'title': 'Full image cards', 'theme': 'layout3' },
                { 'url': 'google-card/3', 'title': 'Full image cards with avatar', 'theme': 'layout4' }
            ];
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Styled cards',
                "items": [
                    {
                        "id": 1,
                        "title": "Free Ride",
                        "backgroundImage": "assets/imgs/background/2.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 2,
                        "title": "Bridge Tour",
                        "backgroundImage": "assets/imgs/background/5.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 3,
                        "title": "Sea Tour",
                        "backgroundImage": "assets/imgs/background/21.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 4,
                        "title": "Main Stage Event",
                        "backgroundImage": "assets/imgs/background/7.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 5,
                        "title": "Classic Open Air",
                        "backgroundImage": "assets/imgs/background/11.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 6,
                        "title": "Concert Summer",
                        "backgroundImage": "assets/imgs/background/14.jpg",
                        "description": "LCras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 7,
                        "title": "Open Air Concerts",
                        "backgroundImage": "assets/imgs/background/10.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.."
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'Styled cards 2',
                "items": [
                    {
                        "id": 1,
                        "title": "Digital Watch",
                        "subtitle": "Category: Watch",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                        "image": "assets/imgs/background/6.jpg",
                        "price": "$144.50",
                        "button": "Buy",
                        "shareIcon": "ellipsis-horizontal"
                    },
                    {
                        "id": 2,
                        "title": "Android Watch",
                        "subtitle": "Category: Watch",
                        "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
                        "image": "assets/imgs/background/9.jpg",
                        "price": "$130.99",
                        "button": "Buy",
                        "shareIcon": "ellipsis-horizontal"
                    },
                    {
                        "id": 3,
                        "title": "Acoustic Guitars",
                        "subtitle": "Category: Guitars",
                        "description": "Icero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
                        "image": "assets/imgs/background/10.jpg",
                        "price": "$354.05",
                        "button": "Buy",
                        "shareIcon": "ellipsis-horizontal"
                    },
                    {
                        "id": 4,
                        "title": "Bass guitar",
                        "subtitle": "Category: Guitars",
                        "description": "Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
                        "image": "assets/imgs/background/13.jpg",
                        "price": "$338.99",
                        "button": "Buy",
                        "shareIcon": "ellipsis-horizontal"
                    },
                    {
                        "id": 5,
                        "title": "Classical guitar",
                        "subtitle": "Category: Guitars",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                        "image": "assets/imgs/background/15.jpg",
                        "price": "$109.60",
                        "button": "Buy",
                        "shareIcon": "ellipsis-horizontal"
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'Full image cards',
                "items": [
                    {
                        "id": 1,
                        "category": "best offer",
                        "image": "assets/imgs/background/11.jpg",
                        "title": "Free Ride Tour",
                        "subtitle": "West Avenue, NYC",
                        "button": "$135.99"
                    },
                    {
                        "id": 2,
                        "category": "main event",
                        "image": "assets/imgs/background/14.jpg",
                        "title": "Open Air Concert",
                        "subtitle": "Hyde Park, London",
                        "button": "$312.99"
                    },
                    {
                        "id": 3,
                        "category": "Best Tourt",
                        "image": "assets/imgs/background/21.jpg",
                        "title": "Sea ture",
                        "subtitle": "Guilin, Kweilin",
                        "button": "$213.45"
                    },
                    {
                        "id": 4,
                        "category": "Mountain",
                        "image": "assets/imgs/background/7.jpg",
                        "title": "Mountain Trout",
                        "subtitle": "Mountain Trout Camp",
                        "button": "$338.60"
                    },
                    {
                        "id": 5,
                        "category": "Bridge Tour",
                        "image": "assets/imgs/background/5.jpg",
                        "title": "Bridge Tour",
                        "subtitle": "BridgeClimb, Sydney",
                        "button": "$410.85"
                    },
                    {
                        "id": 6,
                        "category": "best events",
                        "image": "assets/imgs/background/2.jpg",
                        "title": "Main Stage Event",
                        "subtitle": "Hyde Park, London ",
                        "button": "$516.55"
                    }
                ]
            };
        };
        //* Data Set for page 4
        this.getDataForLayout4 = () => {
            return {
                'toolbarTitle': 'Full image cards with avatar',
                'items': [
                    {
                        'id': 1,
                        'avatar': 'assets/imgs/avatar/10.jpg',
                        'avatarTitle': 'Katlynn Pouros',
                        'avatarSubtitle': 'from Los Angeles',
                        'time': '15 min ago',
                        'image': 'assets/imgs/background/16.jpg',
                        'title': 'Women in the Slaves',
                        'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                    },
                    {
                        'id': 2,
                        'avatar': 'assets/imgs/avatar/12.jpg',
                        'avatarTitle': 'Katlynn Pouros',
                        'avatarSubtitle': 'from Los Angeles',
                        'time': '21 min ago',
                        'image': 'assets/imgs/background/34.jpg',
                        'title': 'Women in the Slaves',
                        'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                    },
                    {
                        'id': 3,
                        'avatar': 'assets/imgs/avatar/13.jpg',
                        'avatarTitle': 'Katlynn Pouros',
                        'avatarSubtitle': 'from Los Angeles',
                        'time': '29 min ago',
                        'image': 'assets/imgs/background/35.jpg',
                        'title': 'Women in the Slaves',
                        'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                    },
                    {
                        'id': 4,
                        'avatar': 'assets/imgs/avatar/14.jpg',
                        'avatarTitle': 'Katlynn Pouros',
                        'avatarSubtitle': 'from Los Angeles',
                        'time': '32 min ago',
                        'image': 'assets/imgs/background/36.jpg',
                        'title': 'Women in the Slaves',
                        'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                    },
                    {
                        'id': 5,
                        'avatar': 'assets/imgs/avatar/15.jpg',
                        'avatarTitle': 'Katlynn Pouros',
                        'avatarSubtitle': 'from Los Angeles',
                        'time': '45 min ago',
                        'image': 'assets/imgs/background/37.jpg',
                        'title': 'Women in the Slaves',
                        'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                    },
                    {
                        'id': 6,
                        'avatar': 'assets/imgs/avatar/16.jpg',
                        'avatarTitle': 'Katlynn Pouros',
                        'avatarSubtitle': 'from Los Angeles',
                        'time': '21 min ago',
                        'image': 'assets/imgs/background/38.jpg',
                        'title': 'Women in the Slaves',
                        'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                    }
                ]
            };
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
    }
    load(item) {
        const that = this;
        that.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('listView/googleCards/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
ListViewGoogleCardsService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
ListViewGoogleCardsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
], ListViewGoogleCardsService);



/***/ }),

/***/ "./src/app/services/list-view-swipe-to-dismiss-service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/list-view-swipe-to-dismiss-service.ts ***!
  \****************************************************************/
/*! exports provided: ListViewSwipeToDismissService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewSwipeToDismissService", function() { return ListViewSwipeToDismissService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let ListViewSwipeToDismissService = class ListViewSwipeToDismissService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getId = () => 'swipeToDismiss';
        this.getTitle = () => 'Swipe to dismiss';
        this.getAllThemes = () => {
            return [
                { 'url': 'swipe-to-dismiss/0', 'title': 'Small item + header', 'theme': 'layout1' },
                { 'url': 'swipe-to-dismiss/1', 'title': 'Products + CTA', 'theme': 'layout2' },
                { 'url': 'swipe-to-dismiss/2', 'title': 'Full with image + left swipe', 'theme': 'layout3' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'headerTitle': 'Small item + header',
                "header": "Inbox",
                "title": "8 new mesages",
                "subtitle": "Mark all messages as read.",
                "button": "ok",
                "items": [
                    {
                        "id": 1,
                        "title": "Yasmine Hassan",
                        "subtitle": "AIGA Design Conference",
                        "time": "6min ago",
                        'iconDelate': 'icon-delete',
                        'iconUndo': 'icon-undo-variant'
                    },
                    {
                        "id": 2,
                        "title": "Adam Wolters",
                        "subtitle": "An Event Apart",
                        "time": "58min ago",
                        'iconDelate': 'icon-delete',
                        'iconUndo': 'icon-undo-variant'
                    },
                    {
                        "id": 3,
                        "title": "Livia Koning",
                        "subtitle": "Core 77 Conference",
                        "time": "12min ago",
                        'iconDelate': 'icon-delete',
                        'iconUndo': 'icon-undo-variant'
                    },
                    {
                        "id": 4,
                        "title": "Fatima Hussein",
                        "subtitle": "London Design Festival",
                        "time": "23min ago",
                        'iconDelate': 'icon-delete',
                        'iconUndo': 'icon-undo-variant'
                    },
                    {
                        "id": 5,
                        "title": "Lars Sambo",
                        "subtitle": "NeoCon",
                        "time": "43min ago",
                        'iconDelate': 'icon-delete',
                        'iconUndo': 'icon-undo-variant'
                    },
                    {
                        "id": 6,
                        "title": "Kyan Zhou",
                        "subtitle": "New York Times Cities for Tomorrow",
                        "time": "62min ago",
                        'iconDelate': 'icon-delete',
                        'iconUndo': 'icon-undo-variant'
                    },
                    {
                        "id": 7,
                        "title": "Amina Mohan",
                        "subtitle": "Salone del Mobile Milano",
                        "time": "81min ago",
                        'iconDelate': 'icon-delete',
                        'iconUndo': 'icon-undo-variant'
                    },
                    {
                        "id": 8,
                        "title": "Emir van der Velden",
                        "subtitle": "Creative Mornings",
                        "time": "98min ago",
                        'iconDelate': 'icon-delete',
                        'iconUndo': 'icon-undo-variant'
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'headerTitle': 'Products + CTA',
                "header": "Followings",
                "items": [
                    {
                        "id": 1,
                        "title": "Isabel Anguiano",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/imgs/avatar/9.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 2,
                        "title": "Iria Mascareñas",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/imgs/avatar/10.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 3,
                        "title": "Maria Cardenas",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/imgs/avatar/11.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 4,
                        "title": "Silvia Salvador",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/imgs/avatar/12.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 5,
                        "title": "Marina Vidal",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur.",
                        "image": "assets/imgs/avatar/13.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 6,
                        "title": "Sara Alcántarl",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/imgs/avatar/14.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 7,
                        "title": "Gabriela Reyes",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/imgs/avatar/15.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'headerTitle': 'Full with image + left swipe',
                "items": [
                    {
                        "id": 1,
                        "title": "Acoustic Guitars",
                        "subtitle": "Pre-sale",
                        "image": "assets/imgs/background/10.jpg",
                        "delate": "Delete"
                    },
                    {
                        "id": 2,
                        "title": "Bass guitar",
                        "subtitle": "Order now!",
                        "image": "assets/imgs/background/13.jpg",
                        "delate": "Delete"
                    },
                    {
                        "id": 3,
                        "title": "Classical guitar",
                        "subtitle": "Pre-sale",
                        "image": "assets/imgs/background/15.jpg",
                        "delate": "Delete"
                    }
                ]
            };
        };
    }
    load(item) {
        const that = this;
        that.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('listView/swipeToDismiss/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
ListViewSwipeToDismissService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
ListViewSwipeToDismissService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], ListViewSwipeToDismissService);



/***/ }),

/***/ "./src/app/services/loading-service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/loading-service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let LoadingService = class LoadingService {
    constructor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    show() {
        // this.loading = this.loadingCtrl.create({
        // message: 'Please wait...'
        // });
        // this.loading.present();
    }
    hide() {
        // this.loading.dismiss();
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] }
];
LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
], LoadingService);



/***/ }),

/***/ "./src/app/services/login-service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login-service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let LoginService = class LoginService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Login pages';
        this.getAllThemes = () => {
            return [
                { 'url': 'login/0', 'title': 'Login + logo 1', 'theme': 'layout1' },
                { 'url': 'login/1', 'title': 'Login + logo 2', 'theme': 'layout2' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
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
                "logo": "assets/imgs/logo/1.png",
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
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
                "logo": "assets/imgs/logo/1.png",
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('login/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], LoginService);



/***/ }),

/***/ "./src/app/services/maps-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/maps-service.ts ***!
  \******************************************/
/*! exports provided: MapsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsService", function() { return MapsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let MapsService = class MapsService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Maps';
        this.getAllThemes = () => {
            return [
                { 'url': 'maps/0', 'title': 'GMAPS + Location  Details', 'theme': 'layout1' },
                { 'url': 'maps/1', 'title': 'GMAPS + About Us', 'theme': 'layout2' },
                { 'url': 'maps/2', 'title': 'Full Screen View', 'theme': 'layout3' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'GMAPS + Location  Details',
                'title': 'Best Restaurants for Power Lunches',
                'titleDescription': 'The iconic restaurant that has defined the term power lunch since 1959 is the one and only Four Seasons.',
                'reviews': '4.12 (78 reviews)',
                'contentDescription': `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris.
             Consequat gravida pretium ligula lectus;
             Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!`,
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
                'iconsStars': [
                    {
                        'iconActive': 'icon-star',
                        'iconInactive': 'icon-star-outline',
                        'isActive': true
                    },
                    {
                        'iconActive': 'icon-star',
                        'iconInactive': 'icon-star-outline',
                        'isActive': true
                    },
                    {
                        'iconActive': 'icon-star',
                        'iconInactive': 'icon-star-outline',
                        'isActive': true
                    },
                    {
                        'iconActive': 'icon-star',
                        'iconInactive': 'icon-star-outline',
                        'isActive': true
                    },
                    {
                        'iconActive': 'icon-star',
                        'iconInactive': 'icon-star-outline',
                        'isActive': false
                    }
                ],
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true
                }
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'GMAPS + About Us',
                'title': 'Creative Studio Form',
                'titleDescription': 'Design & Development agency',
                'contentTitle': 'About us',
                'contentDescription': `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris.
             Consequat gravida pretium ligula lectus;
              Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!`,
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
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
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
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('maps/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
MapsService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
MapsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], MapsService);



/***/ }),

/***/ "./src/app/services/menu-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/menu-service.ts ***!
  \******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let MenuService = class MenuService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getId = () => 'menu';
        this.getTitle = () => 'UIAppTemplate';
        //* Data Set for main menu
        this.getAllThemes = () => {
            return [
                {
                    'url': 'items/listViews',
                    'title': 'List Views',
                    'theme': 'listViews',
                    'icon': 'icon-format-align-justify',
                    'listView': true,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/parallax',
                    'title': 'Parallax',
                    'theme': 'parallax',
                    'icon': 'icon-format-line-spacing',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'settings',
                    'title': 'RTL + Color Change',
                    'theme': 'demo',
                    'icon': 'icon-settings',
                    'listView': false,
                    'component': '',
                    'singlePage': true
                },
                {
                    'url': 'items/animation',
                    'title': 'Animations',
                    'theme': 'animation',
                    'icon': 'icon-arrange-bring-forward',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/login',
                    'title': 'Login Pages',
                    'theme': 'login',
                    'icon': 'icon-lock-open-outline',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/register',
                    'title': 'Register Pages',
                    'theme': 'register',
                    'icon': 'icon-comment-account',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/forgetPassword',
                    'title': 'Forgot Password Pages',
                    'theme': 'forgetPassword',
                    'icon': 'icon-eye-off',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/newPassword',
                    'title': 'Old/New Password Pages',
                    'theme': 'newPassword',
                    'icon': 'icon-key-variant',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/imageGallery',
                    'title': 'Image Gallery',
                    'theme': 'imageGallery',
                    'icon': 'icon-apps',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/splashScreens',
                    'title': 'Splash Screen',
                    'theme': 'splashScreens',
                    'icon': 'icon-logout',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/checkBoxes',
                    'title': 'Check Boxs',
                    'theme': 'checkBoxes',
                    'icon': 'icon-checkbox-marked',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/searchBars',
                    'title': 'Search Bars',
                    'theme': 'searchBars',
                    'icon': 'icon-magnify',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/textViews',
                    'title': 'Typo + small components',
                    'theme': 'textViews',
                    'icon': 'icon-tumblr',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/wizard',
                    'title': 'Wizard',
                    'theme': 'wizard',
                    'icon': 'icon-cellphone-settings',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/spinner',
                    'title': 'Spinner',
                    'theme': 'spinner',
                    'icon': 'icon-image-filter-tilt-shift',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/tabs',
                    'title': 'Tabs',
                    'theme': 'tabs',
                    'icon': 'icon-view-array',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/maps',
                    'title': 'Maps',
                    'theme': 'maps',
                    'icon': 'icon-google-maps',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/qrcode',
                    'title': 'QRCode',
                    'theme': 'qrcode',
                    'icon': 'icon-qrcode',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/timeline',
                    'title': 'Timeline',
                    'theme': 'timeline',
                    'icon': 'icon-timer',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/radioButton',
                    'title': 'Radio Button',
                    'theme': 'radioButton',
                    'icon': 'icon-radiobox-marked',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/range',
                    'title': 'Range',
                    'theme': 'range',
                    'icon': 'icon-toggle-switch-off',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/form',
                    'title': 'Forms',
                    'theme': 'form',
                    'icon': 'icon-content-paste',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/toggle',
                    'title': 'Toggle',
                    'theme': 'toggle',
                    'icon': 'icon-toggle-switch',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/select',
                    'title': 'Select',
                    'theme': 'select',
                    'icon': 'icon-menu-down',
                    'listView': true,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/profile',
                    'title': 'Profile',
                    'theme': 'profile',
                    'icon': 'icon-account-outline',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/comment',
                    'title': 'Comments',
                    'theme': 'comment',
                    'icon': 'icon-comment-outline',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/payment',
                    'title': 'Payment',
                    'theme': 'payment',
                    'icon': 'icon-cash',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/segment',
                    'title': 'Segment',
                    'theme': 'segment',
                    'icon': 'icon-timelapse',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/scrollSegment',
                    'title': 'Scroll Segment',
                    'theme': 'scrollSegment',
                    'icon': 'icon-view-carousel',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/actionSheet',
                    'title': 'Action Sheet',
                    'theme': 'actionSheet',
                    'icon': 'icon-dots-horizontal',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                },
                {
                    'url': 'items/alert',
                    'title': 'Alert',
                    'theme': 'alert',
                    'icon': 'icon-alert',
                    'listView': false,
                    'component': '',
                    'singlePage': false
                }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return {
                'background': 'assets/imgs/background/16.jpg',
                'image': 'assets/imgs/logo/logo.png',
                'title': 'Ionic UI - Brkko Theme'
            };
        };
        this.getEventsForTheme = (menuItem) => {
            return {};
        };
        this.prepareParams = (item) => {
            return {
                title: item.title,
                data: {},
                events: this.getEventsForTheme(item)
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('menu')
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
MenuService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
MenuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], MenuService);



/***/ }),

/***/ "./src/app/services/new-password-services.ts":
/*!***************************************************!*\
  !*** ./src/app/services/new-password-services.ts ***!
  \***************************************************/
/*! exports provided: NewPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordService", function() { return NewPasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let NewPasswordService = class NewPasswordService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Old/New Passworsd pages';
        this.getAllThemes = () => {
            return [
                { 'url': 'new-password/0', 'title': 'New Password With Background', 'theme': 'layout1' },
                { 'url': 'new-password/1', 'title': 'New Password Simple', 'theme': 'layout2' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
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
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
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
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('newPassword/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
NewPasswordService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
NewPasswordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], NewPasswordService);



/***/ }),

/***/ "./src/app/services/parallax-service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/parallax-service.ts ***!
  \**********************************************/
/*! exports provided: ParallaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxService", function() { return ParallaxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let ParallaxService = class ParallaxService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Parallax';
        this.getAllThemes = () => {
            return [
                { 'url': 'parallax/0', 'title': 'News List', 'theme': 'layout1' },
                { 'url': 'parallax/1', 'title': 'Profile', 'theme': 'layout2' },
                { 'url': 'parallax/2', 'title': 'Basic', 'theme': 'layout3' },
                { 'url': 'parallax/3', 'title': 'News', 'theme': 'layout4' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Showbiz',
                "headerImage": "assets/imgs/background/9.jpg",
                "title": "Engage real-time",
                "subtitle": "Startup Pitches",
                "items": [
                    {
                        "id": 1,
                        "title": "Victoria Simpson",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/9.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 2,
                        "title": "Samantha Reynolds",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/10.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 3,
                        "title": "Stacey Harris",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/11.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 4,
                        "title": "Jacqueline Guyon",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/12.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 5,
                        "title": "Mia Langevoort",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/13.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 6,
                        "title": "Amy Simsek",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/14.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 7,
                        "title": "Charlotte Sital",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/15.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 8,
                        "title": "Iria Padrón",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/16.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 9,
                        "title": "Laura Sarabia",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/17.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 10,
                        "title": "Alexia Bañuelos",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/18.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 11,
                        "title": "Erika Quiroz",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/19.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 12,
                        "title": "Emma Banda",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/imgs/avatar/20.jpg",
                        "imageAlt": "Presque Isle Harbor",
                        "button": "Read"
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'Profile',
                "headerImage": "assets/imgs/background/40.jpg",
                "avatar": "assets/imgs/avatar/22.jpg",
                "title": "Bruce Wilkerson",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "items": [
                    {
                        "id": 1,
                        "avatar": "assets/imgs/avatar/16.jpg",
                        "title": "Abbie Kelly",
                        "subtitle": "@abbie",
                        "button": "Follow"
                    },
                    {
                        "id": 2,
                        "avatar": "assets/imgs/avatar/17.jpg",
                        "title": "Luna Adorno",
                        "subtitle": "@luna",
                        "button": "Follow"
                    },
                    {
                        "id": 3,
                        "avatar": "assets/imgs/avatar/18.jpg",
                        "title": "Tara Saunders",
                        "subtitle": "@tara",
                        "button": "Follow"
                    },
                    {
                        "id": 4,
                        "avatar": "assets/imgs/avatar/19.jpg",
                        "title": "Amy Lee",
                        "subtitle": "@amy",
                        "button": "Follow"
                    },
                    {
                        "id": 5,
                        "avatar": "assets/imgs/avatar/20.jpg",
                        "title": "Silvia Salvador",
                        "subtitle": "@silvia",
                        "button": "Follow"
                    },
                    {
                        "id": 6,
                        "avatar": "assets/imgs/avatar/15.jpg",
                        "title": "Patrick Wright",
                        "subtitle": "@patrick",
                        "button": "Follow"
                    },
                    {
                        "id": 7,
                        "avatar": "assets/imgs/avatar/22.jpg",
                        "title": "Gabriel Mascareñas",
                        "subtitle": "@gabriel",
                        "button": "Follow"
                    },
                    {
                        "id": 8,
                        "avatar": "assets/imgs/avatar/14.jpg",
                        "title": "Sofia Clarke",
                        "subtitle": "@stephen",
                        "button": "Follow"
                    },
                    {
                        "id": 9,
                        "avatar": "assets/imgs/avatar/21.jpg",
                        "title": "Milenko Draganic",
                        "subtitle": "@milenko",
                        "button": "Follow"
                    },
                    {
                        "id": 10,
                        "avatar": "assets/imgs/avatar/23.jpg",
                        "title": "Danijel Bilic",
                        "subtitle": "@danijel",
                        "button": "Follow"
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'Product',
                "headerImage": "assets/imgs/background/9.jpg",
                "shareIcon": "ellipsis-horizontal",
                "items": [
                    {
                        "id": 1,
                        "category": "NEW OFFER",
                        "title": "Super & Black",
                        "titleDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy",
                        "subtitle": "Available Now",
                        "button": "$63.99",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "productDescriptions": [
                            {
                                "id": 1,
                                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            },
                            {
                                "id": 2,
                                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            },
                            {
                                "id": 3,
                                "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                            },
                            {
                                "id": 4,
                                "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                            }
                        ]
                    }
                ]
            };
        };
        //* Data Set for page 4
        this.getDataForLayout4 = () => {
            return {
                "toolbarTitle": "News",
                "headerImage": "assets/imgs/background/5.jpg",
                "title": "Infinit bridge made in China.",
                "subtitle": "by Myrtle Stiedemann",
                "category": "ENGINEERING",
                "avatar": "assets/imgs/avatar/23.jpg",
                "shareIcon": "ellipsis-horizontal",
                "items": [
                    {
                        "id": 1,
                        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 2,
                        "title": "Lorem ipsum dolor sit amet",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 3,
                        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                    },
                    {
                        "id": 4,
                        "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    }
                ]
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('parallax/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
ParallaxService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
ParallaxService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], ParallaxService);



/***/ }),

/***/ "./src/app/services/payment-service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/payment-service.ts ***!
  \*********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let PaymentService = class PaymentService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Payment';
        this.getAllThemes = () => {
            return [
                { 'url': 'payment/0', 'title': 'Payment', 'theme': 'layout1' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
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
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('payment/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
PaymentService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
PaymentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], PaymentService);



/***/ }),

/***/ "./src/app/services/profile-service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile-service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-service */ "./src/app/services/toast-service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");







let ProfileService = class ProfileService {
    constructor(af, loadingService, toastCtrl) {
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getTitle = () => 'Profile';
        this.getAllThemes = () => {
            return [
                { 'url': 'profile/0', 'title': 'Profile With Avatar', 'theme': 'layout1' },
                { 'url': 'profile/1', 'title': 'Profile with Slider + Comments', 'theme': 'layout2' },
                { 'url': 'profile/2', 'title': 'Profile Basic', 'theme': 'layout3' },
                { 'url': 'profile/3', 'title': 'Profile with Slider', 'theme': 'layout4' },
                { 'url': 'profile/4', 'title': 'Profile with Big Image', 'theme': 'layout5' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Profile With Avatar',
                "image": "assets/imgs/avatar/20.jpg",
                "title": "Samantha Kennedy",
                "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
                "category": "populary",
                "items": [
                    {
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
                    },
                    {
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
                    },
                    {
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
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
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
                "items": [
                    {
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
                    },
                    {
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
                    },
                    {
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
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
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
                "items": [
                    {
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
                    },
                    {
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
                    },
                    {
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
                    }
                ]
            };
        };
        //* Data Set for page 4
        this.getDataForLayout4 = () => {
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
                "items": [
                    {
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
                    },
                    {
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
                    },
                    {
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
                    }
                ]
            };
        };
        //* Data Set for page 5
        this.getDataForLayout5 = () => {
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
                "items": [
                    {
                        "id": 1,
                        "iconPhone": "call",
                        "iconMail": "mail-open",
                        "iconGlobe": "globe",
                        "phone": "i598-968-5698987",
                        "mail": "dev@csform.com",
                        "globe": "csform.com",
                        "content": "Content",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        "title": "About",
                    }
                ]
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('profile/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
], ProfileService);



/***/ }),

/***/ "./src/app/services/qrcode-service.ts":
/*!********************************************!*\
  !*** ./src/app/services/qrcode-service.ts ***!
  \********************************************/
/*! exports provided: QRCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeService", function() { return QRCodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let QRCodeService = class QRCodeService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Scanner';
        this.getAllThemes = () => {
            return [
                { 'url': 'qrcode/0', 'title': 'Qrcode Scanner', 'theme': 'layout1' },
                { 'url': 'qrcode/1', 'title': 'Qrcode Encode', 'theme': 'layout2' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
    }
    //* Data Set for page 1
    getDataForLayout1() {
        return {
            'toolbarTitle': 'QRCode page'
        };
    }
    //* Data Set for page 2
    getDataForLayout2() {
        return {
            'toolbarTitle': 'QRCode page',
            'title': 'Click To Generate QR Code',
            'label': 'Please insert your text',
            'buttonText': 'Encode Text'
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('qrcode/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
QRCodeService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
QRCodeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], QRCodeService);



/***/ }),

/***/ "./src/app/services/radio-button-service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/radio-button-service.ts ***!
  \**************************************************/
/*! exports provided: RadioButtonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonService", function() { return RadioButtonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let RadioButtonService = class RadioButtonService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Radio Button';
        this.getAllThemes = () => {
            return [
                { 'url': 'radio-button/0', 'title': 'Simple', 'theme': 'layout1' },
                { 'url': 'radio-button/1', 'title': 'With avatars', 'theme': 'layout2' },
                { 'url': 'radio-button/2', 'title': 'Simple 2', 'theme': 'layout3' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Simple',
                "title": "Your country",
                "selectedItem": 3,
                "items": [
                    { "id": 1, "title": "The Gambia" },
                    { "id": 2, "title": "Ecuador" },
                    { "id": 4, "title": "Czechia" },
                    { "id": 3, "title": "Brunei" },
                    { "id": 5, "title": "Madagascar" },
                    { "id": 6, "title": "Kuwait" },
                    { "id": 7, "title": "Liechtenstein" },
                    { "id": 8, "title": "Kiribati" },
                    { "id": 9, "title": "Hungary" },
                    { "id": 10, "title": "Fiji" },
                    { "id": 11, "title": "Serbia" },
                    { "id": 12, "title": "Saint Lucia" },
                    { "id": 13, "title": "Portugal" }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'With avatars',
                "title": "Following",
                "selectedItem": 4,
                "items": [
                    { "id": 1, "title": "Tara Saunders", "subtitle": "@tara333", "avatar": "assets/imgs/avatar/24.jpg" },
                    { "id": 2, "title": "Daniel Perrin", "subtitle": "@daniel", "avatar": "assets/imgs/avatar/23.jpg" },
                    { "id": 4, "title": "Jackson Phillips", "subtitle": "@jackson", "avatar": "assets/imgs/avatar/22.jpg" },
                    { "id": 3, "title": "Antoine Chevallier", "subtitle": "@antoine", "avatar": "assets/imgs/avatar/21.jpg" },
                    { "id": 5, "title": "Jessica White", "subtitle": "@jessica", "avatar": "assets/imgs/avatar/20.jpg" },
                    { "id": 6, "title": "Laetitia Duhamel", "subtitle": "@laetitia", "avatar": "assets/imgs/avatar/19.jpg" },
                    { "id": 7, "title": "Sylvie Rey", "subtitle": "@sylvie", "avatar": "assets/imgs/avatar/18.jpg" },
                    { "id": 8, "title": "Julie Lewis", "subtitle": "@julie44", "avatar": "assets/imgs/avatar/17.jpg" },
                    { "id": 9, "title": "Layla Chapman", "subtitle": "@layla", "avatar": "assets/imgs/avatar/16.jpg" },
                    { "id": 10, "title": "Charlotte Pelletier", "subtitle": "@charlotte", "avatar": "assets/imgs/avatar/15.jpg" }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'Simple 2',
                "title": "Loctions",
                "selectedItem": 4,
                "items": [
                    { "id": 1, "title": "New York City", "subtitle": "United States" },
                    { "id": 2, "title": "Paris", "subtitle": "France" },
                    { "id": 4, "title": "Istanbul", "subtitle": "Turkey" },
                    { "id": 3, "title": "Tokyo", "subtitle": "‎Japan" },
                    { "id": 5, "title": "Moscow", "subtitle": "Russia" },
                    { "id": 6, "title": "Mexico City", "subtitle": "Mexico" },
                    { "id": 7, "title": "Rio de Janeiro", "subtitle": "Brazil" },
                    { "id": 8, "title": "Berlin", "subtitle": "Germany" },
                    { "id": 9, "title": "Madrid", "subtitle": "Spain" },
                    { "id": 10, "title": "London", "subtitle": "United Kingdom" },
                    { "id": 11, "title": "Shanghai", "subtitle": "China" },
                    { "id": 12, "title": "Seoul", "subtitle": "South Korea" },
                    { "id": 13, "title": "Cairo", "subtitle": "Egypt" }
                ]
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('radioButton/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
RadioButtonService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
RadioButtonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], RadioButtonService);



/***/ }),

/***/ "./src/app/services/range-service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/range-service.ts ***!
  \*******************************************/
/*! exports provided: RangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeService", function() { return RangeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let RangeService = class RangeService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Range';
        this.getAllThemes = () => {
            return [
                { 'url': 'range/0', 'title': 'All', 'theme': 'layout1' },
            ];
        };
        // Set Data For Range Services
        this.getDataForTheme = (menuItem) => {
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
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('ranges')
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
RangeService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
RangeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], RangeService);



/***/ }),

/***/ "./src/app/services/register-service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register-service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let RegisterService = class RegisterService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Register pages';
        this.getAllThemes = () => {
            return [
                { 'url': 'register/0', 'title': 'Register + logo', 'theme': 'layout1' },
                { 'url': 'register/1', 'title': 'Register + image', 'theme': 'layout2' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
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
                "lableCity": "CITY",
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
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
                "lableCity": "CITY",
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('register/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
RegisterService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
RegisterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], RegisterService);



/***/ }),

/***/ "./src/app/services/scroll-segment-service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/scroll-segment-service.ts ***!
  \****************************************************/
/*! exports provided: ScrollSegmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSegmentService", function() { return ScrollSegmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let ScrollSegmentService = class ScrollSegmentService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Scroll Segment';
        this.getAllThemes = () => {
            return [
                { 'url': 'scrollSegment/0', 'title': 'Scroll Segment Text Top', 'theme': 'layout1' },
                { 'url': 'scrollSegment/1', 'title': 'Scroll Segment Text Bottom', 'theme': 'layout2' },
                { 'url': 'scrollSegment/2', 'title': 'Scroll Segment Icon Top', 'theme': 'layout3' },
                { 'url': 'scrollSegment/3', 'title': 'Scroll Segment Icon With Text Bottom', 'theme': 'layout4' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                "toolbarTitle": "Scroll Segment Text Top",
                "segmentHeader": [
                    { "text": "Profile" },
                    { "text": "New Offer" },
                    { "text": "Best  Offer" }
                ],
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
                    'items': [
                        {
                            'id': 1,
                            'subtitle': 'Iphone',
                            'title': 'Iphone 8',
                            'time': '22 August',
                            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        },
                        {
                            'id': 2,
                            'subtitle': 'Mac',
                            'title': 'Keyboard',
                            'time': '19 August',
                            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        },
                        {
                            'id': 3,
                            'subtitle': 'Photoaparat',
                            'title': 'Canon Photoaparat',
                            'time': '12 August',
                            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        },
                        {
                            'id': 4,
                            'subtitle': 'Music',
                            'title': 'Headphones',
                            'time': '10 August',
                            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        },
                        {
                            'id': 5,
                            'subtitle': 'Watch',
                            'title': 'Watch Black',
                            'time': '5 August',
                            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        },
                    ]
                },
                // Data Page 2
                "page2": {
                    "items": [
                        {
                            "id": 1,
                            "title": "Iphone 8",
                            "description": "Lorem ipsum dolor sit amet",
                            "image": "assets/imgs/avatar/1.jpg",
                            "price": "$99.99"
                        },
                        {
                            "id": 2,
                            "title": "Keyboard",
                            "description": "Lorem ipsum dolor sit amet",
                            "image": "assets/imgs/avatar/2.jpg",
                            "price": "$139.99"
                        },
                        {
                            "id": 3,
                            "title": "Canon Photoaparat",
                            "description": "Lorem ipsum dolor sit amet",
                            "image": "assets/imgs/avatar/3.jpg",
                            "price": "$149.99"
                        },
                        {
                            "id": 4,
                            "title": "Headphones",
                            "description": "Lorem ipsum dolor sit amet",
                            "image": "assets/imgs/avatar/4.jpg",
                            "price": "$19.99"
                        },
                        {
                            "id": 5,
                            "title": "Watch Black",
                            "description": "Lorem ipsum dolor sit amet",
                            "image": "assets/imgs/avatar/5.jpg",
                            "price": "$199.99"
                        }
                    ]
                },
                // Data Page 3
                "page3": {
                    "items": [
                        {
                            "id": 1,
                            "title": "Iphone 8",
                            "description": "Lorem ipsum dolor sit amet",
                            "image": "assets/imgs/avatar/1.jpg",
                            "price": "$99.99",
                            "button": "Buy"
                        },
                        {
                            "id": 2,
                            "title": "Keyboard",
                            "description": "Lorem ipsum dolor sit amet",
                            "image": "assets/imgs/avatar/2.jpg",
                            "price": "$139.99",
                            "button": "Buy"
                        },
                        {
                            "id": 3,
                            "title": "Canon Photoaparat",
                            "description": "Lorem ipsum dolor sit amet",
                            "image": "assets/imgs/avatar/3.jpg",
                            "price": "$149.99",
                            "button": "Buy"
                        },
                        {
                            "id": 4,
                            "title": "Headphones",
                            "description": "Lorem ipsum dolor sit amet",
                            "image": "assets/imgs/avatar/4.jpg",
                            "price": "$19.99",
                            "button": "Buy"
                        },
                        {
                            "id": 5,
                            "title": "Watch Black",
                            "description": "Lorem ipsum dolor sit amet",
                            "image": "assets/imgs/avatar/5.jpg",
                            "price": "$199.99",
                            "button": "Buy"
                        }
                    ]
                }
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'Scroll Segment Text Bottom',
                "segmentHeader": [
                    { "text": "Profile" },
                    { "text": "European Travel" },
                    { "text": "Asian Travel" }
                ],
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
                    'items': [
                        {
                            'id': 1,
                            'category': 'Best Cities',
                            'backgroundCard': 'assets/imgs/background/21.jpg',
                            'title': 'New York City, United States',
                        },
                        {
                            'id': 2,
                            'category': 'Best Cities',
                            'backgroundCard': 'assets/imgs/background/5.jpg',
                            'title': 'London, England',
                        },
                        {
                            'id': 3,
                            'category': 'Best Cities',
                            'backgroundCard': 'assets/imgs/background/7.jpg',
                            'title': 'Paris, France',
                        }
                    ]
                },
                // Data Page 2
                "page2": {
                    'items': [
                        {
                            'id': 1,
                            'title': 'Athens, Greece',
                            'subtitle': 'Trendier than ever, Athens is a city in constant evolution ...',
                            'price': '$ 340',
                            'image': 'assets/imgs/background/2.jpg',
                        },
                        {
                            'id': 2,
                            'title': 'Tbilisi, Georgia',
                            'subtitle': 'The Capital of Georgia is more trendy than ever in 2020; it ...',
                            'price': '$ 200',
                            'image': 'assets/imgs/background/7.jpg',
                        },
                        {
                            'id': 3,
                            'title': 'Vienna, Austria',
                            'subtitle': 'Vienna is, with Paris, Rome, Bruges and Prague, one of the ...',
                            'price': '$ 500',
                            'image': 'assets/imgs/background/5.jpg',
                        },
                        {
                            'id': 4,
                            'title': 'Cascais, Portugal',
                            'subtitle': 'Cascais is truly one of the best destinations in Europe. It ...',
                            'price': '$ 100',
                            'image': 'assets/imgs/background/18.jpg',
                        },
                        {
                            'id': 5,
                            'title': 'Sibiu, Romania',
                            'subtitle': 'Still wondering which will be the next trendy destination this ...',
                            'price': '$ 600',
                            'image': 'assets/imgs/background/21.jpg',
                        },
                    ]
                },
                // Data Page 3
                "page3": {
                    'items': [
                        {
                            'id': 1,
                            'title': 'Beijing, China',
                            'subtitle': 'In the past year, China capital has seen the opening of ...',
                            'image': 'assets/imgs/background/21.jpg',
                        },
                        {
                            'id': 2,
                            'title': 'Kuala Lumpur, Malaysia',
                            'subtitle': 'Chic boutique hotels as well as Four Seasons and the ...',
                            'image': 'assets/imgs/background/5.jpg',
                        },
                        {
                            'id': 3,
                            'title': 'Kyoto, Japan',
                            'subtitle': 'As visits to Kyoto continue to climb, a trend that will ...',
                            'image': 'assets/imgs/background/14.jpg',
                        },
                        {
                            'id': 4,
                            'title': 'Singapore',
                            'subtitle': 'In 2019, Singapore iconic Raffles Hotel reopened after ...',
                            'image': 'assets/imgs/background/2.jpg',
                        },
                        {
                            'id': 5,
                            'title': 'Songyang County, China',
                            'subtitle': 'Rural Songyang County in China eastern Zhejiang province ...',
                            'image': 'assets/imgs/background/18.jpg',
                        },
                    ]
                }
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'Scroll Segment Icon Top',
                "segmentHeader": [
                    { "icon": "heart" },
                    { "icon": "chatbox" },
                    { "icon": "reader" },
                ],
                // Data Page 1
                "page1": {
                    'items': [
                        {
                            'id': 1,
                            'title': 'Dubai, United Arab Emirates',
                            'price': '$ 20 per month',
                            'available': 'Available Now',
                            'image': 'assets/imgs/background/5.jpg',
                            "iconsStars": [
                                {
                                    "icon": "star",
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star-outline"
                                }
                            ],
                        },
                        {
                            'id': 2,
                            'title': 'Moscow, Russia',
                            'price': '$ 700 per month',
                            'available': 'Available Now',
                            'image': 'assets/imgs/background/2.jpg',
                            "iconsStars": [
                                {
                                    "icon": "star",
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star-outline"
                                }
                            ],
                        },
                        {
                            'id': 3,
                            'title': 'Tokyo, Japan',
                            'price': '$ 300 per month',
                            'available': 'Available Now',
                            'image': 'assets/imgs/background/21.jpg',
                            "iconsStars": [
                                {
                                    "icon": "star",
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star-outline"
                                }
                            ],
                        },
                        {
                            'id': 4,
                            'title': 'Paris, France',
                            'price': '$ 500 per month',
                            'available': 'Available Now',
                            'image': 'assets/imgs/background/14.jpg',
                            "iconsStars": [
                                {
                                    "icon": "star",
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star-outline"
                                }
                            ],
                        },
                    ]
                },
                // Data Page 2
                "page2": {
                    'allComments': '2121 Comments',
                    'items': [
                        {
                            'id': 1,
                            'image': 'assets/imgs/avatar/16.jpg',
                            'title': 'Erica Romaguera',
                            'time': '18 August 2018 at 12:20pm',
                            'description': 'If you could have any kind of pet, what would you choose?'
                        },
                        {
                            'id': 2,
                            'image': 'assets/imgs/avatar/15.jpg',
                            'title': 'Caleigh Jerde',
                            'time': '18 August 2018 at 8:13pm',
                            'description': 'If you could learn any language, what would you choose?'
                        },
                        {
                            'id': 3,
                            'image': 'assets/imgs/avatar/14.jpg',
                            'title': 'Lucas Schultz',
                            'time': '18 August 2018 at 5:22pm',
                            'description': 'Life is about making an impact, not making an income.'
                        },
                        {
                            'id': 4,
                            'image': 'assets/imgs/avatar/13.jpg',
                            'title': 'Carole Marvin',
                            'time': '18 August 2018 at 7:36am',
                            'description': `I\’ve learned that people will forget what you said,
                     people will forget what you did, but people will never forget how you made them feel`
                        },
                        {
                            'id': 5,
                            'image': 'assets/imgs/avatar/12.jpg',
                            'title': 'Doriana Feeney',
                            'time': '18 August 2018 at 5:28am',
                            'description': 'Definiteness of purpose is the starting point of all achievement.'
                        },
                        {
                            'id': 6,
                            'image': 'assets/imgs/avatar/11.jpg',
                            'title': 'Nia Gutkowski',
                            'time': '18 August 2018 at 11:27pm',
                            'description': 'Life is what happens to you while you’re busy making other plans'
                        }
                    ]
                },
                // Data Page 3
                "page3": {
                    "rating": "4.5",
                    "iconsStars": [
                        {
                            "iconStar": "star",
                        },
                        {
                            "iconStar": "star",
                        },
                        {
                            "iconStar": "star",
                        },
                        {
                            "iconStar": "star",
                        },
                        {
                            "iconStar": "star-outline",
                        }
                    ],
                    "items": [
                        {
                            "id": 1,
                            "title": "Erica Romaguera",
                            "time": "18 August 2018",
                            "description": "If you could have any kind of pet, what would you choose?",
                            "iconsStars": [
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star-outline",
                                },
                                {
                                    "iconStar": "star-outline",
                                }
                            ],
                        },
                        {
                            "id": 2,
                            "title": "Caleigh Jerde",
                            "time": "18 August 2018",
                            "description": "If you could learn any language, what would you choose?",
                            "iconsStars": [
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star-outline",
                                },
                                {
                                    "iconStar": "star-outline",
                                },
                                {
                                    "iconStar": "star-outline",
                                }
                            ],
                        },
                        {
                            "id": 3,
                            "title": "Lucas Schultz",
                            "time": "18 August 2018",
                            "description": "Life is about making an impact, not making an income.",
                            "iconsStars": [
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star-outline",
                                }
                            ],
                        },
                        {
                            "id": 4,
                            "title": "Carole Marvin",
                            "time": "18 August 2018",
                            "description": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
                            "iconsStars": [
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                }
                            ],
                        },
                        {
                            "id": 5,
                            "title": "Doriana Feeney",
                            "time": "18 August 2018",
                            "description": "Definiteness of purpose is the starting point of all achievement.",
                            "iconsStars": [
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star-outline",
                                }
                            ],
                        },
                        {
                            "id": 6,
                            "title": "Nia Gutkowski",
                            "time": "18 August 2018",
                            "description": "Life is what happens to you while you’re busy making other plans",
                            "iconsStars": [
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star-outline",
                                }
                            ],
                        }
                    ]
                },
            };
        };
        //* Data Set for page 4
        this.getDataForLayout4 = () => {
            return {
                'toolbarTitle': 'Scroll Segment Icon With Text Bottom',
                "segmentHeader": [
                    { "text": "Profile", "icon": "person-circle" },
                    { "text": "Commnets", "icon": "chatbox-ellipses" },
                    { "text": "Review", "icon": "reader" }
                ],
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
                    'image3': 'assets/imgs/background/21.jpg',
                },
                // Data Page 2
                "page2": {
                    'allComments': '2121 Comments',
                    'items': [
                        {
                            'id': 1,
                            'image': 'assets/imgs/avatar/17.jpg',
                            'title': 'Erica Romaguera',
                            'time': '18 August',
                            'description': 'If you could have any kind of pet, what would you choose?',
                            'buttonLike': '743',
                            'buttonDislike': '33',
                            'iconLike': 'thumbs-up',
                            'iconDislike': 'thumbs-down',
                            "iconsStars": [
                                {
                                    "icon": "star",
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star-outline"
                                }
                            ],
                        },
                        {
                            'id': 2,
                            'image': 'assets/imgs/avatar/18.jpg',
                            'title': 'Caleigh Jerde',
                            'time': '18 August',
                            'description': 'If you could learn any language, what would you choose?',
                            'buttonLike': '743',
                            'buttonDislike': '33',
                            'iconLike': 'thumbs-up',
                            'iconDislike': 'thumbs-down',
                            "iconsStars": [
                                {
                                    "icon": "star",
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star-outline"
                                },
                                {
                                    "icon": "star-outline"
                                }
                            ],
                        },
                        {
                            'id': 3,
                            'image': 'assets/imgs/avatar/19.jpg',
                            'title': 'Lucas Schultz',
                            'time': '18 August',
                            'description': 'Life is about making an impact, not making an income.',
                            'buttonLike': '743',
                            'buttonDislike': '33',
                            'iconLike': 'thumbs-up',
                            'iconDislike': 'thumbs-down',
                            "iconsStars": [
                                {
                                    "icon": "star",
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star-outline"
                                }
                            ],
                        },
                        {
                            'id': 4,
                            'image': 'assets/imgs/avatar/20.jpg',
                            'title': 'Carole Marvin',
                            'time': '18 August',
                            'description': `I\’ve learned that people will forget what you said,
                     people will forget what you did, but people will never forget how you made them feel`,
                            'buttonLike': '743',
                            'buttonDislike': '33',
                            'iconLike': 'thumbs-up',
                            'iconDislike': 'thumbs-down',
                            "iconsStars": [
                                {
                                    "icon": "star",
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star-outline"
                                },
                                {
                                    "icon": "star-outline"
                                }
                            ],
                        },
                        {
                            'id': 5,
                            'image': 'assets/imgs/avatar/21.jpg',
                            'title': 'Doriana Feeney',
                            'time': '18 August',
                            'description': 'Definiteness of purpose is the starting point of all achievement.',
                            'buttonLike': '743',
                            'buttonDislike': '33',
                            'iconLike': 'thumbs-up',
                            'iconDislike': 'thumbs-down',
                            "iconsStars": [
                                {
                                    "icon": "star",
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star-outline"
                                }
                            ],
                        },
                        {
                            'id': 6,
                            'image': 'assets/imgs/avatar/22.jpg',
                            'title': 'Nia Gutkowski',
                            'time': '18 August',
                            'description': 'Life is what happens to you while you’re busy making other plans',
                            'buttonLike': '743',
                            'buttonDislike': '33',
                            'iconLike': 'thumbs-up',
                            'iconDislike': 'thumbs-down',
                            "iconsStars": [
                                {
                                    "icon": "star",
                                },
                                {
                                    "icon": "star"
                                },
                                {
                                    "icon": "star-outline"
                                },
                                {
                                    "icon": "star-outline"
                                },
                                {
                                    "icon": "star-outline"
                                }
                            ],
                        }
                    ]
                },
                // Data Page 3
                "page3": {
                    "rating": "4.5",
                    "iconsStars": [
                        {
                            "iconStar": "star",
                        },
                        {
                            "iconStar": "star",
                        },
                        {
                            "iconStar": "star",
                        },
                        {
                            "iconStar": "star",
                        },
                        {
                            "iconStar": "star-outline",
                        }
                    ],
                    "items": [
                        {
                            "id": 1,
                            "title": "Erica Romaguera",
                            "time": "18 August 2018",
                            "description": "If you could have any kind of pet, what would you choose?",
                            "iconsStars": [
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star-outline",
                                },
                                {
                                    "iconStar": "star-outline",
                                }
                            ],
                        },
                        {
                            "id": 2,
                            "title": "Caleigh Jerde",
                            "time": "18 August 2018",
                            "description": "If you could learn any language, what would you choose?",
                            "iconsStars": [
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star-outline",
                                },
                                {
                                    "iconStar": "star-outline",
                                },
                                {
                                    "iconStar": "star-outline",
                                }
                            ],
                        },
                        {
                            "id": 3,
                            "title": "Lucas Schultz",
                            "time": "18 August 2018",
                            "description": "Life is about making an impact, not making an income.",
                            "iconsStars": [
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star-outline",
                                }
                            ],
                        },
                        {
                            "id": 4,
                            "title": "Carole Marvin",
                            "time": "18 August 2018",
                            "description": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
                            "iconsStars": [
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                }
                            ],
                        },
                        {
                            "id": 5,
                            "title": "Doriana Feeney",
                            "time": "18 August 2018",
                            "description": "Definiteness of purpose is the starting point of all achievement.",
                            "iconsStars": [
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star-outline",
                                }
                            ],
                        },
                        {
                            "id": 6,
                            "title": "Nia Gutkowski",
                            "time": "18 August 2018",
                            "description": "Life is what happens to you while you’re busy making other plans",
                            "iconsStars": [
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star",
                                },
                                {
                                    "iconStar": "star-outline",
                                }
                            ],
                        }
                    ]
                },
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('scrollSegment/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
ScrollSegmentService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
ScrollSegmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], ScrollSegmentService);



/***/ }),

/***/ "./src/app/services/search-bar-service.ts":
/*!************************************************!*\
  !*** ./src/app/services/search-bar-service.ts ***!
  \************************************************/
/*! exports provided: SearchBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarService", function() { return SearchBarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let SearchBarService = class SearchBarService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Search bars';
        this.getAllThemes = () => {
            return [
                { 'url': 'search-bars/0', 'title': 'Simple', 'theme': 'layout1' },
                { 'url': 'search-bars/1', 'title': 'Field + header', 'theme': 'layout2' },
                { 'url': 'search-bars/2', 'title': 'Field + header 2', 'theme': 'layout3' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Simple',
                "items": [
                    {
                        "title": "friends",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/background/1.jpg"
                    },
                    {
                        "title": "enemies",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/background/2.jpg"
                    },
                    {
                        "title": "neutral",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/background/3.jpg"
                    },
                    {
                        "title": "family",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/background/4.jpg"
                    },
                    {
                        "title": "guests",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/background/5.jpg"
                    },
                    {
                        "title": "students",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/background/6.jpg"
                    },
                    {
                        "title": "friends",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/background/7.jpg"
                    },
                    {
                        "title": "enemies",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/background/8.jpg"
                    },
                    {
                        "title": "neutral",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/background/9.jpg"
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'Field + header',
                "title": "Just type",
                "headerImage": "assets/imgs/background/1.jpg",
                "items": [
                    {
                        "title": "iPhone 8",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/1.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "500+",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/2.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "watch black",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/3.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "canon photoaparat",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/4.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "50mm",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/5.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "nikon photoaparat",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/6.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "sony PS 4",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/7.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "watch new",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/imgs/avatar/8.jpg",
                        "button": "BUY"
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'Field + header 2',
                "title": "Search Friends",
                "items": [
                    {
                        "id": 1,
                        "title": "justine robinson",
                        "subtitle": "@justine",
                        "detail": "Berlin",
                        "avatar": "assets/imgs/avatar/22.jpg"
                    },
                    {
                        "id": 2,
                        "title": "ruben escribano",
                        "subtitle": "@ruben",
                        "detail": "Casablanca",
                        "avatar": "assets/imgs/avatar/23.jpg"
                    },
                    {
                        "id": 3,
                        "title": "abbie wilson",
                        "subtitle": "@abbie453",
                        "detail": "Cape Town",
                        "avatar": "assets/imgs/avatar/24.jpg"
                    },
                    {
                        "id": 4,
                        "title": "laura sarabia",
                        "subtitle": "@laura",
                        "detail": "New Taipei City",
                        "avatar": "assets/imgs/avatar/19.jpg"
                    },
                    {
                        "id": 5,
                        "title": "lizzie rose",
                        "subtitle": "@lizzie",
                        "detail": "Jakarta",
                        "avatar": "assets/imgs/avatar/20.jpg"
                    },
                    {
                        "id": 6,
                        "title": "fernando villegas",
                        "subtitle": "@fernando",
                        "detail": "São Paulo",
                        "avatar": "assets/imgs/avatar/21.jpg"
                    },
                    {
                        "id": 7,
                        "title": "theresa stewart",
                        "subtitle": "@theresa",
                        "detail": "Guangzhou",
                        "avatar": "assets/imgs/avatar/16.jpg"
                    },
                    {
                        "id": 8,
                        "title": "helena scott",
                        "subtitle": "@helena44",
                        "detail": "Shanghai",
                        "avatar": "assets/imgs/avatar/17.jpg"
                    }
                ]
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('searchBars/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
SearchBarService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
SearchBarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], SearchBarService);



/***/ }),

/***/ "./src/app/services/segment-service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/segment-service.ts ***!
  \*********************************************/
/*! exports provided: SegmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentService", function() { return SegmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let SegmentService = class SegmentService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Segment';
        this.getAllThemes = () => {
            return [
                { 'url': 'segment/0', 'title': 'Segment List', 'theme': 'layout1' },
                { 'url': 'segment/1', 'title': 'Segment Card', 'theme': 'layout2' },
                { 'url': 'segment/2', 'title': 'Segment Post', 'theme': 'layout3' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Segment List',
                "segmentButton1": "New Product",
                "segmentButton2": "Most Sold Products",
                "segmentButton3": "Make Order",
                // Data Page 1
                "page1": {
                    "background": "assets/imgs/background/9.jpg",
                    "items": [
                        {
                            "id": 1,
                            "title": "Nikon",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            "image": "assets/imgs/avatar/0.jpg",
                            "button": "Buy"
                        },
                        {
                            "id": 2,
                            "title": "500+",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            "image": "assets/imgs/avatar/2.jpg",
                            "button": "Buy"
                        },
                        {
                            "id": 3,
                            "title": "Canon Photoaparat",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            "image": "assets/imgs/avatar/4.jpg",
                            "button": "Buy"
                        },
                        {
                            "id": 4,
                            "title": "iPhone 8 Plus",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            "image": "assets/imgs/avatar/1.jpg",
                            "button": "Buy"
                        },
                        {
                            "id": 5,
                            "title": "50mm",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            "image": "assets/imgs/avatar/5.jpg",
                            "button": "Buy"
                        }
                    ]
                },
                // Data Page 2
                "page2": {
                    "background": "assets/imgs/background/6.jpg",
                    "items": [
                        {
                            "id": 1,
                            "title": "Nikon Photoaparat",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            "image": "assets/imgs/avatar/6.jpg",
                        },
                        {
                            "id": 2,
                            "title": "iPhone 8 Plus",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            "image": "assets/imgs/avatar/1.jpg",
                        },
                        {
                            "id": 3,
                            "title": "50mm",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            "image": "assets/imgs/avatar/5.jpg",
                        },
                        {
                            "id": 4,
                            "title": "Nikon",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            "image": "assets/imgs/avatar/0.jpg",
                        },
                        {
                            "id": 5,
                            "title": "500+",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            "image": "assets/imgs/avatar/2.jpg",
                        }
                    ]
                },
                // Data Page 3
                "page3": {
                    "title": "Make order now!",
                    "subtitle": "List products",
                    "button": "Get",
                    "items": [
                        {
                            "id": 1,
                            "title": "500+",
                            "subtitle": "20% Off",
                            "image": "assets/imgs/avatar/2.jpg",
                            "price": "$199.99"
                        },
                        {
                            "id": 2,
                            "title": "iWatch black",
                            "subtitle": "15% Off",
                            "image": "assets/imgs/avatar/3.jpg",
                            "price": "$295.99"
                        },
                        {
                            "id": 3,
                            "title": "Nikon Photoaparat",
                            "subtitle": "22% Off",
                            "image": "assets/imgs/avatar/6.jpg",
                            "price": "$1032.99"
                        },
                        {
                            "id": 4,
                            "title": "Canon Photoaparat",
                            "subtitle": "10% Off",
                            "image": "assets/imgs/avatar/0.jpg",
                            "price": "$1269.99"
                        },
                        {
                            "id": 5,
                            "title": "50mm",
                            "subtitle": "12% Off",
                            "image": "assets/imgs/avatar/5.jpg",
                            "price": "$34.99"
                        },
                        {
                            "id": 6,
                            "title": "Sony PS",
                            "subtitle": "14% Off",
                            "image": "assets/imgs/avatar/7.jpg",
                            "price": "$499.99"
                        },
                    ]
                }
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
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
                    "items": [
                        {
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
                        },
                        {
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
                        },
                        {
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
                        }
                    ]
                },
                // Data Page 2
                "page2": {
                    "items": [
                        {
                            "id": 1,
                            "title": "Digital Watch",
                            "subtitle": "Category: Watch",
                            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                            "image": "assets/imgs/background/6.jpg",
                        },
                        {
                            "id": 2,
                            "title": "Android Watch",
                            "subtitle": "Category: Watch",
                            "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
                            "image": "assets/imgs/background/9.jpg",
                        },
                        {
                            "id": 3,
                            "title": "Acoustic Guitars",
                            "subtitle": "Category: Guitars",
                            "description": "Icero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
                            "image": "assets/imgs/background/10.jpg",
                        },
                        {
                            "id": 4,
                            "title": "Bass guitar",
                            "subtitle": "Category: Guitars",
                            "description": "Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
                            "image": "assets/imgs/background/13.jpg",
                        },
                    ]
                },
                // Data Page 3
                "page3": {
                    'toolbarTitle': 'GMAPS + About Us',
                    'title': 'Creative Studio Form',
                    'titleDescription': 'Design & Development agency',
                    'contentTitle': 'About us',
                    'contentDescription': `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris.
               Consequat gravida pretium ligula lectus;
                Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!`,
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
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
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
                    "items": [
                        {
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
                        },
                        {
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
                        },
                        {
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
                        }
                    ]
                },
                // Data Page 2
                "page2": {
                    "items": [
                        {
                            "id": 1,
                            "title": "Free Ride",
                            "backgroundImage": "assets/imgs/background/2.jpg",
                            "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                        },
                        {
                            "id": 2,
                            "title": "Bridge Tour",
                            "backgroundImage": "assets/imgs/background/5.jpg",
                            "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                        },
                        {
                            "id": 3,
                            "title": "Sea Tour",
                            "backgroundImage": "assets/imgs/background/21.jpg",
                            "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                        },
                        {
                            "id": 4,
                            "title": "Main Stage Event",
                            "backgroundImage": "assets/imgs/background/7.jpg",
                            "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                        },
                        {
                            "id": 5,
                            "title": "Classic Open Air",
                            "backgroundImage": "assets/imgs/background/11.jpg",
                            "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                        },
                        {
                            "id": 6,
                            "title": "Concert Summer",
                            "backgroundImage": "assets/imgs/background/14.jpg",
                            "description": "LCras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                        },
                        {
                            "id": 7,
                            "title": "Open Air Concerts",
                            "backgroundImage": "assets/imgs/background/10.jpg",
                            "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.."
                        }
                    ]
                },
                // Data Page 2
                "page3": {
                    "items": [
                        {
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
                        },
                        {
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
                        },
                        {
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
                        },
                        {
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
                        },
                        {
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
                        }
                    ]
                }
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('segment/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
SegmentService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
SegmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], SegmentService);



/***/ }),

/***/ "./src/app/services/select-service.ts":
/*!********************************************!*\
  !*** ./src/app/services/select-service.ts ***!
  \********************************************/
/*! exports provided: SelectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectService", function() { return SelectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let SelectService = class SelectService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Select';
        this.getAllThemes = () => {
            return [
                { 'url': 'select/0', 'title': 'Single Select', 'theme': 'layout1' },
                { 'url': 'select/1', 'title': 'Multi Select', 'theme': 'layout2' }
            ];
        };
        //* Data Set for page 1
        this.getDataForTheme = (menuItem) => {
            return {
                'title': 'Select',
                'layout1': {
                    'headerTitle': 'Single Select',
                    'title': 'City',
                    'selectedItem': 12,
                    'header': 'Basic dialog',
                    'items': [
                        {
                            'id': 12,
                            'title': 'New York'
                        },
                        {
                            'id': 14,
                            'title': 'Paris'
                        },
                        {
                            'id': 13,
                            'title': 'Amsterdam'
                        },
                        {
                            'id': 15,
                            'title': 'Gotham City'
                        }
                    ]
                },
                'layout2': {
                    'headerTitle': 'Single Select',
                    'title': 'Country',
                    'header': 'One touch dialog',
                    'selectedItem': 22,
                    'items': [
                        {
                            'id': 22,
                            'title': 'USA'
                        },
                        {
                            'id': 24,
                            'title': 'France'
                        },
                        {
                            'id': 23,
                            'title': 'Netherland'
                        },
                        {
                            'id': 25,
                            'title': 'Gothamland'
                        }
                    ]
                },
                'layout3': {
                    'headerTitle': 'Single Select',
                    'title': 'Address',
                    'header': 'With Action sheet',
                    'selectedItem': 31,
                    'items': [
                        {
                            'id': 31,
                            'title': 'Choose address'
                        },
                        {
                            'id': 32,
                            'title': '222 Duffield Street'
                        },
                        {
                            'id': 34,
                            'title': '198 Clark Street'
                        },
                        {
                            'id': 33,
                            'title': '588 Kenmore Terrace'
                        }
                    ]
                },
                'layout4': {
                    'headerTitle': 'Multi Select',
                    'title': 'Date',
                    'header': 'Two option select',
                    'selectedItemMonth': 38,
                    'selectedItemYear': 50,
                    'itemsMonth': [
                        {
                            'id': 38,
                            'title': 'January'
                        },
                        {
                            'id': 39,
                            'title': 'February'
                        },
                        {
                            'id': 40,
                            'title': 'March'
                        },
                        {
                            'id': 41,
                            'title': 'April'
                        },
                        {
                            'id': 42,
                            'title': 'May'
                        },
                        {
                            'id': 43,
                            'title': 'June'
                        },
                        {
                            'id': 44,
                            'title': 'July'
                        },
                        {
                            'id': 45,
                            'title': 'August'
                        },
                        {
                            'id': 46,
                            'title': 'September'
                        },
                        {
                            'id': 47,
                            'title': 'October'
                        },
                        {
                            'id': 48,
                            'title': 'November'
                        },
                        {
                            'id': 49,
                            'title': 'December'
                        }
                    ],
                    'itemsYears': [
                        {
                            'id': 50,
                            'title': '2009'
                        },
                        {
                            'id': 51,
                            'title': '2010'
                        },
                        {
                            'id': 52,
                            'title': '2011'
                        },
                        {
                            'id': 53,
                            'title': '2012'
                        },
                        {
                            'id': 54,
                            'title': '2013'
                        },
                        {
                            'id': 55,
                            'title': '2014'
                        },
                        {
                            'id': 56,
                            'title': '2015'
                        },
                        {
                            'id': 57,
                            'title': '2016'
                        },
                        {
                            'id': 58,
                            'title': '2017'
                        }
                    ]
                },
                'layout5': {
                    'headerTitle': 'Single Select',
                    'title': 'Country',
                    'header': 'One touch dialog',
                    'selectedItem': 22,
                    'items': [
                        {
                            'id': 22,
                            'title': 'USA'
                        },
                        {
                            'id': 24,
                            'title': 'France'
                        },
                        {
                            'id': 23,
                            'title': 'Netherland'
                        },
                        {
                            'id': 25,
                            'title': 'Gothamland'
                        }
                    ]
                },
                'layout6': {
                    'headerTitle': 'Multi Select',
                    'title': 'Date',
                    'header': 'Two option select',
                    'selectedItemMonth': 38,
                    'selectedItemYear': 50,
                    'itemsMonth': [
                        {
                            'id': 38,
                            'title': 'January'
                        },
                        {
                            'id': 39,
                            'title': 'February'
                        },
                        {
                            'id': 40,
                            'title': 'March'
                        },
                        {
                            'id': 41,
                            'title': 'April'
                        },
                        {
                            'id': 42,
                            'title': 'May'
                        },
                        {
                            'id': 43,
                            'title': 'June'
                        },
                        {
                            'id': 44,
                            'title': 'July'
                        },
                        {
                            'id': 45,
                            'title': 'August'
                        },
                        {
                            'id': 46,
                            'title': 'September'
                        },
                        {
                            'id': 47,
                            'title': 'October'
                        },
                        {
                            'id': 48,
                            'title': 'November'
                        },
                        {
                            'id': 49,
                            'title': 'December'
                        }
                    ],
                    'itemsYears': [
                        {
                            'id': 50,
                            'title': '2009'
                        },
                        {
                            'id': 51,
                            'title': '2010'
                        },
                        {
                            'id': 52,
                            'title': '2011'
                        },
                        {
                            'id': 53,
                            'title': '2012'
                        },
                        {
                            'id': 54,
                            'title': '2013'
                        },
                        {
                            'id': 55,
                            'title': '2014'
                        },
                        {
                            'id': 56,
                            'title': '2015'
                        },
                        {
                            'id': 57,
                            'title': '2016'
                        },
                        {
                            'id': 58,
                            'title': '2017'
                        }
                    ]
                }
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('select')
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
SelectService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
SelectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], SelectService);



/***/ }),

/***/ "./src/app/services/tabs-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tabs-service.ts ***!
  \******************************************/
/*! exports provided: TabsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsService", function() { return TabsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let TabsService = class TabsService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Tabs';
        this.getAllThemes = () => {
            return [
                { 'url': 'tab/0/tab/tab1', 'title': 'Footer tab - text', 'theme': 'layout1' },
                { 'url': 'tab/1/tab/tab4', 'title': 'Footer tab - icons', 'theme': 'layout2' },
                { 'url': 'tab/2/tab/tab7', 'title': 'Header tab - text', 'theme': 'layout3' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.charAt(0).toUpperCase() +
                menuItem.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForTab1 = () => {
            return {
                'items': [
                    {
                        'id': 1,
                        'title': 'Fortuitu ad aeroportus',
                        'titleHeader': 'Simul quanta praecinctionis',
                        'description': `Contra opinione vulgi, accumsan non tantum temere text.
                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                        'image': 'assets/imgs/background/1.jpg',
                        'button': 'EXPLORE',
                        'shareButton': 'SHARE'
                    },
                    {
                        'id': 2,
                        'title': 'Hoc est exortum',
                        'titleHeader': 'Pedestres sub imprudentia contentum',
                        'description': `Contra opinione vulgi, accumsan non tantum temere text.
                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                        'image': 'assets/imgs/background/2.jpg',
                        'button': 'EXPLORE',
                        'shareButton': 'SHARE'
                    },
                    {
                        'id': 3,
                        'title': 'Communications moderatoris',
                        'titleHeader': 'Technica et Internet habeat facultatem',
                        'description': `Contra opinione vulgi, accumsan non tantum temere text.
                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                        'image': 'assets/imgs/background/5.jpg',
                        'button': 'EXPLORE',
                        'shareButton': 'SHARE'
                    },
                    {
                        'id': 4,
                        'title': 'Tabulas scripto munus agere providere',
                        'titleHeader': 'Ut adeptus est atrium',
                        'description': `Contra opinione vulgi, accumsan non tantum temere text.
                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                        'image': 'assets/imgs/background/3.jpg',
                        'button': 'EXPLORE',
                        'shareButton': 'SHARE'
                    },
                    {
                        'id': 5,
                        'title': 'In outpatient nuntiatum ministerium',
                        'titleHeader': 'Testis unus',
                        'description': `Contra opinione vulgi, accumsan non tantum temere text.
                Quod habet radices in fragmen literaturam Romanam classicam a XLV BC, MM facit super annos. Richard McClintock`,
                        'image': 'assets/imgs/background/1.jpg',
                        'button': 'EXPLORE',
                        'shareButton': 'SHARE'
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForTab2 = () => {
            return {
                'headerTitle': "List Frends",
                "items": [
                    {
                        "title": "Isabel Villar",
                        "subtitle": "@isabel.villar",
                        "follow": "follow",
                        "avatar": "assets/imgs/avatar/17.jpg"
                    },
                    {
                        "title": "Silvia Salvador",
                        "subtitle": "@silvia.salvador",
                        "follow": "follow",
                        "avatar": "assets/imgs/avatar/16.jpg"
                    },
                    {
                        "title": "Marguerite Thibault",
                        "subtitle": "@marguerite.thib",
                        "follow": "follow",
                        "avatar": "assets/imgs/avatar/15.jpg"
                    },
                    {
                        "title": "Marianne Maillet",
                        "subtitle": "@marianne.maillet",
                        "follow": "follow",
                        "avatar": "assets/imgs/avatar/14.jpg"
                    },
                    {
                        "title": "Julie Martins",
                        "subtitle": "@julie.martins",
                        "follow": "follow",
                        "avatar": "assets/imgs/avatar/13.jpg"
                    },
                    {
                        "title": "Sofia Zepeda",
                        "subtitle": "@sofia.zepeda",
                        "follow": "follow",
                        "avatar": "assets/imgs/avatar/12.jpg"
                    },
                    {
                        "title": "Nathalie Voisin",
                        "subtitle": "@nathalie.voisin",
                        "follow": "follow",
                        "avatar": "assets/imgs/avatar/11.jpg"
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForTab3 = () => {
            return {
                'allComments': '2121 Comments',
                'items': [
                    {
                        'id': 1,
                        'image': 'assets/imgs/avatar/16.jpg',
                        'title': 'Erica Romaguera',
                        'time': '18 August 2018 at 12:20pm',
                        'description': 'If you could have any kind of pet, what would you choose?'
                    },
                    {
                        'id': 2,
                        'image': 'assets/imgs/avatar/15.jpg',
                        'title': 'Caleigh Jerde',
                        'time': '18 August 2018 at 8:13pm',
                        'description': 'If you could learn any language, what would you choose?'
                    },
                    {
                        'id': 3,
                        'image': 'assets/imgs/avatar/14.jpg',
                        'title': 'Lucas Schultz',
                        'time': '18 August 2018 at 5:22pm',
                        'description': 'Life is about making an impact, not making an income.'
                    },
                    {
                        'id': 4,
                        'image': 'assets/imgs/avatar/13.jpg',
                        'title': 'Carole Marvin',
                        'time': '18 August 2018 at 7:36am',
                        'description': `I\’ve learned that people will forget what you said,
               people will forget what you did, but people will never forget how you made them feel`
                    },
                    {
                        'id': 5,
                        'image': 'assets/imgs/avatar/12.jpg',
                        'title': 'Doriana Feeney',
                        'time': '18 August 2018 at 5:28am',
                        'description': 'Definiteness of purpose is the starting point of all achievement.'
                    },
                    {
                        'id': 6,
                        'image': 'assets/imgs/avatar/11.jpg',
                        'title': 'Nia Gutkowski',
                        'time': '18 August 2018 at 11:27pm',
                        'description': 'Life is what happens to you while you’re busy making other plans'
                    }
                ]
            };
        };
        //* Data Set for page 4
        this.getDataForTab4 = () => {
            return {
                'items': [
                    {
                        'id': 1,
                        'avatar': 'assets/imgs/avatar/10.jpg',
                        'avatarTitle': 'Katlynn Pouros',
                        'avatarSubtitle': 'from Los Angeles',
                        'time': '15 min ago',
                        'image': 'assets/imgs/background/34.jpg',
                        'title': 'Women in the Slaves',
                        'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                    },
                    {
                        'id': 2,
                        'avatar': 'assets/imgs/avatar/12.jpg',
                        'avatarTitle': 'Katlynn Pouros',
                        'avatarSubtitle': 'from Los Angeles',
                        'time': '21 min ago',
                        'image': 'assets/imgs/background/35.jpg',
                        'title': 'Women in the Slaves',
                        'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                    },
                    {
                        'id': 3,
                        'avatar': 'assets/imgs/avatar/13.jpg',
                        'avatarTitle': 'Katlynn Pouros',
                        'avatarSubtitle': 'from Los Angeles',
                        'time': '29 min ago',
                        'image': 'assets/imgs/background/36.jpg',
                        'title': 'Women in the Slaves',
                        'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                    },
                    {
                        'id': 4,
                        'avatar': 'assets/imgs/avatar/14.jpg',
                        'avatarTitle': 'Katlynn Pouros',
                        'avatarSubtitle': 'from Los Angeles',
                        'time': '32 min ago',
                        'image': 'assets/imgs/background/37.jpg',
                        'title': 'Women in the Slaves',
                        'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                    },
                    {
                        'id': 5,
                        'avatar': 'assets/imgs/avatar/15.jpg',
                        'avatarTitle': 'Katlynn Pouros',
                        'avatarSubtitle': 'from Los Angeles',
                        'time': '45 min ago',
                        'image': 'assets/imgs/background/16.jpg',
                        'title': 'Women in the Slaves',
                        'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                    },
                    {
                        'id': 6,
                        'avatar': 'assets/imgs/avatar/16.jpg',
                        'avatarTitle': 'Katlynn Pouros',
                        'avatarSubtitle': 'from Los Angeles',
                        'time': '21 min ago',
                        'image': 'assets/imgs/background/38.jpg',
                        'title': 'Women in the Slaves',
                        'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                    }
                ]
            };
        };
        //* Data Set for page 5
        this.getDataForTab5 = () => {
            return {
                'allComments': '2121 Comments',
                'items': [
                    {
                        'id': 1,
                        'image': 'assets/imgs/avatar/16.jpg',
                        'title': 'Erica Romaguera',
                        'time': '18 August 2018 at 12:20pm',
                        'description': 'If you could have any kind of pet, what would you choose?'
                    },
                    {
                        'id': 2,
                        'image': 'assets/imgs/avatar/15.jpg',
                        'title': 'Caleigh Jerde',
                        'time': '18 August 2018 at 8:13pm',
                        'description': 'If you could learn any language, what would you choose?'
                    },
                    {
                        'id': 3,
                        'image': 'assets/imgs/avatar/14.jpg',
                        'title': 'Lucas Schultz',
                        'time': '18 August 2018 at 5:22pm',
                        'description': 'Life is about making an impact, not making an income.'
                    },
                    {
                        'id': 4,
                        'image': 'assets/imgs/avatar/13.jpg',
                        'title': 'Carole Marvin',
                        'time': '18 August 2018 at 7:36am',
                        'description': `I’ve learned that people will forget what you said,
               people will forget what you did, but people will never forget how you made them feel`
                    },
                    {
                        'id': 5,
                        'image': 'assets/imgs/avatar/12.jpg',
                        'title': 'Doriana Feeney',
                        'time': '18 August 2018 at 5:28am',
                        'description': 'Definiteness of purpose is the starting point of all achievement.'
                    },
                    {
                        'id': 6,
                        'image': 'assets/imgs/avatar/11.jpg',
                        'title': 'Nia Gutkowski',
                        'time': '18 August 2018 at 11:27pm',
                        'description': 'Life is what happens to you while you’re busy making other plans'
                    }
                ]
            };
        };
        //* Data Set for page 6
        this.getDataForTab6 = () => {
            return {
                'yourName': 'Your Name',
                'title': 'Title',
                'description': 'Enter a description',
                'button': ' Write Comment'
            };
        };
        //* Data Set for page 7
        this.getDataForTab7 = () => {
            return {
                'headerImage': 'assets/imgs/background/21.jpg',
                'title': 'Infinit pontem in Sinis',
                'subtitle': 'per marescalluml',
                'category': 'Category',
                'avatar': 'assets/imgs/avatar/13.jpg',
                'shareIcon': 'ellipsis-horizontal',
                'actionSheet': {
                    'buttons': [
                        {
                            'text': 'Add to Cart',
                            'role': 'destructive'
                        },
                        {
                            'text': 'Add to Favorites'
                        },
                        {
                            'text': 'Read more info'
                        },
                        {
                            'text': 'Delete Item'
                        },
                        {
                            'text': 'Cancel',
                            'role': 'cancel'
                        }
                    ]
                },
                'items': [
                    {
                        'id': 1,
                        'subtitle': "Hoc est, visu nova thriller, posuit orbem in fimbriis modern arte, quae est tenebrosa, haunting, torta - vertit se et in suo modo. Non quod objective, et arte discipulus apud Notingham, nuper Jack quae ducitur 'diluvium, ' frigus, saeva enfant inexpugnabiles omnes modern art. Et vadit ad deversorium cubiculum vult bibere et cetera id exuendum statum tunc illa e somno evigilans in lecto suo."
                    },
                    {
                        'id': 2,
                        'subtitle': 'Percussas pavore est, sane, sed etiam in auribus eorum amplius diluvium ad inveniendum, qui utitur maxime auctoribus imaginum cinematographicarum praebere video camera ejus vita (hoc est ars, ut videtur). Et obliti sunt ea nocte in hotel cubiculum terminus sursum in quodam loco quis gallery? Si illa ad magistratus? Et factum est, ut quod deest illi amice Jenny?'
                    },
                    {
                        'id': 3,
                        'subtitle': 'It takes sursum magis, nimis longum est aedificate (usque ad paginam fere CLX) Ad validam in mia quia actio, sed altiore hoc est a dolor modern thriller, et fortiter mentis habitu femineo (adhuc inusitato scelus ficta). Jaq Hazell vigilare sit an author.'
                    },
                    {
                        'id': 4,
                        'subtitle': 'Vesalius habet cum ramosis in lupinotuum, conscripserit et comici librorum, sed saeva Lane videt eum quasi animam suam antiquis nota mundo, quamvis tempus suum ingenia sunt paulo plus crevit et hi qui crediderant, cum ex Novus York ad urbem est viridius, affluentes, et suburbana earum.'
                    }
                ]
            };
        };
        //* Data Set for page 8
        this.getDataForTab8 = () => {
            return {
                'allComments': '2121 Comments',
                'items': [
                    {
                        'id': 1,
                        'image': 'assets/imgs/avatar/16.jpg',
                        'title': 'Erica Romaguera',
                        'time': '18 August 2018 at 12:20pm',
                        'description': 'If you could have any kind of pet, what would you choose?'
                    },
                    {
                        'id': 2,
                        'image': 'assets/imgs/avatar/15.jpg',
                        'title': 'Caleigh Jerde',
                        'time': '18 August 2018 at 8:13pm',
                        'description': 'If you could learn any language, what would you choose?'
                    },
                    {
                        'id': 3,
                        'image': 'assets/imgs/avatar/14.jpg',
                        'title': 'Lucas Schultz',
                        'time': '18 August 2018 at 5:22pm',
                        'description': 'Life is about making an impact, not making an income.'
                    },
                    {
                        'id': 4,
                        'image': 'assets/imgs/avatar/13.jpg',
                        'title': 'Carole Marvin',
                        'time': '18 August 2018 at 7:36am',
                        'description': `I\’ve learned that people will forget what you said,
               people will forget what you did, but people will never forget how you made them feel`
                    },
                    {
                        'id': 5,
                        'image': 'assets/imgs/avatar/12.jpg',
                        'title': 'Doriana Feeney',
                        'time': '18 August 2018 at 5:28am',
                        'description': 'Definiteness of purpose is the starting point of all achievement.'
                    },
                    {
                        'id': 6,
                        'image': 'assets/imgs/avatar/11.jpg',
                        'title': 'Nia Gutkowski',
                        'time': '18 August 2018 at 11:27pm',
                        'description': 'Life is what happens to you while you’re busy making other plans'
                    }
                ]
            };
        };
        //* Data Set for page 9
        this.getDataForTab9 = () => {
            return {
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true,
                },
                "slider": [
                    {
                        "id": 1,
                        "image": "assets/imgs/background/16.jpg",
                        "title": "Free Ride Tour",
                        "subtitle": "Best Offer",
                    },
                    {
                        "id": 2,
                        "image": "assets/imgs/background/13.jpg",
                        "title": "Main Stage Event",
                        "subtitle": "Main Event",
                    },
                    {
                        "id": 3,
                        "image": "assets/imgs/background/19.jpg",
                        "title": "Bridge Tour",
                        "subtitle": "Mountain",
                    },
                    {
                        "id": 4,
                        "image": "assets/imgs/background/21.jpg",
                        "title": "Free Ride Tour",
                        "subtitle": "Best Tourt",
                    },
                    {
                        "id": 5,
                        "image": "assets/imgs/background/6.jpg",
                        "title": "Mountain Trout",
                        "subtitle": "Mountain",
                    },
                    {
                        "id": 6,
                        "image": "assets/imgs/background/10.jpg",
                        "title": "Sea ture",
                        "subtitle": "Bridge Tour",
                    },
                    {
                        "id": 7,
                        "image": "assets/imgs/background/11.jpg",
                        "title": "Free Ride Tour",
                        "subtitle": "Best Events",
                    },
                    {
                        "id": 8,
                        "image": "assets/imgs/background/19.jpg",
                        "title": "Mountain Trout",
                        "subtitle": "Mountain",
                    },
                    {
                        "id": 9,
                        "image": "assets/imgs/background/16.jpg",
                        "title": "Sea ture",
                        "subtitle": "Best Events",
                    },
                    {
                        "id": 10,
                        "image": "assets/imgs/background/21.jpg",
                        "title": "Free Ride Tour",
                        "subtitle": "Main Event",
                    }
                ]
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('tab/' + item)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
TabsService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
TabsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], TabsService);



/***/ }),

/***/ "./src/app/services/time-line-service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/time-line-service.ts ***!
  \***********************************************/
/*! exports provided: TimeLineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeLineService", function() { return TimeLineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let TimeLineService = class TimeLineService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getId = () => 'timeline';
        this.getTitle = () => 'Time Line';
        this.getAllThemes = () => {
            return [
                { 'url': 'timeline/0', 'title': 'Timeline With Cards', 'theme': 'layout1' },
                { 'url': 'timeline/1', 'title': 'Timeline With Avatar', 'theme': 'layout2' },
                { 'url': 'timeline/2', 'title': 'Timeline With Comments', 'theme': 'layout3' },
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 2
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Timeline With Cards',
                "items": [
                    {
                        "id": 1,
                        "title": "Electric Guitar",
                        "time": "TODAY AT 2:20PM",
                        "image": "assets/imgs/background/10.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Electric Guitar Pack",
                        "time": "TODAY AT 1:30PM",
                        "image": "assets/imgs/background/11.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Acoustic Guitar",
                        "time": "TODAY AT 14:20PM",
                        "image": "assets/imgs/background/13.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Acoustic-Electric",
                        "time": "TODAY AT 15:15PM",
                        "image": "assets/imgs/background/15.jpg"
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'Timeline With Avatar',
                "items": [
                    {
                        "id": 1,
                        "title": "iPhone 8 Plus",
                        "time": "TODAY AT 2:20PM",
                        "avatar": "assets/imgs/avatar/1.jpg",
                        "price": "$ 3.23"
                    },
                    {
                        "id": 2,
                        "title": "Watch black",
                        "time": "TODAY AT 1:30PM",
                        "avatar": "assets/imgs/avatar/3.jpg",
                        "price": "$ 3.23"
                    },
                    {
                        "id": 3,
                        "title": "Canon Photoaparat",
                        "time": "TODAY AT 14:20PM",
                        "avatar": "assets/imgs/avatar/4.jpg",
                        "price": "$ 3.23"
                    },
                    {
                        "id": 4,
                        "title": "Nikon Photoaparat",
                        "time": "TODAY AT 15:15PM",
                        "avatar": "assets/imgs/avatar/0.jpg",
                        "price": "$ 3.23"
                    },
                    {
                        "id": 5,
                        "title": "Objective",
                        "time": "TODAY AT 15:15PM",
                        "avatar": "assets/imgs/avatar/6.jpg",
                        "price": "$ 3.23"
                    },
                    {
                        "id": 6,
                        "title": "50mm",
                        "time": "TODAY AT 18:15PM",
                        "avatar": "assets/imgs/avatar/5.jpg",
                        "price": "$ 3.23"
                    },
                    {
                        "id": 7,
                        "title": "Watch black",
                        "time": "TODAY AT 19:55PM",
                        "avatar": "assets/imgs/avatar/8.jpg",
                        "price": "$ 3.23"
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'Timeline With Comments',
                "items": [
                    {
                        "id": 1,
                        "time": "TODAY AT 2:20PM",
                        "avatar": "assets/imgs/avatar/10.jpg",
                        "title": "Alice Ellis",
                        "subtitle": "@alice",
                        "description": "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks."
                    },
                    {
                        "id": 2,
                        "time": "TODAY AT 1:30PM",
                        "avatar": "assets/imgs/avatar/11.jpg",
                        "title": "Natasha Cox",
                        "subtitle": "@natasha",
                        "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
                    },
                    {
                        "id": 3,
                        "time": "TODAY AT 14:20PM",
                        "avatar": "assets/imgs/avatar/12.jpg",
                        "title": "Caroline Wright",
                        "subtitle": "@caroline",
                        "description": "It is a long established fact that a reader will be distracted by the readable."
                    },
                    {
                        "id": 4,
                        "time": "TODAY AT 14:20PM",
                        "avatar": "assets/imgs/avatar/13.jpg",
                        "title": "Cameron Rogers",
                        "subtitle": "@cameron",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    }
                ]
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('timeline/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
TimeLineService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
TimeLineService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], TimeLineService);



/***/ }),

/***/ "./src/app/services/toast-service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast-service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this
                .toastController
                .create({ 'position': 'bottom', 'duration': 2000, 'message': message });
            toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
], ToastService);



/***/ }),

/***/ "./src/app/services/toggle-service.ts":
/*!********************************************!*\
  !*** ./src/app/services/toggle-service.ts ***!
  \********************************************/
/*! exports provided: ToggleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleService", function() { return ToggleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");






let ToggleService = class ToggleService {
    constructor(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getTitle = () => 'Toggle';
        this.getAllThemes = () => {
            return [
                { 'url': 'toggle/0', 'title': 'With avatars', 'theme': 'layout1' },
                { 'url': 'toggle/1', 'title': 'Simple 2', 'theme': 'layout2' },
                { 'url': 'toggle/2', 'title': 'Simple', 'theme': 'layout3' },
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'With avatars',
                "title": "With avatars",
                "items": [
                    {
                        "id": 0,
                        "title": "Theresa Mason",
                        "subtitle": "theresa@email",
                        "isChecked": false,
                        "avatar": "assets/imgs/avatar/9.jpg"
                    },
                    {
                        "id": 1,
                        "title": "Laetitia Duhamel",
                        "subtitle": "laetitia@email",
                        "isChecked": false,
                        "avatar": "assets/imgs/avatar/10.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Marine Aubry",
                        "subtitle": "marine@email",
                        "isChecked": false,
                        "avatar": "assets/imgs/avatar/11.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Samantha Kennedy",
                        "subtitle": "samantha@email",
                        "isChecked": false,
                        "avatar": "assets/imgs/avatar/12.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Juliette Blondel",
                        "subtitle": "juliette@email",
                        "isChecked": false,
                        "avatar": "assets/imgs/avatar/13.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Isabelle Pascal",
                        "subtitle": "isabelle@email",
                        "isChecked": false,
                        "avatar": "assets/imgs/avatar/14.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Valentine Roy",
                        "subtitle": "valentine@email",
                        "isChecked": false,
                        "avatar": "assets/imgs/avatar/15.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Alice Kelly",
                        "subtitle": "alice@emai",
                        "isChecked": false,
                        "avatar": "assets/imgs/avatar/16.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Caitlin Wilkinson",
                        "subtitle": "caitlin@email",
                        "isChecked": false,
                        "avatar": "assets/imgs/avatar/17.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Camille Garnier",
                        "subtitle": "camille@email",
                        "isChecked": false,
                        "avatar": "assets/imgs/avatar/18.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Suzanne Petit",
                        "subtitle": "suzanne@email",
                        "isChecked": false,
                        "avatar": "assets/imgs/avatar/19.jpg"
                    },
                    {
                        "id": 11,
                        "title": "Stacey Harris",
                        "subtitle": "stacey@email",
                        "isChecked": false,
                        "avatar": "assets/imgs/avatar/20.jpg"
                    },
                    {
                        "id": 12,
                        "title": "Jamie Clark",
                        "subtitle": "jamie@email",
                        "isChecked": false,
                        "avatar": "assets/imgs/avatar/21.jpg"
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'Simple 2',
                "title": "Simple 2",
                "items": [
                    {
                        "id": 1,
                        "title": "bilic@yahoo.com",
                        "subtitle": "Daniel",
                        "isChecked": true
                    },
                    {
                        "id": 2,
                        "title": "roussel@yahoo.com",
                        "subtitle": "Manon",
                        "isChecked": false
                    },
                    {
                        "id": 4,
                        "title": "chevallier@mail.com",
                        "subtitle": "Antoine",
                        "isChecked": false
                    },
                    {
                        "id": 3,
                        "title": "laurent@gmail.com",
                        "subtitle": "Michel",
                        "isChecked": false
                    },
                    {
                        "id": 5,
                        "title": "delahaye@mail.com",
                        "subtitle": "Laurence",
                        "isChecked": false
                    },
                    {
                        "id": 6,
                        "title": "valentin@mail.com",
                        "subtitle": "Pénélope",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "hebert@mail.com",
                        "subtitle": "Adèle",
                        "isChecked": false
                    },
                    {
                        "id": 8,
                        "title": "delattre@yahoo.com",
                        "subtitle": "Monique",
                        "isChecked": false
                    },
                    {
                        "id": 9,
                        "title": "mahe@mail.com",
                        "subtitle": "Charles",
                        "isChecked": false
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'Simple',
                "title": "Simple",
                "items": [
                    {
                        "id": 0,
                        "title": "United Kingdom",
                        "isChecked": true
                    },
                    {
                        "id": 1,
                        "title": "South Africa",
                        "isChecked": false
                    },
                    {
                        "id": 2,
                        "title": "Qatar",
                        "isChecked": false
                    },
                    {
                        "id": 3,
                        "title": "Philippines",
                        "isChecked": false
                    },
                    {
                        "id": 4,
                        "title": "New Zealand",
                        "isChecked": true
                    },
                    {
                        "id": 5,
                        "title": "Mongolia",
                        "isChecked": true
                    },
                    {
                        "id": 6,
                        "title": "Luxembourg",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "Jamaica",
                        "isChecked": false
                    },
                    {
                        "id": 8,
                        "title": "India",
                        "isChecked": false
                    },
                    {
                        "id": 9,
                        "title": "Grenada",
                        "isChecked": false
                    },
                    {
                        "id": 10,
                        "title": "France",
                        "isChecked": false
                    },
                    {
                        "id": 11,
                        "title": "Ecuador",
                        "isChecked": false
                    },
                    {
                        "id": 12,
                        "title": "Argentina",
                        "isChecked": false
                    }
                ]
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('toggle/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
ToggleService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
ToggleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], ToggleService);



/***/ }),

/***/ "./src/app/services/wizard-service.ts":
/*!********************************************!*\
  !*** ./src/app/services/wizard-service.ts ***!
  \********************************************/
/*! exports provided: WizardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardService", function() { return WizardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/services/app-settings.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-service */ "./src/app/services/toast-service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-service */ "./src/app/services/loading-service.ts");







let WizardService = class WizardService {
    constructor(af, loadingService, toastCtrl) {
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getTitle = () => 'Wizard';
        this.getAllThemes = () => {
            return [
                { 'url': 'wizard/0', 'title': 'Simple + icon', 'theme': 'layout1' },
                { 'url': 'wizard/1', 'title': 'Big image', 'theme': 'layout2' },
                { 'url': 'wizard/2', 'title': 'Big Image + Text', 'theme': 'layout3' },
                { 'url': 'wizard/3', 'title': 'Article with Text', 'theme': 'layout4' }
            ];
        };
        this.getDataForTheme = (menuItem) => {
            return this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //* Data Set for page 1
        this.getDataForLayout1 = () => {
            return {
                'toolbarTitle': 'Simple + icon',
                "btnPrev": "Previous",
                "btnNext": "Next",
                "btnFinish": "Finish",
                "items": [
                    {
                        "backgroundImage": "assets/imgs/background/28.jpg",
                        "logo": "assets/imgs/logo/1.png",
                        "title": "Aenean feugiat ipsum eget porttitor auctor",
                        "subtitle": "Donec finibus est ac augue feugiat pretium",
                        "description": "Duis gravida, tellus eget condimentum vestibulum, massa metus gravida mauris, elementum sodales nunc tellus ut ligula"
                    },
                    {
                        "backgroundImage": "assets/imgs/background/29.jpg",
                        "logo": "assets/imgs/logo/1.png",
                        "title": "Sed sollicitudin tortor id bibendum sollicitudin",
                        "subtitle": "Integer vel mi euismod, egestas neque in, tincidunt tellus",
                        "description": "Donec tincidunt odio eget ante bibendum, eget dapibus mauris hendrerit"
                    },
                    {
                        "backgroundImage": "assets/imgs/background/30.jpg",
                        "logo": "assets/imgs/logo/1.png",
                        "title": "In ac tortor in risus commodo molestie",
                        "subtitle": "Pellentesque porttitor turpis eget metus dignissim sollicitudin",
                        "description": "Ut iaculis scelerisque mauris sit amet interdum"
                    }
                ]
            };
        };
        //* Data Set for page 2
        this.getDataForLayout2 = () => {
            return {
                'toolbarTitle': 'Big image',
                "btnNext": "Next",
                "btnFinish": "Finish",
                "items": [
                    {
                        "welcome": "Welcome",
                        "backgroundImage": "assets/imgs/background/32.jpg",
                        "title": "Welcome to our new iOS theme",
                        "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "welcome": "Welcome",
                        "backgroundImage": "assets/imgs/background/26.jpg",
                        "title": "Welcome to our new iOS theme",
                        "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "welcome": "Welcome",
                        "backgroundImage": "assets/imgs/background/25.jpg",
                        "title": "Welcome to our new iOS theme",
                        "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    }
                ]
            };
        };
        //* Data Set for page 3
        this.getDataForLayout3 = () => {
            return {
                'toolbarTitle': 'Big Image + Text',
                "btnNext": "Next",
                "btnFinish": "Finish",
                "items": [
                    {
                        "backgroundImage": "assets/imgs/background/30.jpg",
                        "subtitle": "Cosmologist Stephen Hawking",
                        "title": "Happy Anniversary, Juno! NASA Probe Marks 1 Year at Jupiter."
                    },
                    {
                        "backgroundImage": "assets/imgs/background/27.jpg",
                        "subtitle": "Bennu is an asteroid",
                        "title": "Colorful Clouds on Jupiter by Juno"
                    },
                    {
                        "backgroundImage": "assets/imgs/background/31.jpg",
                        "subtitle": "Light elements clumpeds",
                        "title": "Best Space Stories of The Week!"
                    }
                ]
            };
        };
        //* Data Set for page 4
        this.getDataForLayout4 = () => {
            return {
                'toolbarTitle': 'Article with Text',
                'items': [
                    {
                        'backgroundImage': 'assets/imgs/background/27.jpg',
                    },
                    {
                        'backgroundImage': 'assets/imgs/background/31.jpg',
                    },
                    {
                        'backgroundImage': 'assets/imgs/background/29.jpg',
                    }
                ],
                "title": "The generated Lorem Ipsum is therefore always free from repetition, injected humour",
                "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                "image": "assets/imgs/background/30.jpg",
                "description2": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            };
        };
    }
    load(item) {
        this.loadingService.show();
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].IS_FIREBASE_ENABLED) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.af
                    .object('wizard/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                    this.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, err => {
                    this.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
};
WizardService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
WizardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
], WizardService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api_url: 'http://localhost:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/robin/covid-by-the-county-20201013013914/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map