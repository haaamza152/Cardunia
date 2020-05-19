import { Component, OnInit , Input, HostListener } from '@angular/core';
//import { ElementComponent } from '../element.component';
import { AuthService } from 'app/auth/auth.service';
import 'fabric';
declare let fabric;

interface Font {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
    @Input() background = '';
    canvas: any;
    text: any;
    fonts: Font[] =
      [
        {value: '0', viewValue: 'Times, "Times New Roman", serif'},
        {value: '1', viewValue: 'Helvetica, Arial, sans-serif'},
        {value: '2', viewValue: 'sans-serif'},
        {value: '3', viewValue: 'monospace'},
        {value: '4', viewValue: 'cursive'},
        {value: '5', viewValue: 'fantasy'}
      ];
      selected = 'sans-serif';

@HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Delete'){
      this.canvas.remove(this.canvas.getActiveObject());
    }
  }

  constructor(public authService : AuthService) {

    this.authService.canvas();
  }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas');
  }

  addText() {
      console.log('HI I am Here');
      this.text = new fabric.IText( 'Add Text', {

      });
      this.canvas.add(this.text);


  }

  addImage(path: string){
      fabric.Image.fromURL(path, (oImg) => {
          oImg.scale(0.2);
          this.canvas.add(oImg);
      });
  }

  changeTextFamily(){
    this.canvas.getActiveObject().fontFamily = this.selected;
  }

  changeFontWeight(type: string){
  this.canvas.getActiveObject().fontWeight = type;
  }

  changeFontSize(size: string){
    this.canvas.getActiveObject().fontSize = size;
  }

  alignText(type: string){
    this.canvas.getActiveObject().textAlign  = type;
  }

  changeFontColor(color: string){
    this.canvas.getActiveObject().fontcolor(color);
  }

 

      


  



}
