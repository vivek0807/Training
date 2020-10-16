import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

    name:any;
    brand:any;
    price:number;
    image:any;
  send(){

    console.log(this.image,this.brand,this.price,this.name);
   // var url ="https://apibyashu.herokuapp.com/api/login"// recoverpassword";//login
    var url="https://apibyashu.herokuapp.com/api/upload";
    let formData : FormData=new FormData();
    formData.append('image',this.image);
    this.http.post(url,formData).subscribe(function(response){
      console.log("response from api",response)
    },function(error){
      console.log("erroe from api",error);
    })
  }

}
