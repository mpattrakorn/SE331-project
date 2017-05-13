import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../user/user';
import 'rxjs/add/operator/map';
@Injectable()
export class UserDataService {
  constructor(private http: Http){}
  getUserData(){
    let userArray:User[];
    return this.http.get('app/data/user.json')
      .map(res => res.json().users);
  }

  getUser(id:number){
   return null;
  }

  addUser(user: User){
    return null;
  }

  findUser(search:string){
    return null;
  }

  addUserWihtAuthen(user:User){
    return null;
  }

}
