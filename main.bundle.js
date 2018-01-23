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

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_flowers_flowers_component__ = __webpack_require__("../../../../../src/app/components/flowers/flowers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_flower_flower_component__ = __webpack_require__("../../../../../src/app/components/flower/flower.component.ts");
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
            declarations: [__WEBPACK_IMPORTED_MODULE_4__components_flowers_flowers_component__["a" /* FlowersComponent */], __WEBPACK_IMPORTED_MODULE_5__components_flower_flower_component__["a" /* FlowerComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__components_flowers_flowers_component__["a" /* FlowersComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/flower/flower.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".description {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n}\r\n\r\n.description > p {\r\n  width: 80%;\r\n  text-align: justify;\r\n  font-size:0.9em;\r\n  padding: 0 15px;\r\n  margin:0;\r\n}\r\n.description > div {\r\n  width: 20%;\r\n  padding: 0 1em;\r\n  box-sizing: border-box;  \r\n}\r\n.description > div > img {\r\n  border-radius: 3px;\r\n}\r\n\r\n.flowerTitle {\r\n  font-weight: bold;\r\n  font-size: 1.2em;\r\n  padding: 0 15px 10px 15px;\r\n  box-sizing: border-box;\r\n  margin:0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/flower/flower.component.html":
/***/ (function(module, exports) {

module.exports = " <p class = \"flowerTitle\">{{flower.Name}}</p>\r\n          <div class =\"description\">\r\n            <p>{{flower.Description}}</p>\r\n            <div>\r\n            <img src=\"{{flower.ImagePath}}\" width=\"100%\" alt=\"\" />\r\n            </div>\r\n </div>    \r\n"

/***/ }),

/***/ "../../../../../src/app/components/flower/flower.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlowerComponent = (function () {
    function FlowerComponent() {
    }
    FlowerComponent.prototype.ngOnInit = function () { };
    FlowerComponent.prototype.ngAfterViewInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], FlowerComponent.prototype, "flower", void 0);
    FlowerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-flower',
            template: __webpack_require__("../../../../../src/app/components/flower/flower.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/flower/flower.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlowerComponent);
    return FlowerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/flowers/flowers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n\r\n}\r\n\r\n.paginator {\r\n  text-align: center;\r\n  \r\n}\r\n.paginator > button {\r\n  border-radius: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: transparent;\r\n  font-size: 1.5em;\r\n  outline: none;\r\n  border: 3px solid transparent;\r\n  color: #9e9e9e;\r\n  cursor: pointer;\r\n}\r\n\r\n.paginator > button:hover {\r\n  color: #263238;\r\n}\r\n\r\n.paginator > button:active {\r\n  background-color: lightgrey;\r\n  border: 3px solid silver;\r\n}\r\n\r\n.row {  \r\n \r\n  box-sizing: border-box;   \r\n  padding-bottom:2em;\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/flowers/flowers.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"container\">\r\n    <div class=\"paginator\">\r\n      <button title=\"Go to first page\" (click)=\"firstPage()\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i></button>\r\n      <button title=\"Go to previous page\" (click)=\"prevPage()\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></button>\r\n      <button title=\"Go to next page\" (click)=\"nextPage()\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></button>\r\n      <button title=\"Go to last page\" (click)=\"lastPage()\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\r\n    </div>   \r\n    <div class=\"row\" *ngFor=\"let flower of flowersInPage\">\r\n    <app-flower [flower] = flower></app-flower>          \r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/flowers/flowers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowersComponent; });
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


var FlowersComponent = (function () {
    function FlowersComponent(flowerservice) {
        var _this = this;
        this.flowerservice = flowerservice;
        this.parentComponentVariable = "This is the value injected from parent to child";
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
    FlowersComponent.prototype.ngOnInit = function () { };
    FlowersComponent.prototype.ngAfterViewInit = function () {
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
    FlowersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_flowerservice__["a" /* FlowerService */]],
            template: __webpack_require__("../../../../../src/app/components/flowers/flowers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/flowers/flowers.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_flowerservice__["a" /* FlowerService */]])
    ], FlowersComponent);
    return FlowersComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
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