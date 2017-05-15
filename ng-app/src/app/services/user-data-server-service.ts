import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Rx";
import {AuthenticationService} from './authentication.service';
import {User} from '../user/user';


@Injectable()
export class UserDataServerService {
  constructor(private http: Http, private authenticationService: AuthenticationService) {
  }

  private headers = new Headers({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + this.authenticationService.getToken()
  });

  serverPath: String = 'http://localhost:8080/'

  getUserData() {
    let userArray: User[];
    return this.http.get(this.serverPath + 'user')
      .map(res => res.json())
      .catch((error: any) => {
        return Observable.throw(new Error('UnAuthorize'));
      });

  }

  getUser(id: number) {
    let user: User;
    return this.http.get(this.serverPath + 'user/' + id)
      .map((res: Response) => {
        if (res) {
          if (res.status === 200) {
            let user: User = res.json();
            return user;
          }
          if (res.status === 204) {
            return null;
          }
        }
        return null;
      })
      .catch((error: any) => {
        if (error.status === 500) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 400) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 409) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 406) {
          return Observable.throw(new Error(error.status));
        }
        return error
      });
  }

  findUser(search: string) {
    let user: User;
    let params: URLSearchParams = new URLSearchParams();
    params.set('search', search);
    return this.http.get('http://localhost:8080/users/', {headers: this.headers, search: params})
      .map(res => res.json());

  }


  addUser(user: User, file: any) {
    let formData = new FormData();
    let fileName: string;

    formData.append('file', file);
    return this.http.post(this.serverPath + 'product/image', formData)
      .flatMap(filename => {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'post'});
        let body = JSON.stringify(user);
        return this.http.post(this.serverPath + 'user', body, options)
          .map(res => {
            return res.json()
          })
          .catch((error: any) => {
            return Observable.throw(new Error(error.status))
          })
      })


  }
}
