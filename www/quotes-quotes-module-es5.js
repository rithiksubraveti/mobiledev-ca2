function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotes-quotes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesQuotesQuotesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Quotes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n   <ion-list>\n       <ion-item button detail lines=\"inset\" *ngFor=\"let quote of quotes | async\" (click)=\"openDetails(quote)\">\n       {{ quote.quote }}\n       </ion-item>\n   </ion-list>\n   <ion-infinite-scroll threshold=\"5\" (ionInfinite)=\"loadData($event)\" [disabled]=\"numTimesLeft <= 0\">\n\t\t\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n\t\t\t\t</ion-infinite-scroll-content>\n\t\t\t</ion-infinite-scroll>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/quotes/quotes-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/quotes/quotes-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: QuotesPageRoutingModule */

  /***/
  function srcAppPagesQuotesQuotesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuotesPageRoutingModule", function () {
      return QuotesPageRoutingModule;
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


    var _quotes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quotes.page */
    "./src/app/pages/quotes/quotes.page.ts");

    var routes = [{
      path: '',
      component: _quotes_page__WEBPACK_IMPORTED_MODULE_3__["QuotesPage"]
    }];

    var QuotesPageRoutingModule = function QuotesPageRoutingModule() {
      _classCallCheck(this, QuotesPageRoutingModule);
    };

    QuotesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuotesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/quotes/quotes.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/quotes/quotes.module.ts ***!
    \***********************************************/

  /*! exports provided: QuotesPageModule */

  /***/
  function srcAppPagesQuotesQuotesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuotesPageModule", function () {
      return QuotesPageModule;
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


    var _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quotes-routing.module */
    "./src/app/pages/quotes/quotes-routing.module.ts");
    /* harmony import */


    var _quotes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quotes.page */
    "./src/app/pages/quotes/quotes.page.ts");

    var QuotesPageModule = function QuotesPageModule() {
      _classCallCheck(this, QuotesPageModule);
    };

    QuotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuotesPageRoutingModule"]],
      declarations: [_quotes_page__WEBPACK_IMPORTED_MODULE_6__["QuotesPage"]]
    })], QuotesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/quotes/quotes.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/quotes/quotes.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesQuotesQuotesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  background: url('breakingbad.jpg') no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iaWxlZGV2LWNhMi9zcmMvYXBwL3BhZ2VzL3F1b3Rlcy9xdW90ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9xdW90ZXMvcXVvdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLDRDQUFBO0FDQ0EiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdW90ZXMvcXVvdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnJlYWtpbmdiYWQuanBnKSBuby1yZXBlYXQ7XG59XG4iLCJpb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JyZWFraW5nYmFkLmpwZykgbm8tcmVwZWF0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/quotes/quotes.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/quotes/quotes.page.ts ***!
    \*********************************************/

  /*! exports provided: QuotesPage */

  /***/
  function srcAppPagesQuotesQuotesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuotesPage", function () {
      return QuotesPage;
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

    var QuotesPage = /*#__PURE__*/function () {
      function QuotesPage(router, http) {
        _classCallCheck(this, QuotesPage);

        this.router = router;
        this.http = http;
        this.items = [];
        this.numTimesLeft = 5;
      }

      _createClass(QuotesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.quotes = this.http.get('https://breakingbadapi.com/api/quotes'); //accessing the quotes

          this.quotes.subscribe(function (data) {
            console.log('my data: ', data);
          });
        }
      }, {
        key: "openDetails",
        value: function openDetails(quote) {
          var quoteId = quote.quote_id;
          this.router.navigateByUrl("/tabs/quotes/".concat(quoteId));
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this = this;

          setTimeout(function () {
            console.log('Done');

            _this.addMoreItems();

            _this.numTimesLeft -= 1;
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

      return QuotesPage;
    }();

    QuotesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    QuotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quotes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quotes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quotes.page.scss */
      "./src/app/pages/quotes/quotes.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], QuotesPage);
    /***/
  }
}]);
//# sourceMappingURL=quotes-quotes-module-es5.js.map