webpackJsonp([0],{

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/account/password/password-strength-bar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nstart Password strength bar style\n========================================================================== */\nul#strengthBar {\n    display:inline;\n    list-style:none;\n    margin:0;\n    margin-left:15px;\n    padding:0;\n    vertical-align:2px;\n}\n\n.point:last {\n    margin:0 !important;\n}\n.point {\n    background:#DDD;\n    border-radius:2px;\n    display:inline-block;\n    height:5px;\n    margin-right:1px;\n    width:20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/home/home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nMain page styles\n========================================================================== */\n\n.hipster {\n    display: inline-block;\n    width: 347px;\n    height: 497px;\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster.png") + ") no-repeat center top;\n    background-size: contain;\n}\n\n/* wait autoprefixer update to allow simple generation of high pixel density media query */\n@media\nonly screen and (-webkit-min-device-pixel-ratio: 2),\nonly screen and (   min--moz-device-pixel-ratio: 2),\nonly screen and (     -o-min-device-pixel-ratio: 2/1),\nonly screen and (        min-device-pixel-ratio: 2),\nonly screen and (                min-resolution: 192dpi),\nonly screen and (                min-resolution: 2dppx) {\n    .hipster {\n        background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster2x.png") + ") no-repeat center top;\n        background-size: contain;\n    }\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/layouts/navbar/navbar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nNavbar\n========================================================================== */\n.navbar-version {\n    font-size: 10px;\n    color: #ccc\n}\n\n.jh-navbar {\n    background-color: #353d47;\n    padding: .2em 1em;\n}\n\n.jh-navbar .profile-image {\n    margin: -10px 0px;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n}\n\n.jh-navbar .dropdown-item.active, .jh-navbar .dropdown-item.active:focus, .jh-navbar .dropdown-item.active:hover {\n    background-color: #353d47;\n}\n\n.jh-navbar .dropdown-toggle::after {\n    margin-left: 0.15em;\n}\n\n.jh-navbar ul.navbar-nav {\n    padding: 0.5em;\n}\n\n.jh-navbar .navbar-nav .nav-item {\n    margin-left: 1.5rem;\n}\n\n.jh-navbar a.nav-link {\n    font-weight: 400;\n}\n\n.jh-navbar .jh-navbar-toggler {\n    color: #ccc;\n    font-size: 1.5em;\n    padding: 10px;\n}\n\n.jh-navbar .jh-navbar-toggler:hover {\n    color: #fff;\n}\n\n\n\n@media screen and (max-width: 992px) {\n    .jh-logo-container {\n        width: 100%;\n    }\n}\n\n.navbar-title {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n/* ==========================================================================\nLogo styles\n========================================================================== */\n.navbar-brand.logo {\n    padding: 5px 15px;\n}\n\n.logo .logo-img {\n    height: 45px;\n    display: inline-block;\n    vertical-align: middle;\n    width: 70px;\n}\n\n.logo-img {\n    height: 100%;\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/logo-jhipster.png") + ") no-repeat center center;\n    background-size: contain;\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/layouts/profiles/page-ribbon.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nDevelopement Ribbon\n========================================================================== */\n.ribbon {\n    background-color: rgba(170, 0, 0, 0.5);\n    left: -3.5em;\n    moz-transform: rotate(-45deg);\n    ms-transform: rotate(-45deg);\n    o-transform: rotate(-45deg);\n    webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    overflow: hidden;\n    position: absolute;\n    top: 40px;\n    white-space: nowrap;\n    width: 15em;\n    z-index: 9999;\n    pointer-events: none;\n    opacity: 0.75;\n}\n\n.ribbon a {\n    color: #fff;\n    display: block;\n    font-weight: 400;\n    margin: 1px 0;\n    padding: 10px 50px;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: 0 0 5px #444;\n    pointer-events: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/main/webapp/app/account/account.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/account/index.ts");
var JhipsterdemoAccountModule = (function () {
    function JhipsterdemoAccountModule() {
    }
    return JhipsterdemoAccountModule;
}());
JhipsterdemoAccountModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.JhipsterdemoSharedModule,
            router_1.RouterModule.forRoot(_1.accountState, { useHash: true })
        ],
        declarations: [
            _1.ActivateComponent,
            _1.RegisterComponent,
            _1.PasswordComponent,
            _1.PasswordStrengthBarComponent,
            _1.PasswordResetInitComponent,
            _1.PasswordResetFinishComponent,
            _1.SettingsComponent
        ],
        providers: [
            _1.Register,
            _1.ActivateService,
            _1.PasswordService,
            _1.PasswordResetInitService,
            _1.PasswordResetFinishService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], JhipsterdemoAccountModule);
exports.JhipsterdemoAccountModule = JhipsterdemoAccountModule;


/***/ }),

/***/ "./src/main/webapp/app/account/account.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/account/index.ts");
var ACCOUNT_ROUTES = [
    _1.activateRoute,
    _1.passwordRoute,
    _1.passwordResetFinishRoute,
    _1.passwordResetInitRoute,
    _1.registerRoute,
    _1.settingsRoute
];
exports.accountState = [{
        path: '',
        children: ACCOUNT_ROUTES
    }];


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 jhiTranslate=\"activate.title\">Activation</h1> <div class=\"alert alert-success\" *ngIf=\"success\"> <span jhiTranslate=\"activate.messages.success\"><strong>Your user account has been activated.</strong> Please </span> <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a>. </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"activate.messages.error\"> <strong>Your user could not be activated.</strong> Please use the registration form to sign up. </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var activate_service_1 = __webpack_require__("./src/main/webapp/app/account/activate/activate.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ActivateComponent = (function () {
    function ActivateComponent(activateService, loginModalService, route) {
        this.activateService = activateService;
        this.loginModalService = loginModalService;
        this.route = route;
    }
    ActivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.activateService.get(params['key']).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        });
    };
    ActivateComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return ActivateComponent;
}());
ActivateComponent = __decorate([
    core_1.Component({
        selector: 'jhi-activate',
        template: __webpack_require__("./src/main/webapp/app/account/activate/activate.component.html")
    }),
    __metadata("design:paramtypes", [activate_service_1.ActivateService,
        shared_1.LoginModalService,
        router_1.ActivatedRoute])
], ActivateComponent);
exports.ActivateComponent = ActivateComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var activate_component_1 = __webpack_require__("./src/main/webapp/app/account/activate/activate.component.ts");
exports.activateRoute = {
    path: 'activate',
    component: activate_component_1.ActivateComponent,
    data: {
        authorities: [],
        pageTitle: 'activate.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var ActivateService = (function () {
    function ActivateService(http) {
        this.http = http;
    }
    ActivateService.prototype.get = function (key) {
        var params = new http_1.URLSearchParams();
        params.set('key', key);
        return this.http.get('api/activate', {
            search: params
        }).map(function (res) { return res; });
    };
    return ActivateService;
}());
ActivateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ActivateService);
exports.ActivateService = ActivateService;


/***/ }),

/***/ "./src/main/webapp/app/account/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password-strength-bar.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/settings/settings.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/settings/settings.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/account.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-4 col-md-offset-4\"> <h1 jhiTranslate=\"reset.finish.title\">Reset password</h1> <div class=\"alert alert-danger\" jhiTranslate=\"reset.finish.messages.keymissing\" *ngIf=\"keyMissing\"> <strong>The password reset key is missing.</strong> </div> <div class=\"alert alert-warning\" *ngIf=\"!success && !keyMissing\"> <p jhiTranslate=\"reset.finish.messages.info\">Choose a new password</p> </div> <div class=\"alert alert-danger\" *ngIf=\"error\"> <p jhiTranslate=\"reset.finish.messages.error\">Your password couldn't be reset. Remember a password request is only valid for 24 hours.</p> </div> <p class=\"alert alert-success\" *ngIf=\"success\"> <span jhiTranslate=\"reset.finish.messages.success\"><strong>Your password has been reset.</strong> Please </span> <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a>. </p> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\" jhiTranslate=\"global.messages.error.dontmatch\"> The password and its confirmation do not match! </div> <div *ngIf=\"!keyMissing\"> <form *ngIf=\"!success\" name=\"form\" role=\"form\" (ngSubmit)=\"finishReset()\" #passwordForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\" jhiTranslate=\"global.form.newpassword\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #passwordInput=\"ngModel\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\" [(ngModel)]=\"resetAccount.password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.required\" jhiTranslate=\"global.messages.validate.newpassword.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.newpassword.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.newpassword.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"resetAccount.password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\" jhiTranslate=\"global.form.confirmpassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\" jhiTranslate=\"global.messages.validate.confirmpassword.required\"> Your password confirmation is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.confirmpassword.minlength\"> Your password confirmation is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.confirmpassword.maxlength\"> Your password confirmation cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"reset.finish.form.button\">Reset Password</button> </form> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var password_reset_finish_service_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var PasswordResetFinishComponent = (function () {
    function PasswordResetFinishComponent(passwordResetFinishService, loginModalService, route, elementRef, renderer) {
        this.passwordResetFinishService = passwordResetFinishService;
        this.loginModalService = loginModalService;
        this.route = route;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetFinishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.key = params['key'];
        });
        this.resetAccount = {};
        this.keyMissing = !this.key;
    };
    PasswordResetFinishComponent.prototype.ngAfterViewInit = function () {
        if (this.elementRef.nativeElement.querySelector('#password') != null) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#password'), 'focus', []);
        }
    };
    PasswordResetFinishComponent.prototype.finishReset = function () {
        var _this = this;
        this.doNotMatch = null;
        this.error = null;
        if (this.resetAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.passwordResetFinishService.save({ key: this.key, newPassword: this.resetAccount.password }).subscribe(function () {
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    PasswordResetFinishComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return PasswordResetFinishComponent;
}());
PasswordResetFinishComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-reset-finish',
        template: __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.html")
    }),
    __metadata("design:paramtypes", [password_reset_finish_service_1.PasswordResetFinishService,
        shared_1.LoginModalService,
        router_1.ActivatedRoute,
        core_1.ElementRef, core_1.Renderer])
], PasswordResetFinishComponent);
exports.PasswordResetFinishComponent = PasswordResetFinishComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_reset_finish_component_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts");
exports.passwordResetFinishRoute = {
    path: 'reset/finish',
    component: password_reset_finish_component_1.PasswordResetFinishComponent,
    data: {
        authorities: [],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var PasswordResetFinishService = (function () {
    function PasswordResetFinishService(http) {
        this.http = http;
    }
    PasswordResetFinishService.prototype.save = function (keyAndPassword) {
        return this.http.post('api/account/reset_password/finish', keyAndPassword);
    };
    return PasswordResetFinishService;
}());
PasswordResetFinishService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordResetFinishService);
exports.PasswordResetFinishService = PasswordResetFinishService;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 jhiTranslate=\"reset.request.title\">Reset your password</h1> <div class=\"alert alert-danger\" jhiTranslate=\"reset.request.messages.notfound\" *ngIf=\"errorEmailNotExists\"> <strong>Email address isn't registered!</strong> Please check and try again. </div> <div class=\"alert alert-warning\" *ngIf=\"!success\"> <p jhiTranslate=\"reset.request.messages.info\">Enter the email address you used to register.</p> </div> <div class=\"alert alert-success\" *ngIf=\"success === 'OK'\"> <p jhiTranslate=\"reset.request.messages.success\">Check your emails for details on how to reset your password.</p> </div> <form *ngIf=\"!success\" name=\"form\" role=\"form\" (ngSubmit)=\"requestReset()\" #resetRequestForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\" jhiTranslate=\"global.form.email\">Email</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"{{'global.form.email.placeholder' | translate}}\" [(ngModel)]=\"resetAccount.email\" minlength=\"5\" maxlength=\"100\" #emailInput=\"ngModel\" required> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\" jhiTranslate=\"global.messages.validate.email.required\"> Your email is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your email is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.minlength\" jhiTranslate=\"global.messages.validate.email.minlength\"> Your email is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.email.maxlength\"> Your email cannot be longer than 100 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"resetRequestForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"reset.request.form.button\">Reset</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var password_reset_init_service_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts");
var PasswordResetInitComponent = (function () {
    function PasswordResetInitComponent(passwordResetInitService, elementRef, renderer) {
        this.passwordResetInitService = passwordResetInitService;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetInitComponent.prototype.ngOnInit = function () {
        this.resetAccount = {};
    };
    PasswordResetInitComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#email'), 'focus', []);
    };
    PasswordResetInitComponent.prototype.requestReset = function () {
        var _this = this;
        this.error = null;
        this.errorEmailNotExists = null;
        this.passwordResetInitService.save(this.resetAccount.email).subscribe(function () {
            _this.success = 'OK';
        }, function (response) {
            _this.success = null;
            if (response.status === 400 && response.data === 'email address not registered') {
                _this.errorEmailNotExists = 'ERROR';
            }
            else {
                _this.error = 'ERROR';
            }
        });
    };
    return PasswordResetInitComponent;
}());
PasswordResetInitComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-reset-init',
        template: __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.html")
    }),
    __metadata("design:paramtypes", [password_reset_init_service_1.PasswordResetInitService,
        core_1.ElementRef,
        core_1.Renderer])
], PasswordResetInitComponent);
exports.PasswordResetInitComponent = PasswordResetInitComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_reset_init_component_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts");
exports.passwordResetInitRoute = {
    path: 'reset/request',
    component: password_reset_init_component_1.PasswordResetInitComponent,
    data: {
        authorities: [],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var PasswordResetInitService = (function () {
    function PasswordResetInitService(http) {
        this.http = http;
    }
    PasswordResetInitService.prototype.save = function (mail) {
        return this.http.post('api/account/reset_password/init', mail);
    };
    return PasswordResetInitService;
}());
PasswordResetInitService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordResetInitService);
exports.PasswordResetInitService = PasswordResetInitService;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password-strength-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var PasswordStrengthBarComponent = (function () {
    function PasswordStrengthBarComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
    }
    PasswordStrengthBarComponent.prototype.measureStrength = function (p) {
        var force = 0;
        var regex = /[$-/:-?{-~!"^_`\[\]]/g; // "
        var lowerLetters = /[a-z]+/.test(p);
        var upperLetters = /[A-Z]+/.test(p);
        var numbers = /[0-9]+/.test(p);
        var symbols = regex.test(p);
        var flags = [lowerLetters, upperLetters, numbers, symbols];
        var passedMatches = flags.filter(function (isMatchedFlag) {
            return isMatchedFlag === true;
        }).length;
        force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
        force += passedMatches * 10;
        // penality (short password)
        force = (p.length <= 6) ? Math.min(force, 10) : force;
        // penality (poor variety of characters)
        force = (passedMatches === 1) ? Math.min(force, 10) : force;
        force = (passedMatches === 2) ? Math.min(force, 20) : force;
        force = (passedMatches === 3) ? Math.min(force, 40) : force;
        return force;
    };
    ;
    PasswordStrengthBarComponent.prototype.getColor = function (s) {
        var idx = 0;
        if (s <= 10) {
            idx = 0;
        }
        else if (s <= 20) {
            idx = 1;
        }
        else if (s <= 30) {
            idx = 2;
        }
        else if (s <= 40) {
            idx = 3;
        }
        else {
            idx = 4;
        }
        return { idx: idx + 1, col: this.colors[idx] };
    };
    ;
    Object.defineProperty(PasswordStrengthBarComponent.prototype, "passwordToCheck", {
        set: function (password) {
            if (password) {
                var c = this.getColor(this.measureStrength(password));
                var element = this.elementRef.nativeElement;
                if (element.className) {
                    this.renderer.setElementClass(element, element.className, false);
                }
                var lis = element.getElementsByTagName('li');
                for (var i = 0; i < lis.length; i++) {
                    if (i < c.idx) {
                        this.renderer.setElementStyle(lis[i], 'backgroundColor', c.col);
                    }
                    else {
                        this.renderer.setElementStyle(lis[i], 'backgroundColor', '#DDD');
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return PasswordStrengthBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PasswordStrengthBarComponent.prototype, "passwordToCheck", null);
PasswordStrengthBarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-strength-bar',
        template: "\n        <div id=\"strength\">\n            <small jhiTranslate=\"global.messages.validate.newpassword.strength\">Password strength:</small>\n            <ul id=\"strengthBar\">\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n            </ul>\n        </div>",
        styles: [
            __webpack_require__("./src/main/webapp/app/account/password/password-strength-bar.css")
        ]
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], PasswordStrengthBarComponent);
exports.PasswordStrengthBarComponent = PasswordStrengthBarComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password-strength-bar.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/main/webapp/app/account/password/password-strength-bar.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/account/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h2 jhiTranslate=\"password.title\" translateValues=\"{username: '{{account.login}}'}\" *ngIf=\"account\">Password for [<b>{{account.login}}</b>]</h2> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"password.messages.success\"> <strong>Password changed!</strong> </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"password.messages.error\"> <strong>An error has occurred!</strong> The password could not be changed. </div> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\" jhiTranslate=\"global.messages.error.dontmatch\"> The password and its confirmation do not match! </div> <form name=\"form\" role=\"form\" (ngSubmit)=\"changePassword()\" #passwordForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\" jhiTranslate=\"global.form.newpassword\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #passwordInput=\"ngModel\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\" [(ngModel)]=\"password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.required\" jhiTranslate=\"global.messages.validate.newpassword.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.newpassword.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.newpassword.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\" jhiTranslate=\"global.form.confirmpassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\" jhiTranslate=\"global.messages.validate.confirmpassword.required\"> Your confirmation password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.confirmpassword.minlength\"> Your confirmation password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.confirmpassword.maxlength\"> Your confirmation password cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"password.form.button\">Save</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password/password.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_service_1 = __webpack_require__("./src/main/webapp/app/account/password/password.service.ts");
var PasswordComponent = (function () {
    function PasswordComponent(passwordService, principal) {
        this.passwordService = passwordService;
        this.principal = principal;
    }
    PasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
    };
    PasswordComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.password !== this.confirmPassword) {
            this.error = null;
            this.success = null;
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.passwordService.save(this.password).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password',
        template: __webpack_require__("./src/main/webapp/app/account/password/password.component.html")
    }),
    __metadata("design:paramtypes", [password_service_1.PasswordService,
        shared_1.Principal])
], PasswordComponent);
exports.PasswordComponent = PasswordComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_component_1 = __webpack_require__("./src/main/webapp/app/account/password/password.component.ts");
exports.passwordRoute = {
    path: 'password',
    component: password_component_1.PasswordComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password/password.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var PasswordService = (function () {
    function PasswordService(http) {
        this.http = http;
    }
    PasswordService.prototype.save = function (newPassword) {
        return this.http.post('api/account/change_password', newPassword);
    };
    return PasswordService;
}());
PasswordService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordService);
exports.PasswordService = PasswordService;


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 jhiTranslate=\"register.title\">Registration</h1> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"register.messages.success\"> <strong>Registration saved!</strong> Please check your email for confirmation. </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"register.messages.error.fail\"> <strong>Registration failed!</strong> Please try again later. </div> <div class=\"alert alert-danger\" *ngIf=\"errorUserExists\" jhiTranslate=\"register.messages.error.userexists\"> <strong>Login name already registered!</strong> Please choose another one. </div> <div class=\"alert alert-danger\" *ngIf=\"errorEmailExists\" jhiTranslate=\"register.messages.error.emailexists\"> <strong>Email is already in use!</strong> Please choose another one. </div> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\" jhiTranslate=\"global.messages.error.dontmatch\"> The password and its confirmation do not match! </div> </div> <div class=\"col-md-8 offset-md-2\"> <form name=\"form\" role=\"form\" (ngSubmit)=\"register()\" #registerForm=\"ngForm\" *ngIf=\"!success\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"login\" jhiTranslate=\"global.form.username\">Username</label> <input type=\"text\" class=\"form-control\" [(ngModel)]=\"registerAccount.login\" id=\"login\" name=\"login\" #login=\"ngModel\" placeholder=\"{{'global.form.username.placeholder' | translate}}\" required minlength=\"1\" maxlength=\"50\" pattern=\"^[_'.@A-Za-z0-9-]*$\"> <div *ngIf=\"login.dirty && login.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"login.errors.required\" jhiTranslate=\"register.messages.validate.login.required\"> Your username is required. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.minlength\" jhiTranslate=\"register.messages.validate.login.minlength\"> Your username is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.maxlength\" jhiTranslate=\"register.messages.validate.login.maxlength\"> Your username cannot be longer than 50 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.pattern\" jhiTranslate=\"register.messages.validate.login.pattern\"> Your username can only contain lower-case letters and digits. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\" jhiTranslate=\"global.form.email\">Email</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" #email=\"ngModel\" placeholder=\"{{'global.form.email.placeholder' | translate}}\" [(ngModel)]=\"registerAccount.email\" minlength=\"5\" maxlength=\"100\" required> <div *ngIf=\"email.dirty && email.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"email.errors.required\" jhiTranslate=\"global.messages.validate.email.required\"> Your email is required. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.invalid\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your email is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.minlength\" jhiTranslate=\"global.messages.validate.email.minlength\"> Your email is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.maxlength\" jhiTranslate=\"global.messages.validate.email.maxlength\"> Your email cannot be longer than 100 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\" jhiTranslate=\"global.form.newpassword\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #password=\"ngModel\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\" [(ngModel)]=\"registerAccount.password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"password.dirty && password.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"password.errors.required\" jhiTranslate=\"global.messages.validate.newpassword.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"password.errors.minlength\" jhiTranslate=\"global.messages.validate.newpassword.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"password.errors.maxlength\" jhiTranslate=\"global.messages.validate.newpassword.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"registerAccount.password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\" jhiTranslate=\"global.form.confirmpassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\" jhiTranslate=\"global.messages.validate.confirmpassword.required\"> Your confirmation password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.confirmpassword.minlength\"> Your confirmation password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.confirmpassword.maxlength\"> Your confirmation password cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"register.form.button\">Register</button> </form> <p></p> <div class=\"alert alert-warning\"> <span jhiTranslate=\"global.messages.info.authenticated.prefix\">If you want to </span> <a class=\"alert-link\" (click)=\"openLogin()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a><span jhiTranslate=\"global.messages.info.authenticated.suffix\">, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var register_service_1 = __webpack_require__("./src/main/webapp/app/account/register/register.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var RegisterComponent = (function () {
    function RegisterComponent(languageService, loginModalService, registerService, elementRef, renderer) {
        this.languageService = languageService;
        this.loginModalService = loginModalService;
        this.registerService = registerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.success = false;
        this.registerAccount = {};
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;
            this.languageService.getCurrent().then(function (key) {
                _this.registerAccount.langKey = key;
                _this.registerService.save(_this.registerAccount).subscribe(function () {
                    _this.success = true;
                }, function (response) { return _this.processError(response); });
            });
        }
    };
    RegisterComponent.prototype.openLogin = function () {
        this.modalRef = this.loginModalService.open();
    };
    RegisterComponent.prototype.processError = function (response) {
        this.success = null;
        if (response.status === 400 && response._body === 'login already in use') {
            this.errorUserExists = 'ERROR';
        }
        else if (response.status === 400 && response._body === 'email address already in use') {
            this.errorEmailExists = 'ERROR';
        }
        else {
            this.error = 'ERROR';
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-register',
        template: __webpack_require__("./src/main/webapp/app/account/register/register.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        shared_1.LoginModalService,
        register_service_1.Register,
        core_1.ElementRef,
        core_1.Renderer])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var register_component_1 = __webpack_require__("./src/main/webapp/app/account/register/register.component.ts");
exports.registerRoute = {
    path: 'register',
    component: register_component_1.RegisterComponent,
    data: {
        authorities: [],
        pageTitle: 'register.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var Register = (function () {
    function Register(http) {
        this.http = http;
    }
    Register.prototype.save = function (account) {
        return this.http.post('api/register', account);
    };
    return Register;
}());
Register = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Register);
exports.Register = Register;


/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h2 jhiTranslate=\"settings.title\" translateValues=\"{username: '{{settingsAccount.login}}'}\" *ngIf=\"settingsAccount\">User settings for [<b>{{settingsAccount.login}}</b>]</h2> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"settings.messages.success\"> <strong>Settings saved!</strong> </div> <jhi-alert-error></jhi-alert-error> <form name=\"form\" role=\"form\" (ngSubmit)=\"save()\" #settingsForm=\"ngForm\" *ngIf=\"settingsAccount\" novalidate> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"firstName\" jhiTranslate=\"settings.form.firstname\">First Name</label> <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"{{'settings.form.firstname.placeholder' | translate}}\" [(ngModel)]=\"settingsAccount.firstName\" minlength=\"1\" maxlength=\"50\" #firstNameInput=\"ngModel\" required> <div *ngIf=\"firstNameInput.dirty && firstNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.required\" jhiTranslate=\"settings.messages.validate.firstname.required\"> Your first name is required. </small> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.minlength\" jhiTranslate=\"settings.messages.validate.firstname.minlength\"> Your first name is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.maxlength\" jhiTranslate=\"settings.messages.validate.firstname.maxlength\"> Your first name cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"lastName\" jhiTranslate=\"settings.form.lastname\">Last Name</label> <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"{{'settings.form.lastname.placeholder' | translate}}\" [(ngModel)]=\"settingsAccount.lastName\" minlength=\"1\" maxlength=\"50\" #lastNameInput=\"ngModel\" required> <div *ngIf=\"lastNameInput.dirty && lastNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.required\" jhiTranslate=\"settings.messages.validate.lastname.required\"> Your last name is required. </small> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.minlength\" jhiTranslate=\"settings.messages.validate.lastname.minlength\"> Your last name is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.maxlength\" jhiTranslate=\"settings.messages.validate.lastname.maxlength\"> Your last name cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\" jhiTranslate=\"global.form.email\">Email</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"{{'global.form.email.placeholder' | translate}}\" [(ngModel)]=\"settingsAccount.email\" minlength=\"5\" maxlength=\"100\" #emailInput=\"ngModel\" required> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\" jhiTranslate=\"global.messages.validate.email.required\"> Your email is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your email is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.minlength\" jhiTranslate=\"global.messages.validate.email.minlength\"> Your email is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.email.maxlength\"> Your email cannot be longer than 100 characters. </small> </div> </div> <div class=\"form-group\" *ngIf=\"languages && languages.length > 0\"> <label for=\"langKey\" jhiTranslate=\"settings.form.language\">Language</label> <select class=\"form-control\" id=\"langKey\" name=\"langKey\" [(ngModel)]=\"settingsAccount.langKey\"> <option *ngFor=\"let language of languages\" [value]=\"language\">{{language | findLanguageFromKey}}</option> </select> </div> <button type=\"submit\" [disabled]=\"settingsForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"settings.form.button\">Save</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var SettingsComponent = (function () {
    function SettingsComponent(account, principal, languageService, languageHelper) {
        this.account = account;
        this.principal = principal;
        this.languageService = languageService;
        this.languageHelper = languageHelper;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.settingsAccount = _this.copyAccount(account);
        });
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
    };
    SettingsComponent.prototype.save = function () {
        var _this = this;
        this.account.save(this.settingsAccount).subscribe(function () {
            _this.error = null;
            _this.success = 'OK';
            _this.principal.identity(true).then(function (account) {
                _this.settingsAccount = _this.copyAccount(account);
            });
            _this.languageService.getCurrent().then(function (current) {
                if (_this.settingsAccount.langKey !== current) {
                    _this.languageService.changeLanguage(_this.settingsAccount.langKey);
                }
            });
        }, function () {
            _this.success = null;
            _this.error = 'ERROR';
        });
    };
    SettingsComponent.prototype.copyAccount = function (account) {
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-settings',
        template: __webpack_require__("./src/main/webapp/app/account/settings/settings.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.AccountService,
        shared_1.Principal,
        ng_jhipster_1.JhiLanguageService,
        shared_1.JhiLanguageHelper])
], SettingsComponent);
exports.SettingsComponent = SettingsComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var settings_component_1 = __webpack_require__("./src/main/webapp/app/account/settings/settings.component.ts");
exports.settingsRoute = {
    path: 'settings',
    component: settings_component_1.SettingsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'global.menu.account.settings'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */
var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var JhipsterdemoAdminModule = (function () {
    function JhipsterdemoAdminModule() {
    }
    return JhipsterdemoAdminModule;
}());
JhipsterdemoAdminModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.JhipsterdemoSharedModule,
            router_1.RouterModule.forRoot(_1.adminState, { useHash: true }),
        ],
        declarations: [
            _1.AuditsComponent,
            _1.UserMgmtComponent,
            _1.UserDialogComponent,
            _1.UserDeleteDialogComponent,
            _1.UserMgmtDetailComponent,
            _1.UserMgmtDialogComponent,
            _1.UserMgmtDeleteDialogComponent,
            _1.LogsComponent,
            _1.JhiConfigurationComponent,
            _1.JhiHealthCheckComponent,
            _1.JhiHealthModalComponent,
            _1.JhiDocsComponent,
            _1.JhiMetricsMonitoringComponent,
            _1.JhiMetricsMonitoringModalComponent
        ],
        entryComponents: [
            _1.UserMgmtDialogComponent,
            _1.UserMgmtDeleteDialogComponent,
            _1.JhiHealthModalComponent,
            _1.JhiMetricsMonitoringModalComponent,
        ],
        providers: [
            _1.AuditsService,
            _1.JhiConfigurationService,
            _1.JhiHealthService,
            _1.JhiMetricsService,
            _1.LogsService,
            _1.UserResolvePagingParams,
            _1.UserResolve,
            _1.UserModalService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], JhipsterdemoAdminModule);
exports.JhipsterdemoAdminModule = JhipsterdemoAdminModule;


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ADMIN_ROUTES = [
    _1.auditsRoute,
    _1.configurationRoute,
    _1.docsRoute,
    _1.healthRoute,
    _1.logsRoute
].concat(_1.userMgmtRoute, [
    _1.metricsRoute
]);
exports.adminState = [{
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [shared_1.UserRouteAccessService],
        children: ADMIN_ROUTES
    }].concat(_1.userDialogRoute);


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audit-data.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AuditData = (function () {
    function AuditData(remoteAddress, sessionId) {
        this.remoteAddress = remoteAddress;
        this.sessionId = sessionId;
    }
    return AuditData;
}());
exports.AuditData = AuditData;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audit.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Audit = (function () {
    function Audit(data, principal, timestamp, type) {
        this.data = data;
        this.principal = principal;
        this.timestamp = timestamp;
        this.type = type;
    }
    return Audit;
}());
exports.Audit = Audit;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"audits\"> <h2 jhiTranslate=\"audits.title\">Audits</h2> <div class=\"row\"> <div class=\"col-md-5\"> <h4 jhiTranslate=\"audits.filter.title\">Filter by date</h4> <p class=\"d-flex\"> <span jhiTranslate=\"audits.filter.from\" class=\"input-group-addon\">from</span> <input type=\"date\" class=\"form-control\" name=\"start\" [(ngModel)]=\"fromDate\" (ngModelChange)=\"onChangeDate($event)\" required/> <span jhiTranslate=\"audits.filter.to\" class=\"input-group-addon\">to</span> <input type=\"date\" class=\"form-control\" name=\"end\" [(ngModel)]=\"toDate\" (ngModelChange)=\"onChangeDate($event)\" required/> </p> </div> </div> <div class=\"table-responsive\"> <table class=\"table table-condensed table-striped table-bordered\"> <thead> <tr> <th (click)=\"orderProp = 'timestamp'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.date\">Date</span></th> <th (click)=\"orderProp = 'principal'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.principal\">User</span></th> <th (click)=\"orderProp = 'type'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.status\">State</span></th> <th (click)=\"orderProp = 'data.message'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.data\">Extra data</span></th> </tr> </thead> <tr *ngFor=\"let audit of getAudits()\"> <td><span>{{audit.timestamp| date:'medium'}}</span></td> <td><small>{{audit.principal}}</small></td> <td>{{audit.type}}</td> <td> <span *ngIf=\"audit.data\" ng-show=\"audit.data.message\">{{audit.data.message}}</span> <span *ngIf=\"audit.data\" ng-show=\"audit.data.remoteAddress\"><span jhiTranslate=\"audits.table.data.remoteAddress\">Remote Address</span> {{audit.data.remoteAddress}}</span> </td> </tr> </table> </div> <div *ngIf=\"audits\"> <div class=\"row justify-content-center\"> <jhi-item-count [page]=\"page\" [total]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count> </div> <div class=\"row justify-content-center\"> <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(11);
var ng_jhipster_1 = __webpack_require__(2);
var audits_service_1 = __webpack_require__("./src/main/webapp/app/admin/audits/audits.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var AuditsComponent = (function () {
    function AuditsComponent(auditsService, parseLinks, paginationConfig, datePipe) {
        this.auditsService = auditsService;
        this.parseLinks = parseLinks;
        this.paginationConfig = paginationConfig;
        this.datePipe = datePipe;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.page = 1;
        this.reverse = false;
        this.orderProp = 'timestamp';
    }
    AuditsComponent.prototype.getAudits = function () {
        return this.sortAudits(this.audits);
    };
    AuditsComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.onChangeDate();
    };
    AuditsComponent.prototype.ngOnInit = function () {
        this.today();
        this.previousMonth();
        this.onChangeDate();
    };
    AuditsComponent.prototype.onChangeDate = function () {
        var _this = this;
        this.auditsService.query({ page: this.page - 1, size: this.itemsPerPage,
            fromDate: this.fromDate, toDate: this.toDate }).subscribe(function (res) {
            _this.audits = res.json();
            _this.links = _this.parseLinks.parse(res.headers.get('link'));
            _this.totalItems = +res.headers.get('X-Total-Count');
        });
    };
    AuditsComponent.prototype.previousMonth = function () {
        var dateFormat = 'yyyy-MM-dd';
        var fromDate = new Date();
        if (fromDate.getMonth() === 0) {
            fromDate = new Date(fromDate.getFullYear() - 1, 11, fromDate.getDate());
        }
        else {
            fromDate = new Date(fromDate.getFullYear(), fromDate.getMonth() - 1, fromDate.getDate());
        }
        this.fromDate = this.datePipe.transform(fromDate, dateFormat);
    };
    AuditsComponent.prototype.today = function () {
        var dateFormat = 'yyyy-MM-dd';
        // Today + 1 day - needed if the current day must be included
        var today = new Date();
        today.setDate(today.getDate() + 1);
        var date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        this.toDate = this.datePipe.transform(date, dateFormat);
    };
    AuditsComponent.prototype.sortAudits = function (audits) {
        var _this = this;
        audits = audits.slice(0).sort(function (a, b) {
            if (a[_this.orderProp] < b[_this.orderProp]) {
                return -1;
            }
            else if (true) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return this.reverse ? audits.reverse() : audits;
    };
    return AuditsComponent;
}());
AuditsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-audit',
        template: __webpack_require__("./src/main/webapp/app/admin/audits/audits.component.html")
    }),
    __metadata("design:paramtypes", [audits_service_1.AuditsService,
        ng_jhipster_1.JhiParseLinks,
        uib_pagination_config_1.PaginationConfig,
        common_1.DatePipe])
], AuditsComponent);
exports.AuditsComponent = AuditsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var audits_component_1 = __webpack_require__("./src/main/webapp/app/admin/audits/audits.component.ts");
exports.auditsRoute = {
    path: 'audits',
    component: audits_component_1.AuditsComponent,
    data: {
        pageTitle: 'audits.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var AuditsService = (function () {
    function AuditsService(http) {
        this.http = http;
    }
    AuditsService.prototype.query = function (req) {
        var params = new http_1.URLSearchParams();
        params.set('fromDate', req.fromDate);
        params.set('toDate', req.toDate);
        params.set('page', req.page);
        params.set('size', req.size);
        params.set('sort', req.sort);
        var options = {
            search: params
        };
        return this.http.get('management/audits', options);
    };
    return AuditsService;
}());
AuditsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuditsService);
exports.AuditsService = AuditsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allConfiguration && configuration\"> <h2 jhiTranslate=\"configuration.title\">Configuration</h2> <span jhiTranslate=\"configuration.filter\">Filter (by prefix)</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\"> <label>Spring configuration</label> <table class=\"table table-striped table-bordered table-responsive d-table\"> <thead> <tr> <th class=\"w-40\" (click)=\"orderProp = 'prefix'; reverse=!reverse\"><span jhiTranslate=\"configuration.table.prefix\">Prefix</span></th> <th class=\"w-60\" (click)=\"orderProp = 'properties'; reverse=!reverse\"><span jhiTranslate=\"configuration.table.properties\">Properties</span></th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of (configuration | pureFilter:filter:'prefix' | orderBy:orderProp:reverse)\"> <td><span>{{entry.prefix}}</span></td> <td> <div class=\"row\" *ngFor=\"let key of keys(entry.properties)\"> <div class=\"col-md-4\">{{key}}</div> <div class=\"col-md-8\"> <span class=\"float-right badge badge-default break\">{{entry.properties[key] | json}}</span> </div> </div> </td> </tr> </tbody> </table> <div *ngFor=\"let key of keys(allConfiguration)\"> <label><span>{{key}}</span></label> <table class=\"table table-sm table-striped table-bordered table-responsive d-table\"> <thead> <tr> <th class=\"w-40\">Property</th> <th class=\"w-60\">Value</th> </tr> </thead> <tbody> <tr *ngFor=\"let item of allConfiguration[key]\"> <td class=\"break\">{{item.key}}</td> <td class=\"break\"> <span class=\"float-right badge badge-default break\">{{item.val}}</span> </td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var configuration_service_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts");
var JhiConfigurationComponent = (function () {
    function JhiConfigurationComponent(configurationService) {
        this.configurationService = configurationService;
        this.allConfiguration = null;
        this.configuration = null;
        this.configKeys = [];
        this.filter = '';
        this.orderProp = 'prefix';
        this.reverse = false;
    }
    JhiConfigurationComponent.prototype.keys = function (dict) {
        return (dict === undefined) ? [] : Object.keys(dict);
    };
    JhiConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configurationService.get().subscribe(function (configuration) {
            _this.configuration = configuration;
            for (var _i = 0, configuration_1 = configuration; _i < configuration_1.length; _i++) {
                var config = configuration_1[_i];
                if (config.properties !== undefined) {
                    _this.configKeys.push(Object.keys(config.properties));
                }
            }
        });
        this.configurationService.getEnv().subscribe(function (configuration) {
            _this.allConfiguration = configuration;
        });
    };
    return JhiConfigurationComponent;
}());
JhiConfigurationComponent = __decorate([
    core_1.Component({
        selector: 'jhi-configuration',
        template: __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.html")
    }),
    __metadata("design:paramtypes", [configuration_service_1.JhiConfigurationService])
], JhiConfigurationComponent);
exports.JhiConfigurationComponent = JhiConfigurationComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var configuration_component_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts");
exports.configurationRoute = {
    path: 'jhi-configuration',
    component: configuration_component_1.JhiConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var JhiConfigurationService = (function () {
    function JhiConfigurationService(http) {
        this.http = http;
    }
    JhiConfigurationService.prototype.get = function () {
        return this.http.get('management/configprops').map(function (res) {
            var properties = [];
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    properties.push(propertiesObject[key]);
                }
            }
            return properties.sort(function (propertyA, propertyB) {
                return (propertyA.prefix === propertyB.prefix) ? 0 :
                    (propertyA.prefix < propertyB.prefix) ? -1 : 1;
            });
        });
    };
    JhiConfigurationService.prototype.getEnv = function () {
        return this.http.get('management/env').map(function (res) {
            var properties = {};
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    var valsObject = propertiesObject[key];
                    var vals = [];
                    for (var valKey in valsObject) {
                        if (valsObject.hasOwnProperty(valKey)) {
                            vals.push({ key: valKey, val: valsObject[valKey] });
                        }
                    }
                    properties[key] = vals;
                }
            }
            return properties;
        });
    };
    return JhiConfigurationService;
}());
JhiConfigurationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiConfigurationService);
exports.JhiConfigurationService = JhiConfigurationService;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe src=\"swagger-ui/index.html\" width=\"100%\" height=\"900\" seamless target=\"_top\" title=\"Swagger UI\" class=\"border-0\"></iframe> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var JhiDocsComponent = (function () {
    function JhiDocsComponent() {
    }
    return JhiDocsComponent;
}());
JhiDocsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-docs',
        template: __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.html")
    }),
    __metadata("design:paramtypes", [])
], JhiDocsComponent);
exports.JhiDocsComponent = JhiDocsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var docs_component_1 = __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts");
exports.docsRoute = {
    path: 'docs',
    component: docs_component_1.JhiDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\"> <h4 class=\"modal-title\" id=\"showHealthLabel\"> {{'health.indicator.' + baseName(currentHealth.name) | translate}} {{subSystemName(currentHealth.name)}} </h4> <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\" (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body pad\"> <div *ngIf=\"currentHealth.details\"> <h5 jhiTranslate=\"health.details.properties\">Properties</h5> <div class=\"table-responsive\"> <table class=\"table table-striped\"> <thead> <tr> <th class=\"text-left\" jhiTranslate=\"health.details.name\">Name</th> <th class=\"text-left\" jhiTranslate=\"health.details.value\">Value</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of currentHealth.details | keys\"> <td class=\"text-left\">{{entry.key}}</td> <td class=\"text-left\">{{readableValue(entry.value)}}</td> </tr> </tbody> </table> </div> </div> <div *ngIf=\"currentHealth.error\"> <h4 jhiTranslate=\"health.details.error\">Error</h4> <pre>{{currentHealth.error}}</pre> </div> </div> <div class=\"modal-footer\"> <button data-dismiss=\"modal\" class=\"btn btn-secondary float-left\" type=\"button\" (click)=\"activeModal.dismiss('closed')\">Done</button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var JhiHealthModalComponent = (function () {
    function JhiHealthModalComponent(healthService, activeModal) {
        this.healthService = healthService;
        this.activeModal = activeModal;
    }
    JhiHealthModalComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthModalComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    JhiHealthModalComponent.prototype.readableValue = function (value) {
        if (this.currentHealth.name !== 'diskSpace') {
            return value.toString();
        }
        // Should display storage space in an human readable unit
        var val = value / 1073741824;
        if (val > 1) {
            return val.toFixed(2) + ' GB';
        }
        else {
            return (value / 1048576).toFixed(2) + ' MB';
        }
    };
    return JhiHealthModalComponent;
}());
JhiHealthModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.html")
    }),
    __metadata("design:paramtypes", [health_service_1.JhiHealthService, ng_bootstrap_1.NgbActiveModal])
], JhiHealthModalComponent);
exports.JhiHealthModalComponent = JhiHealthModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span jhiTranslate=\"health.title\">Health Checks</span> <button class=\"btn btn-primary float-right\" (click)=\"refresh()\"> <span class=\"fa fa-refresh\"></span> <span jhiTranslate=\"health.refresh.button\">Refresh</span> </button> </h2> <div class=\"table-responsive\"> <table id=\"healthCheck\" class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"health.table.service\">Service Name</th> <th class=\"text-center\" jhiTranslate=\"health.table.status\">Status</th> <th class=\"text-center\" jhiTranslate=\"health.details.details\">Details</th> </tr> </thead> <tbody> <tr *ngFor=\"let health of healthData\"> <td>{{'health.indicator.' + baseName(health.name) | translate}} {{subSystemName(health.name)}}</td> <td class=\"text-center\"> <span class=\"badge\" [ngClass]=\"getBadgeClass(health.status)\" jhiTranslate=\"{{'health.status.' + health.status}}\"> {{health.status}} </span> </td> <td class=\"text-center\"> <a class=\"hand\" (click)=\"showHealth(health)\" *ngIf=\"health.details || health.error\"> <i class=\"fa fa-eye\"></i> </a> </td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var health_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts");
var JhiHealthCheckComponent = (function () {
    function JhiHealthCheckComponent(modalService, healthService) {
        this.modalService = modalService;
        this.healthService = healthService;
    }
    JhiHealthCheckComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiHealthCheckComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthCheckComponent.prototype.getBadgeClass = function (statusState) {
        if (statusState === 'UP') {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    };
    JhiHealthCheckComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingHealth = true;
        this.healthService.checkHealth().subscribe(function (health) {
            _this.healthData = _this.healthService.transformHealthData(health);
            _this.updatingHealth = false;
        }, function (error) {
            if (error.status === 503) {
                _this.healthData = _this.healthService.transformHealthData(error.json());
                _this.updatingHealth = false;
            }
        });
    };
    JhiHealthCheckComponent.prototype.showHealth = function (health) {
        var modalRef = this.modalService.open(health_modal_component_1.JhiHealthModalComponent);
        modalRef.componentInstance.currentHealth = health;
        modalRef.result.then(function (result) {
            // Left blank intentionally, nothing to do here
        }, function (reason) {
            // Left blank intentionally, nothing to do here
        });
    };
    JhiHealthCheckComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    return JhiHealthCheckComponent;
}());
JhiHealthCheckComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        health_service_1.JhiHealthService])
], JhiHealthCheckComponent);
exports.JhiHealthCheckComponent = JhiHealthCheckComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var health_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.component.ts");
exports.healthRoute = {
    path: 'jhi-health',
    component: health_component_1.JhiHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var JhiHealthService = (function () {
    function JhiHealthService(http) {
        this.http = http;
        this.separator = '.';
    }
    JhiHealthService.prototype.checkHealth = function () {
        return this.http.get('management/health').map(function (res) { return res.json(); });
    };
    JhiHealthService.prototype.transformHealthData = function (data) {
        var response = [];
        this.flattenHealthData(response, null, data);
        return response;
    };
    JhiHealthService.prototype.getBaseName = function (name) {
        if (name) {
            var split = name.split('.');
            return split[0];
        }
    };
    JhiHealthService.prototype.getSubSystemName = function (name) {
        if (name) {
            var split = name.split('.');
            split.splice(0, 1);
            var remainder = split.join('.');
            return remainder ? ' - ' + remainder : '';
        }
    };
    /* private methods */
    JhiHealthService.prototype.addHealthObject = function (result, isLeaf, healthObject, name) {
        var healthData = {
            name: name
        };
        var details = {};
        var hasDetails = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (key === 'status' || key === 'error') {
                    healthData[key] = value;
                }
                else {
                    if (!this.isHealthObject(value)) {
                        details[key] = value;
                        hasDetails = true;
                    }
                }
            }
        }
        // Add the details
        if (hasDetails) {
            healthData.details = details;
        }
        // Only add nodes if they provide additional information
        if (isLeaf || hasDetails || healthData.error) {
            result.push(healthData);
        }
        return healthData;
    };
    JhiHealthService.prototype.flattenHealthData = function (result, path, data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var value = data[key];
                if (this.isHealthObject(value)) {
                    if (this.hasSubSystem(value)) {
                        this.addHealthObject(result, false, value, this.getModuleName(path, key));
                        this.flattenHealthData(result, this.getModuleName(path, key), value);
                    }
                    else {
                        this.addHealthObject(result, true, value, this.getModuleName(path, key));
                    }
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.getModuleName = function (path, name) {
        var result;
        if (path && name) {
            result = path + this.separator + name;
        }
        else if (path) {
            result = path;
        }
        else if (name) {
            result = name;
        }
        else {
            result = '';
        }
        return result;
    };
    JhiHealthService.prototype.hasSubSystem = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (value && value.status) {
                    result = true;
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.isHealthObject = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                if (key === 'status') {
                    result = true;
                }
            }
        }
        return result;
    };
    return JhiHealthService;
}());
JhiHealthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiHealthService);
exports.JhiHealthService = JhiHealthService;


/***/ }),

/***/ "./src/main/webapp/app/admin/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audit.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audit-data.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/admin.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/log.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Log = (function () {
    function Log(name, level) {
        this.name = name;
        this.level = level;
    }
    return Log;
}());
exports.Log = Log;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\" *ngIf=\"loggers\"> <h2 jhiTranslate=\"logs.title\">Logs</h2> <p jhiTranslate=\"logs.nbloggers\" translateValues=\"{total: '{{ loggers.length }}'}\">There are {{ loggers.length }} loggers.</p> <span jhiTranslate=\"logs.filter\">Filter</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\"> <table class=\"table table-condensed table-striped table-bordered\"> <thead> <tr title=\"click to order\"> <th (click)=\"orderProp = 'name'; reverse=!reverse\"><span jhiTranslate=\"logs.table.name\">Name</span></th> <th (click)=\"orderProp = 'level'; reverse=!reverse\"><span jhiTranslate=\"logs.table.level\">Level</span></th> </tr> </thead> <tr *ngFor=\"let logger of (loggers | pureFilter:filter:'name' | orderBy:orderProp:reverse)\"> <td><small>{{logger.name | slice:0:140}}</small></td> <td> <button (click)=\"changeLevel(logger.name, 'TRACE')\" [ngClass]=\"(logger.level=='TRACE') ? 'btn-danger' : 'btn-secondary'\" class=\"btn btn-sm\">TRACE</button> <button (click)=\"changeLevel(logger.name, 'DEBUG')\" [ngClass]=\"(logger.level=='DEBUG') ? 'btn-warning' : 'btn-secondary'\" class=\"btn btn-sm\">DEBUG</button> <button (click)=\"changeLevel(logger.name, 'INFO')\" [ngClass]=\"(logger.level=='INFO') ? 'btn-info' : 'btn-secondary'\" class=\"btn btn-sm\">INFO</button> <button (click)=\"changeLevel(logger.name, 'WARN')\" [ngClass]=\"(logger.level=='WARN') ? 'btn-success' : 'btn-secondary'\" class=\"btn btn-sm\">WARN</button> <button (click)=\"changeLevel(logger.name, 'ERROR')\" [ngClass]=\"(logger.level=='ERROR') ? 'btn-primary' : 'btn-secondary'\" class=\"btn btn-sm\">ERROR</button> </td> </tr> </table> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var log_model_1 = __webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts");
var logs_service_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts");
var LogsComponent = (function () {
    function LogsComponent(logsService) {
        this.logsService = logsService;
        this.filter = '';
        this.orderProp = 'name';
        this.reverse = false;
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
    };
    LogsComponent.prototype.changeLevel = function (name, level) {
        var _this = this;
        var log = new log_model_1.Log(name, level);
        this.logsService.changeLevel(log).subscribe(function () {
            _this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
        });
    };
    return LogsComponent;
}());
LogsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-logs',
        template: __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.html"),
    }),
    __metadata("design:paramtypes", [logs_service_1.LogsService])
], LogsComponent);
exports.LogsComponent = LogsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logs_component_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts");
exports.logsRoute = {
    path: 'logs',
    component: logs_component_1.LogsComponent,
    data: {
        pageTitle: 'logs.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var LogsService = (function () {
    function LogsService(http) {
        this.http = http;
    }
    LogsService.prototype.changeLevel = function (log) {
        return this.http.put('management/logs', log);
    };
    LogsService.prototype.findAll = function () {
        return this.http.get('management/logs').map(function (res) { return res.json(); });
    };
    return LogsService;
}());
LogsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LogsService);
exports.LogsService = LogsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"modal-header\"> <h4 class=\"modal-title\" jhiTranslate=\"metrics.jvm.threads.dump.title\">Threads dump</h4> <button type=\"button\" class=\"close\" (click)=\"activeModal.dismiss('closed')\">&times;</button> </div> <div class=\"modal-body\"> <span class=\"badge badge-primary\" (click)=\"threadDumpFilter = {}\">All&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpAll}}</span></span>&nbsp; <span class=\"badge badge-success\" (click)=\"threadDumpFilter = {threadState: 'RUNNABLE'}\">Runnable&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpRunnable}}</span></span>&nbsp; <span class=\"badge badge-info\" (click)=\"threadDumpFilter = {threadState: 'WAITING'}\">Waiting&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpWaiting}}</span></span>&nbsp; <span class=\"badge badge-warning\" (click)=\"threadDumpFilter = {threadState: 'TIMED_WAITING'}\">Timed Waiting&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpTimedWaiting}}</span></span>&nbsp; <span class=\"badge badge-danger\" (click)=\"threadDumpFilter = {threadState: 'BLOCKED'}\">Blocked&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpBlocked}}</span></span>&nbsp; <div class=\"mt-2\">&nbsp;</div> Filter <input type=\"text\" [(ngModel)]=\"threadDumpFilter\" class=\"form-control\"> <div class=\"pad\" *ngFor=\"let entry of threadDump | pureFilter:threadDumpFilter:'lockName' | keys\"> <h6> <span class=\"badge\" [ngClass]=\"getBadgeClass(entry.value.threadState)\">{{entry.value.threadState}}</span>&nbsp;{{entry.value.threadName}} (ID {{entry.value.threadId}}) <a (click)=\"entry.show = !entry.show\" href=\"javascript:void(0);\"> <span [hidden]=\"entry.show\" jhiTranslate=\"metrics.jvm.threads.dump.show\">Show StackTrace</span> <span [hidden]=\"!entry.show\" jhiTranslate=\"metrics.jvm.threads.dump.hide\">Hide StackTrace</span> </a> </h6> <div class=\"card\" [hidden]=\"!entry.show\"> <div class=\"card-block\"> <div *ngFor=\"let st of entry.value.stackTrace | keys\" class=\"break\"> <samp>{{st.value.className}}.{{st.value.methodName}}(<code>{{st.value.fileName}}:{{st.value.lineNumber}}</code>)</samp> <span class=\"mt-1\"></span> </div> </div> </div> <table class=\"table table-sm table-responsive\"> <thead> <tr> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.blockedtime\">Blocked Time</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.blockedcount\">Blocked Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.waitedtime\">Waited Time</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.waitedcount\">Waited Count</th> <th jhiTranslate=\"metrics.jvm.threads.dump.lockname\">Lock Name</th> </tr> </thead> <tbody> <tr> <td>{{entry.value.blockedTime}}</td> <td>{{entry.value.blockedCount}}</td> <td>{{entry.value.waitedTime}}</td> <td>{{entry.value.waitedCount}}</td> <td><code>{{entry.value.lockName}}</code></td> </tr> </tbody> </table> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary pull-left\" data-dismiss=\"modal\" (click)=\"activeModal.dismiss('closed')\">Done</button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var JhiMetricsMonitoringModalComponent = (function () {
    function JhiMetricsMonitoringModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.threadDumpAll = 0;
        this.threadDumpBlocked = 0;
        this.threadDumpRunnable = 0;
        this.threadDumpTimedWaiting = 0;
        this.threadDumpWaiting = 0;
    }
    JhiMetricsMonitoringModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadDump.forEach(function (value) {
            if (value.threadState === 'RUNNABLE') {
                _this.threadDumpRunnable += 1;
            }
            else if (value.threadState === 'WAITING') {
                _this.threadDumpWaiting += 1;
            }
            else if (value.threadState === 'TIMED_WAITING') {
                _this.threadDumpTimedWaiting += 1;
            }
            else if (value.threadState === 'BLOCKED') {
                _this.threadDumpBlocked += 1;
            }
        });
        this.threadDumpAll = this.threadDumpRunnable + this.threadDumpWaiting +
            this.threadDumpTimedWaiting + this.threadDumpBlocked;
    };
    JhiMetricsMonitoringModalComponent.prototype.getBadgeClass = function (threadState) {
        if (threadState === 'RUNNABLE') {
            return 'badge-success';
        }
        else if (threadState === 'WAITING') {
            return 'badge-info';
        }
        else if (threadState === 'TIMED_WAITING') {
            return 'badge-warning';
        }
        else if (threadState === 'BLOCKED') {
            return 'badge-danger';
        }
    };
    return JhiMetricsMonitoringModalComponent;
}());
JhiMetricsMonitoringModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], JhiMetricsMonitoringModalComponent);
exports.JhiMetricsMonitoringModalComponent = JhiMetricsMonitoringModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span jhiTranslate=\"metrics.title\">Application Metrics</span> <button class=\"btn btn-primary float-right\" (click)=\"refresh()\"> <span class=\"fa fa-refresh\"></span> <span jhiTranslate=\"metrics.refresh.button\">Refresh</span> </button> </h2> <h3 jhiTranslate=\"metrics.jvm.title\">JVM Metrics</h3> <div class=\"row\" *ngIf=\"!updatingMetrics\"> <div class=\"col-md-4\"> <b jhiTranslate=\"metrics.jvm.memory.title\">Memory</b> <p><span jhiTranslate=\"metrics.jvm.memory.total\">Total Memory</span> ({{metrics.gauges['jvm.memory.total.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.total.max'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar type=\"success\" [max]=\"metrics.gauges['jvm.memory.total.max'].value\" [value]=\"metrics.gauges['jvm.memory.total.used'].value\" [striped]=\"true\" [animated]=\"true\"> <span>{{metrics.gauges['jvm.memory.total.used'].value * 100 / metrics.gauges['jvm.memory.total.max'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.memory.heap\">Heap Memory</span> ({{metrics.gauges['jvm.memory.heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.heap.max'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.heap.max'].value\" [value]=\"metrics.gauges['jvm.memory.heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.memory.heap.used'].value * 100 / metrics.gauges['jvm.memory.heap.max'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.memory.nonheap\">Non-Heap Memory</span> ({{metrics.gauges['jvm.memory.non-heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.non-heap.committed'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.non-heap.committed'].value\" [value]=\"metrics.gauges['jvm.memory.non-heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.memory.non-heap.used'].value * 100 / metrics.gauges['jvm.memory.non-heap.committed'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> <div class=\"col-md-4\"> <b jhiTranslate=\"metrics.jvm.threads.title\">Threads</b> (Total: {{metrics.gauges['jvm.threads.count'].value}}) <a class=\"hand\" (click)=\"refreshThreadDumpData()\" data-toggle=\"modal\" data-target=\"#threadDump\"><i class=\"fa fa-eye\"></i></a> <p><span jhiTranslate=\"metrics.jvm.threads.runnable\">Runnable</span> {{metrics.gauges['jvm.threads.runnable.count'].value}}</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.runnable.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.threads.runnable.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.threads.timedwaiting\">Timed Waiting</span> ({{metrics.gauges['jvm.threads.timed_waiting.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.timed_waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\"> <span>{{metrics.gauges['jvm.threads.timed_waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.threads.waiting\">Waiting</span> ({{metrics.gauges['jvm.threads.waiting.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\"> <span>{{metrics.gauges['jvm.threads.waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.threads.blocked\">Blocked</span> ({{metrics.gauges['jvm.threads.blocked.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.blocked.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.threads.blocked.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> <div class=\"col-md-4\"> <b jhiTranslate=\"metrics.jvm.gc.title\">Garbage collections</b> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-MarkSweep.count']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.marksweepcount\">Mark Sweep count</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.count'].value}}</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-MarkSweep.time']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.marksweeptime\">Mark Sweep time</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.time'].value}}ms</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-Scavenge.count']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.scavengecount\">Scavenge count</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.count'].value}}</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-Scavenge.time']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.scavengetime\">Scavenge time</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.time'].value}}ms</div> </div> </div> </div> <div class=\"well well-lg\" *ngIf=\"updatingMetrics\" jhiTranslate=\"metrics.updating\">Updating...</div> <h3 jhiTranslate=\"metrics.jvm.http.title\">HTTP requests (events per second)</h3> <p *ngIf=\"metrics.counters\"> <span jhiTranslate=\"metrics.jvm.http.active\">Active requests</span> <b>{{metrics.counters['com.codahale.metrics.servlet.InstrumentedFilter.activeRequests'].count | number:'1.0-0'}}</b> - <span jhiTranslate=\"metrics.jvm.http.total\">Total requests</span> <b>{{metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count | number:'1.0-0'}}</b> </p> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"metrics.jvm.http.table.code\">Code</th> <th jhiTranslate=\"metrics.jvm.http.table.count\">Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.http.table.mean\">Mean</th> <th class=\"text-right\"><span jhiTranslate=\"metrics.jvm.http.table.average\">Average</span> (1 min)</th> <th class=\"text-right\"><span jhiTranslate=\"metrics.jvm.http.table.average\">Average</span> (5 min)</th> <th class=\"text-right\"><span jhiTranslate=\"metrics.jvm.http.table.average\">Average</span> (15 min)</th> </tr> </thead> <tbody> <tr> <td jhiTranslate=\"metrics.jvm.http.code.ok\">OK</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].mean_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m1_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m5_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m15_rate) | number:'1.0-2'}} </td> </tr> <tr> <td jhiTranslate=\"metrics.jvm.http.code.notfound\">Not Found</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].mean_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m1_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m5_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m15_rate) | number:'1.0-2'}} </td> </tr> <tr> <td jhiTranslate=\"metrics.jvm.http.code.servererror\">Server error</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].mean_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m1_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m5_rate) | number:'1.0-2'}} </td> <td class=\"text-right\"> {{filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m15_rate) | number:'1.0-2'}} </td> </tr> </tbody> </table> </div> <h3 jhiTranslate=\"metrics.servicesstats.title\">Services statistics (time in millisecond)</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"metrics.servicesstats.table.name\">Service name</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.count\">Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.mean\">Mean</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.min\">Min</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p50\">p50</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p75\">p75</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p95\">p95</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p99\">p99</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.max\">Max</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of servicesStats | keys\"> <td>{{entry.key}}</td> <td class=\"text-right\">{{entry.value.count}}</td> <td class=\"text-right\">{{entry.value.mean * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.min * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p50 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p75 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p95 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p99 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.max * 1000 | number:'1.0-0'}}</td> </tr> </tbody> </table> </div> <h3 jhiTranslate=\"metrics.cache.title\">Cache statistics</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"metrics.cache.cachename\">Cache name</th> <th class=\"text-right\" data-translate=\"metrics.cache.hits\">Cache Hits</th> <th class=\"text-right\" data-translate=\"metrics.cache.misses\">Cache Misses</th> <th class=\"text-right\" data-translate=\"metrics.cache.gets\">Cache Gets</th> <th class=\"text-right\" data-translate=\"metrics.cache.puts\">Cache Puts</th> <th class=\"text-right\" data-translate=\"metrics.cache.removals\">Cache Removals</th> <th class=\"text-right\" data-translate=\"metrics.cache.evictions\">Cache Evictions</th> <th class=\"text-right\" data-translate=\"metrics.cache.hitPercent\">Cache Hit %</th> <th class=\"text-right\" data-translate=\"metrics.cache.missPercent\">Cache Miss %</th> <th class=\"text-right\" data-translate=\"metrics.cache.averageGetTime\">Average get time (µs)</th> <th class=\"text-right\" data-translate=\"metrics.cache.averagePutTime\">Average put time (µs)</th> <th class=\"text-right\" data-translate=\"metrics.cache.averageRemoveTime\">Average remove time (µs)</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of cachesStats | keys\"> <td>{{entry.key}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-hits'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-misses'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-gets'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-puts'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-removals'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-evictions'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-hit-percentage'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-miss-percentage'].value }}</td> <td class=\"text-right\">{{filterNaN(metrics.gauges[entry.key + '.average-get-time'].value) | number : '1.2-2' }}</td> <td class=\"text-right\">{{filterNaN(metrics.gauges[entry.key + '.average-put-time'].value) | number : '1.2-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.gauges[entry.key + '.average-remove-time'].value) | number : '1.2-2' }}</td> </tr> </tbody> </table> </div> <h3 jhiTranslate=\"metrics.datasource.title\" *ngIf=\"metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\">DataSource statistics (time in millisecond)</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics && metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\"> <table class=\"table table-striped\"> <thead> <tr> <th><span jhiTranslate=\"metrics.datasource.usage\">Usage</span> ({{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value}} / {{metrics.gauges['HikariPool-1.pool.TotalConnections'].value}})</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.count\">Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.mean\">Mean</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.min\">Min</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p50\">p50</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p75\">p75</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p95\">p95</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p99\">p99</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.max\">Max</th> </tr> </thead> <tbody> <tr> <td> <div class=\"progress progress-striped\"> <ngb-progressbar [max]=\"metrics.gauges['HikariPool-1.pool.TotalConnections'].value\" [value]=\"metrics.gauges['HikariPool-1.pool.ActiveConnections'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value * 100 / metrics.gauges['HikariPool-1.pool.TotalConnections'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> </td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].count}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].mean) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].min) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p50) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p75) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p95) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p99) | number:'1.0-2'}}</td> <td class=\"text-right\">{{filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].max) | number:'1.0-2'}}</td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var metrics_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts");
var metrics_service_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts");
var JhiMetricsMonitoringComponent = (function () {
    function JhiMetricsMonitoringComponent(modalService, metricsService) {
        this.modalService = modalService;
        this.metricsService = metricsService;
        this.metrics = {};
        this.cachesStats = {};
        this.servicesStats = {};
        this.updatingMetrics = true;
        this.JCACHE_KEY = 'jcache.statistics';
    }
    JhiMetricsMonitoringComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiMetricsMonitoringComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingMetrics = true;
        this.metricsService.getMetrics().subscribe(function (metrics) {
            _this.metrics = metrics;
            _this.updatingMetrics = false;
            _this.servicesStats = {};
            _this.cachesStats = {};
            Object.keys(metrics.timers).forEach(function (key) {
                var value = metrics.timers[key];
                if (key.indexOf('web.rest') !== -1 || key.indexOf('service') !== -1) {
                    _this.servicesStats[key] = value;
                }
            });
            Object.keys(metrics.gauges).forEach(function (key) {
                if (key.indexOf('jcache.statistics') !== -1) {
                    var value = metrics.gauges[key].value;
                    // remove gets or puts
                    var index = key.lastIndexOf('.');
                    var newKey = key.substr(0, index);
                    // Keep the name of the domain
                    _this.cachesStats[newKey] = {
                        'name': _this.JCACHE_KEY.length,
                        'value': value
                    };
                }
            });
        });
    };
    JhiMetricsMonitoringComponent.prototype.refreshThreadDumpData = function () {
        var _this = this;
        this.metricsService.threadDump().subscribe(function (data) {
            var modalRef = _this.modalService.open(metrics_modal_component_1.JhiMetricsMonitoringModalComponent, { size: 'lg' });
            modalRef.componentInstance.threadDump = data;
            modalRef.result.then(function (result) {
                // Left blank intentionally, nothing to do here
            }, function (reason) {
                // Left blank intentionally, nothing to do here
            });
        });
    };
    JhiMetricsMonitoringComponent.prototype.filterNaN = function (input) {
        if (isNaN(input)) {
            return 0;
        }
        return input;
    };
    return JhiMetricsMonitoringComponent;
}());
JhiMetricsMonitoringComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        metrics_service_1.JhiMetricsService])
], JhiMetricsMonitoringComponent);
exports.JhiMetricsMonitoringComponent = JhiMetricsMonitoringComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metrics_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts");
exports.metricsRoute = {
    path: 'jhi-metrics',
    component: metrics_component_1.JhiMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var JhiMetricsService = (function () {
    function JhiMetricsService(http) {
        this.http = http;
    }
    JhiMetricsService.prototype.getMetrics = function () {
        return this.http.get('management/metrics').map(function (res) { return res.json(); });
    };
    JhiMetricsService.prototype.threadDump = function () {
        return this.http.get('management/dump').map(function (res) { return res.json(); });
    };
    return JhiMetricsService;
}());
JhiMetricsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiMetricsService);
exports.JhiMetricsService = JhiMetricsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"deleteForm\" (ngSubmit)=\"confirmDelete(user.login)\"> <div class=\"modal-header\"> <h4 class=\"modal-title\" jhiTranslate=\"entity.delete.title\">Confirm delete operation</h4> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"clear()\">&times;</button> </div> <div class=\"modal-body\"> <jhi-alert-error></jhi-alert-error> <p jhiTranslate=\"userManagement.delete.question\" translateValues=\"{login: '{{user.login}}'}\">Are you sure you want to delete this User?</p> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\"> <span class=\"fa fa-ban\"></span>&nbsp;<span jhiTranslate=\"entity.action.cancel\">Cancel</span> </button> <button type=\"submit\" class=\"btn btn-danger\"> <span class=\"fa fa-remove\"></span>&nbsp;<span jhiTranslate=\"entity.action.delete\">Delete</span> </button> </div> </form> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var ng_bootstrap_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(2);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var user_modal_service_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts");
var UserMgmtDeleteDialogComponent = (function () {
    function UserMgmtDeleteDialogComponent(userService, activeModal, alertService, eventManager) {
        this.userService = userService;
        this.activeModal = activeModal;
        this.alertService = alertService;
        this.eventManager = eventManager;
    }
    UserMgmtDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    UserMgmtDeleteDialogComponent.prototype.confirmDelete = function (login) {
        var _this = this;
        this.userService.delete(login).subscribe(function (response) {
            _this.eventManager.broadcast({ name: 'userListModification',
                content: 'Deleted a user' });
            _this.activeModal.dismiss(true);
        });
        this.alertService.success('userManagement.deleted', { param: login }, null);
    };
    return UserMgmtDeleteDialogComponent;
}());
UserMgmtDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-delete-dialog',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.JhiAlertService,
        ng_jhipster_1.JhiEventManager])
], UserMgmtDeleteDialogComponent);
exports.UserMgmtDeleteDialogComponent = UserMgmtDeleteDialogComponent;
var UserDeleteDialogComponent = (function () {
    function UserDeleteDialogComponent(route, userModalService) {
        this.route = route;
        this.userModalService = userModalService;
    }
    UserDeleteDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.userModalService.open(UserMgmtDeleteDialogComponent, params['login']);
        });
    };
    UserDeleteDialogComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return UserDeleteDialogComponent;
}());
UserDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-delete-dialog',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_modal_service_1.UserModalService])
], UserDeleteDialogComponent);
exports.UserDeleteDialogComponent = UserDeleteDialogComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\"> <h2> <span jhiTranslate=\"userManagement.detail.title\">User</span> [<b>{{user.login}}</b>] </h2> <dl class=\"row-md jh-entity-details\"> <dt><span jhiTranslate=\"userManagement.login\">Login</span></dt> <dd> <span>{{user.login}}</span> <span class=\"badge badge-danger\" *ngIf=\"!user.activated\" jhiTranslate=\"userManagement.deactivated\">Deactivated</span> <span class=\"badge badge-success\" *ngIf=\"user.activated\" jhiTranslate=\"userManagement.activated\">Activated</span> </dd> <dt><span jhiTranslate=\"userManagement.firstName\">First Name</span></dt> <dd>{{user.firstName}}</dd> <dt><span jhiTranslate=\"userManagement.lastName\">Last Name</span></dt> <dd>{{user.lastName}}</dd> <dt><span jhiTranslate=\"userManagement.email\">Email</span></dt> <dd>{{user.email}}</dd> <dt><span jhiTranslate=\"userManagement.langKey\">Lang Key</span></dt> <dd>{{user.langKey}}</dd> <dt><span jhiTranslate=\"userManagement.createdBy\">Created By</span></dt> <dd>{{user.createdBy}}</dd> <dt><span jhiTranslate=\"userManagement.createdDate\">Created Date</span></dt> <dd>{{user.createdDate | date:'dd/MM/yy HH:mm' }}</dd> <dt><span jhiTranslate=\"userManagement.lastModifiedBy\">Last Modified By</span></dt> <dd>{{user.lastModifiedBy}}</dd> <dt><span jhiTranslate=\"userManagement.lastModifiedDate\">Last Modified Date</span></dt> <dd>{{user.lastModifiedDate | date:'dd/MM/yy HH:mm'}}</dd> <dt><span jhiTranslate=\"userManagement.profiles\">Profiles</span></dt> <dd> <ul class=\"list-unstyled\"> <li *ngFor=\"let authority of user.authorities\"> <span class=\"badge badge-info\">{{authority}}</span> </li> </ul> </dd> </dl> <button type=\"submit\" routerLink=\"/user-management\" class=\"btn btn-info\"> <span class=\"fa fa-arrow-left\"></span>&nbsp;<span jhiTranslate=\"entity.action.back\"> Back</span> </button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserMgmtDetailComponent = (function () {
    function UserMgmtDetailComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserMgmtDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['login']);
        });
    };
    UserMgmtDetailComponent.prototype.load = function (login) {
        var _this = this;
        this.userService.find(login).subscribe(function (user) {
            _this.user = user;
        });
    };
    UserMgmtDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return UserMgmtDetailComponent;
}());
UserMgmtDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-detail',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        router_1.ActivatedRoute])
], UserMgmtDetailComponent);
exports.UserMgmtDetailComponent = UserMgmtDetailComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\"> <div class=\"modal-header\"> <h4 class=\"modal-title\" id=\"myUserLabel\" jhiTranslate=\"userManagement.home.createOrEditLabel\"> Create or edit a User</h4> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"clear()\">&times;</button> </div> <div class=\"modal-body\"> <jhi-alert-error></jhi-alert-error> <div class=\"form-group\"> <label jhiTranslate=\"global.field.id\">ID</label> <input type=\"text\" class=\"form-control\" name=\"id\" [(ngModel)]=\"user.id\" readonly=\"readonly\"> </div> <div class=\"form-group\"> <label class=\"form-control-label\" jhiTranslate=\"userManagement.login\">Login</label> <input type=\"text\" class=\"form-control\" name=\"login\" #loginInput=\"ngModel\" [(ngModel)]=\"user.login\" required minlength=\"1\" maxlength=\"50\" pattern=\"^[_'.@A-Za-z0-9-]*$\"> <div *ngIf=\"loginInput.dirty && loginInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"loginInput.errors.required\" jhiTranslate=\"entity.validation.required\"> This field is required. </small> <small class=\"form-text text-danger\" *ngIf=\"loginInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"50\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" jhiTranslate=\"userManagement.firstName\">First Name</label> <input type=\"text\" class=\"form-control\" name=\"firstName\" #firstNameInput=\"ngModel\" [(ngModel)]=\"user.firstName\" maxlength=\"50\"> <div *ngIf=\"firstNameInput.dirty && firstNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"50\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label jhiTranslate=\"userManagement.lastName\">Last Name</label> <input type=\"text\" class=\"form-control\" name=\"lastName\" #lastNameInput=\"ngModel\" [(ngModel)]=\"user.lastName\" maxlength=\"50\"> <div *ngIf=\"lastNameInput.dirty && lastNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"50\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" jhiTranslate=\"userManagement.email\">Email</label> <input type=\"email\" class=\"form-control\" name=\"email\" #emailInput=\"ngModel\" [(ngModel)]=\"user.email\" minlength=\"5\" required maxlength=\"100\"> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\" jhiTranslate=\"entity.validation.required\"> This field is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"100\"> This field cannot be longer than 100 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.minlength\" jhiTranslate=\"entity.validation.minlength\" translate-value-min=\"5\"> This field is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your email is invalid. </small> </div> </div> <div class=\"form-check\"> <label class=\"form-check-label\" for=\"activated\"> <input class=\"form-check-input\" [disabled]=\"user.id === null\" type=\"checkbox\" id=\"activated\" name=\"activated\" [(ngModel)]=\"user.activated\"> <span jhiTranslate=\"userManagement.activated\">Activated</span> </label> </div> <div class=\"form-group\" *ngIf=\"languages && languages.length > 0\"> <label jhiTranslate=\"userManagement.langKey\">Lang Key</label> <select class=\"form-control\" id=\"langKey\" name=\"langKey\" [(ngModel)]=\"user.langKey\"> <option *ngFor=\"let language of languages\" [value]=\"language\">{{language | findLanguageFromKey}}</option> </select> </div> <div class=\"form-group\"> <label jhiTranslate=\"userManagement.profiles\">Profiles</label> <select class=\"form-control\" multiple=\"multiple\" name=\"authority\" [(ngModel)]=\"user.authorities\"> <option *ngFor=\"let authority of authorities\" [value]=\"authority\">{{authority}}</option> </select> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\"> <span class=\"fa fa-ban\"></span>&nbsp;<span jhiTranslate=\"entity.action.cancel\">Cancel</span> </button> <button type=\"submit\" [disabled]=\"editForm.form.invalid || isSaving\" class=\"btn btn-primary\"> <span class=\"fa fa-floppy-o\"></span>&nbsp;<span jhiTranslate=\"entity.action.save\">Save</span> </button> </div> </form> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var ng_bootstrap_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(2);
var user_modal_service_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserMgmtDialogComponent = (function () {
    function UserMgmtDialogComponent(activeModal, languageHelper, userService, alertService, eventManager) {
        this.activeModal = activeModal;
        this.languageHelper = languageHelper;
        this.userService = userService;
        this.alertService = alertService;
        this.eventManager = eventManager;
    }
    UserMgmtDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.authorities = [];
        this.userService.authorities().subscribe(function (authorities) {
            _this.authorities = authorities;
        });
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
    };
    UserMgmtDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    UserMgmtDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.user.id !== null) {
            this.userService.update(this.user).subscribe(function (response) { return _this.onSaveSuccess(response, false); }, function () { return _this.onSaveError(); });
        }
        else {
            this.userService.create(this.user).subscribe(function (response) { return _this.onSaveSuccess(response, true); }, function () { return _this.onSaveError(); });
        }
    };
    UserMgmtDialogComponent.prototype.onSaveSuccess = function (result, isCreated) {
        this.alertService.success(isCreated ? 'userManagement.created'
            : 'userManagement.updated', { param: result.json.login }, null);
        this.eventManager.broadcast({ name: 'userListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    };
    UserMgmtDialogComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    return UserMgmtDialogComponent;
}());
UserMgmtDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-dialog',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        shared_1.JhiLanguageHelper,
        shared_1.UserService,
        ng_jhipster_1.JhiAlertService,
        ng_jhipster_1.JhiEventManager])
], UserMgmtDialogComponent);
exports.UserMgmtDialogComponent = UserMgmtDialogComponent;
var UserDialogComponent = (function () {
    function UserDialogComponent(route, userModalService) {
        this.route = route;
        this.userModalService = userModalService;
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['login']) {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent, params['login']);
            }
            else {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent);
            }
        });
    };
    UserDialogComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return UserDialogComponent;
}());
UserDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-dialog',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_modal_service_1.UserModalService])
], UserDialogComponent);
exports.UserDialogComponent = UserDialogComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span jhiTranslate=\"userManagement.home.title\">Users</span> <button class=\"btn btn-primary float-right\" [routerLink]=\"['/', { outlets: { popup: ['user-management-new'] } }]\"> <span class=\"fa fa-plus\"></span> <span jhiTranslate=\"userManagement.home.createLabel\">Create a new User</span> </button> </h2> <jhi-alert></jhi-alert> <div class=\"table-responsive\" *ngIf=\"users\"> <table class=\"table table-striped\"> <thead> <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"transition.bind(this)\"> <th jhiSortBy=\"id\"><span jhiTranslate=\"global.field.id\">ID</span><span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"login\"><span jhiTranslate=\"userManagement.login\">Login</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"email\"><span jhiTranslate=\"userManagement.email\">Email</span> <span class=\"fa fa-sort\"></span></th> <th></th> <th jhiSortBy=\"langKey\"> <span jhiTranslate=\"userManagement.langKey\">Lang Key</span> <span class=\"fa fa-sort\"></span></th> <th><span jhiTranslate=\"userManagement.profiles\">Profiles</span></th> <th jhiSortBy=\"createdDate\"><span jhiTranslate=\"userManagement.createdDate\">Created Date</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"lastModifiedBy\"><span jhiTranslate=\"userManagement.lastModifiedBy\">Last Modified By</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"lastModifiedDate\"><span jhiTranslate=\"userManagement.lastModifiedDate\">Last Modified Date</span> <span class=\"fa fa-sort\"></span></th> <th></th> </tr> </thead> <tbody *ngIf=\"users\"> <tr *ngFor=\"let user of users; trackBy: trackIdentity\"> <td><a [routerLink]=\"['../user-management', user.login]\">{{user.id}}</a></td> <td>{{user.login}}</td> <td>{{user.email}}</td> <td> <button class=\"btn btn-danger btn-sm\" (click)=\"setActive(user, true)\" *ngIf=\"!user.activated\" jhiTranslate=\"userManagement.deactivated\">Deactivated</button> <button class=\"btn btn-success btn-sm\" (click)=\"setActive(user, false)\" *ngIf=\"user.activated\" [disabled]=\"currentAccount.login === user.login\" jhiTranslate=\"userManagement.activated\">Activated</button> </td> <td>{{user.langKey}}</td> <td> <div *ngFor=\"let authority of user.authorities\"> <span class=\"badge badge-info\">{{ authority }}</span> </div> </td> <td>{{user.createdDate | date:'dd/MM/yy HH:mm'}}</td> <td>{{user.lastModifiedBy}}</td> <td>{{user.lastModifiedDate | date:'dd/MM/yy HH:mm'}}</td> <td class=\"text-right\"> <div class=\"btn-group flex-btn-group-container\"> <button type=\"submit\" [routerLink]=\"['../user-management', user.login]\" class=\"btn btn-info btn-sm\"> <span class=\"fa fa-eye\"></span> <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.view\">View</span> </button> <button type=\"submit\" [routerLink]=\"['/', { outlets: { popup: 'user-management/'+ user.login + '/edit'} }]\" replaceUrl=\"true\" class=\"btn btn-primary btn-sm\"> <span class=\"fa fa-pencil\"></span> <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.edit\">Edit</span> </button> <button type=\"submit\" [routerLink]=\"['/', { outlets: { popup: 'user-management/'+ user.login + '/delete'} }]\" replaceUrl=\"true\" class=\"btn btn-danger btn-sm\" [disabled]=\"currentAccount.login === user.login\"> <span class=\"fa fa-remove\"></span> <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.delete\">Delete</span> </button> </div> </td> </tr> </tbody> </table> </div> <div *ngIf=\"users\"> <div class=\"row justify-content-center\"> <jhi-item-count [page]=\"page\" [total]=\"queryCount\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count> </div> <div class=\"row justify-content-center\"> <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var ng_jhipster_1 = __webpack_require__(2);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var UserMgmtComponent = (function () {
    function UserMgmtComponent(userService, parseLinks, alertService, principal, eventManager, paginationUtil, paginationConfig, activatedRoute, router) {
        var _this = this;
        this.userService = userService;
        this.parseLinks = parseLinks;
        this.alertService = alertService;
        this.principal = principal;
        this.eventManager = eventManager;
        this.paginationUtil = paginationUtil;
        this.paginationConfig = paginationConfig;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(function (data) {
            _this.page = data['pagingParams'].page;
            _this.previousPage = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
    }
    UserMgmtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
            _this.loadAll();
            _this.registerChangeInUsers();
        });
    };
    UserMgmtComponent.prototype.ngOnDestroy = function () {
        this.routeData.unsubscribe();
    };
    UserMgmtComponent.prototype.registerChangeInUsers = function () {
        var _this = this;
        this.eventManager.subscribe('userListModification', function (response) { return _this.loadAll(); });
    };
    UserMgmtComponent.prototype.setActive = function (user, isActivated) {
        var _this = this;
        user.activated = isActivated;
        this.userService.update(user).subscribe(function (response) {
            if (response.status === 200) {
                _this.error = null;
                _this.success = 'OK';
                _this.loadAll();
            }
            else {
                _this.success = null;
                _this.error = 'ERROR';
            }
        });
    };
    UserMgmtComponent.prototype.loadAll = function () {
        var _this = this;
        this.userService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json, res.headers); }, function (res) { return _this.onError(res.json); });
    };
    UserMgmtComponent.prototype.trackIdentity = function (index, item) {
        return item.id;
    };
    UserMgmtComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    UserMgmtComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    UserMgmtComponent.prototype.transition = function () {
        this.router.navigate(['/user-management'], {
            queryParams: {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    UserMgmtComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        this.users = data;
    };
    UserMgmtComponent.prototype.onError = function (error) {
        this.alertService.error(error.error, error.message, null);
    };
    return UserMgmtComponent;
}());
UserMgmtComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        ng_jhipster_1.JhiParseLinks,
        ng_jhipster_1.JhiAlertService,
        shared_1.Principal,
        ng_jhipster_1.JhiEventManager,
        ng_jhipster_1.JhiPaginationUtil,
        uib_pagination_config_1.PaginationConfig,
        router_1.ActivatedRoute,
        router_1.Router])
], UserMgmtComponent);
exports.UserMgmtComponent = UserMgmtComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var user_management_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.ts");
var user_management_detail_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.ts");
var user_management_dialog_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts");
var user_management_delete_dialog_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserResolve = (function () {
    function UserResolve(principal) {
        this.principal = principal;
    }
    UserResolve.prototype.canActivate = function () {
        var _this = this;
        return this.principal.identity().then(function (account) { return _this.principal.hasAnyAuthority(['ROLE_ADMIN']); });
    };
    return UserResolve;
}());
UserResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [shared_1.Principal])
], UserResolve);
exports.UserResolve = UserResolve;
var UserResolvePagingParams = (function () {
    function UserResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    UserResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return UserResolvePagingParams;
}());
UserResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiPaginationUtil])
], UserResolvePagingParams);
exports.UserResolvePagingParams = UserResolvePagingParams;
exports.userMgmtRoute = [
    {
        path: 'user-management',
        component: user_management_component_1.UserMgmtComponent,
        resolve: {
            'pagingParams': UserResolvePagingParams
        },
        data: {
            pageTitle: 'userManagement.home.title'
        }
    },
    {
        path: 'user-management/:login',
        component: user_management_detail_component_1.UserMgmtDetailComponent,
        data: {
            pageTitle: 'userManagement.home.title'
        }
    }
];
exports.userDialogRoute = [
    {
        path: 'user-management-new',
        component: user_management_dialog_component_1.UserDialogComponent,
        outlet: 'popup'
    },
    {
        path: 'user-management/:login/edit',
        component: user_management_dialog_component_1.UserDialogComponent,
        outlet: 'popup'
    },
    {
        path: 'user-management/:login/delete',
        component: user_management_delete_dialog_component_1.UserDeleteDialogComponent,
        outlet: 'popup'
    }
];


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var ng_bootstrap_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserModalService = (function () {
    function UserModalService(modalService, router, userService) {
        this.modalService = modalService;
        this.router = router;
        this.userService = userService;
        this.isOpen = false;
    }
    UserModalService.prototype.open = function (component, login) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (login) {
            this.userService.find(login).subscribe(function (user) { return _this.userModalRef(component, user); });
        }
        else {
            return this.userModalRef(component, new shared_1.User());
        }
    };
    UserModalService.prototype.userModalRef = function (component, user) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.user = user;
        modalRef.result.then(function (result) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.isOpen = false;
        }, function (reason) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.isOpen = false;
        });
        return modalRef;
    };
    return UserModalService;
}());
UserModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        router_1.Router,
        shared_1.UserService])
], UserModalService);
exports.UserModalService = UserModalService;


/***/ }),

/***/ "./src/main/webapp/app/app.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// DO NOT EDIT THIS FILE, EDIT THE WEBPACK COMMON CONFIG INSTEAD, WHICH WILL MODIFY THIS FILE
/* tslint:disable */
var _VERSION = '0.0.1-SNAPSHOT'; // This value will be overwritten by webpack
var _DEBUG_INFO_ENABLED = true; // This value will be overwritten by webpack
_VERSION = '0.0.1-SNAPSHOT';
_DEBUG_INFO_ENABLED = true;
/* tslint:enable */
exports.VERSION = _VERSION;
exports.DEBUG_INFO_ENABLED = _DEBUG_INFO_ENABLED;


/***/ }),

/***/ "./src/main/webapp/app/app.main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(14);
var prod_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/prod.config.ts");
var app_module_1 = __webpack_require__("./src/main/webapp/app/app.module.ts");
prod_config_1.ProdConfig();
if (false) {
    module['hot'].accept();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.JhipsterdemoAppModule)
    .then(function (success) { return console.log("Application started"); })
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/main/webapp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(18);
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(9);
var ng2_webstorage_1 = __webpack_require__(7);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var home_module_1 = __webpack_require__("./src/main/webapp/app/home/home.module.ts");
var admin_module_1 = __webpack_require__("./src/main/webapp/app/admin/admin.module.ts");
var account_module_1 = __webpack_require__("./src/main/webapp/app/account/account.module.ts");
var entity_module_1 = __webpack_require__("./src/main/webapp/app/entities/entity.module.ts");
var http_provider_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/http.provider.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
// jhipster-needle-angular-add-module-import JHipster will add new module here
var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var JhipsterdemoAppModule = (function () {
    function JhipsterdemoAppModule() {
    }
    return JhipsterdemoAppModule;
}());
JhipsterdemoAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            layouts_1.LayoutRoutingModule,
            ng2_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
            shared_1.JhipsterdemoSharedModule,
            home_module_1.JhipsterdemoHomeModule,
            admin_module_1.JhipsterdemoAdminModule,
            account_module_1.JhipsterdemoAccountModule,
            entity_module_1.JhipsterdemoEntityModule,
        ],
        declarations: [
            layouts_1.JhiMainComponent,
            layouts_1.NavbarComponent,
            layouts_1.ErrorComponent,
            layouts_1.PageRibbonComponent,
            layouts_1.ActiveMenuDirective,
            layouts_1.FooterComponent
        ],
        providers: [
            layouts_1.ProfileService,
            http_provider_1.customHttpProvider(),
            uib_pagination_config_1.PaginationConfig,
            shared_1.UserRouteAccessService
        ],
        bootstrap: [layouts_1.JhiMainComponent]
    })
], JhipsterdemoAppModule);
exports.JhipsterdemoAppModule = JhipsterdemoAppModule;


/***/ }),

/***/ "./src/main/webapp/app/app.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
exports.navbarRoute = {
    path: '',
    component: layouts_1.NavbarComponent,
    outlet: 'navbar'
};


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/prod.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
function ProdConfig() {
    // disable debug data on prod profile to improve performance
    if (!app_constants_1.DEBUG_INFO_ENABLED) {
        core_1.enableProdMode();
    }
}
exports.ProdConfig = ProdConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/uib-pagination.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var PaginationConfig = (function () {
    function PaginationConfig(config) {
        this.config = config;
        config.boundaryLinks = true;
        config.maxSize = 5;
        config.pageSize = shared_1.ITEMS_PER_PAGE;
        config.size = 'sm';
    }
    return PaginationConfig;
}());
PaginationConfig = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbPaginationConfig])
], PaginationConfig);
exports.PaginationConfig = PaginationConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(2);
var Observable_1 = __webpack_require__(8);
var login_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.service.ts");
var AuthExpiredInterceptor = (function (_super) {
    __extends(AuthExpiredInterceptor, _super);
    function AuthExpiredInterceptor(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        return _this;
    }
    AuthExpiredInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    AuthExpiredInterceptor.prototype.responseIntercept = function (observable) {
        var _this = this;
        return observable.catch(function (error, source) {
            if (error.status === 401) {
                var loginService = _this.injector.get(login_service_1.LoginService);
                loginService.logout();
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return AuthExpiredInterceptor;
}(ng_jhipster_1.JhiHttpInterceptor));
exports.AuthExpiredInterceptor = AuthExpiredInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(2);
var AuthInterceptor = (function (_super) {
    __extends(AuthInterceptor, _super);
    function AuthInterceptor(localStorage, sessionStorage) {
        var _this = _super.call(this) || this;
        _this.localStorage = localStorage;
        _this.sessionStorage = sessionStorage;
        return _this;
    }
    AuthInterceptor.prototype.requestIntercept = function (options) {
        var token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            options.headers.append('Authorization', 'Bearer ' + token);
        }
        return options;
    };
    AuthInterceptor.prototype.responseIntercept = function (observable) {
        return observable; // by pass
    };
    return AuthInterceptor;
}(ng_jhipster_1.JhiHttpInterceptor));
exports.AuthInterceptor = AuthInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(2);
var Observable_1 = __webpack_require__(8);
var ErrorHandlerInterceptor = (function (_super) {
    __extends(ErrorHandlerInterceptor, _super);
    function ErrorHandlerInterceptor(eventManager) {
        var _this = _super.call(this) || this;
        _this.eventManager = eventManager;
        return _this;
    }
    ErrorHandlerInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    ErrorHandlerInterceptor.prototype.responseIntercept = function (observable) {
        var _this = this;
        return observable.catch(function (error) {
            if (!(error.status === 401 && (error.text() === '' ||
                (error.json().path && error.json().path.indexOf('/api/account') === 0)))) {
                _this.eventManager.broadcast({ name: 'jhipsterdemoApp.httpError', content: error });
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return ErrorHandlerInterceptor;
}(ng_jhipster_1.JhiHttpInterceptor));
exports.ErrorHandlerInterceptor = ErrorHandlerInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/http.provider.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var ng_jhipster_1 = __webpack_require__(2);
var auth_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts");
var ng2_webstorage_1 = __webpack_require__(7);
var auth_expired_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts");
var errorhandler_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts");
var notification_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts");
function interceptableFactory(backend, defaultOptions, localStorage, sessionStorage, injector, eventManager) {
    return new ng_jhipster_1.JhiInterceptableHttp(backend, defaultOptions, [
        new auth_interceptor_1.AuthInterceptor(localStorage, sessionStorage),
        new auth_expired_interceptor_1.AuthExpiredInterceptor(injector),
        // Other interceptors can be added here
        new errorhandler_interceptor_1.ErrorHandlerInterceptor(eventManager),
        new notification_interceptor_1.NotificationInterceptor()
    ]);
}
exports.interceptableFactory = interceptableFactory;
;
function customHttpProvider() {
    return {
        provide: http_1.Http,
        useFactory: interceptableFactory,
        deps: [
            http_1.XHRBackend,
            http_1.RequestOptions,
            ng2_webstorage_1.LocalStorageService,
            ng2_webstorage_1.SessionStorageService,
            core_1.Injector,
            ng_jhipster_1.JhiEventManager
        ]
    };
}
exports.customHttpProvider = customHttpProvider;
;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(2);
var Observable_1 = __webpack_require__(8);
var NotificationInterceptor = (function (_super) {
    __extends(NotificationInterceptor, _super);
    function NotificationInterceptor() {
        return _super.call(this) || this;
    }
    NotificationInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    NotificationInterceptor.prototype.responseIntercept = function (observable) {
        return observable.catch(function (error) {
            var arr = Array.from(error.headers._headers);
            var headers = [];
            var i;
            for (i = 0; i < arr.length; i++) {
                if (arr[i][0].endsWith('app-alert') || arr[i][0].endsWith('app-params')) {
                    headers.push(arr[i][0]);
                }
            }
            headers.sort();
            var alertKey = headers.length >= 1 ? error.headers.get(headers[0]) : null;
            if (typeof alertKey === 'string') {
                // TODO
                // JhiAlertService.success(alertKey, { param: response.headers(headers[1])});
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return NotificationInterceptor;
}(ng_jhipster_1.JhiHttpInterceptor));
exports.NotificationInterceptor = NotificationInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/entities/entity.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
var JhipsterdemoEntityModule = (function () {
    function JhipsterdemoEntityModule() {
    }
    return JhipsterdemoEntityModule;
}());
JhipsterdemoEntityModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [],
        entryComponents: [],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], JhipsterdemoEntityModule);
exports.JhipsterdemoEntityModule = JhipsterdemoEntityModule;


/***/ }),

/***/ "./src/main/webapp/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> <div class=\"col-md-3\"> <span class=\"hipster img-fluid img-rounded\"></span> </div> <div class=\"col-md-9\"> <h1 class=\"display-4\" jhiTranslate=\"home.title\">Welcome, Java Hipster!</h1> <p class=\"lead\" jhiTranslate=\"home.subtitle\">This is your homepage</p> <div [ngSwitch]=\"isAuthenticated()\"> <div class=\"alert alert-success\" *ngSwitchCase=\"true\"> <span *ngIf=\"account\" jhiTranslate=\"home.logged.message\" translateValues=\"{username: '{{account.login}}'}\"> You are logged in as user \"{{account.login}}\". </span> </div> <div class=\"alert alert-warning\" *ngSwitchCase=\"false\"> <span jhiTranslate=\"global.messages.info.authenticated.prefix\">If you want to </span> <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a><span jhiTranslate=\"global.messages.info.authenticated.suffix\">, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span> </div> <div class=\"alert alert-warning\" *ngSwitchCase=\"false\"> <span jhiTranslate=\"global.messages.info.register.noaccount\">You don't have an account yet?</span> <a class=\"alert-link\" routerLink=\"register\" jhiTranslate=\"global.messages.info.register.link\">Register a new account</a> </div> </div> <p jhiTranslate=\"home.question\"> If you have any question on JHipster: </p> <ul> <li><a href=\"http://jhipster.github.io/\" target=\"_blank\" rel=\"noopener\" jhiTranslate=\"home.link.homepage\">JHipster homepage</a></li> <li><a href=\"http://stackoverflow.com/tags/jhipster/info\" target=\"_blank\" rel=\"noopener\" jhiTranslate=\"home.link.stackoverflow\">JHipster on Stack Overflow</a></li> <li><a href=\"https://github.com/jhipster/generator-jhipster/issues?state=open\" target=\"_blank\" rel=\"noopener\" jhiTranslate=\"home.link.bugtracker\">JHipster bug tracker</a></li> <li><a href=\"https://gitter.im/jhipster/generator-jhipster\" target=\"_blank\" rel=\"noopener\" jhiTranslate=\"home.link.chat\">JHipster public chat room</a></li> <li><a href=\"https://twitter.com/java_hipster\" target=\"_blank\" rel=\"noopener\" jhiTranslate=\"home.link.follow\">follow @java_hipster on Twitter</a></li> </ul> <p> <span jhiTranslate=\"home.like\">If you like JHipster, don't forget to give us a star on</span> <a href=\"https://github.com/jhipster/generator-jhipster\" target=\"_blank\" rel=\"noopener\" jhiTranslate=\"home.github\">Github</a>! </p> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var HomeComponent = (function () {
    function HomeComponent(principal, loginModalService, eventManager) {
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.eventManager = eventManager;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.registerAuthenticationSuccess();
    };
    HomeComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    HomeComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    HomeComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'jhi-home',
        template: __webpack_require__("./src/main/webapp/app/home/home.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/home/home.css")
        ]
    }),
    __metadata("design:paramtypes", [shared_1.Principal,
        shared_1.LoginModalService,
        ng_jhipster_1.JhiEventManager])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/main/webapp/app/home/home.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/main/webapp/app/home/home.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/home/home.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
var JhipsterdemoHomeModule = (function () {
    function JhipsterdemoHomeModule() {
    }
    return JhipsterdemoHomeModule;
}());
JhipsterdemoHomeModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.JhipsterdemoSharedModule,
            router_1.RouterModule.forRoot([_1.HOME_ROUTE], { useHash: true })
        ],
        declarations: [
            _1.HomeComponent,
        ],
        entryComponents: [],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], JhipsterdemoHomeModule);
exports.JhipsterdemoHomeModule = JhipsterdemoHomeModule;


/***/ }),

/***/ "./src/main/webapp/app/home/home.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
exports.HOME_ROUTE = {
    path: '',
    component: _1.HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/home/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/home/home.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/home.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/home.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-4\"> <span class=\"hipster img-fluid img-rounded\"></span> </div> <div class=\"col-md-8\"> <h1 jhiTranslate=\"error.title\">Error Page!</h1> <div [hidden]=\"!errorMessage\"> <div class=\"alert alert-danger\">{{errorMessage}} </div> </div> <div [hidden]=\"!error403\" class=\"alert alert-danger\" jhiTranslate=\"error.403\">You are not authorized to access the page. </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var ErrorComponent = (function () {
    function ErrorComponent(route) {
        this.route = route;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            if (routeData.error403) {
                _this.error403 = routeData.error403;
            }
            if (routeData.errorMessage) {
                _this.errorMessage = routeData.errorMessage;
            }
        });
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-error',
        template: __webpack_require__("./src/main/webapp/app/layouts/error/error.component.html")
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_component_1 = __webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts");
exports.errorRoute = [
    {
        path: 'error',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'error.title'
        },
    },
    {
        path: 'accessdenied',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'error.title',
            error403: true
        },
    }
];


/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\"> <p jhiTranslate=\"footer\">This is your footer</p> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-footer',
        template: __webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.html")
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/main/main.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/navbar/active-menu.directive.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/layout-routing.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/layout-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var app_route_1 = __webpack_require__("./src/main/webapp/app/app.route.ts");
var _1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var LAYOUT_ROUTES = [
    app_route_1.navbarRoute
].concat(_1.errorRoute);
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    return LayoutRoutingModule;
}());
LayoutRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], LayoutRoutingModule);
exports.LayoutRoutingModule = LayoutRoutingModule;


/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<jhi-page-ribbon></jhi-page-ribbon> <div> <router-outlet name=\"navbar\"></router-outlet> </div> <div class=\"container-fluid\"> <div class=\"card jh-card\"> <router-outlet></router-outlet> <router-outlet name=\"popup\"></router-outlet> </div> <jhi-footer></jhi-footer> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhiMainComponent = (function () {
    function JhiMainComponent(jhiLanguageHelper, router, $storageService) {
        this.jhiLanguageHelper = jhiLanguageHelper;
        this.router = router;
        this.$storageService = $storageService;
    }
    JhiMainComponent.prototype.getPageTitle = function (routeSnapshot) {
        var title = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'jhipsterdemoApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    JhiMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.jhiLanguageHelper.updateTitle(_this.getPageTitle(_this.router.routerState.snapshot.root));
            }
        });
    };
    return JhiMainComponent;
}());
JhiMainComponent = __decorate([
    core_1.Component({
        selector: 'jhi-main',
        template: __webpack_require__("./src/main/webapp/app/layouts/main/main.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.JhiLanguageHelper,
        router_1.Router,
        shared_1.StateStorageService])
], JhiMainComponent);
exports.JhiMainComponent = JhiMainComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/active-menu.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(10);
var ActiveMenuDirective = (function () {
    function ActiveMenuDirective(el, renderer, translateService) {
        this.el = el;
        this.renderer = renderer;
        this.translateService = translateService;
    }
    ActiveMenuDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (event) {
            _this.updateActiveFlag(event.lang);
        });
        this.updateActiveFlag(this.translateService.currentLang);
    };
    ActiveMenuDirective.prototype.updateActiveFlag = function (selectedLanguage) {
        if (this.jhiActiveMenu === selectedLanguage) {
            this.renderer.setElementClass(this.el.nativeElement, 'active', true);
        }
        else {
            this.renderer.setElementClass(this.el.nativeElement, 'active', false);
        }
    };
    return ActiveMenuDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ActiveMenuDirective.prototype, "jhiActiveMenu", void 0);
ActiveMenuDirective = __decorate([
    core_1.Directive({
        selector: '[jhiActiveMenu]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_2.TranslateService])
], ActiveMenuDirective);
exports.ActiveMenuDirective = ActiveMenuDirective;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-toggleable-md jh-navbar\"> <div class=\"jh-logo-container float-left\"> <a class=\"jh-navbar-toggler hidden-lg-up float-right\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\"> <i class=\"fa fa-bars\"></i> </a> <a class=\"navbar-brand logo float-left\" routerLink=\"/\" (click)=\"collapseNavbar()\"> <span class=\"logo-img\"></span> <span jhiTranslate=\"global.title\" class=\"navbar-title\">Jhipsterdemo</span> <span class=\"navbar-version\">{{version}}</span> </a> </div> <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\" [ngSwitch]=\"isAuthenticated()\"> <ul class=\"navbar-nav ml-auto\"> <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link\" routerLink=\"/\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-home\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.home\">Home</span> </a> </li> <li *ngSwitchCase=\"true\" ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"entity-menu\"> <span> <i class=\"fa fa-th-list\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.entities.main\"> Entities </span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu> </ul> </li> <li *jhiHasAnyAuthority=\"'ROLE_ADMIN'\" ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"admin-menu\"> <span> <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.main\">Administration</span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu> <li> <a class=\"dropdown-item\" routerLink=\"user-management\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-user\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.userManagement\">User management</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-metrics\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-tachometer\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.metrics\">Metrics</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-health\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-heart\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.health\">Health</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-configuration\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-list\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.configuration\">Configuration</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"audits\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-bell\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.audits\">Audits</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"logs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-tasks\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.logs\">Logs</span> </a> </li> <li *ngIf=\"swaggerEnabled\"> <a class=\"dropdown-item\" routerLink=\"docs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-book\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.apidocs\">API</span> </a> </li> <li *ngIf=\"!inProduction\"> <a class=\"dropdown-item\" href=\"./h2-console\" target=\"_tab\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-hdd-o\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.database\">Database</span> </a> </li> </ul> </li> <li ngbDropdown class=\"nav-item dropdown pointer\" *ngIf=\"languages\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"languagesnavBarDropdown\" *ngIf=\"languages.length > 1\"> <span> <i class=\"fa fa-flag\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.language\">Language</span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu *ngIf=\"languages.length > 1\"> <li *ngFor=\"let language of languages\"> <a class=\"dropdown-item\" [jhiActiveMenu]=\"language\" href=\"javascript:void(0);\" (click)=\"changeLanguage(language);collapseNavbar();\">{{language | findLanguageFromKey}}</a> </li> </ul> </li> <li ngbDropdown class=\"nav-item dropdown pointer\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"account-menu\"> <span *ngIf=\"!getImageUrl()\"> <i class=\"fa fa-user\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.main\"> Account </span> <b class=\"caret\"></b> </span> <span *ngIf=\"getImageUrl()\"> <img [src]=\"getImageUrl()\" class=\"profile-image img-circle\" alt=\"Avatar\"> </span> </a> <ul class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" routerLink=\"settings\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-wrench\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.settings\">Settings</span> </a> </li> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" routerLink=\"password\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-clock-o\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.password\">Password</span> </a> </li> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" (click)=\"logout()\" id=\"logout\"> <i class=\"fa fa-fw fa-sign-out\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.logout\">Sign out</span> </a> </li> <li *ngSwitchCase=\"false\"> <a class=\"dropdown-item\" (click)=\"login()\" id=\"login\"> <i class=\"fa fa-fw fa-sign-in\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.login\">Sign in</span> </a> </li> <li *ngSwitchCase=\"false\"> <a class=\"dropdown-item\" routerLink=\"register\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-registered\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.register\">Register</span> </a> </li> </ul> </li> </ul> </div> </nav> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var ng_jhipster_1 = __webpack_require__(2);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
var NavbarComponent = (function () {
    function NavbarComponent(loginService, languageService, languageHelper, principal, loginModalService, profileService, router) {
        this.loginService = loginService;
        this.languageService = languageService;
        this.languageHelper = languageHelper;
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.profileService = profileService;
        this.router = router;
        this.version = app_constants_1.VERSION ? 'v' + app_constants_1.VERSION : '';
        this.isNavbarCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.inProduction = profileInfo.inProduction;
            _this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    };
    NavbarComponent.prototype.changeLanguage = function (languageKey) {
        this.languageService.changeLanguage(languageKey);
    };
    NavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    NavbarComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    NavbarComponent.prototype.logout = function () {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    NavbarComponent.prototype.getImageUrl = function () {
        return this.isAuthenticated() ? this.principal.getImageUrl() : null;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-navbar',
        template: __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.css")
        ]
    }),
    __metadata("design:paramtypes", [shared_1.LoginService,
        ng_jhipster_1.JhiLanguageService,
        shared_1.JhiLanguageHelper,
        shared_1.Principal,
        shared_1.LoginModalService,
        profile_service_1.ProfileService,
        router_1.Router])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/main/webapp/app/layouts/navbar/navbar.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts");
var PageRibbonComponent = (function () {
    function PageRibbonComponent(profileService) {
        this.profileService = profileService;
    }
    PageRibbonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.profileInfo = profileInfo;
            _this.ribbonEnv = profileInfo.ribbonEnv;
        });
    };
    return PageRibbonComponent;
}());
PageRibbonComponent = __decorate([
    core_1.Component({
        selector: 'jhi-page-ribbon',
        template: "<div class=\"ribbon\" *ngIf=\"ribbonEnv\"><a href=\"\" jhiTranslate=\"global.ribbon.{{ribbonEnv}}\">{{ribbonEnv}}</a></div>",
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.css")
        ]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], PageRibbonComponent);
exports.PageRibbonComponent = PageRibbonComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/main/webapp/app/layouts/profiles/page-ribbon.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile-info.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProfileInfo = (function () {
    function ProfileInfo() {
    }
    return ProfileInfo;
}());
exports.ProfileInfo = ProfileInfo;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var profile_info_model_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts");
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.profileInfoUrl = 'api/profile-info';
    }
    ProfileService.prototype.getProfileInfo = function () {
        return this.http.get(this.profileInfoUrl)
            .map(function (res) {
            var data = res.json();
            var pi = new profile_info_model_1.ProfileInfo();
            pi.activeProfiles = data.activeProfiles;
            pi.ribbonEnv = data.ribbonEnv;
            pi.inProduction = data.activeProfiles.indexOf('prod') !== -1;
            pi.swaggerEnabled = data.activeProfiles.indexOf('swagger') !== -1;
            return pi;
        });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProfileService);
exports.ProfileService = ProfileService;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert-error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(10);
var ng_jhipster_1 = __webpack_require__(2);
var JhiAlertErrorComponent = (function () {
    function JhiAlertErrorComponent(alertService, eventManager, translateService) {
        var _this = this;
        this.alertService = alertService;
        this.eventManager = eventManager;
        this.translateService = translateService;
        this.alerts = [];
        this.cleanHttpErrorListener = eventManager.subscribe('jhipsterdemoApp.httpError', function (response) {
            var i;
            var httpResponse = response.content;
            switch (httpResponse.status) {
                // connection refused, server not reachable
                case 0:
                    _this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
                    break;
                case 400:
                    var arr = Array.from(httpResponse.headers._headers);
                    var headers = [];
                    for (i = 0; i < arr.length; i++) {
                        if (arr[i][0].endsWith('app-error') || arr[i][0].endsWith('app-params')) {
                            headers.push(arr[i][0]);
                        }
                    }
                    headers.sort();
                    var errorHeader = null;
                    var entityKey = null;
                    if (headers.length > 1) {
                        errorHeader = httpResponse.headers.get(headers[0]);
                        entityKey = httpResponse.headers.get(headers[1]);
                    }
                    if (errorHeader) {
                        var entityName = translateService.instant('global.menu.entities.' + entityKey);
                        _this.addErrorAlert(errorHeader, errorHeader, { entityName: entityName });
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().fieldErrors) {
                        var fieldErrors = httpResponse.json().fieldErrors;
                        for (i = 0; i < fieldErrors.length; i++) {
                            var fieldError = fieldErrors[i];
                            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                            var convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                            var fieldName = translateService.instant('jhipsterdemoApp.' +
                                fieldError.objectName + '.' + convertedField);
                            _this.addErrorAlert('Error on field "' + fieldName + '"', 'error.' + fieldError.message, { fieldName: fieldName });
                        }
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message, httpResponse.json().message, httpResponse.json().params);
                    }
                    else {
                        _this.addErrorAlert(httpResponse.text());
                    }
                    break;
                case 404:
                    _this.addErrorAlert('Not found', 'error.url.not.found');
                    break;
                default:
                    if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message);
                    }
                    else {
                        _this.addErrorAlert(httpResponse.text());
                    }
            }
        });
    }
    JhiAlertErrorComponent.prototype.ngOnDestroy = function () {
        if (this.cleanHttpErrorListener !== undefined && this.cleanHttpErrorListener !== null) {
            this.eventManager.destroy(this.cleanHttpErrorListener);
            this.alerts = [];
        }
    };
    JhiAlertErrorComponent.prototype.addErrorAlert = function (message, key, data) {
        key = (key && key !== null) ? key : message;
        this.alerts.push(this.alertService.addAlert({
            type: 'danger',
            msg: key,
            params: data,
            timeout: 5000,
            toast: this.alertService.isToast(),
            scoped: true
        }, this.alerts));
    };
    return JhiAlertErrorComponent;
}());
JhiAlertErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert-error',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\"  [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert *ngIf=\"alert && alert.type && alert.msg\" [type]=\"alert.type\" (close)=\"alert.close(alerts)\">\n                    <pre [innerHTML]=\"alert.msg\"></pre>\n                </ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService, ng_jhipster_1.JhiEventManager, core_2.TranslateService])
], JhiAlertErrorComponent);
exports.JhiAlertErrorComponent = JhiAlertErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var JhiAlertComponent = (function () {
    function JhiAlertComponent(alertService) {
        this.alertService = alertService;
    }
    JhiAlertComponent.prototype.ngOnInit = function () {
        this.alerts = this.alertService.get();
    };
    JhiAlertComponent.prototype.ngOnDestroy = function () {
        this.alerts = [];
    };
    return JhiAlertComponent;
}());
JhiAlertComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\" [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert *ngIf=\"alert && alert.type && alert.msg\" [type]=\"alert.type\" (close)=\"alert.close(alerts)\">\n                    <pre [innerHTML]=\"alert.msg\"></pre>\n                </ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService])
], JhiAlertComponent);
exports.JhiAlertComponent = JhiAlertComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/account.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.get = function () {
        return this.http.get('api/account').map(function (res) { return res.json(); });
    };
    AccountService.prototype.save = function (account) {
        return this.http.post('api/account', account);
    };
    return AccountService;
}());
AccountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AccountService);
exports.AccountService = AccountService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/auth-jwt.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var Rx_1 = __webpack_require__(21);
var ng2_webstorage_1 = __webpack_require__(7);
var AuthServerProvider = (function () {
    function AuthServerProvider(http, $localStorage, $sessionStorage) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    AuthServerProvider.prototype.getToken = function () {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    };
    AuthServerProvider.prototype.login = function (credentials) {
        var data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        return this.http.post('api/authenticate', data).map(authenticateSuccess.bind(this));
        function authenticateSuccess(resp) {
            var bearerToken = resp.headers.get('Authorization');
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                var jwt = bearerToken.slice(7, bearerToken.length);
                this.storeAuthenticationToken(jwt, credentials.rememberMe);
                return jwt;
            }
        }
    };
    AuthServerProvider.prototype.loginWithToken = function (jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        }
        else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
        }
    };
    AuthServerProvider.prototype.storeAuthenticationToken = function (jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        }
        else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    };
    AuthServerProvider.prototype.logout = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.$localStorage.clear('authenticationToken');
            _this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    };
    return AuthServerProvider;
}());
AuthServerProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        ng2_webstorage_1.LocalStorageService,
        ng2_webstorage_1.SessionStorageService])
], AuthServerProvider);
exports.AuthServerProvider = AuthServerProvider;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/csrf.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ngx_cookie_1 = __webpack_require__(12);
var CSRFService = (function () {
    function CSRFService(cookieService) {
        this.cookieService = cookieService;
    }
    CSRFService.prototype.getCSRF = function (name) {
        name = "" + (name ? name : 'XSRF-TOKEN');
        return this.cookieService.get(name);
    };
    return CSRFService;
}());
CSRFService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ngx_cookie_1.CookieService])
], CSRFService);
exports.CSRFService = CSRFService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/has-any-authority.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *jhiHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *jhiHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
var HasAnyAuthorityDirective = (function () {
    function HasAnyAuthorityDirective(principal, templateRef, viewContainerRef) {
        this.principal = principal;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", {
        set: function (value) {
            var _this = this;
            this.authorities = typeof value === 'string' ? [value] : value;
            this.updateView();
            // Get notified each time authentication state changes.
            this.principal.getAuthenticationState().subscribe(function (identity) { return _this.updateView(); });
        },
        enumerable: true,
        configurable: true
    });
    HasAnyAuthorityDirective.prototype.updateView = function () {
        var _this = this;
        this.principal.hasAnyAuthority(this.authorities).then(function (result) {
            _this.viewContainerRef.clear();
            if (result) {
                _this.viewContainerRef.createEmbeddedView(_this.templateRef);
            }
        });
    };
    return HasAnyAuthorityDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", null);
HasAnyAuthorityDirective = __decorate([
    core_1.Directive({
        selector: '[jhiHasAnyAuthority]'
    }),
    __metadata("design:paramtypes", [principal_service_1.Principal, core_1.TemplateRef, core_1.ViewContainerRef])
], HasAnyAuthorityDirective);
exports.HasAnyAuthorityDirective = HasAnyAuthorityDirective;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/principal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Subject_1 = __webpack_require__(20);
var account_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts");
var Principal = (function () {
    function Principal(account) {
        this.account = account;
        this.authenticated = false;
        this.authenticationState = new Subject_1.Subject();
    }
    Principal.prototype.authenticate = function (identity) {
        this.userIdentity = identity;
        this.authenticated = identity !== null;
        this.authenticationState.next(this.userIdentity);
    };
    Principal.prototype.hasAnyAuthority = function (authorities) {
        return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
    };
    Principal.prototype.hasAnyAuthorityDirect = function (authorities) {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        for (var i = 0; i < authorities.length; i++) {
            if (this.userIdentity.authorities.indexOf(authorities[i]) !== -1) {
                return true;
            }
        }
        return false;
    };
    Principal.prototype.hasAuthority = function (authority) {
        if (!this.authenticated) {
            return Promise.resolve(false);
        }
        return this.identity().then(function (id) {
            return Promise.resolve(id.authorities && id.authorities.indexOf(authority) !== -1);
        }, function () {
            return Promise.resolve(false);
        });
    };
    Principal.prototype.identity = function (force) {
        var _this = this;
        if (force === true) {
            this.userIdentity = undefined;
        }
        // check and see if we have retrieved the userIdentity data from the server.
        // if we have, reuse it by immediately resolving
        if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
        }
        // retrieve the userIdentity data from the server, update the identity object, and then resolve.
        return this.account.get().toPromise().then(function (account) {
            if (account) {
                _this.userIdentity = account;
                _this.authenticated = true;
            }
            else {
                _this.userIdentity = null;
                _this.authenticated = false;
            }
            _this.authenticationState.next(_this.userIdentity);
            return _this.userIdentity;
        }).catch(function (err) {
            _this.userIdentity = null;
            _this.authenticated = false;
            _this.authenticationState.next(_this.userIdentity);
            return null;
        });
    };
    Principal.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    Principal.prototype.isIdentityResolved = function () {
        return this.userIdentity !== undefined;
    };
    Principal.prototype.getAuthenticationState = function () {
        return this.authenticationState.asObservable();
    };
    Principal.prototype.getImageUrl = function () {
        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
    };
    return Principal;
}());
Principal = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], Principal);
exports.Principal = Principal;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/state-storage.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_webstorage_1 = __webpack_require__(7);
var StateStorageService = (function () {
    function StateStorageService($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
    }
    StateStorageService.prototype.getPreviousState = function () {
        return this.$sessionStorage.retrieve('previousState');
    };
    StateStorageService.prototype.resetPreviousState = function () {
        this.$sessionStorage.clear('previousState');
    };
    StateStorageService.prototype.storePreviousState = function (previousStateName, previousStateParams) {
        var previousState = { 'name': previousStateName, 'params': previousStateParams };
        this.$sessionStorage.store('previousState', previousState);
    };
    StateStorageService.prototype.getDestinationState = function () {
        return this.$sessionStorage.retrieve('destinationState');
    };
    StateStorageService.prototype.storeUrl = function (url) {
        this.$sessionStorage.store('previousUrl', url);
    };
    StateStorageService.prototype.getUrl = function () {
        return this.$sessionStorage.retrieve('previousUrl');
    };
    StateStorageService.prototype.storeDestinationState = function (destinationState, destinationStateParams, fromState) {
        var destinationInfo = {
            'destination': {
                'name': destinationState.name,
                'data': destinationState.data,
            },
            'params': destinationStateParams,
            'from': {
                'name': fromState.name,
            }
        };
        this.$sessionStorage.store('destinationState', destinationInfo);
    };
    return StateStorageService;
}());
StateStorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_webstorage_1.SessionStorageService])
], StateStorageService);
exports.StateStorageService = StateStorageService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/user-route-access-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(3);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var login_modal_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var UserRouteAccessService = (function () {
    function UserRouteAccessService(router, loginModalService, principal, stateStorageService) {
        this.router = router;
        this.loginModalService = loginModalService;
        this.principal = principal;
        this.stateStorageService = stateStorageService;
    }
    UserRouteAccessService.prototype.canActivate = function (route, state) {
        var authorities = route.data['authorities'];
        if (!authorities || authorities.length === 0) {
            return true;
        }
        return this.checkLogin(authorities, state.url);
    };
    UserRouteAccessService.prototype.checkLogin = function (authorities, url) {
        var _this = this;
        var principal = this.principal;
        return Promise.resolve(principal.identity().then(function (account) {
            if (account && principal.hasAnyAuthorityDirect(authorities)) {
                return true;
            }
            _this.stateStorageService.storeUrl(url);
            _this.router.navigate(['accessdenied']).then(function () {
                // only show the login dialog, if the user hasn't logged in yet
                if (!account) {
                    _this.loginModalService.open();
                }
            });
            return false;
        }));
    };
    return UserRouteAccessService;
}());
UserRouteAccessService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        login_modal_service_1.LoginModalService,
        _1.Principal,
        state_storage_service_1.StateStorageService])
], UserRouteAccessService);
exports.UserRouteAccessService = UserRouteAccessService;


/***/ }),

/***/ "./src/main/webapp/app/shared/constants/pagination.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEMS_PER_PAGE = 20;


/***/ }),

/***/ "./src/main/webapp/app/shared/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/shared/constants/pagination.constants.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert-error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/csrf.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/auth-jwt.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/has-any-authority.directive.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/user-route-access-service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/language/language.constants.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/language/language.helper.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/language/find-language-from-key.pipe.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/account.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/model/response-wrapper.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/model/request-util.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-libs.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-common.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/shared/language/find-language-from-key.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var FindLanguageFromKeyPipe = (function () {
    function FindLanguageFromKeyPipe() {
        this.languages = {
            'ca': 'Català',
            'cs': 'Český',
            'da': 'Dansk',
            'de': 'Deutsch',
            'el': 'Ελληνικά',
            'en': 'English',
            'es': 'Español',
            'et': 'Eesti',
            'fr': 'Français',
            'gl': 'Galego',
            'hu': 'Magyar',
            'hi': 'हिंदी',
            'hy': 'Հայերեն',
            'it': 'Italiano',
            'ja': '日本語',
            'ko': '한국어',
            'mr': 'मराठी',
            'nl': 'Nederlands',
            'pl': 'Polski',
            'pt-br': 'Português (Brasil)',
            'pt-pt': 'Português',
            'ro': 'Română',
            'ru': 'Русский',
            'sk': 'Slovenský',
            'sr': 'Srpski',
            'sv': 'Svenska',
            'ta': 'தமிழ்',
            'th': 'ไทย',
            'tr': 'Türkçe',
            'ua': 'Українська',
            'vi': 'Tiếng Việt',
            'zh-cn': '中文（简体）',
            'zh-tw': '繁體中文'
        };
    }
    FindLanguageFromKeyPipe.prototype.transform = function (lang) {
        return this.languages[lang];
    };
    return FindLanguageFromKeyPipe;
}());
FindLanguageFromKeyPipe = __decorate([
    core_1.Pipe({ name: 'findLanguageFromKey' })
], FindLanguageFromKeyPipe);
exports.FindLanguageFromKeyPipe = FindLanguageFromKeyPipe;


/***/ }),

/***/ "./src/main/webapp/app/shared/language/language.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
    Languages codes are ISO_639-1 codes, see http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    They are written in English to avoid character encoding issues (not a perfect solution)
*/
exports.LANGUAGES = [
    'en'
    // jhipster-needle-i18n-language-constant - JHipster will add/remove languages in this array
];


/***/ }),

/***/ "./src/main/webapp/app/shared/language/language.helper.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(9);
var router_1 = __webpack_require__(3);
var core_2 = __webpack_require__(10);
var language_constants_1 = __webpack_require__("./src/main/webapp/app/shared/language/language.constants.ts");
var JhiLanguageHelper = (function () {
    function JhiLanguageHelper(translateService, titleService, router) {
        this.translateService = translateService;
        this.titleService = titleService;
        this.router = router;
        this.init();
    }
    JhiLanguageHelper.prototype.getAll = function () {
        return Promise.resolve(language_constants_1.LANGUAGES);
    };
    /**
     * Update the window title using params in the following
     * order:
     * 1. titleKey parameter
     * 2. $state.$current.data.pageTitle (current state page title)
     * 3. 'global.title'
     */
    JhiLanguageHelper.prototype.updateTitle = function (titleKey) {
        var _this = this;
        if (!titleKey) {
            titleKey = this.getPageTitle(this.router.routerState.snapshot.root);
        }
        this.translateService.get(titleKey).subscribe(function (title) {
            _this.titleService.setTitle(title);
        });
    };
    JhiLanguageHelper.prototype.init = function () {
        var _this = this;
        this.translateService.onTranslationChange.subscribe(function (event) {
            _this.updateTitle();
        });
        this.translateService.onLangChange.subscribe(function (event) {
            _this.updateTitle();
        });
    };
    JhiLanguageHelper.prototype.getPageTitle = function (routeSnapshot) {
        var title = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'jhipsterdemoApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    return JhiLanguageHelper;
}());
JhiLanguageHelper = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.TranslateService, platform_browser_1.Title, router_1.Router])
], JhiLanguageHelper);
exports.JhiLanguageHelper = JhiLanguageHelper;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login-modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var login_component_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.component.ts");
var LoginModalService = (function () {
    function LoginModalService(modalService) {
        this.modalService = modalService;
        this.isOpen = false;
    }
    LoginModalService.prototype.open = function () {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        var modalRef = this.modalService.open(login_component_1.JhiLoginModalComponent, {
            container: 'nav'
        });
        modalRef.result.then(function (result) {
            _this.isOpen = false;
        }, function (reason) {
            _this.isOpen = false;
        });
        return modalRef;
    };
    return LoginModalService;
}());
LoginModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], LoginModalService);
exports.LoginModalService = LoginModalService;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\"> <h4 class=\"modal-title\" jhiTranslate=\"login.title\">Sign in</h4> <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\" (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">x</span> </button> </div> <div class=\"modal-body\"> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <div class=\"alert alert-danger\" *ngIf=\"authenticationError\" jhiTranslate=\"login.messages.error.authentication\"> <strong>Failed to sign in!</strong> Please check your credentials and try again. </div> </div> <div class=\"col-md-8 offset-md-2\"> <form class=\"form\" role=\"form\" (ngSubmit)=\"login()\"> <div class=\"form-group\"> <label for=\"username\" jhiTranslate=\"global.form.username\">Login</label> <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"{{'global.form.username.placeholder' | translate}}\" [(ngModel)]=\"username\"> </div> <div class=\"form-group\"> <label for=\"password\" jhiTranslate=\"login.form.password\">Password</label> <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"{{'login.form.password.placeholder' | translate}}\" [(ngModel)]=\"password\"> </div> <div class=\"form-check\"> <label class=\"form-check-label\" for=\"rememberMe\"> <input class=\"form-check-input\" type=\"checkbox\" name=\"rememberMe\" id=\"rememberMe\" [(ngModel)]=\"rememberMe\" checked=\"checked\"> <span jhiTranslate=\"login.form.rememberme\">Remember me</span> </label> </div> <button type=\"submit\" class=\"btn btn-primary\" jhiTranslate=\"login.form.button\">Sign in</button> </form> <p></p> <div class=\"alert alert-warning\"> <a class=\"alert-link\" (click)=\"requestResetPassword()\" jhiTranslate=\"login.password.forgot\">Did you forget your password?</a> </div> <div class=\"alert alert-warning\"> <span jhiTranslate=\"global.messages.info.register.noaccount\">You don't have an account yet?</span> <a class=\"alert-link\" (click)=\"register()\" jhiTranslate=\"global.messages.info.register.link\">Register a new account</a> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var router_1 = __webpack_require__(3);
var ng_jhipster_1 = __webpack_require__(2);
var login_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var JhiLoginModalComponent = (function () {
    function JhiLoginModalComponent(eventManager, loginService, stateStorageService, elementRef, renderer, router, activeModal) {
        this.eventManager = eventManager;
        this.loginService = loginService;
        this.stateStorageService = stateStorageService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.activeModal = activeModal;
        this.credentials = {};
    }
    JhiLoginModalComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
    };
    JhiLoginModalComponent.prototype.cancel = function () {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
        this.activeModal.dismiss('cancel');
    };
    JhiLoginModalComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login({
            username: this.username,
            password: this.password,
            rememberMe: this.rememberMe
        }).then(function () {
            _this.authenticationError = false;
            _this.activeModal.dismiss('login success');
            if (_this.router.url === '/register' || (/activate/.test(_this.router.url)) ||
                _this.router.url === '/finishReset' || _this.router.url === '/requestReset') {
                _this.router.navigate(['']);
            }
            _this.eventManager.broadcast({
                name: 'authenticationSuccess',
                content: 'Sending Authentication Success'
            });
            // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // // since login is succesful, go to stored previousState and clear previousState
            var redirect = _this.stateStorageService.getUrl();
            if (redirect) {
                _this.router.navigate([redirect]);
            }
        }).catch(function () {
            _this.authenticationError = true;
        });
    };
    JhiLoginModalComponent.prototype.register = function () {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    };
    JhiLoginModalComponent.prototype.requestResetPassword = function () {
        this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/reset', 'request']);
    };
    return JhiLoginModalComponent;
}());
JhiLoginModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-login-modal',
        template: __webpack_require__("./src/main/webapp/app/shared/login/login.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiEventManager,
        login_service_1.LoginService,
        state_storage_service_1.StateStorageService,
        core_1.ElementRef,
        core_1.Renderer,
        router_1.Router,
        ng_bootstrap_1.NgbActiveModal])
], JhiLoginModalComponent);
exports.JhiLoginModalComponent = JhiLoginModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var auth_jwt_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/auth-jwt.service.ts");
var LoginService = (function () {
    function LoginService(languageService, principal, authServerProvider) {
        this.languageService = languageService;
        this.principal = principal;
        this.authServerProvider = authServerProvider;
    }
    LoginService.prototype.login = function (credentials, callback) {
        var _this = this;
        var cb = callback || function () { };
        return new Promise(function (resolve, reject) {
            _this.authServerProvider.login(credentials).subscribe(function (data) {
                _this.principal.identity(true).then(function (account) {
                    // After the login the language will be changed to
                    // the language selected by the user during his registration
                    if (account !== null) {
                        _this.languageService.changeLanguage(account.langKey);
                    }
                    resolve(data);
                });
                return cb();
            }, function (err) {
                _this.logout();
                reject(err);
                return cb(err);
            });
        });
    };
    LoginService.prototype.loginWithToken = function (jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    };
    LoginService.prototype.logout = function () {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        principal_service_1.Principal,
        auth_jwt_service_1.AuthServerProvider])
], LoginService);
exports.LoginService = LoginService;


/***/ }),

/***/ "./src/main/webapp/app/shared/model/request-util.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(4);
exports.createRequestOption = function (req) {
    var options = new http_1.BaseRequestOptions();
    if (req) {
        var params = new http_1.URLSearchParams();
        params.set('page', req.page);
        params.set('size', req.size);
        if (req.sort) {
            params.paramsMap.set('sort', req.sort);
        }
        params.set('query', req.query);
        options.params = params;
    }
    return options;
};


/***/ }),

/***/ "./src/main/webapp/app/shared/model/response-wrapper.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResponseWrapper = (function () {
    function ResponseWrapper(headers, json, status) {
        this.headers = headers;
        this.json = json;
        this.status = status;
    }
    return ResponseWrapper;
}());
exports.ResponseWrapper = ResponseWrapper;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-common.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(9);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhipsterdemoSharedCommonModule = (function () {
    function JhipsterdemoSharedCommonModule() {
    }
    return JhipsterdemoSharedCommonModule;
}());
JhipsterdemoSharedCommonModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.JhipsterdemoSharedLibsModule
        ],
        declarations: [
            _1.FindLanguageFromKeyPipe,
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent
        ],
        providers: [
            _1.JhiLanguageHelper,
            platform_browser_1.Title
        ],
        exports: [
            _1.JhipsterdemoSharedLibsModule,
            _1.FindLanguageFromKeyPipe,
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent
        ]
    })
], JhipsterdemoSharedCommonModule);
exports.JhipsterdemoSharedCommonModule = JhipsterdemoSharedCommonModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-libs.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(16);
var http_1 = __webpack_require__(4);
var common_1 = __webpack_require__(11);
var ng_bootstrap_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(2);
var ngx_infinite_scroll_1 = __webpack_require__(17);
var ngx_cookie_1 = __webpack_require__(12);
var JhipsterdemoSharedLibsModule = (function () {
    function JhipsterdemoSharedLibsModule() {
    }
    return JhipsterdemoSharedLibsModule;
}());
JhipsterdemoSharedLibsModule = __decorate([
    core_1.NgModule({
        imports: [
            ng_bootstrap_1.NgbModule.forRoot(),
            ng_jhipster_1.NgJhipsterModule.forRoot({
                // set below to true to make alerts look like toast
                alertAsToast: false,
                i18nEnabled: true,
                defaultI18nLang: 'en'
            }),
            ngx_infinite_scroll_1.InfiniteScrollModule,
            ngx_cookie_1.CookieModule.forRoot()
        ],
        exports: [
            forms_1.FormsModule,
            http_1.HttpModule,
            common_1.CommonModule,
            ng_bootstrap_1.NgbModule,
            ng_jhipster_1.NgJhipsterModule,
            ngx_infinite_scroll_1.InfiniteScrollModule
        ]
    })
], JhipsterdemoSharedLibsModule);
exports.JhipsterdemoSharedLibsModule = JhipsterdemoSharedLibsModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(11);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhipsterdemoSharedModule = (function () {
    function JhipsterdemoSharedModule() {
    }
    return JhipsterdemoSharedModule;
}());
JhipsterdemoSharedModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.JhipsterdemoSharedLibsModule,
            _1.JhipsterdemoSharedCommonModule
        ],
        declarations: [
            _1.JhiLoginModalComponent,
            _1.HasAnyAuthorityDirective
        ],
        providers: [
            _1.LoginService,
            _1.LoginModalService,
            _1.AccountService,
            _1.StateStorageService,
            _1.Principal,
            _1.CSRFService,
            _1.AuthServerProvider,
            _1.UserService,
            common_1.DatePipe
        ],
        entryComponents: [_1.JhiLoginModalComponent],
        exports: [
            _1.JhipsterdemoSharedCommonModule,
            _1.JhiLoginModalComponent,
            _1.HasAnyAuthorityDirective,
            common_1.DatePipe
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], JhipsterdemoSharedModule);
exports.JhipsterdemoSharedModule = JhipsterdemoSharedModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/account.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Account = (function () {
    function Account(activated, authorities, email, firstName, langKey, lastName, login, imageUrl) {
        this.activated = activated;
        this.authorities = authorities;
        this.email = email;
        this.firstName = firstName;
        this.langKey = langKey;
        this.lastName = lastName;
        this.login = login;
        this.imageUrl = imageUrl;
    }
    return Account;
}());
exports.Account = Account;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(id, login, firstName, lastName, email, activated, langKey, authorities, createdBy, createdDate, lastModifiedBy, lastModifiedDate, password) {
        this.id = id ? id : null;
        this.login = login ? login : null;
        this.firstName = firstName ? firstName : null;
        this.lastName = lastName ? lastName : null;
        this.email = email ? email : null;
        this.activated = activated ? activated : false;
        this.langKey = langKey ? langKey : null;
        this.authorities = authorities ? authorities : null;
        this.createdBy = createdBy ? createdBy : null;
        this.createdDate = createdDate ? createdDate : null;
        this.lastModifiedBy = lastModifiedBy ? lastModifiedBy : null;
        this.lastModifiedDate = lastModifiedDate ? lastModifiedDate : null;
        this.password = password ? password : null;
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(4);
var response_wrapper_model_1 = __webpack_require__("./src/main/webapp/app/shared/model/response-wrapper.model.ts");
var request_util_1 = __webpack_require__("./src/main/webapp/app/shared/model/request-util.ts");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.resourceUrl = 'api/users';
    }
    UserService.prototype.create = function (user) {
        var _this = this;
        return this.http.post(this.resourceUrl, user)
            .map(function (res) { return _this.convertResponse(res); });
    };
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.http.put(this.resourceUrl, user)
            .map(function (res) { return _this.convertResponse(res); });
    };
    UserService.prototype.find = function (login) {
        return this.http.get(this.resourceUrl + "/" + login).map(function (res) { return res.json(); });
    };
    UserService.prototype.query = function (req) {
        var _this = this;
        var options = request_util_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map(function (res) { return _this.convertResponse(res); });
    };
    UserService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login);
    };
    UserService.prototype.authorities = function () {
        return this.http.get('api/users/authorities').map(function (res) {
            var json = res.json();
            return json;
        });
    };
    UserService.prototype.convertResponse = function (res) {
        var jsonResponse = res.json();
        return new response_wrapper_model_1.ResponseWrapper(res.headers, jsonResponse, res.status);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./src/main/webapp/content/images/hipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "content/ca854e6d0785ba4b9d715049c0bdbcb3.png";

/***/ }),

/***/ "./src/main/webapp/content/images/hipster2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "content/1cd3a1d782e85ba37677c1a2099bc002.png";

/***/ }),

/***/ "./src/main/webapp/content/images/logo-jhipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "content/a30deb26b4eb1521433021e326cbcc2c.png";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1);

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(66);

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(7);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(213);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(207);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(13);

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(214);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(215);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(211);

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(5);

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(86);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(208);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(49);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(209);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(212);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(0);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(24);

/***/ })

},["./src/main/webapp/app/app.main.ts"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjY291bnQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNzcz83NzBkIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXQtZGF0YS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZG9jcy9kb2NzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2cubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbW9kYWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvY29uZmlnL3Byb2QuY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2NvbmZpZy91aWItcGFnaW5hdGlvbi5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC1leHBpcmVkLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2F1dGguaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2h0dHAucHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3Ivbm90aWZpY2F0aW9uLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZW50aXR5Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY3NzP2Q3OTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3IuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3Iucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbGF5b3V0LXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9hY3RpdmUtbWVudS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNzcz82NTcwIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLmNzcz83YjNhIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wcm9maWxlLWluZm8ubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYWNjb3VudC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYXV0aC1qd3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2NzcmYuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2hhcy1hbnktYXV0aG9yaXR5LmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3ByaW5jaXBhbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvc3RhdGUtc3RvcmFnZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvdXNlci1yb3V0ZS1hY2Nlc3Mtc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9jb25zdGFudHMvcGFnaW5hdGlvbi5jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbGFuZ3VhZ2UvZmluZC1sYW5ndWFnZS1mcm9tLWtleS5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xhbmd1YWdlL2xhbmd1YWdlLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sYW5ndWFnZS9sYW5ndWFnZS5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4tbW9kYWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9tb2RlbC9yZXF1ZXN0LXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbW9kZWwvcmVzcG9uc2Utd3JhcHBlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQtY29tbW9uLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQtbGlicy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC91c2VyL2FjY291bnQubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci91c2VyLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L2ltYWdlcy9oaXBzdGVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3RlcjJ4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvbG9nby1qaGlwc3Rlci5wbmciLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL0Bhbmd1bGFyL2NvcmUuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9Abmd4LXRyYW5zbGF0ZS9jb3JlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21tb24vQGFuZ3VsYXIvY29tbW9uLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmd4LWNvb2tpZS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Zvcm1zL0Bhbmd1bGFyL2Zvcm1zLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmd4LWluZmluaXRlLXNjcm9sbC9tb2R1bGVzL25neC1pbmZpbml0ZS1zY3JvbGwuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL3NyYy9tYWluL3dlYmFwcC9hcHAvdmVuZG9yLnRzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZy1qaGlwc3Rlci9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJqZWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL1J4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvQGFuZ3VsYXIvcm91dGVyLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9AYW5ndWxhci9odHRwLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25nMi13ZWJzdG9yYWdlL2Rpc3QvYXBwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsME9BQTJPLHFCQUFxQixzQkFBc0IsZUFBZSx1QkFBdUIsZ0JBQWdCLHlCQUF5QixHQUFHLGlCQUFpQiwwQkFBMEIsR0FBRyxVQUFVLHNCQUFzQix3QkFBd0IsMkJBQTJCLGlCQUFpQix1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Qzs7Ozs7OztBQ0FBLDhDOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDQUEsNkM7Ozs7Ozs7QUNBQSw4Qzs7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDQUEsNkM7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJhcHAvbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbnN0YXJ0IFBhc3N3b3JkIHN0cmVuZ3RoIGJhciBzdHlsZVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxudWwjc3RyZW5ndGhCYXIge1xcbiAgICBkaXNwbGF5OmlubGluZTtcXG4gICAgbGlzdC1zdHlsZTpub25lO1xcbiAgICBtYXJnaW46MDtcXG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcXG4gICAgcGFkZGluZzowO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjoycHg7XFxufVxcblxcbi5wb2ludDpsYXN0IHtcXG4gICAgbWFyZ2luOjAgIWltcG9ydGFudDtcXG59XFxuLnBvaW50IHtcXG4gICAgYmFja2dyb3VuZDojREREO1xcbiAgICBib3JkZXItcmFkaXVzOjJweDtcXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDo1cHg7XFxuICAgIG1hcmdpbi1yaWdodDoxcHg7XFxuICAgIHdpZHRoOjIwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbk1haW4gcGFnZSBzdHlsZXNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5oaXBzdGVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzQ3cHg7XFxuICAgIGhlaWdodDogNDk3cHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9jb250ZW50L2ltYWdlcy9oaXBzdGVyLnBuZ1wiKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4vKiB3YWl0IGF1dG9wcmVmaXhlciB1cGRhdGUgdG8gYWxsb3cgc2ltcGxlIGdlbmVyYXRpb24gb2YgaGlnaCBwaXhlbCBkZW5zaXR5IG1lZGlhIHF1ZXJ5ICovXFxuQG1lZGlhXFxub25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxcbm9ubHkgc2NyZWVuIGFuZCAoICAgbWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcXG5vbmx5IHNjcmVlbiBhbmQgKCAgICAgLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcXG5vbmx5IHNjcmVlbiBhbmQgKCAgICAgICAgbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXFxub25seSBzY3JlZW4gYW5kICggICAgICAgICAgICAgICAgbWluLXJlc29sdXRpb246IDE5MmRwaSksXFxub25seSBzY3JlZW4gYW5kICggICAgICAgICAgICAgICAgbWluLXJlc29sdXRpb246IDJkcHB4KSB7XFxuICAgIC5oaXBzdGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9jb250ZW50L2ltYWdlcy9oaXBzdGVyMngucG5nXCIpICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICB9XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuTmF2YmFyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4ubmF2YmFyLXZlcnNpb24ge1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGNvbG9yOiAjY2NjXFxufVxcblxcbi5qaC1uYXZiYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzZDQ3O1xcbiAgICBwYWRkaW5nOiAuMmVtIDFlbTtcXG59XFxuXFxuLmpoLW5hdmJhciAucHJvZmlsZS1pbWFnZSB7XFxuICAgIG1hcmdpbjogLTEwcHggMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5qaC1uYXZiYXIgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlLCAuamgtbmF2YmFyIC5kcm9wZG93bi1pdGVtLmFjdGl2ZTpmb2N1cywgLmpoLW5hdmJhciAuZHJvcGRvd24taXRlbS5hY3RpdmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzZDQ3O1xcbn1cXG5cXG4uamgtbmF2YmFyIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMTVlbTtcXG59XFxuXFxuLmpoLW5hdmJhciB1bC5uYXZiYXItbmF2IHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbi5qaC1uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG59XFxuXFxuLmpoLW5hdmJhciBhLm5hdi1saW5rIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmpoLW5hdmJhciAuamgtbmF2YmFyLXRvZ2dsZXIge1xcbiAgICBjb2xvcjogI2NjYztcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmpoLW5hdmJhciAuamgtbmF2YmFyLXRvZ2dsZXI6aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgLmpoLWxvZ28tY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbi5uYXZiYXItdGl0bGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuTG9nbyBzdHlsZXNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5uYXZiYXItYnJhbmQubG9nbyB7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbn1cXG5cXG4ubG9nbyAubG9nby1pbWcge1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2lkdGg6IDcwcHg7XFxufVxcblxcbi5sb2dvLWltZyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uLy4uL2NvbnRlbnQvaW1hZ2VzL2xvZ28tamhpcHN0ZXIucG5nXCIpICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbkRldmVsb3BlbWVudCBSaWJib25cXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5yaWJib24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MCwgMCwgMCwgMC41KTtcXG4gICAgbGVmdDogLTMuNWVtO1xcbiAgICBtb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB3ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLnJpYmJvbiBhIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW46IDFweCAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjNDQ0O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSmhpcHN0ZXJkZW1vU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkJztcblxuaW1wb3J0IHtcbiAgICBSZWdpc3RlcixcbiAgICBBY3RpdmF0ZVNlcnZpY2UsXG4gICAgUGFzc3dvcmRTZXJ2aWNlLFxuICAgIFBhc3N3b3JkUmVzZXRJbml0U2VydmljZSxcbiAgICBQYXNzd29yZFJlc2V0RmluaXNoU2VydmljZSxcbiAgICBQYXNzd29yZFN0cmVuZ3RoQmFyQ29tcG9uZW50LFxuICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgIEFjdGl2YXRlQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50LFxuICAgIFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQsXG4gICAgU2V0dGluZ3NDb21wb25lbnQsXG4gICAgYWNjb3VudFN0YXRlXG59IGZyb20gJy4vJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEpoaXBzdGVyZGVtb1NoYXJlZE1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoYWNjb3VudFN0YXRlLCB7IHVzZUhhc2g6IHRydWUgfSlcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBY3RpdmF0ZUNvbXBvbmVudCxcbiAgICAgICAgUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgIFBhc3N3b3JkQ29tcG9uZW50LFxuICAgICAgICBQYXNzd29yZFN0cmVuZ3RoQmFyQ29tcG9uZW50LFxuICAgICAgICBQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudCxcbiAgICAgICAgUGFzc3dvcmRSZXNldEZpbmlzaENvbXBvbmVudCxcbiAgICAgICAgU2V0dGluZ3NDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBSZWdpc3RlcixcbiAgICAgICAgQWN0aXZhdGVTZXJ2aWNlLFxuICAgICAgICBQYXNzd29yZFNlcnZpY2UsXG4gICAgICAgIFBhc3N3b3JkUmVzZXRJbml0U2VydmljZSxcbiAgICAgICAgUGFzc3dvcmRSZXNldEZpbmlzaFNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBKaGlwc3RlcmRlbW9BY2NvdW50TW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICAgIGFjdGl2YXRlUm91dGUsXG4gICAgcGFzc3dvcmRSb3V0ZSxcbiAgICBwYXNzd29yZFJlc2V0RmluaXNoUm91dGUsXG4gICAgcGFzc3dvcmRSZXNldEluaXRSb3V0ZSxcbiAgICByZWdpc3RlclJvdXRlLFxuICAgIHNldHRpbmdzUm91dGVcbn0gZnJvbSAnLi8nO1xuXG5jb25zdCBBQ0NPVU5UX1JPVVRFUyA9IFtcbiAgICBhY3RpdmF0ZVJvdXRlLFxuICAgIHBhc3N3b3JkUm91dGUsXG4gICAgcGFzc3dvcmRSZXNldEZpbmlzaFJvdXRlLFxuICAgIHBhc3N3b3JkUmVzZXRJbml0Um91dGUsXG4gICAgcmVnaXN0ZXJSb3V0ZSxcbiAgICBzZXR0aW5nc1JvdXRlXG5dO1xuXG5leHBvcnQgY29uc3QgYWNjb3VudFN0YXRlOiBSb3V0ZXMgPSBbe1xuICAgIHBhdGg6ICcnLFxuICAgIGNoaWxkcmVuOiBBQ0NPVU5UX1JPVVRFU1xufV07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5yb3V0ZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxoMSBqaGlUcmFuc2xhdGU9XFxcImFjdGl2YXRlLnRpdGxlXFxcIj5BY3RpdmF0aW9uPC9oMT4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImFjdGl2YXRlLm1lc3NhZ2VzLnN1Y2Nlc3NcXFwiPjxzdHJvbmc+WW91ciB1c2VyIGFjY291bnQgaGFzIGJlZW4gYWN0aXZhdGVkLjwvc3Ryb25nPiBQbGVhc2UgPC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwibG9naW4oKVxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLmxpbmtcXFwiPnNpZ24gaW48L2E+LiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiYWN0aXZhdGUubWVzc2FnZXMuZXJyb3JcXFwiPiA8c3Ryb25nPllvdXIgdXNlciBjb3VsZCBub3QgYmUgYWN0aXZhdGVkLjwvc3Ryb25nPiBQbGVhc2UgdXNlIHRoZSByZWdpc3RyYXRpb24gZm9ybSB0byBzaWduIHVwLiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQWN0aXZhdGVTZXJ2aWNlIH0gZnJvbSAnLi9hY3RpdmF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktYWN0aXZhdGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hY3RpdmF0ZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAgc3VjY2Vzczogc3RyaW5nO1xuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlU2VydmljZTogQWN0aXZhdGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxvZ2luTW9kYWxTZXJ2aWNlOiBMb2dpbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVNlcnZpY2UuZ2V0KHBhcmFtc1sna2V5J10pLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBBY3RpdmF0ZUNvbXBvbmVudCB9IGZyb20gJy4vYWN0aXZhdGUuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdhY3RpdmF0ZScsXG4gICAgY29tcG9uZW50OiBBY3RpdmF0ZUNvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICAgICAgcGFnZVRpdGxlOiAnYWN0aXZhdGUudGl0bGUnXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0aXZhdGVTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIGdldChrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMuc2V0KCdrZXknLCBrZXkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdhcGkvYWN0aXZhdGUnLCB7XG4gICAgICAgICAgICBzZWFyY2g6IHBhcmFtc1xuICAgICAgICB9KS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLnNlcnZpY2UudHMiLCJleHBvcnQgKiBmcm9tICcuL2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2FjdGl2YXRlL2FjdGl2YXRlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3RpdmF0ZS9hY3RpdmF0ZS5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC9wYXNzd29yZC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQvcGFzc3dvcmQucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2gucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVnaXN0ZXIvcmVnaXN0ZXIucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2FjY291bnQucm91dGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00IGNvbC1tZC1vZmZzZXQtNFxcXCI+IDxoMSBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LmZpbmlzaC50aXRsZVxcXCI+UmVzZXQgcGFzc3dvcmQ8L2gxPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVzZXQuZmluaXNoLm1lc3NhZ2VzLmtleW1pc3NpbmdcXFwiICpuZ0lmPVxcXCJrZXlNaXNzaW5nXFxcIj4gPHN0cm9uZz5UaGUgcGFzc3dvcmQgcmVzZXQga2V5IGlzIG1pc3NpbmcuPC9zdHJvbmc+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIiAqbmdJZj1cXFwiIXN1Y2Nlc3MgJiYgIWtleU1pc3NpbmdcXFwiPiA8cCBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LmZpbmlzaC5tZXNzYWdlcy5pbmZvXFxcIj5DaG9vc2UgYSBuZXcgcGFzc3dvcmQ8L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlcnJvclxcXCI+IDxwIGpoaVRyYW5zbGF0ZT1cXFwicmVzZXQuZmluaXNoLm1lc3NhZ2VzLmVycm9yXFxcIj5Zb3VyIHBhc3N3b3JkIGNvdWxkbid0IGJlIHJlc2V0LiBSZW1lbWJlciBhIHBhc3N3b3JkIHJlcXVlc3QgaXMgb25seSB2YWxpZCBmb3IgMjQgaG91cnMuPC9wPiA8L2Rpdj4gPHAgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ0lmPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJyZXNldC5maW5pc2gubWVzc2FnZXMuc3VjY2Vzc1xcXCI+PHN0cm9uZz5Zb3VyIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0Ljwvc3Ryb25nPiBQbGVhc2UgPC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwibG9naW4oKVxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLmxpbmtcXFwiPnNpZ24gaW48L2E+LiA8L3A+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImRvTm90TWF0Y2hcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmVycm9yLmRvbnRtYXRjaFxcXCI+IFRoZSBwYXNzd29yZCBhbmQgaXRzIGNvbmZpcm1hdGlvbiBkbyBub3QgbWF0Y2ghIDwvZGl2PiA8ZGl2ICpuZ0lmPVxcXCIha2V5TWlzc2luZ1xcXCI+IDxmb3JtICpuZ0lmPVxcXCIhc3VjY2Vzc1xcXCIgbmFtZT1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwiZmluaXNoUmVzZXQoKVxcXCIgI3Bhc3N3b3JkRm9ybT1cXFwibmdGb3JtXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInBhc3N3b3JkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5mb3JtLm5ld3Bhc3N3b3JkXFxcIj5OZXcgcGFzc3dvcmQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiICNwYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0ubmV3cGFzc3dvcmQucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJyZXNldEFjY291bnQucGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZGlydHkgJiYgcGFzc3dvcmRJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQucmVxdWlyZWRcXFwiPiBZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQubWlubGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5uZXdwYXNzd29yZC5tYXhsZW5ndGhcXFwiPiBZb3VyIHBhc3N3b3JkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPGpoaS1wYXNzd29yZC1zdHJlbmd0aC1iYXIgW3Bhc3N3b3JkVG9DaGVja109XFxcInJlc2V0QWNjb3VudC5wYXNzd29yZFxcXCI+PC9qaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS5jb25maXJtcGFzc3dvcmRcXFwiPk5ldyBwYXNzd29yZCBjb25maXJtYXRpb248L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgI2NvbmZpcm1QYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0uY29uZmlybXBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiBbKG5nTW9kZWwpXT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBtaW5sZW5ndGg9XFxcIjRcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5kaXJ0eSAmJiBjb25maXJtUGFzc3dvcmRJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmNvbmZpcm1wYXNzd29yZC5yZXF1aXJlZFxcXCI+IFlvdXIgcGFzc3dvcmQgY29uZmlybWF0aW9uIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmNvbmZpcm1wYXNzd29yZC5taW5sZW5ndGhcXFwiPiBZb3VyIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuY29uZmlybXBhc3N3b3JkLm1heGxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgY29uZmlybWF0aW9uIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJwYXNzd29yZEZvcm0uZm9ybS5pbnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LmZpbmlzaC5mb3JtLmJ1dHRvblxcXCI+UmVzZXQgUGFzc3dvcmQ8L2J1dHRvbj4gPC9mb3JtPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0RmluaXNoU2VydmljZSB9IGZyb20gJy4vcGFzc3dvcmQtcmVzZXQtZmluaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1wYXNzd29yZC1yZXNldC1maW5pc2gnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICAgIGRvTm90TWF0Y2g6IHN0cmluZztcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIGtleU1pc3Npbmc6IGJvb2xlYW47XG4gICAgcmVzZXRBY2NvdW50OiBhbnk7XG4gICAgc3VjY2Vzczogc3RyaW5nO1xuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICBrZXk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhc3N3b3JkUmVzZXRGaW5pc2hTZXJ2aWNlOiBQYXNzd29yZFJlc2V0RmluaXNoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsb2dpbk1vZGFsU2VydmljZTogTG9naW5Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5ID0gcGFyYW1zWydrZXknXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVzZXRBY2NvdW50ID0ge307XG4gICAgICAgIHRoaXMua2V5TWlzc2luZyA9ICF0aGlzLmtleTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpLCAnZm9jdXMnLCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5pc2hSZXNldCgpIHtcbiAgICAgICAgdGhpcy5kb05vdE1hdGNoID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnJlc2V0QWNjb3VudC5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9ICdFUlJPUic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVzZXRGaW5pc2hTZXJ2aWNlLnNhdmUoe2tleTogdGhpcy5rZXksIG5ld1Bhc3N3b3JkOiB0aGlzLnJlc2V0QWNjb3VudC5wYXNzd29yZH0pLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0RmluaXNoQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkUmVzZXRGaW5pc2hSb3V0ZTogUm91dGUgPSB7XG4gICAgcGF0aDogJ3Jlc2V0L2ZpbmlzaCcsXG4gICAgY29tcG9uZW50OiBQYXNzd29yZFJlc2V0RmluaXNoQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgICAgICBwYWdlVGl0bGU6ICdnbG9iYWwubWVudS5hY2NvdW50LnBhc3N3b3JkJ1xuICAgIH0sXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRSZXNldEZpbmlzaFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgc2F2ZShrZXlBbmRQYXNzd29yZDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvYWNjb3VudC9yZXNldF9wYXNzd29yZC9maW5pc2gnLCBrZXlBbmRQYXNzd29yZCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxoMSBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LnJlcXVlc3QudGl0bGVcXFwiPlJlc2V0IHlvdXIgcGFzc3dvcmQ8L2gxPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVzZXQucmVxdWVzdC5tZXNzYWdlcy5ub3Rmb3VuZFxcXCIgKm5nSWY9XFxcImVycm9yRW1haWxOb3RFeGlzdHNcXFwiPiA8c3Ryb25nPkVtYWlsIGFkZHJlc3MgaXNuJ3QgcmVnaXN0ZXJlZCE8L3N0cm9uZz4gUGxlYXNlIGNoZWNrIGFuZCB0cnkgYWdhaW4uIDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIiAqbmdJZj1cXFwiIXN1Y2Nlc3NcXFwiPiA8cCBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LnJlcXVlc3QubWVzc2FnZXMuaW5mb1xcXCI+RW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIuPC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3MgPT09ICdPSydcXFwiPiA8cCBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LnJlcXVlc3QubWVzc2FnZXMuc3VjY2Vzc1xcXCI+Q2hlY2sgeW91ciBlbWFpbHMgZm9yIGRldGFpbHMgb24gaG93IHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuPC9wPiA8L2Rpdj4gPGZvcm0gKm5nSWY9XFxcIiFzdWNjZXNzXFxcIiBuYW1lPVxcXCJmb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJyZXF1ZXN0UmVzZXQoKVxcXCIgI3Jlc2V0UmVxdWVzdEZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS5lbWFpbFxcXCI+RW1haWw8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS5lbWFpbC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInJlc2V0QWNjb3VudC5lbWFpbFxcXCIgbWlubGVuZ3RoPVxcXCI1XFxcIiBtYXhsZW5ndGg9XFxcIjEwMFxcXCIgI2VtYWlsSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJlbWFpbElucHV0LmRpcnR5ICYmIGVtYWlsSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLnJlcXVpcmVkXFxcIj4gWW91ciBlbWFpbCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5lbWFpbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwuaW52YWxpZFxcXCI+IFlvdXIgZW1haWwgaXMgaW52YWxpZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLm1pbmxlbmd0aFxcXCI+IFlvdXIgZW1haWwgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwubWF4bGVuZ3RoXFxcIj4gWW91ciBlbWFpbCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMTAwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcInJlc2V0UmVxdWVzdEZvcm0uZm9ybS5pbnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LnJlcXVlc3QuZm9ybS5idXR0b25cXFwiPlJlc2V0PC9idXR0b24+IDwvZm9ybT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhc3N3b3JkUmVzZXRJbml0U2VydmljZSB9IGZyb20gJy4vcGFzc3dvcmQtcmVzZXQtaW5pdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktcGFzc3dvcmQtcmVzZXQtaW5pdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIGVycm9yRW1haWxOb3RFeGlzdHM6IHN0cmluZztcbiAgICByZXNldEFjY291bnQ6IGFueTtcbiAgICBzdWNjZXNzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYXNzd29yZFJlc2V0SW5pdFNlcnZpY2U6IFBhc3N3b3JkUmVzZXRJbml0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlclxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJlc2V0QWNjb3VudCA9IHt9O1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpLCAnZm9jdXMnLCBbXSk7XG4gICAgfVxuXG4gICAgcmVxdWVzdFJlc2V0KCkge1xuICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcnJvckVtYWlsTm90RXhpc3RzID0gbnVsbDtcblxuICAgICAgICB0aGlzLnBhc3N3b3JkUmVzZXRJbml0U2VydmljZS5zYXZlKHRoaXMucmVzZXRBY2NvdW50LmVtYWlsKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwICYmIHJlc3BvbnNlLmRhdGEgPT09ICdlbWFpbCBhZGRyZXNzIG5vdCByZWdpc3RlcmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JFbWFpbE5vdEV4aXN0cyA9ICdFUlJPUic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRSZXNldEluaXRSb3V0ZTogUm91dGUgPSB7XG4gICAgcGF0aDogJ3Jlc2V0L3JlcXVlc3QnLFxuICAgIGNvbXBvbmVudDogUGFzc3dvcmRSZXNldEluaXRDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBhdXRob3JpdGllczogW10sXG4gICAgICAgIHBhZ2VUaXRsZTogJ2dsb2JhbC5tZW51LmFjY291bnQucGFzc3dvcmQnXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRJbml0U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICBzYXZlKG1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL2FjY291bnQvcmVzZXRfcGFzc3dvcmQvaW5pdCcsIG1haWwpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXBhc3N3b3JkLXN0cmVuZ3RoLWJhcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBpZD1cInN0cmVuZ3RoXCI+XG4gICAgICAgICAgICA8c21hbGwgamhpVHJhbnNsYXRlPVwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLnN0cmVuZ3RoXCI+UGFzc3dvcmQgc3RyZW5ndGg6PC9zbWFsbD5cbiAgICAgICAgICAgIDx1bCBpZD1cInN0cmVuZ3RoQmFyXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBvaW50XCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwb2ludFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBvaW50XCI+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICdwYXNzd29yZC1zdHJlbmd0aC1iYXIuY3NzJ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRTdHJlbmd0aEJhckNvbXBvbmVudCB7XG5cbiAgICBjb2xvcnMgPSBbJyNGMDAnLCAnI0Y5MCcsICcjRkYwJywgJyM5RjAnLCAnIzBGMCddO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgICBtZWFzdXJlU3RyZW5ndGgocDogc3RyaW5nKTogbnVtYmVyIHtcblxuICAgICAgICBsZXQgZm9yY2UgPSAwO1xuICAgICAgICBjb25zdCByZWdleCA9IC9bJC0vOi0/ey1+IVwiXl9gXFxbXFxdXS9nOyAvLyBcIlxuICAgICAgICBjb25zdCBsb3dlckxldHRlcnMgPSAvW2Etel0rLy50ZXN0KHApO1xuICAgICAgICBjb25zdCB1cHBlckxldHRlcnMgPSAvW0EtWl0rLy50ZXN0KHApO1xuICAgICAgICBjb25zdCBudW1iZXJzID0gL1swLTldKy8udGVzdChwKTtcbiAgICAgICAgY29uc3Qgc3ltYm9scyA9IHJlZ2V4LnRlc3QocCk7XG5cbiAgICAgICAgY29uc3QgZmxhZ3MgPSBbbG93ZXJMZXR0ZXJzLCB1cHBlckxldHRlcnMsIG51bWJlcnMsIHN5bWJvbHNdO1xuICAgICAgICBjb25zdCBwYXNzZWRNYXRjaGVzID0gZmxhZ3MuZmlsdGVyKCAoaXNNYXRjaGVkRmxhZzogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlzTWF0Y2hlZEZsYWcgPT09IHRydWU7XG4gICAgICAgIH0pLmxlbmd0aDtcblxuICAgICAgICBmb3JjZSArPSAyICogcC5sZW5ndGggKyAoKHAubGVuZ3RoID49IDEwKSA/IDEgOiAwKTtcbiAgICAgICAgZm9yY2UgKz0gcGFzc2VkTWF0Y2hlcyAqIDEwO1xuXG4gICAgICAgIC8vIHBlbmFsaXR5IChzaG9ydCBwYXNzd29yZClcbiAgICAgICAgZm9yY2UgPSAocC5sZW5ndGggPD0gNikgPyBNYXRoLm1pbihmb3JjZSwgMTApIDogZm9yY2U7XG5cbiAgICAgICAgLy8gcGVuYWxpdHkgKHBvb3IgdmFyaWV0eSBvZiBjaGFyYWN0ZXJzKVxuICAgICAgICBmb3JjZSA9IChwYXNzZWRNYXRjaGVzID09PSAxKSA/IE1hdGgubWluKGZvcmNlLCAxMCkgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgPSAocGFzc2VkTWF0Y2hlcyA9PT0gMikgPyBNYXRoLm1pbihmb3JjZSwgMjApIDogZm9yY2U7XG4gICAgICAgIGZvcmNlID0gKHBhc3NlZE1hdGNoZXMgPT09IDMpID8gTWF0aC5taW4oZm9yY2UsIDQwKSA6IGZvcmNlO1xuXG4gICAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9O1xuXG4gICAgZ2V0Q29sb3IoczogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICAgIGlmIChzIDw9IDEwKSB7XG4gICAgICAgICAgICBpZHggPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHMgPD0gMjApIHtcbiAgICAgICAgICAgIGlkeCA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAocyA8PSAzMCkge1xuICAgICAgICAgICAgaWR4ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChzIDw9IDQwKSB7XG4gICAgICAgICAgICBpZHggPSAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWR4ID0gNDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2lkeDogaWR4ICsgMSwgY29sOiB0aGlzLmNvbG9yc1tpZHhdfTtcbiAgICB9O1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgcGFzc3dvcmRUb0NoZWNrKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHBhc3N3b3JkKSB7XG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5nZXRDb2xvcih0aGlzLm1lYXN1cmVTdHJlbmd0aChwYXNzd29yZCkpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTmFtZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhlbGVtZW50LCBlbGVtZW50LmNsYXNzTmFtZSAsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxpcyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpIDwgYy5pZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUobGlzW2ldLCAnYmFja2dyb3VuZENvbG9yJywgYy5jb2wpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGxpc1tpXSwgJ2JhY2tncm91bmRDb2xvcicsICcjREREJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5jb21wb25lbnQudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPiA8aDIgamhpVHJhbnNsYXRlPVxcXCJwYXNzd29yZC50aXRsZVxcXCIgdHJhbnNsYXRlVmFsdWVzPVxcXCJ7dXNlcm5hbWU6ICd7e2FjY291bnQubG9naW59fSd9XFxcIiAqbmdJZj1cXFwiYWNjb3VudFxcXCI+UGFzc3dvcmQgZm9yIFs8Yj57e2FjY291bnQubG9naW59fTwvYj5dPC9oMj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicGFzc3dvcmQubWVzc2FnZXMuc3VjY2Vzc1xcXCI+IDxzdHJvbmc+UGFzc3dvcmQgY2hhbmdlZCE8L3N0cm9uZz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVycm9yXFxcIiBqaGlUcmFuc2xhdGU9XFxcInBhc3N3b3JkLm1lc3NhZ2VzLmVycm9yXFxcIj4gPHN0cm9uZz5BbiBlcnJvciBoYXMgb2NjdXJyZWQhPC9zdHJvbmc+IFRoZSBwYXNzd29yZCBjb3VsZCBub3QgYmUgY2hhbmdlZC4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImRvTm90TWF0Y2hcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmVycm9yLmRvbnRtYXRjaFxcXCI+IFRoZSBwYXNzd29yZCBhbmQgaXRzIGNvbmZpcm1hdGlvbiBkbyBub3QgbWF0Y2ghIDwvZGl2PiA8Zm9ybSBuYW1lPVxcXCJmb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJjaGFuZ2VQYXNzd29yZCgpXFxcIiAjcGFzc3dvcmRGb3JtPVxcXCJuZ0Zvcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0ubmV3cGFzc3dvcmRcXFwiPk5ldyBwYXNzd29yZDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgI3Bhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS5uZXdwYXNzd29yZC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInBhc3N3b3JkXFxcIiBtaW5sZW5ndGg9XFxcIjRcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmRpcnR5ICYmIHBhc3N3b3JkSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLnJlcXVpcmVkXFxcIj4gWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLm1pbmxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQubWF4bGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDxqaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyIFtwYXNzd29yZFRvQ2hlY2tdPVxcXCJwYXNzd29yZFxcXCI+PC9qaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS5jb25maXJtcGFzc3dvcmRcXFwiPk5ldyBwYXNzd29yZCBjb25maXJtYXRpb248L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgI2NvbmZpcm1QYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0uY29uZmlybXBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiBbKG5nTW9kZWwpXT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBtaW5sZW5ndGg9XFxcIjRcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5kaXJ0eSAmJiBjb25maXJtUGFzc3dvcmRJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmNvbmZpcm1wYXNzd29yZC5yZXF1aXJlZFxcXCI+IFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmNvbmZpcm1wYXNzd29yZC5taW5sZW5ndGhcXFwiPiBZb3VyIGNvbmZpcm1hdGlvbiBwYXNzd29yZCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuY29uZmlybXBhc3N3b3JkLm1heGxlbmd0aFxcXCI+IFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJwYXNzd29yZEZvcm0uZm9ybS5pbnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBqaGlUcmFuc2xhdGU9XFxcInBhc3N3b3JkLmZvcm0uYnV0dG9uXFxcIj5TYXZlPC9idXR0b24+IDwvZm9ybT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByaW5jaXBhbCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYXNzd29yZFNlcnZpY2UgfSBmcm9tICcuL3Bhc3N3b3JkLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1wYXNzd29yZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Bhc3N3b3JkLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZG9Ob3RNYXRjaDogc3RyaW5nO1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAgc3VjY2Vzczogc3RyaW5nO1xuICAgIGFjY291bnQ6IGFueTtcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWxcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQYXNzd29yZCgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFzc3dvcmQgIT09IHRoaXMuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRvTm90TWF0Y2ggPSAnRVJST1InO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kb05vdE1hdGNoID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRTZXJ2aWNlLnNhdmUodGhpcy5wYXNzd29yZCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSAnT0snO1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdFUlJPUic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3Bhc3N3b3JkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBwYXNzd29yZFJvdXRlOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAncGFzc3dvcmQnLFxuICAgIGNvbXBvbmVudDogUGFzc3dvcmRDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBhdXRob3JpdGllczogWydST0xFX1VTRVInXSxcbiAgICAgICAgcGFnZVRpdGxlOiAnZ2xvYmFsLm1lbnUuYWNjb3VudC5wYXNzd29yZCdcbiAgICB9LFxuICAgIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgc2F2ZShuZXdQYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvYWNjb3VudC9jaGFuZ2VfcGFzc3dvcmQnLCBuZXdQYXNzd29yZCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPiA8aDEgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci50aXRsZVxcXCI+UmVnaXN0cmF0aW9uPC9oMT4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVnaXN0ZXIubWVzc2FnZXMuc3VjY2Vzc1xcXCI+IDxzdHJvbmc+UmVnaXN0cmF0aW9uIHNhdmVkITwvc3Ryb25nPiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgY29uZmlybWF0aW9uLiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVnaXN0ZXIubWVzc2FnZXMuZXJyb3IuZmFpbFxcXCI+IDxzdHJvbmc+UmVnaXN0cmF0aW9uIGZhaWxlZCE8L3N0cm9uZz4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVycm9yVXNlckV4aXN0c1xcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5tZXNzYWdlcy5lcnJvci51c2VyZXhpc3RzXFxcIj4gPHN0cm9uZz5Mb2dpbiBuYW1lIGFscmVhZHkgcmVnaXN0ZXJlZCE8L3N0cm9uZz4gUGxlYXNlIGNob29zZSBhbm90aGVyIG9uZS4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVycm9yRW1haWxFeGlzdHNcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVnaXN0ZXIubWVzc2FnZXMuZXJyb3IuZW1haWxleGlzdHNcXFwiPiA8c3Ryb25nPkVtYWlsIGlzIGFscmVhZHkgaW4gdXNlITwvc3Ryb25nPiBQbGVhc2UgY2hvb3NlIGFub3RoZXIgb25lLiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZG9Ob3RNYXRjaFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuZXJyb3IuZG9udG1hdGNoXFxcIj4gVGhlIHBhc3N3b3JkIGFuZCBpdHMgY29uZmlybWF0aW9uIGRvIG5vdCBtYXRjaCEgPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInJlZ2lzdGVyKClcXFwiICNyZWdpc3RlckZvcm09XFxcIm5nRm9ybVxcXCIgKm5nSWY9XFxcIiFzdWNjZXNzXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImxvZ2luXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5mb3JtLnVzZXJuYW1lXFxcIj5Vc2VybmFtZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwicmVnaXN0ZXJBY2NvdW50LmxvZ2luXFxcIiBpZD1cXFwibG9naW5cXFwiIG5hbWU9XFxcImxvZ2luXFxcIiAjbG9naW49XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS51c2VybmFtZS5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgcmVxdWlyZWQgbWlubGVuZ3RoPVxcXCIxXFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiBwYXR0ZXJuPVxcXCJeW18nLkBBLVphLXowLTktXSokXFxcIj4gPGRpdiAqbmdJZj1cXFwibG9naW4uZGlydHkgJiYgbG9naW4uaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibG9naW4uZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlZ2lzdGVyLm1lc3NhZ2VzLnZhbGlkYXRlLmxvZ2luLnJlcXVpcmVkXFxcIj4gWW91ciB1c2VybmFtZSBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsb2dpbi5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlZ2lzdGVyLm1lc3NhZ2VzLnZhbGlkYXRlLmxvZ2luLm1pbmxlbmd0aFxcXCI+IFlvdXIgdXNlcm5hbWUgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibG9naW4uZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5tZXNzYWdlcy52YWxpZGF0ZS5sb2dpbi5tYXhsZW5ndGhcXFwiPiBZb3VyIHVzZXJuYW1lIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxvZ2luLmVycm9ycy5wYXR0ZXJuXFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlZ2lzdGVyLm1lc3NhZ2VzLnZhbGlkYXRlLmxvZ2luLnBhdHRlcm5cXFwiPiBZb3VyIHVzZXJuYW1lIGNhbiBvbmx5IGNvbnRhaW4gbG93ZXItY2FzZSBsZXR0ZXJzIGFuZCBkaWdpdHMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5mb3JtLmVtYWlsXFxcIj5FbWFpbDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgI2VtYWlsPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0uZW1haWwucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJyZWdpc3RlckFjY291bnQuZW1haWxcXFwiIG1pbmxlbmd0aD1cXFwiNVxcXCIgbWF4bGVuZ3RoPVxcXCIxMDBcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJlbWFpbC5kaXJ0eSAmJiBlbWFpbC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLnJlcXVpcmVkXFxcIj4gWW91ciBlbWFpbCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnMuaW52YWxpZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwuaW52YWxpZFxcXCI+IFlvdXIgZW1haWwgaXMgaW52YWxpZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5taW5sZW5ndGhcXFwiPiBZb3VyIGVtYWlsIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5tYXhsZW5ndGhcXFwiPiBZb3VyIGVtYWlsIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxMDAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0ubmV3cGFzc3dvcmRcXFwiPk5ldyBwYXNzd29yZDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgI3Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0ubmV3cGFzc3dvcmQucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJyZWdpc3RlckFjY291bnQucGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcInBhc3N3b3JkLmRpcnR5ICYmIHBhc3N3b3JkLmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkLmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQucmVxdWlyZWRcXFwiPiBZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkLmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLm1pbmxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkLmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLm1heGxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8amhpLXBhc3N3b3JkLXN0cmVuZ3RoLWJhciBbcGFzc3dvcmRUb0NoZWNrXT1cXFwicmVnaXN0ZXJBY2NvdW50LnBhc3N3b3JkXFxcIj48L2poaS1wYXNzd29yZC1zdHJlbmd0aC1iYXI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5mb3JtLmNvbmZpcm1wYXNzd29yZFxcXCI+TmV3IHBhc3N3b3JkIGNvbmZpcm1hdGlvbjwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiAjY29uZmlybVBhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS5jb25maXJtcGFzc3dvcmQucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmRpcnR5ICYmIGNvbmZpcm1QYXNzd29yZElucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuY29uZmlybXBhc3N3b3JkLnJlcXVpcmVkXFxcIj4gWW91ciBjb25maXJtYXRpb24gcGFzc3dvcmQgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuY29uZmlybXBhc3N3b3JkLm1pbmxlbmd0aFxcXCI+IFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5jb25maXJtcGFzc3dvcmQubWF4bGVuZ3RoXFxcIj4gWW91ciBjb25maXJtYXRpb24gcGFzc3dvcmQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcInJlZ2lzdGVyRm9ybS5mb3JtLmludmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVnaXN0ZXIuZm9ybS5idXR0b25cXFwiPlJlZ2lzdGVyPC9idXR0b24+IDwvZm9ybT4gPHA+PC9wPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLnByZWZpeFxcXCI+SWYgeW91IHdhbnQgdG8gPC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwib3BlbkxvZ2luKClcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5saW5rXFxcIj5zaWduIGluPC9hPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5zdWZmaXhcXFwiPiwgeW91IGNhbiB0cnkgdGhlIGRlZmF1bHQgYWNjb3VudHM6PGJyLz4tIEFkbWluaXN0cmF0b3IgKGxvZ2luPVxcXCJhZG1pblxcXCIgYW5kIHBhc3N3b3JkPVxcXCJhZG1pblxcXCIpIDxici8+LSBVc2VyIChsb2dpbj1cXFwidXNlclxcXCIgYW5kIHBhc3N3b3JkPVxcXCJ1c2VyXFxcIikuPC9zcGFuPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBSZW5kZXJlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBKaGlMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSAnLi9yZWdpc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktcmVnaXN0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gICAgZG9Ob3RNYXRjaDogc3RyaW5nO1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAgZXJyb3JFbWFpbEV4aXN0czogc3RyaW5nO1xuICAgIGVycm9yVXNlckV4aXN0czogc3RyaW5nO1xuICAgIHJlZ2lzdGVyQWNjb3VudDogYW55O1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJlZ2lzdGVyU2VydmljZTogUmVnaXN0ZXIsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBY2NvdW50ID0ge307XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luJyksICdmb2N1cycsIFtdKTtcbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJBY2NvdW50LnBhc3N3b3JkICE9PSB0aGlzLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5kb05vdE1hdGNoID0gJ0VSUk9SJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JVc2VyRXhpc3RzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JFbWFpbEV4aXN0cyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRDdXJyZW50KCkudGhlbigoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFjY291bnQubGFuZ0tleSA9IGtleTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyU2VydmljZS5zYXZlKHRoaXMucmVnaXN0ZXJBY2NvdW50KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSkgPT4gdGhpcy5wcm9jZXNzRXJyb3IocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3BlbkxvZ2luKCkge1xuICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcm9jZXNzRXJyb3IocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwICYmIHJlc3BvbnNlLl9ib2R5ID09PSAnbG9naW4gYWxyZWFkeSBpbiB1c2UnKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yVXNlckV4aXN0cyA9ICdFUlJPUic7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDAgJiYgcmVzcG9uc2UuX2JvZHkgPT09ICdlbWFpbCBhZGRyZXNzIGFscmVhZHkgaW4gdXNlJykge1xuICAgICAgICAgICAgdGhpcy5lcnJvckVtYWlsRXhpc3RzID0gJ0VSUk9SJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdyZWdpc3RlcicsXG4gICAgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICAgICAgcGFnZVRpdGxlOiAncmVnaXN0ZXIudGl0bGUnXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgc2F2ZShhY2NvdW50OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2FwaS9yZWdpc3RlcicsIGFjY291bnQpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04IG9mZnNldC1tZC0yXFxcIj4gPGgyIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MudGl0bGVcXFwiIHRyYW5zbGF0ZVZhbHVlcz1cXFwie3VzZXJuYW1lOiAne3tzZXR0aW5nc0FjY291bnQubG9naW59fSd9XFxcIiAqbmdJZj1cXFwic2V0dGluZ3NBY2NvdW50XFxcIj5Vc2VyIHNldHRpbmdzIGZvciBbPGI+e3tzZXR0aW5nc0FjY291bnQubG9naW59fTwvYj5dPC9oMj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MubWVzc2FnZXMuc3VjY2Vzc1xcXCI+IDxzdHJvbmc+U2V0dGluZ3Mgc2F2ZWQhPC9zdHJvbmc+IDwvZGl2PiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8Zm9ybSBuYW1lPVxcXCJmb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJzYXZlKClcXFwiICNzZXR0aW5nc0Zvcm09XFxcIm5nRm9ybVxcXCIgKm5nSWY9XFxcInNldHRpbmdzQWNjb3VudFxcXCIgbm92YWxpZGF0ZT4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImZpcnN0TmFtZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5mb3JtLmZpcnN0bmFtZVxcXCI+Rmlyc3QgTmFtZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZmlyc3ROYW1lXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydzZXR0aW5ncy5mb3JtLmZpcnN0bmFtZS5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzQWNjb3VudC5maXJzdE5hbWVcXFwiIG1pbmxlbmd0aD1cXFwiMVxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgI2ZpcnN0TmFtZUlucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwiZmlyc3ROYW1lSW5wdXQuZGlydHkgJiYgZmlyc3ROYW1lSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZmlyc3ROYW1lSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLm1lc3NhZ2VzLnZhbGlkYXRlLmZpcnN0bmFtZS5yZXF1aXJlZFxcXCI+IFlvdXIgZmlyc3QgbmFtZSBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJmaXJzdE5hbWVJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLm1lc3NhZ2VzLnZhbGlkYXRlLmZpcnN0bmFtZS5taW5sZW5ndGhcXFwiPiBZb3VyIGZpcnN0IG5hbWUgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZmlyc3ROYW1lSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5tZXNzYWdlcy52YWxpZGF0ZS5maXJzdG5hbWUubWF4bGVuZ3RoXFxcIj4gWW91ciBmaXJzdCBuYW1lIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsYXN0TmFtZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5mb3JtLmxhc3RuYW1lXFxcIj5MYXN0IE5hbWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J3NldHRpbmdzLmZvcm0ubGFzdG5hbWUucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5nc0FjY291bnQubGFzdE5hbWVcXFwiIG1pbmxlbmd0aD1cXFwiMVxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgI2xhc3ROYW1lSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmRpcnR5ICYmIGxhc3ROYW1lSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibGFzdE5hbWVJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MubWVzc2FnZXMudmFsaWRhdGUubGFzdG5hbWUucmVxdWlyZWRcXFwiPiBZb3VyIGxhc3QgbmFtZSBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MubWVzc2FnZXMudmFsaWRhdGUubGFzdG5hbWUubWlubGVuZ3RoXFxcIj4gWW91ciBsYXN0IG5hbWUgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibGFzdE5hbWVJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLm1lc3NhZ2VzLnZhbGlkYXRlLmxhc3RuYW1lLm1heGxlbmd0aFxcXCI+IFlvdXIgbGFzdCBuYW1lIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS5lbWFpbFxcXCI+RW1haWw8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS5lbWFpbC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzQWNjb3VudC5lbWFpbFxcXCIgbWlubGVuZ3RoPVxcXCI1XFxcIiBtYXhsZW5ndGg9XFxcIjEwMFxcXCIgI2VtYWlsSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJlbWFpbElucHV0LmRpcnR5ICYmIGVtYWlsSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLnJlcXVpcmVkXFxcIj4gWW91ciBlbWFpbCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5lbWFpbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwuaW52YWxpZFxcXCI+IFlvdXIgZW1haWwgaXMgaW52YWxpZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLm1pbmxlbmd0aFxcXCI+IFlvdXIgZW1haWwgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwubWF4bGVuZ3RoXFxcIj4gWW91ciBlbWFpbCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMTAwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nSWY9XFxcImxhbmd1YWdlcyAmJiBsYW5ndWFnZXMubGVuZ3RoID4gMFxcXCI+IDxsYWJlbCBmb3I9XFxcImxhbmdLZXlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MuZm9ybS5sYW5ndWFnZVxcXCI+TGFuZ3VhZ2U8L2xhYmVsPiA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJsYW5nS2V5XFxcIiBuYW1lPVxcXCJsYW5nS2V5XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3NBY2NvdW50LmxhbmdLZXlcXFwiPiA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGxhbmd1YWdlIG9mIGxhbmd1YWdlc1xcXCIgW3ZhbHVlXT1cXFwibGFuZ3VhZ2VcXFwiPnt7bGFuZ3VhZ2UgfCBmaW5kTGFuZ3VhZ2VGcm9tS2V5fX08L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwic2V0dGluZ3NGb3JtLmZvcm0uaW52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5mb3JtLmJ1dHRvblxcXCI+U2F2ZTwvYnV0dG9uPiA8L2Zvcm0+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBQcmluY2lwYWwsIEFjY291bnRTZXJ2aWNlLCBKaGlMYW5ndWFnZUhlbHBlciB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXNldHRpbmdzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIHN1Y2Nlc3M6IHN0cmluZztcbiAgICBzZXR0aW5nc0FjY291bnQ6IGFueTtcbiAgICBsYW5ndWFnZXM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWNjb3VudDogQWNjb3VudFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VIZWxwZXI6IEpoaUxhbmd1YWdlSGVscGVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0FjY291bnQgPSB0aGlzLmNvcHlBY2NvdW50KGFjY291bnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZUhlbHBlci5nZXRBbGwoKS50aGVuKChsYW5ndWFnZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICB0aGlzLmFjY291bnQuc2F2ZSh0aGlzLnNldHRpbmdzQWNjb3VudCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KHRydWUpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzQWNjb3VudCA9IHRoaXMuY29weUFjY291bnQoYWNjb3VudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldEN1cnJlbnQoKS50aGVuKChjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NBY2NvdW50LmxhbmdLZXkgIT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UuY2hhbmdlTGFuZ3VhZ2UodGhpcy5zZXR0aW5nc0FjY291bnQubGFuZ0tleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29weUFjY291bnQoYWNjb3VudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZhdGVkOiBhY2NvdW50LmFjdGl2YXRlZCxcbiAgICAgICAgICAgIGVtYWlsOiBhY2NvdW50LmVtYWlsLFxuICAgICAgICAgICAgZmlyc3ROYW1lOiBhY2NvdW50LmZpcnN0TmFtZSxcbiAgICAgICAgICAgIGxhbmdLZXk6IGFjY291bnQubGFuZ0tleSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiBhY2NvdW50Lmxhc3ROYW1lLFxuICAgICAgICAgICAgbG9naW46IGFjY291bnQubG9naW4sXG4gICAgICAgICAgICBpbWFnZVVybDogYWNjb3VudC5pbWFnZVVybFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nc1JvdXRlOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnc2V0dGluZ3MnLFxuICAgIGNvbXBvbmVudDogU2V0dGluZ3NDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBhdXRob3JpdGllczogWydST0xFX1VTRVInXSxcbiAgICAgICAgcGFnZVRpdGxlOiAnZ2xvYmFsLm1lbnUuYWNjb3VudC5zZXR0aW5ncydcbiAgICB9LFxuICAgIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3Mucm91dGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSmhpcHN0ZXJkZW1vU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkJztcbi8qIGpoaXBzdGVyLW5lZWRsZS1hZGQtYWRtaW4tbW9kdWxlLWltcG9ydCAtIEpIaXBzdGVyIHdpbGwgYWRkIGFkbWluIG1vZHVsZXMgaW1wb3J0cyBoZXJlICovXG5cbmltcG9ydCB7XG4gICAgYWRtaW5TdGF0ZSxcbiAgICBBdWRpdHNDb21wb25lbnQsXG4gICAgVXNlck1nbXRDb21wb25lbnQsXG4gICAgVXNlckRpYWxvZ0NvbXBvbmVudCxcbiAgICBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgIFVzZXJNZ210RGV0YWlsQ29tcG9uZW50LFxuICAgIFVzZXJNZ210RGlhbG9nQ29tcG9uZW50LFxuICAgIFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgIExvZ3NDb21wb25lbnQsXG4gICAgSmhpTWV0cmljc01vbml0b3JpbmdNb2RhbENvbXBvbmVudCxcbiAgICBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcbiAgICBKaGlIZWFsdGhNb2RhbENvbXBvbmVudCxcbiAgICBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCxcbiAgICBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50LFxuICAgIEpoaURvY3NDb21wb25lbnQsXG4gICAgQXVkaXRzU2VydmljZSxcbiAgICBKaGlDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBKaGlIZWFsdGhTZXJ2aWNlLFxuICAgIEpoaU1ldHJpY3NTZXJ2aWNlLFxuICAgIExvZ3NTZXJ2aWNlLFxuICAgIFVzZXJSZXNvbHZlUGFnaW5nUGFyYW1zLFxuICAgIFVzZXJSZXNvbHZlLFxuICAgIFVzZXJNb2RhbFNlcnZpY2Vcbn0gZnJvbSAnLi8nO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgSmhpcHN0ZXJkZW1vU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhZG1pblN0YXRlLCB7IHVzZUhhc2g6IHRydWUgfSksXG4gICAgICAgIC8qIGpoaXBzdGVyLW5lZWRsZS1hZGQtYWRtaW4tbW9kdWxlIC0gSkhpcHN0ZXIgd2lsbCBhZGQgYWRtaW4gbW9kdWxlcyBoZXJlICovXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXVkaXRzQ29tcG9uZW50LFxuICAgICAgICBVc2VyTWdtdENvbXBvbmVudCxcbiAgICAgICAgVXNlckRpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgVXNlckRlbGV0ZURpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgVXNlck1nbXREZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFVzZXJNZ210RGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBVc2VyTWdtdERlbGV0ZURpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgTG9nc0NvbXBvbmVudCxcbiAgICAgICAgSmhpQ29uZmlndXJhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQsXG4gICAgICAgIEpoaUhlYWx0aE1vZGFsQ29tcG9uZW50LFxuICAgICAgICBKaGlEb2NzQ29tcG9uZW50LFxuICAgICAgICBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcbiAgICAgICAgSmhpTWV0cmljc01vbml0b3JpbmdNb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFVzZXJNZ210RGlhbG9nQ29tcG9uZW50LFxuICAgICAgICBVc2VyTWdtdERlbGV0ZURpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgSmhpSGVhbHRoTW9kYWxDb21wb25lbnQsXG4gICAgICAgIEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXVkaXRzU2VydmljZSxcbiAgICAgICAgSmhpQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgICAgIEpoaUhlYWx0aFNlcnZpY2UsXG4gICAgICAgIEpoaU1ldHJpY3NTZXJ2aWNlLFxuICAgICAgICBMb2dzU2VydmljZSxcbiAgICAgICAgVXNlclJlc29sdmVQYWdpbmdQYXJhbXMsXG4gICAgICAgIFVzZXJSZXNvbHZlLFxuICAgICAgICBVc2VyTW9kYWxTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgSmhpcHN0ZXJkZW1vQWRtaW5Nb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgICBhdWRpdHNSb3V0ZSxcbiAgICBjb25maWd1cmF0aW9uUm91dGUsXG4gICAgZG9jc1JvdXRlLFxuICAgIGhlYWx0aFJvdXRlLFxuICAgIGxvZ3NSb3V0ZSxcbiAgICBtZXRyaWNzUm91dGUsXG4gICAgdXNlck1nbXRSb3V0ZSxcbiAgICB1c2VyRGlhbG9nUm91dGVcbn0gZnJvbSAnLi8nO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkJztcblxuY29uc3QgQURNSU5fUk9VVEVTID0gW1xuICAgIGF1ZGl0c1JvdXRlLFxuICAgIGNvbmZpZ3VyYXRpb25Sb3V0ZSxcbiAgICBkb2NzUm91dGUsXG4gICAgaGVhbHRoUm91dGUsXG4gICAgbG9nc1JvdXRlLFxuICAgIC4uLnVzZXJNZ210Um91dGUsXG4gICAgbWV0cmljc1JvdXRlXG5dO1xuXG5leHBvcnQgY29uc3QgYWRtaW5TdGF0ZTogUm91dGVzID0gW3tcbiAgICBwYXRoOiAnJyxcbiAgICBkYXRhOiB7XG4gICAgICAgIGF1dGhvcml0aWVzOiBbJ1JPTEVfQURNSU4nXVxuICAgIH0sXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXSxcbiAgICBjaGlsZHJlbjogQURNSU5fUk9VVEVTXG59LFxuICAgIC4uLnVzZXJEaWFsb2dSb3V0ZVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ucm91dGUudHMiLCJleHBvcnQgY2xhc3MgQXVkaXREYXRhIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlbW90ZUFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHNlc3Npb25JZDogc3RyaW5nXG4gICAgKSB7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0LWRhdGEubW9kZWwudHMiLCJpbXBvcnQgeyBBdWRpdERhdGEgfSBmcm9tICcuL2F1ZGl0LWRhdGEubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQXVkaXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZGF0YTogQXVkaXREYXRhLFxuICAgICAgICBwdWJsaWMgcHJpbmNpcGFsOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB0aW1lc3RhbXA6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHR5cGU6IHN0cmluZ1xuICAgICkge8KgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXQubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdJZj1cXFwiYXVkaXRzXFxcIj4gPGgyIGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLnRpdGxlXFxcIj5BdWRpdHM8L2gyPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNVxcXCI+IDxoNCBqaGlUcmFuc2xhdGU9XFxcImF1ZGl0cy5maWx0ZXIudGl0bGVcXFwiPkZpbHRlciBieSBkYXRlPC9oND4gPHAgY2xhc3M9XFxcImQtZmxleFxcXCI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLmZpbHRlci5mcm9tXFxcIiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPmZyb208L3NwYW4+IDxpbnB1dCB0eXBlPVxcXCJkYXRlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJzdGFydFxcXCIgWyhuZ01vZGVsKV09XFxcImZyb21EYXRlXFxcIiAobmdNb2RlbENoYW5nZSk9XFxcIm9uQ2hhbmdlRGF0ZSgkZXZlbnQpXFxcIiByZXF1aXJlZC8+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLmZpbHRlci50b1xcXCIgY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj50bzwvc3Bhbj4gPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVuZFxcXCIgWyhuZ01vZGVsKV09XFxcInRvRGF0ZVxcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJvbkNoYW5nZURhdGUoJGV2ZW50KVxcXCIgcmVxdWlyZWQvPiA8L3A+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtY29uZGVuc2VkIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIChjbGljayk9XFxcIm9yZGVyUHJvcCA9ICd0aW1lc3RhbXAnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImF1ZGl0cy50YWJsZS5oZWFkZXIuZGF0ZVxcXCI+RGF0ZTwvc3Bhbj48L3RoPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ3ByaW5jaXBhbCc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLnRhYmxlLmhlYWRlci5wcmluY2lwYWxcXFwiPlVzZXI8L3NwYW4+PC90aD4gPHRoIChjbGljayk9XFxcIm9yZGVyUHJvcCA9ICd0eXBlJzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdWRpdHMudGFibGUuaGVhZGVyLnN0YXR1c1xcXCI+U3RhdGU8L3NwYW4+PC90aD4gPHRoIChjbGljayk9XFxcIm9yZGVyUHJvcCA9ICdkYXRhLm1lc3NhZ2UnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImF1ZGl0cy50YWJsZS5oZWFkZXIuZGF0YVxcXCI+RXh0cmEgZGF0YTwvc3Bhbj48L3RoPiA8L3RyPiA8L3RoZWFkPiA8dHIgKm5nRm9yPVxcXCJsZXQgYXVkaXQgb2YgZ2V0QXVkaXRzKClcXFwiPiA8dGQ+PHNwYW4+e3thdWRpdC50aW1lc3RhbXB8IGRhdGU6J21lZGl1bSd9fTwvc3Bhbj48L3RkPiA8dGQ+PHNtYWxsPnt7YXVkaXQucHJpbmNpcGFsfX08L3NtYWxsPjwvdGQ+IDx0ZD57e2F1ZGl0LnR5cGV9fTwvdGQ+IDx0ZD4gPHNwYW4gKm5nSWY9XFxcImF1ZGl0LmRhdGFcXFwiIG5nLXNob3c9XFxcImF1ZGl0LmRhdGEubWVzc2FnZVxcXCI+e3thdWRpdC5kYXRhLm1lc3NhZ2V9fTwvc3Bhbj4gPHNwYW4gKm5nSWY9XFxcImF1ZGl0LmRhdGFcXFwiIG5nLXNob3c9XFxcImF1ZGl0LmRhdGEucmVtb3RlQWRkcmVzc1xcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdWRpdHMudGFibGUuZGF0YS5yZW1vdGVBZGRyZXNzXFxcIj5SZW1vdGUgQWRkcmVzczwvc3Bhbj4ge3thdWRpdC5kYXRhLnJlbW90ZUFkZHJlc3N9fTwvc3Bhbj4gPC90ZD4gPC90cj4gPC90YWJsZT4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcImF1ZGl0c1xcXCI+IDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj4gPGpoaS1pdGVtLWNvdW50IFtwYWdlXT1cXFwicGFnZVxcXCIgW3RvdGFsXT1cXFwidG90YWxJdGVtc1xcXCIgW2l0ZW1zUGVyUGFnZV09XFxcIml0ZW1zUGVyUGFnZVxcXCI+PC9qaGktaXRlbS1jb3VudD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj4gPG5nYi1wYWdpbmF0aW9uIFtjb2xsZWN0aW9uU2l6ZV09XFxcInRvdGFsSXRlbXNcXFwiIFsocGFnZSldPVxcXCJwYWdlXFxcIiAocGFnZUNoYW5nZSk9XFxcImxvYWRQYWdlKHBhZ2UpXFxcIj48L25nYi1wYWdpbmF0aW9uPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEpoaVBhcnNlTGlua3MgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IEF1ZGl0IH0gZnJvbSAnLi9hdWRpdC5tb2RlbCc7XG5pbXBvcnQgeyBBdWRpdHNTZXJ2aWNlIH0gZnJvbSAnLi9hdWRpdHMuc2VydmljZSc7XG5pbXBvcnQgeyBJVEVNU19QRVJfUEFHRSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vYmxvY2tzL2NvbmZpZy91aWItcGFnaW5hdGlvbi5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqaGktYXVkaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXVkaXRzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBdWRpdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGF1ZGl0czogQXVkaXRbXTtcbiAgICBmcm9tRGF0ZTogc3RyaW5nO1xuICAgIGl0ZW1zUGVyUGFnZTogYW55O1xuICAgIGxpbmtzOiBhbnk7XG4gICAgcGFnZTogbnVtYmVyO1xuICAgIG9yZGVyUHJvcDogc3RyaW5nO1xuICAgIHJldmVyc2U6IGJvb2xlYW47XG4gICAgdG9EYXRlOiBzdHJpbmc7XG4gICAgdG90YWxJdGVtczogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXVkaXRzU2VydmljZTogQXVkaXRzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUxpbmtzOiBKaGlQYXJzZUxpbmtzLFxuICAgICAgICBwcml2YXRlIHBhZ2luYXRpb25Db25maWc6IFBhZ2luYXRpb25Db25maWcsXG4gICAgICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gSVRFTVNfUEVSX1BBR0U7XG4gICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9yZGVyUHJvcCA9ICd0aW1lc3RhbXAnO1xuICAgIH1cblxuICAgIGdldEF1ZGl0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydEF1ZGl0cyh0aGlzLmF1ZGl0cyk7XG4gICAgfVxuXG4gICAgbG9hZFBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMub25DaGFuZ2VEYXRlKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudG9kYXkoKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c01vbnRoKCk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VEYXRlKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VEYXRlKCkge1xuICAgICAgICB0aGlzLmF1ZGl0c1NlcnZpY2UucXVlcnkoe3BhZ2U6IHRoaXMucGFnZSAtIDEsIHNpemU6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgICAgICAgICAgZnJvbURhdGU6IHRoaXMuZnJvbURhdGUsIHRvRGF0ZTogdGhpcy50b0RhdGV9KS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmF1ZGl0cyA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICB0aGlzLmxpbmtzID0gdGhpcy5wYXJzZUxpbmtzLnBhcnNlKHJlcy5oZWFkZXJzLmdldCgnbGluaycpKTtcbiAgICAgICAgICAgIHRoaXMudG90YWxJdGVtcyA9ICsgcmVzLmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByZXZpb3VzTW9udGgoKSB7XG4gICAgICAgIGNvbnN0IGRhdGVGb3JtYXQgPSAneXl5eS1NTS1kZCc7XG4gICAgICAgIGxldCBmcm9tRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgaWYgKGZyb21EYXRlLmdldE1vbnRoKCkgPT09IDApIHtcbiAgICAgICAgICAgIGZyb21EYXRlID0gbmV3IERhdGUoZnJvbURhdGUuZ2V0RnVsbFllYXIoKSAtIDEsIDExLCBmcm9tRGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbURhdGUgPSBuZXcgRGF0ZShmcm9tRGF0ZS5nZXRGdWxsWWVhcigpLCBmcm9tRGF0ZS5nZXRNb250aCgpIC0gMSwgZnJvbURhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZnJvbURhdGUgPSB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShmcm9tRGF0ZSwgZGF0ZUZvcm1hdCk7XG4gICAgfVxuXG4gICAgdG9kYXkoKSB7XG4gICAgICAgIGNvbnN0IGRhdGVGb3JtYXQgPSAneXl5eS1NTS1kZCc7XG4gICAgICAgIC8vIFRvZGF5ICsgMSBkYXkgLSBuZWVkZWQgaWYgdGhlIGN1cnJlbnQgZGF5IG11c3QgYmUgaW5jbHVkZWRcbiAgICAgICAgY29uc3QgdG9kYXk6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0b2RheS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSArIDEpO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpKTtcbiAgICAgICAgdGhpcy50b0RhdGUgPSB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShkYXRlLCBkYXRlRm9ybWF0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNvcnRBdWRpdHMoYXVkaXRzOiBBdWRpdFtdKSB7XG4gICAgICAgIGF1ZGl0cyA9IGF1ZGl0cy5zbGljZSgwKS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYVt0aGlzLm9yZGVyUHJvcF0gPCBiW3RoaXMub3JkZXJQcm9wXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoW2JbdGhpcy5vcmRlclByb3BdIDwgYVt0aGlzLm9yZGVyUHJvcF1dKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXZlcnNlID8gYXVkaXRzLnJldmVyc2UoKSA6IGF1ZGl0cztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdWRpdHNDb21wb25lbnQgfSBmcm9tICcuL2F1ZGl0cy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgYXVkaXRzUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdhdWRpdHMnLFxuICAgIGNvbXBvbmVudDogQXVkaXRzQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgICAgcGFnZVRpdGxlOiAnYXVkaXRzLnRpdGxlJ1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdWRpdHNTZXJ2aWNlICB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIHF1ZXJ5KHJlcTogYW55KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBwYXJhbXM6IFVSTFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgcGFyYW1zLnNldCgnZnJvbURhdGUnLCByZXEuZnJvbURhdGUpO1xuICAgICAgICBwYXJhbXMuc2V0KCd0b0RhdGUnLCByZXEudG9EYXRlKTtcbiAgICAgICAgcGFyYW1zLnNldCgncGFnZScsIHJlcS5wYWdlKTtcbiAgICAgICAgcGFyYW1zLnNldCgnc2l6ZScsIHJlcS5zaXplKTtcbiAgICAgICAgcGFyYW1zLnNldCgnc29ydCcsIHJlcS5zb3J0KTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgc2VhcmNoOiBwYXJhbXNcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnbWFuYWdlbWVudC9hdWRpdHMnLCBvcHRpb25zKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0lmPVxcXCJhbGxDb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb25cXFwiPiA8aDIgamhpVHJhbnNsYXRlPVxcXCJjb25maWd1cmF0aW9uLnRpdGxlXFxcIj5Db25maWd1cmF0aW9uPC9oMj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJjb25maWd1cmF0aW9uLmZpbHRlclxcXCI+RmlsdGVyIChieSBwcmVmaXgpPC9zcGFuPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImZpbHRlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+IDxsYWJlbD5TcHJpbmcgY29uZmlndXJhdGlvbjwvbGFiZWw+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1yZXNwb25zaXZlIGQtdGFibGVcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIGNsYXNzPVxcXCJ3LTQwXFxcIiAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAncHJlZml4JzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJjb25maWd1cmF0aW9uLnRhYmxlLnByZWZpeFxcXCI+UHJlZml4PC9zcGFuPjwvdGg+IDx0aCBjbGFzcz1cXFwidy02MFxcXCIgKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ3Byb3BlcnRpZXMnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImNvbmZpZ3VyYXRpb24udGFibGUucHJvcGVydGllc1xcXCI+UHJvcGVydGllczwvc3Bhbj48L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiAoY29uZmlndXJhdGlvbiB8IHB1cmVGaWx0ZXI6ZmlsdGVyOidwcmVmaXgnIHwgb3JkZXJCeTpvcmRlclByb3A6cmV2ZXJzZSlcXFwiPiA8dGQ+PHNwYW4+e3tlbnRyeS5wcmVmaXh9fTwvc3Bhbj48L3RkPiA8dGQ+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nRm9yPVxcXCJsZXQga2V5IG9mIGtleXMoZW50cnkucHJvcGVydGllcylcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+e3trZXl9fTwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmbG9hdC1yaWdodCBiYWRnZSBiYWRnZS1kZWZhdWx0IGJyZWFrXFxcIj57e2VudHJ5LnByb3BlcnRpZXNba2V5XSB8IGpzb259fTwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGtleSBvZiBrZXlzKGFsbENvbmZpZ3VyYXRpb24pXFxcIj4gPGxhYmVsPjxzcGFuPnt7a2V5fX08L3NwYW4+PC9sYWJlbD4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zbSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXJlc3BvbnNpdmUgZC10YWJsZVxcXCI+IDx0aGVhZD4gPHRyPiA8dGggY2xhc3M9XFxcInctNDBcXFwiPlByb3BlcnR5PC90aD4gPHRoIGNsYXNzPVxcXCJ3LTYwXFxcIj5WYWx1ZTwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgYWxsQ29uZmlndXJhdGlvbltrZXldXFxcIj4gPHRkIGNsYXNzPVxcXCJicmVha1xcXCI+e3tpdGVtLmtleX19PC90ZD4gPHRkIGNsYXNzPVxcXCJicmVha1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJmbG9hdC1yaWdodCBiYWRnZSBiYWRnZS1kZWZhdWx0IGJyZWFrXFxcIj57e2l0ZW0udmFsfX08L3NwYW4+IDwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBKaGlDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktY29uZmlndXJhdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaUNvbmZpZ3VyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFsbENvbmZpZ3VyYXRpb246IGFueSA9IG51bGw7XG4gICAgY29uZmlndXJhdGlvbjogYW55ID0gbnVsbDtcbiAgICBjb25maWdLZXlzOiBhbnlbXTtcbiAgICBmaWx0ZXI6IHN0cmluZztcbiAgICBvcmRlclByb3A6IHN0cmluZztcbiAgICByZXZlcnNlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEpoaUNvbmZpZ3VyYXRpb25TZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuY29uZmlnS2V5cyA9IFtdO1xuICAgICAgICB0aGlzLmZpbHRlciA9ICcnO1xuICAgICAgICB0aGlzLm9yZGVyUHJvcCA9ICdwcmVmaXgnO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBrZXlzKGRpY3QpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIChkaWN0ID09PSB1bmRlZmluZWQpID8gW10gOiBPYmplY3Qua2V5cyhkaWN0KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5nZXQoKS5zdWJzY3JpYmUoKGNvbmZpZ3VyYXRpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgY29uZmlnIG9mIGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLnByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ0tleXMucHVzaChPYmplY3Qua2V5cyhjb25maWcucHJvcGVydGllcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5nZXRFbnYoKS5zdWJzY3JpYmUoKGNvbmZpZ3VyYXRpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWxsQ29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSmhpQ29uZmlndXJhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29uZmlndXJhdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgY29uZmlndXJhdGlvblJvdXRlOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnamhpLWNvbmZpZ3VyYXRpb24nLFxuICAgIGNvbXBvbmVudDogSmhpQ29uZmlndXJhdGlvbkNvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIHBhZ2VUaXRsZTogJ2NvbmZpZ3VyYXRpb24udGl0bGUnXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpoaUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgIH1cblxuICAgIGdldCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnbWFuYWdlbWVudC9jb25maWdwcm9wcycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllczogYW55W10gPSBbXTtcblxuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllc09iamVjdCA9IHJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BlcnRpZXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc09iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0aWVzT2JqZWN0W2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHByb3BlcnRpZXMuc29ydCgocHJvcGVydHlBLCBwcm9wZXJ0eUIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHByb3BlcnR5QS5wcmVmaXggPT09IHByb3BlcnR5Qi5wcmVmaXgpID8gMCA6XG4gICAgICAgICAgICAgICAgICAgICAgIChwcm9wZXJ0eUEucHJlZml4IDwgcHJvcGVydHlCLnByZWZpeCkgPyAtMSA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RW52KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2VudicpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllczogYW55ID0ge307XG5cbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXNPYmplY3QgPSByZXMuanNvbigpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9wZXJ0aWVzT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNPYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxzT2JqZWN0ID0gcHJvcGVydGllc09iamVjdFtrZXldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxzOiBhbnlbXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsS2V5IGluIHZhbHNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxzT2JqZWN0Lmhhc093blByb3BlcnR5KHZhbEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxzLnB1c2goe2tleTogdmFsS2V5LCB2YWw6IHZhbHNPYmplY3RbdmFsS2V5XX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNba2V5XSA9IHZhbHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aWZyYW1lIHNyYz1cXFwic3dhZ2dlci11aS9pbmRleC5odG1sXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCI5MDBcXFwiIHNlYW1sZXNzIHRhcmdldD1cXFwiX3RvcFxcXCIgdGl0bGU9XFxcIlN3YWdnZXIgVUlcXFwiIGNsYXNzPVxcXCJib3JkZXItMFxcXCI+PC9pZnJhbWU+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWRvY3MnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kb2NzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlEb2NzQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICApIHtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEpoaURvY3NDb21wb25lbnQgfSBmcm9tICcuL2RvY3MuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGRvY3NSb3V0ZTogUm91dGUgPSB7XG4gICAgcGF0aDogJ2RvY3MnLFxuICAgIGNvbXBvbmVudDogSmhpRG9jc0NvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIHBhZ2VUaXRsZTogJ2dsb2JhbC5tZW51LmFkbWluLmFwaWRvY3MnXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZG9jcy9kb2NzLnJvdXRlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGlkPVxcXCJzaG93SGVhbHRoTGFiZWxcXFwiPiB7eydoZWFsdGguaW5kaWNhdG9yLicgKyBiYXNlTmFtZShjdXJyZW50SGVhbHRoLm5hbWUpIHwgdHJhbnNsYXRlfX0ge3tzdWJTeXN0ZW1OYW1lKGN1cnJlbnRIZWFsdGgubmFtZSl9fSA8L2g0PiA8YnV0dG9uIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiYWN0aXZlTW9kYWwuZGlzbWlzcygnY2xvc2VkJylcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHkgcGFkXFxcIj4gPGRpdiAqbmdJZj1cXFwiY3VycmVudEhlYWx0aC5kZXRhaWxzXFxcIj4gPGg1IGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLmRldGFpbHMucHJvcGVydGllc1xcXCI+UHJvcGVydGllczwvaDU+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLmRldGFpbHMubmFtZVxcXCI+TmFtZTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIiBqaGlUcmFuc2xhdGU9XFxcImhlYWx0aC5kZXRhaWxzLnZhbHVlXFxcIj5WYWx1ZTwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIGN1cnJlbnRIZWFsdGguZGV0YWlscyB8IGtleXNcXFwiPiA8dGQgY2xhc3M9XFxcInRleHQtbGVmdFxcXCI+e3tlbnRyeS5rZXl9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj57e3JlYWRhYmxlVmFsdWUoZW50cnkudmFsdWUpfX08L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcImN1cnJlbnRIZWFsdGguZXJyb3JcXFwiPiA8aDQgamhpVHJhbnNsYXRlPVxcXCJoZWFsdGguZGV0YWlscy5lcnJvclxcXCI+RXJyb3I8L2g0PiA8cHJlPnt7Y3VycmVudEhlYWx0aC5lcnJvcn19PC9wcmU+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4gPGJ1dHRvbiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgZmxvYXQtbGVmdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJhY3RpdmVNb2RhbC5kaXNtaXNzKCdjbG9zZWQnKVxcXCI+RG9uZTwvYnV0dG9uPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLW1vZGFsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEpoaUhlYWx0aFNlcnZpY2UgfSBmcm9tICcuL2hlYWx0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktaGVhbHRoLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaGVhbHRoLW1vZGFsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlIZWFsdGhNb2RhbENvbXBvbmVudCB7XG5cbiAgICBjdXJyZW50SGVhbHRoOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlYWx0aFNlcnZpY2U6IEpoaUhlYWx0aFNlcnZpY2UsIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwpIHt9XG5cbiAgICBiYXNlTmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aFNlcnZpY2UuZ2V0QmFzZU5hbWUobmFtZSk7XG4gICAgfVxuXG4gICAgc3ViU3lzdGVtTmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aFNlcnZpY2UuZ2V0U3ViU3lzdGVtTmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICByZWFkYWJsZVZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEhlYWx0aC5uYW1lICE9PSAnZGlza1NwYWNlJykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaG91bGQgZGlzcGxheSBzdG9yYWdlIHNwYWNlIGluIGFuIGh1bWFuIHJlYWRhYmxlIHVuaXRcbiAgICAgICAgY29uc3QgdmFsID0gdmFsdWUgLyAxMDczNzQxODI0O1xuICAgICAgICBpZiAodmFsID4gMSkgeyAvLyBWYWx1ZVxuICAgICAgICAgICAgcmV0dXJuIHZhbC50b0ZpeGVkKDIpICsgJyBHQic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlIC8gMTA0ODU3NikudG9GaXhlZCgyKSArICcgTUInO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLW1vZGFsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8aDI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLnRpdGxlXFxcIj5IZWFsdGggQ2hlY2tzPC9zcGFuPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcXFwiIChjbGljayk9XFxcInJlZnJlc2goKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZWZyZXNoXFxcIj48L3NwYW4+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLnJlZnJlc2guYnV0dG9uXFxcIj5SZWZyZXNoPC9zcGFuPiA8L2J1dHRvbj4gPC9oMj4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+IDx0YWJsZSBpZD1cXFwiaGVhbHRoQ2hlY2tcXFwiIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBqaGlUcmFuc2xhdGU9XFxcImhlYWx0aC50YWJsZS5zZXJ2aWNlXFxcIj5TZXJ2aWNlIE5hbWU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhlYWx0aC50YWJsZS5zdGF0dXNcXFwiPlN0YXR1czwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLmRldGFpbHMuZGV0YWlsc1xcXCI+RGV0YWlsczwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGhlYWx0aCBvZiBoZWFsdGhEYXRhXFxcIj4gPHRkPnt7J2hlYWx0aC5pbmRpY2F0b3IuJyArIGJhc2VOYW1lKGhlYWx0aC5uYW1lKSB8IHRyYW5zbGF0ZX19IHt7c3ViU3lzdGVtTmFtZShoZWFsdGgubmFtZSl9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QmFkZ2VDbGFzcyhoZWFsdGguc3RhdHVzKVxcXCIgamhpVHJhbnNsYXRlPVxcXCJ7eydoZWFsdGguc3RhdHVzLicgKyBoZWFsdGguc3RhdHVzfX1cXFwiPiB7e2hlYWx0aC5zdGF0dXN9fSA8L3NwYW4+IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPiA8YSBjbGFzcz1cXFwiaGFuZFxcXCIgKGNsaWNrKT1cXFwic2hvd0hlYWx0aChoZWFsdGgpXFxcIiAqbmdJZj1cXFwiaGVhbHRoLmRldGFpbHMgfHwgaGVhbHRoLmVycm9yXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWV5ZVxcXCI+PC9pPiA8L2E+IDwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgSmhpSGVhbHRoU2VydmljZSB9IGZyb20gJy4vaGVhbHRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgSmhpSGVhbHRoTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2hlYWx0aC1tb2RhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1oZWFsdGgnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZWFsdGguY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaUhlYWx0aENoZWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBoZWFsdGhEYXRhOiBhbnk7XG4gICAgdXBkYXRpbmdIZWFsdGg6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICAgICBwcml2YXRlIGhlYWx0aFNlcnZpY2U6IEpoaUhlYWx0aFNlcnZpY2VcbiAgICApIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBiYXNlTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRCYXNlTmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICBnZXRCYWRnZUNsYXNzKHN0YXR1c1N0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0dXNTdGF0ZSA9PT0gJ1VQJykge1xuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS1zdWNjZXNzJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnYmFkZ2UtZGFuZ2VyJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMudXBkYXRpbmdIZWFsdGggPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoU2VydmljZS5jaGVja0hlYWx0aCgpLnN1YnNjcmliZSgoaGVhbHRoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aERhdGEgPSB0aGlzLmhlYWx0aFNlcnZpY2UudHJhbnNmb3JtSGVhbHRoRGF0YShoZWFsdGgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGluZ0hlYWx0aCA9IGZhbHNlO1xuICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDUwMykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoRGF0YSA9IHRoaXMuaGVhbHRoU2VydmljZS50cmFuc2Zvcm1IZWFsdGhEYXRhKGVycm9yLmpzb24oKSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGluZ0hlYWx0aCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93SGVhbHRoKGhlYWx0aDogYW55KSB7XG4gICAgICAgIGNvbnN0IG1vZGFsUmVmICA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oSmhpSGVhbHRoTW9kYWxDb21wb25lbnQpO1xuICAgICAgICBtb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS5jdXJyZW50SGVhbHRoID0gaGVhbHRoO1xuICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAvLyBMZWZ0IGJsYW5rIGludGVudGlvbmFsbHksIG5vdGhpbmcgdG8gZG8gaGVyZVxuICAgICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgICAgICAvLyBMZWZ0IGJsYW5rIGludGVudGlvbmFsbHksIG5vdGhpbmcgdG8gZG8gaGVyZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJTeXN0ZW1OYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGhTZXJ2aWNlLmdldFN1YlN5c3RlbU5hbWUobmFtZSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCB9IGZyb20gJy4vaGVhbHRoLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBoZWFsdGhSb3V0ZTogUm91dGUgPSB7XG4gICAgcGF0aDogJ2poaS1oZWFsdGgnLFxuICAgIGNvbXBvbmVudDogSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBwYWdlVGl0bGU6ICdoZWFsdGgudGl0bGUnXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKaGlIZWFsdGhTZXJ2aWNlIHtcblxuICAgIHNlcGFyYXRvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICAgIHRoaXMuc2VwYXJhdG9yID0gJy4nO1xuICAgIH1cblxuICAgIGNoZWNrSGVhbHRoKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2hlYWx0aCcpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtSGVhbHRoRGF0YShkYXRhKTogYW55IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBbXTtcbiAgICAgICAgdGhpcy5mbGF0dGVuSGVhbHRoRGF0YShyZXNwb25zZSwgbnVsbCwgZGF0YSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBnZXRCYXNlTmFtZShuYW1lKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gbmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgcmV0dXJuIHNwbGl0WzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U3ViU3lzdGVtTmFtZShuYW1lKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gbmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgc3BsaXQuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgY29uc3QgcmVtYWluZGVyID0gc3BsaXQuam9pbignLicpO1xuICAgICAgICAgICAgcmV0dXJuIHJlbWFpbmRlciA/ICcgLSAnICsgcmVtYWluZGVyIDogJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBwcml2YXRlIG1ldGhvZHMgKi9cbiAgICBwcml2YXRlIGFkZEhlYWx0aE9iamVjdChyZXN1bHQsIGlzTGVhZiwgaGVhbHRoT2JqZWN0LCBuYW1lKTogYW55IHtcbiAgICAgICAgY29uc3QgaGVhbHRoRGF0YTogYW55ID0ge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSB7fTtcbiAgICAgICAgbGV0IGhhc0RldGFpbHMgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBoZWFsdGhPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChoZWFsdGhPYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaGVhbHRoT2JqZWN0W2tleV07XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3N0YXR1cycgfHwga2V5ID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWx0aERhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0hlYWx0aE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzRGV0YWlscyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdGhlIGRldGFpbHNcbiAgICAgICAgaWYgKGhhc0RldGFpbHMpIHtcbiAgICAgICAgICAgIGhlYWx0aERhdGEuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPbmx5IGFkZCBub2RlcyBpZiB0aGV5IHByb3ZpZGUgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICAgICAgICBpZiAoaXNMZWFmIHx8IGhhc0RldGFpbHMgfHwgaGVhbHRoRGF0YS5lcnJvcikge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaGVhbHRoRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhlYWx0aERhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmbGF0dGVuSGVhbHRoRGF0YShyZXN1bHQsIHBhdGgsIGRhdGEpOiBhbnkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNIZWFsdGhPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc1N1YlN5c3RlbSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSGVhbHRoT2JqZWN0KHJlc3VsdCwgZmFsc2UsIHZhbHVlLCB0aGlzLmdldE1vZHVsZU5hbWUocGF0aCwga2V5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYXR0ZW5IZWFsdGhEYXRhKHJlc3VsdCwgdGhpcy5nZXRNb2R1bGVOYW1lKHBhdGgsIGtleSksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSGVhbHRoT2JqZWN0KHJlc3VsdCwgdHJ1ZSwgdmFsdWUsIHRoaXMuZ2V0TW9kdWxlTmFtZShwYXRoLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TW9kdWxlTmFtZShwYXRoLCBuYW1lKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKHBhdGggJiYgbmFtZSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcGF0aCArIHRoaXMuc2VwYXJhdG9yICsgbmFtZTtcbiAgICAgICAgfSAgZWxzZSBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcGF0aDtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBuYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhc1N1YlN5c3RlbShoZWFsdGhPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGhlYWx0aE9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhlYWx0aE9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBoZWFsdGhPYmplY3Rba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0hlYWx0aE9iamVjdChoZWFsdGhPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGhlYWx0aE9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhlYWx0aE9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3N0YXR1cycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguc2VydmljZS50cyIsImV4cG9ydCAqIGZyb20gJy4vYXVkaXRzL2F1ZGl0cy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXRzLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXRzLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vYXVkaXRzL2F1ZGl0Lm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vYXVkaXRzL2F1ZGl0LWRhdGEubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24ucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9kb2NzL2RvY3MuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZG9jcy9kb2NzLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFsdGgvaGVhbHRoLW1vZGFsLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2hlYWx0aC9oZWFsdGguc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2hlYWx0aC9oZWFsdGgucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dzL2xvZ3MuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbG9ncy9sb2dzLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dzL2xvZ3Mucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dzL2xvZy5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbWV0cmljcy9tZXRyaWNzLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXRyaWNzL21ldHJpY3Mucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRpYWxvZy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci1tYW5hZ2VtZW50L3VzZXItbW9kYWwuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2FkbWluLnJvdXRlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaW5kZXgudHMiLCJleHBvcnQgY2xhc3MgTG9nIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGxldmVsOiBzdHJpbmdcbiAgICApIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZy5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwibG9nZ2Vyc1xcXCI+IDxoMiBqaGlUcmFuc2xhdGU9XFxcImxvZ3MudGl0bGVcXFwiPkxvZ3M8L2gyPiA8cCBqaGlUcmFuc2xhdGU9XFxcImxvZ3MubmJsb2dnZXJzXFxcIiB0cmFuc2xhdGVWYWx1ZXM9XFxcInt0b3RhbDogJ3t7IGxvZ2dlcnMubGVuZ3RoIH19J31cXFwiPlRoZXJlIGFyZSB7eyBsb2dnZXJzLmxlbmd0aCB9fSBsb2dnZXJzLjwvcD4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJsb2dzLmZpbHRlclxcXCI+RmlsdGVyPC9zcGFuPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImZpbHRlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtY29uZGVuc2VkIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcXFwiPiA8dGhlYWQ+IDx0ciB0aXRsZT1cXFwiY2xpY2sgdG8gb3JkZXJcXFwiPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ25hbWUnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImxvZ3MudGFibGUubmFtZVxcXCI+TmFtZTwvc3Bhbj48L3RoPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ2xldmVsJzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJsb2dzLnRhYmxlLmxldmVsXFxcIj5MZXZlbDwvc3Bhbj48L3RoPiA8L3RyPiA8L3RoZWFkPiA8dHIgKm5nRm9yPVxcXCJsZXQgbG9nZ2VyIG9mIChsb2dnZXJzIHwgcHVyZUZpbHRlcjpmaWx0ZXI6J25hbWUnIHwgb3JkZXJCeTpvcmRlclByb3A6cmV2ZXJzZSlcXFwiPiA8dGQ+PHNtYWxsPnt7bG9nZ2VyLm5hbWUgfCBzbGljZTowOjE0MH19PC9zbWFsbD48L3RkPiA8dGQ+IDxidXR0b24gKGNsaWNrKT1cXFwiY2hhbmdlTGV2ZWwobG9nZ2VyLm5hbWUsICdUUkFDRScpXFxcIiBbbmdDbGFzc109XFxcIihsb2dnZXIubGV2ZWw9PSdUUkFDRScpID8gJ2J0bi1kYW5nZXInIDogJ2J0bi1zZWNvbmRhcnknXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbVxcXCI+VFJBQ0U8L2J1dHRvbj4gPGJ1dHRvbiAoY2xpY2spPVxcXCJjaGFuZ2VMZXZlbChsb2dnZXIubmFtZSwgJ0RFQlVHJylcXFwiIFtuZ0NsYXNzXT1cXFwiKGxvZ2dlci5sZXZlbD09J0RFQlVHJykgPyAnYnRuLXdhcm5pbmcnIDogJ2J0bi1zZWNvbmRhcnknXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbVxcXCI+REVCVUc8L2J1dHRvbj4gPGJ1dHRvbiAoY2xpY2spPVxcXCJjaGFuZ2VMZXZlbChsb2dnZXIubmFtZSwgJ0lORk8nKVxcXCIgW25nQ2xhc3NdPVxcXCIobG9nZ2VyLmxldmVsPT0nSU5GTycpID8gJ2J0bi1pbmZvJyA6ICdidG4tc2Vjb25kYXJ5J1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc21cXFwiPklORk88L2J1dHRvbj4gPGJ1dHRvbiAoY2xpY2spPVxcXCJjaGFuZ2VMZXZlbChsb2dnZXIubmFtZSwgJ1dBUk4nKVxcXCIgW25nQ2xhc3NdPVxcXCIobG9nZ2VyLmxldmVsPT0nV0FSTicpID8gJ2J0bi1zdWNjZXNzJyA6ICdidG4tc2Vjb25kYXJ5J1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc21cXFwiPldBUk48L2J1dHRvbj4gPGJ1dHRvbiAoY2xpY2spPVxcXCJjaGFuZ2VMZXZlbChsb2dnZXIubmFtZSwgJ0VSUk9SJylcXFwiIFtuZ0NsYXNzXT1cXFwiKGxvZ2dlci5sZXZlbD09J0VSUk9SJykgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1zZWNvbmRhcnknXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbVxcXCI+RVJST1I8L2J1dHRvbj4gPC90ZD4gPC90cj4gPC90YWJsZT4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cubW9kZWwnO1xuaW1wb3J0IHsgTG9nc1NlcnZpY2UgfSBmcm9tICcuL2xvZ3Muc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWxvZ3MnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTG9nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBsb2dnZXJzOiBMb2dbXTtcbiAgICBmaWx0ZXI6IHN0cmluZztcbiAgICBvcmRlclByb3A6IHN0cmluZztcbiAgICByZXZlcnNlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbG9nc1NlcnZpY2U6IExvZ3NTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMub3JkZXJQcm9wID0gJ25hbWUnO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2dzU2VydmljZS5maW5kQWxsKCkuc3Vic2NyaWJlKChsb2dnZXJzKSA9PiB0aGlzLmxvZ2dlcnMgPSBsb2dnZXJzKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VMZXZlbChuYW1lOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbG9nID0gbmV3IExvZyhuYW1lLCBsZXZlbCk7XG4gICAgICAgIHRoaXMubG9nc1NlcnZpY2UuY2hhbmdlTGV2ZWwobG9nKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2dzU2VydmljZS5maW5kQWxsKCkuc3Vic2NyaWJlKChsb2dnZXJzKSA9PiB0aGlzLmxvZ2dlcnMgPSBsb2dnZXJzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMb2dzQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBsb2dzUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdsb2dzJyxcbiAgICBjb21wb25lbnQ6IExvZ3NDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBwYWdlVGl0bGU6ICdsb2dzLnRpdGxlJ1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vbG9nLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ3NTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgY2hhbmdlTGV2ZWwobG9nOiBMb2cpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KCdtYW5hZ2VtZW50L2xvZ3MnLCBsb2cpO1xuICAgIH1cblxuICAgIGZpbmRBbGwoKTogT2JzZXJ2YWJsZTxMb2dbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnbWFuYWdlbWVudC9sb2dzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMuZHVtcC50aXRsZVxcXCI+VGhyZWFkcyBkdW1wPC9oND4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKGNsaWNrKT1cXFwiYWN0aXZlTW9kYWwuZGlzbWlzcygnY2xvc2VkJylcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwidGhyZWFkRHVtcEZpbHRlciA9IHt9XFxcIj5BbGwmbmJzcDs8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kZWZhdWx0XFxcIj57e3RocmVhZER1bXBBbGx9fTwvc3Bhbj48L3NwYW4+Jm5ic3A7IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJ0aHJlYWREdW1wRmlsdGVyID0ge3RocmVhZFN0YXRlOiAnUlVOTkFCTEUnfVxcXCI+UnVubmFibGUmbmJzcDs8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kZWZhdWx0XFxcIj57e3RocmVhZER1bXBSdW5uYWJsZX19PC9zcGFuPjwvc3Bhbj4mbmJzcDsgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLWluZm9cXFwiIChjbGljayk9XFxcInRocmVhZER1bXBGaWx0ZXIgPSB7dGhyZWFkU3RhdGU6ICdXQUlUSU5HJ31cXFwiPldhaXRpbmcmbmJzcDs8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kZWZhdWx0XFxcIj57e3RocmVhZER1bXBXYWl0aW5nfX08L3NwYW4+PC9zcGFuPiZuYnNwOyA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2Utd2FybmluZ1xcXCIgKGNsaWNrKT1cXFwidGhyZWFkRHVtcEZpbHRlciA9IHt0aHJlYWRTdGF0ZTogJ1RJTUVEX1dBSVRJTkcnfVxcXCI+VGltZWQgV2FpdGluZyZuYnNwOzxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRlZmF1bHRcXFwiPnt7dGhyZWFkRHVtcFRpbWVkV2FpdGluZ319PC9zcGFuPjwvc3Bhbj4mbmJzcDsgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwidGhyZWFkRHVtcEZpbHRlciA9IHt0aHJlYWRTdGF0ZTogJ0JMT0NLRUQnfVxcXCI+QmxvY2tlZCZuYnNwOzxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWRlZmF1bHRcXFwiPnt7dGhyZWFkRHVtcEJsb2NrZWR9fTwvc3Bhbj48L3NwYW4+Jm5ic3A7IDxkaXYgY2xhc3M9XFxcIm10LTJcXFwiPiZuYnNwOzwvZGl2PiBGaWx0ZXIgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJ0aHJlYWREdW1wRmlsdGVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj4gPGRpdiBjbGFzcz1cXFwicGFkXFxcIiAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiB0aHJlYWREdW1wIHwgcHVyZUZpbHRlcjp0aHJlYWREdW1wRmlsdGVyOidsb2NrTmFtZScgfCBrZXlzXFxcIj4gPGg2PiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2VcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0QmFkZ2VDbGFzcyhlbnRyeS52YWx1ZS50aHJlYWRTdGF0ZSlcXFwiPnt7ZW50cnkudmFsdWUudGhyZWFkU3RhdGV9fTwvc3Bhbj4mbmJzcDt7e2VudHJ5LnZhbHVlLnRocmVhZE5hbWV9fSAoSUQge3tlbnRyeS52YWx1ZS50aHJlYWRJZH19KSA8YSAoY2xpY2spPVxcXCJlbnRyeS5zaG93ID0gIWVudHJ5LnNob3dcXFwiIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiPiA8c3BhbiBbaGlkZGVuXT1cXFwiZW50cnkuc2hvd1xcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmR1bXAuc2hvd1xcXCI+U2hvdyBTdGFja1RyYWNlPC9zcGFuPiA8c3BhbiBbaGlkZGVuXT1cXFwiIWVudHJ5LnNob3dcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy5kdW1wLmhpZGVcXFwiPkhpZGUgU3RhY2tUcmFjZTwvc3Bhbj4gPC9hPiA8L2g2PiA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiBbaGlkZGVuXT1cXFwiIWVudHJ5LnNob3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj4gPGRpdiAqbmdGb3I9XFxcImxldCBzdCBvZiBlbnRyeS52YWx1ZS5zdGFja1RyYWNlIHwga2V5c1xcXCIgY2xhc3M9XFxcImJyZWFrXFxcIj4gPHNhbXA+e3tzdC52YWx1ZS5jbGFzc05hbWV9fS57e3N0LnZhbHVlLm1ldGhvZE5hbWV9fSg8Y29kZT57e3N0LnZhbHVlLmZpbGVOYW1lfX06e3tzdC52YWx1ZS5saW5lTnVtYmVyfX08L2NvZGU+KTwvc2FtcD4gPHNwYW4gY2xhc3M9XFxcIm10LTFcXFwiPjwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zbSB0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmR1bXAuYmxvY2tlZHRpbWVcXFwiPkJsb2NrZWQgVGltZTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmR1bXAuYmxvY2tlZGNvdW50XFxcIj5CbG9ja2VkIENvdW50PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMuZHVtcC53YWl0ZWR0aW1lXFxcIj5XYWl0ZWQgVGltZTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmR1bXAud2FpdGVkY291bnRcXFwiPldhaXRlZCBDb3VudDwvdGg+IDx0aCBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMuZHVtcC5sb2NrbmFtZVxcXCI+TG9jayBOYW1lPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHI+IDx0ZD57e2VudHJ5LnZhbHVlLmJsb2NrZWRUaW1lfX08L3RkPiA8dGQ+e3tlbnRyeS52YWx1ZS5ibG9ja2VkQ291bnR9fTwvdGQ+IDx0ZD57e2VudHJ5LnZhbHVlLndhaXRlZFRpbWV9fTwvdGQ+IDx0ZD57e2VudHJ5LnZhbHVlLndhaXRlZENvdW50fX08L3RkPiA8dGQ+PGNvZGU+e3tlbnRyeS52YWx1ZS5sb2NrTmFtZX19PC9jb2RlPjwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBwdWxsLWxlZnRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImFjdGl2ZU1vZGFsLmRpc21pc3MoJ2Nsb3NlZCcpXFxcIj5Eb25lPC9idXR0b24+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLW1vZGFsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLW1vZGFsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktbWV0cmljcy1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdGhyZWFkRHVtcEZpbHRlcjogYW55O1xuICAgIHRocmVhZER1bXA6IGFueTtcbiAgICB0aHJlYWREdW1wQWxsID0gMDtcbiAgICB0aHJlYWREdW1wQmxvY2tlZCA9IDA7XG4gICAgdGhyZWFkRHVtcFJ1bm5hYmxlID0gMDtcbiAgICB0aHJlYWREdW1wVGltZWRXYWl0aW5nID0gMDtcbiAgICB0aHJlYWREdW1wV2FpdGluZyA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudGhyZWFkRHVtcC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlLnRocmVhZFN0YXRlID09PSAnUlVOTkFCTEUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJlYWREdW1wUnVubmFibGUgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudGhyZWFkU3RhdGUgPT09ICdXQUlUSU5HJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcFdhaXRpbmcgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudGhyZWFkU3RhdGUgPT09ICdUSU1FRF9XQUlUSU5HJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcFRpbWVkV2FpdGluZyArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS50aHJlYWRTdGF0ZSA9PT0gJ0JMT0NLRUQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJlYWREdW1wQmxvY2tlZCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRocmVhZER1bXBBbGwgPSB0aGlzLnRocmVhZER1bXBSdW5uYWJsZSArIHRoaXMudGhyZWFkRHVtcFdhaXRpbmcgK1xuICAgICAgICAgICAgdGhpcy50aHJlYWREdW1wVGltZWRXYWl0aW5nICsgdGhpcy50aHJlYWREdW1wQmxvY2tlZDtcbiAgICB9XG5cbiAgICBnZXRCYWRnZUNsYXNzKHRocmVhZFN0YXRlKSB7XG4gICAgICAgIGlmICh0aHJlYWRTdGF0ZSA9PT0gJ1JVTk5BQkxFJykge1xuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS1zdWNjZXNzJztcbiAgICAgICAgfSBlbHNlIGlmICh0aHJlYWRTdGF0ZSA9PT0gJ1dBSVRJTkcnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLWluZm8nO1xuICAgICAgICB9IGVsc2UgaWYgKHRocmVhZFN0YXRlID09PSAnVElNRURfV0FJVElORycpIHtcbiAgICAgICAgICAgIHJldHVybiAnYmFkZ2Utd2FybmluZyc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhyZWFkU3RhdGUgPT09ICdCTE9DS0VEJykge1xuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS1kYW5nZXInO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxoMj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnRpdGxlXFxcIj5BcHBsaWNhdGlvbiBNZXRyaWNzPC9zcGFuPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcXFwiIChjbGljayk9XFxcInJlZnJlc2goKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZWZyZXNoXFxcIj48L3NwYW4+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5yZWZyZXNoLmJ1dHRvblxcXCI+UmVmcmVzaDwvc3Bhbj4gPC9idXR0b24+IDwvaDI+IDxoMyBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRpdGxlXFxcIj5KVk0gTWV0cmljczwvaDM+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcIiF1cGRhdGluZ01ldHJpY3NcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+IDxiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0ubWVtb3J5LnRpdGxlXFxcIj5NZW1vcnk8L2I+IDxwPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0ubWVtb3J5LnRvdGFsXFxcIj5Ub3RhbCBNZW1vcnk8L3NwYW4+ICh7e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LnRvdGFsLnVzZWQnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSAvIHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwubWF4J10udmFsdWUgLyAxMDAwMDAwIHwgbnVtYmVyOicxLjAtMCd9fU0pPC9wPiA8bmdiLXByb2dyZXNzYmFyIHR5cGU9XFxcInN1Y2Nlc3NcXFwiIFttYXhdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS50b3RhbC5tYXgnXS52YWx1ZVxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwudXNlZCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LnRvdGFsLnVzZWQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LnRvdGFsLm1heCddLnZhbHVlIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8cD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLm1lbW9yeS5oZWFwXFxcIj5IZWFwIE1lbW9yeTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC51c2VkJ10udmFsdWUgLyAxMDAwMDAwIHwgbnVtYmVyOicxLjAtMCd9fU0gLyB7e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAubWF4J10udmFsdWUgLyAxMDAwMDAwIHwgbnVtYmVyOicxLjAtMCd9fU0pPC9wPiA8bmdiLXByb2dyZXNzYmFyIFttYXhdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5oZWFwLm1heCddLnZhbHVlXFxcIiBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5oZWFwLnVzZWQnXS52YWx1ZVxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5oZWFwLnVzZWQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAubWF4J10udmFsdWUgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDxwPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0ubWVtb3J5Lm5vbmhlYXBcXFwiPk5vbi1IZWFwIE1lbW9yeTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkubm9uLWhlYXAudXNlZCddLnZhbHVlIC8gMTAwMDAwMCB8IG51bWJlcjonMS4wLTAnfX1NIC8ge3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC5jb21taXR0ZWQnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5Lm5vbi1oZWFwLmNvbW1pdHRlZCddLnZhbHVlXFxcIiBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC51c2VkJ10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkubm9uLWhlYXAudXNlZCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkubm9uLWhlYXAuY29tbWl0dGVkJ10udmFsdWUgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+IDxiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy50aXRsZVxcXCI+VGhyZWFkczwvYj4gKFRvdGFsOiB7e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlfX0pIDxhIGNsYXNzPVxcXCJoYW5kXFxcIiAoY2xpY2spPVxcXCJyZWZyZXNoVGhyZWFkRHVtcERhdGEoKVxcXCIgZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIiBkYXRhLXRhcmdldD1cXFwiI3RocmVhZER1bXBcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvaT48L2E+IDxwPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy5ydW5uYWJsZVxcXCI+UnVubmFibGU8L3NwYW4+IHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnJ1bm5hYmxlLmNvdW50J10udmFsdWV9fTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMucnVubmFibGUuY291bnQnXS52YWx1ZVxcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ydW5uYWJsZS5jb3VudCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWUgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDxwPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy50aW1lZHdhaXRpbmdcXFwiPlRpbWVkIFdhaXRpbmc8L3NwYW4+ICh7e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy50aW1lZF93YWl0aW5nLmNvdW50J10udmFsdWV9fSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnRpbWVkX3dhaXRpbmcuY291bnQnXS52YWx1ZVxcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcIndhcm5pbmdcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy50aW1lZF93YWl0aW5nLmNvdW50J10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPHA+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLndhaXRpbmdcXFwiPldhaXRpbmc8L3NwYW4+ICh7e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy53YWl0aW5nLmNvdW50J10udmFsdWV9fSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLndhaXRpbmcuY291bnQnXS52YWx1ZVxcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcIndhcm5pbmdcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy53YWl0aW5nLmNvdW50J10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPHA+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmJsb2NrZWRcXFwiPkJsb2NrZWQ8L3NwYW4+ICh7e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ibG9ja2VkLmNvdW50J10udmFsdWV9fSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmJsb2NrZWQuY291bnQnXS52YWx1ZVxcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ibG9ja2VkLmNvdW50J10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj4gPGIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5nYy50aXRsZVxcXCI+R2FyYmFnZSBjb2xsZWN0aW9uczwvYj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLU1hcmtTd2VlcC5jb3VudCddXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uZ2MubWFya3N3ZWVwY291bnRcXFwiPk1hcmsgU3dlZXAgY291bnQ8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgdGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtTWFya1N3ZWVwLmNvdW50J10udmFsdWV9fTwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLU1hcmtTd2VlcC50aW1lJ11cXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5nYy5tYXJrc3dlZXB0aW1lXFxcIj5NYXJrIFN3ZWVwIHRpbWU8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgdGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtTWFya1N3ZWVwLnRpbWUnXS52YWx1ZX19bXM8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1TY2F2ZW5nZS5jb3VudCddXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uZ2Muc2NhdmVuZ2Vjb3VudFxcXCI+U2NhdmVuZ2UgY291bnQ8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgdGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtU2NhdmVuZ2UuY291bnQnXS52YWx1ZX19PC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtU2NhdmVuZ2UudGltZSddXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uZ2Muc2NhdmVuZ2V0aW1lXFxcIj5TY2F2ZW5nZSB0aW1lPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIHRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLVNjYXZlbmdlLnRpbWUnXS52YWx1ZX19bXM8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwid2VsbCB3ZWxsLWxnXFxcIiAqbmdJZj1cXFwidXBkYXRpbmdNZXRyaWNzXFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MudXBkYXRpbmdcXFwiPlVwZGF0aW5nLi4uPC9kaXY+IDxoMyBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAudGl0bGVcXFwiPkhUVFAgcmVxdWVzdHMgKGV2ZW50cyBwZXIgc2Vjb25kKTwvaDM+IDxwICpuZ0lmPVxcXCJtZXRyaWNzLmNvdW50ZXJzXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLmFjdGl2ZVxcXCI+QWN0aXZlIHJlcXVlc3RzPC9zcGFuPiA8Yj57e21ldHJpY3MuY291bnRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLmFjdGl2ZVJlcXVlc3RzJ10uY291bnQgfCBudW1iZXI6JzEuMC0wJ319PC9iPiAtIDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50b3RhbFxcXCI+VG90YWwgcmVxdWVzdHM8L3NwYW4+IDxiPnt7bWV0cmljcy50aW1lcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlcXVlc3RzJ10uY291bnQgfCBudW1iZXI6JzEuMC0wJ319PC9iPiA8L3A+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCIhdXBkYXRpbmdNZXRyaWNzXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAudGFibGUuY29kZVxcXCI+Q29kZTwvdGg+IDx0aCBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAudGFibGUuY291bnRcXFwiPkNvdW50PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAudGFibGUubWVhblxcXCI+TWVhbjwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLnRhYmxlLmF2ZXJhZ2VcXFwiPkF2ZXJhZ2U8L3NwYW4+ICgxIG1pbik8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50YWJsZS5hdmVyYWdlXFxcIj5BdmVyYWdlPC9zcGFuPiAoNSBtaW4pPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAudGFibGUuYXZlcmFnZVxcXCI+QXZlcmFnZTwvc3Bhbj4gKDE1IG1pbik8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0cj4gPHRkIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC5jb2RlLm9rXFxcIj5PSzwvdGQ+IDx0ZD4gPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy50aW1lcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlcXVlc3RzJ10uY291bnRcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm9rJ10uY291bnRcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5jb3VudH19PC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3tmaWx0ZXJOYU4obWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5tZWFuX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLm0xX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLm01X3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLm0xNV9yYXRlKSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPC90cj4gPHRyPiA8dGQgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLmNvZGUubm90Zm91bmRcXFwiPk5vdCBGb3VuZDwvdGQ+IDx0ZD4gPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy50aW1lcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlcXVlc3RzJ10uY291bnRcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm5vdEZvdW5kJ10uY291bnRcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5jb3VudH19PC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3tmaWx0ZXJOYU4obWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5tZWFuX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLm0xX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLm01X3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLm0xNV9yYXRlKSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPC90cj4gPHRyPiA8dGQgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLmNvZGUuc2VydmVyZXJyb3JcXFwiPlNlcnZlciBlcnJvcjwvdGQ+IDx0ZD4gPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy50aW1lcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlcXVlc3RzJ10uY291bnRcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLnNlcnZlckVycm9yJ10uY291bnRcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMuc2VydmVyRXJyb3InXS5jb3VudH19PC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3tmaWx0ZXJOYU4obWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMuc2VydmVyRXJyb3InXS5tZWFuX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLm0xX3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLm01X3JhdGUpIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e2ZpbHRlck5hTihtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLm0xNV9yYXRlKSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxoMyBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50aXRsZVxcXCI+U2VydmljZXMgc3RhdGlzdGljcyAodGltZSBpbiBtaWxsaXNlY29uZCk8L2gzPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwiIXVwZGF0aW5nTWV0cmljc1xcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyPiA8dGggamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnNlcnZpY2Vzc3RhdHMudGFibGUubmFtZVxcXCI+U2VydmljZSBuYW1lPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50YWJsZS5jb3VudFxcXCI+Q291bnQ8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5zZXJ2aWNlc3N0YXRzLnRhYmxlLm1lYW5cXFwiPk1lYW48L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5zZXJ2aWNlc3N0YXRzLnRhYmxlLm1pblxcXCI+TWluPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50YWJsZS5wNTBcXFwiPnA1MDwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnNlcnZpY2Vzc3RhdHMudGFibGUucDc1XFxcIj5wNzU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5zZXJ2aWNlc3N0YXRzLnRhYmxlLnA5NVxcXCI+cDk1PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50YWJsZS5wOTlcXFwiPnA5OTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnNlcnZpY2Vzc3RhdHMudGFibGUubWF4XFxcIj5NYXg8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiBzZXJ2aWNlc1N0YXRzIHwga2V5c1xcXCI+IDx0ZD57e2VudHJ5LmtleX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLmNvdW50fX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZW50cnkudmFsdWUubWVhbiAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLm1pbiAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA1MCAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA3NSAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA5NSAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA5OSAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLm1heCAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxoMyBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUudGl0bGVcXFwiPkNhY2hlIHN0YXRpc3RpY3M8L2gzPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwiIXVwZGF0aW5nTWV0cmljc1xcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyPiA8dGggamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLmNhY2hlbmFtZVxcXCI+Q2FjaGUgbmFtZTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgZGF0YS10cmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUuaGl0c1xcXCI+Q2FjaGUgSGl0czwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgZGF0YS10cmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUubWlzc2VzXFxcIj5DYWNoZSBNaXNzZXM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLmdldHNcXFwiPkNhY2hlIEdldHM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLnB1dHNcXFwiPkNhY2hlIFB1dHM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLnJlbW92YWxzXFxcIj5DYWNoZSBSZW1vdmFsczwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgZGF0YS10cmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUuZXZpY3Rpb25zXFxcIj5DYWNoZSBFdmljdGlvbnM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLmhpdFBlcmNlbnRcXFwiPkNhY2hlIEhpdCAlPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBkYXRhLXRyYW5zbGF0ZT1cXFwibWV0cmljcy5jYWNoZS5taXNzUGVyY2VudFxcXCI+Q2FjaGUgTWlzcyAlPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBkYXRhLXRyYW5zbGF0ZT1cXFwibWV0cmljcy5jYWNoZS5hdmVyYWdlR2V0VGltZVxcXCI+QXZlcmFnZSBnZXQgdGltZSAowrVzKTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgZGF0YS10cmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUuYXZlcmFnZVB1dFRpbWVcXFwiPkF2ZXJhZ2UgcHV0IHRpbWUgKMK1cyk8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLmF2ZXJhZ2VSZW1vdmVUaW1lXFxcIj5BdmVyYWdlIHJlbW92ZSB0aW1lICjCtXMpPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgY2FjaGVzU3RhdHMgfCBrZXlzXFxcIj4gPHRkPnt7ZW50cnkua2V5fX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbZW50cnkua2V5ICsgJy5jYWNoZS1oaXRzJ10udmFsdWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLW1pc3NlcyddLnZhbHVlfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbZW50cnkua2V5ICsgJy5jYWNoZS1nZXRzJ10udmFsdWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLXB1dHMnXS52YWx1ZX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtcmVtb3ZhbHMnXS52YWx1ZX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtZXZpY3Rpb25zJ10udmFsdWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLWhpdC1wZXJjZW50YWdlJ10udmFsdWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLW1pc3MtcGVyY2VudGFnZSddLnZhbHVlIH19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2ZpbHRlck5hTihtZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmF2ZXJhZ2UtZ2V0LXRpbWUnXS52YWx1ZSkgfCBudW1iZXIgOiAnMS4yLTInIH19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2ZpbHRlck5hTihtZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmF2ZXJhZ2UtcHV0LXRpbWUnXS52YWx1ZSkgfCBudW1iZXIgOiAnMS4yLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZmlsdGVyTmFOKG1ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuYXZlcmFnZS1yZW1vdmUtdGltZSddLnZhbHVlKSB8IG51bWJlciA6ICcxLjItMicgfX08L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPGgzIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLnRpdGxlXFxcIiAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXMgJiYgbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXSAmJiBtZXRyaWNzLmdhdWdlc1snSGlrYXJpUG9vbC0xLnBvb2wuVG90YWxDb25uZWN0aW9ucyddLnZhbHVlID4gMFxcXCI+RGF0YVNvdXJjZSBzdGF0aXN0aWNzICh0aW1lIGluIG1pbGxpc2Vjb25kKTwvaDM+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCIhdXBkYXRpbmdNZXRyaWNzICYmIG1ldHJpY3MuZ2F1Z2VzICYmIG1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5Ub3RhbENvbm5lY3Rpb25zJ10gJiYgbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZSA+IDBcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLnVzYWdlXFxcIj5Vc2FnZTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLkFjdGl2ZUNvbm5lY3Rpb25zJ10udmFsdWV9fSAvIHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZX19KTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmRhdGFzb3VyY2UuY291bnRcXFwiPkNvdW50PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuZGF0YXNvdXJjZS5tZWFuXFxcIj5NZWFuPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuZGF0YXNvdXJjZS5taW5cXFwiPk1pbjwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmRhdGFzb3VyY2UucDUwXFxcIj5wNTA8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLnA3NVxcXCI+cDc1PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuZGF0YXNvdXJjZS5wOTVcXFwiPnA5NTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmRhdGFzb3VyY2UucDk5XFxcIj5wOTk8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLm1heFxcXCI+TWF4PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHI+IDx0ZD4gPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MgcHJvZ3Jlc3Mtc3RyaXBlZFxcXCI+IDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5Ub3RhbENvbm5lY3Rpb25zJ10udmFsdWVcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5BY3RpdmVDb25uZWN0aW9ucyddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5BY3RpdmVDb25uZWN0aW9ucyddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC9kaXY+IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10uY291bnR9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tmaWx0ZXJOYU4obWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLm1lYW4pIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tmaWx0ZXJOYU4obWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLm1pbikgfCBudW1iZXI6JzEuMC0yJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2ZpbHRlck5hTihtZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ucDUwKSB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZmlsdGVyTmFOKG1ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5wNzUpIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3tmaWx0ZXJOYU4obWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLnA5NSkgfCBudW1iZXI6JzEuMC0yJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2ZpbHRlck5hTihtZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ucDk5KSB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZmlsdGVyTmFOKG1ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5tYXgpIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21ldHJpY3MtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEpoaU1ldHJpY3NTZXJ2aWNlIH0gZnJvbSAnLi9tZXRyaWNzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1tZXRyaWNzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWV0cmljcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpTWV0cmljc01vbml0b3JpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG1ldHJpY3M6IGFueSA9IHt9O1xuICAgIGNhY2hlc1N0YXRzOiBhbnkgPSB7fTtcbiAgICBzZXJ2aWNlc1N0YXRzOiBhbnkgPSB7fTtcbiAgICB1cGRhdGluZ01ldHJpY3MgPSB0cnVlO1xuICAgIEpDQUNIRV9LRVk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByaXZhdGUgbWV0cmljc1NlcnZpY2U6IEpoaU1ldHJpY3NTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuSkNBQ0hFX0tFWSA9ICdqY2FjaGUuc3RhdGlzdGljcyc7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMudXBkYXRpbmdNZXRyaWNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXRyaWNzU2VydmljZS5nZXRNZXRyaWNzKCkuc3Vic2NyaWJlKChtZXRyaWNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1ldHJpY3MgPSBtZXRyaWNzO1xuICAgICAgICAgICAgdGhpcy51cGRhdGluZ01ldHJpY3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZXNTdGF0cyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5jYWNoZXNTdGF0cyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMobWV0cmljcy50aW1lcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWV0cmljcy50aW1lcnNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ3dlYi5yZXN0JykgIT09IC0xIHx8IGtleS5pbmRleE9mKCdzZXJ2aWNlJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZXNTdGF0c1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZXRyaWNzLmdhdWdlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdqY2FjaGUuc3RhdGlzdGljcycpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1ldHJpY3MuZ2F1Z2VzW2tleV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBnZXRzIG9yIHB1dHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBrZXkubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3S2V5ID0ga2V5LnN1YnN0cigwLCBpbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCB0aGUgbmFtZSBvZiB0aGUgZG9tYWluXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVzU3RhdHNbbmV3S2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogdGhpcy5KQ0FDSEVfS0VZLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnJlc2hUaHJlYWREdW1wRGF0YSgpIHtcbiAgICAgICAgdGhpcy5tZXRyaWNzU2VydmljZS50aHJlYWREdW1wKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbFJlZiAgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQsIHsgc2l6ZTogJ2xnJ30pO1xuICAgICAgICAgICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UudGhyZWFkRHVtcCA9IGRhdGE7XG4gICAgICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTGVmdCBibGFuayBpbnRlbnRpb25hbGx5LCBub3RoaW5nIHRvIGRvIGhlcmVcbiAgICAgICAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBMZWZ0IGJsYW5rIGludGVudGlvbmFsbHksIG5vdGhpbmcgdG8gZG8gaGVyZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpbHRlck5hTihpbnB1dCkge1xuICAgICAgICBpZiAoaXNOYU4oaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEpoaU1ldHJpY3NNb25pdG9yaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9tZXRyaWNzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBtZXRyaWNzUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdqaGktbWV0cmljcycsXG4gICAgY29tcG9uZW50OiBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICAgIHBhZ2VUaXRsZTogJ21ldHJpY3MudGl0bGUnXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpoaU1ldHJpY3NTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIGdldE1ldHJpY3MoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvbWV0cmljcycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgdGhyZWFkRHVtcCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnbWFuYWdlbWVudC9kdW1wJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIG5hbWU9XFxcImRlbGV0ZUZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImNvbmZpcm1EZWxldGUodXNlci5sb2dpbilcXFwiPiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5kZWxldGUudGl0bGVcXFwiPkNvbmZpcm0gZGVsZXRlIG9wZXJhdGlvbjwvaDQ+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPHAgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5kZWxldGUucXVlc3Rpb25cXFwiIHRyYW5zbGF0ZVZhbHVlcz1cXFwie2xvZ2luOiAne3t1c2VyLmxvZ2lufX0nfVxcXCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFVzZXI/PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1iYW5cXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uY2FuY2VsXFxcIj5DYW5jZWw8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlbW92ZVxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5kZWxldGVcXFwiPkRlbGV0ZTwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L2Zvcm0+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwsIE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSmhpQWxlcnRTZXJ2aWNlLCBKaGlFdmVudE1hbmFnZXIgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IFVzZXIsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFVzZXJNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3VzZXItbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXVzZXItbWdtdC1kZWxldGUtZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50IHtcblxuICAgIHVzZXI6IFVzZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBKaGlBbGVydFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBKaGlFdmVudE1hbmFnZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgICB9XG5cbiAgICBjb25maXJtRGVsZXRlKGxvZ2luKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZGVsZXRlKGxvZ2luKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAndXNlckxpc3RNb2RpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdEZWxldGVkIGEgdXNlcid9KTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcyh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ3VzZXJNYW5hZ2VtZW50LmRlbGV0ZWQnLCB7IHBhcmFtIDogbG9naW4gfSwgbnVsbCk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS11c2VyLWRlbGV0ZS1kaWFsb2cnLFxuICAgIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICAgIHJvdXRlU3ViOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgdXNlck1vZGFsU2VydmljZTogVXNlck1vZGFsU2VydmljZVxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlU3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLnVzZXJNb2RhbFNlcnZpY2Uub3BlbihVc2VyTWdtdERlbGV0ZURpYWxvZ0NvbXBvbmVudCwgcGFyYW1zWydsb2dpbiddKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdJZj1cXFwidXNlclxcXCI+IDxoMj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5kZXRhaWwudGl0bGVcXFwiPlVzZXI8L3NwYW4+IFs8Yj57e3VzZXIubG9naW59fTwvYj5dIDwvaDI+IDxkbCBjbGFzcz1cXFwicm93LW1kIGpoLWVudGl0eS1kZXRhaWxzXFxcIj4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQubG9naW5cXFwiPkxvZ2luPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3t1c2VyLmxvZ2lufX08L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1kYW5nZXJcXFwiICpuZ0lmPVxcXCIhdXNlci5hY3RpdmF0ZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZGVhY3RpdmF0ZWRcXFwiPkRlYWN0aXZhdGVkPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2Utc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInVzZXIuYWN0aXZhdGVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmFjdGl2YXRlZFxcXCI+QWN0aXZhdGVkPC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5maXJzdE5hbWVcXFwiPkZpcnN0IE5hbWU8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5maXJzdE5hbWV9fTwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50Lmxhc3ROYW1lXFxcIj5MYXN0IE5hbWU8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5sYXN0TmFtZX19PC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZW1haWxcXFwiPkVtYWlsPC9zcGFuPjwvZHQ+IDxkZD57e3VzZXIuZW1haWx9fTwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmxhbmdLZXlcXFwiPkxhbmcgS2V5PC9zcGFuPjwvZHQ+IDxkZD57e3VzZXIubGFuZ0tleX19PC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuY3JlYXRlZEJ5XFxcIj5DcmVhdGVkIEJ5PC9zcGFuPjwvZHQ+IDxkZD57e3VzZXIuY3JlYXRlZEJ5fX08L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5jcmVhdGVkRGF0ZVxcXCI+Q3JlYXRlZCBEYXRlPC9zcGFuPjwvZHQ+IDxkZD57e3VzZXIuY3JlYXRlZERhdGUgfCBkYXRlOidkZC9NTS95eSBISDptbScgfX08L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYXN0TW9kaWZpZWRCeVxcXCI+TGFzdCBNb2RpZmllZCBCeTwvc3Bhbj48L2R0PiA8ZGQ+e3t1c2VyLmxhc3RNb2RpZmllZEJ5fX08L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYXN0TW9kaWZpZWREYXRlXFxcIj5MYXN0IE1vZGlmaWVkIERhdGU8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5sYXN0TW9kaWZpZWREYXRlIHwgZGF0ZTonZGQvTU0veXkgSEg6bW0nfX08L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5wcm9maWxlc1xcXCI+UHJvZmlsZXM8L3NwYW4+PC9kdD4gPGRkPiA8dWwgY2xhc3M9XFxcImxpc3QtdW5zdHlsZWRcXFwiPiA8bGkgKm5nRm9yPVxcXCJsZXQgYXV0aG9yaXR5IG9mIHVzZXIuYXV0aG9yaXRpZXNcXFwiPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtaW5mb1xcXCI+e3thdXRob3JpdHl9fTwvc3Bhbj4gPC9saT4gPC91bD4gPC9kZD4gPC9kbD4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIHJvdXRlckxpbms9XFxcIi91c2VyLW1hbmFnZW1lbnRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctbGVmdFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5iYWNrXFxcIj4gQmFjazwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS11c2VyLW1nbXQtZGV0YWlsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlck1nbXREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICB1c2VyOiBVc2VyO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZChwYXJhbXNbJ2xvZ2luJ10pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkKGxvZ2luKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZmluZChsb2dpbikuc3Vic2NyaWJlKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIG5hbWU9XFxcImVkaXRGb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlIChuZ1N1Ym1pdCk9XFxcInNhdmUoKVxcXCIgI2VkaXRGb3JtPVxcXCJuZ0Zvcm1cXFwiPiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBpZD1cXFwibXlVc2VyTGFiZWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuaG9tZS5jcmVhdGVPckVkaXRMYWJlbFxcXCI+IENyZWF0ZSBvciBlZGl0IGEgVXNlcjwvaDQ+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5maWVsZC5pZFxcXCI+SUQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiaWRcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmlkXFxcIiByZWFkb25seT1cXFwicmVhZG9ubHlcXFwiPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmxvZ2luXFxcIj5Mb2dpbjwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJsb2dpblxcXCIgI2xvZ2luSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmxvZ2luXFxcIiByZXF1aXJlZCBtaW5sZW5ndGg9XFxcIjFcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiIHBhdHRlcm49XFxcIl5bXycuQEEtWmEtejAtOS1dKiRcXFwiPiA8ZGl2ICpuZ0lmPVxcXCJsb2dpbklucHV0LmRpcnR5ICYmIGxvZ2luSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibG9naW5JbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LnZhbGlkYXRpb24ucmVxdWlyZWRcXFwiPiBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxvZ2luSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkudmFsaWRhdGlvbi5tYXhsZW5ndGhcXFwiIHRyYW5zbGF0ZS12YWx1ZS1tYXg9XFxcIjUwXFxcIj4gVGhpcyBmaWVsZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZmlyc3ROYW1lXFxcIj5GaXJzdCBOYW1lPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgI2ZpcnN0TmFtZUlucHV0PVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5maXJzdE5hbWVcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiPiA8ZGl2ICpuZ0lmPVxcXCJmaXJzdE5hbWVJbnB1dC5kaXJ0eSAmJiBmaXJzdE5hbWVJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJmaXJzdE5hbWVJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS52YWxpZGF0aW9uLm1heGxlbmd0aFxcXCIgdHJhbnNsYXRlLXZhbHVlLW1heD1cXFwiNTBcXFwiPiBUaGlzIGZpZWxkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYXN0TmFtZVxcXCI+TGFzdCBOYW1lPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiAjbGFzdE5hbWVJbnB1dD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIubGFzdE5hbWVcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiPiA8ZGl2ICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmRpcnR5ICYmIGxhc3ROYW1lSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibGFzdE5hbWVJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS52YWxpZGF0aW9uLm1heGxlbmd0aFxcXCIgdHJhbnNsYXRlLXZhbHVlLW1heD1cXFwiNTBcXFwiPiBUaGlzIGZpZWxkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5lbWFpbFxcXCI+RW1haWw8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiAjZW1haWxJbnB1dD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiIG1pbmxlbmd0aD1cXFwiNVxcXCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVxcXCIxMDBcXFwiPiA8ZGl2ICpuZ0lmPVxcXCJlbWFpbElucHV0LmRpcnR5ICYmIGVtYWlsSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LnZhbGlkYXRpb24ucmVxdWlyZWRcXFwiPiBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkudmFsaWRhdGlvbi5tYXhsZW5ndGhcXFwiIHRyYW5zbGF0ZS12YWx1ZS1tYXg9XFxcIjEwMFxcXCI+IFRoaXMgZmllbGQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDEwMCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkudmFsaWRhdGlvbi5taW5sZW5ndGhcXFwiIHRyYW5zbGF0ZS12YWx1ZS1taW49XFxcIjVcXFwiPiBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5lbWFpbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwuaW52YWxpZFxcXCI+IFlvdXIgZW1haWwgaXMgaW52YWxpZC4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImFjdGl2YXRlZFxcXCI+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgW2Rpc2FibGVkXT1cXFwidXNlci5pZCA9PT0gbnVsbFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJhY3RpdmF0ZWRcXFwiIG5hbWU9XFxcImFjdGl2YXRlZFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYWN0aXZhdGVkXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5hY3RpdmF0ZWRcXFwiPkFjdGl2YXRlZDwvc3Bhbj4gPC9sYWJlbD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJsYW5ndWFnZXMgJiYgbGFuZ3VhZ2VzLmxlbmd0aCA+IDBcXFwiPiA8bGFiZWwgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYW5nS2V5XFxcIj5MYW5nIEtleTwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImxhbmdLZXlcXFwiIG5hbWU9XFxcImxhbmdLZXlcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmxhbmdLZXlcXFwiPiA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGxhbmd1YWdlIG9mIGxhbmd1YWdlc1xcXCIgW3ZhbHVlXT1cXFwibGFuZ3VhZ2VcXFwiPnt7bGFuZ3VhZ2UgfCBmaW5kTGFuZ3VhZ2VGcm9tS2V5fX08L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQucHJvZmlsZXNcXFwiPlByb2ZpbGVzPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtdWx0aXBsZT1cXFwibXVsdGlwbGVcXFwiIG5hbWU9XFxcImF1dGhvcml0eVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYXV0aG9yaXRpZXNcXFwiPiA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGF1dGhvcml0eSBvZiBhdXRob3JpdGllc1xcXCIgW3ZhbHVlXT1cXFwiYXV0aG9yaXR5XFxcIj57e2F1dGhvcml0eX19PC9vcHRpb24+IDwvc2VsZWN0PiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYmFuXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmNhbmNlbFxcXCI+Q2FuY2VsPC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcImVkaXRGb3JtLmZvcm0uaW52YWxpZCB8fCBpc1NhdmluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1mbG9wcHktb1xcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5zYXZlXFxcIj5TYXZlPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZm9ybT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBKaGlBbGVydFNlcnZpY2UsIEpoaUV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgVXNlck1vZGFsU2VydmljZSB9IGZyb20gJy4vdXNlci1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlSGVscGVyLCBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXVzZXItbWdtdC1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB1c2VyOiBVc2VyO1xuICAgIGxhbmd1YWdlczogYW55W107XG4gICAgYXV0aG9yaXRpZXM6IGFueVtdO1xuICAgIGlzU2F2aW5nOiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VIZWxwZXI6IEpoaUxhbmd1YWdlSGVscGVyLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEpoaUFsZXJ0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEpoaUV2ZW50TWFuYWdlclxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSBbXTtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5hdXRob3JpdGllcygpLnN1YnNjcmliZSgoYXV0aG9yaXRpZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSBhdXRob3JpdGllcztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VIZWxwZXIuZ2V0QWxsKCkudGhlbigobGFuZ3VhZ2VzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlcyA9IGxhbmd1YWdlcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnVzZXIuaWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlKHRoaXMudXNlcikuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4gdGhpcy5vblNhdmVTdWNjZXNzKHJlc3BvbnNlLCBmYWxzZSksICgpID0+IHRoaXMub25TYXZlRXJyb3IoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZSh0aGlzLnVzZXIpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXNwb25zZSwgdHJ1ZSksICgpID0+IHRoaXMub25TYXZlRXJyb3IoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MocmVzdWx0LCBpc0NyZWF0ZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcyhcbiAgICAgICAgICAgIGlzQ3JlYXRlZCA/ICd1c2VyTWFuYWdlbWVudC5jcmVhdGVkJ1xuICAgICAgICAgICAgOiAndXNlck1hbmFnZW1lbnQudXBkYXRlZCcsXG4gICAgICAgICAgICB7IHBhcmFtIDogcmVzdWx0Lmpzb24ubG9naW4gfSwgbnVsbCk7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCh7IG5hbWU6ICd1c2VyTGlzdE1vZGlmaWNhdGlvbicsIGNvbnRlbnQ6ICdPSycgfSk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVFcnJvcigpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktdXNlci1kaWFsb2cnLFxuICAgIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICAgIHJvdXRlU3ViOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgdXNlck1vZGFsU2VydmljZTogVXNlck1vZGFsU2VydmljZVxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlU3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGlmICggcGFyYW1zWydsb2dpbiddICkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLnVzZXJNb2RhbFNlcnZpY2Uub3BlbihVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCwgcGFyYW1zWydsb2dpbiddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMudXNlck1vZGFsU2VydmljZS5vcGVuKFVzZXJNZ210RGlhbG9nQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8aDI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuaG9tZS50aXRsZVxcXCI+VXNlcnM8L3NwYW4+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6IFsndXNlci1tYW5hZ2VtZW50LW5ldyddIH0gfV1cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9zcGFuPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmhvbWUuY3JlYXRlTGFiZWxcXFwiPkNyZWF0ZSBhIG5ldyBVc2VyPC9zcGFuPiA8L2J1dHRvbj4gPC9oMj4gPGpoaS1hbGVydD48L2poaS1hbGVydD4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCIgKm5nSWY9XFxcInVzZXJzXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHIgamhpU29ydCBbKHByZWRpY2F0ZSldPVxcXCJwcmVkaWNhdGVcXFwiIFsoYXNjZW5kaW5nKV09XFxcInJldmVyc2VcXFwiIFtjYWxsYmFja109XFxcInRyYW5zaXRpb24uYmluZCh0aGlzKVxcXCI+IDx0aCBqaGlTb3J0Qnk9XFxcImlkXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5maWVsZC5pZFxcXCI+SUQ8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsb2dpblxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sb2dpblxcXCI+TG9naW48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiZW1haWxcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZW1haWxcXFwiPkVtYWlsPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aD48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsYW5nS2V5XFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYW5nS2V5XFxcIj5MYW5nIEtleTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGg+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5wcm9maWxlc1xcXCI+UHJvZmlsZXM8L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiY3JlYXRlZERhdGVcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuY3JlYXRlZERhdGVcXFwiPkNyZWF0ZWQgRGF0ZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsYXN0TW9kaWZpZWRCeVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYXN0TW9kaWZpZWRCeVxcXCI+TGFzdCBNb2RpZmllZCBCeTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsYXN0TW9kaWZpZWREYXRlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50Lmxhc3RNb2RpZmllZERhdGVcXFwiPkxhc3QgTW9kaWZpZWQgRGF0ZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGg+PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5ICpuZ0lmPVxcXCJ1c2Vyc1xcXCI+IDx0ciAqbmdGb3I9XFxcImxldCB1c2VyIG9mIHVzZXJzOyB0cmFja0J5OiB0cmFja0lkZW50aXR5XFxcIj4gPHRkPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi91c2VyLW1hbmFnZW1lbnQnLCB1c2VyLmxvZ2luXVxcXCI+e3t1c2VyLmlkfX08L2E+PC90ZD4gPHRkPnt7dXNlci5sb2dpbn19PC90ZD4gPHRkPnt7dXNlci5lbWFpbH19PC90ZD4gPHRkPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tc21cXFwiIChjbGljayk9XFxcInNldEFjdGl2ZSh1c2VyLCB0cnVlKVxcXCIgKm5nSWY9XFxcIiF1c2VyLmFjdGl2YXRlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5kZWFjdGl2YXRlZFxcXCI+RGVhY3RpdmF0ZWQ8L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVxcXCIgKGNsaWNrKT1cXFwic2V0QWN0aXZlKHVzZXIsIGZhbHNlKVxcXCIgKm5nSWY9XFxcInVzZXIuYWN0aXZhdGVkXFxcIiBbZGlzYWJsZWRdPVxcXCJjdXJyZW50QWNjb3VudC5sb2dpbiA9PT0gdXNlci5sb2dpblxcXCIgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5hY3RpdmF0ZWRcXFwiPkFjdGl2YXRlZDwvYnV0dG9uPiA8L3RkPiA8dGQ+e3t1c2VyLmxhbmdLZXl9fTwvdGQ+IDx0ZD4gPGRpdiAqbmdGb3I9XFxcImxldCBhdXRob3JpdHkgb2YgdXNlci5hdXRob3JpdGllc1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1pbmZvXFxcIj57eyBhdXRob3JpdHkgfX08L3NwYW4+IDwvZGl2PiA8L3RkPiA8dGQ+e3t1c2VyLmNyZWF0ZWREYXRlIHwgZGF0ZTonZGQvTU0veXkgSEg6bW0nfX08L3RkPiA8dGQ+e3t1c2VyLmxhc3RNb2RpZmllZEJ5fX08L3RkPiA8dGQ+e3t1c2VyLmxhc3RNb2RpZmllZERhdGUgfCBkYXRlOidkZC9NTS95eSBISDptbSd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBmbGV4LWJ0bi1ncm91cC1jb250YWluZXJcXFwiPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy4uL3VzZXItbWFuYWdlbWVudCcsIHVzZXIubG9naW5dXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1zbVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24udmlld1xcXCI+Vmlldzwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3VzZXItbWFuYWdlbWVudC8nKyB1c2VyLmxvZ2luICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGlkZGVuLW1kLWRvd25cXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5lZGl0XFxcIj5FZGl0PC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAndXNlci1tYW5hZ2VtZW50LycrIHVzZXIubG9naW4gKyAnL2RlbGV0ZSd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIiBbZGlzYWJsZWRdPVxcXCJjdXJyZW50QWNjb3VudC5sb2dpbiA9PT0gdXNlci5sb2dpblxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZW1vdmVcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uZGVsZXRlXFxcIj5EZWxldGU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcInVzZXJzXFxcIj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJxdWVyeUNvdW50XFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIj48L2poaS1pdGVtLWNvdW50PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8bmdiLXBhZ2luYXRpb24gW2NvbGxlY3Rpb25TaXplXT1cXFwidG90YWxJdGVtc1xcXCIgWyhwYWdlKV09XFxcInBhZ2VcXFwiIChwYWdlQ2hhbmdlKT1cXFwibG9hZFBhZ2UocGFnZSlcXFwiPjwvbmdiLXBhZ2luYXRpb24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIsIEpoaVBhZ2luYXRpb25VdGlsLCBKaGlQYXJzZUxpbmtzLCBKaGlBbGVydFNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IElURU1TX1BFUl9QQUdFLCBQcmluY2lwYWwsIFVzZXIsIFVzZXJTZXJ2aWNlLCBSZXNwb25zZVdyYXBwZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktdXNlci1tZ210JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWdtdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGN1cnJlbnRBY2NvdW50OiBhbnk7XG4gICAgdXNlcnM6IFVzZXJbXTtcbiAgICBlcnJvcjogYW55O1xuICAgIHN1Y2Nlc3M6IGFueTtcbiAgICByb3V0ZURhdGE6IGFueTtcbiAgICBsaW5rczogYW55O1xuICAgIHRvdGFsSXRlbXM6IGFueTtcbiAgICBxdWVyeUNvdW50OiBhbnk7XG4gICAgaXRlbXNQZXJQYWdlOiBhbnk7XG4gICAgcGFnZTogYW55O1xuICAgIHByZWRpY2F0ZTogYW55O1xuICAgIHByZXZpb3VzUGFnZTogYW55O1xuICAgIHJldmVyc2U6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUxpbmtzOiBKaGlQYXJzZUxpbmtzLFxuICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogSmhpQWxlcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogSmhpRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIHBhZ2luYXRpb25VdGlsOiBKaGlQYWdpbmF0aW9uVXRpbCxcbiAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IElURU1TX1BFUl9QQUdFO1xuICAgICAgICB0aGlzLnJvdXRlRGF0YSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLnJldmVyc2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5hc2NlbmRpbmc7XG4gICAgICAgICAgICB0aGlzLnByZWRpY2F0ZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLnByZWRpY2F0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2VJblVzZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJvdXRlRGF0YS51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ2hhbmdlSW5Vc2VycygpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCd1c2VyTGlzdE1vZGlmaWNhdGlvbicsIChyZXNwb25zZSkgPT4gdGhpcy5sb2FkQWxsKCkpO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZSh1c2VyLCBpc0FjdGl2YXRlZCkge1xuICAgICAgICB1c2VyLmFjdGl2YXRlZCA9IGlzQWN0aXZhdGVkO1xuXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlKHVzZXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQWxsKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdFUlJPUic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZEFsbCgpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5xdWVyeSh7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UgLSAxLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnNvcnQoKX0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlV3JhcHBlcikgPT4gdGhpcy5vblN1Y2Nlc3MocmVzLmpzb24sIHJlcy5oZWFkZXJzKSxcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlV3JhcHBlcikgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHRyYWNrSWRlbnRpdHkoaW5kZXgsIGl0ZW06IFVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XG4gICAgfVxuXG4gICAgc29ydCgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW3RoaXMucHJlZGljYXRlICsgJywnICsgKHRoaXMucmV2ZXJzZSA/ICdhc2MnIDogJ2Rlc2MnKV07XG4gICAgICAgIGlmICh0aGlzLnByZWRpY2F0ZSAhPT0gJ2lkJykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJ2lkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsb2FkUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHBhZ2UgIT09IHRoaXMucHJldmlvdXNQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zaXRpb24oKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3VzZXItbWFuYWdlbWVudCddLCB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgICAgICBzb3J0OiB0aGlzLnByZWRpY2F0ZSArICcsJyArICh0aGlzLnJldmVyc2UgPyAnYXNjJyA6ICdkZXNjJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdWNjZXNzKGRhdGEsIGhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5saW5rcyA9IHRoaXMucGFyc2VMaW5rcy5wYXJzZShoZWFkZXJzLmdldCgnbGluaycpKTtcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKTtcbiAgICAgICAgdGhpcy5xdWVyeUNvdW50ID0gdGhpcy50b3RhbEl0ZW1zO1xuICAgICAgICB0aGlzLnVzZXJzID0gZGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IuZXJyb3IsIGVycm9yLm1lc3NhZ2UsIG51bGwpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvbHZlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSb3V0ZXMsIENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSmhpUGFnaW5hdGlvblV0aWwgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IFVzZXJNZ210Q29tcG9uZW50IH0gZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJNZ210RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmUgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsKSB7IH1cblxuICAgIGNhbkFjdGl2YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB0aGlzLnByaW5jaXBhbC5oYXNBbnlBdXRob3JpdHkoWydST0xFX0FETUlOJ10pKTtcbiAgICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyUmVzb2x2ZVBhZ2luZ1BhcmFtcyBpbXBsZW1lbnRzIFJlc29sdmU8YW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2luYXRpb25VdGlsOiBKaGlQYWdpbmF0aW9uVXRpbCkge31cblxuICAgIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSByb3V0ZS5xdWVyeVBhcmFtc1sncGFnZSddID8gcm91dGUucXVlcnlQYXJhbXNbJ3BhZ2UnXSA6ICcxJztcbiAgICAgICAgY29uc3Qgc29ydCA9IHJvdXRlLnF1ZXJ5UGFyYW1zWydzb3J0J10gPyByb3V0ZS5xdWVyeVBhcmFtc1snc29ydCddIDogJ2lkLGFzYyc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2luYXRpb25VdGlsLnBhcnNlUGFnZShwYWdlKSxcbiAgICAgICAgICAgIHByZWRpY2F0ZTogdGhpcy5wYWdpbmF0aW9uVXRpbC5wYXJzZVByZWRpY2F0ZShzb3J0KSxcbiAgICAgICAgICAgIGFzY2VuZGluZzogdGhpcy5wYWdpbmF0aW9uVXRpbC5wYXJzZUFzY2VuZGluZyhzb3J0KVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZXJNZ210Um91dGU6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICd1c2VyLW1hbmFnZW1lbnQnLFxuICAgICAgICBjb21wb25lbnQ6IFVzZXJNZ210Q29tcG9uZW50LFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAncGFnaW5nUGFyYW1zJzogVXNlclJlc29sdmVQYWdpbmdQYXJhbXNcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcGFnZVRpdGxlOiAndXNlck1hbmFnZW1lbnQuaG9tZS50aXRsZSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAndXNlci1tYW5hZ2VtZW50Lzpsb2dpbicsXG4gICAgICAgIGNvbXBvbmVudDogVXNlck1nbXREZXRhaWxDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogJ3VzZXJNYW5hZ2VtZW50LmhvbWUudGl0bGUnXG4gICAgICAgIH1cbiAgICB9XG5dO1xuXG5leHBvcnQgY29uc3QgdXNlckRpYWxvZ1JvdXRlOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAndXNlci1tYW5hZ2VtZW50LW5ldycsXG4gICAgICAgIGNvbXBvbmVudDogVXNlckRpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgb3V0bGV0OiAncG9wdXAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICd1c2VyLW1hbmFnZW1lbnQvOmxvZ2luL2VkaXQnLFxuICAgICAgICBjb21wb25lbnQ6IFVzZXJEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIG91dGxldDogJ3BvcHVwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAndXNlci1tYW5hZ2VtZW50Lzpsb2dpbi9kZWxldGUnLFxuICAgICAgICBjb21wb25lbnQ6IFVzZXJEZWxldGVEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIG91dGxldDogJ3BvcHVwJ1xuICAgIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFVzZXIsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJNb2RhbFNlcnZpY2Uge1xuICAgIHByaXZhdGUgaXNPcGVuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBvcGVuKGNvbXBvbmVudDogQ29tcG9uZW50LCBsb2dpbj86IHN0cmluZyk6IE5nYk1vZGFsUmVmIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICAgIGlmIChsb2dpbikge1xuICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5maW5kKGxvZ2luKS5zdWJzY3JpYmUoKHVzZXIpID0+IHRoaXMudXNlck1vZGFsUmVmKGNvbXBvbmVudCwgdXNlcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlck1vZGFsUmVmKGNvbXBvbmVudCwgbmV3IFVzZXIoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VyTW9kYWxSZWYoY29tcG9uZW50OiBDb21wb25lbnQsIHVzZXI6IFVzZXIpOiBOZ2JNb2RhbFJlZiB7XG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3Blbihjb21wb25lbnQsIHsgc2l6ZTogJ2xnJywgYmFja2Ryb3A6ICdzdGF0aWMnfSk7XG4gICAgICAgIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLnVzZXIgPSB1c2VyO1xuICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IHBvcHVwOiBudWxsIH19XSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3sgb3V0bGV0czogeyBwb3B1cDogbnVsbCB9fV0sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbW9kYWxSZWY7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tb2RhbC5zZXJ2aWNlLnRzIiwiLy8gRE8gTk9UIEVESVQgVEhJUyBGSUxFLCBFRElUIFRIRSBXRUJQQUNLIENPTU1PTiBDT05GSUcgSU5TVEVBRCwgV0hJQ0ggV0lMTCBNT0RJRlkgVEhJUyBGSUxFXG4gLyogdHNsaW50OmRpc2FibGUgKi9cbmxldCBfVkVSU0lPTiA9ICcwLjAuMS1TTkFQU0hPVCc7IC8vIFRoaXMgdmFsdWUgd2lsbCBiZSBvdmVyd3JpdHRlbiBieSB3ZWJwYWNrXG5sZXQgX0RFQlVHX0lORk9fRU5BQkxFRCA9IHRydWU7IC8vIFRoaXMgdmFsdWUgd2lsbCBiZSBvdmVyd3JpdHRlbiBieSB3ZWJwYWNrXG5fVkVSU0lPTiA9ICcwLjAuMS1TTkFQU0hPVCc7XG5fREVCVUdfSU5GT19FTkFCTEVEID0gdHJ1ZTtcbi8qIHRzbGludDplbmFibGUgKi9cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gX1ZFUlNJT047XG5leHBvcnQgY29uc3QgREVCVUdfSU5GT19FTkFCTEVEID0gX0RFQlVHX0lORk9fRU5BQkxFRDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc3RyaW5nLXJlcGxhY2Utd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP2lkPTE4bHY4bHVsZXVuM2Y3a2hkbWNoanh4YnQ5IS4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAuY29uc3RhbnRzLnRzIiwiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBQcm9kQ29uZmlnIH0gZnJvbSAnLi9ibG9ja3MvY29uZmlnL3Byb2QuY29uZmlnJztcbmltcG9ydCB7IEpoaXBzdGVyZGVtb0FwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5cblByb2RDb25maWcoKTtcblxuaWYgKG1vZHVsZVsnaG90J10pIHtcbiAgICBtb2R1bGVbJ2hvdCddLmFjY2VwdCgpO1xufVxuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEpoaXBzdGVyZGVtb0FwcE1vZHVsZSlcbi50aGVuKChzdWNjZXNzKSA9PiBjb25zb2xlLmxvZyhgQXBwbGljYXRpb24gc3RhcnRlZGApKVxuLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tYWluLnRzIiwiaW1wb3J0ICcuL3ZlbmRvci50cyc7XG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZzJXZWJzdG9yYWdlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xuXG5pbXBvcnQgeyBKaGlwc3RlcmRlbW9TaGFyZWRNb2R1bGUsIFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQgeyBKaGlwc3RlcmRlbW9Ib21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IEpoaXBzdGVyZGVtb0FkbWluTW9kdWxlIH0gZnJvbSAnLi9hZG1pbi9hZG1pbi5tb2R1bGUnO1xuaW1wb3J0IHsgSmhpcHN0ZXJkZW1vQWNjb3VudE1vZHVsZSB9IGZyb20gJy4vYWNjb3VudC9hY2NvdW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBKaGlwc3RlcmRlbW9FbnRpdHlNb2R1bGUgfSBmcm9tICcuL2VudGl0aWVzL2VudGl0eS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBjdXN0b21IdHRwUHJvdmlkZXIgfSBmcm9tICcuL2Jsb2Nrcy9pbnRlcmNlcHRvci9odHRwLnByb3ZpZGVyJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnJztcblxuLy8gamhpcHN0ZXItbmVlZGxlLWFuZ3VsYXItYWRkLW1vZHVsZS1pbXBvcnQgSkhpcHN0ZXIgd2lsbCBhZGQgbmV3IG1vZHVsZSBoZXJlXG5cbmltcG9ydCB7XG4gICAgSmhpTWFpbkNvbXBvbmVudCxcbiAgICBMYXlvdXRSb3V0aW5nTW9kdWxlLFxuICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICBGb290ZXJDb21wb25lbnQsXG4gICAgUHJvZmlsZVNlcnZpY2UsXG4gICAgUGFnZVJpYmJvbkNvbXBvbmVudCxcbiAgICBBY3RpdmVNZW51RGlyZWN0aXZlLFxuICAgIEVycm9yQ29tcG9uZW50XG59IGZyb20gJy4vbGF5b3V0cyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBMYXlvdXRSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOZzJXZWJzdG9yYWdlLmZvclJvb3QoeyBwcmVmaXg6ICdqaGknLCBzZXBhcmF0b3I6ICctJ30pLFxuICAgICAgICBKaGlwc3RlcmRlbW9TaGFyZWRNb2R1bGUsXG4gICAgICAgIEpoaXBzdGVyZGVtb0hvbWVNb2R1bGUsXG4gICAgICAgIEpoaXBzdGVyZGVtb0FkbWluTW9kdWxlLFxuICAgICAgICBKaGlwc3RlcmRlbW9BY2NvdW50TW9kdWxlLFxuICAgICAgICBKaGlwc3RlcmRlbW9FbnRpdHlNb2R1bGUsXG4gICAgICAgIC8vIGpoaXBzdGVyLW5lZWRsZS1hbmd1bGFyLWFkZC1tb2R1bGUgSkhpcHN0ZXIgd2lsbCBhZGQgbmV3IG1vZHVsZSBoZXJlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSmhpTWFpbkNvbXBvbmVudCxcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxuICAgICAgICBFcnJvckNvbXBvbmVudCxcbiAgICAgICAgUGFnZVJpYmJvbkNvbXBvbmVudCxcbiAgICAgICAgQWN0aXZlTWVudURpcmVjdGl2ZSxcbiAgICAgICAgRm9vdGVyQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUHJvZmlsZVNlcnZpY2UsXG4gICAgICAgIGN1c3RvbUh0dHBQcm92aWRlcigpLFxuICAgICAgICBQYWdpbmF0aW9uQ29uZmlnLFxuICAgICAgICBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXG4gICAgXSxcbiAgICBib290c3RyYXA6IFsgSmhpTWFpbkNvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEpoaXBzdGVyZGVtb0FwcE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMnO1xuXG5leHBvcnQgY29uc3QgbmF2YmFyUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogTmF2YmFyQ29tcG9uZW50LFxuICAgIG91dGxldDogJ25hdmJhcidcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5yb3V0ZS50cyIsImltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBERUJVR19JTkZPX0VOQUJMRUQgfSBmcm9tICcuLi8uLi9hcHAuY29uc3RhbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2RDb25maWcoKSB7XG4gICAgLy8gZGlzYWJsZSBkZWJ1ZyBkYXRhIG9uIHByb2QgcHJvZmlsZSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXG4gICAgaWYgKCFERUJVR19JTkZPX0VOQUJMRUQpIHtcbiAgICAgICAgZW5hYmxlUHJvZE1vZGUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9jb25maWcvcHJvZC5jb25maWcudHMiLCJpbXBvcnQgeyBJVEVNU19QRVJfUEFHRSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JQYWdpbmF0aW9uQ29uZmlnfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogTmdiUGFnaW5hdGlvbkNvbmZpZykge1xuICAgICAgICBjb25maWcuYm91bmRhcnlMaW5rcyA9IHRydWU7XG4gICAgICAgIGNvbmZpZy5tYXhTaXplID0gNTtcbiAgICAgICAgY29uZmlnLnBhZ2VTaXplID0gSVRFTVNfUEVSX1BBR0U7XG4gICAgICAgIGNvbmZpZy5zaXplID0gJ3NtJztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnLnRzIiwiaW1wb3J0IHsgSmhpSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgQXV0aEV4cGlyZWRJbnRlcmNlcHRvciBleHRlbmRzIEpoaUh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gPE9ic2VydmFibGU8UmVzcG9uc2U+PiBvYnNlcnZhYmxlLmNhdGNoKChlcnJvciwgc291cmNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KExvZ2luU2VydmljZSk7XG4gICAgICAgICAgICAgICAgbG9naW5TZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9hdXRoLWV4cGlyZWQuaW50ZXJjZXB0b3IudHMiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zQXJncywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSB9IGZyb20gJ25nMi13ZWJzdG9yYWdlJztcbmltcG9ydCB7IEpoaUh0dHBJbnRlcmNlcHRvciB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcmNlcHRvciBleHRlbmRzIEpoaUh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5sb2NhbFN0b3JhZ2UucmV0cmlldmUoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKSB8fCB0aGlzLnNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdhdXRoZW50aWNhdGlvblRva2VuJyk7XG4gICAgICAgIGlmICghIXRva2VuKSB7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTsgLy8gYnkgcGFzc1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC5pbnRlcmNlcHRvci50cyIsImltcG9ydCB7IEpoaUh0dHBJbnRlcmNlcHRvciwgSmhpRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXJJbnRlcmNlcHRvciBleHRlbmRzIEpoaUh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50TWFuYWdlcjogSmhpRXZlbnRNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEludGVyY2VwdChvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogUmVxdWVzdE9wdGlvbnNBcmdzIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgcmVzcG9uc2VJbnRlcmNlcHQob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxSZXNwb25zZT4pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiA8T2JzZXJ2YWJsZTxSZXNwb25zZT4+IG9ic2VydmFibGUuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoIShlcnJvci5zdGF0dXMgPT09IDQwMSAmJiAoZXJyb3IudGV4dCgpID09PSAnJyB8fFxuICAgICAgICAgICAgICAgIChlcnJvci5qc29uKCkucGF0aCAmJiBlcnJvci5qc29uKCkucGF0aC5pbmRleE9mKCcvYXBpL2FjY291bnQnKSA9PT0gMCApKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoIHtuYW1lOiAnamhpcHN0ZXJkZW1vQXBwLmh0dHBFcnJvcicsIGNvbnRlbnQ6IGVycm9yfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2Vycm9yaGFuZGxlci5pbnRlcmNlcHRvci50cyIsImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSmhpRXZlbnRNYW5hZ2VyLCBKaGlJbnRlcmNlcHRhYmxlSHR0cCB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgQXV0aEludGVyY2VwdG9yIH0gZnJvbSAnLi9hdXRoLmludGVyY2VwdG9yJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSB9IGZyb20gJ25nMi13ZWJzdG9yYWdlJztcbmltcG9ydCB7IEF1dGhFeHBpcmVkSW50ZXJjZXB0b3IgfSBmcm9tICcuL2F1dGgtZXhwaXJlZC5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXJJbnRlcmNlcHRvciB9IGZyb20gJy4vZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkludGVyY2VwdG9yIH0gZnJvbSAnLi9ub3RpZmljYXRpb24uaW50ZXJjZXB0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJjZXB0YWJsZUZhY3RvcnkoXG4gICAgYmFja2VuZDogWEhSQmFja2VuZCxcbiAgICBkZWZhdWx0T3B0aW9uczogUmVxdWVzdE9wdGlvbnMsXG4gICAgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgIHNlc3Npb25TdG9yYWdlOiBTZXNzaW9uU3RvcmFnZVNlcnZpY2UsXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIGV2ZW50TWFuYWdlcjogSmhpRXZlbnRNYW5hZ2VyXG4pIHtcbiAgICByZXR1cm4gbmV3IEpoaUludGVyY2VwdGFibGVIdHRwKFxuICAgICAgICBiYWNrZW5kLFxuICAgICAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IEF1dGhJbnRlcmNlcHRvcihsb2NhbFN0b3JhZ2UsIHNlc3Npb25TdG9yYWdlKSxcbiAgICAgICAgICAgIG5ldyBBdXRoRXhwaXJlZEludGVyY2VwdG9yKGluamVjdG9yKSxcbiAgICAgICAgICAgIC8vIE90aGVyIGludGVyY2VwdG9ycyBjYW4gYmUgYWRkZWQgaGVyZVxuICAgICAgICAgICAgbmV3IEVycm9ySGFuZGxlckludGVyY2VwdG9yKGV2ZW50TWFuYWdlciksXG4gICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uSW50ZXJjZXB0b3IoKVxuICAgICAgICBdXG4gICAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21IdHRwUHJvdmlkZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZTogSHR0cCxcbiAgICAgICAgdXNlRmFjdG9yeTogaW50ZXJjZXB0YWJsZUZhY3RvcnksXG4gICAgICAgIGRlcHM6IFtcbiAgICAgICAgICAgIFhIUkJhY2tlbmQsXG4gICAgICAgICAgICBSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICBTZXNzaW9uU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICBJbmplY3RvcixcbiAgICAgICAgICAgIEpoaUV2ZW50TWFuYWdlclxuICAgICAgICBdXG4gICAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9odHRwLnByb3ZpZGVyLnRzIiwiaW1wb3J0IHsgSmhpSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25JbnRlcmNlcHRvciBleHRlbmRzIEpoaUh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0SW50ZXJjZXB0KG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXNwb25zZUludGVyY2VwdChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIDxPYnNlcnZhYmxlPFJlc3BvbnNlPj4gb2JzZXJ2YWJsZS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IEFycmF5LmZyb20oZXJyb3IuaGVhZGVycy5faGVhZGVycyk7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gW107XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyW2ldWzBdLmVuZHNXaXRoKCdhcHAtYWxlcnQnKSB8fCBhcnJbaV1bMF0uZW5kc1dpdGgoJ2FwcC1wYXJhbXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLnB1c2goYXJyW2ldWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXJzLnNvcnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0S2V5ID0gaGVhZGVycy5sZW5ndGggPj0gMSA/IGVycm9yLmhlYWRlcnMuZ2V0KGhlYWRlcnNbMF0pIDogbnVsbDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWxlcnRLZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICAgICAgICAgIC8vIEpoaUFsZXJ0U2VydmljZS5zdWNjZXNzKGFsZXJ0S2V5LCB7IHBhcmFtOiByZXNwb25zZS5oZWFkZXJzKGhlYWRlcnNbMV0pfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL25vdGlmaWNhdGlvbi5pbnRlcmNlcHRvci50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qIGpoaXBzdGVyLW5lZWRsZS1hZGQtZW50aXR5LW1vZHVsZS1pbXBvcnQgLSBKSGlwc3RlciB3aWxsIGFkZCBlbnRpdHkgbW9kdWxlcyBpbXBvcnRzIGhlcmUgKi9cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIC8qIGpoaXBzdGVyLW5lZWRsZS1hZGQtZW50aXR5LW1vZHVsZSAtIEpIaXBzdGVyIHdpbGwgYWRkIGVudGl0eSBtb2R1bGVzIGhlcmUgKi9cbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBKaGlwc3RlcmRlbW9FbnRpdHlNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZW50aXR5Lm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJoaXBzdGVyIGltZy1mbHVpZCBpbWctcm91bmRlZFxcXCI+PC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiPiA8aDEgY2xhc3M9XFxcImRpc3BsYXktNFxcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLnRpdGxlXFxcIj5XZWxjb21lLCBKYXZhIEhpcHN0ZXIhPC9oMT4gPHAgY2xhc3M9XFxcImxlYWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5zdWJ0aXRsZVxcXCI+VGhpcyBpcyB5b3VyIGhvbWVwYWdlPC9wPiA8ZGl2IFtuZ1N3aXRjaF09XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+IDxzcGFuICpuZ0lmPVxcXCJhY2NvdW50XFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubG9nZ2VkLm1lc3NhZ2VcXFwiIHRyYW5zbGF0ZVZhbHVlcz1cXFwie3VzZXJuYW1lOiAne3thY2NvdW50LmxvZ2lufX0nfVxcXCI+IFlvdSBhcmUgbG9nZ2VkIGluIGFzIHVzZXIgXFxcInt7YWNjb3VudC5sb2dpbn19XFxcIi4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLmF1dGhlbnRpY2F0ZWQucHJlZml4XFxcIj5JZiB5b3Ugd2FudCB0byA8L3NwYW4+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiAoY2xpY2spPVxcXCJsb2dpbigpXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLmF1dGhlbnRpY2F0ZWQubGlua1xcXCI+c2lnbiBpbjwvYT48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLmF1dGhlbnRpY2F0ZWQuc3VmZml4XFxcIj4sIHlvdSBjYW4gdHJ5IHRoZSBkZWZhdWx0IGFjY291bnRzOjxici8+LSBBZG1pbmlzdHJhdG9yIChsb2dpbj1cXFwiYWRtaW5cXFwiIGFuZCBwYXNzd29yZD1cXFwiYWRtaW5cXFwiKSA8YnIvPi0gVXNlciAobG9naW49XFxcInVzZXJcXFwiIGFuZCBwYXNzd29yZD1cXFwidXNlclxcXCIpLjwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiICpuZ1N3aXRjaENhc2U9XFxcImZhbHNlXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5yZWdpc3Rlci5ub2FjY291bnRcXFwiPllvdSBkb24ndCBoYXZlIGFuIGFjY291bnQgeWV0Pzwvc3Bhbj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIHJvdXRlckxpbms9XFxcInJlZ2lzdGVyXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLnJlZ2lzdGVyLmxpbmtcXFwiPlJlZ2lzdGVyIGEgbmV3IGFjY291bnQ8L2E+IDwvZGl2PiA8L2Rpdj4gPHAgamhpVHJhbnNsYXRlPVxcXCJob21lLnF1ZXN0aW9uXFxcIj4gSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9uIG9uIEpIaXBzdGVyOiA8L3A+IDx1bD4gPGxpPjxhIGhyZWY9XFxcImh0dHA6Ly9qaGlwc3Rlci5naXRodWIuaW8vXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLmxpbmsuaG9tZXBhZ2VcXFwiPkpIaXBzdGVyIGhvbWVwYWdlPC9hPjwvbGk+IDxsaT48YSBocmVmPVxcXCJodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vdGFncy9qaGlwc3Rlci9pbmZvXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLmxpbmsuc3RhY2tvdmVyZmxvd1xcXCI+SkhpcHN0ZXIgb24gU3RhY2sgT3ZlcmZsb3c8L2E+PC9saT4gPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9qaGlwc3Rlci9nZW5lcmF0b3ItamhpcHN0ZXIvaXNzdWVzP3N0YXRlPW9wZW5cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubGluay5idWd0cmFja2VyXFxcIj5KSGlwc3RlciBidWcgdHJhY2tlcjwvYT48L2xpPiA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly9naXR0ZXIuaW0vamhpcHN0ZXIvZ2VuZXJhdG9yLWpoaXBzdGVyXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLmxpbmsuY2hhdFxcXCI+SkhpcHN0ZXIgcHVibGljIGNoYXQgcm9vbTwvYT48L2xpPiA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9qYXZhX2hpcHN0ZXJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubGluay5mb2xsb3dcXFwiPmZvbGxvdyBAamF2YV9oaXBzdGVyIG9uIFR3aXR0ZXI8L2E+PC9saT4gPC91bD4gPHA+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5saWtlXFxcIj5JZiB5b3UgbGlrZSBKSGlwc3RlciwgZG9uJ3QgZm9yZ2V0IHRvIGdpdmUgdXMgYSBzdGFyIG9uPC9zcGFuPiA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vamhpcHN0ZXIvZ2VuZXJhdG9yLWpoaXBzdGVyXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLmdpdGh1YlxcXCI+R2l0aHViPC9hPiEgPC9wPiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSmhpRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBBY2NvdW50LCBMb2dpbk1vZGFsU2VydmljZSwgUHJpbmNpcGFsIH0gZnJvbSAnLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAnaG9tZS5jc3MnXG4gICAgXVxuXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFjY291bnQ6IEFjY291bnQ7XG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogSmhpRXZlbnRNYW5hZ2VyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBdXRoZW50aWNhdGlvblN1Y2Nlc3MoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckF1dGhlbnRpY2F0aW9uU3VjY2VzcygpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdhdXRoZW50aWNhdGlvblN1Y2Nlc3MnLCAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW5jaXBhbC5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKaGlwc3RlcmRlbW9TaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5pbXBvcnQgeyBIT01FX1JPVVRFLCBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi8nO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgSmhpcHN0ZXJkZW1vU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbIEhPTUVfUk9VVEUgXSwgeyB1c2VIYXNoOiB0cnVlIH0pXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgSmhpcHN0ZXJkZW1vSG9tZU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuLyc7XG5cbmV4cG9ydCBjb25zdCBIT01FX1JPVVRFOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBhdXRob3JpdGllczogW10sXG4gICAgICAgIHBhZ2VUaXRsZTogJ2hvbWUudGl0bGUnXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnJvdXRlLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2hvbWUucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ob21lLm1vZHVsZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPiA8c3BhbiBjbGFzcz1cXFwiaGlwc3RlciBpbWctZmx1aWQgaW1nLXJvdW5kZWRcXFwiPjwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04XFxcIj4gPGgxIGpoaVRyYW5zbGF0ZT1cXFwiZXJyb3IudGl0bGVcXFwiPkVycm9yIFBhZ2UhPC9oMT4gPGRpdiBbaGlkZGVuXT1cXFwiIWVycm9yTWVzc2FnZVxcXCI+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+e3tlcnJvck1lc3NhZ2V9fSA8L2Rpdj4gPC9kaXY+IDxkaXYgW2hpZGRlbl09XFxcIiFlcnJvcjQwM1xcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgamhpVHJhbnNsYXRlPVxcXCJlcnJvci40MDNcXFwiPllvdSBhcmUgbm90IGF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoZSBwYWdlLiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXJyb3IuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBlcnJvcjQwMzogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLmRhdGEuc3Vic2NyaWJlKChyb3V0ZURhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChyb3V0ZURhdGEuZXJyb3I0MDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yNDAzID0gcm91dGVEYXRhLmVycm9yNDAzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvdXRlRGF0YS5lcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJvdXRlRGF0YS5lcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgZXJyb3JSb3V0ZTogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJ2Vycm9yJyxcbiAgICAgICAgY29tcG9uZW50OiBFcnJvckNvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgICAgICAgICAgcGFnZVRpdGxlOiAnZXJyb3IudGl0bGUnXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICdhY2Nlc3NkZW5pZWQnLFxuICAgICAgICBjb21wb25lbnQ6IEVycm9yQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhdXRob3JpdGllczogW10sXG4gICAgICAgICAgICBwYWdlVGl0bGU6ICdlcnJvci50aXRsZScsXG4gICAgICAgICAgICBlcnJvcjQwMzogdHJ1ZVxuICAgICAgICB9LFxuICAgIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3Iucm91dGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj4gPHAgamhpVHJhbnNsYXRlPVxcXCJmb290ZXJcXFwiPlRoaXMgaXMgeW91ciBmb290ZXI8L3A+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1mb290ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvci9lcnJvci5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL21haW4vbWFpbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbmF2YmFyL2FjdGl2ZS1tZW51LmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2ZpbGVzL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xheW91dC1yb3V0aW5nLm1vZHVsZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvaW5kZXgudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgbmF2YmFyUm91dGUgfSBmcm9tICcuLi9hcHAucm91dGUnO1xuaW1wb3J0IHsgZXJyb3JSb3V0ZSB9IGZyb20gJy4vJztcblxuY29uc3QgTEFZT1VUX1JPVVRFUyA9IFtcbiAgICBuYXZiYXJSb3V0ZSxcbiAgICAuLi5lcnJvclJvdXRlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoTEFZT1VUX1JPVVRFUywgeyB1c2VIYXNoOiB0cnVlIH0pXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0Um91dGluZ01vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2xheW91dC1yb3V0aW5nLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8amhpLXBhZ2UtcmliYm9uPjwvamhpLXBhZ2UtcmliYm9uPiA8ZGl2PiA8cm91dGVyLW91dGxldCBuYW1lPVxcXCJuYXZiYXJcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQgamgtY2FyZFxcXCI+IDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4gPHJvdXRlci1vdXRsZXQgbmFtZT1cXFwicG9wdXBcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxqaGktZm9vdGVyPjwvamhpLWZvb3Rlcj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIE5hdmlnYXRpb25FbmQsIFJvdXRlc1JlY29nbml6ZWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKaGlMYW5ndWFnZUhlbHBlciwgU3RhdGVTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLW1haW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYWluLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGpoaUxhbmd1YWdlSGVscGVyOiBKaGlMYW5ndWFnZUhlbHBlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSAkc3RvcmFnZVNlcnZpY2U6IFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgKSB7fVxuXG4gICAgcHJpdmF0ZSBnZXRQYWdlVGl0bGUocm91dGVTbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgICAgICBsZXQgdGl0bGU6IHN0cmluZyA9IChyb3V0ZVNuYXBzaG90LmRhdGEgJiYgcm91dGVTbmFwc2hvdC5kYXRhWydwYWdlVGl0bGUnXSkgPyByb3V0ZVNuYXBzaG90LmRhdGFbJ3BhZ2VUaXRsZSddIDogJ2poaXBzdGVyZGVtb0FwcCc7XG4gICAgICAgIGlmIChyb3V0ZVNuYXBzaG90LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRpdGxlID0gdGhpcy5nZXRQYWdlVGl0bGUocm91dGVTbmFwc2hvdC5maXJzdENoaWxkKSB8fCB0aXRsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qaGlMYW5ndWFnZUhlbHBlci51cGRhdGVUaXRsZSh0aGlzLmdldFBhZ2VUaXRsZSh0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC5yb290KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBMYW5nQ2hhbmdlRXZlbnQgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbamhpQWN0aXZlTWVudV0nXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZU1lbnVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGpoaUFjdGl2ZU1lbnU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLCBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUZsYWcoZXZlbnQubGFuZyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlRmxhZyh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcpO1xuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2ZUZsYWcoc2VsZWN0ZWRMYW5ndWFnZSkge1xuICAgICAgaWYgKHRoaXMuamhpQWN0aXZlTWVudSA9PT0gc2VsZWN0ZWRMYW5ndWFnZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9hY3RpdmUtbWVudS5kaXJlY3RpdmUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci10b2dnbGVhYmxlLW1kIGpoLW5hdmJhclxcXCI+IDxkaXYgY2xhc3M9XFxcImpoLWxvZ28tY29udGFpbmVyIGZsb2F0LWxlZnRcXFwiPiA8YSBjbGFzcz1cXFwiamgtbmF2YmFyLXRvZ2dsZXIgaGlkZGVuLWxnLXVwIGZsb2F0LXJpZ2h0XFxcIiBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjbmF2YmFyUmVzcG9uc2l2ZVxcXCIgYXJpYS1jb250cm9scz1cXFwibmF2YmFyUmVzcG9uc2l2ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtbGFiZWw9XFxcIlRvZ2dsZSBuYXZpZ2F0aW9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1iYXJzXFxcIj48L2k+IDwvYT4gPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZCBsb2dvIGZsb2F0LWxlZnRcXFwiIHJvdXRlckxpbms9XFxcIi9cXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8c3BhbiBjbGFzcz1cXFwibG9nby1pbWdcXFwiPjwvc3Bhbj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwudGl0bGVcXFwiIGNsYXNzPVxcXCJuYXZiYXItdGl0bGVcXFwiPkpoaXBzdGVyZGVtbzwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcIm5hdmJhci12ZXJzaW9uXFxcIj57e3ZlcnNpb259fTwvc3Bhbj4gPC9hPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBpZD1cXFwibmF2YmFyUmVzcG9uc2l2ZVxcXCIgW25nYkNvbGxhcHNlXT1cXFwiaXNOYXZiYXJDb2xsYXBzZWRcXFwiIFtuZ1N3aXRjaF09XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj4gPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2IG1sLWF1dG9cXFwiPiA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XFxcIntleGFjdDogdHJ1ZX1cXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmtcXFwiIHJvdXRlckxpbms9XFxcIi9cXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtaG9tZVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5ob21lXFxcIj5Ib21lPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIiBuZ2JEcm9wZG93biBjbGFzcz1cXFwibmF2LWl0ZW0gZHJvcGRvd24gcG9pbnRlclxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImVudGl0eS1tZW51XFxcIj4gPHNwYW4+IDxpIGNsYXNzPVxcXCJmYSBmYS10aC1saXN0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmVudGl0aWVzLm1haW5cXFwiPiBFbnRpdGllcyA8L3NwYW4+IDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPiA8L3NwYW4+IDwvYT4gPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBuZ2JEcm9wZG93bk1lbnU+IDwvdWw+IDwvbGk+IDxsaSAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCInUk9MRV9BRE1JTidcXFwiIG5nYkRyb3Bkb3duIGNsYXNzPVxcXCJuYXYtaXRlbSBkcm9wZG93biBwb2ludGVyXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XFxcIntleGFjdDogdHJ1ZX1cXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXFxcIiBuZ2JEcm9wZG93blRvZ2dsZSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBpZD1cXFwiYWRtaW4tbWVudVxcXCI+IDxzcGFuPiA8aSBjbGFzcz1cXFwiZmEgZmEtdXNlci1wbHVzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLm1haW5cXFwiPkFkbWluaXN0cmF0aW9uPC9zcGFuPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj4gPC9zcGFuPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgbmdiRHJvcGRvd25NZW51PiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJ1c2VyLW1hbmFnZW1lbnRcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS11c2VyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLnVzZXJNYW5hZ2VtZW50XFxcIj5Vc2VyIG1hbmFnZW1lbnQ8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiamhpLW1ldHJpY3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS10YWNob21ldGVyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLm1ldHJpY3NcXFwiPk1ldHJpY3M8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiamhpLWhlYWx0aFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWhlYXJ0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLmhlYWx0aFxcXCI+SGVhbHRoPC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImpoaS1jb25maWd1cmF0aW9uXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtbGlzdFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hZG1pbi5jb25maWd1cmF0aW9uXFxcIj5Db25maWd1cmF0aW9uPC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImF1ZGl0c1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWJlbGxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWRtaW4uYXVkaXRzXFxcIj5BdWRpdHM8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwibG9nc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXRhc2tzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLmxvZ3NcXFwiPkxvZ3M8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ0lmPVxcXCJzd2FnZ2VyRW5hYmxlZFxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJkb2NzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtYm9va1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hZG1pbi5hcGlkb2NzXFxcIj5BUEk8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ0lmPVxcXCIhaW5Qcm9kdWN0aW9uXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIGhyZWY9XFxcIi4vaDItY29uc29sZVxcXCIgdGFyZ2V0PVxcXCJfdGFiXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWhkZC1vXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLmRhdGFiYXNlXFxcIj5EYXRhYmFzZTwvc3Bhbj4gPC9hPiA8L2xpPiA8L3VsPiA8L2xpPiA8bGkgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiICpuZ0lmPVxcXCJsYW5ndWFnZXNcXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXFxcIiBuZ2JEcm9wZG93blRvZ2dsZSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBpZD1cXFwibGFuZ3VhZ2VzbmF2QmFyRHJvcGRvd25cXFwiICpuZ0lmPVxcXCJsYW5ndWFnZXMubGVuZ3RoID4gMVxcXCI+IDxzcGFuPiA8aSBjbGFzcz1cXFwiZmEgZmEtZmxhZ1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5sYW5ndWFnZVxcXCI+TGFuZ3VhZ2U8L3NwYW4+IDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPiA8L3NwYW4+IDwvYT4gPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBuZ2JEcm9wZG93bk1lbnUgKm5nSWY9XFxcImxhbmd1YWdlcy5sZW5ndGggPiAxXFxcIj4gPGxpICpuZ0Zvcj1cXFwibGV0IGxhbmd1YWdlIG9mIGxhbmd1YWdlc1xcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiBbamhpQWN0aXZlTWVudV09XFxcImxhbmd1YWdlXFxcIiBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiAoY2xpY2spPVxcXCJjaGFuZ2VMYW5ndWFnZShsYW5ndWFnZSk7Y29sbGFwc2VOYXZiYXIoKTtcXFwiPnt7bGFuZ3VhZ2UgfCBmaW5kTGFuZ3VhZ2VGcm9tS2V5fX08L2E+IDwvbGk+IDwvdWw+IDwvbGk+IDxsaSBuZ2JEcm9wZG93biBjbGFzcz1cXFwibmF2LWl0ZW0gZHJvcGRvd24gcG9pbnRlclxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImFjY291bnQtbWVudVxcXCI+IDxzcGFuICpuZ0lmPVxcXCIhZ2V0SW1hZ2VVcmwoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS11c2VyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFjY291bnQubWFpblxcXCI+IEFjY291bnQgPC9zcGFuPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj4gPC9zcGFuPiA8c3BhbiAqbmdJZj1cXFwiZ2V0SW1hZ2VVcmwoKVxcXCI+IDxpbWcgW3NyY109XFxcImdldEltYWdlVXJsKClcXFwiIGNsYXNzPVxcXCJwcm9maWxlLWltYWdlIGltZy1jaXJjbGVcXFwiIGFsdD1cXFwiQXZhdGFyXFxcIj4gPC9zcGFuPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XFxcIiBuZ2JEcm9wZG93bk1lbnU+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcInNldHRpbmdzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtd3JlbmNoXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFjY291bnQuc2V0dGluZ3NcXFwiPlNldHRpbmdzPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcInBhc3N3b3JkXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtY2xvY2stb1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hY2NvdW50LnBhc3N3b3JkXFxcIj5QYXNzd29yZDwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCIgaWQ9XFxcImxvZ291dFxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1zaWduLW91dFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hY2NvdW50LmxvZ291dFxcXCI+U2lnbiBvdXQ8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcImZhbHNlXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIChjbGljayk9XFxcImxvZ2luKClcXFwiIGlkPVxcXCJsb2dpblxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1zaWduLWluXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFjY291bnQubG9naW5cXFwiPlNpZ24gaW48L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcImZhbHNlXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcInJlZ2lzdGVyXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtcmVnaXN0ZXJlZFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hY2NvdW50LnJlZ2lzdGVyXFxcIj5SZWdpc3Rlcjwvc3Bhbj4gPC9hPiA8L2xpPiA8L3VsPiA8L2xpPiA8L3VsPiA8L2Rpdj4gPC9uYXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlU2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi9wcm9maWxlcy9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VIZWxwZXIsIFByaW5jaXBhbCwgTG9naW5Nb2RhbFNlcnZpY2UsIExvZ2luU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7IFZFUlNJT04sIERFQlVHX0lORk9fRU5BQkxFRCB9IGZyb20gJy4uLy4uL2FwcC5jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1uYXZiYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAnbmF2YmFyLmNzcydcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpblByb2R1Y3Rpb246IGJvb2xlYW47XG4gICAgaXNOYXZiYXJDb2xsYXBzZWQ6IGJvb2xlYW47XG4gICAgbGFuZ3VhZ2VzOiBhbnlbXTtcbiAgICBzd2FnZ2VyRW5hYmxlZDogYm9vbGVhbjtcbiAgICBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG4gICAgdmVyc2lvbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VIZWxwZXI6IEpoaUxhbmd1YWdlSGVscGVyLFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICBwcml2YXRlIGxvZ2luTW9kYWxTZXJ2aWNlOiBMb2dpbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gVkVSU0lPTiA/ICd2JyArIFZFUlNJT04gOiAnJztcbiAgICAgICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VIZWxwZXIuZ2V0QWxsKCkudGhlbigobGFuZ3VhZ2VzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlcyA9IGxhbmd1YWdlcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9maWxlU2VydmljZS5nZXRQcm9maWxlSW5mbygpLnN1YnNjcmliZSgocHJvZmlsZUluZm8pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5Qcm9kdWN0aW9uID0gcHJvZmlsZUluZm8uaW5Qcm9kdWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5zd2FnZ2VyRW5hYmxlZCA9IHByb2ZpbGVJbmZvLnN3YWdnZXJFbmFibGVkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VMYW5ndWFnZShsYW5ndWFnZUtleTogc3RyaW5nKSB7XG4gICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS5jaGFuZ2VMYW5ndWFnZShsYW5ndWFnZUtleSk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VOYXZiYXIoKSB7XG4gICAgICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbmNpcGFsLmlzQXV0aGVudGljYXRlZCgpO1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLmNvbGxhcHNlTmF2YmFyKCk7XG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICB9XG5cbiAgICB0b2dnbGVOYXZiYXIoKSB7XG4gICAgICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSAhdGhpcy5pc05hdmJhckNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICBnZXRJbWFnZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBdXRoZW50aWNhdGVkKCkgPyB0aGlzLnByaW5jaXBhbC5nZXRJbWFnZVVybCgpIDogbnVsbDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2YmFyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4vcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2ZpbGVJbmZvIH0gZnJvbSAnLi9wcm9maWxlLWluZm8ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1wYWdlLXJpYmJvbicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicmliYm9uXCIgKm5nSWY9XCJyaWJib25FbnZcIj48YSBocmVmPVwiXCIgamhpVHJhbnNsYXRlPVwiZ2xvYmFsLnJpYmJvbi57e3JpYmJvbkVudn19XCI+e3tyaWJib25FbnZ9fTwvYT48L2Rpdj5gLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAncGFnZS1yaWJib24uY3NzJ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZVJpYmJvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcm9maWxlSW5mbzogUHJvZmlsZUluZm87XG4gICAgcmliYm9uRW52OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVJbmZvKCkuc3Vic2NyaWJlKChwcm9maWxlSW5mbykgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5mbyA9IHByb2ZpbGVJbmZvO1xuICAgICAgICAgICAgdGhpcy5yaWJib25FbnYgPSBwcm9maWxlSW5mby5yaWJib25FbnY7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jb21wb25lbnQudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGFnZS1yaWJib24uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgUHJvZmlsZUluZm8ge1xuICAgIGFjdGl2ZVByb2ZpbGVzOiBzdHJpbmdbXTtcbiAgICByaWJib25FbnY6IHN0cmluZztcbiAgICBpblByb2R1Y3Rpb246IGJvb2xlYW47XG4gICAgc3dhZ2dlckVuYWJsZWQ6IGJvb2xlYW47XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcHJvZmlsZS1pbmZvLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgUHJvZmlsZUluZm8gfSBmcm9tICcuL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHByb2ZpbGVJbmZvVXJsID0gJ2FwaS9wcm9maWxlLWluZm8nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGdldFByb2ZpbGVJbmZvKCk6IE9ic2VydmFibGU8UHJvZmlsZUluZm8+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5wcm9maWxlSW5mb1VybClcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwaSA9IG5ldyBQcm9maWxlSW5mbygpO1xuICAgICAgICAgICAgICAgIHBpLmFjdGl2ZVByb2ZpbGVzID0gZGF0YS5hY3RpdmVQcm9maWxlcztcbiAgICAgICAgICAgICAgICBwaS5yaWJib25FbnYgPSBkYXRhLnJpYmJvbkVudjtcbiAgICAgICAgICAgICAgICBwaS5pblByb2R1Y3Rpb24gPSBkYXRhLmFjdGl2ZVByb2ZpbGVzLmluZGV4T2YoJ3Byb2QnKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgcGkuc3dhZ2dlckVuYWJsZWQgPSBkYXRhLmFjdGl2ZVByb2ZpbGVzLmluZGV4T2YoJ3N3YWdnZXInKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIsIEpoaUFsZXJ0U2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1hbGVydC1lcnJvcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0c1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYWxlcnQgb2YgYWxlcnRzXCIgIFtuZ0NsYXNzXT1cIntcXCdhbGVydC5wb3NpdGlvblxcJzogdHJ1ZSwgXFwndG9hc3RcXCc6IGFsZXJ0LnRvYXN0fVwiPlxuICAgICAgICAgICAgICAgIDxuZ2ItYWxlcnQgKm5nSWY9XCJhbGVydCAmJiBhbGVydC50eXBlICYmIGFsZXJ0Lm1zZ1wiIFt0eXBlXT1cImFsZXJ0LnR5cGVcIiAoY2xvc2UpPVwiYWxlcnQuY2xvc2UoYWxlcnRzKVwiPlxuICAgICAgICAgICAgICAgICAgICA8cHJlIFtpbm5lckhUTUxdPVwiYWxlcnQubXNnXCI+PC9wcmU+XG4gICAgICAgICAgICAgICAgPC9uZ2ItYWxlcnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBKaGlBbGVydEVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIGFsZXJ0czogYW55W107XG4gICAgY2xlYW5IdHRwRXJyb3JMaXN0ZW5lcjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEpoaUFsZXJ0U2VydmljZSwgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEpoaUV2ZW50TWFuYWdlciwgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuYWxlcnRzID0gW107XG5cbiAgICAgICAgdGhpcy5jbGVhbkh0dHBFcnJvckxpc3RlbmVyID0gZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnamhpcHN0ZXJkZW1vQXBwLmh0dHBFcnJvcicsIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBjb25zdCBodHRwUmVzcG9uc2UgPSByZXNwb25zZS5jb250ZW50O1xuICAgICAgICAgICAgc3dpdGNoIChodHRwUmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29ubmVjdGlvbiByZWZ1c2VkLCBzZXJ2ZXIgbm90IHJlYWNoYWJsZVxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KCdTZXJ2ZXIgbm90IHJlYWNoYWJsZScsICdlcnJvci5zZXJ2ZXIubm90LnJlYWNoYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDAwOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBBcnJheS5mcm9tKGh0dHBSZXNwb25zZS5oZWFkZXJzLl9oZWFkZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW2ldWzBdLmVuZHNXaXRoKCdhcHAtZXJyb3InKSB8fCBhcnJbaV1bMF0uZW5kc1dpdGgoJ2FwcC1wYXJhbXMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMucHVzaChhcnJbaV1bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnMuc29ydCgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JIZWFkZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW50aXR5S2V5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JIZWFkZXIgPSBodHRwUmVzcG9uc2UuaGVhZGVycy5nZXQoaGVhZGVyc1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlLZXkgPSBodHRwUmVzcG9uc2UuaGVhZGVycy5nZXQoaGVhZGVyc1sxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ySGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRpdHlOYW1lID0gdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdnbG9iYWwubWVudS5lbnRpdGllcy4nICsgZW50aXR5S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChlcnJvckhlYWRlciwgZXJyb3JIZWFkZXIsIHsgZW50aXR5TmFtZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChodHRwUmVzcG9uc2UudGV4dCgpICE9PSAnJyAmJiBodHRwUmVzcG9uc2UuanNvbigpICYmIGh0dHBSZXNwb25zZS5qc29uKCkuZmllbGRFcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gaHR0cFJlc3BvbnNlLmpzb24oKS5maWVsZEVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBmaWVsZEVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRXJyb3IgPSBmaWVsZEVycm9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0ICdzb21ldGhpbmdbMTRdLm90aGVyWzRdLmlkJyB0byAnc29tZXRoaW5nW10ub3RoZXJbXS5pZCcgc28gdHJhbnNsYXRpb25zIGNhbiBiZSB3cml0dGVuIHRvIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udmVydGVkRmllbGQgPSBmaWVsZEVycm9yLmZpZWxkLnJlcGxhY2UoL1xcW1xcZCpcXF0vZywgJ1tdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdqaGlwc3RlcmRlbW9BcHAuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRXJyb3Iub2JqZWN0TmFtZSArICcuJyArIGNvbnZlcnRlZEZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBvbiBmaWVsZCBcIicgKyBmaWVsZE5hbWUgKyAnXCInLCAnZXJyb3IuJyArIGZpZWxkRXJyb3IubWVzc2FnZSwgeyBmaWVsZE5hbWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaHR0cFJlc3BvbnNlLnRleHQoKSAhPT0gJycgJiYgaHR0cFJlc3BvbnNlLmpzb24oKSAmJiBodHRwUmVzcG9uc2UuanNvbigpLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChodHRwUmVzcG9uc2UuanNvbigpLm1lc3NhZ2UsIGh0dHBSZXNwb25zZS5qc29uKCkubWVzc2FnZSwgaHR0cFJlc3BvbnNlLmpzb24oKS5wYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KGh0dHBSZXNwb25zZS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydCgnTm90IGZvdW5kJywgJ2Vycm9yLnVybC5ub3QuZm91bmQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoaHR0cFJlc3BvbnNlLnRleHQoKSAhPT0gJycgJiYgaHR0cFJlc3BvbnNlLmpzb24oKSAmJiBodHRwUmVzcG9uc2UuanNvbigpLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChodHRwUmVzcG9uc2UuanNvbigpLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KGh0dHBSZXNwb25zZS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5jbGVhbkh0dHBFcnJvckxpc3RlbmVyICE9PSB1bmRlZmluZWQgJiYgdGhpcy5jbGVhbkh0dHBFcnJvckxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5kZXN0cm95KHRoaXMuY2xlYW5IdHRwRXJyb3JMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0cyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRXJyb3JBbGVydChtZXNzYWdlLCBrZXk/LCBkYXRhPykge1xuICAgICAgICBrZXkgPSAoa2V5ICYmIGtleSAhPT0gbnVsbCkgPyBrZXkgOiBtZXNzYWdlO1xuICAgICAgICB0aGlzLmFsZXJ0cy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuYWRkQWxlcnQoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgbXNnOiBrZXksXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgdG9hc3Q6IHRoaXMuYWxlcnRTZXJ2aWNlLmlzVG9hc3QoKSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1xuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LWVycm9yLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpoaUFsZXJ0U2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktYWxlcnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydHNcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGFsZXJ0IG9mIGFsZXJ0c1wiIFtuZ0NsYXNzXT1cIntcXCdhbGVydC5wb3NpdGlvblxcJzogdHJ1ZSwgXFwndG9hc3RcXCc6IGFsZXJ0LnRvYXN0fVwiPlxuICAgICAgICAgICAgICAgIDxuZ2ItYWxlcnQgKm5nSWY9XCJhbGVydCAmJiBhbGVydC50eXBlICYmIGFsZXJ0Lm1zZ1wiIFt0eXBlXT1cImFsZXJ0LnR5cGVcIiAoY2xvc2UpPVwiYWxlcnQuY2xvc2UoYWxlcnRzKVwiPlxuICAgICAgICAgICAgICAgICAgICA8cHJlIFtpbm5lckhUTUxdPVwiYWxlcnQubXNnXCI+PC9wcmU+XG4gICAgICAgICAgICAgICAgPC9uZ2ItYWxlcnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBKaGlBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBhbGVydHM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEpoaUFsZXJ0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hbGVydHMgPSB0aGlzLmFsZXJ0U2VydmljZS5nZXQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY2NvdW50U2VydmljZSAge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBnZXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2FwaS9hY2NvdW50JykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBzYXZlKGFjY291bnQ6IGFueSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvYWNjb3VudCcsIGFjY291bnQpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYWNjb3VudC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZlclByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICBwcml2YXRlICRsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgJHNlc3Npb25TdG9yYWdlOiBTZXNzaW9uU3RvcmFnZVNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBnZXRUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGxvY2FsU3RvcmFnZS5yZXRyaWV2ZSgnYXV0aGVudGljYXRpb25Ub2tlbicpIHx8IHRoaXMuJHNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdhdXRoZW50aWNhdGlvblRva2VuJyk7XG4gICAgfVxuXG4gICAgbG9naW4oY3JlZGVudGlhbHMpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgICByZW1lbWJlck1lOiBjcmVkZW50aWFscy5yZW1lbWJlck1lXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL2F1dGhlbnRpY2F0ZScsIGRhdGEpLm1hcChhdXRoZW50aWNhdGVTdWNjZXNzLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZVN1Y2Nlc3MocmVzcCkge1xuICAgICAgICAgICAgY29uc3QgYmVhcmVyVG9rZW4gPSByZXNwLmhlYWRlcnMuZ2V0KCdBdXRob3JpemF0aW9uJyk7XG4gICAgICAgICAgICBpZiAoYmVhcmVyVG9rZW4gJiYgYmVhcmVyVG9rZW4uc2xpY2UoMCwgNykgPT09ICdCZWFyZXIgJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGp3dCA9IGJlYXJlclRva2VuLnNsaWNlKDcsIGJlYXJlclRva2VuLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZUF1dGhlbnRpY2F0aW9uVG9rZW4oand0LCBjcmVkZW50aWFscy5yZW1lbWJlck1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gand0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9naW5XaXRoVG9rZW4oand0LCByZW1lbWJlck1lKSB7XG4gICAgICAgIGlmIChqd3QpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVBdXRoZW50aWNhdGlvblRva2VuKGp3dCwgcmVtZW1iZXJNZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGp3dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ2F1dGgtand0LXNlcnZpY2UgUHJvbWlzZSByZWplY3QnKTsgLy8gUHV0IGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2UgaGVyZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcmVBdXRoZW50aWNhdGlvblRva2VuKGp3dCwgcmVtZW1iZXJNZSkge1xuICAgICAgICBpZiAocmVtZW1iZXJNZSkge1xuICAgICAgICAgICAgdGhpcy4kbG9jYWxTdG9yYWdlLnN0b3JlKCdhdXRoZW50aWNhdGlvblRva2VuJywgand0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLnN0b3JlKCdhdXRoZW50aWNhdGlvblRva2VuJywgand0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ291dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRsb2NhbFN0b3JhZ2UuY2xlYXIoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKTtcbiAgICAgICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLmNsZWFyKCdhdXRoZW50aWNhdGlvblRva2VuJyk7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2F1dGgtand0LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDU1JGU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHt9XG5cbiAgICBnZXRDU1JGKG5hbWU/OiBzdHJpbmcpIHtcbiAgICAgICAgbmFtZSA9IGAke25hbWUgPyBuYW1lIDogJ1hTUkYtVE9LRU4nfWA7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KG5hbWUpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvY3NyZi5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaW5jaXBhbCB9IGZyb20gJy4vcHJpbmNpcGFsLnNlcnZpY2UnO1xuXG4vKipcbiAqIEB3aGF0SXREb2VzIENvbmRpdGlvbmFsbHkgaW5jbHVkZXMgYW4gSFRNTCBlbGVtZW50IGlmIGN1cnJlbnQgdXNlciBoYXMgYW55XG4gKiBvZiB0aGUgYXV0aG9yaXRpZXMgcGFzc2VkIGFzIHRoZSBgZXhwcmVzc2lvbmAuXG4gKlxuICogQGhvd1RvVXNlXG4gKiBgYGBcbiAqICAgICA8c29tZS1lbGVtZW50ICpqaGlIYXNBbnlBdXRob3JpdHk9XCInUk9MRV9BRE1JTidcIj4uLi48L3NvbWUtZWxlbWVudD5cbiAqXG4gKiAgICAgPHNvbWUtZWxlbWVudCAqamhpSGFzQW55QXV0aG9yaXR5PVwiWydST0xFX0FETUlOJywgJ1JPTEVfVVNFUiddXCI+Li4uPC9zb21lLWVsZW1lbnQ+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbamhpSGFzQW55QXV0aG9yaXR5XSdcbn0pXG5leHBvcnQgY2xhc3MgSGFzQW55QXV0aG9yaXR5RGlyZWN0aXZlIHtcblxuICAgIHByaXZhdGUgYXV0aG9yaXRpZXM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCwgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgamhpSGFzQW55QXV0aG9yaXR5KHZhbHVlOiBzdHJpbmd8c3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5hdXRob3JpdGllcyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBbIDxzdHJpbmc+IHZhbHVlIF0gOiA8c3RyaW5nW10+IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgLy8gR2V0IG5vdGlmaWVkIGVhY2ggdGltZSBhdXRoZW50aWNhdGlvbiBzdGF0ZSBjaGFuZ2VzLlxuICAgICAgICB0aGlzLnByaW5jaXBhbC5nZXRBdXRoZW50aWNhdGlvblN0YXRlKCkuc3Vic2NyaWJlKChpZGVudGl0eSkgPT4gdGhpcy51cGRhdGVWaWV3KCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaGFzQW55QXV0aG9yaXR5KHRoaXMuYXV0aG9yaXRpZXMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9oYXMtYW55LWF1dGhvcml0eS5kaXJlY3RpdmUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuL2FjY291bnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmluY2lwYWwge1xuICAgIHByaXZhdGUgdXNlcklkZW50aXR5OiBhbnk7XG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblN0YXRlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWNjb3VudDogQWNjb3VudFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBhdXRoZW50aWNhdGUoaWRlbnRpdHkpIHtcbiAgICAgICAgdGhpcy51c2VySWRlbnRpdHkgPSBpZGVudGl0eTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gaWRlbnRpdHkgIT09IG51bGw7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0ZS5uZXh0KHRoaXMudXNlcklkZW50aXR5KTtcbiAgICB9XG5cbiAgICBoYXNBbnlBdXRob3JpdHkoYXV0aG9yaXRpZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5oYXNBbnlBdXRob3JpdHlEaXJlY3QoYXV0aG9yaXRpZXMpKTtcbiAgICB9XG5cbiAgICBoYXNBbnlBdXRob3JpdHlEaXJlY3QoYXV0aG9yaXRpZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGVkIHx8ICF0aGlzLnVzZXJJZGVudGl0eSB8fCAhdGhpcy51c2VySWRlbnRpdHkuYXV0aG9yaXRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXV0aG9yaXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJZGVudGl0eS5hdXRob3JpdGllcy5pbmRleE9mKGF1dGhvcml0aWVzW2ldKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBoYXNBdXRob3JpdHkoYXV0aG9yaXR5OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgaWYgKCF0aGlzLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pZGVudGl0eSgpLnRoZW4oKGlkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGlkLmF1dGhvcml0aWVzICYmIGlkLmF1dGhvcml0aWVzLmluZGV4T2YoYXV0aG9yaXR5KSAhPT0gLTEpO1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpdHkoZm9yY2U/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgaWYgKGZvcmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGFuZCBzZWUgaWYgd2UgaGF2ZSByZXRyaWV2ZWQgdGhlIHVzZXJJZGVudGl0eSBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSwgcmV1c2UgaXQgYnkgaW1tZWRpYXRlbHkgcmVzb2x2aW5nXG4gICAgICAgIGlmICh0aGlzLnVzZXJJZGVudGl0eSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnVzZXJJZGVudGl0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXRyaWV2ZSB0aGUgdXNlcklkZW50aXR5IGRhdGEgZnJvbSB0aGUgc2VydmVyLCB1cGRhdGUgdGhlIGlkZW50aXR5IG9iamVjdCwgYW5kIHRoZW4gcmVzb2x2ZS5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudC5nZXQoKS50b1Byb21pc2UoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlcklkZW50aXR5ID0gYWNjb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdGUubmV4dCh0aGlzLnVzZXJJZGVudGl0eSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51c2VySWRlbnRpdHk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlcklkZW50aXR5ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQodGhpcy51c2VySWRlbnRpdHkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZDtcbiAgICB9XG5cbiAgICBpc0lkZW50aXR5UmVzb2x2ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJJZGVudGl0eSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldEF1dGhlbnRpY2F0aW9uU3RhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRpb25TdGF0ZS5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBnZXRJbWFnZVVybCgpOiBTdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0lkZW50aXR5UmVzb2x2ZWQoKSA/IHRoaXMudXNlcklkZW50aXR5LmltYWdlVXJsIDogbnVsbDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3ByaW5jaXBhbC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhdGVTdG9yYWdlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgJHNlc3Npb25TdG9yYWdlOiBTZXNzaW9uU3RvcmFnZVNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBnZXRQcmV2aW91c1N0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc2Vzc2lvblN0b3JhZ2UucmV0cmlldmUoJ3ByZXZpb3VzU3RhdGUnKTtcbiAgICB9XG5cbiAgICByZXNldFByZXZpb3VzU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLmNsZWFyKCdwcmV2aW91c1N0YXRlJyk7XG4gICAgfVxuXG4gICAgc3RvcmVQcmV2aW91c1N0YXRlKHByZXZpb3VzU3RhdGVOYW1lLCBwcmV2aW91c1N0YXRlUGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzU3RhdGUgPSB7ICduYW1lJzogcHJldmlvdXNTdGF0ZU5hbWUsICdwYXJhbXMnOiBwcmV2aW91c1N0YXRlUGFyYW1zIH07XG4gICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLnN0b3JlKCdwcmV2aW91c1N0YXRlJywgcHJldmlvdXNTdGF0ZSk7XG4gICAgfVxuXG4gICAgZ2V0RGVzdGluYXRpb25TdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdkZXN0aW5hdGlvblN0YXRlJyk7XG4gICAgfVxuXG4gICAgc3RvcmVVcmwodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2Uuc3RvcmUoJ3ByZXZpb3VzVXJsJywgdXJsKTtcbiAgICB9XG5cbiAgICBnZXRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgncHJldmlvdXNVcmwnKTtcbiAgICB9XG5cbiAgICBzdG9yZURlc3RpbmF0aW9uU3RhdGUoZGVzdGluYXRpb25TdGF0ZSwgZGVzdGluYXRpb25TdGF0ZVBhcmFtcywgZnJvbVN0YXRlKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uSW5mbyA9IHtcbiAgICAgICAgICAgICdkZXN0aW5hdGlvbic6IHtcbiAgICAgICAgICAgICAgICAnbmFtZSc6IGRlc3RpbmF0aW9uU3RhdGUubmFtZSxcbiAgICAgICAgICAgICAgICAnZGF0YSc6IGRlc3RpbmF0aW9uU3RhdGUuZGF0YSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncGFyYW1zJzogZGVzdGluYXRpb25TdGF0ZVBhcmFtcyxcbiAgICAgICAgICAgICdmcm9tJzoge1xuICAgICAgICAgICAgICAgICduYW1lJzogZnJvbVN0YXRlLm5hbWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLnN0b3JlKCdkZXN0aW5hdGlvblN0YXRlJywgZGVzdGluYXRpb25JbmZvKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3N0YXRlLXN0b3JhZ2Uuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuLi8nO1xuaW1wb3J0IHsgTG9naW5Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0YXRlLXN0b3JhZ2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ2luTW9kYWxTZXJ2aWNlOiBMb2dpbk1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgc3RhdGVTdG9yYWdlU2VydmljZTogU3RhdGVTdG9yYWdlU2VydmljZSkge1xuICAgIH1cblxuICAgIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+IHtcblxuICAgICAgICBjb25zdCBhdXRob3JpdGllcyA9IHJvdXRlLmRhdGFbJ2F1dGhvcml0aWVzJ107XG4gICAgICAgIGlmICghYXV0aG9yaXRpZXMgfHwgYXV0aG9yaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrTG9naW4oYXV0aG9yaXRpZXMsIHN0YXRlLnVybCk7XG4gICAgfVxuXG4gICAgY2hlY2tMb2dpbihhdXRob3JpdGllczogc3RyaW5nW10sIHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IHByaW5jaXBhbCA9IHRoaXMucHJpbmNpcGFsO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oKGFjY291bnQpID0+IHtcblxuICAgICAgICAgICAgaWYgKGFjY291bnQgJiYgcHJpbmNpcGFsLmhhc0FueUF1dGhvcml0eURpcmVjdChhdXRob3JpdGllcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLnN0b3JlVXJsKHVybCk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2FjY2Vzc2RlbmllZCddKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBvbmx5IHNob3cgdGhlIGxvZ2luIGRpYWxvZywgaWYgdGhlIHVzZXIgaGFzbid0IGxvZ2dlZCBpbiB5ZXRcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3VzZXItcm91dGUtYWNjZXNzLXNlcnZpY2UudHMiLCJleHBvcnQgY29uc3QgSVRFTVNfUEVSX1BBR0UgPSAyMDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2NvbnN0YW50cy9wYWdpbmF0aW9uLmNvbnN0YW50cy50cyIsImV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzL3BhZ2luYXRpb24uY29uc3RhbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vYWxlcnQvYWxlcnQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYWxlcnQvYWxlcnQtZXJyb3IuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC9jc3JmLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL3N0YXRlLXN0b3JhZ2Uuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgvYWNjb3VudC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC9hdXRoLWp3dC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC9wcmluY2lwYWwuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgvaGFzLWFueS1hdXRob3JpdHkuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC91c2VyLXJvdXRlLWFjY2Vzcy1zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29uc3RhbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vbGFuZ3VhZ2UvbGFuZ3VhZ2UuaGVscGVyJztcbmV4cG9ydCAqIGZyb20gJy4vbGFuZ3VhZ2UvZmluZC1sYW5ndWFnZS1mcm9tLWtleS5waXBlJztcbmV4cG9ydCAqIGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbG9naW4vbG9naW4uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyL2FjY291bnQubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyL3VzZXIubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyL3VzZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL21vZGVsL3Jlc3BvbnNlLXdyYXBwZXIubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbC9yZXF1ZXN0LXV0aWwnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbC9iYXNlLWVudGl0eSc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXJlZC1saWJzLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXJlZC1jb21tb24ubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcmVkLm1vZHVsZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9pbmRleC50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6ICdmaW5kTGFuZ3VhZ2VGcm9tS2V5J30pXG5leHBvcnQgY2xhc3MgRmluZExhbmd1YWdlRnJvbUtleVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIGxhbmd1YWdlczogYW55ID0ge1xuICAgICAgICAnY2EnOiAnQ2F0YWzDoCcsXG4gICAgICAgICdjcyc6ICfEjGVza8O9JyxcbiAgICAgICAgJ2RhJzogJ0RhbnNrJyxcbiAgICAgICAgJ2RlJzogJ0RldXRzY2gnLFxuICAgICAgICAnZWwnOiAnzpXOu867zrfOvc65zrrOrCcsXG4gICAgICAgICdlbic6ICdFbmdsaXNoJyxcbiAgICAgICAgJ2VzJzogJ0VzcGHDsW9sJyxcbiAgICAgICAgJ2V0JzogJ0Vlc3RpJyxcbiAgICAgICAgJ2ZyJzogJ0ZyYW7Dp2FpcycsXG4gICAgICAgICdnbCc6ICdHYWxlZ28nLFxuICAgICAgICAnaHUnOiAnTWFneWFyJyxcbiAgICAgICAgJ2hpJzogJ+CkueCkv+CkguCkpuClgCcsXG4gICAgICAgICdoeSc6ICfVgNWh1bXVpdaA1aXVticsXG4gICAgICAgICdpdCc6ICdJdGFsaWFubycsXG4gICAgICAgICdqYSc6ICfml6XmnKzoqp4nLFxuICAgICAgICAna28nOiAn7ZWc6rWt7Ja0JyxcbiAgICAgICAgJ21yJzogJ+CkruCksOCkvuCkoOClgCcsXG4gICAgICAgICdubCc6ICdOZWRlcmxhbmRzJyxcbiAgICAgICAgJ3BsJzogJ1BvbHNraScsXG4gICAgICAgICdwdC1icic6ICdQb3J0dWd1w6pzIChCcmFzaWwpJyxcbiAgICAgICAgJ3B0LXB0JzogJ1BvcnR1Z3XDqnMnLFxuICAgICAgICAncm8nOiAnUm9tw6JuxIMnLFxuICAgICAgICAncnUnOiAn0KDRg9GB0YHQutC40LknLFxuICAgICAgICAnc2snOiAnU2xvdmVuc2vDvScsXG4gICAgICAgICdzcic6ICdTcnBza2knLFxuICAgICAgICAnc3YnOiAnU3ZlbnNrYScsXG4gICAgICAgICd0YSc6ICfgrqTgrq7grr/grrTgr40nLFxuICAgICAgICAndGgnOiAn4LmE4LiX4LiiJyxcbiAgICAgICAgJ3RyJzogJ1TDvHJrw6dlJyxcbiAgICAgICAgJ3VhJzogJ9Cj0LrRgNCw0ZfQvdGB0YzQutCwJyxcbiAgICAgICAgJ3ZpJzogJ1Rp4bq/bmcgVmnhu4d0JyxcbiAgICAgICAgJ3poLWNuJzogJ+S4reaWh++8iOeugOS9k++8iScsXG4gICAgICAgICd6aC10dyc6ICfnuYHpq5TkuK3mlocnXG4gICAgfTtcbiAgICB0cmFuc2Zvcm0obGFuZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VzW2xhbmddO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xhbmd1YWdlL2ZpbmQtbGFuZ3VhZ2UtZnJvbS1rZXkucGlwZS50cyIsIi8qXG4gICAgTGFuZ3VhZ2VzIGNvZGVzIGFyZSBJU09fNjM5LTEgY29kZXMsIHNlZSBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfSVNPXzYzOS0xX2NvZGVzXG4gICAgVGhleSBhcmUgd3JpdHRlbiBpbiBFbmdsaXNoIHRvIGF2b2lkIGNoYXJhY3RlciBlbmNvZGluZyBpc3N1ZXMgKG5vdCBhIHBlcmZlY3Qgc29sdXRpb24pXG4qL1xuZXhwb3J0IGNvbnN0IExBTkdVQUdFUzogc3RyaW5nW10gPSBbXG4gICAgJ2VuJ1xuICAgIC8vIGpoaXBzdGVyLW5lZWRsZS1pMThuLWxhbmd1YWdlLWNvbnN0YW50IC0gSkhpcHN0ZXIgd2lsbCBhZGQvcmVtb3ZlIGxhbmd1YWdlcyBpbiB0aGlzIGFycmF5XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29uc3RhbnRzLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50LCBMYW5nQ2hhbmdlRXZlbnQgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgTEFOR1VBR0VTIH0gZnJvbSAnLi9sYW5ndWFnZS5jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpTGFuZ3VhZ2VIZWxwZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoTEFOR1VBR0VTKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHdpbmRvdyB0aXRsZSB1c2luZyBwYXJhbXMgaW4gdGhlIGZvbGxvd2luZ1xuICAgICAqIG9yZGVyOlxuICAgICAqIDEuIHRpdGxlS2V5IHBhcmFtZXRlclxuICAgICAqIDIuICRzdGF0ZS4kY3VycmVudC5kYXRhLnBhZ2VUaXRsZSAoY3VycmVudCBzdGF0ZSBwYWdlIHRpdGxlKVxuICAgICAqIDMuICdnbG9iYWwudGl0bGUnXG4gICAgICovXG4gICAgdXBkYXRlVGl0bGUodGl0bGVLZXk/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aXRsZUtleSkge1xuICAgICAgICAgICAgIHRpdGxlS2V5ID0gdGhpcy5nZXRQYWdlVGl0bGUodGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3Qucm9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0KHRpdGxlS2V5KS5zdWJzY3JpYmUoKHRpdGxlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSh0aXRsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogVHJhbnNsYXRpb25DaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUaXRsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUaXRsZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBhZ2VUaXRsZShyb3V0ZVNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgICAgIGxldCB0aXRsZTogc3RyaW5nID0gKHJvdXRlU25hcHNob3QuZGF0YSAmJiByb3V0ZVNuYXBzaG90LmRhdGFbJ3BhZ2VUaXRsZSddKSA/IHJvdXRlU25hcHNob3QuZGF0YVsncGFnZVRpdGxlJ10gOiAnamhpcHN0ZXJkZW1vQXBwJztcbiAgICAgICAgaWYgKHJvdXRlU25hcHNob3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGl0bGUgPSB0aGlzLmdldFBhZ2VUaXRsZShyb3V0ZVNuYXBzaG90LmZpcnN0Q2hpbGQpIHx8IHRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sYW5ndWFnZS9sYW5ndWFnZS5oZWxwZXIudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEpoaUxvZ2luTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZGFsU2VydmljZSB7XG4gICAgcHJpdmF0ZSBpc09wZW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICkge31cblxuICAgIG9wZW4oKTogTmdiTW9kYWxSZWYge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihKaGlMb2dpbk1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBjb250YWluZXI6ICduYXYnXG4gICAgICAgIH0pO1xuICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1vZGFsUmVmO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4gPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJsb2dpbi50aXRsZVxcXCI+U2lnbiBpbjwvaDQ+IDxidXR0b24gYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJhY3RpdmVNb2RhbC5kaXNtaXNzKCdjbG9zZWQnKVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPng8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04IG9mZnNldC1tZC0yXFxcIj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiYXV0aGVudGljYXRpb25FcnJvclxcXCIgamhpVHJhbnNsYXRlPVxcXCJsb2dpbi5tZXNzYWdlcy5lcnJvci5hdXRoZW50aWNhdGlvblxcXCI+IDxzdHJvbmc+RmFpbGVkIHRvIHNpZ24gaW4hPC9zdHJvbmc+IFBsZWFzZSBjaGVjayB5b3VyIGNyZWRlbnRpYWxzIGFuZCB0cnkgYWdhaW4uIDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPiA8Zm9ybSBjbGFzcz1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwibG9naW4oKVxcXCI+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS51c2VybmFtZVxcXCI+TG9naW48L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidXNlcm5hbWVcXFwiIGlkPVxcXCJ1c2VybmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J2dsb2JhbC5mb3JtLnVzZXJuYW1lLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlcm5hbWVcXFwiPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImxvZ2luLmZvcm0ucGFzc3dvcmRcXFwiPlBhc3N3b3JkPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snbG9naW4uZm9ybS5wYXNzd29yZC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInBhc3N3b3JkXFxcIj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tY2hlY2tcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwicmVtZW1iZXJNZVxcXCI+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcInJlbWVtYmVyTWVcXFwiIGlkPVxcXCJyZW1lbWJlck1lXFxcIiBbKG5nTW9kZWwpXT1cXFwicmVtZW1iZXJNZVxcXCIgY2hlY2tlZD1cXFwiY2hlY2tlZFxcXCI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibG9naW4uZm9ybS5yZW1lbWJlcm1lXFxcIj5SZW1lbWJlciBtZTwvc3Bhbj4gPC9sYWJlbD4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBqaGlUcmFuc2xhdGU9XFxcImxvZ2luLmZvcm0uYnV0dG9uXFxcIj5TaWduIGluPC9idXR0b24+IDwvZm9ybT4gPHA+PC9wPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcInJlcXVlc3RSZXNldFBhc3N3b3JkKClcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibG9naW4ucGFzc3dvcmQuZm9yZ290XFxcIj5EaWQgeW91IGZvcmdldCB5b3VyIHBhc3N3b3JkPzwvYT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLnJlZ2lzdGVyLm5vYWNjb3VudFxcXCI+WW91IGRvbid0IGhhdmUgYW4gYWNjb3VudCB5ZXQ/PC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwicmVnaXN0ZXIoKVxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5yZWdpc3Rlci5saW5rXFxcIj5SZWdpc3RlciBhIG5ldyBhY2NvdW50PC9hPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9zdGF0ZS1zdG9yYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1sb2dpbi1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlMb2dpbk1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgYXV0aGVudGljYXRpb25FcnJvcjogYm9vbGVhbjtcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIHJlbWVtYmVyTWU6IGJvb2xlYW47XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBjcmVkZW50aWFsczogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBKaGlFdmVudE1hbmFnZXIsXG4gICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc3RhdGVTdG9yYWdlU2VydmljZTogU3RhdGVTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbFxuICAgICkge1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge307XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lJyksICdmb2N1cycsIFtdKTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogbnVsbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgICAgICAgcmVtZW1iZXJNZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4oe1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIHJlbWVtYmVyTWU6IHRoaXMucmVtZW1iZXJNZVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCdsb2dpbiBzdWNjZXNzJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09PSAnL3JlZ2lzdGVyJyB8fCAoL2FjdGl2YXRlLy50ZXN0KHRoaXMucm91dGVyLnVybCkpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIudXJsID09PSAnL2ZpbmlzaFJlc2V0JyB8fCB0aGlzLnJvdXRlci51cmwgPT09ICcvcmVxdWVzdFJlc2V0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3Qoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdhdXRoZW50aWNhdGlvblN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTZW5kaW5nIEF1dGhlbnRpY2F0aW9uIFN1Y2Nlc3MnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gLy8gcHJldmlvdXNTdGF0ZSB3YXMgc2V0IGluIHRoZSBhdXRoRXhwaXJlZEludGVyY2VwdG9yIGJlZm9yZSBiZWluZyByZWRpcmVjdGVkIHRvIGxvZ2luIG1vZGFsLlxuICAgICAgICAgICAgLy8gLy8gc2luY2UgbG9naW4gaXMgc3VjY2VzZnVsLCBnbyB0byBzdG9yZWQgcHJldmlvdXNTdGF0ZSBhbmQgY2xlYXIgcHJldmlvdXNTdGF0ZVxuICAgICAgICAgICAgY29uc3QgcmVkaXJlY3QgPSB0aGlzLnN0YXRlU3RvcmFnZVNlcnZpY2UuZ2V0VXJsKCk7XG4gICAgICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcmVkaXJlY3RdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbkVycm9yID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygndG8gc3RhdGUgcmVnaXN0ZXInKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcmVnaXN0ZXInXSk7XG4gICAgfVxuXG4gICAgcmVxdWVzdFJlc2V0UGFzc3dvcmQoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygndG8gc3RhdGUgcmVxdWVzdFJlc2V0Jyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Jlc2V0JywgJ3JlcXVlc3QnXSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuLi9hdXRoL3ByaW5jaXBhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2ZXJQcm92aWRlciB9IGZyb20gJy4uL2F1dGgvYXV0aC1qd3Quc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZlclByb3ZpZGVyOiBBdXRoU2VydmVyUHJvdmlkZXJcbiAgICApIHt9XG5cbiAgICBsb2dpbihjcmVkZW50aWFscywgY2FsbGJhY2s/KSB7XG4gICAgICAgIGNvbnN0IGNiID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmVyUHJvdmlkZXIubG9naW4oY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KHRydWUpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWZ0ZXIgdGhlIGxvZ2luIHRoZSBsYW5ndWFnZSB3aWxsIGJlIGNoYW5nZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGxhbmd1YWdlIHNlbGVjdGVkIGJ5IHRoZSB1c2VyIGR1cmluZyBoaXMgcmVnaXN0cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS5jaGFuZ2VMYW5ndWFnZShhY2NvdW50LmxhbmdLZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNiKCk7XG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dpbldpdGhUb2tlbihqd3QsIHJlbWVtYmVyTWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZlclByb3ZpZGVyLmxvZ2luV2l0aFRva2VuKGp3dCwgcmVtZW1iZXJNZSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2ZXJQcm92aWRlci5sb2dvdXQoKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuYXV0aGVudGljYXRlKG51bGwpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBVUkxTZWFyY2hQYXJhbXMsIEJhc2VSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVxdWVzdE9wdGlvbiA9IChyZXE/OiBhbnkpOiBCYXNlUmVxdWVzdE9wdGlvbnMgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnM6IEJhc2VSZXF1ZXN0T3B0aW9ucyA9IG5ldyBCYXNlUmVxdWVzdE9wdGlvbnMoKTtcbiAgICBpZiAocmVxKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMuc2V0KCdwYWdlJywgcmVxLnBhZ2UpO1xuICAgICAgICBwYXJhbXMuc2V0KCdzaXplJywgcmVxLnNpemUpO1xuICAgICAgICBpZiAocmVxLnNvcnQpIHtcbiAgICAgICAgICAgIHBhcmFtcy5wYXJhbXNNYXAuc2V0KCdzb3J0JywgcmVxLnNvcnQpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcmVxLnF1ZXJ5KTtcblxuICAgICAgICBvcHRpb25zLnBhcmFtcyA9IHBhcmFtcztcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbW9kZWwvcmVxdWVzdC11dGlsLnRzIiwiaW1wb3J0IHsgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VXcmFwcGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGhlYWRlcnM6IEhlYWRlcnMsXG4gICAgICAgIHB1YmxpYyBqc29uOiBhbnksXG4gICAgICAgIHB1YmxpYyBzdGF0dXM6IG51bWJlclxuICAgICkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9tb2RlbC9yZXNwb25zZS13cmFwcGVyLm1vZGVsLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7XG4gICAgSmhpcHN0ZXJkZW1vU2hhcmVkTGlic01vZHVsZSxcbiAgICBKaGlMYW5ndWFnZUhlbHBlcixcbiAgICBGaW5kTGFuZ3VhZ2VGcm9tS2V5UGlwZSxcbiAgICBKaGlBbGVydENvbXBvbmVudCxcbiAgICBKaGlBbGVydEVycm9yQ29tcG9uZW50XG59IGZyb20gJy4vJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEpoaXBzdGVyZGVtb1NoYXJlZExpYnNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBGaW5kTGFuZ3VhZ2VGcm9tS2V5UGlwZSxcbiAgICAgICAgSmhpQWxlcnRDb21wb25lbnQsXG4gICAgICAgIEpoaUFsZXJ0RXJyb3JDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBKaGlMYW5ndWFnZUhlbHBlcixcbiAgICAgICAgVGl0bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgSmhpcHN0ZXJkZW1vU2hhcmVkTGlic01vZHVsZSxcbiAgICAgICAgRmluZExhbmd1YWdlRnJvbUtleVBpcGUsXG4gICAgICAgIEpoaUFsZXJ0Q29tcG9uZW50LFxuICAgICAgICBKaGlBbGVydEVycm9yQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBKaGlwc3RlcmRlbW9TaGFyZWRDb21tb25Nb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC1jb21tb24ubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IE5nSmhpcHN0ZXJNb2R1bGUgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBJbmZpbml0ZVNjcm9sbE1vZHVsZSB9IGZyb20gJ25neC1pbmZpbml0ZS1zY3JvbGwnO1xuaW1wb3J0IHsgQ29va2llTW9kdWxlIH0gZnJvbSAnbmd4LWNvb2tpZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOZ2JNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICBOZ0poaXBzdGVyTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgICAgLy8gc2V0IGJlbG93IHRvIHRydWUgdG8gbWFrZSBhbGVydHMgbG9vayBsaWtlIHRvYXN0XG4gICAgICAgICAgICBhbGVydEFzVG9hc3Q6IGZhbHNlLFxuICAgICAgICAgICAgaTE4bkVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0STE4bkxhbmc6ICdlbidcbiAgICAgICAgfSksXG4gICAgICAgIEluZmluaXRlU2Nyb2xsTW9kdWxlLFxuICAgICAgICBDb29raWVNb2R1bGUuZm9yUm9vdCgpXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE5nYk1vZHVsZSxcbiAgICAgICAgTmdKaGlwc3Rlck1vZHVsZSxcbiAgICAgICAgSW5maW5pdGVTY3JvbGxNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEpoaXBzdGVyZGVtb1NoYXJlZExpYnNNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC1saWJzLm1vZHVsZS50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7XG4gICAgSmhpcHN0ZXJkZW1vU2hhcmVkTGlic01vZHVsZSxcbiAgICBKaGlwc3RlcmRlbW9TaGFyZWRDb21tb25Nb2R1bGUsXG4gICAgQ1NSRlNlcnZpY2UsXG4gICAgQXV0aFNlcnZlclByb3ZpZGVyLFxuICAgIEFjY291bnRTZXJ2aWNlLFxuICAgIFVzZXJTZXJ2aWNlLFxuICAgIFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgTG9naW5TZXJ2aWNlLFxuICAgIExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgIFByaW5jaXBhbCxcbiAgICBIYXNBbnlBdXRob3JpdHlEaXJlY3RpdmUsXG4gICAgSmhpTG9naW5Nb2RhbENvbXBvbmVudFxufSBmcm9tICcuLyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBKaGlwc3RlcmRlbW9TaGFyZWRMaWJzTW9kdWxlLFxuICAgICAgICBKaGlwc3RlcmRlbW9TaGFyZWRDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBKaGlMb2dpbk1vZGFsQ29tcG9uZW50LFxuICAgICAgICBIYXNBbnlBdXRob3JpdHlEaXJlY3RpdmVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBMb2dpblNlcnZpY2UsXG4gICAgICAgIExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBBY2NvdW50U2VydmljZSxcbiAgICAgICAgU3RhdGVTdG9yYWdlU2VydmljZSxcbiAgICAgICAgUHJpbmNpcGFsLFxuICAgICAgICBDU1JGU2VydmljZSxcbiAgICAgICAgQXV0aFNlcnZlclByb3ZpZGVyLFxuICAgICAgICBVc2VyU2VydmljZSxcbiAgICAgICAgRGF0ZVBpcGVcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW0poaUxvZ2luTW9kYWxDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgSmhpcHN0ZXJkZW1vU2hhcmVkQ29tbW9uTW9kdWxlLFxuICAgICAgICBKaGlMb2dpbk1vZGFsQ29tcG9uZW50LFxuICAgICAgICBIYXNBbnlBdXRob3JpdHlEaXJlY3RpdmUsXG4gICAgICAgIERhdGVQaXBlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cblxufSlcbmV4cG9ydCBjbGFzcyBKaGlwc3RlcmRlbW9TaGFyZWRNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJleHBvcnQgY2xhc3MgQWNjb3VudCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhY3RpdmF0ZWQ6IGJvb2xlYW4sXG4gICAgICAgIHB1YmxpYyBhdXRob3JpdGllczogc3RyaW5nW10sXG4gICAgICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgZmlyc3ROYW1lOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBsYW5nS2V5OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbG9naW46IHN0cmluZyxcbiAgICAgICAgcHVibGljIGltYWdlVXJsOiBzdHJpbmdcbiAgICApIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci9hY2NvdW50Lm1vZGVsLnRzIiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIHB1YmxpYyBpZD86IGFueTtcbiAgICBwdWJsaWMgbG9naW4/OiBzdHJpbmc7XG4gICAgcHVibGljIGZpcnN0TmFtZT86IHN0cmluZztcbiAgICBwdWJsaWMgbGFzdE5hbWU/OiBzdHJpbmc7XG4gICAgcHVibGljIGVtYWlsPzogc3RyaW5nO1xuICAgIHB1YmxpYyBhY3RpdmF0ZWQ/OiBCb29sZWFuO1xuICAgIHB1YmxpYyBsYW5nS2V5Pzogc3RyaW5nO1xuICAgIHB1YmxpYyBhdXRob3JpdGllcz86IGFueVtdO1xuICAgIHB1YmxpYyBjcmVhdGVkQnk/OiBzdHJpbmc7XG4gICAgcHVibGljIGNyZWF0ZWREYXRlPzogRGF0ZTtcbiAgICBwdWJsaWMgbGFzdE1vZGlmaWVkQnk/OiBzdHJpbmc7XG4gICAgcHVibGljIGxhc3RNb2RpZmllZERhdGU/OiBEYXRlO1xuICAgIHB1YmxpYyBwYXNzd29yZD86IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBpZD86IGFueSxcbiAgICAgICAgbG9naW4/OiBzdHJpbmcsXG4gICAgICAgIGZpcnN0TmFtZT86IHN0cmluZyxcbiAgICAgICAgbGFzdE5hbWU/OiBzdHJpbmcsXG4gICAgICAgIGVtYWlsPzogc3RyaW5nLFxuICAgICAgICBhY3RpdmF0ZWQ/OiBCb29sZWFuLFxuICAgICAgICBsYW5nS2V5Pzogc3RyaW5nLFxuICAgICAgICBhdXRob3JpdGllcz86IGFueVtdLFxuICAgICAgICBjcmVhdGVkQnk/OiBzdHJpbmcsXG4gICAgICAgIGNyZWF0ZWREYXRlPzogRGF0ZSxcbiAgICAgICAgbGFzdE1vZGlmaWVkQnk/OiBzdHJpbmcsXG4gICAgICAgIGxhc3RNb2RpZmllZERhdGU/OiBEYXRlLFxuICAgICAgICBwYXNzd29yZD86IHN0cmluZ1xuICAgICkge1xuICAgICAgICB0aGlzLmlkID0gaWQgPyBpZCA6IG51bGw7XG4gICAgICAgIHRoaXMubG9naW4gPSBsb2dpbiA/IGxvZ2luIDogbnVsbDtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWUgPyBmaXJzdE5hbWUgOiBudWxsO1xuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWUgPyBsYXN0TmFtZSA6IG51bGw7XG4gICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbCA/IGVtYWlsIDogbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSBhY3RpdmF0ZWQgPyBhY3RpdmF0ZWQgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5sYW5nS2V5ID0gbGFuZ0tleSA/IGxhbmdLZXkgOiBudWxsO1xuICAgICAgICB0aGlzLmF1dGhvcml0aWVzID0gYXV0aG9yaXRpZXMgPyBhdXRob3JpdGllcyA6IG51bGw7XG4gICAgICAgIHRoaXMuY3JlYXRlZEJ5ID0gY3JlYXRlZEJ5ID8gY3JlYXRlZEJ5IDogbnVsbDtcbiAgICAgICAgdGhpcy5jcmVhdGVkRGF0ZSA9IGNyZWF0ZWREYXRlID8gY3JlYXRlZERhdGUgOiBudWxsO1xuICAgICAgICB0aGlzLmxhc3RNb2RpZmllZEJ5ID0gbGFzdE1vZGlmaWVkQnkgPyBsYXN0TW9kaWZpZWRCeSA6IG51bGw7XG4gICAgICAgIHRoaXMubGFzdE1vZGlmaWVkRGF0ZSA9IGxhc3RNb2RpZmllZERhdGUgPyBsYXN0TW9kaWZpZWREYXRlIDogbnVsbDtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkID8gcGFzc3dvcmQgOiBudWxsO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvdXNlci5tb2RlbC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgUmVzcG9uc2VXcmFwcGVyIH0gZnJvbSAnLi4vbW9kZWwvcmVzcG9uc2Utd3JhcHBlci5tb2RlbCc7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0T3B0aW9uIH0gZnJvbSAnLi4vbW9kZWwvcmVxdWVzdC11dGlsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJlc291cmNlVXJsID0gJ2FwaS91c2Vycyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgY3JlYXRlKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlV3JhcHBlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5yZXNvdXJjZVVybCwgdXNlcilcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHRoaXMuY29udmVydFJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxSZXNwb25zZVdyYXBwZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5yZXNvdXJjZVVybCwgdXNlcilcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHRoaXMuY29udmVydFJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIGZpbmQobG9naW46IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnJlc291cmNlVXJsfS8ke2xvZ2lufWApLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgcXVlcnkocmVxPzogYW55KTogT2JzZXJ2YWJsZTxSZXNwb25zZVdyYXBwZXI+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNyZWF0ZVJlcXVlc3RPcHRpb24ocmVxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5yZXNvdXJjZVVybCwgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHRoaXMuY29udmVydFJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIGRlbGV0ZShsb2dpbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLnJlc291cmNlVXJsfS8ke2xvZ2lufWApO1xuICAgIH1cblxuICAgIGF1dGhvcml0aWVzKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2FwaS91c2Vycy9hdXRob3JpdGllcycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gPHN0cmluZ1tdPiBqc29uO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnZlcnRSZXNwb25zZShyZXM6IFJlc3BvbnNlKTogUmVzcG9uc2VXcmFwcGVyIHtcbiAgICAgICAgY29uc3QganNvblJlc3BvbnNlID0gcmVzLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZVdyYXBwZXIocmVzLmhlYWRlcnMsIGpzb25SZXNwb25zZSwgcmVzLnN0YXR1cyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjb250ZW50L2NhODU0ZTZkMDc4NWJhNGI5ZDcxNTA0OWMwYmRiY2IzLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIucG5nXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L2ltYWdlcy9oaXBzdGVyLnBuZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjb250ZW50LzFjZDNhMWQ3ODJlODViYTM3Njc3YzFhMjA5OWJjMDAyLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY29udGVudC9hMzBkZWIyNmI0ZWIxNTIxNDMzMDIxZTMyNmNiY2MyYy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L2ltYWdlcy9sb2dvLWpoaXBzdGVyLnBuZ1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvbG9nby1qaGlwc3Rlci5wbmdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvQGFuZ3VsYXIvY29yZS5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg2Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0BuZ3gtdHJhbnNsYXRlL2NvcmUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbW1vbi9AYW5ndWxhci9jb21tb24uZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDIxMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25neC1jb29raWUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjA3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9AYW5ndWxhci9mb3Jtcy5lczUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjE0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmd4LWluZmluaXRlLXNjcm9sbC9tb2R1bGVzL25neC1pbmZpbml0ZS1zY3JvbGwuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDIxNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vc3JjL21haW4vd2ViYXBwL2FwcC92ZW5kb3IudHMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjExKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmctamhpcHN0ZXIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJqZWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDg2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9SeC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgyMDgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9yb3V0ZXIvQGFuZ3VsYXIvcm91dGVyLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDQ5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9AYW5ndWxhci9odHRwLmVzNS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDIwOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjEyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXdlYnN0b3JhZ2UvZGlzdC9hcHAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9PYnNlcnZhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIuZXM1LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==