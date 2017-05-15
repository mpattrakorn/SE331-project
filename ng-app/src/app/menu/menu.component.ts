import { Router } from '@angular/router';
import { ProductDataService } from './../services/product-data.service';
import { Product } from './../Product/Product';
import { Component } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls:['./menu.component.css']
})

export class MenuComponent {

  constructor(private router: Router,
              private authenService:AuthenticationService) {
  }


  hasRole(role:string){
    return this.authenService.hasRole(role);
  }

  noRole(role:string){
    return this.authenService.noRole(role);
  }


  logout(){
    this.authenService.logout();
  }

}
