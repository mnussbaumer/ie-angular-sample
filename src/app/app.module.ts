import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxImageengineModule } from "ngx-imageengine-image";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      NgxImageengineModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
