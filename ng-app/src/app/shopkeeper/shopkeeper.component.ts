import {Component} from '@angular/core';
import {Shopkeeper} from "./shopkeeper";
import {Router} from "@angular/router";
import {ShopkeeperDataService} from "../services/shopkeeper-data-service";

@Component({
  selector: 'shopkeeper',
  templateUrl: './shopkeeper.component.html'
})

export class ShopkeeperComponent{
  shopkeepers : Shopkeeper[];
  search: string;
  constructor(private shopkeeperDataService: ShopkeeperDataService, private router: Router){}

  ngOnInit(){
    this.shopkeeperDataService.getShopkeeperData()
      .subscribe(shopkeepers => this.shopkeepers = shopkeepers,
        (error : Error ) => {
          if (error.message === 'UnAuthorize'){
            this.router.navigate(['login'],{queryParams:{source:'shopkeeper'}});
          }
        });
  }

  onSearch(){
    this.shopkeeperDataService.findShopkeeper(this.search)
      .subscribe(shopkeepers => this.shopkeepers = shopkeepers,
        (error : Error ) => {
          if (error.message === 'UnAuthorize'){
            this.router.navigate(['login'],{queryParams:{source:'shopkeeper'}});
          }
        });
  }
}
