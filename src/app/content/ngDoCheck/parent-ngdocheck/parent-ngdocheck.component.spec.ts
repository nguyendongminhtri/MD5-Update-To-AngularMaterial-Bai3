import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNgdocheckComponent } from './parent-ngdocheck.component';

describe('ParentNgdocheckComponent', () => {
  let component: ParentNgdocheckComponent;
  let fixture: ComponentFixture<ParentNgdocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentNgdocheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNgdocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
