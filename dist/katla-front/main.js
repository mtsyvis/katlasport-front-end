(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _hive_management_forms_hive_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hive-management/forms/hive-form.component */ "./src/app/hive-management/forms/hive-form.component.ts");
/* harmony import */ var _hive_management_forms_hive_section_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hive-management/forms/hive-section-form.component */ "./src/app/hive-management/forms/hive-section-form.component.ts");
/* harmony import */ var _hive_management_lists_hive_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hive-management/lists/hive-list.component */ "./src/app/hive-management/lists/hive-list.component.ts");
/* harmony import */ var _hive_management_lists_hive_section_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hive-management/lists/hive-section-list.component */ "./src/app/hive-management/lists/hive-section-list.component.ts");
/* harmony import */ var _product_management_forms_product_category_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-management/forms/product-category-form.component */ "./src/app/product-management/forms/product-category-form.component.ts");
/* harmony import */ var _product_management_forms_product_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-management/forms/product-form.component */ "./src/app/product-management/forms/product-form.component.ts");
/* harmony import */ var _product_management_lists_product_category_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-management/lists/product-category-list.component */ "./src/app/product-management/lists/product-category-list.component.ts");
/* harmony import */ var _product_management_lists_product_category_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-management/lists/product-category-product-list.component */ "./src/app/product-management/lists/product-category-product-list.component.ts");
/* harmony import */ var _product_management_lists_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-management/lists/product-list.component */ "./src/app/product-management/lists/product-list.component.ts");
/* harmony import */ var _order_management_lists_order_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./order-management/lists/order-list.component */ "./src/app/order-management/lists/order-list.component.ts");
/* harmony import */ var _customer_management_list_customer_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer-management/list/customer-list.component */ "./src/app/customer-management/list/customer-list.component.ts");
/* harmony import */ var _customer_management_forms_customer_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer-management/forms/customer-form.component */ "./src/app/customer-management/forms/customer-form.component.ts");
/* harmony import */ var _order_management_lists_customer_orders_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order-management/lists/customer-orders-list.component */ "./src/app/order-management/lists/customer-orders-list.component.ts");
/* harmony import */ var _order_management_forms_order_customer_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order-management/forms/order-customer-form.component */ "./src/app/order-management/forms/order-customer-form.component.ts");
/* harmony import */ var _order_management_lists_order_products_info_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order-management/lists/order-products-info-list.component */ "./src/app/order-management/lists/order-products-info-list.component.ts");
/* harmony import */ var _order_management_forms_order_product_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order-management/forms/order-product-form.component */ "./src/app/order-management/forms/order-product-form.component.ts");
/* harmony import */ var _manager_control_lists_manager_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./manager-control/lists/manager-list.component */ "./src/app/manager-control/lists/manager-list.component.ts");
/* harmony import */ var _manager_control_forms_manager_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./manager-control/forms/manager-form.component */ "./src/app/manager-control/forms/manager-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"] },
    { path: 'categories', component: _product_management_lists_product_category_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductCategoryListComponent"] },
    { path: 'category', component: _product_management_forms_product_category_form_component__WEBPACK_IMPORTED_MODULE_7__["ProductCategoryFormComponent"] },
    { path: 'category/:id', component: _product_management_forms_product_category_form_component__WEBPACK_IMPORTED_MODULE_7__["ProductCategoryFormComponent"] },
    { path: 'category/:id/products', component: _product_management_lists_product_category_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductCategoryProductListComponent"] },
    { path: 'products', component: _product_management_lists_product_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductListComponent"] },
    { path: 'product/:id', component: _product_management_forms_product_form_component__WEBPACK_IMPORTED_MODULE_8__["ProductFormComponent"] },
    { path: 'category/:categoryId/product/:id', component: _product_management_forms_product_form_component__WEBPACK_IMPORTED_MODULE_8__["ProductFormComponent"] },
    { path: 'hives', component: _hive_management_lists_hive_list_component__WEBPACK_IMPORTED_MODULE_5__["HiveListComponent"] },
    { path: 'hive', component: _hive_management_forms_hive_form_component__WEBPACK_IMPORTED_MODULE_3__["HiveFormComponent"] },
    { path: 'hive/:id', component: _hive_management_forms_hive_form_component__WEBPACK_IMPORTED_MODULE_3__["HiveFormComponent"] },
    { path: 'hive/:id/sections', component: _hive_management_lists_hive_section_list_component__WEBPACK_IMPORTED_MODULE_6__["HiveSectionListComponent"] },
    { path: 'hive/:hiveId/sections/:id', component: _hive_management_forms_hive_section_form_component__WEBPACK_IMPORTED_MODULE_4__["HiveSectionFormComponent"] },
    { path: 'hive/:hiveId/section', component: _hive_management_forms_hive_section_form_component__WEBPACK_IMPORTED_MODULE_4__["HiveSectionFormComponent"] },
    { path: 'orders', component: _order_management_lists_order_list_component__WEBPACK_IMPORTED_MODULE_12__["OrderListComponent"] },
    { path: 'customers', component: _customer_management_list_customer_list_component__WEBPACK_IMPORTED_MODULE_13__["CustomerListComponent"] },
    { path: 'customer/:id', component: _customer_management_forms_customer_form_component__WEBPACK_IMPORTED_MODULE_14__["CustomerFormComponent"] },
    { path: 'customer', component: _customer_management_forms_customer_form_component__WEBPACK_IMPORTED_MODULE_14__["CustomerFormComponent"] },
    { path: 'customers/:customerId/orders', component: _order_management_lists_customer_orders_list_component__WEBPACK_IMPORTED_MODULE_15__["CustomerOrdersListComponent"] },
    { path: 'customers/:customerId/order', component: _order_management_forms_order_customer_form_component__WEBPACK_IMPORTED_MODULE_16__["OrderCustomerFormComponent"] },
    { path: 'orders/:orderId/products', component: _order_management_lists_order_products_info_list_component__WEBPACK_IMPORTED_MODULE_17__["OrderProductsInfoListComponent"] },
    { path: 'orders/:orderId/product', component: _order_management_forms_order_product_form_component__WEBPACK_IMPORTED_MODULE_18__["OrderProductFormComponent"] },
    { path: 'managers', component: _manager_control_lists_manager_list_component__WEBPACK_IMPORTED_MODULE_19__["ManagerListComponent"] },
    { path: 'manager', component: _manager_control_forms_manager_form_component__WEBPACK_IMPORTED_MODULE_20__["ManagerFormComponent"] },
    { path: 'manager/:id', component: _manager_control_forms_manager_form_component__WEBPACK_IMPORTED_MODULE_20__["ManagerFormComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark justify-content-between\">\r\n  <div>\r\n    <a class=\"navbar-brand\" routerLink=\"/main\">\r\n      <span style=\"color: yellow; font-weight: bold; font-family: Arial, Helvetica, sans-serif; margin-right:0.1em; border: yellow solid 1px; padding: 6px;\">K</span>\r\n      <span style=\"margin-left: 5px;\">KatlaSport</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"collapse navbar-collapse\" style=\"margin-left: 100px; margin-bottom: 2px;\" id=\"navbarNavDropdown\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/categories\">Categories</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/products\">Products</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/hives\">Hives</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/orders\">Orders</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/customers\">Customers</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/managers\">Managers</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Product Management</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n          <a class=\"dropdown-item\" href=\"#\">Categories</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Products</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <form class=\"form-inline\">\r\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n  </form>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var app_hive_management_forms_hive_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/hive-management/forms/hive-form.component */ "./src/app/hive-management/forms/hive-form.component.ts");
/* harmony import */ var app_hive_management_forms_hive_section_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/hive-management/forms/hive-section-form.component */ "./src/app/hive-management/forms/hive-section-form.component.ts");
/* harmony import */ var app_hive_management_lists_hive_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/hive-management/lists/hive-list.component */ "./src/app/hive-management/lists/hive-list.component.ts");
/* harmony import */ var app_hive_management_lists_hive_section_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/hive-management/lists/hive-section-list.component */ "./src/app/hive-management/lists/hive-section-list.component.ts");
/* harmony import */ var app_hive_management_services_hive_section_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/hive-management/services/hive-section.service */ "./src/app/hive-management/services/hive-section.service.ts");
/* harmony import */ var app_hive_management_services_hive_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/hive-management/services/hive.service */ "./src/app/hive-management/services/hive.service.ts");
/* harmony import */ var app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var app_product_management_forms_product_category_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/product-management/forms/product-category-form.component */ "./src/app/product-management/forms/product-category-form.component.ts");
/* harmony import */ var app_product_management_forms_product_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/product-management/forms/product-form.component */ "./src/app/product-management/forms/product-form.component.ts");
/* harmony import */ var app_product_management_lists_product_category_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/product-management/lists/product-category-list.component */ "./src/app/product-management/lists/product-category-list.component.ts");
/* harmony import */ var app_product_management_lists_product_category_product_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/product-management/lists/product-category-product-list.component */ "./src/app/product-management/lists/product-category-product-list.component.ts");
/* harmony import */ var app_product_management_lists_product_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/product-management/lists/product-list.component */ "./src/app/product-management/lists/product-list.component.ts");
/* harmony import */ var app_product_management_services_product_category_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/product-management/services/product-category.service */ "./src/app/product-management/services/product-category.service.ts");
/* harmony import */ var app_product_management_services_product_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/product-management/services/product.service */ "./src/app/product-management/services/product.service.ts");
/* harmony import */ var _order_management_lists_order_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./order-management/lists/order-list.component */ "./src/app/order-management/lists/order-list.component.ts");
/* harmony import */ var _customer_management_list_customer_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./customer-management/list/customer-list.component */ "./src/app/customer-management/list/customer-list.component.ts");
/* harmony import */ var _customer_management_forms_customer_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./customer-management/forms/customer-form.component */ "./src/app/customer-management/forms/customer-form.component.ts");
/* harmony import */ var _order_management_lists_customer_orders_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./order-management/lists/customer-orders-list.component */ "./src/app/order-management/lists/customer-orders-list.component.ts");
/* harmony import */ var _order_management_forms_order_customer_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./order-management/forms/order-customer-form.component */ "./src/app/order-management/forms/order-customer-form.component.ts");
/* harmony import */ var _order_management_lists_order_products_info_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./order-management/lists/order-products-info-list.component */ "./src/app/order-management/lists/order-products-info-list.component.ts");
/* harmony import */ var _order_management_forms_order_product_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./order-management/forms/order-product-form.component */ "./src/app/order-management/forms/order-product-form.component.ts");
/* harmony import */ var _manager_control_lists_manager_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./manager-control/lists/manager-list.component */ "./src/app/manager-control/lists/manager-list.component.ts");
/* harmony import */ var _manager_control_forms_manager_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./manager-control/forms/manager-form.component */ "./src/app/manager-control/forms/manager-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__["MainPageComponent"],
                app_product_management_lists_product_category_list_component__WEBPACK_IMPORTED_MODULE_16__["ProductCategoryListComponent"],
                app_product_management_forms_product_category_form_component__WEBPACK_IMPORTED_MODULE_14__["ProductCategoryFormComponent"],
                app_product_management_lists_product_category_product_list_component__WEBPACK_IMPORTED_MODULE_17__["ProductCategoryProductListComponent"],
                app_product_management_lists_product_list_component__WEBPACK_IMPORTED_MODULE_18__["ProductListComponent"],
                app_product_management_forms_product_form_component__WEBPACK_IMPORTED_MODULE_15__["ProductFormComponent"],
                app_hive_management_lists_hive_list_component__WEBPACK_IMPORTED_MODULE_9__["HiveListComponent"],
                app_hive_management_forms_hive_form_component__WEBPACK_IMPORTED_MODULE_7__["HiveFormComponent"],
                app_hive_management_forms_hive_section_form_component__WEBPACK_IMPORTED_MODULE_8__["HiveSectionFormComponent"],
                app_hive_management_lists_hive_section_list_component__WEBPACK_IMPORTED_MODULE_10__["HiveSectionListComponent"],
                _order_management_lists_order_list_component__WEBPACK_IMPORTED_MODULE_21__["OrderListComponent"],
                _customer_management_list_customer_list_component__WEBPACK_IMPORTED_MODULE_22__["CustomerListComponent"],
                _customer_management_forms_customer_form_component__WEBPACK_IMPORTED_MODULE_23__["CustomerFormComponent"],
                _order_management_lists_customer_orders_list_component__WEBPACK_IMPORTED_MODULE_24__["CustomerOrdersListComponent"],
                _order_management_forms_order_customer_form_component__WEBPACK_IMPORTED_MODULE_25__["OrderCustomerFormComponent"],
                _order_management_lists_order_products_info_list_component__WEBPACK_IMPORTED_MODULE_26__["OrderProductsInfoListComponent"],
                _order_management_forms_order_product_form_component__WEBPACK_IMPORTED_MODULE_27__["OrderProductFormComponent"],
                _manager_control_lists_manager_list_component__WEBPACK_IMPORTED_MODULE_28__["ManagerListComponent"],
                _manager_control_forms_manager_form_component__WEBPACK_IMPORTED_MODULE_29__["ManagerFormComponent"],
            ],
            imports: [
                // Angular imports
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                // Application imports
                app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [
                // Angular providers
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
                // Application providers
                app_product_management_services_product_service__WEBPACK_IMPORTED_MODULE_20__["ProductService"],
                app_product_management_services_product_category_service__WEBPACK_IMPORTED_MODULE_19__["ProductCategoryService"],
                app_hive_management_services_hive_service__WEBPACK_IMPORTED_MODULE_12__["HiveService"],
                app_hive_management_services_hive_section_service__WEBPACK_IMPORTED_MODULE_11__["HiveSectionService"],
            ],
            bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer-management/forms/customer-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/customer-management/forms/customer-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer-management/forms/customer-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/customer-management/forms/customer-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Customer Editor</h2>\n  <form (ngSubmit)=\"onSubmit()\" #customerForm=\"ngForm\">\n    <div class=\"form-group\" *ngIf='existed'>\n      <label for=\"idLabel\">ID</label>\n      <input type=\"text\" class=\"form-control\" id=\"id\" aria-describedby=\"idLabel\" [(ngModel)]=\"customer.id\" name=\"id\"\n        #id=\"ngModel\" readonly>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\" id=\"nameLabel\">Customer Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"nameLabel\" maxlength=\"60\"\n        required [(ngModel)]=\"customer.name\" name=\"name\" #name=\"ngModel\">\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"name.errors.required\">Customer Name is required.</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phone\" id=\"phoneLabel\">Customer Phone</label>\n      <input type=\"text\" class=\"form-control\" id=\"phone\" aria-describedby=\"phoneLabel\" maxlength=\"20\"\n        required [(ngModel)]=\"customer.phone\" name=\"phone\" #phone=\"ngModel\">\n      <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"phone.errors.required\">Customer Phone is required.</div>\n        <div *ngIf=\"phone.errors.minlength\">Customer Phone must be not less than 20.</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"address\" id=\"addressLabel\">Customer Address</label>\n      <input type=\"text\" class=\"form-control\" id=\"adress\" aria-describedby=\"addressLabel\" maxlength=\"300\" required\n        [(ngModel)]=\"customer.address\" name=\"address\" #address=\"ngModel\">\n      <div *ngIf=\"address.invalid && (address.dirty || address.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"address.errors.required\">Customer address is required.</div>\n      </div>\n    </div>\n\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Cancel group\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCancel()\">Back</button>\n      </div>\n      <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Save group\">\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n      </div>\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"existed\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onDelete()\">Delete</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/customer-management/forms/customer-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customer-management/forms/customer-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function() { return CustomerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/customer-management/services/customer.service.ts");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/customer */ "./src/app/customer-management/models/customer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerFormComponent = /** @class */ (function () {
    function CustomerFormComponent(route, router, customerService) {
        this.route = route;
        this.router = router;
        this.customerService = customerService;
        this.customer = new _models_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"](0, "", "", "");
        this.existed = false;
    }
    CustomerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            if (p['id'] === undefined)
                return;
            _this.customer;
            _this.customerService.getCustomer(p['id']).subscribe(function (c) { return _this.customer = c; });
            _this.existed = true;
        });
    };
    CustomerFormComponent.prototype.navigateToCustomers = function () {
        this.router.navigate(['/customers']);
    };
    CustomerFormComponent.prototype.onCancel = function () {
        this.navigateToCustomers();
    };
    CustomerFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.existed) {
            this.customerService.updateCustomer(this.customer).subscribe(function (h) { return _this.navigateToCustomers(); });
        }
        else {
            this.customerService.addCustomer(this.customer).subscribe(function (h) { return _this.navigateToCustomers(); });
        }
    };
    CustomerFormComponent.prototype.onDelete = function () {
        var _this = this;
        this.customerService.deleteCustomer(this.customer.id).subscribe(function (h) { return _this.navigateToCustomers(); });
    };
    CustomerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-form',
            template: __webpack_require__(/*! ./customer-form.component.html */ "./src/app/customer-management/forms/customer-form.component.html"),
            styles: [__webpack_require__(/*! ./customer-form.component.css */ "./src/app/customer-management/forms/customer-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], CustomerFormComponent);
    return CustomerFormComponent;
}());



