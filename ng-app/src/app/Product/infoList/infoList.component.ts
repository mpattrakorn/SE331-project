import {ProductDataServerService} from './../../services/product-data-server.service';
import {Router} from '@angular/router';
import {
  Component, OnInit
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
import { Observable } from 'rxjs';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'showInfoList',
  templateUrl: './infoList.component.html',
  styleUrls: ['./infoList.component.css']
})
export class infoListComponent implements OnInit{

  products: Product[] = [];
  search: string;
  searchPrice1: number;
  searchPrice2: number;

  storeItems: Product[] = [];
  errorMessage: string;

  constructor(private productDataServerService: ProductDataServerService,
              private router: Router,private productDataService: ProductDataService,private authenService:AuthenticationService) {
  }

  ngOnInit(): void {
    this.productDataServerService.getProductData()
      .subscribe(resultProduct => {
        this.products = resultProduct;
      });
    this.getStoreItems();
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


  getStoreItems(){
    this.productDataService.getItems().subscribe(
      data=>this.storeItems = data,
      error => this.errorMessage =<any>error
    );
  }

  addItemInCart(product){
    this.productDataService.addItem(product);
  }

  hasRole(role:string){
    return this.authenService.hasRole(role);
  }

  noRole(role:string){
    return this.authenService.noRole(role);
  }

  removeItem(id:number){
    return this.productDataServerService.removeProduct(id);
  }

}
