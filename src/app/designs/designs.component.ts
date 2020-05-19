import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})
export class DesignsComponent implements OnInit {

  data : Date = new Date();
  Name :string;
  photoURL :string;
  
  ground;
  constructor(private authService: AuthService) { 

    this.photoURL="assests/img/icon.jpg"
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
  onclick(path:string){
    this.ground=path;
    console.log(path);
    
    this.authService.settemplate(path);
    ;
    
      }

}
