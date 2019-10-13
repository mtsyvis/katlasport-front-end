import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { OrderListItem } from '../models/order-list-item';
import { ProductListItem } from '../../product-management/models/product-list-item';
import { ProductService } from '../../product-management/services/product.service';

@Component({
  selector: 'app-order-customer-form',
  templateUrl: './order-customer-form.component.html',
  styleUrls: ['./order-customer-form.component.css']
})
export class OrderCustomerFormComponent implements OnInit {
  order = new OrderListItem(0, "", "", 0, "", 0, 1, 0);
  products: ProductListItem[];
  customerId: number;
  selectedProductId: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(p => this.products = p);
    this.route.params.subscribe(p => {
      this.customerId = p['customerId'];
    })
    this.order.customerId = this.customerId;
  }

  onSubmit() {
    this.order.productId = this.selectedProductId;
    this.orderService.addOrder(this.order).subscribe(o => this.navigateToCustomerOrders());
  }

  onCancel() {
    this.navigateToCustomerOrders();
  }

  navigateToCustomerOrders() {
    this.router.navigateByUrl(`/customers/${this.customerId}/orders`);
  }

}
