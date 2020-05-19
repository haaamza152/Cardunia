import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { FlyerComponent } from '../flyer/flyer.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 240;

photoURL:string;


  constructor(public authService : AuthService, public content:FlyerComponent, public route: RouterModule )
   {this.photoURL="assets/img/bg1.jpg"; }

  ngOnInit(): void {
  }
  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  logout(){

    this.authService.logout();
  }

 
}
