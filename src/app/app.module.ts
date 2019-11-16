import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GalleriaModule} from 'primeng/galleria';
import {NgImageSliderModule} from 'ng-image-slider';
import {AcademyModule} from './Academy/academy.module';
import {RouterModule} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';







@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GalleriaModule,
    AcademyModule,
    RouterModule,

    BrowserAnimationsModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
