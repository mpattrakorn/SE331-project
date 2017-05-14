import {Component} from '@angular/core';
import {Admin} from "./admin";
import {Router} from "@angular/router";
import {ShopkeeperDataService} from "../services/shopkeeper-data-service";
import {AdminDataService} from "../services/admin-data-service";

@Component({
  selector: 'admin',
  templateUrl: './shopkeeper.component.html'
})

export class AdminComponent{
  admin : Admin[];
  search: string;
  constructor(private adminDataService: AdminDataService, private router: Router){}

  ngOnInit(){
    this.adminDataService.getAdminData()
      .subscribe(admin => this.admin = admin,
        (error : Error ) => {
          if (error.message === 'UnAuthorize'){
            this.router.navigate(['login'],{queryParams:{source:'admin'}});
          }
        });
  }

  onSearch(){
    this.adminDataService.findAdmin(this.search)
      .subscribe(admin => this.admin = admin,
        (error : Error ) => {
          if (error.message === 'UnAuthorize'){
            this.router.navigate(['login'],{queryParams:{source:'admin'}});
          }
        });
  }
}
