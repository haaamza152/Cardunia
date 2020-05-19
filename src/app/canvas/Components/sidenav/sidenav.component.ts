import { Component, OnInit, ViewChild, Input, Injectable} from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FlyerComponent } from 'app/flyer/flyer.component';
import { AuthService } from 'app/auth/auth.service';


@Injectable()
@Component({
  selector: 'app-sidenav1',
  templateUrl: './sidenav.component.html',


  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent1 implements OnInit {
  @ViewChild(CanvasComponent) canvasObj: CanvasComponent;
 
  @Input() CanvasBackground;

  noBackGround = '../../../assets/Backgrounds/noBack.jpg';

  imagePaths: string[] = ['assets/img/a/6.jpg','assets/img/a/5.jpg','assets/img/a/4.jpg','assets/img/a/3.jpg','assets/img/a/2.jpg','assets/img/a/1.jpg','assets/img/bg11.jpg','assets/img/bg3.jpg','assets/img/bg4.jpg','assets/img/login.jpg','assets/img/bg1.jpg','assets/img/bg8.jpg','../../../assets/images/1.svg', '../../../assets/images/2.svg', '../../../assets/images/3.svg', '../../../assets/images/4.svg', '../../../assets/images/5.svg', '../../../assets/images/abc.jpg', '../../../assets/images/def.jpg', '../../../assets/images/ghi.jpg', '../../../assets/images/jkl.jpg'];

  backgrounds: string[] = ['assets/img/a/7.jpg','assets/img/a/8.jpg','assets/img/a/9.jpg','assets/img/a/10.jpg','assets/img/a/11.jpg','assets/img/a/12.jpg','../../../assets/Backgrounds/1.jpg', '../../../assets/Backgrounds/2.jpg', '../../../assets/Backgrounds/11.jpg', '../../../assets/Backgrounds/14.jpg'];

  canvasImages: string[] = [];
  canvasBackground;

  

  constructor(public flyer:FlyerComponent,public authService : AuthService) {
   // console.log(this.flyer.ground)
//this.canvasBackground=this.flyer.ground;

this.canvasBackground=authService.gettemplate();
authService.resettemplate();

  }

  appear(path: string){
    console.log(path);
    this.canvasObj.addImage(path);
  }

  selectBackground(back: string){
    console.log(back);
    this.canvasBackground = back;
  }

  removeBack(){
    this.canvasBackground = '';
  }

  createText(){
    this.canvasObj.addText();
  }


  ngOnInit(): void {
  }

  onclick(path:string){
   
this.canvasBackground=path;

console.log(path);
  }


}
