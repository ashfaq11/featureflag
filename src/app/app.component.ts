import { Component } from '@angular/core';
import { Context, FeatureFlagProvider, LocalFeatureFlagProvider } from 'lib-ts-featureflag';
import { environment } from '../environments/environment';
//import * as YAML from 'yaml';
import { YamlLoaderService } from './services/yaml-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'trinet-ff-impl';
  finalResult: any;
  inputValue: string = '';
  getBooleanDetailsFunc: any;
  featureFlagenvName = "develop";
  provider = new FeatureFlagProvider(environment.sdkKey);
  constructor(private yamlLoaderService: YamlLoaderService) {
    //console.log(environment.sdkKey);

   /* if(environment.envName === 'development') {
      this.yamlLoaderService
    .loadYaml('assets/flags.yaml') // Path to the YAML file in assets
    .subscribe(
      (data) => {
        this.provider = new LocalFeatureFlagProvider(data, this.featureFlagenvName);
        console.log('loaded YAML file:')
       },
      (error) => console.error('Error loading YAML file:', error)
    );
    }else{
      console.log('stg/production :')
      this.provider = new FeatureFlagProvider(environment.sdkKey);
    }*/
  }

  

  myClickFunction(event: any) {
    this.inputValue = event;
    this.getBooleanDetails();
  }

  myClickFunctionString(event: any) {
    this.inputValue = event;
    this.getStringDetails();
  }
  myClickFunctionNumber(event: any) {
    this.inputValue = event;
    this.getNumberDetails();
  }
  myClickFunctionJSON(event: any) {
    this.inputValue = event;
    this.getObjectDetails();
  }

  async getBooleanDetails() {
    const context = new Context();
    context.flagIdentifier = this.inputValue;
    context.targetIdentifier = 'admin1';
    let result: any = await this.provider.getBooleanDetails(context);
    this.finalResult = result;
    console.log('Boolean value of fflag:', result);
  }

  async getStringDetails() {
    const context = new Context();
    context.flagIdentifier = this.inputValue;
    context.targetIdentifier = 'admin2';
    let result: any = await this.provider.getStringDetails(context);
    this.finalResult = result;
    console.log('String value of fflag:', result);
  }
  async getNumberDetails() {
    const context = new Context();
    context.flagIdentifier = this.inputValue;
    context.targetIdentifier = 'admin3';
    //const provider = new FeatureFlagProvider();
    let result: any = await this.provider.getNumberDetails(context);
    this.finalResult = result;
    console.log('Number value of fflag:', result);
  }
  async getObjectDetails() {
    const context = new Context();
    context.flagIdentifier = this.inputValue;
    context.targetIdentifier = 'admin4';
    //const provider = new FeatureFlagProvider();
    let result: any = await this.provider.getObjectDetails(context);
    this.finalResult = result;
    console.log('Object/json value of fflag:', result);
  }
}
