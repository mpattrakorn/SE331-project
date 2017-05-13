import { LoginComponent } from './login.component';
import {Routes, RouterModule} from "@angular/router";
import {FileNotFoundComponent} from "../filenotfound/file-not-found.component";
import {NgModule} from "@angular/core";
/**
 * Created by CAMT on 2/17/2017.
 */
const loginRoutes: Routes = [
{path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class LoginRoutingModule {

}
