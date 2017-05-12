import {Routes, RouterModule} from "@angular/router";
import {infoListComponent} from "./infoList/infoList.component";
import {InformationComponent} from "./information/information.component";
import {ProductComponent} from "./add/Product.add.component";
import {FileNotFoundComponent} from "../filenotfound/file-not-found.component";
import {NgModule} from "@angular/core";
/**
 * Created by CAMT on 2/17/2017.
 */
const productRoutes: Routes = [
{path: 'info/:id', component: InformationComponent},
{path: 'add', component: ProductComponent},
{path: 'list', component: infoListComponent},
{
  path: '',
    redirectTo: '/add',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProductRoutingModule {

}
