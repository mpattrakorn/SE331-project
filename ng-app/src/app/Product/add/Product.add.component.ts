import { Router } from '@angular/router';
import { ProductDataServerService } from './../../services/product-data-server.service';
import {
    Component,ElementRef, Input, ViewChild
} from '@angular/core';
import {
    Product
} from '../Product';

import {
    ProductDataService
} from '../../services/product-data.service';

@Component({
    selector: 'addinfo',
    templateUrl: './Product.add.component.html',
    //styleUrls: ['app/students/students.component.css']
})
export class ProductComponent {


   products: any = {};

    //productArr: Product[];

    constructor(private productDataServerService: ProductDataServerService, private router: Router){}

    // ngOnInit() {
    //     console.log(this.products);
    // }

  @ViewChild('productImage') inputEl: ElementRef;
  addProduct() {
    let result: Product;
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;

    this.productDataServerService.addProduct(this.products,inputEl.files.item(0))
      .subscribe(resultProduct => {
        result = resultProduct
        if (result != null){
          this.router.navigate(['/list']);
        }else{
          alert("Error in adding the product");
        }
      });
  }



}