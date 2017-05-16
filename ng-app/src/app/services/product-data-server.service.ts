import {Injectable} from '@angular/core';
import {Product} from '../Product/Product'
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Rx";
import {AuthenticationService} from './authentication.service';


@Injectable()
export class ProductDataServerService {
  constructor(private http: Http, private authenticationService: AuthenticationService) {
  }

  private headers = new Headers({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + this.authenticationService.getToken()
  });

  serverPath: String = 'http://localhost:8080/'

  getProductData() {
    let productArray: Product[];
    return this.http.get(this.serverPath + 'product')
      .map(res => res.json())
      .catch((error: any) => {
        return Observable.throw(new Error('UnAuthorize'));
      });

  }

  getProduct(id: number) {
    let product: Product;
    return this.http.get(this.serverPath + 'product/' + id)
      .map((res: Response) => {
        if (res) {
          if (res.status === 200) {
            let product: Product = res.json();
            product.image = this.serverPath + "product/images/" + product.image;
            return product;
          }
          if (res.status === 204) {
            return null;
          }
        }
        return null;
      })
      .catch((error: any) => {
        if (error.status === 500) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 400) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 409) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 406) {
          return Observable.throw(new Error(error.status));
        }
        return error
      });
  }

  findProduct(search: string) {
    let product: Product;
    let params: URLSearchParams = new URLSearchParams();
    params.set('search', search);
    return this.http.get('http://localhost:8080/products/', {headers: this.headers, search: params})
      .map(res => res.json());

  }

  removeProduct(id:number){
    console.log("ok");
      return this.http.delete(this.serverPath + 'product/' + id)
      .map(res => res.json());
  }


  addProduct(product: Product, file: any) {
    let formData = new FormData();
    let fileName: string;

    formData.append('file', file);
    return this.http.post(this.serverPath + 'product/image', formData)
      .flatMap(filename => {
        product.image = filename.text();
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'post'});
        let body = JSON.stringify(product);
        return this.http.post(this.serverPath + 'product', body, options)
          .map(res => {
            return res.json()
          })
          .catch((error: any) => {
            return Observable.throw(new Error(error.status))
          })
      })


  }
}
