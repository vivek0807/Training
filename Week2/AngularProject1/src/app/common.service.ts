import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isuserLoggedin: boolean;
  productid : any;
  name: any;
  price : any;
  image : any;
  constructor() { }
}
