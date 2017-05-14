import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Admin} from '../admin/admin';
import 'rxjs/add/operator/map';
@Injectable()
export class AdminDataService {
  constructor(private http: Http){}
  getAdminData(){
    let adminArray:Admin[];
    return this.http.get('app/data/admin.json')
      .map(res => res.json().admin);
  }

  getAdmin(id:number){
    return null;
  }

  findAdmin(search:string){
    return null;
  }



}
