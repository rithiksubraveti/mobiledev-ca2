(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-details-quote-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/quotes\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{ quote?.author }}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\n\t<ion-content>\n\t\t<ion-card *ngIf=\"quote\">\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"tertiary\" name=\"key-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tID : {{ quote.quote_id }}\n\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"tertiary\" name=\"person-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tAuthor : {{ quote.author }}\n\t\t\t</ion-item>\n\n\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon color=\"tertiary\" name=\"film-outline\" slot=\"start\"></ion-icon>\n\t\t\t\tSeries : {{ quote.series }}\n\t\t\t</ion-item>\n\t\t\t<ion-infinite-scroll threshold=\"5\" (ionInfinite)=\"loadData($event)\" [disabled]=\"numTimesLeft <= 0\">\n\t\t\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n\t\t\t\t</ion-infinite-scroll-content>\n\t\t\t</ion-infinite-scroll>\n\t\t</ion-card>\n\t</ion-content>");

/***/ }),

/***/ "./src/app/pages/quote-details/quote-details-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/quote-details/quote-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: QuoteDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsPageRoutingModule", function() { return QuoteDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quote_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote-details.page */ "./src/app/pages/quote-details/quote-details.page.ts");




const routes = [
    {
        path: '',
        component: _quote_details_page__WEBPACK_IMPORTED_MODULE_3__["QuoteDetailsPage"]
    }
];
let QuoteDetailsPageRoutingModule = class QuoteDetailsPageRoutingModule {
};
QuoteDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuoteDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/quote-details/quote-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/quote-details/quote-details.module.ts ***!
  \*************************************************************/
/*! exports provided: QuoteDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsPageModule", function() { return QuoteDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _quote_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote-details-routing.module */ "./src/app/pages/quote-details/quote-details-routing.module.ts");
/* harmony import */ var _quote_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-details.page */ "./src/app/pages/quote-details/quote-details.page.ts");







let QuoteDetailsPageModule = class QuoteDetailsPageModule {
};
QuoteDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quote_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuoteDetailsPageRoutingModule"]
        ],
        declarations: [_quote_details_page__WEBPACK_IMPORTED_MODULE_6__["QuoteDetailsPage"]]
    })
], QuoteDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/quote-details/quote-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/quote-details/quote-details.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background: url('breakingbad.jpg') no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iaWxlZGV2LWNhMi9zcmMvYXBwL3BhZ2VzL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSw0Q0FBQTtBQ0NBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVvdGUtZGV0YWlscy9xdW90ZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnJlYWtpbmdiYWQuanBnKSBuby1yZXBlYXQ7XG59XG4iLCJpb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JyZWFraW5nYmFkLmpwZykgbm8tcmVwZWF0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/quote-details/quote-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/quote-details/quote-details.page.ts ***!
  \***********************************************************/
/*! exports provided: QuoteDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsPage", function() { return QuoteDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");





let QuoteDetailsPage = class QuoteDetailsPage {
    constructor(activatedRoute, api, http) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.http = http;
        this.quoteId = null;
        this.items = [];
        this.numTimesLeft = 5;
    }
    ngOnInit() {
        this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getQuote(this.quoteId).subscribe(res => {
            this.quote = res[0];
            console.log(JSON.stringify(this.quote.quote_id));
        });
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            this.addMoreItems();
            this.numTimesLeft -= 1;
            event.target.complete();
        }, 2000);
    }
    addMoreItems() {
        for (let i = 0; i < 10; i++)
            this.items.push(i);
    }
};
QuoteDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"] }
];
QuoteDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quote-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quote-details.page.scss */ "./src/app/pages/quote-details/quote-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]])
], QuoteDetailsPage);



/***/ })

}]);
//# sourceMappingURL=quote-details-quote-details-module-es2015.js.map