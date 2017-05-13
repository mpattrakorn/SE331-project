import {
    PRODUCTS
} from '../mocks';
import {
    Injectable
} from '@angular/core';
import {
    Product
} from '../Product/Product'
import {
    Http
} from '@angular/http';


@Injectable()
export class ProductDataService {
    constructor(private http: Http) { }

    getProductData() {
        let productArray: Product[];
        return this.http.get('app/data/product.json')
            .map(res => res.json().products);

    }

    getProduct(id: number) {
        return null;
    }

    addProduct(product: Product, imageFile: any) {
        return null;
    }

    findProduct(search: string) {
        return null;
    }
}