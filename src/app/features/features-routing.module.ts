import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeaturesComponent} from "./features.component";

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'transliteration',
        loadChildren: () => import('./transliteration/transliteration.module').then((m)=>m.TransliterationModule)
      },
      {
        path: 'inputs',
        loadChildren: () => import('./inputs/inputs.module').then((m)=>m.InputsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
