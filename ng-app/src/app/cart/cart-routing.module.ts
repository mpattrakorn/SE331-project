import {Routes, RouterModule} from "@angular/router";
import {FileNotFoundComponent} from "../filenotfound/file-not-found.component";
import {NgModule} from "@angular/core";
import {CartComponent} from './cart.component';
/**
 * Created by CAMT on 2/17/2017.
 */
const cartRoutes: Routes = [
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(cartRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CartRoutingModule {

}
