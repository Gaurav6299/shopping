import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './MyComponents/product/product.component';
import { ProductListComponent } from './MyComponents/product-list/product-list.component';
import { CartComponent } from './MyComponents/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { TotalComponent } from './MyComponents/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    TotalComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
