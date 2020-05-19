import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { BrowserModule } from '@angular/platform-browser';
//import { AngularFireModule } from '@angular/fire';
import { NgModule } from '@angular/core';
import {NgControl, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FlyerComponent } from './flyer/flyer.component';
//import { LandingComponent } from './examples/landing/landing.component'
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth/auth.service';
import { MaterialModule } from './material-module';
import { SidenavComponent } from './sidenav/sidenav.component';

//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CanvasComponent } from './canvas/Components/canvas/canvas.component';
import { SidenavComponent1 } from './canvas/Components/sidenav/sidenav.component';
import { LogoComponent } from './logo/logo.component';
import { PosterComponent } from './poster/poster.component';
import { TemplatesComponent } from './templates/templates.component';
import { DesignsComponent } from './designs/designs.component';



@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FlyerComponent,
        SignupComponent,
        SidenavComponent,
        SidenavComponent1,
        CanvasComponent,
        LogoComponent,
        PosterComponent,
        TemplatesComponent,
        DesignsComponent 
       
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        CommonModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        
        ExamplesModule,
        MaterialModule,
        BrowserModule,
        
    ],
    exports :[FlyerComponent],
    providers: [AuthService,FlyerComponent,SidenavComponent1],
    bootstrap: [AppComponent]
})
export class AppModule { }
