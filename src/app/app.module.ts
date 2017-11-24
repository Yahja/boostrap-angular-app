import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgMenuTopComponent } from './ng-menu-top/ng-menu-top.component';
import { NgbCarouselComponent } from './ngb-carousel/ngb-carousel.component';
import { NgbWhyusComponent } from './ngb-whyus/ngb-whyus.component';
import { NgbAboutusComponent } from './ngb-aboutus/ngb-aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    NgMenuTopComponent,
    NgbCarouselComponent,
    NgbWhyusComponent,
    NgbAboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, JsonpModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
