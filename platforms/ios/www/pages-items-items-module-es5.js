(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-items-items-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/items/items.html":
    /*!******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/items/items.html ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesItemsItemsHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Header -->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-list *ngIf=\"pages.length\">\r\n          <ion-item class=\"ion-menu-toggle\" *ngFor=\"let item of pages\" (click)=\"openPage(item)\">\r\n            <ion-label>\r\n              <h1 class=\"text-size-md text-color-primary font-light\">{{item.title}}</h1>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/items/items.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/items/items.module.ts ***!
      \*********************************************/

    /*! exports provided: ItemsPageModule */

    /***/
    function srcAppPagesItemsItemsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function () {
        return ItemsPageModule;
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


      var _items_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./items.page */
      "./src/app/pages/items/items.page.ts");

      var ItemsPageModule = function ItemsPageModule() {
        _classCallCheck(this, ItemsPageModule);
      };

      ItemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _items_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]
        }])],
        declarations: [_items_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ItemsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/items/items.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/items/items.page.ts ***!
      \*******************************************/

    /*! exports provided: ItemsPage */

    /***/
    function srcAppPagesItemsItemsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsPage", function () {
        return ItemsPage;
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


      var _services_HttpService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/HttpService */
      "./src/app/services/HttpService.ts");
      /* harmony import */


      var _services_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/validation */
      "./src/app/services/validation.ts");
      /* harmony import */


      var _services_mail_chimp_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/mail-chimp-service */
      "./src/app/services/mail-chimp-service.ts");
      /* harmony import */


      var _services_check_box_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/check-box-service */
      "./src/app/services/check-box-service.ts");
      /* harmony import */


      var _services_animation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/animation-service */
      "./src/app/services/animation-service.ts");
      /* harmony import */


      var _services_text_view_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/text-view-service */
      "./src/app/services/text-view-service.ts");
      /* harmony import */


      var _services_spinner_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/spinner-service */
      "./src/app/services/spinner-service.ts");
      /* harmony import */


      var _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/splash-screen-service */
      "./src/app/services/splash-screen-service.ts");
      /* harmony import */


      var _services_search_bar_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/search-bar-service */
      "./src/app/services/search-bar-service.ts");
      /* harmony import */


      var _services_wizard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/wizard-service */
      "./src/app/services/wizard-service.ts");
      /* harmony import */


      var _services_tabs_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/tabs-service */
      "./src/app/services/tabs-service.ts");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../services/login-service */
      "./src/app/services/login-service.ts");
      /* harmony import */


      var _services_register_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../services/register-service */
      "./src/app/services/register-service.ts");
      /* harmony import */


      var _services_list_view_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../services/list-view-service */
      "./src/app/services/list-view-service.ts");
      /* harmony import */


      var _services_parallax_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../services/parallax-service */
      "./src/app/services/parallax-service.ts");
      /* harmony import */


      var _services_image_gallery_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../services/image-gallery-service */
      "./src/app/services/image-gallery-service.ts");
      /* harmony import */


      var _services_maps_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../services/maps-service */
      "./src/app/services/maps-service.ts");
      /* harmony import */


      var _services_qrcode_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../services/qrcode-service */
      "./src/app/services/qrcode-service.ts");
      /* harmony import */


      var _services_radio_button_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../services/radio-button-service */
      "./src/app/services/radio-button-service.ts");
      /* harmony import */


      var _services_range_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../services/range-service */
      "./src/app/services/range-service.ts");
      /* harmony import */


      var _services_toggle_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../services/toggle-service */
      "./src/app/services/toggle-service.ts");
      /* harmony import */


      var _services_select_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../services/select-service */
      "./src/app/services/select-service.ts");
      /* harmony import */


      var _services_action_sheet_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../services/action-sheet-service */
      "./src/app/services/action-sheet-service.ts");
      /* harmony import */


      var _services_time_line_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../services/time-line-service */
      "./src/app/services/time-line-service.ts");
      /* harmony import */


      var _services_form_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../services/form-service */
      "./src/app/services/form-service.ts");
      /* harmony import */


      var _services_comment_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../../services/comment-service */
      "./src/app/services/comment-service.ts");
      /* harmony import */


      var _services_profile_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../services/profile-service */
      "./src/app/services/profile-service.ts");
      /* harmony import */


      var _services_payment_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../../services/payment-service */
      "./src/app/services/payment-service.ts");
      /* harmony import */


      var _services_segment_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../../services/segment-service */
      "./src/app/services/segment-service.ts");
      /* harmony import */


      var _services_scroll_segment_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../services/scroll-segment-service */
      "./src/app/services/scroll-segment-service.ts");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../../services/alert-service */
      "./src/app/services/alert-service.ts");
      /* harmony import */


      var _services_new_password_services__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./../../services/new-password-services */
      "./src/app/services/new-password-services.ts");
      /* harmony import */


      var _services_forget_password_services__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./../../services/forget-password-services */
      "./src/app/services/forget-password-services.ts");
      /* harmony import */


      var _services_app_settings__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./../../services/app-settings */
      "./src/app/services/app-settings.ts");

      var ItemsPage = /*#__PURE__*/function () {
        // services: array
        function ItemsPage(navCtrl, textViewService, spinnerService, imageGalleryService, searchBarService, checkBoxService, animationService, parallaxService, wizardService, tabsService, listViewService, loginService, registerService, splashScreenService, httpService, validationService, mailChimpService, mapsService, qRCodeService, radioButtonService, rangeService, toggleService, selectService, actionSheetService, timeLineService, formService, commentService, alertCtrl, profileService, segmentService, scrollSegmentService, paymentService, alertService, newPasswordService, forgetPasswordService, route) {
          _classCallCheck(this, ItemsPage);

          this.navCtrl = navCtrl;
          this.textViewService = textViewService;
          this.spinnerService = spinnerService;
          this.imageGalleryService = imageGalleryService;
          this.searchBarService = searchBarService;
          this.checkBoxService = checkBoxService;
          this.animationService = animationService;
          this.parallaxService = parallaxService;
          this.wizardService = wizardService;
          this.tabsService = tabsService;
          this.listViewService = listViewService;
          this.loginService = loginService;
          this.registerService = registerService;
          this.splashScreenService = splashScreenService;
          this.httpService = httpService;
          this.validationService = validationService;
          this.mailChimpService = mailChimpService;
          this.mapsService = mapsService;
          this.qRCodeService = qRCodeService;
          this.radioButtonService = radioButtonService;
          this.rangeService = rangeService;
          this.toggleService = toggleService;
          this.selectService = selectService;
          this.actionSheetService = actionSheetService;
          this.timeLineService = timeLineService;
          this.formService = formService;
          this.commentService = commentService;
          this.alertCtrl = alertCtrl;
          this.profileService = profileService;
          this.segmentService = segmentService;
          this.scrollSegmentService = scrollSegmentService;
          this.paymentService = paymentService;
          this.alertService = alertService;
          this.newPasswordService = newPasswordService;
          this.forgetPasswordService = forgetPasswordService;
          this.route = route;
          this.pages = {};
          this.listServices = {};
          this.listServices = {
            'checkBoxes': this.checkBoxService,
            'animation': this.animationService,
            'login': this.loginService,
            'register': this.registerService,
            'imageGallery': this.imageGalleryService,
            'textViews': this.textViewService,
            'spinner': this.spinnerService,
            'parallax': this.parallaxService,
            'wizard': this.wizardService,
            'searchBars': this.searchBarService,
            'tabs': this.tabsService,
            'listViews': this.listViewService,
            'splashScreens': this.splashScreenService,
            'maps': this.mapsService,
            'timeline': this.timeLineService,
            'qrcode': this.qRCodeService,
            'radioButton': this.radioButtonService,
            'range': this.rangeService,
            'toggle': this.toggleService,
            'select': this.selectService,
            'form': this.formService,
            'comment': this.commentService,
            'profile': this.profileService,
            'actionSheet': this.actionSheetService,
            'segment': this.segmentService,
            'scrollSegment': this.scrollSegmentService,
            'payment': this.paymentService,
            'alert': this.alertService,
            'newPassword': this.newPasswordService,
            'forgetPassword': this.forgetPasswordService
          };
          this.componentName = this.route.snapshot.paramMap.get('type');
          this.service = this.listServices[this.componentName];

          if (this.service) {
            this.pages = this.service.getAllThemes();
            this.title = this.service.getTitle();
          }
        }

        _createClass(ItemsPage, [{
          key: "openPage",
          value: function openPage(page) {
            if (_services_app_settings__WEBPACK_IMPORTED_MODULE_37__["AppSettings"].SUBSCRIBE) {
              if (!this.mailChimpService.showMailChimpForm()) {
                this.showPrompt();
                this.mailChimpService.setMailChimpForm(true);
              } else {
                this.navCtrl.navigateForward([page.url], {});
              }
            } else {
              this.navCtrl.navigateForward([page.url], {});
            }
          }
        }, {
          key: "showPrompt",
          value: function showPrompt() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alertDialog;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'STAY TUNED FOR NEW THEMES AND FREEBIES',
                        message: 'SUBSCRIBE TO <br> OUR NEWSLETTER',
                        cssClass: 'basic-dialog',
                        inputs: [{
                          name: 'email',
                          placeholder: 'Your e-mail'
                        }],
                        buttons: [{
                          text: 'Cancel'
                        }, {
                          text: 'Send',
                          handler: function handler(data) {
                            if (data) {
                              if (_this.validationService.isMail(data.email)) {
                                _this.httpService.sendData(data.email).subscribe(function (_) {
                                  console.log('sucess');

                                  _this.mailChimpService.hideMailChimp();
                                }, function (err) {
                                  console.log('err');
                                  console.log(JSON.stringify(err));
                                }, null);
                              } else {
                                return false;
                              }
                            } else {
                              return false;
                            }
                          }
                        }]
                      });

                    case 2:
                      alertDialog = _context.sent;
                      alertDialog.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ItemsPage;
      }();

      ItemsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_text_view_service__WEBPACK_IMPORTED_MODULE_9__["TextViewService"]
        }, {
          type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_10__["SpinnerService"]
        }, {
          type: _services_image_gallery_service__WEBPACK_IMPORTED_MODULE_19__["ImageGalleryService"]
        }, {
          type: _services_search_bar_service__WEBPACK_IMPORTED_MODULE_12__["SearchBarService"]
        }, {
          type: _services_check_box_service__WEBPACK_IMPORTED_MODULE_7__["CheckBoxService"]
        }, {
          type: _services_animation_service__WEBPACK_IMPORTED_MODULE_8__["AnimationService"]
        }, {
          type: _services_parallax_service__WEBPACK_IMPORTED_MODULE_18__["ParallaxService"]
        }, {
          type: _services_wizard_service__WEBPACK_IMPORTED_MODULE_13__["WizardService"]
        }, {
          type: _services_tabs_service__WEBPACK_IMPORTED_MODULE_14__["TabsService"]
        }, {
          type: _services_list_view_service__WEBPACK_IMPORTED_MODULE_17__["ListViewService"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_15__["LoginService"]
        }, {
          type: _services_register_service__WEBPACK_IMPORTED_MODULE_16__["RegisterService"]
        }, {
          type: _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_11__["SplashScreenService"]
        }, {
          type: _services_HttpService__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
        }, {
          type: _services_validation__WEBPACK_IMPORTED_MODULE_5__["ValidationService"]
        }, {
          type: _services_mail_chimp_service__WEBPACK_IMPORTED_MODULE_6__["MailChimpService"]
        }, {
          type: _services_maps_service__WEBPACK_IMPORTED_MODULE_20__["MapsService"]
        }, {
          type: _services_qrcode_service__WEBPACK_IMPORTED_MODULE_21__["QRCodeService"]
        }, {
          type: _services_radio_button_service__WEBPACK_IMPORTED_MODULE_22__["RadioButtonService"]
        }, {
          type: _services_range_service__WEBPACK_IMPORTED_MODULE_23__["RangeService"]
        }, {
          type: _services_toggle_service__WEBPACK_IMPORTED_MODULE_24__["ToggleService"]
        }, {
          type: _services_select_service__WEBPACK_IMPORTED_MODULE_25__["SelectService"]
        }, {
          type: _services_action_sheet_service__WEBPACK_IMPORTED_MODULE_26__["ActionSheetService"]
        }, {
          type: _services_time_line_service__WEBPACK_IMPORTED_MODULE_27__["TimeLineService"]
        }, {
          type: _services_form_service__WEBPACK_IMPORTED_MODULE_28__["FormService"]
        }, {
          type: _services_comment_service__WEBPACK_IMPORTED_MODULE_29__["CommentService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_30__["ProfileService"]
        }, {
          type: _services_segment_service__WEBPACK_IMPORTED_MODULE_32__["SegmentService"]
        }, {
          type: _services_scroll_segment_service__WEBPACK_IMPORTED_MODULE_33__["ScrollSegmentService"]
        }, {
          type: _services_payment_service__WEBPACK_IMPORTED_MODULE_31__["PaymentService"]
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_34__["AlertService"]
        }, {
          type: _services_new_password_services__WEBPACK_IMPORTED_MODULE_35__["NewPasswordService"]
        }, {
          type: _services_forget_password_services__WEBPACK_IMPORTED_MODULE_36__["ForgetPasswordService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      ItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./items.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/items/items.html"))["default"],
        providers: [_services_mail_chimp_service__WEBPACK_IMPORTED_MODULE_6__["MailChimpService"], _services_text_view_service__WEBPACK_IMPORTED_MODULE_9__["TextViewService"], _services_spinner_service__WEBPACK_IMPORTED_MODULE_10__["SpinnerService"], _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_11__["SplashScreenService"], _services_login_service__WEBPACK_IMPORTED_MODULE_15__["LoginService"], _services_register_service__WEBPACK_IMPORTED_MODULE_16__["RegisterService"], _services_animation_service__WEBPACK_IMPORTED_MODULE_8__["AnimationService"], _services_search_bar_service__WEBPACK_IMPORTED_MODULE_12__["SearchBarService"], _services_check_box_service__WEBPACK_IMPORTED_MODULE_7__["CheckBoxService"], _services_wizard_service__WEBPACK_IMPORTED_MODULE_13__["WizardService"], _services_tabs_service__WEBPACK_IMPORTED_MODULE_14__["TabsService"], _services_parallax_service__WEBPACK_IMPORTED_MODULE_18__["ParallaxService"], _services_list_view_service__WEBPACK_IMPORTED_MODULE_17__["ListViewService"], _services_image_gallery_service__WEBPACK_IMPORTED_MODULE_19__["ImageGalleryService"], _services_new_password_services__WEBPACK_IMPORTED_MODULE_35__["NewPasswordService"], _services_forget_password_services__WEBPACK_IMPORTED_MODULE_36__["ForgetPasswordService"], _services_HttpService__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_validation__WEBPACK_IMPORTED_MODULE_5__["ValidationService"], _services_maps_service__WEBPACK_IMPORTED_MODULE_20__["MapsService"], _services_qrcode_service__WEBPACK_IMPORTED_MODULE_21__["QRCodeService"], _services_radio_button_service__WEBPACK_IMPORTED_MODULE_22__["RadioButtonService"], _services_range_service__WEBPACK_IMPORTED_MODULE_23__["RangeService"], _services_toggle_service__WEBPACK_IMPORTED_MODULE_24__["ToggleService"], _services_select_service__WEBPACK_IMPORTED_MODULE_25__["SelectService"], _services_action_sheet_service__WEBPACK_IMPORTED_MODULE_26__["ActionSheetService"], _services_time_line_service__WEBPACK_IMPORTED_MODULE_27__["TimeLineService"], _services_form_service__WEBPACK_IMPORTED_MODULE_28__["FormService"], _services_comment_service__WEBPACK_IMPORTED_MODULE_29__["CommentService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_30__["ProfileService"], _services_segment_service__WEBPACK_IMPORTED_MODULE_32__["SegmentService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_34__["AlertService"], _services_payment_service__WEBPACK_IMPORTED_MODULE_31__["PaymentService"], _services_scroll_segment_service__WEBPACK_IMPORTED_MODULE_33__["ScrollSegmentService"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_text_view_service__WEBPACK_IMPORTED_MODULE_9__["TextViewService"], _services_spinner_service__WEBPACK_IMPORTED_MODULE_10__["SpinnerService"], _services_image_gallery_service__WEBPACK_IMPORTED_MODULE_19__["ImageGalleryService"], _services_search_bar_service__WEBPACK_IMPORTED_MODULE_12__["SearchBarService"], _services_check_box_service__WEBPACK_IMPORTED_MODULE_7__["CheckBoxService"], _services_animation_service__WEBPACK_IMPORTED_MODULE_8__["AnimationService"], _services_parallax_service__WEBPACK_IMPORTED_MODULE_18__["ParallaxService"], _services_wizard_service__WEBPACK_IMPORTED_MODULE_13__["WizardService"], _services_tabs_service__WEBPACK_IMPORTED_MODULE_14__["TabsService"], _services_list_view_service__WEBPACK_IMPORTED_MODULE_17__["ListViewService"], _services_login_service__WEBPACK_IMPORTED_MODULE_15__["LoginService"], _services_register_service__WEBPACK_IMPORTED_MODULE_16__["RegisterService"], _services_splash_screen_service__WEBPACK_IMPORTED_MODULE_11__["SplashScreenService"], _services_HttpService__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_validation__WEBPACK_IMPORTED_MODULE_5__["ValidationService"], _services_mail_chimp_service__WEBPACK_IMPORTED_MODULE_6__["MailChimpService"], _services_maps_service__WEBPACK_IMPORTED_MODULE_20__["MapsService"], _services_qrcode_service__WEBPACK_IMPORTED_MODULE_21__["QRCodeService"], _services_radio_button_service__WEBPACK_IMPORTED_MODULE_22__["RadioButtonService"], _services_range_service__WEBPACK_IMPORTED_MODULE_23__["RangeService"], _services_toggle_service__WEBPACK_IMPORTED_MODULE_24__["ToggleService"], _services_select_service__WEBPACK_IMPORTED_MODULE_25__["SelectService"], _services_action_sheet_service__WEBPACK_IMPORTED_MODULE_26__["ActionSheetService"], _services_time_line_service__WEBPACK_IMPORTED_MODULE_27__["TimeLineService"], _services_form_service__WEBPACK_IMPORTED_MODULE_28__["FormService"], _services_comment_service__WEBPACK_IMPORTED_MODULE_29__["CommentService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_profile_service__WEBPACK_IMPORTED_MODULE_30__["ProfileService"], _services_segment_service__WEBPACK_IMPORTED_MODULE_32__["SegmentService"], _services_scroll_segment_service__WEBPACK_IMPORTED_MODULE_33__["ScrollSegmentService"], _services_payment_service__WEBPACK_IMPORTED_MODULE_31__["PaymentService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_34__["AlertService"], _services_new_password_services__WEBPACK_IMPORTED_MODULE_35__["NewPasswordService"], _services_forget_password_services__WEBPACK_IMPORTED_MODULE_36__["ForgetPasswordService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ItemsPage);
      /***/
    },

    /***/
    "./src/app/services/HttpService.ts":
    /*!*****************************************!*\
      !*** ./src/app/services/HttpService.ts ***!
      \*****************************************/

    /*! exports provided: HttpService */

    /***/
    function srcAppServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
        }

        _createClass(HttpService, [{
          key: "sendData",
          value: function sendData(email) {
            var url = 'https://facebook.us14.list-manage.com/subscribe/post-json?u=2c0f7baa8dc004a62ff3922e3&id=456928d791&EMAIL=' + encodeURI(email) + '&b_2c0f7baa8dc004a62ff3922e3_456928d791';
            return this.http.get(url);
          }
        }]);

        return HttpService;
      }();

      HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], HttpService);
      /***/
    },

    /***/
    "./src/app/services/list-view-service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/list-view-service.ts ***!
      \***********************************************/

    /*! exports provided: ListViewService */

    /***/
    function srcAppServicesListViewServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListViewService", function () {
        return ListViewService;
      });

      var ListViewService = /*#__PURE__*/function () {
        function ListViewService() {
          _classCallCheck(this, ListViewService);

          this.getId = function () {
            return 'listViews';
          };

          this.getTitle = function () {
            return 'List views';
          }; // Submenu for list


          this.getAllThemes = function () {
            return [{
              'url': 'subitems/expandable',
              'title': 'Expandable',
              'theme': 'expandable'
            }, {
              'url': 'subitems/dragAndDrop',
              'title': 'Drag&Drop',
              'theme': 'dragAndDrop'
            }, {
              'url': 'subitems/swipeToDismiss',
              'title': 'Swipe-to-dismiss',
              'theme': 'swipeToDismiss'
            }, {
              'url': 'subitems/googleCards',
              'title': 'Google Cards',
              'theme': 'googleCards'
            }];
          };

          this.getDataForTheme = function (menuItem) {
            return [];
          };
        }

        _createClass(ListViewService, [{
          key: "load",
          value: function load(url) {
            return null;
          }
        }]);

        return ListViewService;
      }();
      /***/

    },

    /***/
    "./src/app/services/mail-chimp-service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/mail-chimp-service.ts ***!
      \************************************************/

    /*! exports provided: MailChimpService */

    /***/
    function srcAppServicesMailChimpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailChimpService", function () {
        return MailChimpService;
      });

      var MailChimpService = /*#__PURE__*/function () {
        function MailChimpService() {
          _classCallCheck(this, MailChimpService);
        }

        _createClass(MailChimpService, [{
          key: "showMailChimpForm",
          value: function showMailChimpForm() {
            var mailChimp = localStorage.getItem('mailChimp') === 'true';
            var mailChimpLocal = localStorage.getItem('mailChimpLocal') === 'true';

            if (mailChimp) {
              return false;
            } else {
              return mailChimpLocal;
            }
          }
        }, {
          key: "setMailChimpForm",
          value: function setMailChimpForm(isVisible) {
            localStorage.setItem('mailChimpLocal', isVisible + '');
          }
        }, {
          key: "hideMailChimp",
          value: function hideMailChimp() {
            localStorage.setItem('mailChimp', 'true');
          }
        }]);

        return MailChimpService;
      }();
      /***/

    },

    /***/
    "./src/app/services/validation.ts":
    /*!****************************************!*\
      !*** ./src/app/services/validation.ts ***!
      \****************************************/

    /*! exports provided: ValidationService */

    /***/
    function srcAppServicesValidationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidationService", function () {
        return ValidationService;
      });
      /**
       * Created by DRAGAN on 3/22/2017.
       */


      var ValidationService = /*#__PURE__*/function () {
        function ValidationService() {
          _classCallCheck(this, ValidationService);
        }

        _createClass(ValidationService, [{
          key: "isMail",
          value: function isMail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          }
        }]);

        return ValidationService;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-items-items-module-es5.js.map