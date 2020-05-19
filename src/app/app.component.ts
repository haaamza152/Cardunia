import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import * as firebase from 'firebase';
import { AuthService } from 'app/auth/auth.service';
import { SidenavComponent1 } from './canvas/Components/sidenav/sidenav.component';
import { CanvasComponent } from './canvas/Components/canvas/canvas.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;

 
iscanvas:boolean;
    isMenuOpen = true;
    contentMargin = 240;
  
  photoURL:string;
  
  @ViewChild(CanvasComponent) canvasObj: CanvasComponent;
  
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor( public authService : AuthService,private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {

        this.photoURL="assets/img/bg1.jpg";
        this.iscanvas=this.authService.now();

        this.authService.resetcanvas();

        console.log(this.iscanvas)
    }
    ngOnInit() {

        firebase.initializeApp({
            apiKey: "AIzaSyBT1ktCFm_BCgWeKpN_fjhfan_HeU-luzs",
            authDomain: "cardunia-faae9.firebaseapp.com"
        });

        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }else{
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();

            this.renderer.listen('window', 'scroll', (event) => {
                const number = window.scrollY;
                var _location = this.location.path();
                _location = _location.split('/')[2];

                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });



    }

    logout(){

        this.authService.logout();
      }

     
}
