import * as firebase from 'firebase';
import { error } from '@angular/compiler/src/util';
import { stringify } from 'querystring';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthService{
    errorMessage: string;
  token:string;
  account:boolean;
  iscanvas:boolean;

  constructor (private router: ActivatedRoute, private route: Router){
      this.account=false;
      this.iscanvas=false;
     
}
 
signupUser(email: string, password: string){
    
firebase.auth().createUserWithEmailAndPassword(email,password)

.then(
    response => {
        this.account=true
       this.route.navigate(["examples/login"])})
       
       .catch(
        error => console.log(error)
        
    );


    

}
geterrormessage(){

    return this.errorMessage;
}

signinUser(email: string ,password:string){

firebase.auth().signInWithEmailAndPassword(email,password)
.then(
    response => {
       this.route.navigate(["examples/landing"])
        firebase.auth().currentUser.getIdToken()
        .then(
            (token:string) => this.token=token
        );
    }
)
.catch(
    error => console.log(error)
);

}
getToken(){

     firebase.auth().currentUser.getIdToken()
.then  ( 
     (token:string) => this.token=token
);
return this.token;
}

isAuthenticated(){

    return this.token !=null; 
}
logout(){

    firebase.auth().signOut();
    this.token = null;
}
issignedUp(){

  return this.account;
}
background;

settemplate(path:string){
this.background=path;

   

}

gettemplate(){

    return this.background;
}

resettemplate(){

    this.background=null;
}


canvas(){

this.iscanvas=true;


}

now(){

    return this.iscanvas;
}

resetcanvas(){

    this.iscanvas=false;
    
    }

}