import { Routes } from '@angular/router';
import { NavDashbordComponent } from './pages/admin/navDashbord/navDashbord/navDashbord.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProdutItemComponent } from './components/produt-item/produt-item.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeAdminComponent } from './pages/admin/homeAdmin/home-admin/home-admin.component';
import { AddOrEditProductComponent } from './pages/admin/addOrEditProduct/add-or-edit-product/add-or-edit-product.component';
import { DashbordComponent } from './pages/admin/dashbord/dashbord/dashbord.component';
import { ProductContainerAdminComponent } from './pages/admin/product-container-admin/product-container-admin/product-container-admin.component';
import { ProductItemAdminComponent } from './pages/admin/product-item-admin/product-item-admin/product-item-admin.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductContainerComponent,
    ProdutItemComponent,
    SliderComponent,
    HomeComponent,
    HomeAdminComponent,
    AddOrEditProductComponent,
    DashbordComponent,
    NavDashbordComponent,
    ProductContainerAdminComponent,
    ProductItemAdminComponent,
    HomeBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
