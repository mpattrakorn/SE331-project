import {Component, OnInit} from '@angular/core'
import {Product} from '../Product/Product';
import {ProductDataService} from "../services/product-data.service";
import {Router,ActivatedRoute} from "@angular/router";


@Component({
  selector : 'Cart',
  templateUrl : './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{


  cartItems : Product[] = [];
  constructor(private productDataService: ProductDataService ,private router: Router){}

  ngOnInit():void{
    this.getItemForCart();
  }

  getItemForCart(): void{
    this.cartItems = this.productDataService.getSelectedItems();
  }

  buyProducts():void{
    this.router.navigate(['/transactionList']);
  }

  removeItemFromCart(id:number){
    this.productDataService.removeItem(id);
  }

}
