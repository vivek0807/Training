import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 title = 'product';
 @Input() pname;
 @Input() pprice;

}
