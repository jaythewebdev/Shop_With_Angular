import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { PointsComponent } from './points/points.component';

const routes: Routes = [
  {path:"customer",component:CustomerComponent},
  {path:"products",component:ProductsComponent},
  {path:"cart",component:CartComponent},
  {path:"points",component:PointsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
