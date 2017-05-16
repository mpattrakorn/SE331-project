import { ProductDataServerService } from './../../services/product-data-server.service';
import {
    Component
} from '@angular/core';
import {
    Product
} from '../Product';
import {
    ProductDataService
}from '../../services/product-data.service';
import{
    ProductDataFileService
}from '../../services/product-data-file.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'showInfo',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.css']
})
export class InformationComponent {

   constructor(private route: ActivatedRoute, private productDataServerService: ProductDataServerService, private productDataService:ProductDataService) {}
   product: Product;
   isNoData:boolean;
   ngOnInit() {
      this.isNoData = false;

      this.route.params
        .switchMap((params:Params) =>  this.productDataServerService.getProduct(+params['id']))
        .subscribe((product: Product) => {
          if (product !== null)
            this.product = product;
          else
            this.isNoData = true;
        }
        );

  }

  cartItems : Product[] = [];
  getItemForCart(): void{
    this.cartItems = this.productDataService.getSelectedItems();
  }



  addItemInCart(id:number):void{
    this.productDataService.addItem(id);
  }

}