/***/ }),

/***/ "./src/app/customer-management/list/customer-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/customer-management/list/customer-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer-management/list/customer-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/customer-management/list/customer-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Customer List</h2>\n  <table class=\"table table-nofluid\">\n    <thead>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Address</th>\n      <th scope=\"col\">Phone</th>\n      <th scope=\"col\"></th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let customer of customers\">\n        <th scope=\"row\">{{customer.id}}</th>\n        <td>{{customer.name}}</td>\n        <td>{{customer.address}}</td>\n        <td>{{customer.phone}}</td>\n        <td>\n          <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Product action buttons\">\n            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Edit group\">\n              <button routerLink=\"/customer/{{customer.id}}\" type=\"button\" class=\"btn btn-primary\">Edit</button>\n            </div>\n\n            <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"View orders\">\n              <button routerLink=\"{{customer.id}}/orders\" type=\"button\" class=\"btn btn-primary\">View orders</button>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\n    <div class=\"btn-group\" role=\"group\" aria-label=\"New group\">\n      <button routerLink=\"/customer\" type=\"button\" class=\"btn btn-primary\">New customer</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/customer-management/list/customer-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/customer-management/list/customer-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/customer-management/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(route, router, customerService) {
        this.route = route;
        this.router = router;
        this.customerService = customerService;
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getCustomers().subscribe(function (c) { return _this.customers = c; });
    };
    CustomerListComponent.prototype.onDelete = function (id) {
        this.customerService.deleteCustomer(id);
    };
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/customer-management/list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/customer-management/list/customer-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/customer-management/models/customer.ts":
/*!********************************************************!*\
  !*** ./src/app/customer-management/models/customer.ts ***!
  \********************************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(id, name, address, phone) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/customer-management/services/customer.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/customer-management/services/customer.service.ts ***!
  \******************************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/customers/';
    }
    CustomerService.prototype.getCustomers = function () {
        return this.http.get(this.url + "show");
    };
    CustomerService.prototype.getCustomer = function (id) {
        return this.http.get(this.url + ("show/" + id));
    };
    CustomerService.prototype.addCustomer = function (customer) {
        return this.http.post(this.url + "create", customer);
    };
    CustomerService.prototype.updateCustomer = function (customer) {
        return this.http.post(this.url + "update/" + customer.id, customer);
    };
    CustomerService.prototype.deleteCustomer = function (id) {
        return this.http.post(this.url + "destroy/" + id, null);
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/hive-management/forms/hive-form.component.css":
/*!***************************************************************!*\
  !*** ./src/app/hive-management/forms/hive-form.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hive-management/forms/hive-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/hive-management/forms/hive-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Hive Editor</h2>\r\n  <form (ngSubmit)=\"onSubmit()\" #hiveForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf='existed'>\r\n      <label for=\"idLabel\">ID</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"id\" aria-describedby=\"idLabel\" [(ngModel)]=\"hive.id\" name=\"id\"\r\n        #id=\"ngModel\" readonly>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" id=\"nameLabel\">Hive Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"nameLabel\" minlength=\"4\" maxlength=\"60\"\r\n        required [(ngModel)]=\"hive.name\" name=\"name\" #name=\"ngModel\">\r\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"name.errors.required\">Hive Name is required.</div>\r\n        <div *ngIf=\"name.errors.minlength\">Hive Name must be at least 4 characters long.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"code\" id=\"codeLabel\">Hive Code</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"code\" aria-describedby=\"codeLabel\" minlength=\"5\" maxlength=\"5\"\r\n        required [(ngModel)]=\"hive.code\" name=\"code\" #code=\"ngModel\">\r\n      <div *ngIf=\"code.invalid && (code.dirty || code.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"code.errors.required\">Hive Code is required.</div>\r\n        <div *ngIf=\"code.errors.minlength\">Hive Code must be not less than 5.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"address\" id=\"addressLabel\">Hive Address</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"adress\" aria-describedby=\"addressLabel\" maxlength=\"300\" required\r\n        [(ngModel)]=\"hive.address\" name=\"address\" #address=\"ngModel\">\r\n      <div *ngIf=\"address.invalid && (address.dirty || address.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"address.errors.required\">Hive Name is required.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf='existed'>\r\n      <label for=\"lastUpdated\" id=\"lastUpdatedLabel\">Last Update</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"lastUpdated\" aria-describedby=\"lastUpdatedLabel\" required\r\n        [(ngModel)]=\"hive.lastUpdated\" name=\"lastUpdated\" #lastUpdated=\"ngModel\" readonly>\r\n    </div>\r\n\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Cancel group\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCancel()\">Back</button>\r\n      </div>\r\n      <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Save group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      </div>\r\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"existed && !hive.isDeleted\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onDelete()\">Delete</button>\r\n      </div>\r\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Purge group\" *ngIf=\"existed && hive.isDeleted\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onUndelete()\">Undelete</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onPurge()\">Purge</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hive-management/forms/hive-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/hive-management/forms/hive-form.component.ts ***!
  \**************************************************************/
