import {Component, DoCheck, Input, OnInit} from '@angular/core';
import dummyproducts from '../dummydata';
import {HttpClient} from '@angular/common/http';
import {CommonService} from '../common.service';
@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistComponent implements OnInit, DoCheck {
  data= [];
  check(){

  }

  ngDoCheck(): void {

  }

  constructor(private commonService: CommonService, private http: HttpClient) { }
  ngOnInit(): void {
    var url= "https://apibyashu.herokuapp.com/api/allproducts";

    this.http.get(url).subscribe((response)=>{
      console.log("response from api",response)
      this.data=response["data"];
    },(error)=>{
      console.log("error from api",error);
    })
  }

}
