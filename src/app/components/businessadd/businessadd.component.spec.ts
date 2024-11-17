import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessaddComponent } from './businessadd.component';

describe('BusinessaddComponent', () => {
  let component: BusinessaddComponent;
  let fixture: ComponentFixture<BusinessaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
