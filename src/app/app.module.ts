import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgMenuTopComponent } from './ng-menu-top/ng-menu-top.component';
import { NgbCarouselComponent } from './ngb-carousel/ngb-carousel.component';
import { NgbWhyusComponent } from './ngb-whyus/ngb-whyus.component';
import { NgbAboutusComponent } from './ngb-aboutus/ngb-aboutus.component';
import { NgbFeaturesComponent } from './ngb-features/ngb-features.component';
import { NgbLatestworkComponent } from './ngb-latestwork/ngb-latestwork.component';
import { NgbAllworksComponent } from './ngb-allworks/ngb-allworks.component';
import { NgbWebdesignComponent } from './ngb-webdesign/ngb-webdesign.component';
import { NgbBrandingComponent } from './ngb-branding/ngb-branding.component';
import { NgbGraphicComponent } from './ngb-graphic/ngb-graphic.component';
import { NgbIdentityComponent } from './ngb-identity/ngb-identity.component';
import { NgbPrintsComponent } from './ngb-prints/ngb-prints.component';

import { NgbNotfoundComponent } from './ngb-notfound/ngb-notfound.component';


const appRoutes: Routes = [
  { path: 'allworks', component: NgbAllworksComponent },
  { path: 'webdesign', component: NgbWebdesignComponent },
  { path: 'branding', component: NgbBrandingComponent },
  { path: 'graphic', component: NgbGraphicComponent },
  { path: 'identity', component: NgbIdentityComponent },
  { path: 'prints', component: NgbPrintsComponent },
  // { path: '', redirectTo: '/allworks', pathMatch: 'full' },
  { path: '**', component: NgbAllworksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NgMenuTopComponent,
    NgbCarouselComponent,
    NgbWhyusComponent,
    NgbAboutusComponent,
    NgbFeaturesComponent,
    NgbLatestworkComponent,
    NgbAllworksComponent, 
    NgbWebdesignComponent,
    NgbBrandingComponent,
    NgbGraphicComponent,
    NgbIdentityComponent,
    NgbPrintsComponent, 
    NgbNotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, JsonpModule, NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
