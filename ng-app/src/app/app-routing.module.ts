import {Routes, RouterModule} from "@angular/router";
import {infoListComponent} from "./Product/infoList/infoList.component";
import {InformationComponent} from "./Product/information/information.component";
import {ProductComponent} from "./Product/add/Product.add.component";
import {FileNotFoundComponent} from "./filenotfound/file-not-found.component";
import {NgModule} from "@angular/core";

/**
 * Created by CAMT on 2/17/2017.
 */
const appRoutes: Routes = [
  {path: '**', component: FileNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
