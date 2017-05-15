import {Component, OnInit} from '@angular/core'
import {Product} from '../Product/Product';
import {ProductDataService} from "../services/product-data.service";

@Component({
  selector : 'cart',
  templateUrl : './cart.component.html'
})

export class CartComponent implements OnInit{

  cartItems : Product[] = [];
  constructor(private productDataService: ProductDataService ){}

  getItemForCart(): void{
    this.cartItems = this.productDataService.getSelectedItems();
  }

  ngOnInit():void{
    this.getItemForCart();
  }

  removeItemFromCart(id:number){
    this.productDataService.removeItem(id);
  }

}
