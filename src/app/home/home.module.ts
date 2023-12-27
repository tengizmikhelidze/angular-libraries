import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {DescriptionSectionComponent} from './description-section/description-section.component';
import {ServicesSectionComponent} from './services-section/services-section.component';
import {FooterComponent} from "../../shared/components/footer/footer.component";


@NgModule({
  declarations: [
    HomeComponent,
    DescriptionSectionComponent,
    ServicesSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class HomeModule { }
