import {ProductDataServerService} from './../../services/product-data-server.service';
import {Router} from '@angular/router';
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

@Component({
  selector: 'showInfoList',
  templateUrl: './infoList.component.html',
  styleUrls: ['./infoList.component.css']
})
export class infoListComponent {

  products: Product[] = [];
  search: string;
  searchPrice1: number;
  searchPrice2: number;

  constructor(private productDataServerService: ProductDataServerService, private router: Router) {
  }

  ngOnInit() {
    this.productDataServerService.getProductData()
      .subscribe(resultProduct => {
        this.products = resultProduct;
      })
  }

  checkString(product) {
    if (product.description.length < 50) {
      return product.description;
    } else {
      return product.description.substring(0, 46) + "...";
    }
  }

  showInfo(product) {
    this.router.navigate(['/info', product.id]);
  }

  onSearch() {
    this.productDataServerService.findProduct(this.search)
      .subscribe(products => this.products = products);
  }


  addToCart(product) {

  }


}
