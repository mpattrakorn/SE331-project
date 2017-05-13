import {Component} from '@angular/core';
import {User} from '../user';
import {UserDataService} from "../../services/user-data.service";
import {Router} from "@angular/router";


@Component({
  selector: 'users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[];
  search:string;
  constructor(private userDataService: UserDataService, private router: Router ) {
  }

  ngOnInit() {
    this.userDataService.getUserData()
      .subscribe(users => this.users = users,
        (error : Error ) => {
          if (error.message === 'UnAuthorize'){
            this.router.navigate(['login'],{queryParams:{source:'user'}});
          }
        });
  }

}
