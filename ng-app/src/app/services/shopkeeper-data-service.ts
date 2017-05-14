import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Shopkeeper} from "../shopkeeper/shopkeeper";


@Injectable()
export class ShopkeeperDataService {
  constructor(private http: Http){}

  getShopkeeperData() {
    let shopkeeperArray: Shopkeeper[];
    return this.http.get('app/data/shopkeeper.json')
      .map(res => res.json().shopkeepers);

  }

  getShopkeeper(id: number) {
    return null;
  }

  addShopkeeper(shopkeeper: Shopkeeper) {
    return null;
  }

  findShopkeeper(search: string) {
    return null;
  }
}