/*! exports provided: HiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiveFormComponent", function() { return HiveFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_hive_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hive.service */ "./src/app/hive-management/services/hive.service.ts");
/* harmony import */ var _models_hive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/hive */ "./src/app/hive-management/models/hive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HiveFormComponent = /** @class */ (function () {
    function HiveFormComponent(route, router, hiveService) {
        this.route = route;
        this.router = router;
        this.hiveService = hiveService;
        this.hive = new _models_hive__WEBPACK_IMPORTED_MODULE_3__["Hive"](0, "", "", "", false, "");
        this.existed = false;
    }
    HiveFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            if (p['id'] === undefined)
                return;
            _this.hiveService.getHive(p['id']).subscribe(function (h) { return _this.hive = h; });
            _this.existed = true;
        });
    };
    HiveFormComponent.prototype.navigateToHives = function () {
        this.router.navigate(['/hives']);
    };
    HiveFormComponent.prototype.onCancel = function () {
        this.navigateToHives();
    };
    HiveFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.existed) {
            this.hiveService.updateHive(this.hive).subscribe(function (h) { return _this.navigateToHives(); });
        }
        else {
            this.hiveService.addHive(this.hive).subscribe(function (h) { return _this.navigateToHives(); });
        }
    };
    HiveFormComponent.prototype.onDelete = function () {
        var _this = this;
        if (this.hive) {
            this.hiveService.setHiveStatus(this.hive.id, true).subscribe(function (c) { return _this.hive.isDeleted = true; });
        }
    };
    HiveFormComponent.prototype.onUndelete = function () {
        var _this = this;
        if (this.hive) {
            this.hiveService.setHiveStatus(this.hive.id, false).subscribe(function (c) { return _this.hive.isDeleted = false; });
        }
    };
    HiveFormComponent.prototype.onPurge = function () {
        var _this = this;
        if (this.hive) {
            this.hiveService.deleteHive(this.hive.id).subscribe(function (h) { return _this.navigateToHives(); });
        }
    };
    HiveFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hive-form',
            template: __webpack_require__(/*! ./hive-form.component.html */ "./src/app/hive-management/forms/hive-form.component.html"),
            styles: [__webpack_require__(/*! ./hive-form.component.css */ "./src/app/hive-management/forms/hive-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_hive_service__WEBPACK_IMPORTED_MODULE_2__["HiveService"]])
    ], HiveFormComponent);
    return HiveFormComponent;
}());



/***/ }),

/***/ "./src/app/hive-management/forms/hive-section-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/hive-management/forms/hive-section-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hive-management/forms/hive-section-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/hive-management/forms/hive-section-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Hive Section Editor</h2>\r\n  <form (ngSubmit)=\"onSubmit()\" #hiveSectionForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf='existed'>\r\n      <label for=\"idLabel\">ID</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"id\" aria-describedby=\"idLabel\" [(ngModel)]=\"hiveSection.id\" name=\"id\"\r\n        #id=\"ngModel\" readonly>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf='existed'>\r\n      <label for=\"hiveIdLabel\">Hive ID</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"hiveId\" aria-describedby=\"hiveIdLabel\" [(ngModel)]=\"hiveId\" name=\"hiveId\"\r\n        #id=\"ngModel\" readonly>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" id=\"nameLabel\">Hive Section Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"nameLabel\" minlength=\"4\" maxlength=\"60\"\r\n        required [(ngModel)]=\"hiveSection.name\" name=\"name\" #name=\"ngModel\">\r\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"name.errors.required\">Hive Name is required.</div>\r\n        <div *ngIf=\"name.errors.minlength\">Hive Name must be at least 4 characters long.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"code\" id=\"codeLabel\">Hive Section Code</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"code\" aria-describedby=\"codeLabel\" minlength=\"5\" maxlength=\"5\"\r\n        required [(ngModel)]=\"hiveSection.code\" name=\"code\" #code=\"ngModel\">\r\n      <div *ngIf=\"code.invalid && (code.dirty || code.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"code.errors.required\">Hive Code is required.</div>\r\n        <div *ngIf=\"code.errors.minlength\">Hive Code must be not less than 5.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf='existed'>\r\n      <label for=\"lastUpdated\" id=\"lastUpdatedLabel\">Last Update</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"lastUpdated\" aria-describedby=\"lastUpdatedLabel\" required\r\n        [(ngModel)]=\"hiveSection.lastUpdated\" name=\"lastUpdated\" #lastUpdated=\"ngModel\" readonly>\r\n    </div>\r\n\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Cancel group\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCancel()\">Back</button>\r\n      </div>\r\n      <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Save group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      </div>\r\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"existed && !hiveSection.isDeleted\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onDelete()\">Delete</button>\r\n      </div>\r\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Purge group\" *ngIf=\"existed && hiveSection.isDeleted\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onUndelete()\">Undelete</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onPurge()\">Purge</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hive-management/forms/hive-section-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/hive-management/forms/hive-section-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: HiveSectionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiveSectionFormComponent", function() { return HiveSectionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_hive_section_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hive-section.service */ "./src/app/hive-management/services/hive-section.service.ts");
/* harmony import */ var _models_hive_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/hive-section */ "./src/app/hive-management/models/hive-section.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HiveSectionFormComponent = /** @class */ (function () {
    function HiveSectionFormComponent(route, router, hiveSectionService) {
        this.route = route;
        this.router = router;
        this.hiveSectionService = hiveSectionService;
        this.hiveSection = new _models_hive_section__WEBPACK_IMPORTED_MODULE_3__["HiveSection"](0, "", "", false, "", 0);
        this.existed = false;
    }
    HiveSectionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.hiveId = p["hiveId"];
            _this.hiveSection.storeHiveId = _this.hiveId;
            if (p['id'] === undefined)
                return;
            _this.hiveSectionService.getHiveSection(p['id']).subscribe(function (h) { return _this.hiveSection = h; });
            _this.existed = true;
        });
    };
    HiveSectionFormComponent.prototype.navigateToSections = function () {
        this.router.navigateByUrl("hive/" + this.hiveId + "/sections");
    };
    HiveSectionFormComponent.prototype.onCancel = function () {
        this.navigateToSections();
    };
    HiveSectionFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.existed) {
            this.hiveSection.storeHiveId = this.hiveId;
            this.hiveSectionService.updateHiveSecion(this.hiveSection).subscribe(function (h) { return _this.navigateToSections(); });
        }
        else {
            this.hiveSectionService.addHiveSection(this.hiveSection).subscribe(function (h) { return _this.navigateToSections(); });
        }
    };
    HiveSectionFormComponent.prototype.onDelete = function () {
        var _this = this;
        if (this.hiveSection) {
            this.hiveSectionService.setHiveSectionStatus(this.hiveSection.id, true).subscribe(function (c) { return _this.hiveSection.isDeleted = true; });
        }
    };
    HiveSectionFormComponent.prototype.onUndelete = function () {
        var _this = this;
        if (this.hiveSection) {
            this.hiveSectionService.setHiveSectionStatus(this.hiveSection.id, false).subscribe(function (c) { return _this.hiveSection.isDeleted = false; });
        }
    };
    HiveSectionFormComponent.prototype.onPurge = function () {
        var _this = this;
        if (this.hiveSection) {
            this.hiveSectionService.deleteHiveSection(this.hiveSection.id).subscribe(function (h) { return _this.navigateToSections(); });
        }
    };
    HiveSectionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hive-section-form',
            template: __webpack_require__(/*! ./hive-section-form.component.html */ "./src/app/hive-management/forms/hive-section-form.component.html"),
            styles: [__webpack_require__(/*! ./hive-section-form.component.css */ "./src/app/hive-management/forms/hive-section-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_hive_section_service__WEBPACK_IMPORTED_MODULE_2__["HiveSectionService"]])
    ], HiveSectionFormComponent);
    return HiveSectionFormComponent;
}());



/***/ }),

/***/ "./src/app/hive-management/lists/hive-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/hive-management/lists/hive-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hive-management/lists/hive-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/hive-management/lists/hive-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Hive List</h2>\r\n  <table class=\"table table-nonfluid\">\r\n    <thead>\r\n      <th scope=\"col\">#</th>\r\n      <!-- TODO STEP 6 - Add Code and Name headers here. -->\r\n      <th scope=\"col\">Code</th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\"></th>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let hive of hives\">\r\n        <th scope=\"row\">{{hive.id}}</th>\r\n        <!-- TODO STEP 6 - Add code and name values here. -->\r\n        <th scope=\"row\">{{hive.code}}</th>\r\n        <th scope=\"row\">{{hive.name}}</th>\r\n        <td>\r\n          <span class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Hive action buttons\"\r\n            style=\"display: block; white-space:nowrap;\">\r\n            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"!hive.isDeleted\"\r\n              (click)=\"onDelete(hive.id)\">\r\n              <button type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n            </div>\r\n            <div *ngIf=\"hive.isDeleted\" class=\"btn-group mr-2\" role=\"group\" aria-label=\"Edit group\"\r\n              (click)=\"onRestore(hive.id)\">\r\n              <button type=\"button\" class=\"btn btn-primary\">Restore</button>\r\n            </div>\r\n\r\n            <!-- TODO STEP 6 - Add buttons here. -->\r\n            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"View group\">\r\n              <button routerLink=\"/hive/{{hive.id}}/sections\" type=\"button\" class=\"btn btn-primary\">View\r\n                sections</button>\r\n            </div>\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit group\">\r\n              <button routerLink=\"/hive/{{hive.id}}\" type=\"button\" class=\"btn btn-primary\">Edit</button>\r\n            </div>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"New group\">\r\n      <button routerLink=\"/hive\" type=\"button\" class=\"btn btn-primary\">New hive</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/hive-management/lists/hive-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/hive-management/lists/hive-list.component.ts ***!
  \**************************************************************/
