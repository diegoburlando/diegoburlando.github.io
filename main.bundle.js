webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test{background-color:red;}\r\n\r\n.sample-title {\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 1% 1%;\r\n  box-sizing:border-box;\r\n}\r\n\r\n.container {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.paginator {\r\n  text-align: center;\r\n  padding-bottom: 1%;\r\n}\r\n.paginator > button {\r\n  border-radius: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: transparent;\r\n  font-size: 1.5em;\r\n  outline: none;\r\n  border: 3px solid transparent;\r\n  color: #9E9E9E;\r\n  cursor:pointer;\r\n \r\n}\r\n\r\n.paginator > button:hover {\r\n  color:#263238;\r\n}\r\n\r\n.paginator > button:active {\r\n  background-color: lightgrey;\r\n  border: 3px solid silver;\r\n}\r\n\r\n.row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding: 2% 0;\r\n  box-sizing: border-box;\r\n  -webkit-box-align: baseline;\r\n      -ms-flex-align: baseline;\r\n          align-items: baseline;\r\n  margin-bottom: 2%;\r\n  background-color: white;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\r\n  transition: all 0.1s ease-in;\r\n /* opacity:0;\r\n  animation: flowerFadeIn 0.5s 0.5s linear forwards;*/\r\n  \r\n}\r\n\r\n\r\n@-webkit-keyframes flowerFadeIn {\r\n  from {\r\n    opacity:0;\r\n  }\r\n  to{\r\n    opacity:1;\r\n  }  \r\n}\r\n\r\n\r\n@keyframes flowerFadeIn {\r\n  from {\r\n    opacity:0;\r\n  }\r\n  to{\r\n    opacity:1;\r\n  }  \r\n}\r\n\r\n\r\n.row > div:first-of-type {\r\n  width: 10%;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 1.2em;\r\n  padding: 0 1%;\r\n  box-sizing: border-box;\r\n}\r\n.row > div:nth-of-type(2) {\r\n  width: 70%;\r\n\r\n  text-align: justify;\r\n}\r\n.row > div:last-of-type {\r\n  width: 20%;\r\n  padding: 0 2%;\r\n  box-sizing: border-box;\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n  \r\n}\r\n.row > div:last-of-type > img {\r\n  border-radius: 3px;\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  .row {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-bottom: 4%;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n\r\n  .row > div:first-of-type {\r\n    width: 100%;\r\n    padding: 1% 1%;\r\n  }\r\n  .row > div:nth-of-type(2) {\r\n    width: 100%;\r\n    padding: 0 2%;\r\n    box-sizing: border-box;\r\n  }\r\n  .row > div:last-of-type {\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    padding: 2% 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .row > div:last-of-type {\r\n    width: 90%;\r\n  }\r\n  .sample-title {\r\n    font-size:1.5em;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1 class=\"sample-title\">Angular Data Visualisation Client Side Paging</h1>\r\n  <div class=\"container\">\r\n    <div class=\"paginator\">\r\n      <button title=\"Go to first page\" (click)=\"firstPage()\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i></button>\r\n      <button title=\"Go to previous page\" (click)=\"prevPage()\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></button>\r\n      <button title=\"Go to next page\" (click)=\"nextPage()\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></button>\r\n      <button title=\"Go to last page\" (click)=\"lastPage()\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\r\n    </div>\r\n    <div class=\"row\" *ngFor=\"let flower of flowersInPage\">   \r\n      <div>{{flower.Name}}</div>\r\n      <div>{{flower.Description}}</div>\r\n      <div>\r\n        <img src=\"{{flower.ImagePath}}\" alt=\"\" width=100%> </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flowerservice__ = __webpack_require__("../../../../../src/app/services/flowerservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(flowerservice) {
        var _this = this;
        this.flowerservice = flowerservice;
        this.flowers = [];
        this.pageSize = 5;
        this.pageNumber = 1;
        this.flowersInPage = [];
        this.getDataPage = function () {
            return _this.flowers.slice((_this.pageNumber - 1) * _this.pageSize, _this.pageSize * _this.pageNumber);
        };
        this.nextPage = function () {
            var remainder = _this.flowers.length % _this.pageSize;
            var pages = Math.floor(_this.flowers.length / _this.pageSize);
            if (remainder > 0) {
                pages++;
            }
            if (_this.pageNumber === pages) {
                return;
            }
            _this.pageNumber += 1;
            _this.flowersInPage = _this.getDataPage();
        };
        this.firstPage = function () {
            _this.pageNumber = 1;
            _this.flowersInPage = _this.getDataPage();
        };
        this.lastPage = function () {
            var remainder = _this.flowers.length % _this.pageSize;
            var pages = Math.floor(_this.flowers.length / _this.pageSize);
            if (remainder > 0) {
                pages++;
            }
            _this.pageNumber = pages;
            _this.flowersInPage = _this.getDataPage();
        };
        this.prevPage = function () {
            if (_this.pageNumber == 1)
                return;
            _this.pageNumber -= 1;
            _this.flowersInPage = _this.getDataPage();
        };
        this.title = 'First Angular 5 example with joy';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.ngAfterViewInit = function () {
        //  this.flowerservice.getFlowers().subscribe(data => { 
        // data.forEach( item => {   
        // item.ImagePath = item.ImagePath.replace(
        //           "http://dmm888.com/Images/Flowers/",
        //           "https://nodehelperstatic-statichelper.7e14.starter-us-west-2.openshiftapps.com/Flowers/"
        //         );
        // });
        // this.flowers = data;
        // this.flowersInPage = this.getDataPage();
        // });
        var _this = this;
        // const button = document.querySelector('.test');
        // const output = document.querySelector('output'); 
        // Observable.fromEvent(button, 'click')
        // .bufferCount(3) // after 3 press ideal to check if not a
        // .subscribe({
        //   next: event => { output.textContent = Math.random().toString(36).slice(2) },
        //   error: err => console.log(`Oops... ${err}`),
        //   complete: () => console.log(`Complete!`),
        // });
        // const second$ = Observable.interval(1000).take(flowers.length);
        // const response$ = Observable
        // .fromPromise(
        //  fetch('https://apimicrobach.azurewebsites.net/flower/?flowerName='+ encodeURIComponent(flower.Name)).then(response => response.json())
        // )
        // second$
        // .flatMap(x => response$)
        // .subscribe(data => console.log('data is', data)) 
        //*********************************************************************************
        // const flowers:any = Observable.fromPromise(fetch('https://apimicrobach.azurewebsites.net/flowers').then(response => response.json()))
        // .subscribe(
        //    (flowers:any[]) => {
        //    const items = Observable.interval(1000).take(flowers.length)
        //    .subscribe((x) => {console.log('___________',x);
        //       fetch('https://apimicrobach.azurewebsites.net/flower/?flowerName='+ encodeURIComponent(flowers[x].Name))
        //      .then(response => {return response.json()}).then(json => {console.log(json);});})      
        //     },
        //      (err) => {console.log('Error: ' + err);},
        //      () => { console.log('Completed'); });
        //*********************************************************************************
        this.flowerservice.getFlowersWithReactiveExtensions().subscribe(function (res) {
            res.response.forEach(function (item) {
                item.ImagePath = item.ImagePath.replace("http://dmm888.com/Images/Flowers/", "https://nodehelperstatic-statichelper.7e14.starter-us-west-2.openshiftapps.com/Flowers/");
            });
            _this.flowers = res.response;
            _this.flowersInPage = _this.getDataPage();
        }, function (err) { console.error(err); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_flowerservice__["a" /* FlowerService */]],
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_flowerservice__["a" /* FlowerService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/flowerservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import RxJs required methods


var FlowerService = (function () {
    function FlowerService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    FlowerService.prototype.getFlowers = function () {
        return this.http.get("https://apimicrobach.azurewebsites.net/flowers")
            .map(function (res) { return res.json(); });
    };
    FlowerService.prototype.getFlowersWithReactiveExtensions = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */]
            .ajax({ url: 'https://apimicrobach.azurewebsites.net/flowers', responseType: 'json', headers: {}, method: 'GET', body: {} });
    };
    FlowerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FlowerService);
    return FlowerService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map