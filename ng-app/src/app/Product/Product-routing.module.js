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
var router_1 = require("@angular/router");
var infoList_component_1 = require("./infoList/infoList.component");
var information_component_1 = require("./information/information.component");
var Product_add_component_1 = require("./add/Product.add.component");
var core_1 = require("@angular/core");
/**
 * Created by CAMT on 2/17/2017.
 */
var productRoutes = [
    { path: 'info/:id', component: information_component_1.InformationComponent },
    { path: 'add', component: Product_add_component_1.ProductComponent },
    { path: 'list', component: infoList_component_1.infoListComponent },
    {
        path: '',
        redirectTo: '/add',
        pathMatch: 'full'
    }
];
var ProductRoutingModule = (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(productRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());
exports.ProductRoutingModule = ProductRoutingModule;
//# sourceMappingURL=Product-routing.module.js.map