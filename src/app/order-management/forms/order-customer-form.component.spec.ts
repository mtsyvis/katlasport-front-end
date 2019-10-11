import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCustomerFormComponent } from './order-customer-form.component';

describe('OrderCustomerFormComponent', () => {
  let component: OrderCustomerFormComponent;
  let fixture: ComponentFixture<OrderCustomerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCustomerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
