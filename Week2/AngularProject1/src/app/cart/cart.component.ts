import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from '../common.service';
import {HttpClient} from '@angular/common/http';
import {userError} from '@angular/compiler-cli/src/transformers/util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  email:any;
  items=[];
  pname :any;
  pprice:any;
  pimage:any;
  product={
    email : "vivekk.0807@gmail.com",
    productid : "121345",
    name : "Fasttrack",
    price : 5000,
    image : "someurl"
  }
  constructor(private commonService : CommonService, private http: HttpClient) {

  }

  addtocart(){

    this.product.email= this.email;
    var url= "https://apibyashu.herokuapp.com/api/addtocart";
   // console.log(this.productid);
    this.http.post(url,this.product).subscribe(function(response){
      console.log("response from api",response);
    },function(error){
      console.log("erroe from api",error);
    })
    this.viewall();
  }
  viewall(){
    var url= "https://apibyashu.herokuapp.com/api/addtocart";

   /* this.http.post(url,{email:"vivekk.0807@gmail.com"}).subscribe(function(response){
      console.log("response from api",response);
      this.items=response["data"];
    },function(error){
      console.log("erroe from api",error);
    });
    console.log(this.items);*/
    var url = "https://apibyashu.herokuapp.com/api/cart";
    this.http.post(url, {email: this.email}).subscribe((response)=>{
      console.log("Response from API ", response);
      this.items = response["data"];
    }, (error)=>{
      console.log("Error from API ", error);
    });

  }
  ngOnInit(): void {
    this.product.productid= this.commonService.productid;
    this.product.name=this.commonService.name;
    this.product.price=this.commonService.price;
    this.product.image=this.commonService.image;
    this.product.productid= this.commonService.productid;
    console.log(this.commonService);


  }

}
