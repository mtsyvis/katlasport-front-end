import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = environment.apiUrl + 'api/customers/';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(this.url + "show");
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.url + `show/${id}`);
  }
  
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.url}create`, customer);
  }

  updateCustomer(customer: Customer): Observable<Object> {
    return this.http.post<Object>(`${this.url}update/${customer.id}`, customer);
  }

  deleteCustomer(id:number): Observable<Object>{
    return this.http.post<Object>(`${this.url}destroy/${id}`, null);
  }
}
