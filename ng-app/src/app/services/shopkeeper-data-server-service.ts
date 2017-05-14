import { Injectable } from '@angular/core';
import { Shopkeeper } from '../shopkeeper/shopkeeper'
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ShopkeeperDataServerService {
  constructor(private http: Http, private authenticationService: AuthenticationService) {}

  private headers = new Headers({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + this.authenticationService.getToken()
  });

  serverPath: String = 'http://localhost:8080/'

  getShopkeepersData() {
    let shopkeeperArray: Shopkeeper[];
    return this.http.get(this.serverPath + 'shopkeeper')
      .map(res => res.json())
      .catch((error: any) => {
        return Observable.throw(new Error('UnAuthorize'));
      });
  }

  getShopkeeper(id: number) {
    let shopkeeper: Shopkeeper;
    return this.http.get(this.serverPath + 'shopkeeper/' + id)
      .map((res: Response) => {
        if (res) {
          if (res.status === 200) {
            let shopkeeper: Shopkeeper = res.json();
            return shopkeeper;
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

  findShopkeeper(search: string) {
    let shopkeeper: Shopkeeper;
    let params: URLSearchParams = new URLSearchParams();
    params.set('search', search);
    return this.http.get('http://localhost:8080/shopkeeper/', { headers: this.headers, search: params })
      .map(res => res.json());

  }


  addShopkeeper(shopkeeper: Shopkeeper, file: any) {
    let formData = new FormData();
    let fileName: string;

    formData.append('file', file);
    return this.http.post(this.serverPath + 'shopkeeper/image', formData)
      .flatMap(filename => {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: 'post' });
        let body = JSON.stringify(shopkeeper);
        return this.http.post(this.serverPath + 'shopkeeper', body, options)
          .map(res => {
            return res.json()
          })
          .catch((error: any) => {
            return Observable.throw(new Error(error.status))
          })
      })
  }

}
