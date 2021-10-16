import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNgonchangeComponent } from './parent-ngonchange.component';

describe('ParentNgonchangeComponent', () => {
  let component: ParentNgonchangeComponent;
  let fixture: ComponentFixture<ParentNgonchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentNgonchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNgonchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
