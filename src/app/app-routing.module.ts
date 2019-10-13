import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'app/main-page/main-page.component';
import { HiveFormComponent } from './hive-management/forms/hive-form.component';
import { HiveSectionFormComponent } from './hive-management/forms/hive-section-form.component';
import { HiveListComponent } from './hive-management/lists/hive-list.component';
import { HiveSectionListComponent } from './hive-management/lists/hive-section-list.component';
import { ProductCategoryFormComponent } from './product-management/forms/product-category-form.component';
import { ProductFormComponent } from './product-management/forms/product-form.component';
import { ProductCategoryListComponent } from './product-management/lists/product-category-list.component';
import { ProductCategoryProductListComponent } from './product-management/lists/product-category-product-list.component';
import { ProductListComponent } from './product-management/lists/product-list.component';
import { OrderListComponent } from './order-management/lists/order-list.component';
import { CustomerListComponent } from './customer-management/list/customer-list.component';
import { CustomerFormComponent } from './customer-management/forms/customer-form.component';
import { CustomerOrdersListComponent } from './order-management/lists/customer-orders-list.component';
import { OrderCustomerFormComponent } from './order-management/forms/order-customer-form.component';
import { OrderProductsInfoListComponent } from './order-management/lists/order-products-info-list.component';
import { OrderProductFormComponent } from './order-management/forms/order-product-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'categories', component: ProductCategoryListComponent },
  { path: 'category', component: ProductCategoryFormComponent },
  { path: 'category/:id', component: ProductCategoryFormComponent },
  { path: 'category/:id/products', component: ProductCategoryProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductFormComponent },
  { path: 'category/:categoryId/product/:id', component: ProductFormComponent },
  { path: 'hives', component: HiveListComponent },
  { path: 'hive', component: HiveFormComponent },
  { path: 'hive/:id', component: HiveFormComponent },
  { path: 'hive/:id/sections', component: HiveSectionListComponent },
  { path: 'hive/:hiveId/sections/:id', component: HiveSectionFormComponent },
  { path: 'hive/:hiveId/section', component: HiveSectionFormComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customer/:id', component: CustomerFormComponent },
  { path: 'customer', component: CustomerFormComponent },
  { path: 'customers/:customerId/orders', component: CustomerOrdersListComponent },
  { path: 'customers/:customerId/order', component: OrderCustomerFormComponent },
  { path: 'orders/:orderId/products', component: OrderProductsInfoListComponent },
  { path: 'orders/:orderId/product', component: OrderProductFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
