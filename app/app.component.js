System.register(['angular2/core', 'angular2/router', '../app/shared/homepage.component', '../app/jobs/browsejobs.component', '../app/resume/addresume.component', '../app/login/login.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, homepage_component_1, browsejobs_component_1, addresume_component_1, login_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (homepage_component_1_1) {
                homepage_component_1 = homepage_component_1_1;
            },
            function (browsejobs_component_1_1) {
                browsejobs_component_1 = browsejobs_component_1_1;
            },
            function (addresume_component_1_1) {
                addresume_component_1 = addresume_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.showFooter = true;
                    this.showNav = false;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "incare-app",
                        templateUrl: "../app/app.component.html",
                        providers: [router_1.ROUTER_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: homepage_component_1.HomePageComponent, useAsDefault: true },
                        { path: '/browseJobs', name: 'BrowseJobs', component: browsejobs_component_1.BrowseJobsComponent },
                        { path: '/postResume', name: 'PostResume', component: addresume_component_1.AddResumeComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map