import { NgModule } from '@angular/core';

import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderComponent } from './provider/provider.component';
import { HttpClientModule, withFetch } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ProviderComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,
    FormsModule // Add FormsModule here
  ],
  providers: [provideClientHydration(),provideHttpClient(withFetch()) ],
  bootstrap: [AppComponent],
})
export class AppModule {}
