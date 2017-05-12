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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require("rxjs/Rx");
var ProductDataServerService = (function () {
    function ProductDataServerService(http) {
        this.http = http;
        this.serverPath = 'http://34.210.7.144:8080/SE331-assignment3-0.0.1-SNAPSHOT/';
    }
    ProductDataServerService.prototype.getProductData = function () {
        var productArray;
        return this.http.get(this.serverPath + 'product')
            .map(function (res) { return res.json(); });
    };
    ProductDataServerService.prototype.getProduct = function (id) {
        var _this = this;
        var product;
        return this.http.get(this.serverPath + 'product/' + id)
            .map(function (res) {
            if (res) {
                if (res.status === 200) {
                    var product_1 = res.json();
                    product_1.image = _this.serverPath + "product/images/" + product_1.image;
                    return product_1;
                }
                if (res.status === 204) {
                    return null;
                }
            }
            return null;
        })
            .catch(function (error) {
            if (error.status === 500) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 400) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 409) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
            else if (error.status === 406) {
                return Rx_1.Observable.throw(new Error(error.status));
            }
            return error;
        });
    };
    ProductDataServerService.prototype.addProduct = function (product, file) {
        var _this = this;
        var formData = new FormData();
        var fileName;
        formData.append('file', file);
        return this.http.post(this.serverPath + 'product/image', formData)
            .flatMap(function (filename) {
            product.image = filename.text();
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
            var body = JSON.stringify(product);
            return _this.http.post(_this.serverPath + 'product', body, options)
                .map(function (res) {
                return res.json();
            })
                .catch(function (error) {
                return Rx_1.Observable.throw(new Error(error.status));
            });
        });
    };
    ProductDataServerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductDataServerService);
    return ProductDataServerService;
}());
exports.ProductDataServerService = ProductDataServerService;
//# sourceMappingURL=product-data-server.service.js.map