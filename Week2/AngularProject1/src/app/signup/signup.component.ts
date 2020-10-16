import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonService} from '../common.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
   name:"Vivek",
   email:'',
  password:''
   }

  @Input() getEmail;
  @Input() getPassword;

  constructor(private commonService: CommonService, private http: HttpClient) {
  }
 /* click(){
    console.log(this.user);

  }*/
  // tslint:disable-next-line:typedef

  check(){
    if(this.user.email== 'test' )
    {this.commonService.isuserLoggedin= true;}
    console.log("Clicked");
    console.log("signup "+this.user.email,this.user.name,this.user.password);
   /* var url ="https://apibyashu.herokuapp.com/api/login"// recoverpassword";//login

    this.http.post(url,this.user).subscribe(function(response){
      console.log("response from api",response)
    },function(error){
      console.log("erroe from api",error)
    })*/
  }
  ngOnInit(): void {
    console.log(this.getEmail,this.getPassword);
  }


}
