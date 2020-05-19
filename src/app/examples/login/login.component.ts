import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { FormGroup,ReactiveFormsModule, FormControl, Validators, NgForm } from '@angular/forms';
import * as firebase from 'firebase/app';
import { AuthService } from 'app/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    data : Date = new Date();
    focus;
    focus1;
    error$: Observable<string | null>;

    constructor(private authService: AuthService ) { }

    
    ngOnInit() {

      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
      });
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
    signin( form: NgForm){

      const email =form.value.email;
      const password=form.value.password;
this.authService.signinUser(email,password);


    }

}
