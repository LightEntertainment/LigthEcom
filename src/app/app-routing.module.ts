import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: 'home', component: ShopComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'checkout', component: CheckoutComponent},  
  {path: 'product/:id', component: ShopDetailComponent}, 
  {path: 'cart', component: ShoppingCartComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
