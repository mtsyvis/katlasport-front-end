import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { OrderListItem } from '../models/order-list-item';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders-list.component.html',
  styleUrls: ['./customer-orders-list.component.css']
})
export class CustomerOrdersListComponent implements OnInit {
  orders: OrderListItem[];
  customerId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.customerId = p['customerId'];
    })
    this.orderService.getOrdersByCustomerId(this.customerId).subscribe(o => this.orders = o);
  }

  navigateToSections() {
    this.router.navigateByUrl(`customer/${this.customerId}/sections`);
  }

}
