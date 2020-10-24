import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app-routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FormsModule} from '@angular/forms';
import { ServiceUtils } from '@services/services-utils';
import { SessionService } from '@services/session-service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    ServiceUtils,
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