/*! exports provided: HiveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiveListComponent", function() { return HiveListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hive_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/hive.service */ "./src/app/hive-management/services/hive.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HiveListComponent = /** @class */ (function () {
    function HiveListComponent(hiveService) {
        this.hiveService = hiveService;
    }
    HiveListComponent.prototype.ngOnInit = function () {
        this.getHives();
    };
    HiveListComponent.prototype.getHives = function () {
        var _this = this;
        this.hiveService.getHives().subscribe(function (h) { return _this.hives = h; });
    };
    HiveListComponent.prototype.onDelete = function (hiveId) {
        var hive = this.hives.find(function (h) { return h.id == hiveId; });
        if (hive) {
            this.hiveService.setHiveStatus(hiveId, true).subscribe(function (c) { return hive.isDeleted = true; });
        }
    };
    HiveListComponent.prototype.onRestore = function (hiveId) {
        var hive = this.hives.find(function (h) { return h.id == hiveId; });
        if (hive) {
            this.hiveService.setHiveStatus(hiveId, false).subscribe(function (c) { return hive.isDeleted = false; });
        }
    };
    HiveListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hive-list',
            template: __webpack_require__(/*! ./hive-list.component.html */ "./src/app/hive-management/lists/hive-list.component.html"),
            styles: [__webpack_require__(/*! ./hive-list.component.css */ "./src/app/hive-management/lists/hive-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hive_service__WEBPACK_IMPORTED_MODULE_1__["HiveService"]])
    ], HiveListComponent);
    return HiveListComponent;
}());



/***/ }),

/***/ "./src/app/hive-management/lists/hive-section-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/hive-management/lists/hive-section-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hive-management/lists/hive-section-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/hive-management/lists/hive-section-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Hive Sections for Hive</h2>\r\n  <table class=\"table table-nonfluid\">\r\n    <thead>\r\n      <th scope=\"col\">#</th>\r\n      <!-- TODO STEP 8 - Add Code and Name headers here. -->\r\n      <th scope=\"col\">Code</th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\"></th>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let hiveSection of hiveSections\">\r\n        <th scope=\"row\">{{hiveSection.id}}</th>\r\n        <th scope=\"row\">{{hiveSection.code}}</th>\r\n        <th scope=\"row\">{{hiveSection.name}}</th>\r\n        <td>\r\n          <span class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Hive action buttons\"\r\n            style=\"display: block; white-space:nowrap;\">\r\n            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"!hiveSection.isDeleted\"\r\n              (click)=\"onDelete(hiveSection.id)\">\r\n              <button type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n            </div>\r\n            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Undelete group\" *ngIf=\"hiveSection.isDeleted\"\r\n              (click)=\"onUndelete(hiveSection.id)\">\r\n              <button type=\"button\" class=\"btn btn-primary\">Restore</button>\r\n            </div>\r\n\r\n            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Edit group\">\r\n              <button routerLink=\"{{hiveSection.id}}\" type=\"button\" class=\"btn btn-primary\">Edit</button>\r\n            </div>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n    <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Back group\">\r\n      <button routerLink=\"/hives\" type=\"button\" class=\"btn btn-primary\">Back</button>\r\n    </div> \r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Add group\">\r\n      <button routerLink=\"/hive/{{hiveId}}/section\" type=\"button\" class=\"btn btn-primary\">Add hive section</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/hive-management/lists/hive-section-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/hive-management/lists/hive-section-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: HiveSectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiveSectionListComponent", function() { return HiveSectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_hive_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hive.service */ "./src/app/hive-management/services/hive.service.ts");
/* harmony import */ var _services_hive_section_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/hive-section.service */ "./src/app/hive-management/services/hive-section.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HiveSectionListComponent = /** @class */ (function () {
    function HiveSectionListComponent(route, router, hiveService, hiveSectionService) {
        this.route = route;
        this.router = router;
        this.hiveService = hiveService;
        this.hiveSectionService = hiveSectionService;
    }
    HiveSectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.hiveId = p['id'];
            _this.hiveService.getHiveSections(_this.hiveId).subscribe(function (s) { return _this.hiveSections = s; });
        });
    };
    HiveSectionListComponent.prototype.onDelete = function (hiveSectionId) {
        var hiveSection = this.hiveSections.find(function (h) { return h.id == hiveSectionId; });
        if (hiveSection) {
            this.hiveSectionService.setHiveSectionStatus(hiveSectionId, true).subscribe(function (c) { return hiveSection.IsDeleted = false; });
        }
    };
    HiveSectionListComponent.prototype.onUndelete = function (hiveSectionId) {
        var hiveSection = this.hiveSections.find(function (h) { return h.id == hiveSectionId; });
        if (hiveSection) {
            this.hiveSectionService.setHiveSectionStatus(hiveSectionId, false).subscribe(function (c) { return hiveSection.IsDeleted = true; });
        }
    };
    HiveSectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hive-section-list',
            template: __webpack_require__(/*! ./hive-section-list.component.html */ "./src/app/hive-management/lists/hive-section-list.component.html"),
            styles: [__webpack_require__(/*! ./hive-section-list.component.css */ "./src/app/hive-management/lists/hive-section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_hive_service__WEBPACK_IMPORTED_MODULE_2__["HiveService"],
            _services_hive_section_service__WEBPACK_IMPORTED_MODULE_3__["HiveSectionService"]])
    ], HiveSectionListComponent);
    return HiveSectionListComponent;
}());



/***/ }),

/***/ "./src/app/hive-management/models/hive-section.ts":
/*!********************************************************!*\
  !*** ./src/app/hive-management/models/hive-section.ts ***!
  \********************************************************/
/*! exports provided: HiveSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiveSection", function() { return HiveSection; });
var HiveSection = /** @class */ (function () {
    function HiveSection(id, name, code, isDeleted, lastUpdated, storeHiveId) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.isDeleted = isDeleted;
        this.lastUpdated = lastUpdated;
        this.storeHiveId = storeHiveId;
    }
    return HiveSection;
}());



/***/ }),

/***/ "./src/app/hive-management/models/hive.ts":
/*!************************************************!*\
  !*** ./src/app/hive-management/models/hive.ts ***!
  \************************************************/
/*! exports provided: Hive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hive", function() { return Hive; });
var Hive = /** @class */ (function () {
    function Hive(id, name, code, address, isDeleted, lastUpdated) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.address = address;
        this.isDeleted = isDeleted;
        this.lastUpdated = lastUpdated;
    }
    return Hive;
}());



/***/ }),

/***/ "./src/app/hive-management/services/hive-section.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/hive-management/services/hive-section.service.ts ***!
  \******************************************************************/
/*! exports provided: HiveSectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiveSectionService", function() { return HiveSectionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HiveSectionService = /** @class */ (function () {
    function HiveSectionService(http) {
        this.http = http;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/sections/';
    }
    HiveSectionService.prototype.getHiveSections = function () {
        return this.http.get(this.url);
    };
    HiveSectionService.prototype.getHiveSection = function (hiveSectionId) {
        return this.http.get("" + this.url + hiveSectionId);
    };
    HiveSectionService.prototype.setHiveSectionStatus = function (hiveSectionId, deletedStatus) {
        return this.http.put("" + this.url + hiveSectionId + "/status/" + deletedStatus, null);
    };
    HiveSectionService.prototype.addHiveSection = function (hiveSection) {
        return this.http.post("" + this.url, hiveSection);
    };
    HiveSectionService.prototype.updateHiveSecion = function (hiveSection) {
        return this.http.put("" + this.url + hiveSection.id, hiveSection);
    };
    HiveSectionService.prototype.deleteHiveSection = function (hiveSectionId) {
        return this.http.delete("" + this.url + hiveSectionId);
    };
    HiveSectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], HiveSectionService);
    return HiveSectionService;
}());



/***/ }),

/***/ "./src/app/hive-management/services/hive.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/hive-management/services/hive.service.ts ***!
  \**********************************************************/
/*! exports provided: HiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiveService", function() { return HiveService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HiveService = /** @class */ (function () {
    function HiveService(http) {
        this.http = http;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/hives/';
    }
    HiveService.prototype.getHives = function () {
        return this.http.get(this.url);
    };
    HiveService.prototype.getHive = function (hiveId) {
        return this.http.get("" + this.url + hiveId);
    };
    HiveService.prototype.getHiveSections = function (hiveId) {
        return this.http.get("" + this.url + hiveId + "/sections");
    };
    HiveService.prototype.addHive = function (hive) {
        return this.http.post("" + this.url, hive);
    };
    HiveService.prototype.updateHive = function (hive) {
        return this.http.put("" + this.url + hive.id, hive);
    };
    HiveService.prototype.deleteHive = function (hiveId) {
        return this.http.delete("" + this.url + hiveId);
    };
    HiveService.prototype.setHiveStatus = function (hiveId, deletedStatus) {
        return this.http.put("" + this.url + hiveId + "/status/" + deletedStatus, null);
    };
    HiveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], HiveService);
    return HiveService;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1 class=\"display-4\"><span style=\"color: blueviolet; font-weight: bold; font-family: Arial, Helvetica, sans-serif; margin-right:0.1em; border: blueviolet solid 1px; padding: 6px;\">K</span>KatlaSport</h1>\r\n  <p class=\"lead\">Welcome to KatlaSport management console.</p>\r\n  <hr class=\"my-4\">\r\n  <p>Please, click on \"Learn more\" button to get more information about this project.</p>\r\n  <a class=\"btn btn-primary btn-lg\" href=\"https://github.com/epam-lab/katla\" role=\"button\">Learn more</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/manager-control/forms/manager-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/manager-control/forms/manager-form.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manager-control/forms/manager-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/manager-control/forms/manager-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Manager Editor</h2>\n  <form (ngSubmit)=\"onSubmit()\" #managerForm=\"ngForm\">\n    <div class=\"form-group\" *ngIf='existed'>\n      <label for=\"idLabel\">ID</label>\n      <input type=\"text\" class=\"form-control\" id=\"id\" aria-describedby=\"idLabel\" [(ngModel)]=\"manager.id\" name=\"id\"\n        #id=\"ngModel\" readonly>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\" id=\"nameLabel\">Manager Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"nameLabel\" minlength=\"4\" maxlength=\"60\"\n        required [(ngModel)]=\"manager.name\" name=\"name\" #name=\"ngModel\">\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"name.errors.required\">Manager Name is required.</div>\n        <div *ngIf=\"name.errors.minlength\">Manager Name must be at least 4 characters long.</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phone\" id=\"phoneLabel\">Manager Phone</label>\n      <input type=\"text\" class=\"form-control\" id=\"phone\" aria-describedby=\"phoneLabel\" maxlength=\"12\" required\n        [(ngModel)]=\"manager.phone\" name=\"phone\" #phone=\"ngModel\">\n      <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"phone.errors.required\">Manager Phone is required.</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\" *ngIf='existed'>\n      <label for=\"image\" id=\"imageLabel\">Image</label>\n      <input type=\"file\" (change)=\"onFileSelected($event)\" class=\"form-control\" id=\"image\"\n        aria-describedby=\"imageLabel\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"bossManager\" id=\"bossManagerLabel\">Boss Manager</label>\n      <select class=\"custom-select\" [(ngModel)]=\"selectedBossManagerId\" id=\"bossManager\" aria-describedby=\"bossManagerLabel\"\n        #product=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\n        <option *ngFor=\"let bossManager of bossManagers\" [ngValue]=\"bossManager.id\">{{bossManager.name}}</option>\n      </select>\n    </div>\n\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Cancel group\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCancel()\">Back</button>\n      </div>\n      <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Save group\">\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n      </div>\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"existed && !manager.isDeleted\">\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onDelete()\">Delete</button>\n      </div>\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Purge group\" *ngIf=\"existed && manager.isDeleted\">\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onUndelete()\">Undelete</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onPurge()\">Purge</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/manager-control/forms/manager-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/manager-control/forms/manager-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: ManagerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerFormComponent", function() { return ManagerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/manager.service */ "./src/app/manager-control/services/manager.service.ts");
