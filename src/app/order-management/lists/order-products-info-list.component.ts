import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { OrderProductListItem } from '../models/order-product-list-item'
import { OrderListItem } from '../models/order-list-item';
import { from } from 'rxjs';

@Component({
  selector: 'app-order-products-info-list',
  templateUrl: './order-products-info-list.component.html',
  styleUrls: ['./order-products-info-list.component.css']
})
export class OrderProductsInfoListComponent implements OnInit {
  products: OrderProductListItem[];
  orderId: number;
  order: OrderListItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.orderId = p['orderId'];
    })

    //this.orderService.getOrder(this.orderId).subscribe(o => this.order = o);
    this.orderService.getProductsInfo(this.orderId).subscribe(o => this.products = o);
  }

}
