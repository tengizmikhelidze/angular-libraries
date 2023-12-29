import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgOptimizedImage} from "@angular/common";
import {AppInitializerModule} from "../app-initializer/app-initializer.module";
import {BurgerMenuComponent} from "../shared/components/burger-menu/burger-menu.component";

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
        BurgerMenuComponent,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