/* harmony import */ var _models_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/manager */ "./src/app/manager-control/models/manager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManagerFormComponent = /** @class */ (function () {
    function ManagerFormComponent(route, router, managerService) {
        this.route = route;
        this.router = router;
        this.managerService = managerService;
        this.existed = false;
        this.manager = new _models_manager__WEBPACK_IMPORTED_MODULE_3__["Manager"](0, "", "", 0, false, "");
    }
    ManagerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.managerService.getBossMamagers().subscribe(function (m) { return _this.bossManagers = m; });
        this.route.params.subscribe(function (p) {
            if (p['id'] === undefined)
                return;
            _this.managerService.getManager(p['id']).subscribe(function (h) { return _this.manager = h; });
        });
        this.existed = true;
        this.curentManagerId = this.bossManagers.indexOf(this.manager);
        this.bossManagers.splice(this.curentManagerId);
    };
    ManagerFormComponent.prototype.onFileSelected = function (event) {
        this.selectedImageFile = event.target.files[0];
    };
    ManagerFormComponent.prototype.navigateToManagers = function () {
        this.router.navigate(['/managers']);
    };
    ManagerFormComponent.prototype.onCancel = function () {
        this.navigateToManagers();
    };
    ManagerFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.existed) {
            this.managerService.updateManager(this.manager);
            if (this.selectedImageFile) {
                this.managerService.uploadNewImageFile(this.manager.id, this.selectedImageFile).subscribe(function (h) { return _this.navigateToManagers(); });
            }
        }
        else {
            this.managerService.addManager(this.manager).subscribe(function (h) { return _this.navigateToManagers(); });
        }
    };
    ManagerFormComponent.prototype.onDelete = function () {
        var _this = this;
        if (this.manager) {
            this.managerService.setManagerStatus(this.manager.id, true).subscribe(function (c) { return _this.manager.isDeleted = true; });
        }
    };
    ManagerFormComponent.prototype.onUndelete = function () {
        var _this = this;
        if (this.manager) {
            this.managerService.setManagerStatus(this.manager.id, false).subscribe(function (c) { return _this.manager.isDeleted = false; });
        }
    };
    ManagerFormComponent.prototype.onPurge = function () {
        var _this = this;
        if (this.manager) {
            this.managerService.deleteManager(this.manager.id).subscribe(function (h) { return _this.navigateToManagers(); });
        }
    };
    ManagerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manager-form-component',
            template: __webpack_require__(/*! ./manager-form.component.html */ "./src/app/manager-control/forms/manager-form.component.html"),
            styles: [__webpack_require__(/*! ./manager-form.component.css */ "./src/app/manager-control/forms/manager-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"]])
    ], ManagerFormComponent);
    return ManagerFormComponent;
}());



/***/ }),

/***/ "./src/app/manager-control/lists/manager-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/manager-control/lists/manager-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 200px;\r\n}"

/***/ }),

/***/ "./src/app/manager-control/lists/manager-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/manager-control/lists/manager-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Manager List</h2>\n  <table class=\"table table-nonfluid\">\n    <thead>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Phone</th>\n      <th scope=\"col\">Image</th>\n      <th scope=\"col\"></th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let manager of managers\">\n        <th scope=\"row\">{{manager.id}}</th>\n        <th scope=\"row\">{{manager.name}}</th>\n        <th scope=\"row\">{{manager.phone}}</th>\n        <th scope=\"row\"><img src= \"{{manager.photoUrl}}\" alt=\"photo\"></th>\n        <td>\n          <span class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Hive action buttons\"\n            style=\"display: block; white-space:nowrap;\">\n            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"!manager.isDeleted\"\n              (click)=\"onDelete(manager.id)\">\n              <button type=\"button\" class=\"btn btn-danger\">Delete</button>\n            </div>\n            <div *ngIf=\"manager.isDeleted\" class=\"btn-group mr-2\" role=\"group\" aria-label=\"Edit group\"\n              (click)=\"onRestore(manager.id)\">\n              <button type=\"button\" class=\"btn btn-primary\">Restore</button>\n            </div>\n            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"View group\">\n              <button routerLink=\"/managers\" type=\"button\" class=\"btn btn-primary\">View\n                sections</button>\n            </div>\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit group\">\n              <button routerLink=\"/manager/{{manager.id}}\" type=\"button\" class=\"btn btn-primary\">Edit</button>\n            </div>\n          </span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\n    <div class=\"btn-group\" role=\"group\" aria-label=\"New group\">\n      <button routerLink=\"/manager\" type=\"button\" class=\"btn btn-primary\">New Manager</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/manager-control/lists/manager-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/manager-control/lists/manager-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ManagerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerListComponent", function() { return ManagerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/manager.service */ "./src/app/manager-control/services/manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagerListComponent = /** @class */ (function () {
    function ManagerListComponent(managerService) {
        this.managerService = managerService;
    }
    ManagerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.managerService.getMamagers().subscribe(function (m) { return _this.managers = m; });
    };
    ManagerListComponent.prototype.onDelete = function (managerId) {
        var manager = this.managers.find(function (h) { return h.id == managerId; });
        if (manager) {
            this.managerService.setManagerStatus(managerId, true).subscribe(function (c) { return manager.isDeleted = true; });
        }
    };
    ManagerListComponent.prototype.onRestore = function (managerId) {
        var manager = this.managers.find(function (h) { return h.id == managerId; });
        if (manager) {
            this.managerService.setManagerStatus(managerId, true).subscribe(function (c) { return manager.isDeleted = false; });
        }
    };
    ManagerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manager-list',
            template: __webpack_require__(/*! ./manager-list.component.html */ "./src/app/manager-control/lists/manager-list.component.html"),
            styles: [__webpack_require__(/*! ./manager-list.component.css */ "./src/app/manager-control/lists/manager-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_manager_service__WEBPACK_IMPORTED_MODULE_1__["ManagerService"]])
    ], ManagerListComponent);
    return ManagerListComponent;
}());



/***/ }),

/***/ "./src/app/manager-control/models/manager.ts":
/*!***************************************************!*\
  !*** ./src/app/manager-control/models/manager.ts ***!
  \***************************************************/
/*! exports provided: Manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return Manager; });
var Manager = /** @class */ (function () {
    function Manager(id, phone, name, parentId, isDeleted, photoUrl) {
        this.id = id;
        this.phone = phone;
        this.name = name;
        this.parentId = parentId;
        this.isDeleted = isDeleted;
        this.photoUrl = photoUrl;
    }
    return Manager;
}());



/***/ }),

/***/ "./src/app/manager-control/services/manager.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/manager-control/services/manager.service.ts ***!
  \*************************************************************/
/*! exports provided: ManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerService", function() { return ManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagerService = /** @class */ (function () {
    function ManagerService(http) {
        this.http = http;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/managers';
    }
    ManagerService.prototype.getMamagers = function () {
        return this.http.get(this.url);
    };
    ManagerService.prototype.getBossMamagers = function () {
        return this.http.get(this.url);
    };
    ManagerService.prototype.getManager = function (managerId) {
        return this.http.get(this.url + "/" + managerId);
    };
    ManagerService.prototype.addManager = function (manager) {
        return this.http.post("" + this.url, manager);
    };
    ManagerService.prototype.updateManager = function (manager) {
        return this.http.put(this.url + "/" + manager.id, manager);
    };
    ManagerService.prototype.deleteManager = function (managerId) {
        return this.http.delete(this.url + "/" + managerId);
    };
    ManagerService.prototype.setManagerStatus = function (managerId, deletedStatus) {
        return this.http.put(this.url + "/" + managerId + "/status/" + deletedStatus, null);
    };
    ManagerService.prototype.uploadNewImageFile = function (managerId, file) {
        var fd = new FormData();
        fd.append('image', file, file.name);
        return this.http.post(this.url + "/" + managerId + "/uploadImage", fd);
    };
    ManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ManagerService);
    return ManagerService;
}());



/***/ }),

/***/ "./src/app/order-management/forms/order-customer-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/order-management/forms/order-customer-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order-management/forms/order-customer-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/order-management/forms/order-customer-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Order Creator</h2>\n  <form (ngSubmit)=\"onSubmit()\" #orderCreatorrForm=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label for=\"product\" id=\"productLabel\">Product</label>\n      <select class=\"custom-select\" [(ngModel)]=\"selectedProductId\" id=\"product\" aria-describedby=\"productLabel\"\n        #product=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\n        <option *ngFor=\"let product of products\" [ngValue]=\"product.id\">{{product.name}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"amount\" id=\"amountLabel\">Product Amount</label>\n      <input type=\"text\" class=\"form-control\" id=\"amount\" aria-describedby=\"amountLabel\" required\n        [(ngModel)]=\"order.productAmount\" name=\"amount\" #amount=\"ngModel\">\n      <div *ngIf=\"amount.invalid && (amount.dirty || amount.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"amount.errors.required\">Product Amount is required.</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\" id=\"descriptionLabel\">Order Description</label>\n      <textarea class=\"form-control\" id=\"description\" aria-describedby=\"descriptionLabel\" rows=\"4\" maxlength=\"300\"\n        [(ngModel)]=\"order.description\" name=\"description\" #description=\"ngModel\">\n      </textarea>\n    </div>\n\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Cancel group\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCancel()\">Back</button>\n      </div>\n      <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Save group\">\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/order-management/forms/order-customer-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/order-management/forms/order-customer-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrderCustomerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCustomerFormComponent", function() { return OrderCustomerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/order.service */ "./src/app/order-management/services/order.service.ts");
/* harmony import */ var _models_order_list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/order-list-item */ "./src/app/order-management/models/order-list-item.ts");
/* harmony import */ var _product_management_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product-management/services/product.service */ "./src/app/product-management/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderCustomerFormComponent = /** @class */ (function () {
    function OrderCustomerFormComponent(route, router, orderService, productService) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.productService = productService;
        this.order = new _models_order_list_item__WEBPACK_IMPORTED_MODULE_3__["OrderListItem"](0, "", "", 0, "", 0, 1, 0);
    }
    OrderCustomerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (p) { return _this.products = p; });
        this.route.params.subscribe(function (p) {
            _this.customerId = p['customerId'];
        });
        this.order.customerId = this.customerId;
    };
    OrderCustomerFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.order.productId = this.selectedProductId;
        this.orderService.addOrder(this.order).subscribe(function (o) { return _this.navigateToCustomerOrders(); });
    };
    OrderCustomerFormComponent.prototype.onCancel = function () {
        this.navigateToCustomerOrders();
    };
    OrderCustomerFormComponent.prototype.navigateToCustomerOrders = function () {
        this.router.navigateByUrl("/customers/" + this.customerId + "/orders");
    };
    OrderCustomerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-customer-form',
            template: __webpack_require__(/*! ./order-customer-form.component.html */ "./src/app/order-management/forms/order-customer-form.component.html"),
            styles: [__webpack_require__(/*! ./order-customer-form.component.css */ "./src/app/order-management/forms/order-customer-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _product_management_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], OrderCustomerFormComponent);
    return OrderCustomerFormComponent;
}());



