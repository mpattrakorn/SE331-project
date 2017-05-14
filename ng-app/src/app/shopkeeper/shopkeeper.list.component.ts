import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {Shopkeeper} from './shopkeeper';
import {ShopkeeperDataServerService} from "../services/shopkeeper-data-server-service";

@Component({
  selector: 'shopKeeperList',
  templateUrl: './shopkeeper.list.component.html'
})

export class ShopkeeperListComponent{

  shopkeepers: Shopkeeper[]=[];
  search: string;

  constructor(private router: Router,private shopkeeperDataServerService: ShopkeeperDataServerService ){}

  ngOnInit() {
    this.shopkeeperDataServerService.getShopkeepersData()
      .subscribe(resultProduct => {
        this.shopkeepers = resultProduct;
      })
  }

  showShopkeeper(shopkeeper){
    this.router.navigate(['/shopkeeper',shopkeeper.id]);
  }

  onSearch(){
    this.shopkeeperDataServerService.findShopkeeper(this.search)
      .subscribe(shopkeepers => this.shopkeepers = shopkeepers,
        (error : Error ) => {
          if (error.message === 'UnAuthorize'){
            this.router.navigate(['login'],{queryParams:{source:'shopkeepers'}});
          }
        });
  }

}
