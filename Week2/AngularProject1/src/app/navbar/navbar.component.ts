import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  title = 'Navbar';
  logout= false;

  change(){
    this.logout= !this.logout;
  }

}