/***/ }),

/***/ "./src/app/order-management/forms/order-product-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/order-management/forms/order-product-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order-management/forms/order-product-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/order-management/forms/order-product-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Adding product to order</h2>\n  <form (ngSubmit)=\"onSubmit()\" #orderProductCreatorForm=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label for=\"product\" id=\"productLabel\">Product</label>\n      <select class=\"custom-select\" [(ngModel)]=\"selectedProductId\" id=\"product\" aria-describedby=\"productLabel\"\n        #product=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\n        <option *ngFor=\"let product of products\" [ngValue]=\"product.id\">{{product.name}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"amount\" id=\"amountLabel\">Product Amount</label>\n      <input type=\"text\" class=\"form-control\" id=\"amount\" aria-describedby=\"amountLabel\" required\n        [(ngModel)]=\"orderProduct.amount\" name=\"amount\" #amount=\"ngModel\">\n      <div *ngIf=\"amount.invalid && (amount.dirty || amount.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"amount.errors.required\">Product Amount is required.</div>\n      </div>\n    </div>\n\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Cancel group\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCancel()\">Back</button>\n      </div>\n      <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Save group\">\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/order-management/forms/order-product-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/order-management/forms/order-product-form.component.ts ***!
  \************************************************************************/
/*! exports provided: OrderProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderProductFormComponent", function() { return OrderProductFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/order.service */ "./src/app/order-management/services/order.service.ts");
/* harmony import */ var _models_order_product_list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/order-product-list-item */ "./src/app/order-management/models/order-product-list-item.ts");
/* harmony import */ var _product_management_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product-management/services/product.service */ "./src/app/product-management/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderProductFormComponent = /** @class */ (function () {
    function OrderProductFormComponent(route, router, orderService, productService) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.productService = productService;
        this.orderProduct = new _models_order_product_list_item__WEBPACK_IMPORTED_MODULE_3__["OrderProductListItem"](0, "", 1, 0);
    }
    OrderProductFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (p) { return _this.products = p; });
        this.route.params.subscribe(function (p) {
            _this.orderId = p['orderId'];
        });
    };
    OrderProductFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.orderProduct.itemId = this.selectedProductId;
        this.orderService.addProtuctToOrder(this.orderId, this.orderProduct).subscribe(function (o) { return _this.navigateToOrderProductList(); });
    };
    OrderProductFormComponent.prototype.onCancel = function () {
        this.navigateToOrderProductList();
    };
    OrderProductFormComponent.prototype.navigateToOrderProductList = function () {
        this.router.navigateByUrl("orders/" + this.orderId + "/products");
    };
    OrderProductFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-product-form',
            template: __webpack_require__(/*! ./order-product-form.component.html */ "./src/app/order-management/forms/order-product-form.component.html"),
            styles: [__webpack_require__(/*! ./order-product-form.component.css */ "./src/app/order-management/forms/order-product-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _product_management_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], OrderProductFormComponent);
    return OrderProductFormComponent;
}());



/***/ }),

/***/ "./src/app/order-management/lists/customer-orders-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/order-management/lists/customer-orders-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order-management/lists/customer-orders-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/order-management/lists/customer-orders-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Customer Orders List</h2>\n  <table class=\"table table-nofluid\">\n    <thead>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Status</th>\n      <th scope=\"col\">Description</th>\n      <th scope=\"col\">Total Cost</th>\n      <th scope=\"col\"></th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let order of orders\">\n        <th scope=\"row\">{{order.id}}</th>\n        <td>{{order.orderStatus}}</td>\n        <td>{{order.description}}</td>\n        <td>{{order.totalCost}}</td>\n        <td>\n          <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Product action buttons\">\n            <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"View category group\">\n              <button routerLink=\"/orders/{{order.id}}/products\" type=\"button\" class=\"btn btn-primary\">View products into order</button>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\n    <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Back group\">\n      <button routerLink=\"/customers\" type=\"button\" class=\"btn btn-primary\">Back</button>\n    </div>\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Add group\">\n      <button routerLink=\"/customers/{{customerId}}/order\" type=\"button\" class=\"btn btn-primary\">Add order</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/order-management/lists/customer-orders-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/order-management/lists/customer-orders-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerOrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerOrdersListComponent", function() { return CustomerOrdersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/order.service */ "./src/app/order-management/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerOrdersListComponent = /** @class */ (function () {
    function CustomerOrdersListComponent(route, router, orderService) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
    }
    CustomerOrdersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.customerId = p['customerId'];
        });
        this.orderService.getOrdersByCustomerId(this.customerId).subscribe(function (o) { return _this.orders = o; });
    };
    CustomerOrdersListComponent.prototype.navigateToSections = function () {
        this.router.navigateByUrl("customer/" + this.customerId + "/sections");
    };
    CustomerOrdersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-orders',
            template: __webpack_require__(/*! ./customer-orders-list.component.html */ "./src/app/order-management/lists/customer-orders-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-orders-list.component.css */ "./src/app/order-management/lists/customer-orders-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]])
    ], CustomerOrdersListComponent);
    return CustomerOrdersListComponent;
}());



/***/ }),

/***/ "./src/app/order-management/lists/order-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/order-management/lists/order-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order-management/lists/order-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/order-management/lists/order-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Order List</h2>\n  <table class=\"table table-nofluid\">\n    <thead>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Status</th>\n      <th scope=\"col\">Description</th>\n      <th scope=\"col\">Total Cost</th>\n      <th scope=\"col\"></th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let order of orders\">\n        <th scope=\"row\">{{order.id}}</th>\n        <td>{{order.orderStatus}}</td>\n        <td>{{order.description}}</td>\n        <td>{{order.totalCost}}</td>\n        <td>\n          <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Product action buttons\">\n            <!-- <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\">\n              <button type=\"button\" class=\"btn btn-warning\">Deleted</button>\n            </div> -->\n            <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"View category group\">\n              <button routerLink=\"/orders/{{order.id}}/products\" type=\"button\" class=\"btn btn-primary\">View products in order</button>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/order-management/lists/order-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/order-management/lists/order-list.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/order.service */ "./src/app/order-management/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(route, router, orderService) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
    }
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (o) { return _this.orders = o; });
    };
    OrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-list',
            template: __webpack_require__(/*! ./order-list.component.html */ "./src/app/order-management/lists/order-list.component.html"),
            styles: [__webpack_require__(/*! ./order-list.component.css */ "./src/app/order-management/lists/order-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "./src/app/order-management/lists/order-products-info-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/order-management/lists/order-products-info-list.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order-management/lists/order-products-info-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/order-management/lists/order-products-info-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>Order Products List</h2>\r\n    <table class=\"table table-nofluid\">\r\n      <thead>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">Product Name</th>\r\n        <th scope=\"col\">Product Amount</th>\r\n        <th scope=\"col\">Product Price</th>\r\n        <th scope=\"col\"></th>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let product of products\">\r\n          <th scope=\"row\">{{product.itemId}}</th>\r\n          <td>{{product.productName}}</td>\r\n          <td>{{product.amount}}</td>\r\n          <td>{{product.productPrice}}</td>\r\n          <td>\r\n            <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Product action buttons\">\r\n              <!-- <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\">\r\n                <button type=\"button\" class=\"btn btn-warning\">Deleted</button>\r\n              </div> -->\r\n              <!-- <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"View category group\">\r\n                <button routerLink=\"/orders/{{orderId}}/products\" type=\"button\" class=\"btn btn-primary\">View category products</button>\r\n              </div> -->\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n        <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Back group\">\r\n          <button routerLink=\"/customers\" type=\"button\" class=\"btn btn-primary\">Back</button>\r\n        </div>\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Add group\">\r\n          <button routerLink=\"/orders/{{orderId}}/product\" type=\"button\" class=\"btn btn-primary\">Add products to order</button>\r\n        </div>\r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/order-management/lists/order-products-info-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/order-management/lists/order-products-info-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: OrderProductsInfoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderProductsInfoListComponent", function() { return OrderProductsInfoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/order.service */ "./src/app/order-management/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderProductsInfoListComponent = /** @class */ (function () {
    function OrderProductsInfoListComponent(route, router, orderService) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
    }
    OrderProductsInfoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.orderId = p['orderId'];
        });
        //this.orderService.getOrder(this.orderId).subscribe(o => this.order = o);
        this.orderService.getProductsInfo(this.orderId).subscribe(function (o) { return _this.products = o; });
    };
    OrderProductsInfoListComponent.prototype.navigateToBack = function () {
    };
    OrderProductsInfoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-products-info-list',
            template: __webpack_require__(/*! ./order-products-info-list.component.html */ "./src/app/order-management/lists/order-products-info-list.component.html"),
            styles: [__webpack_require__(/*! ./order-products-info-list.component.css */ "./src/app/order-management/lists/order-products-info-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]])
    ], OrderProductsInfoListComponent);
    return OrderProductsInfoListComponent;
}());



/***/ }),

/***/ "./src/app/order-management/models/order-list-item.ts":
/*!************************************************************!*\
  !*** ./src/app/order-management/models/order-list-item.ts ***!
  \************************************************************/
/*! exports provided: OrderListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListItem", function() { return OrderListItem; });
var OrderListItem = /** @class */ (function () {
    function OrderListItem(id, orderStatus, totalCost, managerId, description, customerId, productAmount, productId) {
        this.id = id;
        this.orderStatus = orderStatus;
        this.totalCost = totalCost;
        this.managerId = managerId;
        this.description = description;
        this.customerId = customerId;
        this.productAmount = productAmount;
        this.productId = productId;
    }
    return OrderListItem;
}());



/***/ }),

/***/ "./src/app/order-management/models/order-product-list-item.ts":
/*!********************************************************************!*\
  !*** ./src/app/order-management/models/order-product-list-item.ts ***!
  \********************************************************************/
