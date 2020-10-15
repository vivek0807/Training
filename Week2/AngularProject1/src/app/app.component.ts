import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import dummyproducts from './dummydata';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dummyproducts= dummyproducts;
  title = 'AngularProject1';
}
