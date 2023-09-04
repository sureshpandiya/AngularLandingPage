import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalOrderComponent } from './total-order.component';

describe('TotalOrderComponent', () => {
  let component: TotalOrderComponent;
  let fixture: ComponentFixture<TotalOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalOrderComponent]
    });
    fixture = TestBed.createComponent(TotalOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
