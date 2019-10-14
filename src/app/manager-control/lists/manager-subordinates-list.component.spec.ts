import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSubordinatesListComponent } from './manager-subordinates-list.component';

describe('ManagerSubordinatesListComponent', () => {
  let component: ManagerSubordinatesListComponent;
  let fixture: ComponentFixture<ManagerSubordinatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSubordinatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSubordinatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
