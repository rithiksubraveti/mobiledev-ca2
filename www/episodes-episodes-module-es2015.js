(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episodes-episodes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Episodes</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-item button detail lines=\"inset\" *ngFor=\"let episode of episodes | async\" (click)=\"openDetails(episode)\">\n        {{ episode.title }} </ion-item>\n    </ion-list>\n    <ion-infinite-scroll threshold=\"5\" (ionInfinite)=\"loadData($event)\" [disabled]=\"numTimesLeft <= 0\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/episodes/episodes-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/episodes/episodes-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EpisodesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPageRoutingModule", function() { return EpisodesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _episodes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./episodes.page */ "./src/app/pages/episodes/episodes.page.ts");




const routes = [
    {
        path: '',
        component: _episodes_page__WEBPACK_IMPORTED_MODULE_3__["EpisodesPage"]
    }
];
let EpisodesPageRoutingModule = class EpisodesPageRoutingModule {
};
EpisodesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EpisodesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/episodes/episodes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/episodes/episodes.module.ts ***!
  \***************************************************/
/*! exports provided: EpisodesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPageModule", function() { return EpisodesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./episodes-routing.module */ "./src/app/pages/episodes/episodes-routing.module.ts");
/* harmony import */ var _episodes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./episodes.page */ "./src/app/pages/episodes/episodes.page.ts");







let EpisodesPageModule = class EpisodesPageModule {
};
EpisodesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodesPageRoutingModule"]
        ],
        declarations: [_episodes_page__WEBPACK_IMPORTED_MODULE_6__["EpisodesPage"]]
    })
], EpisodesPageModule);



/***/ }),

/***/ "./src/app/pages/episodes/episodes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/episodes/episodes.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background: url('breakingbad.jpg') no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iaWxlZGV2LWNhMi9zcmMvYXBwL3BhZ2VzL2VwaXNvZGVzL2VwaXNvZGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXBpc29kZXMvZXBpc29kZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsNENBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGVzL2VwaXNvZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnJlYWtpbmdiYWQuanBnKSBuby1yZXBlYXQ7XG59XG4iLCJpb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JyZWFraW5nYmFkLmpwZykgbm8tcmVwZWF0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/episodes/episodes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/episodes/episodes.page.ts ***!
  \*************************************************/
/*! exports provided: EpisodesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPage", function() { return EpisodesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let EpisodesPage = class EpisodesPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.items = [];
        this.numTimesLeft = 5;
    }
    ngOnInit() {
        this.episodes = this.http.get('https://breakingbadapi.com/api/episodes/');
        this.episodes.subscribe(data => {
            console.log('my data: ', data);
        });
    }
    openDetails(episode) {
        let episodeId = episode.episode_id;
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
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
EpisodesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
EpisodesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-episodes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./episodes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./episodes.page.scss */ "./src/app/pages/episodes/episodes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], EpisodesPage);



/***/ })

}]);
//# sourceMappingURL=episodes-episodes-module-es2015.js.map