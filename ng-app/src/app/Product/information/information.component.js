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
var product_data_server_service_1 = require('./../../services/product-data-server.service');
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var InformationComponent = (function () {
    function InformationComponent(route, productDataServerService) {
        this.route = route;
        this.productDataServerService = productDataServerService;
    }
    InformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isNoData = false;
        this.route.params
            .switchMap(function (params) { return _this.productDataServerService.getProduct(+params['id']); })
            .subscribe(function (product) {
            if (product !== null)
                _this.product = product;
            else
                _this.isNoData = true;
        });
    };
    InformationComponent = __decorate([
        core_1.Component({
            selector: 'showInfo',
            templateUrl: 'app/Product/information/information.component.html',
            styleUrls: ['app/Product/information/information.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, product_data_server_service_1.ProductDataServerService])
    ], InformationComponent);
    return InformationComponent;
}());
exports.InformationComponent = InformationComponent;
//# sourceMappingURL=information.component.js.map