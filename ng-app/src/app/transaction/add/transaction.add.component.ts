import {Component,ElementRef, Input, ViewChild} from '@angular/core';
import {Transaction} from '../transaction';
import {Router} from "@angular/router";
import {TransactionDataServerService} from "../../services/transaction-data-server-service";

@Component({
  selector: 'addTransaction',
  templateUrl: './transaction.add.component.html'
})

export class TransactionAddComponent{

  transactions: any = {};

  constructor(private transactionDataServerService: TransactionDataServerService, private router: Router ){}

  ngOnInit() {}

  @ViewChild('transactionImage') inputEl: ElementRef;
  addTransaction(){
    let result: Transaction;
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;

    this.transactionDataServerService.addTransaction(this.transactions,inputEl.files.item(0))
      .subscribe(resultTransaction => {
        result = resultTransaction
        if(result != null){
          this.router.navigate(['/transactionList']);
        }else{
          alert("Error in adding the transaction");
        }
      })
  }
}
