import {Component} from '@angular/core'
import {Product} from '../Product/Product';

Component({
  selector : 'cart',
  templateUrl : './cart.component.html',
})

export class CartComponent{

  ngOnInit(){}

  item: Product[] = [];


}
