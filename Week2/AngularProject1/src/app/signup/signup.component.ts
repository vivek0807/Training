import { Component, Input, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 user={
   name:"",
   email:'',
  password:''
   }

  @Input() getEmail;
  @Input() getPassword;
  click(){
    console.log(this.user);
  }
  ngOnInit(): void {
    console.log(this.getEmail,this.getPassword);
  }

}
