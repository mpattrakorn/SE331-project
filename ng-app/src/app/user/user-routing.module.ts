import { UserComponent } from './list/user.component';
import { RegisterComponent } from './register/user.register.component';
import {Routes, RouterModule} from "@angular/router";
import {FileNotFoundComponent} from "../filenotfound/file-not-found.component";
import {NgModule} from "@angular/core";
/**
 * Created by CAMT on 2/17/2017.
 */
const userRoutes: Routes = [
{path: 'userlist', component: UserComponent},
{path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class UserRoutingModule {

}
