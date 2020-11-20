import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BookService {
//private http:HttpClient
  constructor(private http:HttpClient ) { 
    //this.http = http;
  }

  getBooksByTitle(title: string) {
    return this.http.get(`http://localhost:3000/catalog/title/${title}`)      
  }
  addToCart(title) {
     return this.http.get(`http://localhost:3000/cart/add/${title}`)   
  }
  showCart() {
     return this.http.get(`http://localhost:3000/cart/view`)   
  }
  checkout() {
     return this.http.get(`http://localhost:3000/cart/checkout`)   
  }
}
