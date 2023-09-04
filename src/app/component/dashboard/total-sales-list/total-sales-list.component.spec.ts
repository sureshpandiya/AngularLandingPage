import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSalesListComponent } from './total-sales-list.component';

describe('TotalSalesListComponent', () => {
  let component: TotalSalesListComponent;
  let fixture: ComponentFixture<TotalSalesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalSalesListComponent]
    });
    fixture = TestBed.createComponent(TotalSalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
