import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverComponent } from './driver/driver.component';

//import added
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //added
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
