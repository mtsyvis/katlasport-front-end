import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductFormComponent } from './order-product-form.component';

describe('OrderProductFormComponent', () => {
  let component: OrderProductFormComponent;
  let fixture: ComponentFixture<OrderProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
