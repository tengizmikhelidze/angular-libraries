import {APP_INITIALIZER, NgModule} from '@angular/core';
import {EnvironmentConfigurationServiceService} from "./services/environment-configuration-service.service";
import {appInitializerFn} from "./initializer/app-initializer-fn";
import {HttpClientModule} from "@angular/common/http";

const InternalModules = [
  HttpClientModule
]

@NgModule({
  imports: [
    ...InternalModules
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [EnvironmentConfigurationServiceService],
      multi: true,
      useFactory: appInitializerFn
    }
  ]
})
export class AppInitializerModule { }
