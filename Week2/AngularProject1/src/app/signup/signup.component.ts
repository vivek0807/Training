import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonService} from '../common.service';

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

  constructor(private commonService: CommonService) {
  }
 /* click(){
    console.log(this.user);

  }*/
  // tslint:disable-next-line:typedef

  check(){
    if(this.user.email= "test" )
    {this.commonService.isuserLoggedin= true;}
    console.log("Clicked");
  }
  ngOnInit(): void {
    console.log(this.getEmail,this.getPassword);
  }


}
