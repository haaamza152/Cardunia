import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'app/auth/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;
  message:string;
  formal:Number;
  constructor(public authService: AuthService) {

    this.message="Email is Not Available"
    this.formal=0;
   }

  ngOnInit(): void {

    var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
  }

  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
}
signup(form: NgForm){

const email =form.value.email;
const password=form.value.password;
const name=form.value.name;
this.authService.signupUser(email,password);

}
getmessage(){
 this.message =  this.authService.geterrormessage();
}

issignedUp(){


  this.authService.issignedUp();
}


check(){
  if (this.formal!=0){
  
if (this.authService.issignedUp())
{
  return true;
}}

this.formal=1;
return false;

}


}
