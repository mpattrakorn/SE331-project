import {Component} from '@angular/core';
import {Transaction} from '../transaction';
import {ActivatedRoute, Params} from "@angular/router";
import {TransactionDataServerService} from "../../services/transaction-data-server-service";

@Component({
  selector: 'showTransactionInfo',
  templateUrl: './transaction.component.html'
})

export class TransactionInfoComponent{

  constructor(private route : ActivatedRoute, private transactionDataServerService: TransactionDataServerService){}
  transaction: Transaction;
  isNoData: boolean;
  ngOnInit(){
    this.isNoData = false;

    this.route.params
      .switchMap((params:Params) =>  this.transactionDataServerService.getTransaction(+params['id']))
      .subscribe((transaction: Transaction) => {
          if (transaction !== null)
            this.transaction = transaction;
          else
            this.isNoData = true;
        }
      );
  }


}
