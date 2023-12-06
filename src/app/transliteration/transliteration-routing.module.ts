import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransliterationComponent} from "./transliteration.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TransliterationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransliterationRoutingModule { }
