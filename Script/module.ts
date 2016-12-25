import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app';
import { SubAppComponent }  from './sub-app';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,SubAppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }