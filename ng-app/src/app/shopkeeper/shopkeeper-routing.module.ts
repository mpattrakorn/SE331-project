import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ShopkeeperListComponent} from "./shopkeeper.list.component";
/**
 * Created by CAMT on 2/17/2017.
 */
const shopkeeperRoutes: Routes = [
  {path: 'shopkeeperList', component: ShopkeeperListComponent},
  {
    path: '',
    redirectTo: '/add',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(shopkeeperRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ShopkeeperRoutingModule {

}
