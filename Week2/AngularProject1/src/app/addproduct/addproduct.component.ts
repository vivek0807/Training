import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

      var file : any =document.getElementById('file');
    console.log(file.files[0],this.brand,this.price,this.name);
   // var url ="https://apibyashu.herokuapp.com/api/login"// recoverpassword";//login
    var url="https://apibyashu.herokuapp.com/api/upload";

    var formData : FormData=new FormData();

    formData.append('file',file.files[0]);
    var headersobj=new HttpHeaders();

    headersobj.append('Content-Type','multipart/form-data');

    this.http.post(url,formData,{headers : headersobj}).subscribe(function(response){
      console.log("response from api",response)
    },function(error){
      console.log("erroe from api",error);
    })
  }

}
