import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from '../common.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 title = 'product';
 @Input() pname;
 @Input() pprice;
 @Input() pimage;
 @Input() productid;

 constructor( private commonService : CommonService) {
 }
 addtoCart(){
   this.commonService.name=this.pname;
   this.commonService.price=this.pprice;
   this.commonService.productid=this.productid;
   this.commonService.image=this.pimage;

   console.log(this.commonService.name,this.commonService.productid);
   alert("The product has been added, You can navigate to cart");
 }
}
