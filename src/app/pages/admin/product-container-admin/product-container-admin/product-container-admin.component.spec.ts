import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductContainerAdminComponent } from './product-container-admin.component';

describe('ProductContainerAdminComponent', () => {
  let component: ProductContainerAdminComponent;
  let fixture: ComponentFixture<ProductContainerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductContainerAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductContainerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
