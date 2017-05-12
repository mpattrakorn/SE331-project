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
var product_data_server_service_1 = require('./services/product-data-server.service');
var file_not_found_component_1 = require('./filenotfound/file-not-found.component');
var Product_routing_module_1 = require('./Product/Product-routing.module');
var menu_component_1 = require('./menu/menu.component');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var time_component_1 = require('./time/time.component');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var Product_add_component_1 = require('./Product/add/Product.add.component');
var information_component_1 = require('./Product/information/information.component');
var infoList_component_1 = require('./Product/infoList/infoList.component');
var app_routing_module_1 = require("./app-routing.module");
var common_1 = require("@angular/common");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent,
                time_component_1.TimeComponent,
                Product_add_component_1.ProductComponent,
                information_component_1.InformationComponent,
                infoList_component_1.infoListComponent,
                menu_component_1.MenuComponent,
                file_not_found_component_1.FileNotFoundComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, Product_routing_module_1.ProductRoutingModule, app_routing_module_1.AppRoutingModule],
            bootstrap: [app_component_1.AppComponent],
            providers: [product_data_server_service_1.ProductDataServerService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map