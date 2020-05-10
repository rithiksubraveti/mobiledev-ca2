function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-details-quote-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesQuoteDetailsQuoteDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/quotes\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{ quote?.author }}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\n\t<ion-content>\n\t\t<ion-card *ngIf=\"quote\">\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"tertiary\" name=\"key-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tID : {{ quote.quote_id }}\n\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"tertiary\" name=\"person-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tAuthor : {{ quote.author }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"tertiary\" name=\"film-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tSeries : {{ quote.series }}\n\t\t\t</ion-item>\n\t\t\t<ion-infinite-scroll threshold=\"5\" (ionInfinite)=\"loadData($event)\" [disabled]=\"numTimesLeft <= 0\">\n\t\t\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n\t\t\t\t</ion-infinite-scroll-content>\n\t\t\t</ion-infinite-scroll>\n\t\t</ion-card>\n\t</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/quote-details/quote-details-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/quote-details/quote-details-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: QuoteDetailsPageRoutingModule */

  /***/
  function srcAppPagesQuoteDetailsQuoteDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteDetailsPageRoutingModule", function () {
      return QuoteDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _quote_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quote-details.page */
    "./src/app/pages/quote-details/quote-details.page.ts");

    var routes = [{
      path: '',
      component: _quote_details_page__WEBPACK_IMPORTED_MODULE_3__["QuoteDetailsPage"]
    }];

    var QuoteDetailsPageRoutingModule = function QuoteDetailsPageRoutingModule() {
      _classCallCheck(this, QuoteDetailsPageRoutingModule);
    };

    QuoteDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuoteDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/quote-details/quote-details.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/quote-details/quote-details.module.ts ***!
    \*************************************************************/

  /*! exports provided: QuoteDetailsPageModule */

  /***/
  function srcAppPagesQuoteDetailsQuoteDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteDetailsPageModule", function () {
      return QuoteDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _quote_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quote-details-routing.module */
    "./src/app/pages/quote-details/quote-details-routing.module.ts");
    /* harmony import */


    var _quote_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quote-details.page */
    "./src/app/pages/quote-details/quote-details.page.ts");

    var QuoteDetailsPageModule = function QuoteDetailsPageModule() {
      _classCallCheck(this, QuoteDetailsPageModule);
    };

    QuoteDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _quote_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuoteDetailsPageRoutingModule"]],
      declarations: [_quote_details_page__WEBPACK_IMPORTED_MODULE_6__["QuoteDetailsPage"]]
    })], QuoteDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/quote-details/quote-details.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/quote-details/quote-details.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesQuoteDetailsQuoteDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  background: url('breakingbad.jpg') no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iaWxlZGV2LWNhMi9zcmMvYXBwL3BhZ2VzL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSw0Q0FBQTtBQ0NBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVvdGUtZGV0YWlscy9xdW90ZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnJlYWtpbmdiYWQuanBnKSBuby1yZXBlYXQ7XG59XG4iLCJpb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JyZWFraW5nYmFkLmpwZykgbm8tcmVwZWF0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/quote-details/quote-details.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/quote-details/quote-details.page.ts ***!
    \***********************************************************/

  /*! exports provided: QuoteDetailsPage */

  /***/
  function srcAppPagesQuoteDetailsQuoteDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteDetailsPage", function () {
      return QuoteDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/api.service */
    "./src/app/services/api.service.ts");

    var QuoteDetailsPage = /*#__PURE__*/function () {
      function QuoteDetailsPage(activatedRoute, api, http) {
        _classCallCheck(this, QuoteDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.http = http;
        this.quoteId = null;
        this.items = [];
        this.numTimesLeft = 5;
      }

      _createClass(QuoteDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
          this.api.getQuote(this.quoteId).subscribe(function (res) {
            _this.quote = res[0];
            console.log(JSON.stringify(_this.quote.quote_id));
          });
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this2 = this;

          setTimeout(function () {
            console.log('Done');

            _this2.addMoreItems();

            _this2.numTimesLeft -= 1;
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "addMoreItems",
        value: function addMoreItems() {
          for (var i = 0; i < 10; i++) {
            this.items.push(i);
          }
        }
      }]);

      return QuoteDetailsPage;
    }();

    QuoteDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
      }];
    };

    QuoteDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quote-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quote-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quote-details.page.scss */
      "./src/app/pages/quote-details/quote-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]])], QuoteDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=quote-details-quote-details-module-es5.js.map