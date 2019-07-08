import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RelativesComponent } from './relatives/relatives.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { HealthDataComponent } from './health-data/health-data.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgZorroAntdMobileModule, AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent, RelativesComponent, UserCenterComponent, HealthDataComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
