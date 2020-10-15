import {Component, Input, OnInit} from '@angular/core';
import dummyproducts from '../dummydata';
@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistComponent implements OnInit {
  dummyproducts= dummyproducts;
  constructor() { }
  ngOnInit(): void {
  }

}
