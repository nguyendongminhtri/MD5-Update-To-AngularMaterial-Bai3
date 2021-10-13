import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { NavBarComponent } from './nav-foot/nav-bar/nav-bar.component';
import { FooterComponent } from './nav-foot/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import {MatCardModule} from "@angular/material/card";
import { FontSizeComponent } from './content/font-size/font-size.component';
import {FormsModule} from "@angular/forms";
import { ShowPetComponent } from './content/show-pet/show-pet.component';
import { TableBostrapComponent } from './content/table-bostrap/table-bostrap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    FontSizeComponent,
    ShowPetComponent,
    TableBostrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
