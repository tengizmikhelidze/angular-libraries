import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentConfigurationServiceService {
  constructor(private httpClient: HttpClient) { }

  setConfig(): Promise<any>{
    return this.httpClient.get<any>('config.json')
      .toPromise()
      .then((config)=>{
        for(let key in config){
          environment[key as keyof typeof environment] = config[key]
        }
      })
  }
}
