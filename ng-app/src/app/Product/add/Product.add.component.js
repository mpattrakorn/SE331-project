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
var router_1 = require('@angular/router');
var product_data_server_service_1 = require('./../../services/product-data-server.service');
var core_1 = require('@angular/core');
var ProductComponent = (function () {
    //productArr: Product[];
    function ProductComponent(productDataServerService, router) {
        this.productDataServerService = productDataServerService;
        this.router = router;
        this.products = {};
    }
    ProductComponent.prototype.addProduct = function () {
        var _this = this;
        var result;
        var inputEl = this.inputEl.nativeElement;
        this.productDataServerService.addProduct(this.products, inputEl.files.item(0))
            .subscribe(function (resultProduct) {
            result = resultProduct;
            if (result != null) {
                _this.router.navigate(['/list']);
            }
            else {
                alert("Error in adding the product");
            }
        });
    };
    __decorate([
        core_1.ViewChild('productImage'), 
        __metadata('design:type', core_1.ElementRef)
    ], ProductComponent.prototype, "inputEl", void 0);
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'addinfo',
            templateUrl: 'app/Product/add/Product.add.component.html',
        }), 
        __metadata('design:paramtypes', [product_data_server_service_1.ProductDataServerService, router_1.Router])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=Product.add.component.js.map