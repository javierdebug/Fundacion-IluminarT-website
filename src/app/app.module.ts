import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { StyleClassModule } from 'primeng/styleclass'
import {GMapModule} from 'primeng/gmap';
import { RippleModule } from 'primeng/ripple'
import { ButtonModule } from 'primeng/button'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from '@angular/material/sidenav';
// import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'

import { AppComponent } from './app.component';
import { Hero1Component } from './components/hero1/hero1.component';
import { Hero2Component } from './components/hero2/hero2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    Hero1Component,
    Hero2Component,
    NavbarComponent,
    FeatureComponent,
    FooterComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StyleClassModule,
    RippleModule,
    ButtonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    GMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
