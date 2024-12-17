import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureFlagComponent } from './feature-flag/feature-flag.component';



@NgModule({
  declarations: [
    FeatureFlagComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
