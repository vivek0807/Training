import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './LoginComponent/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import { PlistComponent } from './plist/plist.component';
import {CommonService} from './common.service';
import {HttpClientModule} from '@angular/common/http';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NewrootComponent } from './newroot/newroot.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {DiscountPipe} from './discount.pipe';
import {CommonDirective} from './common.directive';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';

//var routes : Route[]= [{path: 'login',component : SignupComponent}];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProductComponent,
    SignupComponent,
    PlistComponent,
    AddproductComponent,
    NewrootComponent,
    HomeComponent,
    DiscountPipe,
    CommonDirective,
    CartComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
