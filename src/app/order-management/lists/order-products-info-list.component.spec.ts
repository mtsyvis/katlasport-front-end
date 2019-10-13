import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductsInfoListComponent } from './order-products-info-list.component';

describe('OrderProductsInfoListComponent', () => {
  let component: OrderProductsInfoListComponent;
  let fixture: ComponentFixture<OrderProductsInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderProductsInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProductsInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
