import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { from } from 'rxjs';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customer = new Customer(0, "", "", "");
  existed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined)
        return;
      this.customer
      this.customerService.getCustomer(p['id']).subscribe(c => this.customer = c);
      this.existed = true;
    })
  }

  navigateToCustomers() {
    this.router.navigate(['/customers']);
  }

  onCancel() {
    this.navigateToCustomers();
  }

  onSubmit() {
    if (this.existed) {
      this.customerService.updateCustomer(this.customer).subscribe(h => this.navigateToCustomers());
    } else {
      this.customerService.addCustomer(this.customer).subscribe(h => this.navigateToCustomers());
    }
  }

  onDelete() {
    
      this.customerService.deleteCustomer(this.customer.id).subscribe(h => this.navigateToCustomers());
  }

}
