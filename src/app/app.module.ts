import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { HiveFormComponent } from 'app/hive-management/forms/hive-form.component';
import { HiveSectionFormComponent } from 'app/hive-management/forms/hive-section-form.component';
import { HiveListComponent } from 'app/hive-management/lists/hive-list.component';
import { HiveSectionListComponent } from 'app/hive-management/lists/hive-section-list.component';
import { HiveSectionService } from 'app/hive-management/services/hive-section.service';
import { HiveService } from 'app/hive-management/services/hive.service';
import { MainPageComponent } from 'app/main-page/main-page.component';
import { ProductCategoryFormComponent } from 'app/product-management/forms/product-category-form.component';
import { ProductFormComponent } from 'app/product-management/forms/product-form.component';
import { ProductCategoryListComponent } from 'app/product-management/lists/product-category-list.component';
import { ProductCategoryProductListComponent } from 'app/product-management/lists/product-category-product-list.component';
import { ProductListComponent } from 'app/product-management/lists/product-list.component';
import { ProductCategoryService } from 'app/product-management/services/product-category.service';
import { ProductService } from 'app/product-management/services/product.service';
import { OrderListComponent } from './order-management/lists/order-list.component';
import { CustomerListComponent } from './customer-management/list/customer-list.component';
import { CustomerFormComponent } from './customer-management/forms/customer-form.component';
import { CustomerOrdersListComponent } from './order-management/lists/customer-orders-list.component';
import { OrderCustomerFormComponent } from './order-management/forms/order-customer-form.component';
import { OrderProductsInfoListComponent } from './order-management/lists/order-products-info-list.component';
import { OrderProductFormComponent } from './order-management/forms/order-product-form.component';
import { ManagerListComponent } from './manager-control/lists/manager-list.component';
import { ManagerFormComponent } from './manager-control/forms/manager-form.component';
import { ManagerSubordinatesListComponent } from './manager-control/lists/manager-subordinates-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductCategoryListComponent,
    ProductCategoryFormComponent,
    ProductCategoryProductListComponent,
    ProductListComponent,
    ProductFormComponent,
    HiveListComponent,
    HiveFormComponent,
    HiveSectionFormComponent,
    HiveSectionListComponent,
    OrderListComponent,
    CustomerListComponent,
    CustomerFormComponent,
    CustomerOrdersListComponent,
    OrderCustomerFormComponent,
    OrderProductsInfoListComponent,
    OrderProductFormComponent,
    ManagerListComponent,
    ManagerFormComponent,
    ManagerSubordinatesListComponent,
  ],
  imports: [
    // Angular imports
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    // Application imports
    AppRoutingModule,
  ],
  providers: [
    // Angular providers
    HttpClient,
    // Application providers
    ProductService,
    ProductCategoryService,
    HiveService,
    HiveSectionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
