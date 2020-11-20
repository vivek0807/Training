import { Component } from '@angular/core';
import {BookService} from "./book.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unlocking Android';
  books=[]
  cart=[]
  constructor(private bookService: BookService) { }
  getBooksByTitle() {
    this.bookService.getBooksByTitle(this.title).subscribe((response:any)=>this.books=response)
  }
  showCart() {
    this.bookService.showCart().subscribe((response:any)=>this.cart=response)
  }
  checkout() {
    this.bookService.checkout().subscribe((response: any) => {
      alert(response.message);
      this.showCart();
    })
  }
  addToCart(title) {
    this.bookService.addToCart(title).subscribe((response: any) => {
      alert(response.message);
      this.showCart();
    })
  }

}
