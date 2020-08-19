import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
