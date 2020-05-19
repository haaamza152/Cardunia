import { Component, OnInit,ViewChild } from '@angular/core';
import * as Rellax from 'rellax';
import { AuthService } from 'app/auth/auth.service';
import { RouterModule } from '@angular/router';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {MatSidenav} from '@angular/material/sidenav';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  data : Date = new Date();
  focus;
  focus1;
  photoURL:  string;
  contentMargin = 240;
  //options: FormGroup;
  reason = '';
  isMenuOpen = true;
 
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  myControl = new FormControl();
  options: string[] = ['Flyer', 'poster', 'Logos'];
  filteredOptions: Observable<string[]>;



  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }



  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));




  
  constructor(public authService : AuthService, private route:RouterModule) {

    this.photoURL="assets/img/bg1.jpg";
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


  

  ngOnInit() {
    



    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
 


logout(){

  this.authService.logout();
}

  images = [
    {
   name:'Flyer',
      img: 'assets/img/bg8.jpg'
    },
    {
      name:'poster',
      img: 'assets/img/bg1.jpg'
    },
    {
      name:'Flyer',
      img: 'assets/img/login.jpg'
    },
    {
      name:'something',
      img: 'assets/img/bg4.jpg'
    },
    {
      name:'Flyer',
      img: 'assets/img/bg3.jpg'
    },
    {
      name:'Flyer',
      img: 'assets/img/bg11.jpg'
    }
  ];
  slides: any = [[]];
  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

}




  

