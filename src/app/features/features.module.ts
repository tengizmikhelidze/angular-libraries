import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import {HomeModule} from "../home/home.module";
import {HeaderComponent} from "../../shared/components/header/header.component";


@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    HomeModule,
    HeaderComponent
  ]
})
export class FeaturesModule { }
