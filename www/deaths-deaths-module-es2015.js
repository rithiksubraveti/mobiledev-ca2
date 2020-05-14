(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deaths-deaths-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title>Death Count</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-card *ngFor=\"let death of (deaths | async)\">\n\t\t<!-- Showing the death count number -->\n\t\t<ion-item lines=\"none\" class=\"movie-info\">\n\t\t\t<ion-icon color=\"tertiary\" name=\"skull\" slot=\"start\"></ion-icon>\n\t\t\tDeath-Count : {{ death.deathCount }}\n\t\t</ion-item>\n\t</ion-card>\n \n    <ion-infinite-scroll threshold=\"5\" (ionInfinite)=\"loadData($event)\" [disabled]=\"numTimesLeft <= 0\">\n\t\t\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n\t\t\t\t</ion-infinite-scroll-content>\n\t\t\t</ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/deaths/deaths-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/deaths/deaths-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DeathsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsPageRoutingModule", function() { return DeathsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _deaths_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deaths.page */ "./src/app/pages/deaths/deaths.page.ts");




const routes = [
    {
        path: '',
        component: _deaths_page__WEBPACK_IMPORTED_MODULE_3__["DeathsPage"]
    }
];
let DeathsPageRoutingModule = class DeathsPageRoutingModule {
};
DeathsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeathsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/deaths/deaths.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/deaths/deaths.module.ts ***!
  \***********************************************/
/*! exports provided: DeathsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsPageModule", function() { return DeathsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deaths-routing.module */ "./src/app/pages/deaths/deaths-routing.module.ts");
/* harmony import */ var _deaths_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deaths.page */ "./src/app/pages/deaths/deaths.page.ts");







let DeathsPageModule = class DeathsPageModule {
};
DeathsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathsPageRoutingModule"]
        ],
        declarations: [_deaths_page__WEBPACK_IMPORTED_MODULE_6__["DeathsPage"]]
    })
], DeathsPageModule);



/***/ }),

/***/ "./src/app/pages/deaths/deaths.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/deaths/deaths.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background: url('breakingbad.jpg') no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iaWxlZGV2LWNhMi9zcmMvYXBwL3BhZ2VzL2RlYXRocy9kZWF0aHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZWF0aHMvZGVhdGhzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLDRDQUFBO0FDQ0EiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZWF0aHMvZGVhdGhzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnJlYWtpbmdiYWQuanBnKSBuby1yZXBlYXQ7XG59XG4iLCJpb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JyZWFraW5nYmFkLmpwZykgbm8tcmVwZWF0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/deaths/deaths.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/deaths/deaths.page.ts ***!
  \*********************************************/
/*! exports provided: DeathsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsPage", function() { return DeathsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let DeathsPage = class DeathsPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.items = [];
        this.numTimesLeft = 5;
    }
    ngOnInit() {
        this.deaths = this.http.get('https://breakingbadapi.com/api/death-count');
        this.deaths.subscribe(data => {
            console.log('my data: ', data);
        });
    }
    openDetails(death) {
        let deathId = death.death_id;
        this.router.navigateByUrl(`/tabs/death/${deathId}`);
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
DeathsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
DeathsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deaths',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deaths.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deaths.page.scss */ "./src/app/pages/deaths/deaths.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], DeathsPage);



/***/ })

}]);
//# sourceMappingURL=deaths-deaths-module-es2015.js.map