/*! exports provided: OrderProductListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderProductListItem", function() { return OrderProductListItem; });
var OrderProductListItem = /** @class */ (function () {
    function OrderProductListItem(itemId, productName, amount, productPrice) {
        this.itemId = itemId;
        this.productName = productName;
        this.amount = amount;
        this.productPrice = productPrice;
    }
    return OrderProductListItem;
}());



/***/ }),

/***/ "./src/app/order-management/services/order.service.ts":
/*!************************************************************!*\
  !*** ./src/app/order-management/services/order.service.ts ***!
  \************************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/orders';
    }
    OrderService.prototype.getOrders = function () {
        return this.http.get(this.url);
    };
    OrderService.prototype.getOrdersByCustomerId = function (customerId) {
        return this.http.get(this.url + "/" + customerId + "/orders");
    };
    OrderService.prototype.addOrder = function (order) {
        return this.http.post(this.url, order);
    };
    OrderService.prototype.getProductsInfo = function (orderId) {
        return this.http.get(this.url + "/" + orderId + "/products");
    };
    OrderService.prototype.getOrder = function (orderId) {
        return this.http.get(this.url + "/" + orderId);
    };
    OrderService.prototype.addProtuctToOrder = function (orderId, productItem) {
        return this.http.put(this.url + "/" + orderId, productItem);
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/product-management/forms/product-category-form.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/product-management/forms/product-category-form.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-management/forms/product-category-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/product-management/forms/product-category-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Product Category Editor</h2>\r\n  <form (ngSubmit)=\"onSubmit()\" #productCategoryForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf='existed'>\r\n      <label for=\"idLabel\">ID</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"id\" aria-describedby=\"idLabel\" [(ngModel)]=\"productCategory.id\" name=\"id\" #id=\"ngModel\"\r\n        readonly>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" id=\"nameLabel\">Product Category Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"nameLabel\" minlength=\"4\" maxlength=\"60\" required [(ngModel)]=\"productCategory.name\"\r\n        name=\"name\" #name=\"ngModel\">\r\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"name.errors.required\">Product Category Name is required.</div>\r\n        <div *ngIf=\"name.errors.minlength\">Product Category Name must be at least 4 characters long.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"code\" id=\"codeLabel\">Product Category Code</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"code\" aria-describedby=\"codeLabel\" minlength=\"5\" maxlength=\"5\" required [(ngModel)]=\"productCategory.code\"\r\n        name=\"code\" #code=\"ngModel\">\r\n      <div *ngIf=\"code.invalid && (code.dirty || code.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"code.errors.required\">Product Category Code is required.</div>\r\n        <div *ngIf=\"code.errors.minlength\">Product Category code must be at least 5 characters long.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"description\" id=\"descriptionLabel\">Product Category Description</label>\r\n      <textarea class=\"form-control\" id=\"description\" aria-describedby=\"descriptionLabel\" rows=\"4\" maxlength=\"300\" [(ngModel)]=\"productCategory.description\"\r\n        name=\"description\" #description=\"ngModel\">\r\n      </textarea>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf='existed'>\r\n      <label for=\"lastUpdated\" id=\"lastUpdatedLabel\">Last Update</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"lastUpdated\" aria-describedby=\"lastUpdatedLabel\" required [(ngModel)]=\"productCategory.lastUpdated\"\r\n        name=\"lastUpdated\" #lastUpdated=\"ngModel\" readonly>\r\n    </div>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Cancel group\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCancel()\">Back</button>\r\n      </div>\r\n      <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Save group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      </div>\r\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"existed && !productCategory.isDeleted\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onDelete()\">Delete</button>\r\n      </div>\r\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Purge group\" *ngIf=\"existed && productCategory.isDeleted\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onUndelete()\">Undelete</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onPurge()\">Purge</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-management/forms/product-category-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/product-management/forms/product-category-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductCategoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryFormComponent", function() { return ProductCategoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_product_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product-category */ "./src/app/product-management/models/product-category.ts");
/* harmony import */ var _services_product_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product-category.service */ "./src/app/product-management/services/product-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductCategoryFormComponent = /** @class */ (function () {
    function ProductCategoryFormComponent(route, router, productCategoryService) {
        this.route = route;
        this.router = router;
        this.productCategoryService = productCategoryService;
        this.productCategory = new _models_product_category__WEBPACK_IMPORTED_MODULE_2__["ProductCategory"](0, "My New Category", "CATE1", "Category description", false, "");
        this.existed = false;
    }
    ProductCategoryFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            if (p['id'] === undefined)
                return;
            _this.productCategoryService.getProductCategory(p['id']).subscribe(function (c) { return _this.productCategory = c; });
            _this.existed = true;
        });
    };
    ProductCategoryFormComponent.prototype.navigateToCategories = function () {
        this.router.navigate(['/categories']);
    };
    ProductCategoryFormComponent.prototype.onCancel = function () {
        this.navigateToCategories();
    };
    ProductCategoryFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.existed) {
            this.productCategoryService.updateProductCategory(this.productCategory).subscribe(function (c) { return _this.navigateToCategories(); });
        }
        else {
            this.productCategoryService.addProductCategory(this.productCategory).subscribe(function (c) { return _this.navigateToCategories(); });
        }
    };
    ProductCategoryFormComponent.prototype.onDelete = function () {
        var _this = this;
        this.productCategoryService.setProductCategoryStatus(this.productCategory.id, true).subscribe(function (c) { return _this.productCategory.isDeleted = true; });
    };
    ProductCategoryFormComponent.prototype.onUndelete = function () {
        var _this = this;
        this.productCategoryService.setProductCategoryStatus(this.productCategory.id, false).subscribe(function (c) { return _this.productCategory.isDeleted = false; });
    };
    ProductCategoryFormComponent.prototype.onPurge = function () {
        var _this = this;
        this.productCategoryService.deleteProductCategory(this.productCategory.id).subscribe(function (c) { return _this.navigateToCategories(); });
    };
    ProductCategoryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-category-form',
            template: __webpack_require__(/*! ./product-category-form.component.html */ "./src/app/product-management/forms/product-category-form.component.html"),
            styles: [__webpack_require__(/*! ./product-category-form.component.css */ "./src/app/product-management/forms/product-category-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_product_category_service__WEBPACK_IMPORTED_MODULE_3__["ProductCategoryService"]])
    ], ProductCategoryFormComponent);
    return ProductCategoryFormComponent;
}());



/***/ }),

/***/ "./src/app/product-management/forms/product-form.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product-management/forms/product-form.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-management/forms/product-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product-management/forms/product-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Product Editor</h2>\r\n  <form (ngSubmit)=\"onSubmit()\" #productEditorForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"existed\">\r\n      <label for=\"idLabel\">ID</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"id\" aria-describedby=\"idLabel\" [(ngModel)]=\"product.id\" name=\"id\" #id=\"ngModel\"\r\n        readonly>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" id=\"nameLabel\">Product Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"nameLabel\" minlength=\"4\" maxlength=\"60\" required [(ngModel)]=\"product.name\"\r\n        name=\"name\" #name=\"ngModel\">\r\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"name.errors.required\">Product Name is required.</div>\r\n        <div *ngIf=\"name.errors.minlength\">Product Name must be at least 4 characters long.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"code\" id=\"codeLabel\">Product Code</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"code\" aria-describedby=\"codeLabel\" minlength=\"5\" maxlength=\"5\" required [(ngModel)]=\"product.code\"\r\n        name=\"code\" #code=\"ngModel\">  \r\n      <div *ngIf=\"code.invalid && (code.dirty || code.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"code.errors.required\">Product Code is required.</div>\r\n        <div *ngIf=\"code.errors.minlength\">Product Code must be at least 5 characters long.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"category\" id=\"categoryLabel\">Product Category</label>\r\n      <select class=\"custom-select\" [(ngModel)]=\"product.id\" id=\"category\" aria-describedby=\"categoryLabel\" #category=\"ngModel\"\r\n        [ngModelOptions]=\"{standalone: true}\">\r\n        <option *ngFor=\"let category of productCategories\" [ngValue]=\"category.id\">{{category.name}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"description\" id=\"descriptionLabel\">Product Description</label>\r\n      <textarea class=\"form-control\" id=\"description\" aria-describedby=\"descriptionLabel\" rows=\"4\" maxlength=\"300\" [(ngModel)]=\"product.description\"\r\n        name=\"description\" #description=\"ngModel\">\r\n      </textarea>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"manufacturerCode\" id=\"manufacturerCodeLabel\">Manufacturer Code</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"manufacturerCode\" aria-describedby=\"manufacturerCodeLabel\" minlength=\"4\" maxlength=\"10\"\r\n        required [(ngModel)]=\"product.manufacturerCode\" name=\"manufacturerCode\" #manufacturerCode=\"ngModel\">\r\n      <div *ngIf=\"manufacturerCode.invalid && (manufacturerCode.dirty || manufacturerCode.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"manufacturerCode.errors.required\">Manufacturer Code is required.</div>\r\n        <div *ngIf=\"manufacturerCode.errors.minlength\">Manufacturer Code must be at least 10 characters long.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"price\" id=\"priceLabel\">Product Price</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"price\" aria-describedby=\"priceLabel\" required [(ngModel)]=\"product.price\" name=\"price\"\r\n        #price=\"ngModel\">\r\n      <div *ngIf=\"price.invalid && (price.dirty || price.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"price.errors.required\">Product Price is required.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf='existed'>\r\n      <label for=\"lastUpdated\">Last Update</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"lastUpdated\" aria-describedby=\"lastUpdatedLabel\" required [(ngModel)]=\"product.lastUpdated\"\r\n        name=\"lastUpdated\" #lastUpdated=\"ngModel\" readonly>\r\n    </div>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Cancel group\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCancel()\">Back</button>\r\n      </div>\r\n      <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Save group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      </div>\r\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"existed && !product.isDeleted\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onDelete()\">Delete</button>\r\n      </div>\r\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Purge group\" *ngIf=\"existed && product.isDeleted\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onUndelete()\">Undelete</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onPurge()\">Purge</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/product-management/forms/product-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product-management/forms/product-form.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product */ "./src/app/product-management/models/product.ts");
/* harmony import */ var _services_product_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product-category.service */ "./src/app/product-management/services/product-category.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product.service */ "./src/app/product-management/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(route, router, productService, productCategoryService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.productCategoryService = productCategoryService;
        this.product = new _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](0, "", "", 0, "", "", 0, false, "");
        this.existed = false;
    }
    ProductFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productCategoryService.getProductCategories().subscribe(function (c) { return _this.productCategories = c; });
        this.route.params.subscribe(function (p) {
            _this.categoryId = p['categoryId'];
            if (p['id'] === undefined)
                return;
            _this.productService.getProduct(p['id']).subscribe(function (c) { return _this.product = c; });
            _this.existed = true;
        });
    };
    ProductFormComponent.prototype.navigateTo = function () {
        if (this.categoryId === undefined) {
            this.router.navigate(['/products']);
        }
        else {
            this.router.navigate(["/category/" + this.categoryId + "/products"]);
        }
    };
    ProductFormComponent.prototype.onCancel = function () {
        this.navigateTo();
    };
    ProductFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.existed) {
            this.productService.updateProduct(this.product).subscribe(function (p) { return _this.navigateTo(); });
        }
        else {
            this.product.сategoryId = this.categoryId;
            this.productService.addProduct(this.product).subscribe(function (p) { return _this.navigateTo(); });
        }
    };
    ProductFormComponent.prototype.onDelete = function () {
    };
    ProductFormComponent.prototype.onUndelete = function () {
    };
    ProductFormComponent.prototype.onPurge = function () {
        var _this = this;
        this.productService.deleteProduct(this.product.id).subscribe(function (p) { return _this.navigateTo(); });
    };
    ProductFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/product-management/forms/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/product-management/forms/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _services_product_category_service__WEBPACK_IMPORTED_MODULE_3__["ProductCategoryService"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/product-management/lists/product-category-list.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/product-management/lists/product-category-list.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-management/lists/product-category-list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/product-management/lists/product-category-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Product Category List</h2>\r\n  <table class=\"table table-nonfluid\">\r\n    <thead>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\">Code</th>\r\n      <th scope=\"col\">Name</th>\r\n      <!-- TODO STEP 4 - Add column header here. -->\r\n      <th scope=\"col\">Products</th>\r\n      <th scope=\"col\">Last Update</th>\r\n      <th scope=\"col\"></th>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let productCategory of productCategories\">\r\n        <th scope=\"row\">{{productCategory.id}}</th>\r\n        <td>{{productCategory.code}}</td>\r\n        <td>{{productCategory.name}}</td>\r\n        <!-- TODO STEP 4 - Add row cell here. -->\r\n        <td>{{productCategory.productCount}}</td>\r\n        <td>{{productCategory.lastUpdated}}</td>\r\n        <td>\r\n          <span class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Product category action buttons\" style=\"display: block; white-space:nowrap;\">\r\n            <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"productCategory.isDeleted\">\r\n              <button type=\"button\" class=\"btn btn-warning\">Deleted</button>\r\n            </div>\r\n            <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"View group\">\r\n              <button routerLink=\"/category/{{productCategory.id}}/products\" type=\"button\" class=\"btn btn-primary\">View products</button>\r\n            </div>\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit group\">\r\n              <button routerLink=\"/category/{{productCategory.id}}\" type=\"button\" class=\"btn btn-primary\">Edit</button>\r\n            </div>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Save group\">\r\n      <button routerLink=\"/category\" type=\"button\" class=\"btn btn-primary\">New Product Category</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/product-management/lists/product-category-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/product-management/lists/product-category-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductCategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryListComponent", function() { return ProductCategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product-category.service */ "./src/app/product-management/services/product-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductCategoryListComponent = /** @class */ (function () {
    function ProductCategoryListComponent(productCategoryService) {
        this.productCategoryService = productCategoryService;
    }
    ProductCategoryListComponent.prototype.ngOnInit = function () {
        this.getProductCategories();
    };
    ProductCategoryListComponent.prototype.onSelect = function (productCategory) {
        this.selectedProductCategory = productCategory;
    };
    ProductCategoryListComponent.prototype.getProductCategories = function () {
        var _this = this;
        this.productCategoryService.getProductCategories().subscribe(function (c) { return _this.productCategories = c; });
    };
    ProductCategoryListComponent.prototype.enableProductCategory = function () {
    };
    ProductCategoryListComponent.prototype.disableProductCategory = function () {
    };
    ProductCategoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-category-list',
            template: __webpack_require__(/*! ./product-category-list.component.html */ "./src/app/product-management/lists/product-category-list.component.html"),
            styles: [__webpack_require__(/*! ./product-category-list.component.css */ "./src/app/product-management/lists/product-category-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_category_service__WEBPACK_IMPORTED_MODULE_1__["ProductCategoryService"]])
    ], ProductCategoryListComponent);
    return ProductCategoryListComponent;
}());



