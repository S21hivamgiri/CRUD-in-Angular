import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';

// import ReactiveFormsModule
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule }  from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { EditproductComponent } from './editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateproductComponent,
    ProductlistComponent,
    HomeComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
