import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNgondestroyComponent } from './parent-ngondestroy.component';

describe('ParentNgondestroyComponent', () => {
  let component: ParentNgondestroyComponent;
  let fixture: ComponentFixture<ParentNgondestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentNgondestroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNgondestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
