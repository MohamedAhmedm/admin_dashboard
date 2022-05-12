import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import matcard module
import {MatCardModule} from '@angular/material/card';
// import matbuttonmodule from '@angular/material/button';
import {MatButtonModule} from '@angular/material/button';
//import matinputmodule from '@angular/material/input';
import {MatInputModule} from '@angular/material/input';
//import reactive forms module
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
//import mat icon module
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
