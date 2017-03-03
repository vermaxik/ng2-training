"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var task_module_1 = require("./task/task.module");
var app_component_1 = require("./app.component");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var task_service_1 = require("./task/task.service");
var router_1 = require("@angular/router");
var task_component_1 = require("./task/task/task.component");
var appRoutes = [{ path: 'tasks', component: task_component_1.TaskComponent }];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            task_module_1.TaskModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(task_service_1.TaskService),
            router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
