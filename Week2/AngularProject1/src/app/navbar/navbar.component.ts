import {Component, DoCheck, OnInit} from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck{
  title = 'Navbar';
  constructor(private commonService: CommonService) {

  }
  logout= false//this.commonService.isuserLoggedin;
  ngDoCheck(): void {
    if(this.commonService.isuserLoggedin)
    { this.logout= this.commonService.isuserLoggedin;}
  }

  change(){
    this.commonService.isuserLoggedin = !this.commonService.isuserLoggedin;
    this.logout= this.commonService.isuserLoggedin;

    console.log(this.commonService.isuserLoggedin);
  }

}
