import { LoginRoutingModule } from './login/login-routing.module';
import { UserDataService } from './services/user-data.service';
import { UserComponent } from './user/list/user.component';
import { UserRoutingModule } from './user/user-routing.module';
import { RegisterComponent } from './user/register/user.register.component';
import { LoginComponent } from './login/login.component';
import { ProductDataServerService } from './services/product-data-server.service';
import { FileNotFoundComponent } from './filenotfound/file-not-found.component';
import { ProductRoutingModule } from './Product/Product-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TimeComponent} from './time/time.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ProductComponent} from './Product/add/Product.add.component';
import {ProductDataService} from './services/product-data.service';
import {ProductDataFileService} from './services/product-data-file.service';
import {InformationComponent} from './Product/information/information.component';
import {infoListComponent} from './Product/infoList/infoList.component';
import {AppRoutingModule} from "./app-routing.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AuthenticationService} from "./services/authentication.service";
import {SelectModule} from 'ng2-select';
import {CartComponent} from "./cart/cart.component";


@NgModule({
 declarations: [ AppComponent,
				TimeComponent,
				ProductComponent,
				InformationComponent,
				infoListComponent,
				MenuComponent,
				FileNotFoundComponent,
				LoginComponent,
				RegisterComponent,
				UserComponent,
        CartComponent],
 imports: [BrowserModule , FormsModule, HttpModule, UserRoutingModule,
   LoginRoutingModule,ProductRoutingModule, AppRoutingModule, SelectModule],
 bootstrap: [AppComponent],
 providers: [ProductDataServerService, UserDataService, {provide: LocationStrategy, useClass: HashLocationStrategy},ProductDataService, AuthenticationService]
})
export class AppModule {}
