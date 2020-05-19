import { NgModule } from '@angular/core';

import {
   
    MatIconModule
 
} from '@angular/material';

import {MatToolbarModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import { MatSidenavModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material';
import { MatCardModule} from '@angular/material';
import { MatAutocompleteModule} from '@angular/material';
import { MatFormFieldModule} from '@angular/material';
import { MatInputModule} from '@angular/material';
import { MatMenuModule} from '@angular/material';
import {
  
    MatGridListModule
   
 } from '@angular/material';


 import {
   
    MatExpansionModule,
    MatRippleModule,
    
    MatSelectModule
  } from '@angular/material';



@NgModule({
    
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatGridListModule,
        MatExpansionModule,
        MatRippleModule,
        
        MatSelectModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatGridListModule,
        MatExpansionModule,
        MatRippleModule,
        
        MatSelectModule
    ]    
  })
  export class MaterialModule { }