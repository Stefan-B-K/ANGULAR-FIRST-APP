import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { FormsModule } from "@angular/forms";
import { CharToSpacePipe } from "./shared/CharToSpacePipe";
import { StarComponent } from "./shared/star/star.component";

@NgModule({
  declarations: [AppComponent, ProductListComponent, CharToSpacePipe, StarComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
