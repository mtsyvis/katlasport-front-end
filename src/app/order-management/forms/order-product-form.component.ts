import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { OrderProductListItem } from '../models/order-product-list-item';
import { ProductListItem } from '../../product-management/models/product-list-item';
import { ProductService } from '../../product-management/services/product.service';

@Component({
  selector: 'app-order-product-form',
  templateUrl: './order-product-form.component.html',
  styleUrls: ['./order-product-form.component.css']
})
export class OrderProductFormComponent implements OnInit {
  orderProduct = new OrderProductListItem(0, "", 1, 0);
  products: ProductListItem[];
  selectedProductId: number;
  orderId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(p => this.products = p);

    this.route.params.subscribe(p => {
      this.orderId = p['orderId'];
    })
  }

  onSubmit() {
    this.orderProduct.itemId = this.selectedProductId;
    this.orderService.addProtuctToOrder(this.orderId, this.orderProduct).subscribe(o => this.navigateToOrderProductList());
  }

  onCancel() {
    this.navigateToOrderProductList();
  }

  navigateToOrderProductList() {
    this.router.navigateByUrl(`orders/${this.orderId}/products`);
  }
}
