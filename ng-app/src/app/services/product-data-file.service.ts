import {
    Injectable
} from '@angular/core';
import {
    ProductDataService
} from './product-data.service';
import {
    Http
} from '@angular/http';
import {
    Product
} from '../Product/Product';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductDataFileService {
    constructor(private http: Http) {}
    getProductData() {
        return this.http.get('app/data/product.json').map(res => res.json().data);
    }
}