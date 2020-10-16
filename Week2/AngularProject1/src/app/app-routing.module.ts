import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route} from '@angular/router';
import {SignupComponent} from './signup/signup.component';

import {RouterModule, Route} from '@angular/router';


var routes : Route[]= [{path: 'login',component : SignupComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
