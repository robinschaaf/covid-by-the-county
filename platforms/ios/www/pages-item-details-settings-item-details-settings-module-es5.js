(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-details-settings-item-details-settings-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-settings/item-details-settings.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-settings/item-details-settings.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemDetailsSettingsItemDetailsSettingsHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"box-shadow\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>RTL + Color change</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\">\r\n          <ion-lable class=\"text-size-xs text-color-primary font-bold ion-padding-end\">Testing our application with Rtl (enable)</ion-lable>\r\n          <ion-checkbox slot=\"end\" [(ngModel)]=\"rtlChecked\" (ionChange)=\"ionChange($event)\"></ion-checkbox>\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n          <h1 class=\"text-size-lg text-color-primary font-bold\">After changing rtl, please restart app.</h1>\r\n        </ion-item>\r\n        <!--- Button color combination -->\r\n        <ion-col size=\"12\">\r\n          <ion-button expand=\"block\" class=\"ion-margin-top default-button sunset-orange\" (click)=\"changeTheme('sunset-orange')\">\r\n            Sunset Orange\r\n          </ion-button>\r\n          <ion-button expand=\"block\" class=\"ion-margin-top default-button mocha\" (click)=\"changeTheme('mocha')\">\r\n            Mocha\r\n          </ion-button>\r\n          <ion-button expand=\"block\" class=\"ion-margin-top default-button seagull\" (click)=\"changeTheme('seagull')\">\r\n            Seagull\r\n          </ion-button>\r\n          <ion-button expand=\"block\" class=\"ion-margin-top default-button turquoise\" (click)=\"changeTheme('turquoise')\">\r\n            Turquoise\r\n          </ion-button>\r\n          <ion-button expand=\"block\" class=\"ion-margin-top default-button bull-shot\" (click)=\"changeTheme('bull-shot')\">\r\n            Bull Shot\r\n          </ion-button>\r\n          <ion-button expand=\"block\" class=\"ion-margin-top default-button olive-drab\" (click)=\"changeTheme('olive-drab')\">\r\n            Olive Drab\r\n          </ion-button>\r\n          <ion-button expand=\"block\" class=\"ion-margin-top default-button flush-orange\" (click)=\"changeTheme('flush-orange')\">\r\n            Flush Orange\r\n          </ion-button>\r\n          <ion-button expand=\"block\" class=\"ion-margin-top default-button pastel-green\" (click)=\"changeTheme('pastel-green')\">\r\n            Pastel Green\r\n          </ion-button>\r\n          <ion-button expand=\"block\" class=\"ion-margin-top default-button emerald\" (click)=\"changeTheme('emerald')\">\r\n            Emerald\r\n          </ion-button>\r\n          <ion-button expand=\"block\" class=\"ion-margin-top default-button my-sin\" (click)=\"changeTheme('my-sin')\">\r\n            My Sin\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/item-details-settings/item-details-settings.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/item-details-settings/item-details-settings.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: ItemDetailsSettingsPageModule */

    /***/
    function srcAppPagesItemDetailsSettingsItemDetailsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsSettingsPageModule", function () {
        return ItemDetailsSettingsPageModule;
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


      var _item_details_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./item-details-settings.page */
      "./src/app/pages/item-details-settings/item-details-settings.page.ts");

      var ItemDetailsSettingsPageModule = function ItemDetailsSettingsPageModule() {
        _classCallCheck(this, ItemDetailsSettingsPageModule);
      };

      ItemDetailsSettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _item_details_settings_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsSettingsPage"]
        }])],
        declarations: [_item_details_settings_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsSettingsPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemDetailsSettingsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/item-details-settings/item-details-settings.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/item-details-settings/item-details-settings.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesItemDetailsSettingsItemDetailsSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sunset-orange {\n  --background: #FB5135 !important;\n}\n\n.mocha {\n  --background: #7A271A !important;\n}\n\n.seagull {\n  --background: #6DB1E6 !important;\n}\n\n.turquoise {\n  --background: #37E6CA !important;\n}\n\n.bull-shot {\n  --background: #7A4D20 !important;\n}\n\n.olive-drab {\n  --background: #7AA82B !important;\n}\n\n.flush-orange {\n  --background: #FA8000 !important;\n}\n\n.my-sin {\n  --background: #FF8827 !important;\n}\n\n.pastel-green {\n  --background: #58E69D !important;\n}\n\n.emerald {\n  --background: #32C763 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLXNldHRpbmdzL2l0ZW0tZGV0YWlscy1zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQ0FBYTtBQUFmOztBQUdBO0VBQ0UsZ0NBQWE7QUFBZjs7QUFHQTtFQUNFLGdDQUFhO0FBQWY7O0FBR0E7RUFDRSxnQ0FBYTtBQUFmOztBQUdBO0VBQ0UsZ0NBQWE7QUFBZjs7QUFHQTtFQUNFLGdDQUFhO0FBQWY7O0FBR0E7RUFDRSxnQ0FBYTtBQUFmOztBQUdBO0VBQ0UsZ0NBQWE7QUFBZjs7QUFHQTtFQUNFLGdDQUFhO0FBQWY7O0FBR0E7RUFDRSxnQ0FBYTtBQUFmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaXRlbS1kZXRhaWxzLXNldHRpbmdzL2l0ZW0tZGV0YWlscy1zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnN1bnNldC1vcmFuZ2Uge1xyXG4gIC0tYmFja2dyb3VuZDogI0ZCNTEzNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9jaGEge1xyXG4gIC0tYmFja2dyb3VuZDogIzdBMjcxQSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhZ3VsbCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNkRCMUU2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50dXJxdW9pc2Uge1xyXG4gIC0tYmFja2dyb3VuZDogIzM3RTZDQSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnVsbC1zaG90IHtcclxuICAtLWJhY2tncm91bmQ6ICM3QTREMjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm9saXZlLWRyYWIge1xyXG4gIC0tYmFja2dyb3VuZDogIzdBQTgyQiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmx1c2gtb3JhbmdlIHtcclxuICAtLWJhY2tncm91bmQ6ICNGQTgwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LXNpbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRkY4ODI3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYXN0ZWwtZ3JlZW4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzU4RTY5RCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZW1lcmFsZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMzJDNzYzICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/item-details-settings/item-details-settings.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/item-details-settings/item-details-settings.page.ts ***!
      \***************************************************************************/

    /*! exports provided: ItemDetailsSettingsPage */

    /***/
    function srcAppPagesItemDetailsSettingsItemDetailsSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsSettingsPage", function () {
        return ItemDetailsSettingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ItemDetailsSettingsPage = /*#__PURE__*/function () {
        function ItemDetailsSettingsPage() {
          _classCallCheck(this, ItemDetailsSettingsPage);

          this.rtlChecked = false;
          this.rtlChecked = localStorage.getItem('isEnabledRTL') == "true";
        }

        _createClass(ItemDetailsSettingsPage, [{
          key: "changeTheme",
          value: function changeTheme(name) {
            if (name) {
              document.body.removeAttribute("class");
              document.body.classList.add(name);
            }
          }
        }, {
          key: "ionChange",
          value: function ionChange(e) {
            localStorage.setItem('isEnabledRTL', "" + this.rtlChecked);
            document.getElementsByTagName('ion-menu')[0].setAttribute('side', this.rtlChecked ? 'end' : 'start');
            document.getElementsByTagName('html')[0].setAttribute('dir', this.rtlChecked ? 'rtl' : 'ltr');
          }
        }]);

        return ItemDetailsSettingsPage;
      }();

      ItemDetailsSettingsPage.ctorParameters = function () {
        return [];
      };

      ItemDetailsSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details-settings.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-details-settings/item-details-settings.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details-settings.page.scss */
        "./src/app/pages/item-details-settings/item-details-settings.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ItemDetailsSettingsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-item-details-settings-item-details-settings-module-es5.js.map