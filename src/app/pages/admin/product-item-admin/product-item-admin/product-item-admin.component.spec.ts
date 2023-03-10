import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemAdminComponent } from './product-item-admin.component';

describe('ProductItemAdminComponent', () => {
  let component: ProductItemAdminComponent;
  let fixture: ComponentFixture<ProductItemAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
