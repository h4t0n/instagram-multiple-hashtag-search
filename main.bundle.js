webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    background-color: #f5f5f5;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n  <span class=\"navbar-text\">\n    Created by Andrea Tarquini\n  </span>\n  <div id=\"navbarToggler\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <i class=\"fab fa-twitter-square fa-2x\"></i>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <i class=\"fab fa-linkedin fa-2x\"></i>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <i class=\"fab fa-github-square fa-2x\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n\n\n</nav>\n\n<main role=\"main\" class=\"container\">\n  <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n    <h1 class=\"display-4\">Instagram Search by Multiple Hashtags</h1>\n  </div>\n  <search-hashtags></search-hashtags>\n</main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postcrawler_service__ = __webpack_require__("./src/app/postcrawler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_hashtags_search_hashtags_component__ = __webpack_require__("./src/app/search-hashtags/search-hashtags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__search_hashtags_search_hashtags_component__["a" /* SearchHashtagsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__postcrawler_service__["a" /* PostcrawlerService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = /** @class */ (function () {
    function Post() {
        this.hashtags = new Array();
    }
    Post.fromInstaShortcodeMedia = function (htag, json) {
        var p = new Post();
        var node = json['graphql']['shortcode_media'];
        p.id = node.id;
        p.shortcode = node.shortcode;
        p.display_url = node.display_url;
        p.display_resources = node.display_resources;
        p.taken_at_timestamp = node.taken_at_timestamp;
        p.hashtag = htag;
        // try {
        //     p.caption = node['edge_media_to_caption']['edges'][0]['node']['text']
        //     p.hashtags = this.extractHashTag(p.caption)
        // } catch (e) {
        // }
        // try {
        //     let comment_node = node['edge_media_to_comment']['edges'][0]['node']
        //     if (comment_node['owner']['id'] == node['owner']['id']) {
        //         p.hashtags = p.hashtags.concat(this.extractHashTag(comment_node['text']))
        //     }
        // } catch (e) {
        // }
        return p;
    };
    Post.formInstaHtagEdge = function (htag, node) {
        var p = new Post();
        p.id = node.id;
        p.shortcode = node.shortcode;
        p.display_url = node.display_url;
        p.taken_at_timestamp = node.taken_at_timestamp;
        p.thumbnail_src = node.thumbnail_src;
        try {
            p.caption = node['edge_media_to_caption']['edges'][0]['node']['text'];
            p.hashtags = this.extractHashTag(p.caption);
        }
        catch (e) {
        }
        p.hashtag = htag;
        return p;
    };
    Post.extractHashTag = function (string) {
        var reg = /(?:#)([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/g;
        var tags = new Array();
        var match;
        while (match = reg.exec(string)) {
            tags.push(match[1]);
        }
        return tags;
    };
    return Post;
}());



/***/ }),

/***/ "./src/app/postcrawler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostcrawlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post__ = __webpack_require__("./src/app/post.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostcrawlerService = /** @class */ (function () {
    function PostcrawlerService(http) {
        this.http = http;
    }
    PostcrawlerService_1 = PostcrawlerService;
    PostcrawlerService.prototype.getPostsForHtags = function (htags) {
        var posts = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        for (var i = 0; i < htags.length; i++) {
            this.getPostsForHtag(htags[i], posts, i == htags.length - 1);
        }
        return posts.asObservable();
    };
    PostcrawlerService.prototype.getPostsForHtag = function (htag, posts, isLastHtag, next_cursor, counter) {
        var _this = this;
        if (counter === void 0) { counter = 0; }
        this.http.get(this.getUrlForHtags(htag, next_cursor)).subscribe(function (data) {
            _this.extractPostInfo(htag, data, posts, counter, isLastHtag);
        });
    };
    PostcrawlerService.prototype.extractPostInfo = function (htag, data, posts, counter, isLastHtag) {
        var _this = this;
        var media = data['graphql']['hashtag']['edge_hashtag_to_media'];
        var edges = media['edges'];
        for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
            var edge = edges_1[_i];
            var p = __WEBPACK_IMPORTED_MODULE_3__post__["a" /* Post */].formInstaHtagEdge(htag, edge['node']);
            posts.next(p);
        }
        var pageInfo = data['graphql']['hashtag']['edge_hashtag_to_media']['page_info'];
        var hasNext = pageInfo['has_next_page'];
        var end_cursor;
        var shouldContinue = hasNext && counter < PostcrawlerService_1.MAX_SEARCH_COUNTER;
        if (shouldContinue) {
            end_cursor = pageInfo['end_cursor'];
            setTimeout(function () { return _this.getPostsForHtag(htag, posts, isLastHtag, end_cursor, counter + 1); }, 400);
        }
        else {
            if (isLastHtag) {
                posts.complete();
            }
        }
    };
    PostcrawlerService.prototype.getSinglePostDetails = function (htag, edges, i, posts, end_cursor, counter, isLastHtag) {
        var _this = this;
        var edge = edges[i]['node'];
        var shortcode = edge['shortcode'];
        this.http.get(this.getUrlForSinglePost(shortcode)).subscribe(function (data) {
            var p = __WEBPACK_IMPORTED_MODULE_3__post__["a" /* Post */].fromInstaShortcodeMedia(htag, data);
            posts.next(p);
            i++;
            if (i < edges.length) {
                return _this.getSinglePostDetails(htag, edges, i, posts, end_cursor, counter, isLastHtag);
            }
            if (end_cursor) {
                return _this.getPostsForHtag(htag, posts, isLastHtag, end_cursor, counter + 1);
            }
        });
    };
    PostcrawlerService.prototype.getUrlForHtags = function (htag, next_cursor) {
        var ret = "https://www.instagram.com/explore/tags/" + htag + "/?__a=1";
        if (next_cursor)
            ret += "&max_id=" + next_cursor;
        return ret;
    };
    PostcrawlerService.prototype.getUrlForSinglePost = function (shortcode) {
        return "https://www.instagram.com/p/" + shortcode + "/?__a=1";
    };
    PostcrawlerService.MAX_SEARCH_COUNTER = 10;
    PostcrawlerService = PostcrawlerService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostcrawlerService);
    return PostcrawlerService;
    var PostcrawlerService_1;
}());



