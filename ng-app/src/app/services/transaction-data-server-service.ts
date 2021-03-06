import { Injectable } from '@angular/core';
import { Transaction } from '../transaction/transaction'
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { AuthenticationService } from './authentication.service';

@Injectable()
export class TransactionDataServerService {
  constructor(private http: Http, private authenticationService: AuthenticationService) {}

  private headers = new Headers({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + this.authenticationService.getToken()
  });

  serverPath: String = 'http://localhost:8080/'

  getTransactionData() {
    let transactionArray: Transaction[];
    return this.http.get(this.serverPath + 'transaction')
      .map(res => res.json())
      .catch((error: any) => {
        return Observable.throw(new Error('UnAuthorize'));
      });
  }

  getTransaction(id: number) {
    let transaction: Transaction;
    return this.http.get(this.serverPath + 'transaction/' + id)
      .map((res: Response) => {
        if (res) {
          if (res.status === 200) {
            let transaction: Transaction = res.json();
            transaction.image = this.serverPath + "transaction/images/" + transaction.image;
            return transaction;
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

  findTransaction(search: string) {
    let transaction: Transaction;
    let params: URLSearchParams = new URLSearchParams();
    params.set('search', search);
    return this.http.get('http://localhost:8080/transaction/', { headers: this.headers, search: params })
      .map(res => res.json());

  }


  addTransaction(transaction: Transaction, file: any) {
    let formData = new FormData();
    let fileName: string;

    formData.append('file', file);
    return this.http.post(this.serverPath + 'transaction/image', formData)
      .flatMap(filename => {
        transaction.image = filename.text();
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: 'post' });
        let body = JSON.stringify(transaction);
        return this.http.post(this.serverPath + 'transaction', body, options)
          .map(res => {
            return res.json()
          })
          .catch((error: any) => {
            return Observable.throw(new Error(error.status))
          })
      })
  }

}
