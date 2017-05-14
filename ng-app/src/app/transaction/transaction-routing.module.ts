
import {FileNotFoundComponent} from "../filenotfound/file-not-found.component";
import {NgModule} from "@angular/core";
import {TransactionAddComponent} from "./add/transaction.add.component";
import {TransactionListComponent} from "./list/transaction.list.component";
import {Routes, RouterModule} from "@angular/router";
/**
 * Created by CAMT on 2/17/2017.
 */
const transactionRoutes: Routes = [
  {path: 'transaction/:id', component: TransactionAddComponent},
  {path: 'addTransaction', component: TransactionAddComponent},
  {path: 'transactionList', component: TransactionListComponent},
  {
    path: '',
    redirectTo: '/addTransaction',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(transactionRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class TransactionRoutingModule {}