/***/ }),

/***/ "./src/app/search-hashtags/search-hashtags.component.css":
/***/ (function(module, exports) {

module.exports = ".search {\n    width: 500px;\n}\n\n.hidden-card-text {\n    display: none;\n    color: white;\n    background-color: rgba(44, 132, 204,0.8);\n    font-size: 0.85rem\n}\n\n.hover-show:hover > .hidden-card-text{\n    display: block\n}\n\n.hover-show{\n    overflow: hidden;\n}\n\n.hover-show > img {\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n\n.hover-show:hover > img {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n\n.card-text {\n    max-height: 260px;\n    overflow: hidden\n}\n\n.loading {\n    color: #007bff;\n}"

/***/ }),

/***/ "./src/app/search-hashtags/search-hashtags.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto\">\n  <form (ngSubmit)=\"search(tags.value)\" class=\"form-inline justify-content-center\">\n    <div class=\"form-group mx-sm-3 mb-2\">\n      <label for=\"inputhastags\" class=\"sr-only\">Hashtags</label>\n      <input #tags class=\"form-control form-control-lg search\" type=\"text\" id=\"inputhastags\" placeholder=\"Add here hashtags separated by space\">\n    </div>\n    <button class=\"btn btn-primary btn-lg mb-2\">Search</button>\n  </form>\n\n  <div class=\"row mt-5\">\n    <div *ngFor='let postGroup of groupedPosts;' class=\"card-group\">\n      <div *ngFor='let post of postGroup' class=\"card insta-card hover-show\">\n        <img class=\"card-img\" src=\"{{post.thumbnail_src}}\">\n        <div class=\"card-img-overlay hidden-card-text\">\n          <p class=\"card-text to-show\">{{post.caption}}</p>\n          <a href=\"https://www.instagram.com/p/{{post.shortcode}}\" class=\"btn btn-outline-light\" target=\"_blank\" role=\"button\">Vedi su instagram</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"row justify-content-center mt-1\">\n    <div class=\"fa-3x loading\">\n      <i class=\"fas fa-spinner fa-pulse\"></i>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search-hashtags/search-hashtags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchHashtagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postcrawler_service__ = __webpack_require__("./src/app/postcrawler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchHashtagsComponent = /** @class */ (function () {
    function SearchHashtagsComponent(postService) {
        var _this = this;
        this.postService = postService;
        this.loading = false;
        this.rearrangePostsCB = function () {
            var temp = new Map();
            if (_this.currentHtags[0]) {
                _this.dataStore[_this.currentHtags[0]].forEach(function (p) {
                    temp.set(p.id, p);
                });
            }
            var intersectd;
            if (_this.currentHtags.length > 1) {
                for (var i = 1; i < _this.currentHtags.length; i++) {
                    intersectd = new Map();
                    var currentHtDs = _this.dataStore[_this.currentHtags[i]];
                    currentHtDs.forEach(function (p) {
                        if (temp.has(p.id)) {
                            intersectd.set(p.id, p);
                        }
                    });
                    temp = intersectd;
                }
            }
            else {
                intersectd = temp;
            }
            var array = Array.from(intersectd.values()).sort(function (a, b) { return b.taken_at_timestamp - a.taken_at_timestamp; });
            array.sort(function (a, b) { return b.taken_at_timestamp - a.taken_at_timestamp; });
            var sliced = array.reduce(function (r, v, i) {
                if (i % 3 == 0)
                    r.push(array.slice(i, i + 3));
                return r;
            }, []);
            if (_this.groupedPosts.length != sliced.length || _this.groupedPosts[_this.groupedPosts.length - 1].length != sliced[_this.groupedPosts.length - 1].length)
                _this.groupedPosts = sliced;
        };
        this.currentHtags = [];
        this.dataStore = {};
        this.groupedPosts = [];
    }
    SearchHashtagsComponent.prototype.ngOnInit = function () {
        setInterval(this.rearrangePostsCB, 2500);
    };
    SearchHashtagsComponent.prototype.search = function (htags) {
        var _this = this;
        this.loading = true;
        this.currentHtags = htags.split(" ");
        this.currentHtags = this.currentHtags.map(function (ht) {
            if (ht[0] == "#")
                return ht.slice(1);
            return ht;
        });
        this.postService.getPostsForHtags(this.currentHtags).subscribe(function (post) {
            if (!_this.dataStore[post.hashtag]) {
                _this.dataStore[post.hashtag] = [];
            }
            var htDatstore = _this.dataStore[post.hashtag];
            var alreadyseen = htDatstore
                .filter(function (p) { return p.id == post.id; }).length > 0;
            if (!alreadyseen) {
                htDatstore.push(post);
            }
        }, function (error) { }, function () {
            _this.loading = false;
        });
    };
    SearchHashtagsComponent.MAX_CARD_POST = 3;
    SearchHashtagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'search-hashtags',
            template: __webpack_require__("./src/app/search-hashtags/search-hashtags.component.html"),
            styles: [__webpack_require__("./src/app/search-hashtags/search-hashtags.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__postcrawler_service__["a" /* PostcrawlerService */]])
    ], SearchHashtagsComponent);
    return SearchHashtagsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map