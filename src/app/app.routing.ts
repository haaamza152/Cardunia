import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { FlyerComponent } from './flyer/flyer.component';
import { SignupComponent } from './signup/signup.component';
//import { IconComponent } from './icons/flyer.component';
import { SidenavComponent1 } from './canvas/Components/sidenav/sidenav.component';

import { LogoComponent } from './logo/logo.component';

import { PosterComponent } from './poster/poster.component';
import { TemplatesComponent } from './templates/templates.component';
import { DesignsComponent } from './designs/designs.component';



const routes: Routes =[
    { path: '', redirectTo: 'examples/landing', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'signup',          component: SignupComponent },
    { path: 'flyer',          component: FlyerComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'canvas',          component: SidenavComponent1 },
    { path: 'logos',          component: LogoComponent },
    { path: 'poster',          component: PosterComponent },
    { path: 'templates',          component: TemplatesComponent },
    { path: 'designs',          component: DesignsComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
