import {Component,ElementRef, Input, ViewChild} from '@angular/core';
import {Transaction} from '../transaction';
import {Router} from "@angular/router";

@Component({
  selector: 'addTransaction',
  templateUrl: './transaction.add.component.html'
})

export class TransactionAddComponent{
  transaction: any = {};

  constructor(private transactionDataServerService: TransactionDataServerService, private router: Router ){}

  ngOnInit() {}

  

}
