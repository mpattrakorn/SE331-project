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
  Http, Response
} from '@angular/http';
import {Observable} from "rxjs";


@Injectable()
export class ProductDataService {
  observableProducts: Observable<Product[]>;
  allProducts : Product[]=[];
  selectedItems: Product[] = [];
  errorMessage: string;
  url = "http://localhost:4200/list";

  constructor(private http: Http) {
    this.observableProducts = this.http.get(this.url)
      .map((res: Response)=> res.json());
    this.observableProducts.subscribe(
      data => this.allProducts = data,
      error => this.errorMessage = <any>error
    );
  }

  getItems():Observable<Product[]>{
    return this.observableProducts;
  }

  getSelectedItems():Product[]{
    return this.selectedItems;
  }

  addItem(id:number):void{
    let item = this.allProducts.find(ob => ob.id === id);
    if(this.selectedItems.indexOf(item)<0){
      this.selectedItems.push(item);
    }
  }

  removeItem(id:number):void{
    let item = this.selectedItems.find(ob => ob.id === id);
    let itemIndex = this.selectedItems.indexOf(item);
    this.selectedItems.splice(itemIndex,1);
  }

    getProductData() {
        let productArray: Product[];
        return this.http.get('/info')
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
