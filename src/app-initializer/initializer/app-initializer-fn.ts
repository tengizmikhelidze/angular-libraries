import {EnvironmentConfigurationServiceService} from "../services/environment-configuration-service.service";

export const appInitializerFn = (configService: EnvironmentConfigurationServiceService) => {
  return ()=>{
    return configService.setConfig();
  }
}
