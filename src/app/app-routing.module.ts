import { HomeBodyComponent } from './components/home-body/home-body.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { AddOrEditProductComponent } from './pages/admin/addOrEditProduct/add-or-edit-product/add-or-edit-product.component';
import { HomeAdminComponent } from './pages/admin/homeAdmin/home-admin/home-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashbordComponent } from './pages/admin/dashbord/dashbord/dashbord.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home', component: HomeComponent, children: [

      { path: 'products', component: ProductContainerComponent },
      { path: 'home', component: HomeBodyComponent },
    ]
  },


  {
    path: 'admin', component: DashbordComponent, children: [
      { path: 'home', component: HomeAdminComponent },
      { path: 'add', component: AddOrEditProductComponent },
      { path: 'edit/:id', component: AddOrEditProductComponent },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
