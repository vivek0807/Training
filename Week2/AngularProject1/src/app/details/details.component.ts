import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pid="";
  image:any;
  name:any;
  price:any;
  data :any;
  constructor(public route : ActivatedRoute, public http:HttpClient,public commonService :CommonService) {
    console.log(this.route.snapshot);
    this.pid=this.route.snapshot['params']['pid'];
    var url="https://apibyashu.herokuapp.com/api/product/"+this.pid;
            //removefromcart -post -{email,pid}
    var queryurl="/productdetails?"+"productid="+this.pid;

    this.image=commonService.image;
    this.name=commonService.name;
    this.price=commonService.price;

    console.log(this.pid);
    this.http.get(url).subscribe((response)=>{
      console.log(response["data"]);

      this.data=response["data"];

    },(error)=>{
      console.log("Error in function");
    });
  }

  Remove(){
    var url="https://apibyashu.herokuapp.com/api/removefromcart";
    this.http.post(url,{ 'email' : 'vivekk.0807@gmail.com','productid' :this.pid}).subscribe((response)=>{
        console.log(response);
        alert("Your Item has been removed");
      },error => {
        console.log("Error occured");
      }
    );
  }
  ngOnInit(): void {
  }

}
