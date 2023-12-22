import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HeaderComponent} from './header/header.component';
import {DescriptionSectionComponent} from './description-section/description-section.component';
import {ServicesSectionComponent} from './services-section/services-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    DescriptionSectionComponent,
    ServicesSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
