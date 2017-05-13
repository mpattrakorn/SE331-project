import {Component,ElementRef, Input, ViewChild} from '@angular/core';
import {User} from '../user';
import {Router} from "@angular/router";
import {UserDataService} from "../../services/user-data.service";

@Component({
  selector: 'register',
  templateUrl: './user.register.component.html',
  styleUrls: ['./user.register.component.css']
})
export class RegisterComponent {
  user: any = {};

  constructor(private userDataService: UserDataService, private router: Router) {
  };

  ngOnInit() {
    this.user = new User();
  }


  @ViewChild('fileInput') inputEl: ElementRef;
  addUser(user: User) {
    let result: User;
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;

    this.userDataService.addUser(user)
      .subscribe(resultUser => {
        result = resultUser
        if (result != null){
          this.router.navigate(['/list']);
        }else{
          alert("Error in registration");
        }
      });
  }

}
