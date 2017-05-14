import {TransactionDataServerService} from "../../services/transaction-data-server-service";
import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {Transaction} from '../transaction';

@Component({
  selector: 'showTransactionList',
  templateUrl: './transaction.list.component.html'
})

export class TransactionListComponent{

  transactions : Transaction[] = [];
  search:string;

  constructor(private transactionDataServerService: TransactionDataServerService, private router: Router){}

  ngOnInit(){
    this.transactionDataServerService.getTransactionData()
      .subscribe(resultTransaction => {
        this.transactions = resultTransaction;
      })
  }

  showInfo(transaction){
    this.router.navigate(['/transaction',transaction.id]);
  }

  onSearch(){
    this.transactionDataServerService.findTransaction(this.search)
      .subscribe(transactions => this.transactions = transactions,
        (error : Error ) => {
          if (error.message === 'UnAuthorize'){
            this.router.navigate(['login'],{queryParams:{source:'transaction'}});
          }
        });
  }

}