/***/ }),

/***/ "./src/app/product-management/lists/product-category-product-list.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/product-management/lists/product-category-product-list.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-management/lists/product-category-product-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/product-management/lists/product-category-product-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Products for Category</h2>\r\n  <table class=\"table table-nonfluid\">\r\n    <thead>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\">Code</th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\">Last Update</th>\r\n      <th scope=\"col\"></th>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let product of products\">\r\n        <th scope=\"row\">{{product.id}}</th>\r\n        <td>{{product.code}}</td>\r\n        <td>{{product.name}}</td>\r\n        <td>{{product.lastUpdated}}</td>\r\n        <td>\r\n          <span class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Product category action buttons\" style=\"display: block; white-space:nowrap;\">\r\n            <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete product\" *ngIf=\"product.isDeleted\">\r\n              <button type=\"button\" class=\"btn btn-danger\">Deleted</button>\r\n            </div>\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit product\">\r\n              <button routerLink=\"/category/{{this.categoryId}}/product/{{product.id}}\" type=\"button\" class=\"btn btn-primary\">Edit</button>\r\n            </div>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Back group\">\r\n      <button routerLink=\"/categories\" type=\"button\" class=\"btn btn-primary\">View categories</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/product-management/lists/product-category-product-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/product-management/lists/product-category-product-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductCategoryProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryProductListComponent", function() { return ProductCategoryProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/product-management/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCategoryProductListComponent = /** @class */ (function () {
    function ProductCategoryProductListComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
    }
    ProductCategoryProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.categoryId = p['id'];
            _this.productService.getCategoryProducts(p['id']).subscribe(function (p) { return _this.products = p; });
        });
    };
    ProductCategoryProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-category-product-list',
            template: __webpack_require__(/*! ./product-category-product-list.component.html */ "./src/app/product-management/lists/product-category-product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-category-product-list.component.css */ "./src/app/product-management/lists/product-category-product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductCategoryProductListComponent);
    return ProductCategoryProductListComponent;
}());



/***/ }),

/***/ "./src/app/product-management/lists/product-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product-management/lists/product-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-management/lists/product-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product-management/lists/product-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Product List</h2>\r\n  <table class=\"table table-nofluid\">\r\n    <thead>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\">Code</th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\">Category</th>\r\n      <th scope=\"col\">Last Update</th>\r\n      <th scope=\"col\"></th>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let product of products\">\r\n        <th scope=\"row\">{{product.id}}</th>\r\n        <td>{{product.code}}</td>\r\n        <td>{{product.name}}</td>\r\n        <td>{{product.categoryCode}}</td>\r\n        <td>{{product.lastUpdated}}</td>\r\n        <td>\r\n          <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Product action buttons\">\r\n            <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"product.isDeleted\">\r\n              <button type=\"button\" class=\"btn btn-warning\">Deleted</button>\r\n            </div>\r\n            <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"View category group\">\r\n              <button routerLink=\"/category/{{product.categoryId}}/products\" type=\"button\" class=\"btn btn-primary\">View category products</button>\r\n            </div>\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit group\">\r\n              <button routerLink=\"/product/{{product.id}}\" type=\"button\" class=\"btn btn-primary\">Edit</button>\r\n            </div>\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Ordere product\">\r\n              <button routerLink=\"/order\" type=\"button\" class=\"btn btn-primary\">Order Product</button>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/product-management/lists/product-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product-management/lists/product-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/product-management/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (p) { return _this.products = p; });
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-management/lists/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-management/lists/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product-management/models/product-category.ts":
/*!***************************************************************!*\
  !*** ./src/app/product-management/models/product-category.ts ***!
  \***************************************************************/
/*! exports provided: ProductCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategory", function() { return ProductCategory; });
var ProductCategory = /** @class */ (function () {
    function ProductCategory(id, name, code, description, isDeleted, lastUpdated) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.description = description;
        this.isDeleted = isDeleted;
        this.lastUpdated = lastUpdated;
    }
    return ProductCategory;
}());



/***/ }),

/***/ "./src/app/product-management/models/product.ts":
/*!******************************************************!*\
  !*** ./src/app/product-management/models/product.ts ***!
  \******************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, code, name, сategoryId, description, manufacturerCode, price, isDeleted, lastUpdated) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.сategoryId = сategoryId;
        this.description = description;
        this.manufacturerCode = manufacturerCode;
        this.price = price;
        this.isDeleted = isDeleted;
        this.lastUpdated = lastUpdated;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/product-management/services/product-category.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/product-management/services/product-category.service.ts ***!
  \*************************************************************************/
/*! exports provided: ProductCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryService", function() { return ProductCategoryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCategoryService = /** @class */ (function () {
    function ProductCategoryService(http) {
        this.http = http;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/categories/';
    }
    ProductCategoryService.prototype.getProductCategories = function () {
        return this.http.get(this.url);
    };
    ProductCategoryService.prototype.getProductCategory = function (productCategoryId) {
        return this.http.get("" + this.url + productCategoryId);
    };
    ProductCategoryService.prototype.addProductCategory = function (productCategory) {
        return this.http.post(this.url, productCategory);
    };
    ProductCategoryService.prototype.updateProductCategory = function (productCategory) {
        return this.http.put("" + this.url + productCategory.id, productCategory);
    };
    ProductCategoryService.prototype.deleteProductCategory = function (productCategoryId) {
        return this.http.delete("" + this.url + productCategoryId);
    };
    ProductCategoryService.prototype.setProductCategoryStatus = function (productCategoryId, deletedStatus) {
        return this.http.put("" + this.url + productCategoryId + "/status/" + deletedStatus, null);
    };
    ProductCategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ProductCategoryService);
    return ProductCategoryService;
}());



/***/ }),

/***/ "./src/app/product-management/services/product.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/product-management/services/product.service.ts ***!
  \****************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/products/';
        this.categoryUrl = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/categories/';
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.url);
    };
    ProductService.prototype.getProduct = function (productId) {
        return this.http.get("" + this.url + productId);
    };
    ProductService.prototype.getCategoryProducts = function (productCategoryId) {
        return this.http.get("" + this.categoryUrl + productCategoryId + "/products");
    };
    ProductService.prototype.addProduct = function (product) {
        return this.http.post("" + this.url, product);
    };
    ProductService.prototype.updateProduct = function (product) {
        return this.http.put("" + this.url + product.id, product);
    };
    ProductService.prototype.deleteProduct = function (productId) {
        return this.http.delete("" + this.url + productId);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);

var environment = {
    production: false,
    //apiUrl: 'https://katla-sport-back-end.azurewebsites.net/',
    apiUrl: 'http://localhost:56952/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Education\epam-lab\katlasport-front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map