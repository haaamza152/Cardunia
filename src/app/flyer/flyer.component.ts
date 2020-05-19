import { Component, OnInit, ViewChild, Input, Output,EventEmitter } from '@angular/core';
import { CanvasComponent } from 'app/canvas/Components/canvas/canvas.component';
import { SidenavComponent1 } from 'app/canvas/Components/sidenav/sidenav.component';
import { AppComponent } from 'app/app.component';
//import { EventEmitter } from 'protractor';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-flyer',
  templateUrl: './flyer.component.html',
  styleUrls: ['./flyer.component.css']
})
export class FlyerComponent implements OnInit {
  @Output() pathsent= new EventEmitter<{path:string}>();
  @ViewChild(CanvasComponent) canvasObj: CanvasComponent;
  data : Date = new Date();
  Name :string;
  photoURL :string;
  
 @Input() ground;
  constructor(private authService: AuthService) { 

    this.photoURL="assests/img/flyer.jpg"
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

  ngOnInit(): void {
  }

  receivedChildMessage: string;
getMessage(message: string) {
    this.receivedChildMessage = message;

if(this.receivedChildMessage=="flyer"){
  this.photoURL="assests/img/flyer.jpg"
  this.Name=this.receivedChildMessage;
}
  }
  selectBackground(back: string){
    console.log(back);
    this.ground = back;
  }

  onclick(path:string){
this.ground=path;
console.log(path);

this.authService.settemplate(path);
;

  }

  auth(){

    this.authService.canvas();
  }


}
