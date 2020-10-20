import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from '../common.service';
import {HttpClient} from '@angular/common/http';
import {userError} from '@angular/compiler-cli/src/transformers/util';
import {Router} from '@angular/router';

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
  sum : number;
  productid:any;
  product={
    email : "vivekk.0807@gmail.com",
    productid : "121345",
    name : "Fasttrack",
    price : 5000,
    image : "someurl"
  }
  constructor(public router : Router,private commonService : CommonService, private http: HttpClient) {

  }

  addtocart(){

   //

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
   // var url= "https://apibyashu.herokuapp.com/api/addtocart";

   /* this.http.post(url,{email:"vivekk.0807@gmail.com"}).subscribe(function(response){
      console.log("response from api",response);
      this.items=response["data"];
    },function(error){
      console.log("erroe from api",error);
    });
    console.log(this.items);*/
    this.sum=0;
    var url = "https://apibyashu.herokuapp.com/api/cart";
    this.http.post(url, {'email': 'vivekk.0807@gmail.com'}).subscribe((response)=>{
      console.log("Response from API ", response);
      this.items = response["data"];
     // let sum=0;
      console.log(this.items[0].price);
      for (let i=0 ;i<this.items.length;i++){
       this.sum+=this.items[i].price;
      }
    //  console.log("Total price "+sum);

    }, (error)=>{
      console.log("Error from API ", error);
    });

  }

  viewdetails(){
    this.router.navigate(['/productdetails/'+this.commonService.productid]);
    console.log("SENt pid",this.commonService.productid);
  }


  ngOnInit(): void {
    this.product.productid= this.commonService.productid;
    this.product.name=this.commonService.name;
    this.product.price=this.commonService.price;
    this.product.image=this.commonService.image;
    this.product.productid= this.commonService.productid;
    console.log(this.commonService);


  }

  remove(){
    console.log(this.productid);
  }

}
