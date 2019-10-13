import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, from } from 'rxjs';
import { OrderListItem } from '../models/order-list-item';
import { OrderProductListItem } from '../models/order-product-list-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = environment.apiUrl + 'api/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Array<OrderListItem>> {
    return this.http.get<Array<OrderListItem>>(this.url);
  }

  getOrdersByCustomerId(customerId: number): Observable<Array<OrderListItem>> {
    return this.http.get<Array<OrderListItem>>(`${this.url}/${customerId}/orders`);
  }

  addOrder(order: OrderListItem): Observable<OrderListItem> {
    return this.http.post<OrderListItem>(this.url, order);
  }

  getProductsInfo(orderId: number): Observable<Array<OrderProductListItem>> {
    return this.http.get<Array<OrderProductListItem>>(`${this.url}/${orderId}/products`);
  }

  getOrder(orderId: number): Observable<OrderListItem> {
    return this.http.get<OrderListItem>(`${this.url}/${orderId}`);
  }

  addProtuctToOrder(orderId: number, productItem: OrderProductListItem): Observable<OrderProductListItem> {
    return this.http.put<OrderProductListItem>(`${this.url}/${orderId}`, productItem);
  }
}
