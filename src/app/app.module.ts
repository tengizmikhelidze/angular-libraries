import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgOptimizedImage} from "@angular/common";
import {AppInitializerModule} from "../app-initializer/app-initializer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppInitializerModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgOptimizedImage,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
