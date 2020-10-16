import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route} from '@angular/router';
import {SignupComponent} from './signup/signup.component';

import {RouterModule} from '@angular/router';
import {AddproductComponent} from './addproduct/addproduct.component';
import {HomeComponent} from './home/home.component';
import {PlistComponent} from './plist/plist.component';


var routes : Route[]= [{path:'',component : HomeComponent},
  {path: 'login', component : SignupComponent},
  {path: 'addprod', component : AddproductComponent},
  {path: 'list', component: PlistComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
